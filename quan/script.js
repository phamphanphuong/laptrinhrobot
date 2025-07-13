// --- Cấu hình MQTT (Đảm bảo khớp với ESP32 của bạn) ---
const MQTT_BROKER_HOST = '06e8b6781884440da3ee8bcff720af3f.s1.eu.hivemq.cloud';
const MQTT_BROKER_PORT = 8884; // Sử dụng cổng 8884 cho WebSocket Secure
const MQTT_USERNAME = 'doremon';
const MQTT_PASSWORD = 'Doremon123';
const MQTT_CLIENT_ID = 'WebDashboard_Phuong_' + Math.random().toString(16).substr(2, 8); // ID duy nhất

// --- MQTT Topics (Đảm bảo khớp với ESP32 của bạn) ---
const TOPIC_LED1_CONTROL = "esp32/led1_control";
const TOPIC_LED2_CONTROL = "esp32/led2_control";
const TOPIC_BUTTON1_STATUS = "esp32/button1_status";
const TOPIC_BUTTON2_STATUS = "esp32/button2_status";
const TOPIC_LED1_STATUS = "esp32/led1_status";
const TOPIC_LED2_STATUS = "esp32/led2_status";
const TOPIC_OLED_TEXT_CONTROL = "esp32/oled_text";
const TOPIC_ONLINE_STATUS = "esp32/online_status";
const TOPIC_GENERAL_STATUS = "esp32/general_status";
const TOPIC_TEMPERATURE = "esp32/temperature"; // Topic cho Nhiệt độ
const TOPIC_HUMIDITY = "esp32/humidity";     // Topic cho Độ ẩm


// --- Các phần tử HTML ---
const mqttStatusSpan = document.getElementById('mqttStatus');
const esp32OnlineStatusSpan = document.getElementById('esp32OnlineStatus');
const led1OnBtn = document.getElementById('led1On');
const led1OffBtn = document.getElementById('led1Off');
const led1StatusIndicator = document.getElementById('led1Status');
const led1Label = document.getElementById('led1Label');
const led2OnBtn = document.getElementById('led2On');
const led2OffBtn = document.getElementById('led2Off');
const led2StatusIndicator = document.getElementById('led2Status');
const led2Label = document.getElementById('led2Label');
const button1Indicator = document.getElementById('button1Indicator');
const button1Label = document.getElementById('button1Label');
const button2Indicator = document.getElementById('button2Indicator');
const button2Label = document.getElementById('button2Label');
const oledTextInput = document.getElementById('oledTextInput');
const sendOledTextBtn = document.getElementById('sendOledTextBtn');
const mqttLogDiv = document.getElementById('mqttLog');

// Tham chiếu các phần tử hiển thị giá trị cảm biến
const temperatureValueSpan = document.getElementById('temperatureValue');
const humidityValueSpan = document.getElementById('humidityValue');

let client; 

// --- Hàm ghi log ra giao diện ---
function logToDashboard(message) {
    const p = document.createElement('p');
    p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    mqttLogDiv.prepend(p);
    if (mqttLogDiv.children.length > 50) {
        mqttLogDiv.removeChild(mqttLogDiv.lastChild);
    }
}

// --- Hàm cập nhật trạng thái kết nối MQTT ---
function updateMqttStatus(status) {
    mqttStatusSpan.textContent = status;
    mqttStatusSpan.className = '';
    if (status === 'Connected') {
        mqttStatusSpan.classList.add('connected');
        logToDashboard('MQTT: Connected to broker.');
    } else {
        mqttStatusSpan.classList.add('disconnected');
        logToDashboard('MQTT: Disconnected or connecting...');
        updateEsp32OnlineStatus('Offline'); // Nếu dashboard mất kết nối, coi ESP32 là offline
        // Reset dữ liệu cảm biến khi MQTT client offline
        temperatureValueSpan.textContent = '--';
        humidityValueSpan.textContent = '--';
    }
}

