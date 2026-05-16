const slugify = (text) => String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// THƯ VIỆN ĐỀ THI CHI TIẾT (ĐÃ BỔ SUNG THÊM ĐỀ CÁC NĂM TRƯỚC)
examLibrary = {
    "Sở GDĐT": [
        {
            year: "2023 - 2024",
            name: "Đề Thi Tuyển Sinh Lớp 10 Chuyên Tin TP.HCM",
            duration: "150 phút",
            description: "Cấu trúc đề chuẩn 4 bài của Hội đồng tuyển sinh TP.HCM (Thường áp dụng cho Lê Hồng Phong, Trần Đại Nghĩa, Gia Định). Đề nhấn mạnh vào kỹ năng xử lý mảng, chuỗi và đồ thị lưới.",
            problems: [
                {
                    title: "Bài 1: MẬT KHẨU (PASSWORD) - 2.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Bảo mật hệ thống luôn là một vấn đề quan trọng. Trong một hệ thống mới, mật khẩu được sinh ra từ một số nguyên dương N. Mật khẩu chính là số lượng các ước số của N. Hãy giúp quản trị viên tính xem mật khẩu của hệ thống là số mấy.",
                    input: "Một dòng duy nhất chứa số nguyên dương N.",
                    output: "In ra một số nguyên duy nhất là số lượng ước số của N.",
                    constraints: "- Subtask 1 (50% số điểm): N ≤ 10^6.\n- Subtask 2 (50% số điểm): N ≤ 10^12.",
                    sampleIn: "12",
                    sampleOut: "6",
                    sampleNote: "Các ước của 12 là: 1, 2, 3, 4, 6, 12."
                },
                {
                    title: "Bài 2: TRẠM PHÁT SÓNG (STATION) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Trên một con đường thẳng có N ngôi nhà, ngôi nhà thứ i nằm ở tọa độ X[i] và có số lượng dân cư là P[i]. Một công ty viễn thông muốn đặt một trạm phát sóng tại tọa độ của một ngôi nhà nào đó sao cho tổng khoảng cách từ trạm phát sóng đến tất cả người dân là nhỏ nhất.\n\nBiết rằng khoảng cách từ trạm đặt tại X[i] đến ngôi nhà tại X[j] là |X[i] - X[j]|. Tổng khoảng cách được tính bằng tổng của (|X[i] - X[j]| * P[j]) với mọi j từ 1 đến N.",
                    input: "Dòng đầu tiên chứa số nguyên N.\nN dòng tiếp theo, mỗi dòng chứa 2 số nguyên X[i] và P[i].",
                    output: "In ra tổng khoảng cách nhỏ nhất tìm được.",
                    constraints: "- Subtask 1 (40% số điểm): N ≤ 10^3, X[i], P[i] ≤ 10^3.\n- Subtask 2 (60% số điểm): N ≤ 10^5, X[i], P[i] ≤ 10^6.",
                    sampleIn: "3\n1 5\n3 2\n6 3",
                    sampleOut: "21",
                    sampleNote: "Nếu đặt trạm tại tọa độ 3, tổng khoảng cách là: |1-3|*5 + |3-3|*2 + |6-3|*3 = 10 + 0 + 9 = 19 (Đây chưa phải tối ưu, kết quả tối ưu là đặt tại 1)."
                },
                {
                    title: "Bài 3: XẾP HỘP (BOXES) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Bạn có N khối hộp, hộp thứ i có độ cứng là C[i] và khối lượng là W[i]. Bạn cần xếp các hộp chồng lên nhau thành một cột sao cho hộp nằm trên phải có khối lượng nhỏ hơn hộp nằm dưới. Đồng thời, tổng khối lượng của các hộp nằm phía trên hộp thứ i không được vượt quá độ cứng C[i] của hộp đó.\n\nHãy tìm cách xếp sao cho số lượng hộp được dùng là nhiều nhất.",
                    input: "Dòng 1: Số nguyên N.\nDòng 2..N+1: Mỗi dòng chứa 2 số nguyên W[i] và C[i].",
                    output: "Một số nguyên duy nhất là số lượng hộp tối đa có thể xếp.",
                    constraints: "- Subtask 1 (40% số điểm): N ≤ 20.\n- Subtask 2 (60% số điểm): N ≤ 1000, W[i], C[i] ≤ 10^5.",
                    sampleIn: "3\n10 10\n15 20\n5 5",
                    sampleOut: "2",
                    sampleNote: "Có thể xếp hộp 1 lên hộp 2."
                },
                {
                    title: "Bài 4: MÊ CUNG BĂNG (ICEMAZE) - 2.0 Điểm",
                    limits: "Thời gian: 2.0 giây | Bộ nhớ: 512 MB",
                    content: "Bản đồ là một lưới kích thước R x C. Có các ô trống (.), vật cản (#), vị trí xuất phát (S) và đích đến (E). Bề mặt mê cung là băng trơn trượt. Khi bạn di chuyển theo 1 trong 4 hướng (Lên, Xuống, Trái, Phải), bạn sẽ trượt dài trên mặt băng theo hướng đó cho đến khi đụng phải một vật cản (#) hoặc rìa bản đồ thì mới dừng lại.\n\nHãy tìm số lần trượt ít nhất để đi từ S đến E. Nếu không thể đến đích, in ra -1.",
                    input: "Dòng 1: Hai số R và C.\nR dòng tiếp theo: Mỗi dòng chứa C ký tự mô tả mê cung.",
                    output: "Số lần trượt ít nhất.",
                    constraints: "- Subtask 1 (50% số điểm): R, C ≤ 50.\n- Subtask 2 (50% số điểm): R, C ≤ 1000.",
                    sampleIn: "4 5\nS....\n...#.\n.#...\n....E",
                    sampleOut: "3",
                    sampleNote: "Trượt Phải đụng tường, trượt Xuống, trượt Phải đến E."
                }
            ]
        },
        {
            year: "2022 - 2023",
            name: "Đề Thi Tuyển Sinh Lớp 10 Chuyên Tin TP.HCM",
            duration: "150 phút",
            description: "Đề thi năm 2022 nổi bật với các bài toán đếm số cách (Tổ hợp & Quy hoạch động) và các bài toán phân tích miền liên thông trên đồ thị 2 chiều.",
            problems: [
                {
                    title: "Bài 1: MUA VÉ (TICKET) - 2.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Để khuyến khích người dân đi xe buýt, công ty vận tải đưa ra 2 loại vé: vé lẻ đi 1 chuyến giá A đồng, và vé tháng (đi không giới hạn chuyến trong tháng) giá B đồng. Một người dự định đi N chuyến xe buýt trong tháng này. Hãy tính số tiền ít nhất mà người đó phải trả.",
                    input: "Một dòng duy nhất chứa 3 số nguyên dương N, A, B cách nhau một khoảng trắng.",
                    output: "In ra số tiền ít nhất cần trả.",
                    constraints: "- 1 ≤ N, A, B ≤ 10^9.",
                    sampleIn: "10 5 40",
                    sampleOut: "40",
                    sampleNote: "Nếu mua 10 vé lẻ mất 50 đồng. Mua vé tháng mất 40 đồng. Chọn vé tháng rẻ hơn."
                },
                {
                    title: "Bài 2: CẶP SỐ (PAIRS) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Cho một dãy số nguyên A gồm N phần tử và một số nguyên K. Hãy đếm xem có bao nhiêu cặp chỉ số (i, j) với 1 ≤ i < j ≤ N sao cho tổng A[i] + A[j] đúng bằng K.",
                    input: "Dòng 1: Hai số nguyên N và K.\nDòng 2: N số nguyên A[1], A[2], ..., A[N].",
                    output: "In ra số lượng cặp (i, j) thỏa mãn.",
                    constraints: "- Subtask 1 (50% số điểm): N ≤ 10^3, |A[i]| ≤ 10^6.\n- Subtask 2 (50% số điểm): N ≤ 2*10^5, |A[i]| ≤ 10^9.",
                    sampleIn: "5 6\n1 5 2 4 3",
                    sampleOut: "2",
                    sampleNote: "Có 2 cặp có tổng bằng 6 là (1, 5) và (2, 4)."
                },
                {
                    title: "Bài 3: BẬC THANG KỲ LẠ (VSTEPS) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Có một cầu thang gồm N bậc. An đứng ở mặt đất (bậc 0) và muốn leo lên bậc N. Mỗi bước An có thể nhảy lên 1 bậc hoặc 2 bậc. Tuy nhiên, cầu thang đã quá cũ nên có K bậc thang bị hỏng, An không thể nhảy vào các bậc thang hỏng này. Hãy đếm số cách để An nhảy từ mặt đất lên đỉnh cầu thang. Vì kết quả có thể rất lớn, hãy in ra phần dư của số cách khi chia cho 14062008.",
                    input: "Dòng 1: Hai số N và K.\nDòng 2: K số nguyên phân biệt tăng dần là các bậc thang bị hỏng.",
                    output: "In ra số cách nhảy theo modulo 14062008.",
                    constraints: "- N ≤ 10^5, K ≤ N.",
                    sampleIn: "4 1\n2",
                    sampleOut: "1",
                    sampleNote: "Có 4 bậc, bậc 2 bị hỏng. Các cách nhảy: (0 -> 1 -> 3 -> 4) là cách duy nhất hợp lệ. Không thể nhảy 0 -> 2 hoặc 1 -> 2."
                },
                {
                    title: "Bài 4: KHU RỪNG MIỀN LIÊN THÔNG (FOREST) - 2.0 Điểm",
                    limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                    content: "Bản đồ khu rừng là lưới kích thước R x C. Mỗi ô trồng một loại cây ký hiệu bằng một chữ cái in hoa. Hai ô liền kề (chung cạnh) có cùng chữ cái sẽ thuộc cùng một khu vực rừng. Một con thú đang ở tọa độ (X, Y). Hãy tính diện tích (số lượng ô) của khu vực rừng lớn nhất có cùng loại cây với ô (X, Y) mà con thú có thể di chuyển đến mà không bước sang loại cây khác.",
                    input: "Dòng 1: R, C, X, Y (X, Y là tọa độ bắt đầu 1-based).\nR dòng tiếp theo, mỗi dòng là một chuỗi C chữ cái in hoa.",
                    output: "Diện tích khu rừng lớn nhất mà con thú có thể đi tới.",
                    constraints: "- R, C ≤ 1000.",
                    sampleIn: "4 5 2 2\nAAABB\nAACBB\nACCCB\nDDDEE",
                    sampleOut: "4",
                    sampleNote: "Tọa độ (2, 2) là chữ A. Có 4 chữ A liền kề nhau tạo thành 1 khu vực liên thông."
                }
            ]
        }
    ],
    PTNK: [
        {
            year: "2023 - 2024",
            name: "Đề Thi Tuyển Sinh Phổ Thông Năng Khiếu",
            duration: "150 phút",
            description: "Đề thi PTNK mang tính phân loại cực cao, đòi hỏi tư duy Toán Tổ hợp, khả năng sử dụng Hashing và thuật toán Đồ thị nâng cao.",
            problems: [
                {
                    title: "Bài 1: TRUY VẤN DÃY SỐ (NKSEQ) - 3.0 Điểm",
                    limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                    content: "Cho dãy số A gồm N phần tử nguyên dương. Bạn cần trả lời Q truy vấn. Mỗi truy vấn gồm 2 số L và R. Yêu cầu tính tổng các phần tử chẵn trong đoạn từ A[L] đến A[R].",
                    input: "Dòng 1: Hai số N và Q.\nDòng 2: N số nguyên A[1], A[2], ..., A[N].\nQ dòng tiếp theo: Mỗi dòng chứa hai số nguyên L và R (1 ≤ L ≤ R ≤ N).",
                    output: "In ra Q dòng, mỗi dòng là kết quả của một truy vấn.",
                    constraints: "- Subtask 1 (30%): N, Q ≤ 10^3.\n- Subtask 2 (70%): N, Q ≤ 10^5, A[i] ≤ 10^9.",
                    sampleIn: "5 3\n1 2 3 4 5\n1 3\n2 5\n1 5",
                    sampleOut: "2\n6\n6",
                    sampleNote: "Đoạn [1, 3] là {1, 2, 3}, số chẵn duy nhất là 2."
                },
                {
                    title: "Bài 2: CHUỖI TƯƠNG ĐỒNG (NKSTRING) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Cho một chuỗi S chỉ gồm các chữ cái in thường, độ dài không vượt quá 10^5. Một chuỗi con S[i..j] được gọi là 'tương đồng' với chuỗi S[u..v] nếu chúng có cùng độ dài và chỉ khác nhau nhiều nhất 1 vị trí ký tự.\n\nCho Q truy vấn, mỗi truy vấn gồm 4 số i, j, u, v (biết j-i = v-u). Hãy kiểm tra xem S[i..j] có tương đồng với S[u..v] hay không.",
                    input: "Dòng 1: Chuỗi S.\nDòng 2: Số nguyên Q.\nQ dòng tiếp theo, mỗi dòng gồm 4 số i, j, u, v.",
                    output: "Với mỗi truy vấn, in ra 'YES' hoặc 'NO'.",
                    constraints: "- Subtask 1 (40%): |S|, Q ≤ 1000.\n- Subtask 2 (60%): |S|, Q ≤ 10^5.",
                    sampleIn: "abacaba\n2\n1 3 5 7\n1 4 2 5",
                    sampleOut: "YES\nNO",
                    sampleNote: "S[1..3] là 'aba', S[5..7] là 'aba', giống nhau hoàn toàn -> YES."
                },
                {
                    title: "Bài 3: GIAO THÔNG (NKCITY) - 4.0 Điểm",
                    limits: "Thời gian: 2.0 giây | Bộ nhớ: 512 MB",
                    content: "Thành phố NK có N nút giao thông và M con đường hai chiều. Trọng tải tối đa của con đường thứ i là W[i]. Một chiếc xe tải muốn đi từ nút 1 đến nút N. Tải trọng cho phép của chuyến đi chính là trọng tải nhỏ nhất trong số các con đường mà xe đi qua.\n\nHãy tìm một đường đi từ 1 đến N sao cho tải trọng cho phép của chuyến đi là lớn nhất có thể.",
                    input: "Dòng 1: Hai số N và M.\nM dòng tiếp theo: Mỗi dòng gồm 3 số U, V, W (Có đường nối U, V với trọng tải W).",
                    output: "In ra mức tải trọng lớn nhất có thể. Nếu không có đường đi, in -1.",
                    constraints: "- Subtask 1 (30%): N ≤ 1000, M ≤ 5000.\n- Subtask 2 (70%): N ≤ 10^5, M ≤ 2*10^5.",
                    sampleIn: "4 4\n1 2 10\n2 4 5\n1 3 4\n3 4 8",
                    sampleOut: "5",
                    sampleNote: "Đi theo đường 1 -> 2 -> 4 thì trọng tải min là 5. Đi theo 1 -> 3 -> 4 thì trọng tải min là 4. Kết quả là 5."
                }
            ]
        },
        {
            year: "2022 - 2023",
            name: "Đề Thi Tuyển Sinh Phổ Thông Năng Khiếu",
            duration: "150 phút",
            description: "Một trong những bộ đề kinh điển kiểm tra tư duy mảng cộng dồn chia dư (Modulo Prefix Sum) và các tính chất phức tạp của số học.",
            problems: [
                {
                    title: "Bài 1: SỐ PHONG PHÚ (NKABD) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Một số nguyên dương được gọi là 'phong phú' nếu tổng các ước số thực sự của nó (không kể chính nó) lớn hơn chính nó. Ví dụ: 12 có các ước thực sự là 1, 2, 3, 4, 6. Tổng là 16 > 12 nên 12 là số phong phú. Cho đoạn [L, R], hãy đếm số lượng số phong phú trong đoạn này.",
                    input: "Một dòng chứa hai số nguyên L và R.",
                    output: "In ra số lượng số phong phú trong đoạn [L, R].",
                    constraints: "- 1 ≤ L ≤ R ≤ 10^5.",
                    sampleIn: "1 50",
                    sampleOut: "9",
                    sampleNote: "Có 9 số phong phú từ 1 đến 50."
                },
                {
                    title: "Bài 2: CHIA KẸO CHIA HẾT (DIVISIBLE) - 3.0 Điểm",
                    limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                    content: "Cho một dãy số nguyên A gồm N phần tử. Hãy đếm xem có bao nhiêu đoạn con liên tiếp của dãy A có tổng các phần tử chia hết cho số K cho trước.",
                    input: "Dòng 1: Hai số N và K.\nDòng 2: N số nguyên A[1], A[2], ..., A[N].",
                    output: "In ra số lượng đoạn con liên tiếp chia hết cho K.",
                    constraints: "- N ≤ 10^5, K ≤ 1000, |A[i]| ≤ 10^9.",
                    sampleIn: "5 3\n1 2 3 4 5",
                    sampleOut: "4",
                    sampleNote: "Các đoạn con chia hết cho 3 là: [1, 2], [3], [1, 2, 3], [3, 4, 5]."
                },
                {
                    title: "Bài 3: QUẢN LÝ HỘI TRƯỜNG (NKREZ) - 4.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Có N yêu cầu mượn hội trường, yêu cầu thứ i bắt đầu tại thời điểm S[i] và kết thúc tại thời điểm E[i]. Tại một thời điểm, hội trường chỉ có thể phục vụ 1 yêu cầu. Hãy chọn ra một số yêu cầu sao cho không có 2 yêu cầu nào giao nhau về mặt thời gian, và tổng thời gian phục vụ của hội trường là lớn nhất.",
                    input: "Dòng 1: Số nguyên N.\nN dòng tiếp theo, mỗi dòng chứa 2 số S[i] và E[i].",
                    output: "Tổng thời gian phục vụ lớn nhất tìm được.",
                    constraints: "- N ≤ 10^4, 0 ≤ S[i] < E[i] ≤ 30000.",
                    sampleIn: "4\n1 4\n3 5\n0 6\n4 7",
                    sampleOut: "6",
                    sampleNote: "Chọn yêu cầu [1, 4] và [4, 7], tổng thời gian là (4-1) + (7-4) = 3 + 3 = 6."
                }
            ]
        }
    ]
};