// --- Hàm cập nhật trạng thái online của ESP32 ---
function updateEsp32OnlineStatus(status) {
    esp32OnlineStatusSpan.textContent = status;
    esp32OnlineStatusSpan.className = '';
    if (status === 'Online') {
        esp32OnlineStatusSpan.classList.add('connected');
        logToDashboard('ESP32 Status: ONLINE');
        setLedControlEnabled(true);
        // Reset dữ liệu cảm biến về "--" và đợi giá trị mới khi ESP32 online
        temperatureValueSpan.textContent = '--';
        humidityValueSpan.textContent = '--';
    } else {
        esp32OnlineStatusSpan.classList.add('disconnected');
        logToDashboard('ESP32 Status: OFFLINE');
        setLedControlEnabled(false);

        // Khi ESP32 offline, đặt indicator LED về màu vàng (unknown) và xóa nhãn
        led1StatusIndicator.className = 'status-indicator unknown';
        led1Label.textContent = '';
        led2StatusIndicator.className = 'status-indicator unknown';
        led2Label.textContent = '';

        // Khi ESP32 offline, hiển thị "--" cho dữ liệu cảm biến
        temperatureValueSpan.textContent = '--';
        humidityValueSpan.textContent = '--';
    }
}

// --- Hàm cập nhật trạng thái LED trên giao diện ---
function updateLedStatus(ledId, status) {
    const indicator = ledId === 1 ? led1StatusIndicator : led2StatusIndicator;
    const label = ledId === 1 ? led1Label : led2Label; 

    label.textContent = ''; // Không cần hiện chữ ON/OFF
    indicator.className = 'status-indicator'; // Xóa các class cũ

    if (status === 'ON') {
        indicator.classList.add('on');
    } else if (status === 'OFF') {
        indicator.classList.add('off');
    } else { // Trạng thái 'unknown' (thường là khi ESP32 offline hoặc khởi tạo)
        indicator.classList.add('unknown');
    }
    logToDashboard(`LED ${ledId} status updated: ${status}`);
}

// --- Hàm cập nhật trạng thái Button trên giao diện ---
function updateButtonStatus(buttonId, status) {
    const indicator = buttonId === 1 ? button1Indicator : button2Indicator;
    const label = buttonId === 1 ? button1Label : button2Label;

    label.textContent = ''; // Không cần hiện chữ IDLE/PRESSED
    indicator.className = 'status-indicator'; // Xóa các class cũ

    if (status === 'PRESSED') {
        indicator.classList.add('pressed');
        setTimeout(() => {
            indicator.className = 'status-indicator idle'; // Chấm màu về xám sau 0.5s
        }, 500); 
    } else { // Trạng thái 'IDLE' hoặc bất kỳ trạng thái không phải PRESSED
        indicator.classList.add('idle');
    }
    logToDashboard(`Button ${buttonId} status: ${status}`);
}

// BỔ SUNG MỚI: Hàm cập nhật giá trị cảm biến
function updateSensorData(type, value) {
    if (type === 'temperature') {
        temperatureValueSpan.textContent = parseFloat(value).toFixed(1); // Làm tròn 1 chữ số thập phân
        logToDashboard(`Temperature: ${value}°C`);
    } else if (type === 'humidity') {
        humidityValueSpan.textContent = parseFloat(value).toFixed(1); // Làm tròn 1 chữ số thập phân
        logToDashboard(`Humidity: ${value}%`);
    }
}

// --- Kết nối MQTT ---
function connectMqtt() {
    updateMqttStatus('Connecting');
    // Khởi tạo ban đầu: Vô hiệu hóa điều khiển và đặt LED là unknown
    setLedControlEnabled(false);
    updateEsp32OnlineStatus('Offline'); // Mặc định là offline khi mới kết nối

    tryConnectWithConfig('wss', MQTT_BROKER_PORT);
}

// Hàm thử kết nối với các cấu hình khác nhau
function tryConnectWithConfig(protocol, port) {
    logToDashboard(`Trying to connect with ${protocol}://${MQTT_BROKER_HOST}:${port}/mqtt`);

    const connectOptions = {
        clean: true,
        keepalive: 60,
        clientId: MQTT_CLIENT_ID,
        username: MQTT_USERNAME,
        password: MQTT_PASSWORD
    };

    client = mqtt.connect(`${protocol}://${MQTT_BROKER_HOST}:${port}/mqtt`, connectOptions); // Sửa lại URL kết nối, đảm bảo có /mqtt nếu HiveMQ yêu cầu

    client.on('connect', () => {
        updateMqttStatus('Connected');
        logToDashboard('Subscribing to topics...');

        client.subscribe(TOPIC_BUTTON1_STATUS, (err) => {
            if (err) logToDashboard(`Subscription error for ${TOPIC_BUTTON1_STATUS}: ${err}`);
            else logToDashboard(`Subscribed to ${TOPIC_BUTTON1_STATUS}`);
        });
        client.subscribe(TOPIC_BUTTON2_STATUS, (err) => {
            if (err) logToDashboard(`Subscription error for ${TOPIC_BUTTON2_STATUS}: ${err}`);
            else logToDashboard(`Subscribed to ${TOPIC_BUTTON2_STATUS}`);
        });
        client.subscribe(TOPIC_LED1_STATUS, (err) => {
            if (err) logToDashboard(`Subscription error for ${TOPIC_LED1_STATUS}: ${err}`);
            else logToDashboard(`Subscribed to ${TOPIC_LED1_STATUS}`);
        });
        client.subscribe(TOPIC_LED2_STATUS, (err) => {
            if (err) logToDashboard(`Subscription error for ${TOPIC_LED2_STATUS}: ${err}`);
            else logToDashboard(`Subscribed to ${TOPIC_LED2_STATUS}`);
        });
        client.subscribe(TOPIC_ONLINE_STATUS, (err) => {
            if (err) logToDashboard(`Subscription error for ${TOPIC_ONLINE_STATUS}: ${err}`);
            else logToDashboard(`Subscribed to ${TOPIC_ONLINE_STATUS}`);
        });
        client.subscribe(TOPIC_GENERAL_STATUS, (err) => {
            if (err) logToDashboard(`Subscription error for ${TOPIC_GENERAL_STATUS}: ${err}`);
            else logToDashboard(`Subscribed to ${TOPIC_GENERAL_STATUS}`);
        });
        // Đăng ký topic Nhiệt độ và Độ ẩm
        client.subscribe(TOPIC_TEMPERATURE, (err) => {
            if (err) logToDashboard(`Subscription error for ${TOPIC_TEMPERATURE}: ${err}`);
            else logToDashboard(`Subscribed to ${TOPIC_TEMPERATURE}`);
        });
        client.subscribe(TOPIC_HUMIDITY, (err) => {
            if (err) logToDashboard(`Subscription error for ${TOPIC_HUMIDITY}: ${err}`);
            else logToDashboard(`Subscribed to ${TOPIC_HUMIDITY}`);
        });

        // Gửi tin nhắn rỗng để yêu cầu retained message (Online/Offline)
        client.publish(TOPIC_ONLINE_STATUS, "", { qos: 1, retain: true });
        logToDashboard('Requested current ESP32 online status.');
    });

    client.on('message', (topic, message) => {
        const msg = message.toString();
        logToDashboard(`Received: Topic: ${topic}, Message: ${msg}`);

        if (topic === TOPIC_BUTTON1_STATUS) {
            updateButtonStatus(1, msg);
        } else if (topic === TOPIC_BUTTON2_STATUS) {
            updateButtonStatus(2, msg);
        } else if (topic === TOPIC_LED1_STATUS) {
            updateLedStatus(1, msg); 
        } else if (topic === TOPIC_LED2_STATUS) {
            updateLedStatus(2, msg); 
        } else if (topic === TOPIC_ONLINE_STATUS) {
            if (msg === "online") {
                updateEsp32OnlineStatus('Online');
            } else if (msg === "offline") {
                updateEsp32OnlineStatus('Offline');
            }
        } else if (topic === TOPIC_GENERAL_STATUS) {
            logToDashboard(`General ESP32 Info: ${msg}`);
        } else if (topic === TOPIC_TEMPERATURE) {
            updateSensorData('temperature', msg);
        } else if (topic === TOPIC_HUMIDITY) {
            updateSensorData('humidity', msg);
        }
    });

    client.on('reconnect', () => {
        updateMqttStatus('Reconnecting');
        logToDashboard('MQTT: Attempting to reconnect...');
    });

    client.on('offline', () => {
        updateMqttStatus('Offline');
        logToDashboard('MQTT: Client went offline.');
        updateEsp32OnlineStatus('Offline'); 
    });

    client.on('error', (err) => {
        updateMqttStatus('Disconnected');
        logToDashboard(`MQTT Error: ${err.message}`);

        if (protocol === 'wss' && port === 8884) {
            logToDashboard('Trying fallback connection with ws://8000...');
            client.end();
            setTimeout(() => tryConnectWithConfig('ws', 8000), 2000);
        } else {
            client.end();
            setTimeout(connectMqtt, 5000);
        }
    });

    client.on('close', () => {
        updateMqttStatus('Disconnected');
        logToDashboard('MQTT: Connection closed.');
        updateEsp32OnlineStatus('Offline');
    });
}