globalThis.renderSyllabus = function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    container.innerHTML = database.filter(p => Object.keys(p).length > 0).map(phase => `
        <div class="soft-card rounded-3xl p-6 mb-8 border-l-4 border-l-slate-300">
            <div class="flex items-center gap-3 mb-6">
                <div class="${phase.bgClass} text-white w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md">
                    <i class="fa-solid ${phase.icon}"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold ${phase.textClass} font-heading">${phase.title}</h2>
                    <p class="text-sm text-slate-600">${phase.time} • ${phase.duration}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-white rounded-2xl p-4 border border-slate-100">
                    <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Yêu cầu tiên quyết</p>
                    <p class="text-sm text-slate-800 mt-2">${phase.requirements}</p>
                </div>
                <div class="bg-white rounded-2xl p-4 border border-slate-100">
                    <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Chủ đề chính</p>
                    <p class="text-sm text-slate-800 mt-2">${phase.topics}</p>
                </div>
                <div class="bg-white rounded-2xl p-4 border border-slate-100">
                    <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Kết quả đạt được</p>
                    <p class="text-sm text-slate-800 mt-2">${phase.output}</p>
                </div>
            </div>

            <div class="space-y-2">
                ${phase.lessons.map((lesson) => `
                    <details class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <summary class="px-4 py-3 font-semibold cursor-pointer ${phase.textClass} bg-slate-50 hover:bg-slate-100 flex justify-between items-center font-heading">
                            <span>${lesson.session} - ${lesson.name}</span>
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </summary>
                        <div class="px-4 py-4 bg-white border-t border-slate-200">
                            <div class="space-y-3">
                                <div>
                                    <p class="text-xs font-bold text-slate-700 uppercase mb-2">Timeline:</p>
                                    <ul class="text-sm text-slate-700 space-y-1">
                                        ${lesson.timeline.map(t => `<li class="flex items-start gap-2"><span class="text-primary">✓</span> ${t}</li>`).join('')}
                                    </ul>
                                </div>
                                ${lesson.code ? `
                                    <div>
                                        <p class="text-xs font-bold text-slate-700 uppercase mb-2">Code Mẫu:</p>
                                        <pre class="code-block"><code>${escapeHtml(lesson.code)}</code></pre>
                                    </div>
                                ` : ''}
                                ${lesson.tasks ? `
                                    <div>
                                        <p class="text-xs font-bold text-slate-700 uppercase mb-2">Nhiệm vụ:</p>
                                        <p class="text-sm text-slate-700 whitespace-pre-line">${escapeHtml(lesson.tasks)}</p>
                                    </div>
                                ` : ''}
                                ${lesson.realExams && lesson.realExams.length ? `
                                    <div class="bg-orange-50 border border-orange-100 p-3 rounded-2xl text-sm text-slate-800">
                                        <p class="font-bold text-orange-700 mb-2">Ứng dụng thực chiến:</p>
                                        ${lesson.realExams.map(real => renderLessonExamRef(real)).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </details>
                `).join('')}
            </div>
        </div>
    `).join('');
};

// CÁC HÀM XỬ LÝ GIAO DIỆN
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-primary', 'font-medium');
        btn.classList.add('text-slate-500');
    });

    document.getElementById('tab-' + tabName).classList.add('active');
    const targetBtn = document.querySelector(`[data-target="${tabName}"]`);
    if (targetBtn) {
        targetBtn.classList.remove('text-slate-500');
        targetBtn.classList.add('text-primary', 'font-medium');
    }

    if (tabName === 'home' && document.getElementById('overview-container').innerHTML.trim().length < 100) {
        renderOverview();
    }
    if (tabName === 'syllabus' && document.getElementById('syllabus-container').innerHTML.trim().length < 100) {
        renderSyllabus();
    }
    if (tabName === 'exams' && document.getElementById('exams-container').innerHTML.trim().length < 100) {
        renderExams();
    }
}

function renderOverview() {
    const container = document.getElementById('overview-container');
    container.innerHTML = database.filter(p => Object.keys(p).length > 0).map(phase => `
        <div class="soft-card rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl cursor-pointer border-l-4" style="border-left-color: var(--phase-color)" onclick="switchTab('syllabus')">
            <div class="flex items-start justify-between mb-4">
                <div>
                    <h3 class="text-lg font-bold ${phase.textClass} font-heading">${phase.title}</h3>
                    <p class="text-sm text-slate-500 mt-1">${phase.time}</p>
                </div>
                <i class="fa-solid ${phase.icon} text-2xl ${phase.textClass}"></i>
            </div>
            <p class="text-slate-700 text-sm leading-relaxed">${phase.desc}</p>
            <div class="mt-4 pt-4 border-t border-slate-200">
                <div class="text-xs text-slate-600">
                    <p><strong>Yêu cầu:</strong> ${phase.requirements}</p>
                    <p class="mt-2"><strong>Chủ đề:</strong> ${phase.topics}</p>
                </div>
            </div>
            <div class="mt-4 text-xs font-semibold text-white ${phase.bgClass} py-2 px-3 rounded-full inline-block">
                ${phase.duration}
            </div>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    container.innerHTML = database.filter(p => Object.keys(p).length > 0).map(phase => `
        <div class="soft-card rounded-3xl p-6 mb-8 border-l-4 border-l-slate-300">
            <div class="flex items-center gap-3 mb-6">
                <div class="${phase.bgClass} text-white w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md">
                    <i class="fa-solid ${phase.icon}"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold ${phase.textClass} font-heading">${phase.title}</h2>
                    <p class="text-sm text-slate-600">${phase.time} • ${phase.duration}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-white rounded-2xl p-4 border border-slate-100">
                    <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Yêu cầu tiên quyết</p>
                    <p class="text-sm text-slate-800 mt-2">${phase.requirements}</p>
                </div>
                <div class="bg-white rounded-2xl p-4 border border-slate-100">
                    <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Chủ đề chính</p>
                    <p class="text-sm text-slate-800 mt-2">${phase.topics}</p>
                </div>
                <div class="bg-white rounded-2xl p-4 border border-slate-100">
                    <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Kết quả đạt được</p>
                    <p class="text-sm text-slate-800 mt-2">${phase.output}</p>
                </div>
            </div>

            <div class="space-y-2">
                ${phase.lessons.map((lesson, idx) => `
                    <details class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <summary class="px-4 py-3 font-semibold cursor-pointer ${phase.textClass} bg-slate-50 hover:bg-slate-100 flex justify-between items-center font-heading">
                            <span>${lesson.session} - ${lesson.name}</span>
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </summary>
                        <div class="px-4 py-4 bg-white border-t border-slate-200">
                            <div class="space-y-3">
                                <div>
                                    <p class="text-xs font-bold text-slate-700 uppercase mb-2">Timeline:</p>
                                    <ul class="text-sm text-slate-700 space-y-1">
                                        ${lesson.timeline.map(t => `<li class="flex items-start gap-2"><span class="text-primary">✓</span> ${t}</li>`).join('')}
                                    </ul>
                                </div>
                                ${lesson.code ? `
                                    <div>
                                        <p class="text-xs font-bold text-slate-700 uppercase mb-2">Code Mẫu:</p>
                                        <pre class="code-block"><code>${escapeHtml(lesson.code)}</code></pre>
                                    </div>
                                ` : ''}
                                ${lesson.tasks ? `
                                    <div>
                                        <p class="text-xs font-bold text-slate-700 uppercase mb-2">Nhiệm vụ:</p>
                                        <p class="text-sm text-slate-700 whitespace-pre-line">${escapeHtml(lesson.tasks)}</p>
                                    </div>
                                ` : ''}
                                ${lesson.realExams && lesson.realExams.length ? `
                                    <div class="bg-orange-50 border border-orange-100 p-3 rounded-2xl text-sm text-slate-800">
                                        <p class="font-bold text-orange-700 mb-2">Ứng dụng thực chiến:</p>
                                        ${lesson.realExams.map(real => `<p>✓ ${escapeHtml(real)}</p>`).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </details>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderExams() {
    const container = document.getElementById('exams-container');
    let html = '';

    for (const [school, exams] of Object.entries(examLibrary)) {
        html += `
            <div class="mb-14">
                <h3 class="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-4 border-primary-500 font-heading inline-block">
                    ${school === 'PTNK' ? '<i class="fa-solid fa-crown text-amber-500 mr-2"></i> Trường Phổ Thông Năng Khiếu' : '<i class="fa-solid fa-building-columns text-primary-500 mr-2"></i> Sở GD&ĐT TP.HCM (LHP, TĐN)'}
                </h3>
                
                ${exams.map(exam => {
                    const examId = `exam-${slugify(school)}-${slugify(exam.year)}-${slugify(exam.name)}`;
                    return `
                    <div id="${examId}" class="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden mb-8">
                        <div class="bg-slate-50 border-b border-slate-200 p-6 sm:p-8">
                            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                <div>
                                    <span class="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-full mb-2 uppercase tracking-wide">Năm học ${exam.year}</span>
                                    <h4 class="text-2xl font-bold text-slate-900 font-heading">${exam.name}</h4>
                                </div>
                                <div class="flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-2 rounded-xl font-bold text-sm border border-rose-100">
                                    <i class="fa-regular fa-clock"></i> ${exam.duration}
                                </div>
                            </div>
                            <p class="text-slate-600 text-sm leading-relaxed">${exam.description}</p>
                        </div>

                        <div class="p-6 sm:p-8">
                            <h5 class="text-lg font-bold text-slate-800 mb-6 uppercase tracking-wider">Danh sách bài thi:</h5>
                            <div class="space-y-6">
                                ${exam.problems.map((prob, idx) => {
                                    const problemId = `${examId}-problem-${idx + 1}-${slugify(prob.title)}`;
                                    return `
                                    <details class="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                        <summary class="flex items-center justify-between cursor-pointer p-5 bg-slate-50 hover:bg-primary-50 transition-colors">
                                            <div>
                                                <h6 class="text-lg font-bold text-primary-700 font-heading group-open:text-primary-800">${prob.title}</h6>
                                                <p class="text-xs font-mono text-slate-500 mt-1">${prob.limits}</p>
                                            </div>
                                            <span class="transition group-open:rotate-180 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-sm border border-slate-200">
                                                <i class="fa-solid fa-chevron-down text-slate-400"></i>
                                            </span>
                                        </summary>
                                        
                                        <div id="${problemId}" class="p-6 border-t border-slate-200 space-y-6">
                                            <div>
                                                <h7 class="font-bold text-slate-800 uppercase text-xs tracking-wider mb-2 block">1. Đề bài</h7>
                                                <p class="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">${prob.content}</p>
                                            </div>
                                            
                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div class="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                                    <h7 class="font-bold text-blue-800 uppercase text-xs tracking-wider mb-2 block">Dữ liệu vào (Input)</h7>
                                                    <p class="text-slate-700 text-sm whitespace-pre-wrap">${prob.input}</p>
                                                </div>
                                                <div class="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                                    <h7 class="font-bold text-emerald-800 uppercase text-xs tracking-wider mb-2 block">Kết quả ra (Output)</h7>
                                                    <p class="text-slate-700 text-sm whitespace-pre-wrap">${prob.output}</p>
                                                </div>
                                            </div>

                                            <div class="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                                                <h7 class="font-bold text-amber-800 uppercase text-xs tracking-wider mb-2 block">Giới hạn dữ liệu (Subtasks)</h7>
                                                <p class="text-slate-700 text-sm font-mono whitespace-pre-wrap leading-relaxed">${prob.constraints}</p>
                                            </div>

                                            <div>
                                                <h7 class="font-bold text-slate-800 uppercase text-xs tracking-wider mb-2 block">Ví dụ (Sample Test)</h7>
                                                <div class="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-300 rounded-xl overflow-hidden font-mono text-sm">
                                                    <div class="bg-slate-100 p-3 border-b md:border-b-0 md:border-r border-slate-300">
                                                        <span class="text-xs text-slate-500 font-bold block mb-2 uppercase">Input</span>
                                                        <pre class="text-slate-800 whitespace-pre-wrap">${prob.sampleIn}</pre>
                                                    </div>
                                                    <div class="bg-white p-3">
                                                        <span class="text-xs text-slate-500 font-bold block mb-2 uppercase">Output</span>
                                                        <pre class="text-slate-800 whitespace-pre-wrap">${prob.sampleOut}</pre>
                                                    </div>
                                                </div>
                                                ${prob.sampleNote ? `
                                                    <p class="text-xs text-slate-500 mt-2 italic"><i class="fa-solid fa-circle-info mr-1"></i> Giải thích: ${prob.sampleNote}</p>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </details>
                                `; }).join('')}
                            </div>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        `;
    }

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderOverview();
});