// --- Hàm để vô hiệu hóa/kích hoạt các nút điều khiển LED và input khác ---
function setLedControlEnabled(enabled) {
    led1OnBtn.disabled = !enabled;
    led1OffBtn.disabled = !enabled;
    led2OnBtn.disabled = !enabled;
    led2OffBtn.disabled = !enabled;
    oledTextInput.disabled = !enabled;
    sendOledTextBtn.disabled = !enabled;

    // Tùy chỉnh màu sắc/độ mờ của nút khi disabled
    const buttons = [led1OnBtn, led1OffBtn, led2OnBtn, led2OffBtn, sendOledTextBtn];
    const inputs = [oledTextInput]; // Có thể thêm các input khác nếu có

    buttons.forEach(btn => {
        btn.style.opacity = enabled ? 1 : 0.5;
        btn.style.cursor = enabled ? 'pointer' : 'not-allowed';
    });
    inputs.forEach(input => {
        input.style.opacity = enabled ? 1 : 0.5;
        input.style.cursor = enabled ? 'text' : 'not-allowed';
    });
}


// --- Xử lý sự kiện click nút điều khiển LED ---
led1OnBtn.addEventListener('click', () => {
    if (client && client.connected && esp32OnlineStatusSpan.textContent === 'Online') { 
        client.publish(TOPIC_LED1_CONTROL, 'ON');
        logToDashboard('Published: LED 1 ON');
        updateLedStatus(1, 'ON'); 
    } else {
        logToDashboard('Error: ESP32 OFFLINE or MQTT not connected. Cannot publish LED 1 ON.');
    }
});

led1OffBtn.addEventListener('click', () => {
    if (client && client.connected && esp32OnlineStatusSpan.textContent === 'Online') {
        client.publish(TOPIC_LED1_CONTROL, 'OFF');
        logToDashboard('Published: LED 1 OFF');
        updateLedStatus(1, 'OFF'); 
    } else {
        logToDashboard('Error: ESP32 OFFLINE or MQTT not connected. Cannot publish LED 1 OFF.');
    }
});

led2OnBtn.addEventListener('click', () => {
    if (client && client.connected && esp32OnlineStatusSpan.textContent === 'Online') {
        client.publish(TOPIC_LED2_CONTROL, 'ON');
        logToDashboard('Published: LED 2 ON');
        updateLedStatus(2, 'ON'); 
    } else {
        logToDashboard('Error: ESP32 OFFLINE or MQTT not connected. Cannot publish LED 2 ON.');
    }
});

led2OffBtn.addEventListener('click', () => {
    if (client && client.connected && esp32OnlineStatusSpan.textContent === 'Online') {
        client.publish(TOPIC_LED2_CONTROL, 'OFF');
        logToDashboard('Published: LED 2 OFF');
        updateLedStatus(2, 'OFF'); 
    } else {
        logToDashboard('Error: ESP32 OFFLINE or MQTT not connected. Cannot publish LED 2 OFF.');
    }
});

// --- Xử lý sự kiện click nút Gửi văn bản tới OLED ---
sendOledTextBtn.addEventListener('click', () => {
    if (client && client.connected && esp32OnlineStatusSpan.textContent === 'Online') {
        const textToSend = oledTextInput.value.trim();
        if (textToSend) { 
            client.publish(TOPIC_OLED_TEXT_CONTROL, textToSend, (err) => {
                if (err) {
                    logToDashboard(`Error publishing to OLED: ${err}`);
                } else {
                    logToDashboard(`Published to OLED: "${textToSend}"`);
                    oledTextInput.value = ''; 
                }
            });
        } else {
            logToDashboard('Vui lòng nhập văn bản để gửi tới OLED.');
        }
    } else {
        logToDashboard('Error: ESP32 OFFLINE or MQTT not connected. Cannot publish text to OLED.');
    }
});


// --- Khởi tạo kết nối MQTT khi trang được tải ---
document.addEventListener('DOMContentLoaded', connectMqtt);