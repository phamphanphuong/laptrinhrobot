const examDatabase = [
  {
    "id": "EXAM_KIEN_GIANG_2025",
    "province": "KIÊN GIANG [cite: 1]",
    "header": "ĐỀ CHÍNH THỨC (Đề thi có 03 trang) [cite: 2]",
    "title": "SỞ GIÁO DỤC VÀ ĐÀO TẠO KỲ THI TUYỂN SINH VÀO LỚP 10 THPT CHUYÊN NĂM HỌC 2025-2026 [cite: 3, 4]",
    "subject": "MÔN THI: TIN HỌC (chuyên) [cite: 5]",
    "duration": "Thời gian làm bài: 150 phút, không kể thời gian phát đề [cite: 5]",
    "date": "Ngày thi: 01/6/2025 [cite: 5]",
    "overview": {
      "title": "TỔNG QUAN BÀI THI [cite: 6]",
      "table": [
        {"Bài": "1", "Tên bài": "Tính tiền Taxi", "File chương trình": "taxi.*", "Điểm": "2,5", "cite": "[cite: 7]"},
        {"Bài": "2", "Tên bài": "Bộ ba số", "File chương trình": "bobaso.*", "Điểm": "2,5", "cite": "[cite: 7]"},
        {"Bài": "3", "Tên bài": "Bội số nguyên tố", "File chương trình": "nguyento.*", "Điểm": "2,5", "cite": "[cite: 7]"},
        {"Bài": "4", "Tên bài": "Căn hộ", "File chương trình": "canho.*", "Điểm": "2,5", "cite": "[cite: 7]"}
      ],
      "note": "Chú ý: Dấu * được thay thế bởi pas, cpp, py của ngôn ngữ lập trình được sử dụng tương ứng là Pascal, C++, Python. [cite: 8, 9]"
    },
    "questions": [
      {
        "name": "Bài 1. Tính tiền Taxi (2,5 điểm) [cite: 9]",
        "context": "Năm học 2024-2025 bạn Phúc đạt danh hiệu học sinh xuất sắc, để khích lệ tinh thần cho học tập của con, gia đình bạn chuẩn bị một chuyến tham quan du lịch tại thành phố Phú Quốc. [cite: 10] Sau khi lên lịch trình tham quan các địa điểm du lịch với tổng số km di chuyển là n và tổng thời gian chở khách tham quan là t. [cite: 11] Biết rằng bảng giá cước Taxi và giá dịch vụ được cho như sau: [cite: 12]",
        "tables": [
          [
            {"Số km": "Dưới 2", "Đơn giá (đồng/km)": "25000", "Thời gian chở (giờ)": "Dưới 2", "Đơn giá (đồng/giờ)": "50000", "cite": "[cite: 13]"},
            {"Số km": "Từ 2 đến 12", "Đơn giá (đồng/km)": "15700", "Thời gian chở (giờ)": "Từ 2 đến 5", "Đơn giá (đồng/giờ)": "45000", "cite": "[cite: 13]"},
            {"Số km": "Từ 13 đến 25", "Đơn giá (đồng/km)": "15000", "Thời gian chở (giờ)": "Từ 6 đến 10", "Đơn giá (đồng/giờ)": "40000", "cite": "[cite: 13]"},
            {"Số km": "Từ 26 đến 100", "Đơn giá (đồng/km)": "14500", "Thời gian chở (giờ)": "Từ 11 đến 15", "Đơn giá (đồng/giờ)": "35000", "cite": "[cite: 13]"},
            {"Số km": "Trên 100", "Đơn giá (đồng/km)": "13000", "Thời gian chở (giờ)": "Trên 15", "Đơn giá (đồng/giờ)": "25000", "cite": "[cite: 13]"}
          ]
        ],
        "requirement": "Yêu cầu: Hãy lập trình giúp bạn Phúc tính tổng số tiền thanh toán (Giá cước + Giá dịch vụ). [cite: 14, 15]",
        "input": "Dữ liệu vào: Nhập từ bàn phím số nguyên dương n (1 <= n <= 300) là số km cần di chuyển và số nguyên dương t (0 <= t <= 24) là tổng thời gian khách yêu cầu chở. [cite: 16]",
        "output": "Dữ liệu ra: Xuất ra màn hình số tiền tương ứng. [cite: 17]",
        "examples": [
          {"Dữ liệu vào": "2 \n 2", "Dữ liệu ra": "130700", "Giải thích": "Giá cước: 40700 \n Giá dịch vụ: 90000 \n Số tiền thanh toán: 130700", "cite": "[cite: 20]"}
        ]
      },
      {
        "name": "Bài 2. Bộ ba số (2,5 điểm) [cite: 21]",
        "context": "Cho một số tự nhiên n có k chữ số (1 <= k <= 255). [cite: 22] Số n được biến đổi bằng cách xóa các chữ số giống nhau chỉ giữ lại một số, các chữ số này có thể tạo ra các bộ ba số abc thỏa mãn: a = b + c (b > c). [cite: 23]",
        "requirement": "Yêu cầu: Viết chương trình biến đổi số n và tìm tất cả các bộ ba số thỏa mãn điều kiện trên. [cite: 24, 25]",
        "input": "Dữ liệu vào: Nhập từ bàn phím một số tự nhiên n. [cite: 26]",
        "output": "Dữ liệu ra: Xuất kết quả ra màn hình. [cite: 27] - Dòng đầu là số n sau khi đã xóa các chữ số giống nhau. [cite: 30] - Dòng tiếp theo là các bộ ba số tìm được, nếu không tìm được thì in ra “Khong ton tai”. [cite: 28, 31]",
        "examples": [
          {"Dữ liệu vào": "4359938", "Dữ liệu ra": "43598 \n 954 853", "Giải thích": "Có 2 bộ ba số thỏa mãn a = b + c (b > c) đó là 954 và 853", "cite": "[cite: 32]"}
        ]
      },
      {
        "name": "Bài 3. Bội số nguyên tố (2,5 điểm) [cite: 33]",
        "context": "Cho một số nguyên dương n (1 <= n <= 10^18) và một số nguyên dương k (1 <= k <= 20) [cite: 34] là số lượng các số nguyên tố phân biệt a1, a2, ..., ak (2 <= ai < 10^18). [cite: 35]",
        "requirement": "Yêu cầu: Viết chương trình tìm các số trong n số tự nhiên (từ 1 đến n), có bao nhiêu số chia hết cho ít nhất một trong k số nguyên tố đã cho. [cite: 36, 37]",
        "input": "Dữ liệu vào: \n - Dòng đầu tiên chứa hai số nguyên n và k. [cite: 38, 39] \n - Dòng thứ hai chứa k số nguyên tố phân biệt: a1, a2, ..., ak. [cite: 40]",
        "output": "Dữ liệu ra: \n - In ra một số nguyên là số lượng các số tìm được, nếu không tìm thấy thì xuất số -1. [cite: 41, 42, 43]",
        "examples": [
          {"Dữ liệu vào": "20 2 \n 2 5", "Dữ liệu ra": "12", "Giải thích": "Có 12 số trong khoảng từ 1 đến 20 chia hết cho ít nhất một trong hai số nguyên tố là 2 hoặc 5, đó là: 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20.", "cite": "[cite: 45]"}
        ]
      },
      {
        "name": "Bài 4. Căn hộ (2,5 điểm) [cite: 47]",
        "context": "Công ty XYZ kinh doanh trong lĩnh vực bất động sản. [cite: 48] Công ty có m căn hộ cần bán với nhiều diện tích khác nhau, do số lượng căn hộ có hạn, vì vậy chỉ ưu tiên khách hàng đăng ký trước và có nhu cầu diện tích phù hợp nhất. [cite: 49] Trong đợt này có n khách hàng đăng ký, mỗi khách hàng đưa ra diện tích một căn hộ mong muốn. [cite: 50] Giả sử căn hộ mà khách hàng đăng ký có diện tích là s thì có thể nhận được căn hộ diện tích trong khoảng từ s - k đến s + k (k là số chênh lệch diện tích của công ty đưa ra). [cite: 51] Ưu tiên cho khách hàng có số chênh lệch k nhỏ nhất. [cite: 52]",
        "requirement": "Yêu cầu: Viết chương trình tìm tổng số khách hàng có diện tích chênh lệch k nhỏ nhất và đăng ký sớm nhất. [cite: 53]",
        "input": "Dữ liệu vào: \n - Dòng đầu tiên chứa ba số nguyên n, m, k trong đó: [cite: 54, 55] \n + n là số lượng khách hàng (1 <= n <= 10^3); [cite: 56] \n + m là số lượng căn hộ cần bán (1 <= m <= 10^3) [cite: 57] \n + k là số chênh lệch tối đa cho phép (0 <= k <= 10). [cite: 58] \n - Dòng thứ hai chứa n số nguyên: a1, a2, ..., an (1 <= ai <= 10^9) là diện tích căn hộ mong muốn của từng khách hàng đăng ký mua. [cite: 59] \n - Dòng thứ ba chứa m số nguyên: b1, b2, ..., bm (1 <= bi <= 10^9) là diện tích của các căn hộ cần bán. [cite: 60, 61]",
        "output": "Dữ liệu ra: Xuất ra màn hình số lượng khách hàng nhận được căn hộ thỏa mãn điều kiện. [cite: 62, 63]",
        "examples": [
          {"Dữ liệu vào": "4 3 5 \n 60 45 80 60 \n 30 60 75", "Dữ liệu ra": "2", "Giải thích": "Khách hàng thứ nhất đăng ký diện tích là 60, nhận được căn hộ có diện tích là 60, với chênh lệch là 0. \n - Khách hàng thứ ba đăng ký diện tích là 80, nhận được căn hộ có diện tích là 75, với chênh lệch là 5.", "cite": "[cite: 65]"}
        ]
      }
    ]
  },
  {
    "id": "EXAM_KHTN_LAN1_2025",
    "province": "TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN - TRƯỜNG THPT CHUYÊN KHΤΝ [cite: 71]",
    "title": "ĐỀ THI KHẢO SÁT NĂNG LỰC HỌC SINH LỚP 9 LẦN 1, NĂM HỌC 2025-2026 [cite: 72]",
    "subject": "MÔN THI: TIN HỌC [cite: 73]",
    "duration": "Thời gian làm bài: 150 phút (không kể thời gian phát đề) [cite: 74]",
    "overview": {
      "title": "TỔNG QUAN ĐỀ THI [cite: 76]",
      "table": [
        {"Bài": "Câu 1", "Tên tệp chương trình": "Three", "Tên tệp dữ liệu": "THREE.INP", "Tên tệp kết quả": "THREE.OUT", "Điểm": "2,5", "cite": "[cite: 77]"},
        {"Bài": "Câu 2", "Tên tệp chương trình": "Move", "Tên tệp dữ liệu": "MOVE.INP", "Tên tệp kết quả": "MOVE.OUT", "Điểm": "2,5", "cite": "[cite: 77]"},
        {"Bài": "Câu 3", "Tên tệp chương trình": "Aba", "Tên tệp dữ liệu": "ABA.INP", "Tên tệp kết quả": "ABA.OUT", "Điểm": "2,0", "cite": "[cite: 77]"},
        {"Bài": "Câu 4", "Tên tệp chương trình": "Duo", "Tên tệp dữ liệu": "DUO.INP", "Tên tệp kết quả": "DUO.OUT", "Điểm": "2,0", "cite": "[cite: 77]"},
        {"Bài": "Câu 5", "Tên tệp chương trình": "Pain", "Tên tệp dữ liệu": "PAIN.INP", "Tên tệp kết quả": "PAIN.OUT", "Điểm": "1,0", "cite": "[cite: 77]"}
      ],
      "note": "Dấu * được thay thế bởi CPP hoặc PY tương ứng với ngôn ngữ lập trình C++ hoặc Python. [cite: 78, 79]"
    },
    "questions": [
      {
        "name": "Bài 1: Three (2.5 điểm) [cite: 81]",
        "context": "Trong quá trình vận hành, một trung tâm dữ liệu ghi nhận các mã lỗi phát sinh từ hệ thống máy chủ. [cite: 82] Mỗi lần xảy ra lỗi, hệ thống sẽ lưu lại một số nguyên không âm đại diện cho loại lỗi đó. [cite: 83] Theo quy định kỹ thuật, một mã lỗi được coi là nghiêm trọng nếu nó xuất hiện ít nhất ba lần trong các bản ghi. [cite: 84] Để ưu tiên xử lý, kỹ sư cần xác định mã lỗi nghiêm trọng có giá trị nhỏ nhất. [cite: 85]",
        "input": "Input: \n - Dòng đầu tiên chứa n là số lượng bản ghi lỗi (1 <= n <= 10^5). [cite: 86, 87] \n - n dòng tiếp theo, mỗi dòng chứa một số Ai (0 <= Ai <= 10^6). [cite: 88]",
        "output": "Output: \n In ra một số nguyên duy nhất là mã lỗi nhỏ nhất xuất hiện ít nhất ba lần, hoặc -1 nếu không có mã lỗi nào nghiêm trọng. [cite: 89, 90, 91]",
        "constraints": "Giới hạn: \n - Thời gian: 1 giây, Bộ nhớ: 256 MB. [cite: 92, 93] \n - 20% số test có ràng buộc bổ sung: n <= 10 [cite: 94] \n - 20% số test khác có ràng buộc bổ sung: n <= 1000 [cite: 95] \n - 60% số test còn lại không có ràng buộc bổ sung. [cite: 97]",
        "examples": [
          {"THREE.INP": "6 \n 0 \n 2 \n 2 \n 2 \n 2 \n 3", "THREE.OUT": "2", "Giải thích": "Mặc dù 0 nhỏ hơn, nó chỉ xuất hiện một lần. Số 2 xuất hiện 4 lần, thỏa mãn điều kiện.", "cite": "[cite: 100]"}
        ]
      },
      {
        "name": "Bài 2: Move (2.5 điểm) [cite: 101]",
        "context": "Một tuyến khảo sát địa hình được mô tả bằng lát cắt dọc, bắt đầu tại mốc cao độ 0. Trong quá trình di chuyển dọc theo tuyến, thiết bị ghi lại sự thay đổi cao độ bằng chuỗi ký hiệu: [cite: 102] \n '+' : địa hình tăng cao 1 đơn vị [cite: 103] \n '-' : địa hình giảm thấp 1 đơn vị [cite: 104] \n Chuỗi ký hiệu mô tả sự thay đổi cao độ liên tiếp giữa các điểm đo. [cite: 105] Hãy xác định chênh lệch cao độ lớn nhất giữa điểm cao nhất và điểm thấp nhất trên toàn tuyến khảo sát. [cite: 106]",
        "input": "Input: \n - Dòng đầu tiên chứa n, số đoạn đo (1 <= n <= 10^5). [cite: 107, 108] \n - Dòng thứ hai chứa chuỗi gồm các ký tự '+' và '-'. [cite: 109]",
        "output": "Output: \n In ra một số nguyên duy nhất là chênh lệch cao độ lớn nhất. [cite: 110, 111]",
        "constraints": "Giới hạn: \n - Thời gian: 1 giây, Bộ nhớ: 256 MB. [cite: 112, 113] \n - 30% số test có ràng buộc bổ sung: n <= 10 [cite: 114] \n - 30% số test khác có ràng buộc bổ sung: n <= 1000 [cite: 115] \n - 40% số test còn lại không có ràng buộc bổ sung. [cite: 116]",
        "examples": [
          {"MOVE.INP": "8 \n ++-+-+--", "MOVE.OUT": "2", "Giải thích": "Điểm cao nhất: 2; Điểm thấp nhất: 0", "cite": "[cite: 117]"}
        ]
      },
      {
        "name": "Bài 3: Aba (2 điểm) [cite: 118]",
        "context": "Một hệ thống giám sát an toàn ghi lại trạng thái cảnh báo của hai cảm biến độc lập trong cùng một khoảng thời gian. [cite: 119, 120] Mỗi cảm biến lưu dữ liệu dưới dạng chuỗi nhị phân: [cite: 121] \n 0: trạng thái an toàn; [cite: 122] \n 1: trạng thái cảnh báo. [cite: 123] \n Do độ nhạy khác nhau, hai cảm biến có thể ghi nhận khác nhau ở một số thời điểm. [cite: 125] Để đánh giá độ tin cậy, kỹ sư cần xác định một kịch bản cảnh báo chung dài nhất xuất hiện trong cả hai bản ghi, sao cho kịch bản đó có cấu trúc: [cite: 126] \n 1. Giai đoạn an toàn (chỉ gồm 0) [cite: 127] \n 2. Giai đoạn cảnh báo liên tục (chỉ gồm 1) [cite: 128] \n 3. Giai đoạn trở lại an toàn (chỉ gồm 0) [cite: 129] \n Mỗi giai đoạn có thể rỗng, nhưng thứ tự ba giai đoạn phải được giữ nguyên. [cite: 130] Kịch bản chung có thể được trích xuất bằng cách loại bỏ một số thời điểm đo trong mỗi bản ghi, không làm thay đổi thứ tự còn lại. [cite: 131] Tính độ dài lớn nhất của một kịch bản cảnh báo chung thỏa mãn điều kiện trên. [cite: 132]",
        "input": "Input: \n Gồm 2 dòng: dòng 1 chứa chuỗi nhị phân của cảm biến thứ nhất, dòng 2 chứa chuỗi nhị phân của cảm biến thứ 2; (1 <= độ dài mỗi chuỗi <= 5000). [cite: 133, 134, 135]",
        "output": "Output: \n In ra một số nguyên là độ dài lớn nhất của kịch bản chung hợp lệ. [cite: 136, 137]",
        "constraints": "Giới hạn: \n - Thời gian: 1 giây, Bộ nhớ: 256 MB. [cite: 138, 140] \n - 10% số test có ràng buộc bổ sung: Cả hai xâu chỉ gồm ký tự '0' hoặc chỉ gồm ký tự '1'. [cite: 141] \n - 15% số test khác có ràng buộc bổ sung: độ dài của mỗi chuỗi <= 100 [cite: 142] \n - 75% số test còn lại không có ràng buộc bổ sung. [cite: 143]",
        "examples": [
          {"ABA.INP": "10011010 \n 0101010010", "ABA.OUT": "6", "Giải thích": "Xâu dài nhất thoả mã điều kiện là 001110.", "cite": "[cite: 145]"}
        ]
      },
      {
        "name": "Bài 4: Duo (2 điểm) [cite: 146]",
        "context": "Một doanh nghiệp theo dõi hiệu suất hoạt động hằng ngày của một hệ thống thông qua hai chỉ số độc lập: [cite: 147] Chỉ số A: hiệu suất vận hành [cite: 148] Chỉ số B: mức độ ổn định [cite: 149] Mỗi ngày, hệ thống ghi lại một giá trị cho chỉ số A và một giá trị cho chỉ số B. Ban quản lý muốn xác định một giai đoạn liên tiếp dài nhất mà trong đó hiệu suất trung bình tổng hợp đạt yêu cầu. [cite: 150] Một giai đoạn từ ngày L đến ngày R được coi là đạt chuẩn nếu: trung bình chỉ số A trong giai đoạn đó cộng với trung bình chỉ số B trong cùng giai đoạn không nhỏ hơn một ngưỡng cho trước M. Hãy tìm độ dài lớn nhất của một giai đoạn liên tiếp đạt chuẩn. [cite: 151, 153]",
        "input": "Input: \n - Dòng đầu tiên có 2 số nguyên n và M, lần lượt là số ngày theo dõi và ngưỡng yêu cầu. (1 <= n <= 10^5, 0 <= M <= 10^9). [cite: 154, 155, 156] \n - Dòng thứ hai chứa n số nguyên là các giá trị của chỉ số A (0 <= Ai <= 10^9) [cite: 157] \n - Dòng thứ ba chứa n số nguyên là các giá trị của chỉ số B (0 <= Bi <= 10^9). Các giá trị đều không âm. [cite: 158]",
        "output": "Output: \n In ra một số nguyên duy nhất là độ dài lớn nhất của giai đoạn đạt chuẩn. [cite: 159, 160]",
        "constraints": "Giới hạn: \n - Thời gian: 1 giây, Bộ nhớ: 256 MB. [cite: 162] \n - 10% số test có ràng buộc bổ sung: Bi = 0 với mọi i. [cite: 163] \n - 10% số test khác có ràng buộc bổ sung: A, Bi <= 10^3 [cite: 164] \n - 20% số test khác có ràng buộc bổ sung: n <= 10^3 [cite: 165] \n - 20% số test khác có ràng buộc bổ sung: n <= 10^4 [cite: 166] \n - 40% số test còn lại không có ràng buộc bổ sung. [cite: 167]",
        "examples": [
          {"DUO.INP": "5 5 \n 1 5 2 4 1 \n 1 3 1 2 0", "DUO.OUT": "3", "Giải thích": "Đoạn từ 1 đến 3 thỏa mãn điều kiện. \n (5+2+4)/3 + (3+1+2)/3 = 5.67 > 5", "cite": "[cite: 168]"}
        ]
      },
      {
        "name": "Bài 5: Pain (1 điểm) [cite: 169]",
        "context": "Một khu công nghiệp theo dõi mức nhiệt độ môi trường tại từng thời điểm trong ngày. [cite: 170] Dữ liệu được lưu lại thành một dãy số nguyên, mỗi số biểu thị nhiệt độ đo được tại một thời điểm liên tiếp. [cite: 171] Ban quản lý muốn xác định một khoảng thời gian liên tục dài nhất mà môi trường hoạt động được xem là ổn định, theo các tiêu chí sau: [cite: 172] \n • Nhiệt độ cao nhất trong khoảng đó không vượt quá ngưỡng an toàn X. \n • Nhiệt độ thấp nhất trong khoảng đó không thấp hơn ngưỡng cho phép Y. \n • Để tránh hiện tượng sốc nhiệt, nhiệt độ cao thứ hai trong khoảng đó không được vượt quá mức Z. (Nếu khoảng thời gian chỉ gồm một thời điểm, tiêu chí này được bỏ qua). [cite: 173] Hãy xác định độ dài lớn nhất của một khoảng thời gian liên tục mà môi trường được xem là ổn định theo các tiêu chí trên. [cite: 174]",
        "input": "Input: \n - Dòng đầu tiên có 4 số nguyên n, X, Y, và Z, lần lượt là số phần tử và các giá trị ở trên. (1 <= n <= 10^5, |X|, |Y|, |Z| <= 10^9). [cite: 176, 177, 178] \n - Dòng thứ hai chứa n số nguyên là các giá trị trong A (|Ai| <= 10^9); các giá trị có thể âm hoặc dương. [cite: 179, 180]",
        "output": "Output: \n In ra một số nguyên duy nhất là độ dài lớn nhất của khoảng thời gian ổn định. [cite: 181, 182]",
        "constraints": "Giới hạn: \n - Thời gian: 1 giây, Bộ nhớ: 256 MB. [cite: 183] \n - 20% số test có ràng buộc bổ sung: Z = 10^9 [cite: 184] \n - 20% số test khác có ràng buộc bổ sung: n <= 10^3 [cite: 185] \n - 60% số test còn lại không có ràng buộc bổ sung. [cite: 186]",
        "examples": [
          {"PAIN.INP": "6 6 -1 5 \n 1 7 6 2 0 5", "PAIN.OUT": "4", "Giải thích": "Đoạn từ 3 đến 6 thỏa mãn các điều kiện. \n Số lớn nhất: 6 <= 6 \n Số nhỏ nhất: 0 >= -1 \n Số lớn thứ hai: 5 <= 5.", "cite": "[cite: 188]"}
        ]
      }
    ]
  },
  {
    "id": "EXAM_VINH_PHUC_2026",
    "province": "SỞ GD & ĐT PHÚ THỌ - TRƯỜNG THPT CHUYÊN VĨNH PHÚC [cite: 190, 191]",
    "title": "KỲ THI THỬ TUYỂN SINH VÀO LỚP 10 THPT NĂM HỌC 2026 - 2027 ĐỀ THI MÔN: TIN HỌC [cite: 193]",
    "duration": "Thời gian làm bài: 150 phút (không kể thời gian phát đề) [cite: 194]",
    "overview": {
      "title": "Tổng quan về đề thi [cite: 192]",
      "table": [
        {"#": "1", "Tên bài": "Dãy vô hạn", "Chương trình": "KXKBLOCK.*", "Dữ liệu": "Nhập từ bàn phím", "Kết quả": "Ghi ra màn hình", "Thời gian": "0.5s/test", "Điểm": "2.5", "cite": "[cite: 195]"},
        {"#": "2", "Tên bài": "Số mềm", "Chương trình": "SOFTNUM.*", "Dữ liệu": "Nhập từ bàn phím", "Kết quả": "Ghi ra màn hình", "Thời gian": "0.5s/test", "Điểm": "2.5", "cite": "[cite: 195]"},
        {"#": "3", "Tên bài": "Truy vấn chia hết", "Chương trình": "DIVQUERY.*", "Dữ liệu": "Nhập từ bàn phím", "Kết quả": "Ghi ra màn hình", "Thời gian": "0.5s/test", "Điểm": "2.5", "cite": "[cite: 195]"},
        {"#": "4", "Tên bài": "Phần tử nhìn thấy", "Chương trình": "VISIBLE.*", "Dữ liệu": "Nhập từ bàn phím", "Kết quả": "Ghi ra màn hình", "Thời gian": "0.5s/test", "Điểm": "2.5", "cite": "[cite: 195]"}
      ],
      "note": "Lưu ý: Thí sinh thay * trong tên chương trình thành PAS/CPP/PY tuỳ theo ngôn ngữ lập trình mà thí sinh sử dụng là Pascal, C/C++ hay Python. [cite: 196]"
    },
    "questions": [
      {
        "name": "Câu 1. Dãy vô hạn [KXKBLOCK] [cite: 198]",
        "context": "Xét một dãy vô hạn (a1, a2, a3, ...) gồm các số nguyên dương, được xây dựng theo các nhóm liên tiếp như sau: \n - Nhóm thứ 1 gồm 1 khối 1 phần tử 1 [cite: 199] \n - Nhóm thứ 2 gồm 2 khối, mỗi khối 2 phần tử giống nhau, khối đầu chứa giá trị 2, khối sau chứa giá trị 3 \n - Nhóm thứ 3 gồm 3 khối, mỗi khối 3 phần tử giống nhau, giá trị trong các khối thứ tự là 4,5,6 [cite: 200] \n - Tổng quát, nhóm thứ k gồm k khối, mỗi khối có k phần tử giống nhau, các giá trị là nguyên liên tiếp [cite: 201] \n Dãy bắt đầu như sau: [1], [2,2|3,3], [4,4,4|5,5,5|6,6,6], [7,7,7,7|8,8,8,8|9,9,9,9|10,10,10,10], ... [cite: 202, 203]",
        "requirement": "Yêu cầu: Tìm giá trị của phần tử thứ n trong dãy. [cite: 204]",
        "input": "Dữ liệu (nhập từ bàn phím): \n • Một dòng chứa số nguyên n (1 <= n <= 10^18) [cite: 205, 206]",
        "output": "Kết quả (ghi ra màn hình): \n • In ra số nguyên an [cite: 207, 208, 209]",
        "constraints": "Subtasks: \n 1. 30%: n <= 100 \n 2. 25%: n <= 10^6 \n 3. 15%: n <= 10^12 \n 4. 15%: n <= 10^14 \n 5. 15%: n <= 10^18 [cite: 210, 211]",
        "examples": [
          {"Input": "3", "Output": "2", "Giải thích": "a3 là số thứ 2 trong khối đầu tiên của nhóm 2 => a3 = 2", "cite": "[cite: 213]"},
          {"Input": "13", "Output": "6", "Giải thích": "a13 là số thứ 2 trong khối thứ 3 của nhóm 3 => a13 = 6", "cite": "[cite: 213]"}
        ]
      },
      {
        "name": "Câu 2. Số mềm [SOFTNUM] [cite: 214]",
        "context": "An có hứng thú với các số nguyên dương có tính chất: trong biểu diễn thập phân của số, hai chữ số liền kề chênh lệch không quá 1. An gọi các số như vậy là các số mềm. [cite: 215] Với một số mềm có n+1 chữ số, An mã hoá nó bằng bộ đôi: chữ số bắt đầu d và xâu S độ dài n chỉ gồm các ký tự + - =. [cite: 216] Khi đó số mềm được xác định như sau: \n - Chữ số đầu tiên là d. [cite: 217, 218] \n Xét lần lượt các ký tự trong xâu: [cite: 220] \n - Nếu là +, chữ số tiếp theo lớn hơn chữ số trước đó 1 đơn vị. [cite: 221] \n - Nếu là -, chữ số tiếp theo nhỏ hơn chữ số trước đó 1 đơn vị. [cite: 222] \n - Nếu là =, chữ số tiếp theo bằng chữ số trước đó. [cite: 223] \n An đã quên mất d, chỉ nhớ xâu S. Hãy giúp An tìm số mềm nhỏ nhất có xâu mã hoá là S hoặc chỉ ra rằng An nhớ nhầm xâu S. [cite: 224]",
        "input": "Dữ liệu (nhập từ bàn phím): \n • Một dòng duy nhất chứa xâu S độ dài nhỏ hơn 100, chỉ gồm các ký tự: + - = [cite: 225, 226]",
        "output": "Kết quả (ghi ra màn hình): \n - In ra số mềm tìm được (các chữ số liền nhau, không có khoảng trắng, chữ số đầu tiên khác 0). [cite: 227, 229] \n - Nếu không tồn tại số thỏa mãn (An nhớ nhầm xâu mã hoá), in ra 0. [cite: 230]",
        "constraints": "Subtasks: \n 1. 50%: Xâu S có độ dài không vượt quá 6 \n 2. 50%: Không có ràng buộc bổ sung [cite: 231, 234]",
        "examples": [
          {"Input": "+--+=+", "Output": "1210112", "Giải thích": "Bắt đầu từ 1, + -> 2; - -> 1; - -> 0; + -> 1; = -> 1; + -> 2", "cite": "[cite: 233]"},
          {"Input": "+++++++++", "Output": "0", "Giải thích": "Dù bắt đầu từ chữ số nào cũng sẽ vượt quá 9", "cite": "[cite: 233]"}
        ]
      },
      {
        "name": "Câu 3. Truy vấn chia hết [DIVQUERY] [cite: 235]",
        "context": "Cho dãy gồm N số nguyên dương đôi một phân biệt A=(a1, a2, ..., aN). [cite: 236] Hãy trả lời Q truy vấn, mỗi truy vấn gồm ba số nguyên dương l, r, d, yêu cầu đếm số phần tử ai trong A thoả mãn: \n • l <= i <= r [cite: 237, 238, 239] \n • ai hoặc là ước số của d, hoặc là bội số của d. [cite: 240, 241]",
        "input": "Dữ liệu (nhập từ bàn phím): \n • Dòng 1: hai số nguyên N, Q - số phần tử của dãy A và số truy vấn (1 <= N, Q <= 10^5) [cite: 242, 243] \n • Dòng 2: N số nguyên dương đôi một phân biệt a1, a2, ..., aN (1 <= ai <= 2.10^5; ai != aj mọi i != j) [cite: 244] \n • Q dòng tiếp theo, mỗi dòng chứa ba số nguyên l, r, d (1 <= l <= r <= N, 1 <= d <= 2.10^5) [cite: 245]",
        "output": "Kết quả (ghi ra màn hình): \n • In ra một dòng gồm Q số nguyên, số thứ i là kết quả của truy vấn thứ i. [cite: 246, 247]",
        "constraints": "Subtasks: \n 1. 40%: N, Q <= 1000 \n 2. 60%: Không có ràng buộc bổ sung [cite: 248, 251]",
        "examples": [
          {"Input": "8 5 \n 12 10 3 18 6 72 28 42 \n 1 6 6 \n 3 7 7 \n 2 6 9 \n 1 5 5 \n 4 8 4", "Output": "3 \n 1 \n 3 \n 1 \n 2", "Giải thích": "Truy vấn 1: Q([12 10 3 18 6 72 28 42], 6) = {12, 18, 6} \n Truy vấn 2: Q([3 18 6 72 28], 7) = {28} \n Truy vấn 3: Q([10 3 18 6 72], 9) = {3, 18, 72} \n Truy vấn 4: Q([12 10 3 18 6], 5) = {10} \n Truy vấn 5: Q([18 6 72 28 42], 4) = {72, 28}", "cite": "[cite: 250, 252, 253, 254, 255, 256]"}
        ]
      },
      {
        "name": "Câu 4. Phần tử nhìn thấy [VISIBLE] [cite: 257]",
        "context": "Cho dãy số nguyên dương a1, a2, ..., aN. [cite: 258] Với mỗi đoạn con [l,r] (1 <= l <= r <= N): [cite: 259] \n • Một phần tử ai (l <= i <= r) được gọi là nhìn thấy từ bên trái, nếu không tồn tại phần tử aj (l <= j < i) sao cho aj >= ai [cite: 260] \n • Một phần tử ai (l <= i <= r) được gọi là nhìn thấy nếu bên phải, nếu không tồn tại phần tử aj (i < j <= r) sao cho aj >= ai [cite: 261, 262, 263] \n Giá trị của đoạn [l, r], ký hiệu f(l,r), là số lượng chỉ số (l <= i <= r) khác nhau được nhìn thấy từ ít nhất một trong hai phía. [cite: 264]",
        "requirement": "Yêu cầu: Tính tổng giá trị của tất cả các đoạn con [l, r], nghĩa là tính tổng Sum(l=1 to n) Sum(r=1 to n) f(l,r) [cite: 265, 267]",
        "input": "Dữ liệu (nhập từ bàn phím): \n • Dòng 1: số nguyên N (1 <= N <= 100000) [cite: 266, 268] \n • Dòng 2: N số nguyên a1, a2, ..., aN (1 <= ai <= 10^9) [cite: 269]",
        "output": "Kết quả (ghi ra màn hình): \n • In ra một số nguyên - tổng giá trị của tất cả các đoạn con. [cite: 270, 271]",
        "constraints": "Subtasks: \n 1. 20%: N <= 50 \n 2. 20%: N <= 300 \n 3. 25%: N <= 5000 \n 4. 35%: Không có ràng buộc bổ sung [cite: 271, 272]",
        "examples": [
          {"Input": "4 \n 4 2 3 2", "Output": "18", "Giải thích": "f(1,1)=1 các đoạn độ dài 1 đều có giá trị bằng 1 \n f(2,2)=1 \n f(3,3)=1 \n f(4,4)=1 \n f(1,2)=2, các đoạn độ dài 2 đều có giá trị bằng 2 \n f(2,3)=2 \n f(3,4)=2 \n f(1,3)=2, đoạn [423]: chỉ có hai phần tử đầu mỗi phía là nhìn thấy \n f(2,4)=3, đoạn [232]: cả 3 phần tử đều nhìn thấy \n f(1,4)=3, đoạn [4232]: phần tử thứ hai không nhìn thấy được từ cả hai phía \n Trong số 36 đoạn con của dãy, có 8 đoạn giá trị bằng 1, 14 đoạn giá trị bằng 2, 11 đoạn giá trị bằng 3, 3 đoạn giá trị bằng 4", "cite": "[cite: 277, 278, 279, 283-298]"}
        ]
      }
    ]
  },

{
    "id": "EXAM_KHTN_08032026",
    "province": "Trường THPT Chuyên KHTN",
    "title": "ĐỀ THI KHẢO SÁT LỚP 9 08-03-2026",
    "overview": {
      "title": "Tổng quan Đề thi",
      "table": [
        {"Bài": "vali", "Mã bài": "vali.[cpp | py]", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "2", "cite": "[cite: 303]"},
        {"Bài": "politik", "Mã bài": "politik.[cpp | py]", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "2", "cite": "[cite: 303]"},
        {"Bài": "string", "Mã bài": "string.[cpp | py]", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "2", "cite": "[cite: 303]"},
        {"Bài": "divisor", "Mã bài": "divisor.[cpp | py]", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "2", "cite": "[cite: 303]"},
        {"Bài": "number", "Mã bài": "number.[cpp | py]", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "1", "cite": "[cite: 303]"},
        {"Bài": "cream", "Mã bài": "cream.[cpp | py]", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "1", "cite": "[cite: 303]"}
      ]
    },
    "questions": [
      {
        "name": "vali",
        "context": "Kem và cá sấu Kẹp quyết định đi du lịch. Chúng đi bộ và mang chung một chiếc vali. Chúng quyết định một trong hai cầm vali, và người còn lại sẽ cõng người kia cùng với chiếc vali này. Được biết, trọng lượng của Kem là A kg và cậu có thể mang B kg, trọng lượng của cá sấu Kẹp là C kg và cậu có thể mang D kg. Trọng lượng của vali chứa đồ là Z kg. Trước khi bắt đầu cuộc hành trình, họ có thể vứt bỏ một phần hàng hóa có khối lượng bất kỳ khỏi vali. Họ có thể mang đi khối lượng hàng hóa lớn nhất là bao nhiêu theo cách này? Trọng lượng của một chiếc vali rỗng nên được bỏ qua.",
        "input": "Input: Mỗi dòng ghi 1 trong 5 số tự nhiên A, B, C, D và Z. Tất cả các số không vượt quá 10^18.",
        "output": "Output: In ra khối lượng hàng hóa tối đa trong vali mà Kem Kẹp có thể mang theo, với điều kiện họ đi du lịch theo cách được mô tả ở trên. Nếu không ai trong số họ có thể mang người kia đi, tức là không thể đi du lịch, in ra -1.",
        "constraints": "Giới hạn: \n - 12% số test có Z = 1 \n - 12% số test có A + B = C + D.",
        "examples": [
          {"Input": "50 \n 30 \n 100 \n 70 \n 80", "Output": "20", "Giải thích": "Kem nặng 50 kg và có thể mang 30 kg, Kẹp nặng 100 kg và có thể mang 70 kg. Khối lượng ban đầu của hàng hóa trong vali là 80 kg. Nếu Kẹp chở Kem, Kem sẽ giữ chiếc vali nặng 30 kg... trọng lượng của Kem với vali là 80 kg, nhưng Kẹp chỉ có thể nâng 70 kg, 10 kg sẽ phải ném ra, vali trở thành 20 kg.", "cite": "[cite: 321, 334-338]"},
          {"Input": "70 \n 30 \n 100 \n 70 \n 80", "Output": "0", "Giải thích": "Kem nặng 70 kg và Kẹp chỉ có thể nâng 70 kg, vì vậy trọng lượng của vali sẽ là 0.", "cite": "[cite: 321, 339]"},
          {"Input": "110 \n 30 \n 100 \n 70 \n 80", "Output": "-1", "Giải thích": "Không ai trong số hai người có thể nâng người kia lên ngay cả khi không có vali.", "cite": "[cite: 321, 339]"}
        ]
      },
      {
        "name": "politik",
        "context": "Một thành phố tổ chức đại hội ba đảng, với số lượng đại biểu lần lượt là a, b và c từ đảng A, đảng B và đảng C. Tất cả các đại biểu đều muốn ở lại khách sạn tốt nhất, và vì tổng số người đến là 3xn, giám đốc khách sạn quyết định cung cấp n phòng 3 người. Nhân viên lễ tân (một người ủng hộ bí mật của đảng A) có thể sắp xếp khách theo ý mình. Cậu biết rằng nếu có 2 đảng viên của một đảng và một người từ một đảng khác ở chung một phòng, thì hai người cùng đảng sẽ thuyết phục được người thứ ba gia nhập đảng của họ. Tính số lượng thành viên lớn nhất của đảng A có thể có trong khách sạn sau khi sắp xếp như vậy.",
        "input": "Input: Ba dòng đầu vào chứa ba số nguyên không âm: a, b và c (0 <= a, b, c < 10^8, a+b+c >= 3). Đảm bảo tổng của chúng chia hết cho 3.",
        "output": "Output: In ra một số nguyên không âm duy nhất - câu trả lời cho câu hỏi.",
        "constraints": "Giới hạn: 40% số test có a < b và c = 0",
        "examples": [
          {"Input": "3 \n 2 \n 1", "Output": "4", "Giải thích": "Có 2 phòng ba người. Nếu hai đại biểu của đảng A ở chung một phòng với một đại diện của đảng B, và một đại diện từ mỗi đảng ở phòng thứ hai, thì đại diện của đảng B từ phòng đầu tiên sẽ chuyển sang đảng A, và không có thay đổi nào xảy ra trong phòng thứ hai. Tổng cộng sẽ có bốn người trong đảng A.", "cite": "[cite: 352-359]"}
        ]
      },
      {
        "name": "string",
        "context": "Một chuỗi con được gọi là khác biệt nếu mỗi chữ cái trong đó xuất hiện không quá một lần. Kem thích chơi với các từ theo cách sau. Cậu lấy một từ và tách nó thành các chuỗi con khác biệt. Ví dụ: từ «abba» có thể được tách thành các chuỗi con khác biệt theo 4 cách: abba, ab ba, a b ba, ab ba. Tuy nhiên, Kem không phải lúc nào cũng có thể tách từ đúng. Hãy giúp cậu đếm tất cả các cách chia từ thành các chuỗi con khác biệt. Các chuỗi con trong cách tách không được để trống.",
        "input": "Input: Dòng đầu ghi từ s. (Từ s chỉ chứa các chữ cái tiếng Anh in thường, |s| <= 10^5).",
        "output": "Output: In ra số cách tách một từ thành các chuỗi con khác biệt theo mod 998244853.",
        "constraints": "Giới hạn: \n - 60% số test có |s| <= 1000. \n - 40% số test có |s| <= 10^5.",
        "examples": [
          {"Input": "abcbca", "Output": "20", "cite": "[cite: 380]"},
          {"Input": "abba", "Output": "4", "cite": "[cite: 380]"}
        ]
      },
      {
        "name": "divisor",
        "context": "Cho số nguyên dương n, in ra tất cả ước số nguyên dương của số n.",
        "input": "Input: Dòng đầu ghi số n (n <= 10^12).",
        "output": "Output: Liệt kê tất cả các ước số của số n, từ nhỏ đến lớn, mỗi số trên một dòng.",
        "constraints": "Giới hạn: \n - 30% số test có n <= 10^6. \n - 70% số test còn lại không có ràng buộc bổ sung.",
        "examples": [
          {"Input": "12", "Output": "1 \n 2 \n 3 \n 4 \n 6 \n 12", "cite": "[cite: 390]"}
        ]
      },
      {
        "name": "number",
        "context": "Cho dãy số nguyên dương a gồm n số phân biệt a1, a2, ..., an. Cho q truy vấn, mỗi truy vấn gồm 2 chỉ số i và j. In ra độ dài cấp số cộng dài nhất của dãy a mà chứa ai và aj. Các phần tử của cấp số cộng là các phần tử của dãy a, không quan tâm đến vị trí trong a.",
        "input": "Input: \n - Dòng đầu ghi 2 số n, q (1 <= n <= 1000, 1 <= q <= 10^6). \n - Dòng thứ 2 ghi n số ai (1 <= ai <= 2000). \n - Mỗi dòng trong q dòng tiếp theo ghi 2 chỉ số i và j (1 <= i < j <= n).",
        "output": "Output: In ra q dòng, mỗi dòng là kết quả của từng truy vấn.",
        "constraints": "Giới hạn: \n - 40% số test có: n <= 100, q <= 100 \n - 40% số test có: n <= 1000, q <= 1000 \n - 20% số test có: Không có ràng buộc bổ sung.",
        "examples": [
          {"Input": "6 7 \n 2 6 5 1 4 8 \n 1 5 \n 1 4 \n 2 3 \n 2 5 \n 4 6 \n 3 4 \n 1 6", "Output": "4 \n 2 \n 3 \n 4 \n 2 \n 2 \n 4", "cite": "[cite: 407]"}
        ]
      },
      {
        "name": "cream",
        "context": "Kem đi học về và nhận ra mình quên mua kem. Cậu phải thật khẩn trương: một trận đấu bóng yêu thích của cậu sẽ được phát sóng trên TV trong n phút nữa. Quãng đường từ nhà Kem đến tiệm kem mất t phút, và quãng đường về cũng mất chừng đó thời gian. Việc mua kem sẽ mất một phút. Đảm bảo 2xt + 1 <= n. Theo dự báo thời tiết, mưa sẽ rơi trong n phút tiếp theo, và cứ mỗi phút thứ j, lượng mưa dj sẽ rơi trong phút đó. Kem muốn tổng lượng mưa rơi trong khi cậu đang đi bộ trên đường càng ít càng tốt. Kem có thể trì hoãn việc rời nhà, đợi một chút ở tiệm kem, hoặc không rời đi ngay sau khi mua kem. Nhiệm vụ của bạn là xác định tổng lượng mưa tối thiểu có thể rơi trong khi Kem ở ngoài trời.",
        "input": "Input: \n - Dòng đầu tiên ghi số nguyên n (3 <= n <= 10^5) - thời gian tối đa mà Kem phải về nhà. \n - Dòng thứ hai ghi số nguyên t (1 <= t, 2t+1 <= n) - thời gian đi bộ 1 chiều. \n - Mỗi dòng trong n dòng tiếp theo chứa một số nguyên dj (1 <= dj <= 10^3) lượng mưa rơi trong phút thứ j.",
        "output": "Output: In ra lượng mưa tối thiểu rơi xuống trong khi Kem đang đi bộ trên đường.",
        "examples": [
          {"Input": "18 \n 4 \n 5 \n 2 \n 1 \n 4 \n 2 \n 1 \n 11 \n 3 \n 2 \n 1 \n 14 \n 12 \n 3 \n 1 \n 2 \n 1 \n 6 \n 2", "Output": "15", "Giải thích": "Quyết định tốt nhất của Cậu là đợi đến 13 phút: nếu cậu rời tiệm kem vào lúc đó, lượng mưa sẽ rơi trong khi cậu ở ngoài là 3+1+2+1=7. Trước đó cậu rời nhà ở phút 3 mất 8 lượng mưa. Tổng cộng 15.", "cite": "[cite: 425-429]"}
        ]
      }
    ]
  },
  {
    "id": "EXAM_KHTN_LAN3_2025_2026",
    "province": "TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN TRƯỜNG THPT CHUYÊN KHΤΝ",
    "title": "ĐỀ THI KHẢO SÁT NĂNG LỰC HỌC SINH LỚP 9 LẦN 3, NĂM HỌC 2025-2026",
    "subject": "MÔN THI: TIN HỌC",
    "duration": "Thời gian làm bài: 150 phút (không kể thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN ĐỀ THI",
      "table": [
        {"Câu": "1", "Tên tệp chương trình": "SUM.*", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "2,0", "cite": "[cite: 436]"},
        {"Câu": "2", "Tên tệp chương trình": "GHEP.*", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "2,0", "cite": "[cite: 436]"},
        {"Câu": "3", "Tên tệp chương trình": "WATER.*", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "1,5", "cite": "[cite: 436]"},
        {"Câu": "4", "Tên tệp chương trình": "FARM.*", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "1,5", "cite": "[cite: 436]"},
        {"Câu": "5", "Tên tệp chương trình": "MOD.*", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "1,5", "cite": "[cite: 436]"},
        {"Câu": "6", "Tên tệp chương trình": "TUI.*", "Dữ liệu vào": "stdin", "Dữ liệu ra": "stdout", "Điểm": "1,5", "cite": "[cite: 436]"}
      ]
    },
    "questions": [
      {
        "name": "Câu 1. SUM",
        "context": "Cho một dãy gồm N số nguyên dương a1, a2, ..., an và một số nguyên dương K. Hãy tìm tổng của tất cả các phần tử trong dãy chia hết cho K. Nếu không có phần tử nào chia hết cho K, in ra 0.",
        "input": "Input: \n - Dòng đầu tiên chứa hai số nguyên dương N và K (1 <= N <= 10^5, 1 <= K <= 10^9). \n - Dòng thứ hai chứa N số nguyên dương a1, a2, ..., an (1 <= ai <= 10^9).",
        "output": "Output: In ra một số nguyên duy nhất: tổng của các phần tử chia hết cho K.",
        "constraints": "Giới hạn: \n - Thời gian: 1 giây, Bộ nhớ: 256 MB. \n - 20% số test có ràng buộc bổ sung: K = 1. \n - 20% số test khác có ràng buộc bổ sung: N <= 1000. \n - 60% số test còn lại không có ràng buộc bổ sung.",
        "examples": [
          {"Input": "5 3 \n 6 7 9 2 12", "Output": "27", "Giải thích": "Chia hết cho 3: 6, 9, 12. Tổng = 6 + 9 + 12 = 27.", "cite": "[cite: 453]"}
        ]
      },
      {
        "name": "Câu 2. GHЕР",
        "context": "Một cửa hàng có 4 loại nguyên liệu và 4 công thức. Mỗi nguyên liệu có một chỉ số chất lượng ai và mỗi công thức có một hệ số khó bi. Khi kết hợp nguyên liệu i với công thức j, điểm thành phẩm là: điểm = ai x bj. Bạn được chọn đúng một nguyên liệu và đúng một công thức. Hãy tìm điểm thành phẩm lớn nhất có thể.",
        "input": "Input: \n - Dòng thứ nhất chứa 4 số nguyên: a1, a2, a3, a4 (-10^9 <= ai <= 10^9). \n - Dòng thứ hai chứa 4 số nguyên: b1, b2, b3, b4 (-10^9 <= bj <= 10^9).",
        "output": "Output: In ra một số duy nhất: điểm thành phẩm lớn nhất có thể.",
        "constraints": "Giới hạn: \n - Thời gian: 1 giây, Bộ nhớ: 256 MB. \n - 20% số test có ràng buộc bổ sung: -10 <= ai <= 10. \n - 30% số test khác có ràng buộc bổ sung: -10^3 <= ai <= 10^3 \n - 50% số test còn lại không có ràng buộc bổ sung.",
        "examples": [
          {"Input": "3 -2 5 1 \n 3 -5 7 1", "Output": "35", "Giải thích": "Ghép a3 = 5 với b3 = 7: 5 x 7 = 35", "cite": "[cite: 473]"}
        ]
      },
      {
        "name": "Câu 3. WATER",
        "context": "Bạn có ba chiếc cốc có dung tích lần lượt là A, B và C lít. Ban đầu, cốc 1 chứa đầy nước (A lít), cốc 2 và cốc 3 đều rỗng. Bạn được cho một danh sách gồm N thao tác. Mỗi thao tác có dạng \"u v\" (1 <= u, v <= 3, u != v), nghĩa là rót nước từ cốc u sang cốc v. Khi rót, bạn rót cho đến khi cốc u hết nước hoặc cốc v đầy, tùy điều kiện nào xảy ra trước. Hãy in ra lượng nước trong ba cốc sau khi thực hiện xong.",
        "input": "Input: \n - Dòng đầu tiên chứa ba số nguyên dương A, B, C (1 <= A, B, C <= 10^9) - dung tích của ba cốc. \n - Dòng thứ hai chứa một số nguyên dương N (1 <= N <= 10^5) - số lượng thao tác. \n - N dòng tiếp theo, mỗi dòng chứa hai số nguyên u và v (1 <= u, v <= 3, u != v).",
        "output": "Output: In ra ba số nguyên trên một dòng, cách nhau bởi dấu cách: lượng nước trong cốc 1, cốc 2 và cốc 3.",
        "constraints": "Giới hạn: \n - Thời gian: 1 giây, Bộ nhớ: 256 MB. \n - 30% số test có ràng buộc bổ sung: tất cả thao tác chỉ liên quan đến cốc 1 và cốc 2 (u, v thuộc {1,2}). \n - 30% số test khác có ràng buộc bổ sung: N <= 100 \n - 40% số test còn lại không có ràng buộc bổ sung.",
        "examples": [
          {"Input": "10 7 3 \n 5 \n 1 2 \n 2 3 \n 3 1 \n 2 3 \n 1 2", "Output": "0 7 3", "Giải thích": "Ban đầu: (10, 0, 0). Sau đó rót qua lại theo thao tác...", "cite": "[cite: 495]"},
          {"Input": "6 4 3 \n 5 \n 1 2 \n 2 3 \n 1 2 \n 2 3 \n 3 1", "Output": "3 3 0", "cite": "[cite: 497]"}
        ]
      },
      {
        "name": "Câu 4. FARM",
        "context": "Một nông trại có N thửa ruộng xếp thành một hàng, thửa thứ i có giá trị thu hoạch là ai (có thể âm). Bạn muốn chọn một số thửa để thu hoạch sao cho tổng giá trị lớn nhất có thể. Tuy nhiên, sau khi thu hoạch một thửa, bạn phải bỏ qua ít nhất K thửa liền kề tiếp theo trước khi thu hoạch thửa tiếp. Bạn cũng có thể chọn không thu hoạch thửa nào (tổng = 0).",
        "input": "Input: \n - Dòng đầu tiên chứa hai số nguyên N và K (1 <= N <= 10^6, 0 <= K <= N-1). \n - Dòng thứ hai chứa N số nguyên a1, a2,..., an (-10^9 <= ai <= 10^9).",
        "output": "Output: In ra một số nguyên duy nhất: tổng giá trị thu hoạch lớn nhất.",
        "constraints": "Giới hạn: \n - Thời gian: 1 giây, Bộ nhớ: 256 MB. \n - 25% số test: N <= 20 \n - 25% số test: N <= 5000, K <= 5000 \n - 25% số test: K <= 1 \n - 25% số test không có ràng buộc bổ sung.",
        "examples": [
          {"Input": "5 1 \n 3 2 1 8 5", "Output": "16", "Giải thích": "Thu hoạch thửa 1, 3, 5: 3 + 1 + 8 = 16. (Xin lỗi, giải thích đúng là: 3 + 5 + 8 = 16, ứng với phần tử 3, 5 và 8 ở vị trí 1, 3(sai), thửa 4 là 8, thửa 5 là 5... Chắc là thu hoạch 3, 8 và 5).", "cite": "[cite: 517]"},
          {"Input": "6 2 \n 5 -3 4 -1 6 2", "Output": "11", "Giải thích": "Thu hoạch thửa 1 và 5: 5 + 6 = 11.", "cite": "[cite: 519]"},
          {"Input": "4 1 \n -5 -3 -1 -4", "Output": "0", "Giải thích": "Tất cả âm, không thu hoạch.", "cite": "[cite: 521]"}
        ]
      },
      {
        "name": "Câu 5. MOD",
        "context": "Có T câu đố, mỗi câu đố cho hai số nguyên 0 <= L <= R <= 10^10000, yêu cầu tìm số tự nhiên x thỏa mãn 2^x có cùng số dư với x^2 khi chia cho 7 và L <= x <= R.",
        "input": "Input: \n - Dòng đầu tiên gồm 2 số nguyên dương subtask_id (1 <= subtask_id <= 4) và số lượng câu đố T (1 <= T <= 10). \n - T dòng tiếp theo mỗi dòng gồm 2 số tự nhiên L, R (0 <= L <= R <= 10^10000).",
        "output": "Output: In ra T dòng, mỗi dòng gồm 1 số nguyên là số lượng giá trị x thỏa mãn điều kiện của câu đố tương ứng.",
        "constraints": "Giới hạn: \n - Subtask 1: 0 <= L <= R <= 10^5. \n - Subtask 2: 0 <= L <= R <= 10^18, R-L+1 <= 10^5 \n - Subtask 3: 0 <= L <= R <= 10^18. \n - Subtask 4: 0 <= L <= R <= 10^10000.",
        "examples": [
          {"Input": "1 2 \n 0 20 \n 36 67", "Output": "6 \n 9", "Giải thích": "Các số tự nhiên x thỏa mãn ở câu đố thứ nhất là 2, 4, 5, 6, 10, 15 và ở câu đố thứ hai là 36, 44, 46, 47, 48, 52, 57, 65, 67.", "cite": "[cite: 544]"}
        ]
      },
      {
        "name": "Câu 6. TUI",
        "context": "Kiên chỉ mang theo một chiếc túi nhỏ chứa được tối đa S kg, trong khi căn phòng lại có tới n viên đá quý với viên thứ i có khối lượng wi kg và có giá trị là vi tiền. Hãy giúp anh ấy chọn đá vào túi sao cho mỗi viên đá chỉ được lấy một lần mà đồng thời kiếm được nhiều lợi nhuận nhất.",
        "input": "Input: \n - Dòng đầu gồm 3 số subtask_id (1 <= subtask_id <= 3), n, S. \n - Trong n dòng tiếp theo, dòng thứ i gồm một cặp số (Wi, Vi) biểu thị khối lượng và giá trị của từng viên đá.",
        "output": "Output: In ra một số thực là số tiền tối đa có thể kiếm được, làm tròn đến 6 chữ số sau dấu phẩy.",
        "constraints": "Giới hạn: \n - Subtask 1: n, S, Wi, Vi là các số nguyên. 1 <= n <= 100, 0 <= S <= 10^5, 1 <= Wi, Vi <= 10^9. \n - Subtask 2: n là số nguyên. S, Wi, Vi là các số thực. 1 <= n <= 100. \n - Subtask 3: n là số nguyên. S, Wi, Vi là số thực. 1 <= n <= 36, 0 <= S <= 10^18.",
        "examples": [
          {"Input": "1 5 67 \n 67 90 \n 40 61 \n 26 41 \n 66 101 \n 67 102", "Output": "102.000000", "Giải thích": "chọn viên đá quý thứ 2 và thứ 3, tổng cân nặng là 66 và tổng giá trị là 102.", "cite": "[cite: 567]"}
        ]
      }
    ]
  },
  {
    "id": "EXAM_NAM_DINH_2025_2026",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO NAM ĐỊNH",
    "title": "ĐỀ THI TUYỂN SINH LỚP 10 THPT NĂM HỌC 2025 - 2026",
    "subject": "MÔN: TIN HỌC (Đề chuyên)",
    "duration": "Thời gian làm bài: 150 phút",
    "overview": {
      "title": "TỔNG QUAN ĐỀ THI",
      "table": [
        {"TT": "1", "Tên bài": "Bằng nhau", "Tên tệp chương trình": "BANGNHAU.*", "Tên tệp dữ liệu vào": "BANGNHAU.INP", "Tên tệp dữ liệu ra": "BANGNHAU.OUT", "Điểm": "2,0", "cite": "[cite: 576]"},
        {"TT": "2", "Tên bài": "Khác nhau", "Tên tệp chương trình": "KHACNHAU.*", "Tên tệp dữ liệu vào": "KHACNHAU.INP", "Tên tệp dữ liệu ra": "KHACNHAU.OUT", "Điểm": "2,0", "cite": "[cite: 576]"},
        {"TT": "3", "Tên bài": "Cắt dây", "Tên tệp chương trình": "CATDAY.*", "Tên tệp dữ liệu vào": "CATDAY.INP", "Tên tệp dữ liệu ra": "CATDAY.OUT", "Điểm": "2,0", "cite": "[cite: 576]"},
        {"TT": "4", "Tên bài": "Chính phương", "Tên tệp chương trình": "CHINHPHUONG.*", "Tên tệp dữ liệu vào": "CHINHPHUONG.INP", "Tên tệp dữ liệu ra": "CHINHPHUONG.OUT", "Điểm": "2,0", "cite": "[cite: 576]"},
        {"TT": "5", "Tên bài": "Chụp ảnh", "Tên tệp chương trình": "CHUPANH.*", "Tên tệp dữ liệu vào": "CHUPANH.INP", "Tên tệp dữ liệu ra": "CHUPANH.OUT", "Điểm": "2,0", "cite": "[cite: 576]"}
      ]
    },
    "questions": [
      {
        "name": "Bài 1. (2.0 điểm) BẰNG NHAU",
        "context": "An có 4 quả cam, mỗi quả có khối lượng lần lượt là a, b, c và d. An dự định cho hai em của mình cả 4 quả cam. Khi chia cho hai em, An chia theo quả chứ không bổ cam để chia.",
        "requirement": "Yêu cầu: Em hãy cho biết An có thể chia cho hai em 4 quả cam để tổng khối lượng cam mỗi em nhận được là bằng nhau hay không?",
        "input": "Dữ liệu vào cho trong tệp BANGNHAU.INP: \n Gồm một dòng chứa 4 số nguyên a, b, c và d (0 < a, b, c, d <= 100) lần lượt là khối lượng mỗi quả cam.",
        "output": "Kết quả đưa ra tệp BANGNHAU.OUT: \n Từ CO nếu chia cam được cho hai em có tổng khối lượng cam bằng nhau, ngược lại đưa ra từ KHONG.",
        "examples": [
          {"Input": "1 2 3 4", "Output": "CO", "cite": "[cite: 590-593]"},
          {"Input": "1 2 3 5", "Output": "KHONG", "cite": "[cite: 590-593]"}
        ]
      },
      {
        "name": "Bài 2. (2.0 điểm) KHÁC NHAU",
        "context": "Hai số nguyên dương x và y được gọi là khác nhau nếu thỏa mãn hai điều kiện sau: \n - x != y; \n - Không tồn tại hai số nguyên a và b (a > 1 và b > 1) mà cả x và y đều chia hết cho cả a và b. (Nói cách khác, không tồn tại ước chung nào lớn hơn 1).",
        "requirement": "Yêu cầu: Cho hai số nguyên dương x và n, liệt kê tất cả các số nguyên y trong các số từ 1 đến n sao cho x và y là khác nhau.",
        "input": "Dữ liệu vào cho trong tệp KHACNHAU.INP: \n Gồm hai số nguyên dương x, n (1 <= x, n <= 1000).",
        "output": "Kết quả đưa ra tệp KHACNHAU.OUT: \n - Dòng 1: Số lượng số y tìm được. \n - Dòng 2: Các số y đưa ra theo thứ tự tăng dần, hai số liên tiếp cách nhau một dấu cách.",
        "examples": [
          {"Input": "18 15", "Output": "12 \n 1 2 3 4 5 7 8 10 11 13 14 15", "cite": "[cite: 610]"}
        ]
      },
      {
        "name": "Bài 3. (2.0 điểm) CẮT DÂY",
        "context": "An có một sợi dây có độ dài n. An thực hiện k lần cắt dây như sau: \n 1. Mỗi lần, chọn đoạn dây dài nhất trong các đoạn hiện có. \n 2. Cắt thành 2 đoạn dây theo cách sau: \n - Nếu đoạn dây có độ dài chẵn là 2u cắt thành hai đoạn có độ dài u. \n - Nếu đoạn dây có độ dài lẻ là 2u+1 cắt thành hai đoạn có độ dài là u và u+1. \n Sau k lần, An có tổng cộng k+1 đoạn dây.",
        "requirement": "Yêu cầu: Em hãy cho biết, sau k lần cắt độ dài đoạn dây dài nhất và số lượng đoạn dài nhất An có là bao nhiêu?",
        "input": "Dữ liệu vào cho trong tệp CATDAY.INP: \n - Dòng 1: Số nguyên n (2 <= n <= 10^18); \n - Dòng 2: Số nguyên k (1 <= k <= n-1).",
        "output": "Kết quả đưa ra tệp CATDAY.OUT: \n Gồm hai số là độ dài đoạn dây dài nhất và số lượng đoạn dài nhất mà An có sau k lần cắt.",
        "constraints": "Giới hạn: \n - 75% số test ứng 75% số điểm có n, k <= 10^4; \n - 25% số test ứng 25% số điểm không có ràng buộc gì thêm.",
        "examples": [
          {"Input": "100 \n 5", "Output": "25 2", "Giải thích": "Lần cắt 1 có 2 đoạn: 50, 50 \n Lần cắt 2 có 3 đoạn: 25, 25, 50 \n Lần cắt 3 có 4 đoạn: 25, 25, 25, 25 \n Lần cắt 4 có 5 đoạn: 12, 13, 25, 25, 25 \n Lần cắt 5 có 6 đoạn: 12, 13, 12, 13, 25, 25", "cite": "[cite: 626]"}
        ]
      },
      {
        "name": "Bài 4. (2.0 điểm) CHÍNH PHƯƠNG",
        "context": "Một tập hợp A={a1, ..., ak} gồm k số tự nhiên khác nhau có tổng các phần tử là n gọi là tập sinh chính phương nếu tổng của bất kỳ k-1 phần tử trong A đều là số chính phương. Hai tập được coi là khác nhau nếu tồn tại một phần tử có trong tập này và không có trong tập kia.",
        "requirement": "Yêu cầu: Cho hai số nguyên n và k. Đếm số tập hợp A gồm k phần tử có tổng các phần tử bằng n và tổng của k-1 phần tử bất kì trong tập này đều là số chính phương?",
        "input": "Dữ liệu vào cho trong tệp CHINHPHUONG.INP: \n Gồm hai số nguyên n và k (2 <= n <= 10000, 2 <= k <= 10).",
        "output": "Kết quả đưa ra tệp CHINHPHUONG.OUT: \n Một số duy nhất là số tập A thỏa mãn tìm được.",
        "constraints": "Giới hạn: \n - 25% số test có k=2; \n - 50% số test có k=3; \n - 25% số test không có ràng buộc gì thêm.",
        "examples": [
          {"Input": "20 2", "Output": "1", "Giải thích": "Có 1 tập tìm được A={4, 16}", "cite": "[cite: 645]"}
        ]
      },
      {
        "name": "Bài 5. (2.0 điểm) CHỤP ẢNH",
        "context": "Tất cả học sinh sẽ đứng thành một hàng ngang, theo thứ tự từ trái sang phải. Để bức ảnh đẹp, các bạn học sinh nam và nữ xếp xen kẽ nhau (không tồn tại hai học sinh nam hoặc hai học sinh nữ đứng cạnh nhau). Hai bức ảnh được coi là khác nhau nếu tồn tại hai học sinh tại cùng một vị trí x trong hai bức ảnh là khác nhau.",
        "requirement": "Yêu cầu: Cho số lượng học sinh nam, học sinh nữ. Đếm số bức ảnh có thể tạo ra. Vì kết quả có thể rất lớn, in phần dư khi chia kết quả cho 10^9 + 7.",
        "input": "Dữ liệu cho trong tệp CHUPANH.INP: \n Chứa hai số nguyên dương N1, N2 lần lượt là số học sinh nam, số học sinh nữ (1 <= N1, N2 <= 100).",
        "output": "Kết quả đưa ra tệp CHUPANH.OUT: \n Đưa ra phần dư khi chia số lượng bức ảnh có thể tạo được cho 10^9+7.",
        "constraints": "Giới hạn: \n - 50% số test có N1 + N2 <= 20; \n - 50% số test còn lại không có ràng buộc gì thêm.",
        "examples": [
          {"Input": "3 2", "Output": "12", "cite": "[cite: 664]"}
        ]
      }
    ]
  },

  {
    "id": "EXAM_PTNK_2022_2023",
    "province": "TRƯỜNG PHỔ THÔNG NĂNG KHIẾU",
    "title": "ĐỀ THI TUYỂN SINH LỚP 10 NĂM HỌC 2022-2023",
    "subject": "Môn thi: TIN HỌC",
    "duration": "Thời gian làm bài: 120 phút, không kể thời gian phát đề",
    "overview": {
      "title": "TỔNG QUAN ĐỂ THI",
      "table": [
        {"Bài": "1", "Tên bài": "STICKERS", "Tên file chương trình": "STICKERS.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "4", "cite": ""},
        {"Bài": "2", "Tên bài": "CHIA GIA TÀI", "Tên file chương trình": "DOWRY.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "3", "cite": ""},
        {"Bài": "3", "Tên bài": "ƯỚC CHÍNH PHƯƠNG", "Tên file chương trình": "DSQUARE.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "3", "cite": ""}
      ],
      "note": "Dấu * được thay thế bởi PAS hoặc CPP của ngôn ngữ lập trình được sử dụng tương ứng là Pascal hoặc C++."
    },
    "questions": [
      {
        "name": "BÀI 1. STICKERS",
        "context": "Bài tập thủ công của Nam là dùng các sticker để tạo thành một dãy số S theo một ý nghĩa nào đó. Mỗi sticker là 1 chữ số có giá trị từ 0 đến 9. Có 10 loại sticker tương ứng. Để tiết kiệm, Nam không mua mới mà thu nhặt các sticker từ anh trai để lại. Trong quá trình thu nhặt, Nam nhận thấy cặp (2, 5) có thể thay thế nhau bằng cách lật ngược lại, cặp (6, 9) cũng có tính chất tương tự. Các sticker thu nhặt từ anh trai được mô tả bởi dãy số T. Do giáo viên yêu cầu tạo thật nhiều dãy số S nên Nam muốn biết trước với số lượng sticker thu nhặt được thì có thể tạo tối đa bao nhiêu dãy số S.",
        "requirement": "Yêu cầu: Cho 2 dãy số T và S gồm không quá 10^5 các chữ số có giá trị từ 0 đến 9. Tính số lượng dãy số S có thể tạo được nhiều nhất bằng cách sử dụng các chữ số từ dãy số T.",
        "input": "Dữ liệu: Vào từ tập tin văn bản STICKERS.INP \n - Dòng đầu tiên chứa dãy số T. \n - Dòng thứ hai chứa dãy số S.",
        "output": "Kết quả: Ghi ra tập tin văn bản STICKERS.OUT số lượng dãy số S tạo được nhiều nhất.",
        "examples": [
          {"Input": "4444223 \n 445", "Output": "2", "cite": ""},
          {"Input": "668888 \n 899", "Output": "1", "cite": ""}
        ]
      },
      {
        "name": "BÀI 2. CHIA GIA TÀI",
        "context": "Do tuổi đã cao, Phú Ông quyết định chia toàn bộ ruộng đất của mình cho 3 người con. Đất của Phú Ông là một hình chữ nhật khá rộng lớn. Bằng n+1 đường rào ngang và m+1 đường rào dọc song song, Phú Ông ngăn đất thành n dòng, m cột. Mảnh đất giới hạn bởi các đường rào ngang và dọc gọi là lô đất, như vậy Phú Ông có n x m lô đất. Lô đất ở dòng i, cột j có giá trị a_ij. Để chia đất cho 3 người con, ban đầu ông tách đất thành 2 miếng rời nhau bằng 1 đường rào ngang hoặc rào dọc. Miếng đất thứ nhất được chia cho người con đầu. Với miếng đất thứ hai, ông cũng tách thành 2 miếng rời nhau bằng 1 đường rào ngang hoặc rào dọc trên miếng đất này và chia cho 2 người còn lại. Kết quả là mỗi người con nhận được 1 miếng đất có dạng hình chữ nhật. Để công bằng, Phú Ông muốn các miếng đất phải có giá trị bằng nhau.",
        "requirement": "Yêu cầu: Hãy giúp Phú Ông tìm ra một cách chia thỏa mong muốn hoặc thông báo không thể thực hiện.",
        "input": "Dữ liệu: Vào từ tập tin văn bản DOWRY.INP \n - Dòng đầu tiên chứa 2 số nguyên n và m (1 <= n, m <= 1000). \n - Dòng thứ i trong n dòng sau chứa m số nguyên ai1, ai2, ..., aim (1 <= |aij| <= 10^6) - giá trị của m lô đất tương ứng trên dòng i.",
        "output": "Kết quả: Ghi ra tập tin văn bản DOWRY.OUT \n - Dòng đầu tiên ghi thông báo YES nếu tìm được một cách chia, ngược lại ghi thông báo NO. \n - Trường hợp tìm được một cách chia thì 2 dòng tiếp theo chứa mô tả đường tách thứ nhất và thứ hai tương ứng. Mỗi đường tách được mô tả theo dạng ci trong đó C={N, D} cho biết đường tách là ngang hay dọc và i là đường tách liền kề với dòng hoặc cột thứ i.",
        "examples": [
          {"Input": "3 4 \n 3 8 1 -6 \n 2 -3 2 2 \n -1 8 1 1", "Output": "YES \n N 1 \n D 2", "Giải thích": "Một cách chia thỏa yêu cầu: Đường cắt ngang 1, Đường cắt dọc 2", "cite": ""},
          {"Input": "2 2 \n -8 6 \n 10 -3", "Output": "NO", "Giải thích": "Không có cách thực hiện", "cite": ""}
        ]
      },
      {
        "name": "BÀI 3. ƯỚC CHÍNH PHƯƠNG",
        "context": "Số chính phương là một số nguyên dương bằng bình phương của một số nguyên dương khác. Như vậy các số sau được gọi là số chính phương: 1, 4, 9, 16, 25,... Ta quan tâm các số nguyên dương n tồn tại ước là một số chính phương lớn hơn 1. Các số đầu tiên thỏa điều kiện là: 4, 8, 9, 12, 16, 18, 20, 24, ...",
        "requirement": "Yêu cầu: Cho 2 số nguyên L, R (2 <= L < R <= 10^9). Đếm số lượng các cặp số nguyên (a, b) sao cho L <= a < b <= R và a x b có chứa ước là số chính phương lớn hơn 1.",
        "input": "Dữ liệu: Vào từ tập tin văn bản DSQUARE.INP chứa 2 số nguyên L, R (2 <= L < R <= 10^9; R - L <= 10^3).",
        "output": "Kết quả: Ghi ra tập tin văn bản DSQUARE.OUT số cặp thỏa yêu cầu.",
        "examples": [
          {"Input": "2 5", "Output": "3", "Giải thích": "(2,4), (3,4), (4,5)", "cite": ""},
          {"Input": "2 10", "Output": "26", "Giải thích": "(2,4), (2,6), (2,8), (2,9), (2,10), (3,4), (3,6), (3,8), (3,9), (4,5), (4,6), (4,7), (4,8), (4,9), (4,10), (5,8), (5,9), (5,10), (6,8), (6,9), (6,10), (7,8), (7,9), (8,9), (8,10), (9,10)", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_PTNK_2023_2024",
    "province": "TRƯỜNG PHỔ THÔNG NĂNG KHIẾU",
    "title": "ĐỀ THI TUYỂN SINH LỚP 10 NĂM HỌC 2023-2024",
    "subject": "MÔN THI: TIN HỌC",
    "duration": "Thời gian: 150 phút",
    "overview": {
      "title": "TỔNG QUAN ĐỀ THI",
      "table": [
        {"Bài": "1", "Tên bài": "Số may mắn", "Tên file chương trình": "LUCK.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "4", "cite": ""},
        {"Bài": "2", "Tên bài": "San lấp", "Tên file chương trình": "ISLANDS.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "3", "cite": ""},
        {"Bài": "3", "Tên bài": "Mật khẩu", "Tên file chương trình": "PASSWORD.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "3", "cite": ""}
      ],
      "note": "Dấu * được thay thế bởi PAS, CPP hoặc py của ngôn ngữ lập trình được sử dụng tương ứng là PASCAL, C++ hoặc python."
    },
    "questions": [
      {
        "name": "Bài 1. Số may mắn",
        "context": "Trên bàn có một dãy các ô, các ô đánh số liên tiếp bắt đầu từ 1, từ trái sang phải. An có một bộ bài gồm n lá bài có số hiệu là 1, 2, 3, ... n. Để chọn ra lá bài may mắn bạn An thực hiện các thao tác như sau: \n Bước 1: An chia các lá bài hiện có vào các ô liên tiếp bắt đầu từ ô thứ nhất với số hiệu các lá bài theo thứ tự tăng dần. \n Bước 2: An nhặt các lá bài trong các ô có số thứ tự chia cho 3 dư 2 và loại bỏ các lá bài còn lại trên dãy. \n Nếu số lá bài nhặt được nhiều hơn 1 thì quay lại thực hiện Bước 1. Trong trường hợp nhặt được đúng 1 lá bài thì lá bài đó là lá bài may mắn.",
        "requirement": "Yêu cầu: Cho biết n, hãy tìm ra số hiệu của lá bài may mắn.",
        "input": "Dữ liệu: Vào từ file văn bản LUCK.INP gồm một số nguyên dương n (2 <= n <= 10^9).",
        "output": "Kết quả: Ghi ra file văn bản LUCK.OUT một số nguyên dương duy nhất là số hiệu của lá bài may mắn.",
        "constraints": "Hạn chế: \n - Có 50% số test với n <= 1000. \n - 50% số test còn lại không có giới hạn gì thêm.",
        "examples": [
          {"Input": "15", "Output": "14", "Giải thích": "Lần 1: Nhặt 2, 5, 8, 11, 14. Lần 2: Nhặt 5, 14. Lần 3: Nhặt 14.", "cite": "[cite: 756-770]"}
        ]
      },
      {
        "name": "Bài 2. San lấp",
        "context": "Bản đồ một vùng đất là một hình chữ nhật kích thước m x n được chia làm lưới ô vuông đơn vị, các hàng của lưới được đánh số từ 1 tới m từ trên xuống dưới và các cột của lưới được đánh số từ 1 tới n từ trái qua phải. Ô nằm trên giao của hàng x, cột y được gọi là ô (x, y), mỗi ô có hai trạng thái là ô nước hay ô đất. Bản đồ được mô tả bởi bảng h(m x n) với h_xy = 1 nếu ô (x, y) là đất và h_xy = 0 nếu ô (x, y) là nước. Những ô đất tạo thành những “đảo” định nghĩa như sau: Hai ô đất gọi là cùng đảo nếu ta có thể đi từ ô này tới ô kia bằng cách di chuyển qua các ô kề cạnh là đất.",
        "requirement": "Yêu cầu: Bạn được phép lấp đúng 1 ô nước để trở thành ô đất (tức là đổi giá trị một ô 0 thành 1) sao cho sau khi lấp thì nhận được một đảo có diện tích lớn nhất có thể.",
        "input": "Dữ liệu: Vào từ file văn bản ISLANDS.INP \n - Dòng 1 chứa hai số nguyên dương m, n <= 1000 \n - m dòng tiếp theo, dòng thứ i chứa n số, số thứ j là h_ij = 0 hoặc 1. \n Dữ liệu đảm bảo trên bản đồ có ít nhất một h_ij bằng 0.",
        "output": "Kết quả: Ghi ra file văn bản ISLANDS.OUT một số nguyên duy nhất là số ô của đảo lớn nhất nhận được sau khi lấp một ô.",
        "constraints": "Hạn chế: \n - Có 20% số test với bảng chỉ có đúng một hòn đảo. \n - Có 40% số test khác với m, n <= 50. \n - 40% số test còn lại không có giới hạn gì thêm.",
        "examples": [
          {"Input": "6 6 \n 1 0 1 0 1 1 \n 1 0 1 0 1 1 \n 1 1 1 0 0 0 \n 0 0 0 1 1 1 \n 1 1 0 0 1 0 \n 1 1 1 0 1 1", "Output": "14", "Giải thích": "Có thể chọn lấp ô (4,3). Trên bản đồ có đảo gồm 14 ô.", "cite": ""}
        ]
      },
      {
        "name": "Bài 3. Mật khẩu",
        "context": "Nam vừa mua một chiếc Iphone 15 và cần cài đặt mật khẩu cho chiếc điện thoại thông minh này. Mật khẩu gồm 4 chữ số. Nam viết liên tiếp các số nguyên dương bắt đầu từ 1 thành một dãy các chữ số vô hạn và đánh số các chữ số này bắt đầu từ 1 tạo thành dãy số a = a1a2a3... Dãy chữ số khi viết tới số 24 là: 123456789101112131415161718192021222324... Nam chọn một số nguyên dương k và 4 chữ số liên tiếp bắt đầu từ chữ số thứ k: a_k a_k+1 a_k+2 a_k+3 là mật khẩu.",
        "requirement": "Yêu cầu: Cho số k, hãy tìm 4 chữ số a_k a_k+1 a_k+2 a_k+3 là mật khẩu chiếc Iphone của Nam.",
        "input": "Dữ liệu: Vào từ file văn bản PASSWORD.INP gồm duy nhất một số nguyên dương k <= 10^14.",
        "output": "Kết quả: Ghi ra file văn bản PASSWORD.OUT một dòng ghi liên tiếp 4 chữ số a_k a_k+1 a_k+2 a_k+3 tìm được.",
        "constraints": "Hạn chế: \n - Có 50% số test với k <= 10^6 \n - 50% số test còn lại không có giới hạn gì thêm.",
        "examples": [
          {"Input": "21", "Output": "5161", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_PTNK_2021_2022",
    "province": "ĐẠI HỌC QUỐC GIA TP.HCM - TRƯỜNG PHỔ THÔNG NĂNG KHIẾU",
    "title": "ĐỀ THI TUYỂN SINH LỚP 10 Năm học: 2021-2022",
    "subject": "Môn thi: TIN HỌC",
    "duration": "Thời gian làm bài: 150 phút, không kể thời gian phát đề",
    "overview": {
      "title": "TỔNG QUAN ĐỀ THI",
      "table": [
        {"Bài": "1", "Tên bài": "TÌM SỐ X", "Tên file chương trình": "NUMBERX.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "cite": ""},
        {"Bài": "2", "Tên bài": "TIÊN THƯỜNG", "Tên file chương trình": "REWARD.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "cite": ""},
        {"Bài": "3", "Tên bài": "HUẤN LUYỆN", "Tên file chương trình": "TRAINING.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "cite": ""},
        {"Bài": "4", "Tên bài": "HỆ THỐNG MÁI CHE", "Tên file chương trình": "COVERED.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "cite": ""}
      ],
      "note": "Dấu * được thay thế bởi PAS hoặc CPP của ngôn ngữ lập trình được sử dụng tương ứng là Pascal hoặc C++."
    },
    "questions": [
      {
        "name": "Bài 1. TÌM SỐ X",
        "context": "Nam và Bắc là đôi bạn thân, nhưng luôn ganh đua nhau trong học tập, đặc biệt là môn Toán. Hôm nay Nam thách thức một bài toán hơi khó đối với Bắc. Nhận thấy bài toán có thể dùng máy tính để tìm ra nghiệm. Bắc nhờ bạn lập trình giải giúp bài toán đố của Nam.",
        "requirement": "Yêu cầu: Cho trước hai số nguyên dương a và b, hãy tìm số nguyên dương x nhỏ nhất sao cho a+x chia hết cho b, đồng thời b+x chia hết cho a.",
        "input": "Dữ liệu: Vào từ tập tin văn bản NUMBERX.INP chứa hai số nguyên a và b (1 <= a, b <= 10^9).",
        "output": "Kết quả: Ghi ra tập tin văn bản NUMBERX.OUT số nguyên dương x tìm được.",
        "examples": [
          {"Input": "6 10", "Output": "14", "cite": ""}
        ]
      },
      {
        "name": "Bài 2. TIẾN THƯỞNG",
        "context": "Một bản đồ hình vuông kích thước n x n được chia thành lưới các ô vuông. Người ta lần lượt đặt vào mỗi ô vuông của lưới một số tiền thưởng là các số nguyên liên tiếp bắt đầu từ 1 tới n^2 đi theo dạng dích dắc bắt đầu từ ô (1,1). Một robot xuất phát tại ô (x,y) (1 <= x,y <= n) của lưới. Mỗi lần nhận tín hiệu điều khiển được mô tả bởi các kí tự {E, W, S, N}, robot di chuyển sang ô kề cạnh tương ứng theo hướng Đông, Tây, Nam, Bắc. Khi di chuyển đến ô nào, robot sẽ lấy hết số tiền thưởng tại ô đó, nghĩa là ô này không còn tiền thưởng.",
        "requirement": "Yêu cầu: Cho dãy lệnh điều khiển robot. Cho biết tổng số tiền thưởng mà robot nhận được sau khi kết thúc hành trình.",
        "input": "Dữ liệu: Vào từ tập tin văn bản REWARD.INP \n - Dòng đầu tiên chứa 3 số nguyên n, x, y (1 <= n <= 10^6; 1 <= x, y <= n) - kích thước của hình vuông và vị trí ban đầu của robot. \n - Dòng tiếp theo chứa xâu gồm các kí tự {E, W, S, N} có độ dài không quá 5*10^5 tương ứng với dãy lệnh điều khiển robot. Dữ liệu đảm bảo robot không vượt ra ngoài bảng.",
        "output": "Kết quả: Ghi ra tập tin văn bản REWARD.OUT một số nguyên là tổng số tiền thưởng của robot.",
        "examples": [
          {"Input": "6 1 1 \n SSSSSNNEEENWSW", "Output": "136", "cite": ""}
        ]
      },
      {
        "name": "Bài 3. HUẤN LUYỆN",
        "context": "Để chuẩn bị cho giải đấu sắp tới, huấn luyện viên (HLV) lên giáo án tập luyện để nâng cao kỹ năng thi đấu cho n vận động viên (VĐV). Ban đầu VĐV thứ i có kỹ năng thi đấu a_i. HLV chuẩn bị m bài tập, bài thứ j có độ khó b_j. HLV chỉ định trình tự tập luyện các bài cho từng VĐV tùy vào kỹ năng thi đấu ban đầu và mỗi bài chỉ tập tối đa 1 lần để tránh nhàm chán. Để thực hiện bài có độ khó x, VĐV phải có kỹ năng thi đấu không nhỏ hơn x và sau khi hoàn thành, kỹ năng thi đấu của VĐV tăng thêm x đơn vị.",
        "requirement": "Yêu cầu: Cho kỹ năng thi đấu ban đầu của n VĐV và độ khó của m bài tập. Hãy cho biết kỹ năng thi đấu cao nhất của từng VĐV sau đợt tập huấn.",
        "input": "Dữ liệu: Vào từ tập tin văn bản TRAINING.INP \n - Dòng đầu tiên chứa 2 số nguyên n, m (1 <= n, m <= 5*10^5) - số lượng VĐV và số lượng bài tập. \n - Dòng thứ hai chứa n số nguyên a1, a2, ..., an (1 <= a_i <= 10^9) - kỹ năng thi đấu của các VĐV. \n - Dòng thứ ba chứa m số nguyên b1, b2, ..., bm (1 <= b_j <= 10^9) - độ khó của các bài tập.",
        "output": "Kết quả: Ghi ra tập tin văn bản TRAINING.OUT dãy gồm n số nguyên, số thứ i là kỹ năng thi đấu cao nhất của VĐV thứ i sau đợt tập huấn.",
        "examples": [
          {"Input": "5 4 \n 1 2 6 4 9 \n 30 1 7 2", "Output": "1 4 6 4 15", "cite": ""}
        ]
      },
      {
        "name": "Bài 4. HỆ THỐNG MÁI CHE",
        "context": "Một dự án xây dựng cơ sở mới cho Trường PTNK gồm hai tòa nhà cao tầng. Trên bảng vẽ, nhìn từ trên xuống các tòa nhà có thể xem như các hình chữ nhật có cạnh song song với hệ trục tọa độ và không giao nhau. Mỗi hình chữ nhật được xác định bởi tọa độ góc trái dưới và phải trên. Hình thứ nhất có tọa độ góc trái dưới (x1, y1) và phải trên (x2, y2). Hình thứ hai có tọa độ góc trái dưới (x3, y3) và phải trên (x4, y4). Tọa độ đều là các số nguyên có giá trị tuyệt đối không vượt quá 10^6. Để tiện lợi cho việc đi lại giữa hai tòa nhà và tránh được mưa nắng, nhà trường đề nghị làm một đường mái che nối hai tòa nhà. Trên bản vẽ, đường mái che là một đoạn thẳng nối một điểm trên cạnh hình chữ nhật này đến một điểm trên cạnh của hình chữ nhật còn lại.",
        "requirement": "Yêu cầu: Cho trước 8 giá trị x1, y1, x2, y2, x3, y3, x4 và y4. Hãy tính bình phương độ dài ngắn nhất của đoạn cần làm mái che.",
        "input": "Dữ liệu: Vào từ tập tin văn bản COVERED.INP chứa 8 số nguyên x1, y1, x2, y2, x3, y3, x4 và y4 có giá trị tuyệt đối không quá 10^6.",
        "output": "Kết quả: Ghi ra tập tin văn bản COVERED.OUT bình phương độ dài đoạn mái che tìm được.",
        "examples": [
          {"Input": "1 3 4 5 5 2 9 5", "Output": "1", "cite": ""}
        ]
      }
    ]
  },

  {
    "id": "EXAM_PTNK_2025",
    "province": "ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH - TRƯỜNG PHỔ THÔNG NĂNG KHIẾU",
    "title": "KỲ THI TUYỂN SINH LỚP 10 NĂM 2025",
    "subject": "Môn thi: TIN HỌC",
    "duration": "Thời gian làm bài: 150 phút (không kể thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN ĐỀ THI",
      "table": [
        {"Bài": "1", "Tên bài": "Chuỗi online bạn bè", "Tên file chương trình": "STREAK.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "2", "cite": ""},
        {"Bài": "2", "Tên bài": "Hành trình xe điện", "Tên file chương trình": "EVTRIP.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "2.5", "cite": ""},
        {"Bài": "3", "Tên bài": "Trò chơi xếp chữ", "Tên file chương trình": "WORDGAME.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "2.5", "cite": ""},
        {"Bài": "4", "Tên bài": "Tối ưu giao dịch Blockchain", "Tên file chương trình": "BLOCKOPT.*", "Hạn chế thời gian": "1 giây", "Hạn chế bộ nhớ": "1024 MB", "Điểm": "3", "cite": ""}
      ],
      "note": "Dấu * được thay thế bởi PAS, CPP hoặc PY theo ngôn ngữ lập trình được sử dụng tương ứng là PASCAL, C++ hoặc Python."
    },
    "questions": [
      {
        "name": "Bài 1: CHUỖI ONLINE BẠN BÈ (STREAK.*)",
        "context": "An sử dụng một ứng dụng nhắn tin và muốn biết bạn của mình, Bình, có những khoảng thời gian online liên tục dài nhất là bao lâu trong một ngày. Hệ thống ghi lại trạng thái của Bình mỗi phút trong suốt T phút của một ngày. Trạng thái có thể là một trong ba loại: \"ONLINE\", \"IDLE\" (không hoạt động), hoặc \"OFFLINE\". Một \"chuỗi online\" được định nghĩa là một khoảng thời gian liên tục mà trạng thái của Bình là \"ONLINE\".",
        "requirement": "Yêu cầu: Cho một chuỗi các trạng thái của Bình trong T phút, hãy tìm độ dài của chuỗi online liên tục dài nhất. Nếu Bình không online phút nào, kết quả là 0.",
        "input": "Dữ liệu: Vào từ file văn bản STREAK.INP: \n - Dòng đầu tiên chứa số tự nhiên T (1 <= T <= 1440) tổng số phút theo dõi trong ngày. \n - T dòng tiếp theo, mỗi dòng chứa một xâu ký tự là trạng thái của Bình tại phút tương ứng: \"ONLINE\", \"IDLE\", hoặc \"OFFLINE\".",
        "output": "Kết quả: Ghi ra file văn bản STREAK.OUT một số nguyên duy nhất là độ dài của chuỗi online liên tục dài nhất.",
        "examples": [
          {"Input": "10 \n ONLINE \n ONLINE \n IDLE \n ONLINE \n ONLINE \n ONLINE \n OFFLINE \n ONLINE \n ONLINE \n IDLE", "Output": "3", "cite": ""},
          {"Input": "5 \n ONLINE \n ONLINE \n ONLINE \n ONLINE \n ONLINE", "Output": "5", "cite": ""},
          {"Input": "4 \n OFFLINE \n IDLE \n OFFLINE \n IDLE", "Output": "0", "cite": ""}
        ]
      },
      {
        "name": "Bài 2: HÀNH TRÌNH XE ĐIỆN (EVTRIP.*)",
        "context": "Một chiếc xe điện bắt đầu hành trình từ điểm 0 km với pin đầy, dung lượng pin tối đa là Pmax đơn vị. Mỗi km di chuyển tiêu tốn 1 đơn vị pin. Trên quãng đường có N trạm sạc. Trạm sạc thứ i (với i = 1, 2, .., N) nằm ở vị trí Di km tính từ điểm xuất phát và tại đó xe có thể sạc đầy pin (lên Pmax) ngay lập tức. Xe không thể di chuyển nếu pin không đủ cho 1 km tiếp theo. Đích đến là thành phố ở vị trí Dtarget km.",
        "requirement": "Yêu cầu: Tìm số lần sạc ít nhất để xe có thể đi từ điểm 0 đến Dtarget. Nếu không thể đến đích, ghi ra -1.",
        "input": "Dữ liệu vào: File EVTRIP.INP \n • Dòng đầu tiên: ba số tự nhiên N, Pmax, Dtarget (0 <= N <= 1000, 1 <= Pmax <= 10^9, 1 <= Dtarget <= 10^9) \n • N dòng tiếp theo: mỗi dòng chứa một số nguyên Di (1 <= Di < Dtarget)",
        "output": "Kết quả: File EVTRIP.OUT \n • Một số nguyên là số lần sạc ít nhất, hoặc -1 nếu không thể đến đích.",
        "examples": [
          {"Input": "3 175 350 \n 80 \n 180 \n 280", "Output": "2", "cite": ""},
          {"Input": "1 10 100 \n 50", "Output": "-1", "cite": ""},
          {"Input": "1 50 75 \n 30", "Output": "1", "cite": ""}
        ]
      },
      {
        "name": "Bài 3: TRÒ CHƠI XẾP CHỮ (WORDGAME.*)",
        "context": "Một trò chơi xếp chữ trên điện thoại, người chơi có một chuỗi ký tự s. Mỗi lượt chơi được phép xóa một ký tự bất kỳ. Trò chơi kết thúc khi chuỗi còn lại là palindrome (đọc xuôi ngược như nhau). Ví dụ: chuỗi “aca hoặc racecar” là chuỗi palindrome.",
        "requirement": "Yêu cầu: Tìm số lượt chơi ít nhất để chuỗi ban đầu trở thành palindrome.",
        "input": "Dữ liệu vào: WORDGAME.INP: chuỗi ký tự s (1 <= độ dài <= 2000, chỉ gồm chữ thường).",
        "output": "Dữ liệu ra: WORDGAME.OUT: số lượt chơi ít nhất.",
        "examples": [
          {"Input": "abcca", "Output": "1", "cite": ""},
          {"Input": "abacda", "Output": "3", "cite": ""},
          {"Input": "racecar", "Output": "0", "cite": ""},
          {"Input": "abcde", "Output": "4", "cite": ""},
          {"Input": "ababa", "Output": "0", "cite": ""},
          {"Input": "programming", "Output": "7", "cite": ""}
        ]
      },
      {
        "name": "Bài 4: TỐI ƯU GIAO DỊCH BLOCKCHAIN (BLOCKOPT.*)",
        "context": "Trong một hệ thống blockchain, thợ đào chọn các giao dịch đang chờ (giả sử có N giao dịch) để đưa vào một khối mới. Mỗi giao dịch thứ i có phí Fi và kích thước Si (với i = 1, 2, ..., N là các số nguyên dương). Khối có kích thước tối đa Smax (Smax là số nguyên dương). Thợ đào muốn tối đa tổng phí Fi sao cho tổng kích thước Si không vượt Smax. Giả sử rằng có D ràng buộc phụ thuộc: nếu giao dịch A được chọn thì giao dịch B cũng phải được chọn. Các phụ thuộc này không tạo thành chu trình.",
        "requirement": "Yêu cầu: Tìm tổng phí giao dịch lớn nhất.",
        "input": "Dữ liệu: Vào từ file văn bản BLOCKOPT.INP: \n - Dòng 1: N, Smax (1 <= N <= 50, 1 <= Smax <= 1000). \n - N dòng tiếp: Fi, Si (1 <= Fi, Si <= 1000) cho giao dịch i. \n - Dòng tiếp: D (0 <= D <= N(N-1)/2). \n - D dòng tiếp (nếu D > 0): A, B (thể hiện cho ràng buộc nếu chọn A phải chọn B, trong đó A, B là chỉ số các giao dịch đang chờ A, B thuộc {1, 2, .., N}).",
        "output": "Kết quả: Ghi ra file văn bản BLOCKOPT.OUT tổng phí lớn nhất.",
        "examples": [
          {"Input": "3 10 \n 10 5 \n 7 4 \n 3 3 \n 1 \n 1 2", "Output": "17", "cite": ""},
          {"Input": "3 10 \n 10 5 \n 10 5 \n 5 3 \n 0", "Output": "20", "cite": ""},
          {"Input": "2 10 \n 100 11 \n 200 12 \n 0", "Output": "0", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_QUANG_BINH_2025_2026",
    "province": "SỞ GD&ĐT QUẢNG BÌNH",
    "title": "KỲ THI TUYỂN SINH TRUNG HỌC PHỔ THÔNG NĂM HỌC 2025-2026",
    "subject": "Môn: TIN HỌC (CHUYÊN)",
    "duration": "Thời gian làm bài: 150 phút (không kể thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"Câu": "Câu 1", "Tên câu": "Tính tổng", "Tên tệp": "SUM.*", "Tệp dữ liệu vào": "SUM.INP", "Tệp dữ liệu ra": "SUM.OUT", "Số điểm": "2,0", "cite": ""},
        {"Câu": "Câu 2", "Tên câu": "Đếm kí tự", "Tên tệp": "COUNT.*", "Tệp dữ liệu vào": "COUNT.INP", "Tệp dữ liệu ra": "COUNT.OUT", "Số điểm": "2,5", "cite": ""},
        {"Câu": "Câu 3", "Tên câu": "Đoạn đường đẹp nhất", "Tên tệp": "BEAUTY.*", "Tệp dữ liệu vào": "BEAUTY.INP", "Tệp dữ liệu ra": "BEAUTY.OUT", "Số điểm": "2,5", "cite": ""},
        {"Câu": "Câu 4", "Tên câu": "Robot tìm đường đi", "Tên tệp": "ROAD.*", "Tệp dữ liệu vào": "ROAD.INP", "Tệp dữ liệu ra": "ROAD.OUT", "Số điểm": "3,0", "cite": ""}
      ]
    },
    "questions": [
      {
        "name": "Câu 1 (2.0 điểm): Tính tổng",
        "context": "Cho một số nguyên dương n (1 <= n <= 10^6).",
        "requirement": "Yêu cầu: Tính tổng các số nguyên dương chia hết cho 7 và nhỏ hơn hoặc bằng n.",
        "input": "Dữ liệu vào: Cho trong file văn bản SUM.INP theo cấu trúc như sau: \n Dòng 1: Chứa số nguyên dương n.",
        "output": "Kết quả: Ghi ra file văn bản SUM.OUT theo cấu trúc như sau: \n Dòng 1: Ghi kết quả tính được.",
        "examples": [
          {"Input": "15", "Output": "21", "cite": ""}
        ]
      },
      {
        "name": "Câu 2 (2.5 điểm): Đếm kí tự",
        "context": "Cho một xâu S chỉ bao gồm các kí tự chữ cái, chữ số và kí tự trắng.",
        "requirement": "Yêu cầu: Cho một ký tự ch, hãy đếm số lần xuất hiện của kí tự ch có trong xâu S.",
        "input": "Dữ liệu vào: Cho trong file văn bản COUNT.INP có cấu trúc như sau: \n Dòng 1: Chứa xâu kí tự S (khác rỗng) có độ dài tối đa 10^6 kí tự. \n Dòng 2: Chứa kí tự ch.",
        "output": "Kết quả: Ghi ra file văn bản COUNT.OUT theo cấu trúc như sau: \n Dòng 1: Ghi kết quả đếm được.",
        "examples": [
          {"Input": "Ky thi tuyen sinh trung hoc pho thong \n h", "Output": "4", "cite": ""},
          {"Input": "Ky thi tuyen sinh trung hoc pho thong \n H", "Output": "0", "cite": ""}
        ]
      },
      {
        "name": "Câu 3 (2,5 điểm): Đoạn đường đẹp nhất",
        "context": "Trên hành tinh đó người ta xây dựng một tuyến đường với một bên là hệ thống các tòa nhà liên tiếp nhau, một bên là không gian mở với các cảnh vật tự nhiên. Có n tòa nhà được đánh số thứ tự từ 1 đến n, tòa nhà thứ i có độ cao là ai. Các đơn vị lữ hành muốn chọn một đoạn đường đẹp nhất trên tuyến đường này để tổ chức các sự kiện. Tiêu chí để lựa chọn đoạn đường đẹp nhất là đoạn đường mà ở đó các tòa nhà liên tiếp nhau và có độ cao trung bình đúng bằng k.",
        "requirement": "Yêu cầu: Hãy tìm đoạn đường đẹp nhất sao cho số lượng các tòa nhà liên tiếp là lớn nhất và có độ cao trung bình đúng bằng k.",
        "input": "Dữ liệu vào: Cho trong file văn bản BEAUTY.INP có cấu trúc như sau: \n - Dòng 1: Chứa hai số nguyên n và k (1 <= n <= 10^4; 1 <= k <= 10^5). \n - Dòng 2: Chứa n số nguyên dương ai (i=1, 2, ..., n; 1 <= ai <= 10^5). Các số ghi cách nhau ít nhất một dấu cách.",
        "output": "Kết quả: Ghi ra file văn bản BEAUTY.OUT theo cấu trúc như sau: \n - Dòng 1: Ghi một số nguyên là số lượng các tòa nhà của đoạn đường đẹp nhất tìm được. Nếu không tìm được dãy các tòa nhà thỏa mãn thì ghi ra số 0.",
        "constraints": "Ràng buộc: \n - Có 70% số test tương ứng với 70% số điểm với n <= 10^3. \n - Có 30% số test tương ứng với 30% số điểm với 10^3 < n <= 10^4.",
        "examples": [
          {"Input": "5 4 \n 2 4 1 5 6", "Output": "4", "cite": ""}
        ]
      },
      {
        "name": "Câu 4 (3,0 điểm): Robot tìm đường đi",
        "context": "Trong một lưới hình vuông được chia thành các ô vuông đơn vị. Các hàng và các cột của lưới được đánh chỉ số từ 1, 2, 3, ... Trên mỗi ô của lưới chứa một số nguyên có giá trị là tích của chỉ số hàng và chỉ số cột của ô đó, ô ở hàng i cột j thì có giá trị là i x j. Vị trí xuất phát của Robot là ô (1, 1). Với k là một số nguyên cho trước, nhiệm vụ của Robot là di chuyển qua từng ô để đến được ô có giá trị bằng k. Từ ô (i, j) Robot chỉ có thể di chuyển sang ô (i, j+1) hoặc ô (i+1, j).",
        "requirement": "Yêu cầu: Với giá trị k mà Ban giám khảo đưa ra, Robot phải tìm đường đi để đến được ô có giá trị bằng k sao cho số ô mà nó đi qua là ít nhất.",
        "input": "Dữ liệu vào: Cho trong file văn bản ROAD.INP có cấu trúc như sau: \n - Dòng 1: Chứa số nguyên dương k (1 < k <= 10^10).",
        "output": "Kết quả: Ghi ra file văn bản ROAD.OUT theo cấu trúc như sau: \n - Dòng 1: Ghi một số nguyên s là số ô ít nhất mà Robot đi qua.",
        "constraints": "Ràng buộc: \n - Có 25% số test tương ứng với 25% số điểm với k <= 100 \n - Có 25% số test tương ứng với 25% số điểm với 100 < k <= 10^4 \n - Có 50% số test tương ứng với 50% số điểm với 10^4 < k <= 10^10",
        "examples": [
          {"Input": "4", "Output": "2", "cite": ""},
          {"Input": "12", "Output": "5", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_QUANG_TRI_2022",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO QUẢNG TRỊ",
    "title": "KỲ THI TUYỂN SINH VÀO LỚP 10 THPT CHUYÊN Khóa ngày 06 tháng 6 năm 2022",
    "subject": "Môn thi: TIN HỌC",
    "duration": "Thời gian làm bài: 150 phút (không kể thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"Tên bài": "Ghi bài hát", "Tên tệp chương trình": "BAI1.*", "Dữ liệu vào": "Đọc từ bàn phím", "Kết quả": "Ghi ra màn hình", "Điểm": "2", "cite": ""},
        {"Tên bài": "Tặng hoa", "Tên tệp chương trình": "BAI2.*", "Dữ liệu vào": "Đọc từ bàn phím", "Kết quả": "Ghi ra màn hình", "Điểm": "2", "cite": ""},
        {"Tên bài": "Tặng quà", "Tên tệp chương trình": "BAI3.*", "Dữ liệu vào": "BAI3.INP", "Kết quả": "BAI3.OUT", "Điểm": "3", "cite": ""},
        {"Tên bài": "Xâu đối xứng", "Tên tệp chương trình": "BAI4.*", "Dữ liệu vào": "BAI4.INP", "Kết quả": "BAI4.OUT", "Điểm": "3", "cite": ""}
      ],
      "note": "(*) là PAS hoặc CPP tùy thuộc vào ngôn ngữ lập trình được thí sinh lựa chọn để viết chương trình."
    },
    "questions": [
      {
        "name": "Bài 1: Ghi bài hát.",
        "context": "An muốn ghi một bài hát có độ dài N phút và M giây vào đĩa cứng. Đĩa cứng của An còn trống K MB (Mega Byte). Biết rằng mỗi giây bài hát cần 16 KB (Kilo Byte) đĩa cứng.",
        "requirement": "Yêu cầu: Bạn hãy kiểm tra xem đĩa cứng của An có đủ dung lượng để ghi bài hát đó hay không?",
        "input": "Dữ liệu vào: Nhập từ bàn phím ba số nguyên dương lần lượt N, M và K có giá trị nhỏ hơn 10^6.",
        "output": "Kết quả: Ghi ra màn hình: \n - Nếu đĩa cứng có đủ dung lượng để ghi bài hát của An thì ghi ra \"YES\", \n - Nếu không thì : \n + Dòng thứ nhất ghi ra \"NO\" \n + Dòng thứ hai ghi ra dung lượng đĩa cứng còn thiếu tính theo KB để ghi hết bài hát.",
        "examples": [
          {"Input": "Cho ba so N, M, K: \n 4 \n 23 \n 22", "Output": "YES", "cite": ""},
          {"Input": "Cho ba so N, M, K: \n 36 \n 5 \n 6", "Output": "NO \n 28496", "cite": ""}
        ]
      },
      {
        "name": "Bài 2: Tặng hoa.",
        "context": "Trong vườn nhà An có N khóm hoa. An muốn hái một bó hoa để tặng 5 thành viên trong gia đình gồm: ông, bà, ba, mẹ và anh trai. An hái 1 bông từ khóm hoa thứ nhất, 2 bông từ khóm hoa thứ hai, 3 bông từ khóm hoa thứ ba,..., N bông từ khóm hoa thứ N. Bó hoa sẽ chia đều để tặng 5 người và mỗi người sẽ nhận được một số lẻ bông hoa.",
        "requirement": "Yêu cầu: Bạn hãy tính xem mỗi người trong nhà An sẽ nhận được nhiều nhất là bao nhiêu bông hoa?",
        "input": "Dữ liệu vào: Nhập từ bàn phím một số nguyên dương N (3 <= N <= 15).",
        "output": "Kết quả: Ghi ra màn hình hai số nguyên dương là số bông hoa mà mỗi người được tặng và số bông hoa còn lại. Hai số ghi cách nhau dấu cách.",
        "examples": [
          {"Input": "Cho so N: 3", "Output": "1 1", "cite": ""},
          {"Input": "Cho so N: 6", "Output": "3 6", "cite": ""}
        ]
      },
      {
        "name": "Bài 3: Tặng quà.",
        "context": "Nhân dịp năm mới An quyết định mua tặng hai người bạn thân của mình mỗi người một món quà. Trong cửa hàng lưu niệm có N mặt hàng khác nhau, mặt hàng thứ i có giá ai, i=1, 2,..., N. Với số tiền mang theo là X, An quyết định sẽ mua hai món quà khác nhau có tổng giá trị lớn nhất nhưng không vượt quá số tiền đang có.",
        "requirement": "Yêu cầu: Bạn hãy xác định xem số tiền mà An cần chi trả để mua quà là bao nhiêu?",
        "input": "Dữ liệu vào từ tệp văn bản BAI3.INP: \n - Dòng đầu tiên chứa hai số nguyên dương N và X (2 <= N <= 10^5, 2 <= X <= 10^9); \n - Dòng thứ hai chứa N số nguyên dương a1, a2,..., aN (1 <= ai <= 10^9, i=1, 2,..., N). Các số cách nhau dấu cách.",
        "output": "Kết quả ghi ra tệp văn bản BAI3.OUT một số nguyên dương là số tiền mà An cần chi trả.",
        "constraints": "Ràng buộc: \n - Có 60% số test tương ứng 60% số điểm với N <= 10000 \n - Thời gian thực hiện mỗi test không quá một giây.",
        "examples": [
          {"Input": "6 18 \n 3 10 2 5 4 9", "Output": "15", "Giải thích": "Hai món quà khác nhau có tổng giá trị lớn nhất là 19, vượt quá số tiền mang theo. Vậy An sẽ chọn món quà thứ nhất và thứ ba. Tổng số tiền cần trả sẽ là: 5+10=15", "cite": "[cite: 1113-1114]"}
        ]
      },
      {
        "name": "Bài 4: Xâu đối xứng.",
        "context": "Bài tập của An hôm nay là bài tập về xâu ký tự và tính đối xứng của xâu. Một xâu ký tự được gọi là đối xứng nếu đọc các ký tự của nó từ trái sang phải cũng như đọc từ phải sang trái. Ví dụ: a, aa, aba, abba là các xâu đối xứng, xâu babaa không phải là xâu đối xứng.",
        "requirement": "Yêu cầu: Cho một xâu gồm các chữ cái Latin in thường, không đối xứng. Hãy thêm vào bên trái xâu đó một số chữ cái để thu được một xâu đối xứng và cho biết độ dài xâu ngắn nhất tạo được là bao nhiêu?",
        "input": "Dữ liệu vào từ tệp văn bản BAI4.INP gồm một dòng chứa xâu đã cho, có độ dài không quá 500000 chữ cái Latin in thường.",
        "output": "Kết quả ghi ra tệp văn bản BAI4.OUT một số nguyên dương là độ dài của xâu đối xứng ngắn nhất tạo được.",
        "constraints": "Ràng buộc: \n - Có 60% số test tương ứng 60% số điểm với độ dài của xâu không quá 200000 chữ cái. \n - Thời gian thực hiện mỗi test không quá một giây.",
        "examples": [
          {"Input": "babaa", "Output": "7", "cite": ""}
        ]
      }
    ]
  },

  {
    "id": "EXAM_NGHE_AN_PBC_2025_2026",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO NGHỆ AN - TRƯỜNG THPT CHUYÊN PHAN BỘI CHÂU",
    "title": "KỲ THI TUYỂN SINH VÀO LỚP 10 NĂM HỌC 2025-2026",
    "subject": "Môn thi: TIN HỌC",
    "duration": "Thời gian: 150 phút, không kể thời gian giao đề",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"Câu": "1", "Tên bài": "SỐ THÚ VỊ", "File chương trình": "FUNNY.*", "File dữ liệu": "FUNNY.INP", "File kết quả": "FUNNY.OUT", "Thời gian": "1 giây", "Bộ nhớ": "1024 MB", "cite": "[cite: 1143]"},
        {"Câu": "2", "Tên bài": "HỘP QUÀ MAY MẮN", "File chương trình": "LUCKY.*", "File dữ liệu": "LUCKY.INP", "File kết quả": "LUCKY.OUT", "Thời gian": "1 giây", "Bộ nhớ": "1024 MB", "cite": "[cite: 1143]"},
        {"Câu": "3", "Tên bài": "QUY HOẠCH THÀNH PHỐ", "File chương trình": "PLAN.*", "File dữ liệu": "PLAN.INP", "File kết quả": "PLAN.OUT", "Thời gian": "1 giây", "Bộ nhớ": "1024 MB", "cite": "[cite: 1143]"},
        {"Câu": "4", "Tên bài": "ĐẦU TƯ TÀI CHÍNH", "File chương trình": "INVP.*", "File dữ liệu": "INVP.INP", "File kết quả": "INVP.OUT", "Thời gian": "1 giây", "Bộ nhớ": "1024 MB", "cite": "[cite: 1143]"}
      ],
      "note": "Dấu * được thay thế bởi CPP/PY của ngôn ngữ lập trình sử dụng tương ứng là C++/Python"
    },
    "questions": [
      {
        "name": "Câu 1 (6,0 điểm) SỐ THÚ VỊ",
        "context": "Bình gọi số nguyên dương X là số thú vị nếu hai chữ số tận cùng của X tạo thành một số chia hết cho số nguyên dương k cho trước. Ví dụ, nếu k=12 thì số 1236 là số thú vị vì có hai chữ số cuối là 36 chia hết cho 12. Ngược lại, số 1457 không phải là số thú vị. Bình muốn đếm số lượng số thú vị trong đoạn [a; b].",
        "requirement": "Yêu cầu: Đưa ra số lượng số thú vị trong đoạn [a; b].",
        "input": "Dữ liệu vào: Từ tệp văn bản FUNNY.INP gồm: \n - Dòng đầu tiên ghi hai số nguyên dương T và k (T <= 10^5, k <= 99); \n - T dòng tiếp theo, mỗi dòng ghi hai số nguyên dương a, b (10^2 <= a <= b <= 10^18).",
        "output": "Kết quả: Ghi ra tệp văn bản FUNNY.OUT gồm T dòng, mỗi dòng tương ứng là số lượng số thú vị trong đoạn [a; b].",
        "constraints": "Giới hạn: \n - 50% số test có T = 1, 10^2 <= a <= b <= 10^6 \n - 40% số test có T <= 10^5, 10^2 <= a <= b <= 10^6 \n - 10% số test có T <= 10^5, 10^2 <= a <= b <= 10^18",
        "examples": [
          {"FUNNY.INP": "2 11 \n 100 200 \n 201 300", "FUNNY.OUT": "11 \n 10", "Giải thích": "- Từ 100->200 có 11 số có 2 chữ số tận cùng chia hết cho 11; \n - Từ 201->300 có 10 số có 2 chữ số tận cùng chia hết cho 11.", "cite": "[cite: 1159]"}
        ]
      },
      {
        "name": "Câu 2 (5,0 điểm) HỘP QUÀ MAY MẮN",
        "context": "Các đội chơi sẽ nhận được một xâu S chỉ gồm các ký tự số. Mỗi đội phải tìm được mã số của hộp quà may mắn. Mã số cần tìm là số lượng xâu con trong xâu S tạo thành số đặc biệt. Số đặc biệt là số chia hết cho 97 và có tổng các chữ số chia hết cho 3. Chấp nhận các số có chữ số 0 đứng đầu.",
        "requirement": "Yêu cầu: Đưa ra số lượng xâu con trong xâu S tạo thành số đặc biệt là mã số của hộp quà may mắn cần tìm.",
        "input": "Dữ liệu vào: Từ tệp văn bản LUCKY.INP gồm một dòng là xâu ký tự S có độ dài xâu |S| <= 10^5.",
        "output": "Kết quả: Ghi ra tệp văn bản LUCKY.OUT gồm một dòng ghi số lượng xâu con trong xâu S tạo thành số đặc biệt.",
        "constraints": "Giới hạn: \n - 50% số test ứng với độ dài xâu |S| <= 300; \n - 30% số test ứng với độ dài xâu |S| <= 10^3; \n - 20% số test ứng với độ dài xâu |S| <= 10^5.",
        "examples": [
          {"LUCKY.INP": "2910", "LUCKY.OUT": "3", "Giải thích": "Có 3 số đặc biệt là 291, 2910, 0.", "cite": "[cite: 1175]"}
        ]
      },
      {
        "name": "Câu 3 (5,0 điểm) QUY HOẠCH THÀNH PHỐ",
        "context": "Thành phố A đang quy hoạch dự án sơn các ngôi nhà liền kề trên cùng một trục đường để có màu sắc giống nhau, với chi phí cho phép là k. Hiện tại mỗi ngôi nhà được sơn với một màu và mỗi màu sơn được biểu diễn bằng một ký tự từ 'a' đến 'z'. Chi phí chuyển đổi màu sơn của ngôi nhà từ màu sơn x sang màu sơn y là khoảng cách từ vị trí ký tự biểu diễn màu sơn x đến vị trí ký tự biểu diễn màu sơn y. Vị trí các ký tự là mã thập phân của nó trong bảng mã ASCII. Ví dụ: Chi phí chuyển đổi từ 'a' sang 'b' là |97-98|=1.",
        "requirement": "Yêu cầu: Đưa ra số lượng nhiều nhất các ngôi nhà liền kề cùng màu sơn sau thực hiện dự án, với tổng chi phí chuyển đổi không vượt quá k.",
        "input": "Dữ liệu vào: Từ tệp văn bản PLAN.INP gồm: \n - Dòng đầu tiên ghi số nguyên dương k (k <= 10^5) là chi phí cho phép; \n - Dòng thứ hai ghi xâu ký tự S có độ dài xâu |S| <= 5*10^5 là xâu biểu diễn màu sơn hiện tại của các ngôi nhà.",
        "output": "Kết quả: Ghi ra tệp văn bản PLAN.OUT gồm một dòng duy nhất là kết quả cần tìm.",
        "constraints": "Giới hạn: \n - 60% số test có độ dài xâu |S| <= 10^3; \n - 40% số test có độ dài xâu |S| <= 5*10^5.",
        "examples": [
          {"PLAN.INP": "2 \n babac", "PLAN.OUT": "4", "Giải thích": "Ta thực hiện biến đổi ký tự 'b' -> 'a' (hoặc 'a' -> 'b') và thu được xâu mới 'aaaac' (hoặc 'bbbbc'). Tổng chi phí biến đổi là 2. Số lượng nhiều nhất các ngôi nhà liền kề cùng màu sơn là 4.", "cite": "[cite: 1195]"},
          {"PLAN.INP": "2 \n afab", "PLAN.OUT": "2", "Giải thích": "Ta thực hiện biến đổi ký tự 'b' -> 'a' và thu được xâu mới 'afaa'. Tổng chi phí biến đổi là 1. Số lượng nhiều nhất các nhà liền kề là 2.", "cite": "[cite: 1195]"}
        ]
      },
      {
        "name": "Câu 4 (4,0 điểm) ĐẦU TƯ TÀI CHÍNH",
        "context": "Bố bạn Hùng là một nhà đầu tư. Chiến lược đầu tư là chọn đúng k thời điểm để đầu tư từ chuỗi dữ liệu của thị trường gồm n ngày. Mỗi ngày có một chỉ số thị trường là a_i. Bố bạn đã xây dựng một chiến lược phân bổ trọng số w1, w2, ..., wk tương ứng với từng lần đầu tư.",
        "requirement": "Yêu cầu: Lựa chọn k ngày khác nhau (theo đúng thứ tự thời gian) để đầu tư sao cho tổng lợi nhuận S đạt cao nhất có thể theo công thức: S = w1 * a_i1 + w2 * a_i2 + ... + wk * a_ik. Ngoài ra, bạn ấy cũng muốn biết có bao nhiêu cách chọn ngày để đạt được tổng lợi nhuận lớn nhất đó. (Kết quả cách chọn được chia lấy dư cho 10^9 + 7).",
        "input": "Dữ liệu vào: Từ tệp văn bản INVP.INP gồm: \n - Dòng đầu tiên ghi hai số nguyên dương n, k (n <= 10^5, k <= 100, k <= n); \n - Dòng thứ hai ghi n số nguyên a1, a2, ..., an (ai <= 10^9) là chỉ số thị trường mỗi ngày; \n - Dòng thứ ba ghi k số nguyên w1, w2, ..., wk (wi <= 10^6) là trọng số đầu tư.",
        "output": "Kết quả: Ghi ra tệp văn bản INVP.OUT gồm hai dòng, dòng thứ nhất ghi tổng lợi nhuận lớn nhất và dòng thứ hai ghi số cách đầu tư để đạt được tổng lợi nhuận lớn nhất đó.",
        "constraints": "Giới hạn: \n - 20% số test: 0 < n <= 10^2, k = 1; \n - 40% số test: 0 < n <= 10^3, 0 < k <= 100; \n - 40% số test: 0 < n <= 10^5, 0 < k <= 100.",
        "examples": [
          {"INVP.INP": "5 3 \n 2 8 6 3 3 \n 5 2 6", "INVP.OUT": "70 \n 2", "Giải thích": "Có 2 cách chọn các ngày là: ngày thứ 2, 3, 4 hoặc ngày thứ 2, 3, 5 đều cho tổng lợi nhuận là: 5*8 + 2*6 + 6*3 = 70", "cite": "[cite: 1215]"}
        ]
      }
    ]
  },
  {
    "id": "EXAM_BAC_GIANG_2025_2026",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO BẮC GIANG",
    "title": "KỲ THI TUYỂN SINH LỚP 10 THPT CHUYÊN BẮC GIANG NĂM HỌC 2025 - 2026",
    "subject": "MÔN THI: TIN HỌC",
    "duration": "Thời gian làm bài 150 phút, không kể thời gian giao đề",
    "overview": {
      "title": "TỔNG QUAN VỀ ĐỀ THI",
      "table": [
        {"Tên bài": "Bài 1. Chữ số tận cùng", "Tên tệp chương trình": "POWMOD.*", "Tên tệp dữ liệu vào": "POWMOD.INP", "Tên tệp kết quả": "POWMOD.OUT", "Điểm": "6.0", "cite": "[cite: 1233]"},
        {"Tên bài": "Bài 2. Số chính phương", "Tên tệp chương trình": "SQRNUM.*", "Tên tệp dữ liệu vào": "SQRNUM.INP", "Tên tệp kết quả": "SQRNUM.OUT", "Điểm": "6.0", "cite": "[cite: 1233]"},
        {"Tên bài": "Bài 3. Quản lý nhiệm vụ", "Tên tệp chương trình": "QLNV.*", "Tên tệp dữ liệu vào": "QLNV.INP", "Tên tệp kết quả": "QLNV.OUT", "Điểm": "4.0", "cite": "[cite: 1233]"},
        {"Tên bài": "Bài 4. Trò chơi xóa số", "Tên tệp chương trình": "NDEL.*", "Tên tệp dữ liệu vào": "NDEL.INP", "Tên tệp kết quả": "NDEL.OUT", "Điểm": "4.0", "cite": "[cite: 1233]"}
      ]
    },
    "questions": [
      {
        "name": "Bài 1 (6,0 điểm). Chữ số tận cùng",
        "context": "Chữ số tận cùng của một số là chữ số cuối cùng của số đó. Ví dụ: Số 268 có chữ số tận cùng là 8; số 7 có chữ số tận cùng là 7.",
        "requirement": "Yêu cầu: Cho hai số nguyên dương a, b. Hãy tìm chữ số tận cùng của a^b.",
        "input": "Dữ liệu: Vào từ tệp POWMOD.INP chỉ có một dòng duy nhất ghi hai số nguyên dương lần lượt là a, b. Hai số cách nhau một dấu cách.",
        "output": "Kết quả: Ghi lên tệp POWMOD.OUT một số nguyên duy nhất là chữ số tận cùng tìm được.",
        "constraints": "Ràng buộc: \n - Subtask 1: Có 80% số test ứng với 80% số điểm của bài có 1 <= a, b <= 15; \n - Subtask 2: Có 20% số test ứng với 20% số điểm của bài có 1 <= a, b <= 10^8.",
        "examples": [
          {"POWMOD.INP": "3 4", "POWMOD.OUT": "1", "Giải thích": "3^4 = 3 x 3 x 3 x 3 = 81", "cite": "[cite: 1243]"}
        ]
      },
      {
        "name": "Bài 2 (6,0 điểm). Số chính phương",
        "context": "Bài toán như sau: Cho dãy số gồm n số nguyên không âm a1, a2, ..., an. Biết rằng: Số chính phương là số tự nhiên mà có thể viết dưới dạng bình phương của một số tự nhiên khác. Ví dụ: 0, 1, 4, 9, 16, 25... là các số chính phương.",
        "requirement": "Yêu cầu: Hãy tìm số chính phương nhỏ nhất không xuất hiện trong dãy số đã cho.",
        "input": "Dữ liệu: Vào từ file SQRNUM.INP có dạng: \n - Dòng đầu tiên chứa số nguyên n (1 <= n <= 10^6); \n - Dòng thứ hai chứa n số nguyên a1, a2, ..., an (0 <= a_i <= 10^12, i=1,2,...,n) các số cách nhau một dấu cách.",
        "output": "Kết quả: Ghi ra file SQRNUM.OUT gồm một dòng ghi một số nguyên không âm là kết quả tìm được.",
        "constraints": "Ràng buộc: \n - Subtask 1: 50% số test đầu tiên n <= 10^3, 0 <= a_i <= 10^4; \n - Subtask 2: 30% số test tiếp theo 10^3 < n <= 10^6, 0 <= a_i <= 10^6; \n - Subtask 3: 20% số test cuối cùng 0 <= a_i <= 10^12.",
        "examples": [
          {"SQRNUM.INP": "8 \n 0 3 4 2 1 4 16 25", "SQRNUM.OUT": "9", "cite": "[cite: 1259]"}
        ]
      },
      {
        "name": "Bài 3 (4,0 điểm). Quản lý nhiệm vụ",
        "context": "Một sa bàn có kích thước M x N (M là số hàng, N là số cột) được chia thành các lưới ô vuông đơn vị có kích thước 1x1. Khu vực chứa nhiệm vụ được mã hóa thành các hình chữ nhật có kích thước 1xk (k <= N) chứa các số khác 0, khu vực không chứa nhiệm vụ được mã hóa bằng số 0. Biết rằng các khu vực chứa nhiệm vụ không liền sát nhau. Độ khó của một nhiệm vụ được xác định bằng tổng các số trong các ô của khu vực đặt nhiệm vụ đó.",
        "requirement": "Yêu cầu: Hãy đếm số lượng các khu vực chứa nhiệm vụ có độ khó là một số nguyên tố.",
        "input": "Dữ liệu: Vào từ file QLNV.INP có dạng: \n - Dòng đầu tiên chứa hai số nguyên dương M, N (1 <= M, N <= 10^5); \n - M dòng tiếp theo chứa N số nguyên a_ij (0 <= a_ij <= 10^8), các số cách nhau một dấu cách.",
        "output": "Kết quả: Ghi ra file QLNV.OUT số lượng khu vực chứa nhiệm vụ có độ khó là một số nguyên tố.",
        "constraints": "Ràng buộc: \n - Subtask 1: Có 50% số test có M <= 50, N <= 50, a_i <= 10^2 \n - Subtask 2: Có 25% số test có M <= 5, N <= 100, a_i <= 10^8; \n - Subtask 3: Có 25% số test có M <= 10^5, N <= 500, a_i <= 10^4",
        "examples": [
          {"QLNV.INP": "3 10 \n 1 3 0 0 0 0 6 4 1 0 \n 0 0 0 4 3 0 0 0 0 0 \n 0 9 0 0 0 0 2 3 0 0", "QLNV.OUT": "3", "Giải thích": "- KV1: 1+3=4 (không nguyên tố); - KV2: 6+4+1=11 (nguyên tố); - KV3: 4+3=7 (nguyên tố); - KV4: 9 (không nguyên tố); - KV5: 2+3=5 (nguyên tố). Tổng cộng 3 khu vực.", "cite": "[cite: 1281]"}
        ]
      },
      {
        "name": "Bài 4 (4,0 điểm). Trò chơi xóa số",
        "context": "Nam lấy một số tự nhiên N rồi thực hiện biến đổi thành số mới. Với mỗi cách biến đổi Nam xóa đi một số chữ số liên tiếp của N (nhưng không xóa hết) Nam nhận được một số mới, nếu số N được chia thành 2 phần thì số mới được ghép từ hai phần này và giữ nguyên thứ tự. Lưu ý: Thao tác xóa tại hai vị trí khác nhau sẽ tạo ra hai cách biến đổi khác nhau. Số N giữ nguyên được coi là một cách biến đổi.",
        "requirement": "Yêu cầu: Hãy đếm các cách biến đổi như trên để số N mới sau khi biến đổi chia hết cho 3.",
        "input": "Dữ liệu: Vào từ file NDEL.INP chứa số nguyên dương N (N có không quá 10^5 chữ số).",
        "output": "Kết quả: Ghi ra file NDEL.OUT một số nguyên là số cách xóa tìm được.",
        "constraints": "Ràng buộc: \n - Subtask 1: 50% test có độ dài N <= 300; \n - Subtask 2: 25% test có độ dài N <= 10^4; \n - Subtask 3: 25% test có độ dài N <= 10^5.",
        "examples": [
          {"NDEL.INP": "2001", "NDEL.OUT": "4", "Giải thích": "Các số mới là: 2001; 201; 201; 21", "cite": "[cite: 1298]"},
          {"NDEL.INP": "160300", "NDEL.OUT": "5", "Giải thích": "Các số mới là: 60300; 0300; 300; 00; 0", "cite": "[cite: 1298]"}
        ]
      }
    ]
  },
  {
    "id": "EXAM_QUANG_NINH_CHUYEN_HA_LONG_2024_2025",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO TỈNH QUẢNG NINH",
    "title": "KỲ THI TUYỂN SINH VÀO LỚP 10 THPT NĂM HỌC 2024-2025 (Dành cho thí sinh thi vào Trường THPT Chuyên Hạ Long)",
    "subject": "Môn thi: Tin học (chuyên)",
    "duration": "Thời gian làm bài: 150 phút, không kể thời gian phát đề",
    "overview": {
      "title": "TỔNG QUAN ĐỀ THI",
      "table": [
        {"Bài": "1", "Tên bài": "Thang nhiệt độ", "Tệp chương trình": "temp.*", "Tệp dữ liệu": "temp.inp", "Tệp kết quả": "temp.out", "Bộ nhớ": "1024 MB", "Thời gian /test": "1 giây", "Điểm": "3,0", "cite": "[cite: 1309]"},
        {"Bài": "2", "Tên bài": "Mảng không giảm", "Tệp chương trình": "incr.*", "Tệp dữ liệu": "incr.inp", "Tệp kết quả": "incr.out", "Bộ nhớ": "1024 MB", "Thời gian /test": "1 giây", "Điểm": "3,0", "cite": "[cite: 1309]"},
        {"Bài": "3", "Tên bài": "Danh sách", "Tệp chương trình": "list.*", "Tệp dữ liệu": "list.inp", "Tệp kết quả": "list.out", "Bộ nhớ": "1024 MB", "Thời gian /test": "1 giây", "Điểm": "2,5", "cite": "[cite: 1309]"},
        {"Bài": "4", "Tên bài": "Chiến tranh giữa các vì sao", "Tệp chương trình": "star.*", "Tệp dữ liệu": "star.inp", "Tệp kết quả": "star.out", "Bộ nhớ": "1024 MB", "Thời gian /test": "1 giây", "Điểm": "1,5", "cite": "[cite: 1309]"}
      ],
      "note": "Dấu * được thay thế bởi pas hoặc cpp hoặc py của ngôn ngữ lập trình được sử dụng tương ứng là Pascal hoặc C++ hoặc Python."
    },
    "questions": [
      {
        "name": "Bài 1. Thang nhiệt độ (3,0 điểm)",
        "context": "Phần lớn các quốc gia trên thế giới sử dụng thang nhiệt độ Celsius (°C) và Fahrenheit (°F). Gọi tc là nhiệt độ theo thang Celsius và tf là nhiệt độ tương ứng theo thang Fahrenheit, ta có: tc = 5/9 * (tf - 32) và tf = 9/5 * tc + 32.",
        "requirement": "Yêu cầu: Cho nhiệt độ ở một thang nhiệt độ, hãy tính nhiệt độ tương ứng ở thang kia với độ chính xác đúng 2 chữ số sau dấu phảy thập phân.",
        "input": "Dữ liệu: Vào từ tệp văn bản temp.inp gồm một dòng chứa một số nguyên (nằm trong đoạn [-10^9; 10^9]) và một ký tự chỉ thang nhiệt độ C hoặc F (viết liền nhau).",
        "output": "Kết quả: Ghi ra tệp văn bản temp.out nhiệt độ tương ứng ở thang kia với độ chính xác đúng 2 chữ số sau dấu phảy thập phân và ký tự C hoặc F chỉ thang nhiệt độ tương ứng (viết liền nhau).",
        "constraints": "Ràng buộc: \n - 50% số test: Thang nhiệt độ là Celsius; \n - 50% số test còn lại: Thang nhiệt độ là Fahrenheit.",
        "examples": [
          {"temp.inp": "0C", "temp.out": "32.00F", "cite": "[cite: 1334]"},
          {"temp.inp": "212F", "temp.out": "100.00C", "cite": "[cite: 1334]"},
          {"temp.inp": "-37C", "temp.out": "-34.60F", "cite": "[cite: 1334]"},
          {"temp.inp": "10F", "temp.out": "-12.22C", "cite": "[cite: 1334]"}
        ]
      },
      {
        "name": "Bài 2. Mảng không giảm (3,0 điểm)",
        "context": "Cho mảng a gồm n số nguyên a1, a2, ..., an. Bạn có thể thay thế một số phần tử ai của mảng bằng -ai, sao cho mảng không giảm hoặc nói rằng điều này là không thể. Mảng được gọi là mảng không giảm nếu a1 <= a2 <= ... <= an.",
        "requirement": "Yêu cầu: Biến đổi mảng thành mảng không giảm bằng cách thay đổi dấu của một số phần tử nếu có thể.",
        "input": "Dữ liệu: Vào từ tệp văn bản incr.inp. \n - Dòng đầu tiên chứa số nguyên n (1 <= n <= 10^5). \n - Dòng thứ hai chứa n số nguyên a1, a2, ..., an (-10^9 <= a_i <= 10^9).",
        "output": "Kết quả: Ghi ra tệp văn bản incr.out. Nếu không thể thì ghi ra “No”. Ngược lại ghi ra hai dòng, dòng đầu tiên ghi “Yes” và dòng thứ hai ghi n số nguyên b1, b2, ..., bn tạo thành một mảng không giảm và bi = ai hoặc bi = -ai.",
        "constraints": "Ràng buộc: \n - 25% số test: n <= 20; \n - 25% số test: n <= 1000 và ai >= 0; \n - 25% số test: n <= 1000 và ai <= 0; \n - 25% số test còn lại: Không có thêm ràng buộc nào.",
        "examples": [
          {"incr.inp": "5 \n 1 -1 -2 3 6", "incr.out": "Yes \n -1 -1 2 3 6", "cite": "[cite: 1351]"},
          {"incr.inp": "3 \n -3 8 5", "incr.out": "No", "cite": "[cite: 1351]"},
          {"incr.inp": "4 \n 2 3 4 1", "incr.out": "Yes \n 1 2 3 4", "cite": "[cite: 1351]"}
        ]
      },
      {
        "name": "Bài 3. Danh sách (2,5 điểm)",
        "context": "An muốn xem xét các khuyến nghị và đổi tên công ty của mình để nó có thứ tự từ điển trong danh sách càng nhỏ càng tốt. An có thể lấy lý do mắc lỗi soạn thảo là hoán đổi hai chữ cái bất kỳ trong tên.",
        "requirement": "Yêu cầu: Bạn hãy giúp An chọn tên công ty mới bằng cách hoán đổi tối đa hai chữ cái bất kỳ trong tên (1 lần hoán đổi) hoặc giữ nguyên tên hiện tại, để cho tên công ty có thứ tự từ điển trong danh sách càng nhỏ càng tốt.",
        "input": "Dữ liệu: Vào từ tệp văn bản list.inp gồm một dòng chứa một xâu gồm các chữ cái tiếng Anh viết thường từ 'a' đến 'z' có độ dài n (2 <= n <= 10^6).",
        "output": "Kết quả: Ghi ra tệp văn bản list.out một xâu là tên công ty mới. Nếu tên không thay đổi thì in tên gốc.",
        "constraints": "Ràng buộc: \n - 20% số test: n <= 10; \n - 20% số test: n <= 100; \n - 20% số test: n <= 3000; \n - 20% số test: n <= 5*10^4; \n - 20% số test còn lại: Không có thêm ràng buộc nào.",
        "examples": [
          {"list.inp": "aefbz", "list.out": "abfez", "cite": "[cite: 1372]"},
          {"list.inp": "abc", "list.out": "abc", "cite": "[cite: 1372]"}
        ]
      },
      {
        "name": "Bài 4. Chiến tranh giữa các vì sao (1,5 điểm)",
        "context": "Có n vì sao được đánh số từ 1 đến n. Nếu nhân vật đang ở vì sao i thì nhân vật chỉ có thể đi đến vì sao j > i. Với mỗi hành tinh i có một tham số ai. Khi nhân vật đi từ hành tinh i đến hành tinh j, nó sẽ nhận thêm một sức mạnh gcd(ai, aj). Lúc bắt đầu chơi, nhân vật có 1 đơn vị sức mạnh và xuất phát từ vì sao 1. Mục tiêu là đưa nhân vật đến vì sao n với tổng sức mạnh lớn nhất.",
        "requirement": "Yêu cầu: Tìm một dãy các chỉ số 1 = i1 < i2 < ... < ik = n, sao cho tổng sau lớn nhất: 1 + gcd(a_i1, a_i2) + gcd(a_i2, a_i3) + ... + gcd(a_ik-1, a_ik).",
        "input": "Dữ liệu: Vào từ tệp văn bản star.inp. \n - Dòng đầu tiên chứa số nguyên n (1 <= n <= 2*10^5). \n - Dòng thứ hai chứa n số nguyên a1, a2, ..., an (1 <= a_i <= 2*10^5 + 3).",
        "output": "Kết quả: Ghi ra tệp văn bản star.out một số nguyên là tổng sức mạnh lớn nhất.",
        "constraints": "Ràng buộc: \n - 20% số test: n <= 20; \n - 20% số test: n <= 1000; \n - 20% số test: a_i là các số nguyên tố; \n - 20% số test: n <= 2*10^4 và a_i <= 100; \n - 20% số test còn lại: Không có thêm ràng buộc nào.",
        "examples": [
          {"star.inp": "4 \n 5 1 1 5", "star.out": "6", "Giải thích": "Di chuyển từ 1 đến 4. Sức mạnh: 1 + gcd(5,5) = 6.", "cite": "[cite: 1399-1401]"},
          {"star.inp": "5 \n 6 4 15 9 10", "star.out": "9", "Giải thích": "Di chuyển 1 -> 3 -> 5. Sức mạnh: 1 + gcd(6,15) + gcd(15,10) = 1 + 3 + 5 = 9.", "cite": "[cite: 1399-1402]"}
        ]
      }
    ]
  },

  {
    "id": "EXAM_QUANG_NINH_CHUYEN_HA_LONG_2025_2026",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO TỈNH QUẢNG NINH",
    "title": "KỲ THI TUYỂN SINH TRUNG HỌC PHỔ THÔNG NĂM HỌC 2025 - 2026",
    "subject": "Môn thi: Tin học (chuyên) (Dành cho thí sinh thi vào Trường THPT Chuyên Hạ Long)",
    "duration": "Thời gian làm bài: 150 phút, không kể thời gian phát đề",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"Bài": "1", "Tên bài": "Ước số", "Tệp chương trình": "div.*", "Tệp dữ liệu": "div.inp", "Tệp kết quả": "div.out", "Bộ nhớ": "1024 MB", "Thời gian /test": "1 giây", "Điểm": "3,0 điểm", "cite": ""},
        {"Bài": "2", "Tên bài": "Tổng dãy", "Tệp chương trình": "sum.*", "Tệp dữ liệu": "sum.inp", "Tệp kết quả": "sum.out", "Bộ nhớ": "1024 MB", "Thời gian /test": "1 giây", "Điểm": "3,0 điểm", "cite": ""},
        {"Bài": "3", "Tên bài": "Trung vị", "Tệp chương trình": "med.*", "Tệp dữ liệu": "med.inp", "Tệp kết quả": "med.out", "Bộ nhớ": "1024 MB", "Thời gian /test": "1 giây", "Điểm": "2,5 điểm", "cite": ""},
        {"Bài": "4", "Tên bài": "Dãy con tăng", "Tệp chương trình": "inc.*", "Tệp dữ liệu": "inc.inp", "Tệp kết quả": "inc.out", "Bộ nhớ": "1024 MB", "Thời gian /test": "1 giây", "Điểm": "1,5 điểm", "cite": ""}
      ],
      "note": "Dấu * được thay thế bởi cpp hoặc py của ngôn ngữ lập trình được sử dụng tương ứng là C++ hoặc Python."
    },
    "questions": [
      {
        "name": "Bài 1. Ước số (3,0 điểm)",
        "context": "Số nguyên dương a được gọi là ước nguyên dương thực sự của số nguyên n nếu a là ước của n và a < n. Ví dụ số 24 có 7 ước nguyên dương thực sự là: 1, 2, 3, 4, 6, 8, 12.",
        "requirement": "Yêu cầu: Hãy xác định ước nguyên dương thực sự lớn nhất của n.",
        "input": "Dữ liệu vào: Từ tệp văn bản \"div.inp\" \n - Gồm một dòng chứa số nguyên dương n (2 <= n <= 10^5).",
        "output": "Kết quả: Ghi ra tệp văn bản \"div.out\" \n - Ước nguyên dương thực sự lớn nhất của n.",
        "examples": [
          {"div.inp": "4", "div.out": "2", "cite": ""},
          {"div.inp": "7", "div.out": "1", "cite": ""},
          {"div.inp": "24", "div.out": "12", "cite": ""}
        ]
      },
      {
        "name": "Bài 2. Tổng dãy (3,0 điểm)",
        "context": "Cho một dãy gồm n số nguyên dương a1, a2, ..., an.",
        "requirement": "Yêu cầu: Đếm số cặp (i,j) đồng thời thỏa mãn: \n i) 1 <= i < j <= n \n ii) ai + ai+1 + ... + aj là một số chẵn.",
        "input": "Dữ liệu vào: Từ tệp văn bản \"sum.inp\" \n - Dòng đầu chứa số nguyên dương n (2 <= n <= 10^5); \n - Dòng thứ hai chứa n số nguyên dương a1, a2,..., an (1 <= ai <= 10^9; i=1,2,...,n)",
        "output": "Kết quả: Ghi ra tệp văn bản \"sum.out\" \n - Số lượng cặp (i, j) thỏa mãn yêu cầu của bài.",
        "constraints": "Ràng buộc: \n - 40% số test thỏa mãn: n <= 10^2; \n - 40% số test thỏa mãn: 10^2 < n <= 5.10^3; \n - 20% số test còn lại không có ràng buộc gì thêm.",
        "examples": [
          {"sum.inp": "5 \n 2 3 4 5 1", "sum.out": "4", "Giải thích": "Số cặp thỏa mãn là: (1, 3); (1, 4); (2, 5); (3, 5).", "cite": ""},
          {"sum.inp": "4 \n 2 5 6 4", "sum.out": "1", "cite": ""}
        ]
      },
      {
        "name": "Bài 3: Trung vị (2,5 điểm)",
        "context": "Trung vị của dãy các số nguyên a1, a2, ..., an là phần tử xuất hiện ở vị trí floor((n+1)/2) sau khi dãy đó được sắp xếp lại thành dãy không giảm. Ví dụ: Cho dãy A=(2,3,4,2,8) sau khi sắp xếp lại thành dãy không giảm ta được dãy (2,2,3,4,8), trung vị của dãy là phần tử 3.",
        "requirement": "Yêu cầu: Cho dãy A gồm n số nguyên a1, a2, ..., an và số nguyên k. Hãy xác định trung vị lớn nhất của mọi dãy con gồm ít nhất k phần tử liên tiếp trong dãy đã cho.",
        "input": "Dữ liệu vào: Từ tệp văn bản \"med.inp\" \n - Dòng đầu chứa hai số nguyên n, k (1 <= k <= n <= 10^5) \n - Dòng thứ hai chứa n số nguyên a1, a2, ..., an (1 <= ai <= n; i=1,2,...,n).",
        "output": "Kết quả: Ghi ra tệp văn bản \"med.out\" \n - Kết quả của bài toán.",
        "constraints": "Ràng buộc: \n - 20% số test thỏa mãn: k=2; n=3 \n - 20% số test thỏa mãn: k=1; \n - 30% số test thỏa mãn: n <= 100; \n - 30% số test không có ràng buộc gì thêm.",
        "examples": [
          {"med.inp": "4 2 \n 1 3 2 4", "med.out": "3", "Giải thích": "Dãy con liên tiếp độ dài 2: (1, 3)->1; (3, 2)->2; (2, 4)->2. Độ dài 3: (1, 3, 2)->2; (3, 2, 4)->3. Độ dài 4: (1, 3, 2, 4)->2. Do vậy trung vị lớn nhất đạt được là: 3", "cite": ""},
          {"med.inp": "4 1 \n 1 2 2 4", "med.out": "4", "cite": ""},
          {"med.inp": "11 2 \n 2 3 3 2 11 5 2 3 9 10 11", "med.out": "10", "cite": ""},
          {"med.inp": "11 6 \n 2 3 3 2 11 5 2 3 9 10 11", "med.out": "9", "cite": ""}
        ]
      },
      {
        "name": "Bài 4. Dãy con chung (1,5 điểm)",
        "context": "Cho hai dãy A và B chỉ chứa các số 0 và 1, dãy A có n phần tử, dãy B có m phần tử. Dãy C được gọi là dãy con chung của hai dãy A và B nếu C vừa là dãy con của A, vừa là dãy con của B.",
        "requirement": "Yêu cầu: Hãy xác định độ dài lớn nhất của dãy con chung không giảm của A và B.",
        "input": "Dữ liệu vào: Từ tệp văn bản \"inc.inp\" \n - Dòng đầu chứa một số nguyên n (1 <= n <= 2.10^5) là số phần tử của dãy A; \n - Dòng thứ hai chứa n số nguyên a1, a2, ..., an (0 <= ai <= 1) \n - Dòng thứ ba chứa một số nguyên m (1 <= m <= 2.10^5) là số phần tử của dãy B; \n - Dòng thứ tư chứa m số nguyên b1, b2, ..., bm (0 <= bi <= 1). \n Dữ kiện của bài toán đảm bảo luôn tồn tại dãy con chung.",
        "output": "Kết quả: Ghi ra tệp văn bản \"inc.out\" \n - Một số nguyên duy nhất là độ dài lớn nhất của dãy con chung không giảm của hai dãy A và B.",
        "constraints": "Ràng buộc: \n - 25% số test thỏa mãn: ai=1; 1 <= m, n <= 3000; \n - 25% số test thỏa mãn: m=n; ai=bi; \n - 25% số test thỏa mãn: 1 <= m, n <= 3000; \n - 25% số test không có ràng buộc gì thêm.",
        "examples": [
          {"inc.inp": "7 \n 0 0 0 1 0 1 1 \n 6 \n 0 0 1 1 0 1", "inc.out": "5", "Giải thích": "Dãy con chung không giảm dài nhất là: 0,0,1,1,1.", "cite": ""},
          {"inc.inp": "10 \n 0 0 0 1 1 1 0 1 0 0 \n 10 \n 1 1 0 0 0 1 0 1 1 1", "inc.out": "7", "cite": ""},
          {"inc.inp": "3 \n 1 1 1 \n 5 \n 1 0 1 0 0", "inc.out": "2", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_UNNAMED_01",
    "province": "Không xác định",
    "title": "Đề thi Không xác định 1",
    "subject": "Tin học",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": []
    },
    "questions": [
      {
        "name": "Bài 1",
        "context": "Huấn luyện viên Bình quản lý N đội tuyển thể thao, đội thứ i có hai thông số: sức bền mi và sức mạnh vi. Để đánh giá toàn diện, ông Bình tính tổng sức Ti của mỗi đội là mi + vi. Sau khi tính tất cả các giá trị Ti, ông muốn biết chênh lệch giữa đội có tổng sức lớn nhất và đội có tổng sức bé nhất.",
        "requirement": "Yêu cầu: Tính chênh lệch giữa đội có tổng sức lớn nhất và đội có tổng sức bé nhất.",
        "input": "Dữ liệu đầu vào: Gồm N+1 dòng: \n - Dòng đầu tiên chứa số nguyên dương N (2 <= N <= 10^5) là số lượng đội tuyển thể thao. \n - N dòng tiếp theo, mỗi dòng chứa hai số nguyên mi và vi (0 <= mi, vi <= 10^9).",
        "output": "Dữ liệu đầu ra: Gồm một số nguyên duy nhất là kết quả của bài toán.",
        "constraints": "Ràng buộc dữ liệu: \n - 50% số test có N <= 100. \n - 50% số test có N <= 10^5.",
        "examples": [
          {"Input": "8 \n 4 6 \n 1 3 \n 2 5 \n 4 2 \n 3 3 \n 7 2 \n 8 1 \n 7 8", "Output": "11", "Giải thích": "Có 8 đội, với tổng sức lần lượt là 4+6=10, 1+3=4, 2+5=7, 4+2=6, 3+3=6, 7+2=9, 8+1=9 và 7+8=15, nên chênh lệch là 15-4=11.", "cite": ""}
        ]
      },
      {
        "name": "Bài 2",
        "context": "Cho số nguyên dương N.",
        "requirement": "Yêu cầu: Tính số dư của 2^(3^N) khi chia cho 5.",
        "input": "Dữ liệu đầu vào: Gồm một dòng chứa số nguyên dương N (1 <= N).",
        "output": "Dữ liệu đầu ra: Gồm một số nguyên duy nhất là kết quả của bài toán.",
        "constraints": "Ràng buộc dữ liệu: \n - 50% số test có N <= 5. \n - 50% số test còn lại không có ràng buộc gì thêm.",
        "examples": [
          {"Input": "2", "Output": "2", "Giải thích": "3^2 = 9, 2^9 = 512, 512 chia 5 dư 2.", "cite": ""}
        ]
      },
      {
        "name": "Bài 3",
        "context": "Cho một dãy N số nguyên a0, a1, ..., aN-1. Khoảng cách giữa hai số ai và aj (0 <= i, j <= N-1; i != j) được định nghĩa là |i - j|.",
        "requirement": "Yêu cầu: Tìm khoảng cách nhỏ nhất giữa hai số bằng nhau trong dãy, nếu không có hai số nào bằng nhau, in ra -1.",
        "input": "Dữ liệu đầu vào: Gồm hai dòng: \n - Dòng đầu tiên chứa số nguyên dương N (2 <= N <= 10^5). \n - Dòng thứ hai chứa N số nguyên a0, a1, ..., aN-1 (-10^9 <= ai <= 10^9).",
        "output": "Dữ liệu đầu ra: Gồm một số nguyên duy nhất là kết quả của bài toán.",
        "constraints": "Ràng buộc dữ liệu: \n - 80% số test có N <= 10^3 và -10^5 <= ai <= 10^5 với 0 <= i <= N-1. \n - 20% số test còn lại không có ràng buộc gì thêm.",
        "examples": [
          {"Input": "5 \n 7 2 3 2 7", "Output": "2", "Giải thích": "Dãy 7, 2, 3, 2, 7 có hai cặp số bằng nhau: \n - 7 ở vị trí 0 và 4, khoảng cách 4; \n - 2 ở vị trí 1 và 3, khoảng cách 2; \n Nên kết quả của bài toán là 2.", "cite": ""}
        ]
      },
      {
        "name": "Bài 4",
        "context": "Cho N hình chữ nhật, mỗi hình chữ nhật Hi có chiều dài Di và chiều rộng Ri. Hình chữ nhật A được gọi là lớn hơn hình chữ nhật B, ký hiệu A > B nếu: \n - Hoặc diện tích hình chữ nhật A lớn hơn diện tích hình chữ nhật B, tức là DA x RA > DB x RB \n - Hoặc diện tích hình chữ nhật A bằng diện tích hình chữ nhật B và chiều dài hình chữ nhật A lớn hơn chiều dài hình chữ nhật B, tức là DA x RA = DB x RB và DA > DB.",
        "requirement": "Yêu cầu: Hãy tìm độ dài của dãy giảm dần dài nhất (không cần liên tiếp) các hình chữ nhật. Tức là tìm số k lớn nhất sao cho tồn tại dãy các chỉ số i1, i2, ..., ik mà Hi1 > Hi2 > ... > Hik.",
        "input": "Dữ liệu đầu vào: Gồm N+1 dòng: \n - Dòng đầu tiên chứa số nguyên dương N (1 <= N <= 10^5) là số lượng hình chữ nhật. \n - N dòng tiếp theo, mỗi dòng chứa hai số nguyên Di và Ri (1 <= Di, Ri <= 10^9) lần lượt là chiều dài và chiều rộng của hình chữ nhật thứ i.",
        "output": "Dữ liệu đầu ra: Gồm một số nguyên duy nhất là kết quả của bài toán.",
        "constraints": "Ràng buộc dữ liệu: \n - 70% số test có N <= 10^3. \n - 30% số test còn lại không có ràng buộc gì thêm.",
        "examples": [
          {"Input": "4 \n 2 3 \n 3 2 \n 2 2 \n 1 3", "Output": "3", "Giải thích": "Các hình chữ nhật: (2, 3), (3, 2), (2, 2), (1, 3). Dãy giảm dần dài nhất với chỉ số tăng dần: (2,3) (chỉ số 0) -> (2,2) (chỉ số 2) -> (1,3) (chỉ số 3), với diện tích 6 -> 4 -> 3, độ dài 3.", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_LAM_SON_2026_2027",
    "province": "SỞ GD & ĐT THANH HÓA - THPT CHUYÊN LAM SƠN",
    "title": "KỲ THI KHẢO SÁT CÁC MÔN THI VÀO LỚP 10 THPT CHUYÊN LAM SƠN Năm học: 2026 - 2027",
    "subject": "Môn thi: Tin học",
    "duration": "Thời gian làm bài 150 phút (không kể thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"Câu": "1", "Tên bài": "Tính S", "File chương trình": "CAU1.*", "File dữ liệu vào": "CAU1.INP", "File kết quả": "CAU1.OUT", "Điểm": "4", "cite": ""},
        {"Câu": "2", "Tên bài": "Dãy không giảm", "File chương trình": "CAU2.*", "File dữ liệu vào": "CAU2.INP", "File kết quả": "CAU2.OUT", "Điểm": "3", "cite": ""},
        {"Câu": "3", "Tên bài": "Dãy con", "File chương trình": "CAU3.*", "File dữ liệu vào": "CAU3.INP", "File kết quả": "CAU3.OUT", "Điểm": "2", "cite": ""},
        {"Câu": "4", "Tên bài": "Cửa hàng", "File chương trình": "CAU4.*", "File dữ liệu vào": "CAU4.INP", "File kết quả": "CAU4.OUT", "Điểm": "1", "cite": ""}
      ],
      "note": "Dấu * được thay bởi PY hoặc CPP tương ứng với ngôn ngữ lập trình Python hoặc C++."
    },
    "questions": [
      {
        "name": "Câu 1. Tính S",
        "context": "Trong giờ Tin hôm nay, thầy giáo có bài toán đố cả lớp.",
        "requirement": "Yêu cầu: Cho số tự nhiên N, hãy lập trình tính tổng sau: \n S = 1/(1*2) + 1/(2*3) + ... + 1/((N-1)*N)",
        "input": "Dữ liệu: Vào từ file CAU1.INP gồm 1 số nguyên (2 <= N <= 10^18)",
        "output": "Kết quả: Ghi ra file CAU1.OUT một số là kết quả của bài toán (làm tròn đến 5 chữ số thập phân).",
        "constraints": "Ràng buộc: \n - 80% số điểm tương ứng với 80% số test có N <= 10^6 \n - 20% số điểm còn lại tương ứng với 20% số test không có ràng buộc gì thêm.",
        "examples": [
          {"CAU1.INP": "3", "CAU1.OUT": "0.66667", "cite": ""},
          {"CAU1.INP": "2", "CAU1.OUT": "0.50000", "cite": ""}
        ]
      },
      {
        "name": "Câu 2. Dãy không giảm",
        "context": "Cho dãy số nguyên a1, a2, ..., an. Với mỗi số ai, Bờm được phép thực hiện 1 trong 3 thao tác sau: \n - Cộng thêm 1: ai = ai + 1; \n - Trừ đi 1: ai = ai - 1 \n - Giữ nguyên: ai = ai.",
        "requirement": "Yêu cầu: Với dãy số nguyên a1, a2,..., an đã cho, mỗi số ai (i=1...n) Bờm thực hiện đúng 1 thao tác trên thì dãy được tạo ra có thành dãy không giảm được hay không?",
        "input": "Dữ liệu: Vào từ file CAU2.INP gồm \n - Dòng đầu chứa số nguyên dương T là số bộ test (T <= 3); \n - Trong mỗi bộ test thì: \n + Dòng thứ nhất chứa duy nhất một số nguyên dương n (2 <= n <= 10^5); \n + Dòng thứ hai chứa n số nguyên a1, a2,..., an (|ai| <= 10^9).",
        "output": "Kết quả: Ghi ra file CAU2.OUT gồm T dòng là đáp án tương ứng của T bộ test. \n \"YES\" nếu Bờm có thể tạo ra một dãy không giảm. Ngược lại in ra \"NO\".",
        "constraints": "Ràng buộc: \n - 50% số điểm tương ứng với 50% số test có T=1; a2 = a3 = ... = an; \n - 30% số điểm tương ứng với 30% số test có T=2; n <= 20; \n - 20% số điểm tương ứng với 20% số test có T=3;",
        "examples": [
          {"CAU2.INP": "2 \n 5 \n 1 2 1 1 2 \n 4 \n 1 4 2 1", "CAU2.OUT": "YES \n NO", "cite": ""}
        ]
      },
      {
        "name": "Câu 3. Dãy con",
        "context": "Bờm chưa tìm ra được cách giải tối ưu, nhờ các bạn lập trình viên hỗ trợ tiếp Bờm giải quyết bài toán: Tìm dãy con liên tiếp có độ dài bất kỳ sao cho tổng giá trị các phần tử dãy con đạt giá trị lớn nhất.",
        "requirement": "Yêu cầu: Cho một dãy số nguyên A gồm N phần tử A1, A2, ..., An và hai số nguyên U, V (1 <= U <= V <= N). Hãy tìm một dãy con liên tiếp của dãy A có tổng giá trị các phần tử đạt giá trị lớn nhất và có độ dài D với U <= D <= V.",
        "input": "Dữ liệu: Vào từ file CAU3.INP gồm \n - Dòng đầu chứa 3 số nguyên dương N, U, V (1 <= U <= V <= N <= 10^5). \n - Dòng thứ hai chứa dãy số nguyên A gồm N phần tử A1, A2, ..., AN (|Ai| <= 10^9, 1 <= i <= N).",
        "output": "Kết quả: Ghi ra file CAU3.OUT một số nguyên duy nhất là tổng giá trị các phần tử trên dãy con tìm được.",
        "constraints": "Ràng buộc: \n - 50% số điểm tương ứng với 50% số test có U=V \n - 50% số điểm tương ứng với 50% số test không có ràng buộc gì thêm.",
        "examples": [
          {"CAU3.INP": "6 2 2 \n -2 3 1 2 5 4", "CAU3.OUT": "9", "cite": ""},
          {"CAU3.INP": "5 2 3 \n -4 3 -2 -6 5", "CAU3.OUT": "1", "cite": ""}
        ]
      },
      {
        "name": "Câu 4. Cửa hàng",
        "context": "Có một cửa hàng cho thuê N thiết bị âm thanh. Để thuê hết N thiết bị, khách hàng có thể chia chúng thành nhiều nhóm, trong mỗi nhóm được tính tiền theo một trong hai chính sách sau: \n - Nếu trong nhóm đó thuê từ 3 thiết bị trở lên thì sẽ được miễn phí \"1 thiết bị\" có giá nhỏ nhất. \n - Nếu trong nhóm đó thuê ít hơn 3 thiết bị thì tất cả thiết bị của nhóm đó đều được giảm giá q%.",
        "requirement": "Yêu cầu: Tìm tổng số tiền ít nhất để thuê hết N thiết bị.",
        "input": "Dữ liệu: Vào từ file CAU4.INP gồm: \n - Dòng đầu tiên chứa 2 số nguyên dương N, q (N <= 10^6, q < 100) lần lượt là số lượng thiết bị và mức giảm giá. \n - Dòng tiếp theo chứa N số nguyên dương A1, A2, A3, ..., An (Ai <= 10^6, Ai chia hết cho 100) lần lượt là số tiền cần phải bỏ ra để thuê của các thiết bị.",
        "output": "Kết quả: Ghi ra file CAU4.OUT một số là tổng số tiền ít nhất để thuê hết N thiết bị.",
        "constraints": "Ràng buộc: \n - 20% số điểm tương ứng với 20% số test có N <= 3, 100 <= Ai <= 1000; \n - 80% số điểm còn lại tương ứng với 80% số test không có ràng buộc gì thêm.",
        "examples": [
          {"CAU4.INP": "6 10 \n 1000 100 900 100 800 100", "CAU4.OUT": "2100", "Giải thích": "Ở test ví dụ ta chia làm 2 nhóm. Nhóm 1 gồm 3 thiết bị có giá 100, 100, 100. Nhóm 2 gồm 3 thiết bị có giá 1000, 900, 800. Tổng số tiền để thuê 6 thiết bị sẽ là 100+100+1000+900=2100 (ví nhóm 1 được miễn 1 thiết bị có giá 100, nhóm 2 được miễn 1 thiết bị có giá 800).", "cite": ""}
        ]
      }
    ]
  },

  {
    "id": "EXAM_HCM_2024_2025",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ HỒ CHÍ MINH",
    "title": "KÌ THI TUYỂN SINH LỚP 10 THPT NĂM HỌC 2024 - 2025",
    "subject": "Môn thi chuyên: Tin học",
    "duration": "Thời gian làm bài: 150 phút (Không tính thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"Tên bài": "Tuyệt chiêu", "File chương trình": "TUYETCHIEU.*", "File dữ liệu": "TUYETCHIEU.INP", "File kết quả": "TUYETCHIEU.OUT", "cite": ""},
        {"Tên bài": "Đắp núi", "File chương trình": "DAPNUI.*", "File dữ liệu": "DAPNUI.INP", "File kết quả": "DAPNUI.OUT", "cite": ""},
        {"Tên bài": "Lọc nước", "File chương trình": "LOCNUOC.*", "File dữ liệu": "LOCNUOC.INP", "File kết quả": "LOCNUOC.OUT", "cite": ""}
      ],
      "note": "Dấu * được thay thế bởi PAS hoặc CPP của ngôn ngữ lập trình được sử dụng tương ứng là Pascal hoặc C++."
    },
    "questions": [
      {
        "name": "Bài 1: Tuyệt chiêu (3 điểm)",
        "context": "Một trò chơi điện tử được thiết kế cho phép người chơi sử dụng nhiều tuyệt chiêu. Hệ thống sẽ lưu giữ quá trình sử dụng tuyệt chiêu của người chơi bằng một dãy n các số nguyên dương a1, a2,..., ai, ..., an (ai là mã số của tuyệt chiêu mà người chơi đã sử dụng ở lượt thứ i). Trò chơi có quy định là khi một tuyệt chiêu được sử dụng ở lượt chơi thứ i, thì người chơi chỉ có thể sử dụng lại tuyệt chiêu đó từ lượt chơi thứ i+k trở đi.",
        "requirement": "Yêu cầu: Hãy viết chương trình kiểm tra việc sử dụng các tuyệt chiêu của người chơi.",
        "input": "Dữ liệu: Vào từ file văn bản TUYETCHIEU.INP gồm 2 dòng: \n - Dòng đầu chứa 2 số nguyên dương n và k (1 <= n <= 10^6, 1 <= k <= 10^4). \n - Dòng tiếp theo gồm n số nguyên dương a1, a2,..., an (ai <= 10^6, 1 <= i <= n). \n Các số trên cùng một dòng cách nhau một khoảng trắng.",
        "output": "Kết quả: Ghi ra file văn bản TUYETCHIEU.OUT một số nguyên duy nhất cho biết tuyệt chiêu nào đã sử dụng vi phạm quy định. Nếu có nhiều hơn một tuyệt chiêu vi phạm, thì ghi tuyệt chiêu vi phạm có mã nhỏ nhất. Nếu người chơi không vi phạm, thì ghi -1.",
        "constraints": "Ràng buộc: Chương trình thực thi trong giới hạn 1 giây. \n 60% số điểm của bài: n <= 10^3 \n 40% số điểm của bài: n <= 10^6",
        "examples": [
          {"TUYETCHIEU.INP": "6 3 \n 9 9 3 1 4 1", "TUYETCHIEU.OUT": "1", "Giải thích": "Tuyệt chiêu số 9 sử dụng ở lượt 1 thì chỉ được sử dụng lại từ lượt chơi thứ 4 trở đi (do i+k bằng 1+3) nhưng người chơi đã sử dụng lại ở lượt 2 nên vi phạm. Tuyệt chiêu số 1 sử dụng ở lượt 4 và lượt 6 nên vi phạm. Trong các tuyệt chiêu vi phạm, ghi ra tuyệt chiêu có mã nhỏ nhất là 1.", "cite": ""},
          {"TUYETCHIEU.INP": "5 2 \n 1 2 3 1 3", "TUYETCHIEU.OUT": "-1", "Giải thích": "Không có tuyệt chiêu nào vi phạm, ghi ra -1.", "cite": ""}
        ]
      },
      {
        "name": "Bài 2: Đắp núi (3 điểm)",
        "context": "Trong một trò chơi xây địa hình 2D, một khu vực A gồm n vùng liên tiếp có độ cao lần lượt A1, A2, ..., An. Khu vực A được gọi là một ngọn núi khi sườn bên trái của nó tăng đơn điệu và sườn bên phải của nó giảm đơn điệu. Hai vùng đầu tiên và cuối cùng của khu vực A không được là đỉnh núi. Người chơi có thể tăng độ cao của các vùng để đắp A thành một ngọn núi. Với mỗi vùng Ai (1 <= i <= n), việc tăng độ cao lên 1 đơn vị sẽ tốn chi phí là 1 điểm.",
        "requirement": "Yêu cầu: Hãy viết chương trình tính chi phí tối thiểu để đắp khu vực A thành một ngọn núi.",
        "input": "Dữ liệu: Vào từ file văn bản DAPNUI.INP gồm 2 dòng: \n - Dòng đầu chứa số nguyên n (3 <= n <= 10^5). \n - Dòng tiếp theo gồm n số nguyên A1, A2,..., An (0 <= Ai <= 10^9, 1 <= i <= n).",
        "output": "Kết quả: Ghi ra file văn bản DAPNUI.OUT một số nguyên duy nhất cho biết chi phí tối thiểu để đắp khu vực A thành một ngọn núi.",
        "constraints": "Ràng buộc: Chương trình thực thi trong giới hạn 1 giây. \n 60% số điểm của bài: 3 <= n <= 10^3 \n 40% số điểm của bài: 3 <= n <= 10^5",
        "examples": [
          {"DAPNUI.INP": "5 \n 1 1 1 1 1", "DAPNUI.OUT": "4", "Giải thích": "Có thể đắp được một ngọn núi với chiều cao: 1 2 3 2 1. Chi phí gồm: 1 điểm ở A2, 2 điểm ở A3 và 1 điểm ở A4. Tổng chi phí là 4 điểm. Đây là phương án có chi phí tối thiểu.", "cite": ""},
          {"DAPNUI.INP": "6 \n 3 4 5 6 5 1", "DAPNUI.OUT": "0", "Giải thích": "Vì A đã là một ngọn núi nên không cần đắp thêm. Chi phí là 0.", "cite": ""}
        ]
      },
      {
        "name": "Bài 3. Lọc nước (4 điểm)",
        "context": "Trên một vùng núi, người dân tự thiết kế mô hình xử lý nước uống cho các hộ dân vùng cao. Họ đặt n hệ thống lưu giữ nước từ các nguồn trên cao đổ về. Lượng nước đưa vào n hệ thống lần lượt là a1, a2,..., an (lít). Các hệ thống có cấu tạo giống nhau. Mỗi hệ thống có m bồn chứa nước được đánh số từ 1, 2, ..., m với dung tích lần lượt là r1, r2,..., rm (lít). Bồn chứa nước số 1 được đặt ở vị trí cao nhất tiếp đến là bồn số 2,... và thấp nhất là bồn số m. Đồng thời, họ xây dựng m máy xử lý nước uống. Máy xử lý nước số 1 sẽ xử lý nước từ các bồn chứa số 1 của tất cả các hệ thống lưu giữ. Tương tự cho các máy xử lý nước còn lại.",
        "requirement": "Yêu cầu: Hãy viết chương trình tính lượng nước thu được trong từng máy xử lý nước.",
        "input": "Dữ liệu: Vào từ file văn bản LOCNUOC.INP gồm 3 dòng: \n - Dòng đầu chứa hai số nguyên n và m (1 <= n <= 2.10^5, 1 <= m <= 10^9). \n - Dòng thứ hai gồm n số nguyên là a1, a2,..., an (1 <= ai <= 10^9, 1 <= i <= n). \n - Dòng thứ ba gồm m số nguyên là r1, r2,..., rm (1 <= ri <= 10^9, 1 <= i <= m).",
        "output": "Kết quả: Ghi ra file văn bản LOCNUOC.OUT một dòng duy nhất gồm tối đa m số nguyên là lượng nước thu được ở từng máy xử lý có nước. Nếu máy xử lý nước không nhận được nước thì không in ra.",
        "constraints": "Ràng buộc: Chương trình thực thi trong giới hạn 1 giây. \n 40% số điểm của bài: 1 <= n <= 10^3, 1 <= m <= 10^2 \n 30% số điểm của bài: 1 <= n <= 10^3, 1 <= m <= 10^9 \n 30% số điểm của bài: 1 <= n <= 2.10^5, 1 <= m <= 10^9",
        "examples": [
          {"LOCNUOC.INP": "4 5 \n 6 8 2 5 \n 4 3 2 7 6", "LOCNUOC.OUT": "14 6 1", "Giải thích": "- Các bồn chứa nước số 1: hệ thống 1, 2 và 4 nhận được 4x3=12 lít, riêng hệ thống 3 chỉ nhận được 2 lít. Vậy, máy xử lý nước số 1 nhận được 12+2=14 lít. Lượng nước còn lại ở các hệ thống sẽ là 2, 4, 0, 1 lít. \n - Máy xử lý nước số 2 nhận được 2 + 3 + 0 + 1 = 6 lít... \n - Máy xử lý nước số 3 nhận được 0 + 1 + 0 + 0 = 1 lít. \n Các bồn chứa nước số 4, 5 không có nước.", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_HCM_2023_2024",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ HỒ CHÍ MINH",
    "title": "KÌ THI TUYỂN SINH LỚP 10 THPT NĂM HỌC 2023-2024",
    "subject": "Môn thi chuyên: TIN HỌC",
    "duration": "Thời gian làm bài: 150 phút (Không tính thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"Tên bài": "LŨY THỪA", "Tập tin chương trình": "LUYTHUA.*", "Tập tin dữ liệu": "LUYTHUA.INP", "Tập tin kết quả": "LUYTHUA.OUT", "cite": ""},
        {"Tên bài": "GIAO HÀNG", "Tập tin chương trình": "GIAOHANG.*", "Tập tin dữ liệu": "GIAOHANG.INP", "Tập tin kết quả": "GIAOHANG.OUT", "cite": ""},
        {"Tên bài": "ĐÀO VÀNG", "Tập tin chương trình": "DAOVANG.*", "Tập tin dữ liệu": "DAOVANG.INP", "Tập tin kết quả": "DAOVANG.OUT", "cite": ""}
      ],
      "note": "Dấu * được thay thế bởi PAS hoặc CPP của ngôn ngữ lập trình được sử dụng tương ứng là Pascal hoặc C++."
    },
    "questions": [
      {
        "name": "Bài 1: LŨY THỪA (3 điểm)",
        "context": "Các bài tập có dạng tính giá trị Y = A1^X1 + A2^X2 + A3^X3 + ... + AN^XN với A1, A2... là các số nguyên dương và X1, X2... là các số nguyên không âm có 1 chữ số. Tuy nhiên khi An nhập dữ liệu cho chương trình thì không nhập được số mũ có định dạng chỉ số trên nên chỉ có thể nhập Y = P1 + P2 + P3 + ... + PN trong đó Pi có dạng AiXi. Ví dụ bài tập Y = 2^5 + 3^5 + 10^3 + 215^2 nhưng khi nhập vào chương trình thì có dạng Y = 25 + 35 + 103 + 2152.",
        "requirement": "Yêu cầu: Hãy viết chương trình tính giá trị biểu thức là tổng các lũy thừa nhưng biểu thức được nhập như mô tả ở trên.",
        "input": "Dữ liệu: Vào từ file văn bản LUYTHUA.INP, dòng đầu là một số nguyên N cho biết số lượng số hạng của biểu thức cần tính. Dòng thứ i trong N dòng tiếp theo cho biết số nguyên Pi.",
        "output": "Kết quả: Ghi ra file văn bản LUYTHUA.OUT cho biết giá trị của biểu thức cần tính. Có thể giả sử rằng giá trị các biểu thức luôn nhỏ hơn 10^9.",
        "constraints": "Ràng buộc: \n - 40% test ứng với 40% số điểm của bài có 1 <= N <= 3 và 10 <= Pi < 100 \n - 60% test ứng với 60% số điểm của bài có 1 <= N <= 20 và 10 <= Pi < 10000",
        "examples": [
          {"LUYTHUA.INP": "4 \n 25 \n 35 \n 103 \n 2152", "LUYTHUA.OUT": "47500", "cite": ""}
        ]
      },
      {
        "name": "Bài 2: GIAO HÀNG (3 điểm)",
        "context": "Dọc trên tuyến đường tỉnh lộ, con đường dài nhất khu vực, có nhiều ngôi nhà được đánh chỉ số liên tiếp từ 0 đến M. Khoảng cách giữa các ngôi nhà kế cận nhau bằng chính xác 1 đơn vị chiều dài. Hằng ngày Robot giao hàng DeliRo thực hiện hành trình bắt đầu từ nhà số 0, kết thúc ở nhà số M và vận chuyển hàng qua lại giữa các ngôi nhà. Hôm nay có N đơn hàng, mỗi đơn hàng yêu cầu DeliRo lấy hàng từ một ngôi nhà và giao hàng đến một nhà khác. Việc nhận và giao các đơn hàng có thể được thực hiện theo thứ tự bất kỳ.",
        "requirement": "Yêu cầu: Hãy viết chương trình cho biết đoạn đường ngắn nhất mà DeliRo phải thực hiện để bắt đầu từ nhà số 0, giao hàng theo yêu cầu của N đơn hàng và đến trạm cuối là nhà số M. Giả sử khoang chứa hàng của DeliRo có thể chứa rất nhiều hàng.",
        "input": "Dữ liệu: Vào từ file văn bản GIAOHANG.INP, dòng đầu là hai số nguyên N và M. Dòng thứ i trong N dòng tiếp theo chứa hai số nguyên trong khoảng [0; M] lần lượt là vị trí lấy hàng và giao hàng của đơn hàng thứ i.",
        "output": "Kết quả: Ghi ra file văn bản GIAOHANG.OUT cho biết chiều dài đoạn đường ngắn nhất mà DeliRo phải di chuyển.",
        "constraints": "Ràng buộc: \n - 30% test có N = 2 và 2 < M <= 10^9 \n - 30% test có 1 < N <= 10000 và 2 < M <= 10^9 \n - 40% test có 1 < N <= 300000 và 2 < M <= 10^9",
        "examples": [
          {"GIAOHANG.INP": "2 8 \n 3 7 \n 5 2", "GIAOHANG.OUT": "14", "cite": ""},
          {"GIAOHANG.INP": "4 20 \n 5 3 \n 2 8 \n 7 0 \n 15 5", "GIAOHANG.OUT": "50", "cite": ""}
        ]
      },
      {
        "name": "Bài 3: ĐÀO VÀNG (4 điểm)",
        "context": "Có N thỏi vàng được cố định ở các vị trí X1, X2, X3,... XN trên một trục nằm ngang. Nếu người chơi đào ở vị trí X với máy khoan có lực đập R thì có thể lấy được các thỏi vàng cách vị trí X tối đa R đơn vị chiều dài hay các thỏi vàng có vị trí nằm trong khoảng [X-R; X+R]. Người chơi được đào tối đa K lần và lực đập R là giống nhau ở các lần đào.",
        "requirement": "Yêu cầu: Cho trước vị trí của N thỏi vàng, hãy viết chương trình tìm giá trị nguyên R bé nhất sao cho người chơi có thể lấy được N thỏi vàng sau tối đa K lần đào.",
        "input": "Dữ liệu: Vào từ file văn bản DAOVANG.INP, dòng đầu chứa hai số nguyên N và K lần lượt cho biết số lượng thỏi vàng và số lần đào tối đa. Dòng thứ i trong N dòng tiếp theo cho biết vị trí Xi (0 <= Xi <= 10^9) của thỏi vàng thứ i.",
        "output": "Kết quả: Ghi ra file văn bản DAOVANG.OUT một số nguyên là giá trị lực đập R bé nhất để lấy được N thỏi vàng sau tối đa K lần đào.",
        "constraints": "Ràng buộc: \n - 20% test có K = 1 và N <= 1000 \n - 20% test có K = 2 và N <= 10000 \n - 60% test có K <= 20 và N <= 50000",
        "examples": [
          {"DAOVANG.INP": "6 1 \n 2 \n 20 \n 6 \n 5 \n 4 \n 17", "DAOVANG.OUT": "9", "Giải thích": "Với lực đập R=9, người chơi có thể đào 1 lần ở vị trí X=11", "cite": ""},
          {"DAOVANG.INP": "6 2 \n 2 \n 20 \n 6 \n 5 \n 4 \n 17", "DAOVANG.OUT": "2", "Giải thích": "Với lực đập R=2, người chơi có thể đào 2 lần ở vị trí X1=4 và X2=18", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_NGHE_AN_PBC_2014_2025",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO NGHỆ AN",
    "title": "KỲ THI TUYỂN SINH VÀO LỚP 10 TRƯỜNG THPT CHUYÊN PHAN BỘI CHÂU NĂM HỌC 2014-2025",
    "subject": "Môn thi: TIN HỌC",
    "duration": "Thời gian: 150 phút, không kể thời gian giao đề",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"Tên bài": "SỐ ĐẶC BIỆT", "File chương trình": "SODB.*", "File dữ liệu vào": "SODB.INP", "File kết quả": "SODB.OUT", "Bộ nhớ tối đa": "1024MB", "Thời gian": "1 giây", "cite": ""},
        {"Tên bài": "GIẢI MÃ", "File chương trình": "GIAIMA.*", "File dữ liệu vào": "GIAIMA.INP", "File kết quả": "GIAIMA.OUT", "Bộ nhớ tối đa": "1024MB", "Thời gian": "1 giây", "cite": ""},
        {"Tên bài": "SỐ ĐẸP", "File chương trình": "SODEP.*", "File dữ liệu vào": "SODEP.INP", "File kết quả": "SODEP.OUT", "Bộ nhớ tối đa": "1024MB", "Thời gian": "1 giây", "cite": ""},
        {"Tên bài": "CỔ PHIẾU", "File chương trình": "COPHIEU.*", "File dữ liệu vào": "COPHIEU.INP", "File kết quả": "COPHIEU.OUT", "Bộ nhớ tối đa": "1024MB", "Thời gian": "1 giây", "cite": ""}
      ],
      "note": "Phần mở rộng .* được thay thế bằng Pas/Cpp/Py ứng với các ngôn ngữ lập trình Pascal/C++/ Python."
    },
    "questions": [
      {
        "name": "Câu 1 (6.0 điểm). SỐ ĐẶC BIỆT",
        "context": "Thầy giáo đưa ra quy ước “Số đặc biệt” là số nguyên dương có đúng 4 ước số dương. Ví dụ: 8 có 4 ước số dương gồm 1, 2, 4, 8 nên 8 được gọi là số đặc biệt; 25 có 3 ước số dương gồm 1, 5, 25 nên 25 không phải là số đặc biệt. Thầy giáo cho mỗi bạn hai số nguyên dương L, R (L < R <= 10^6).",
        "requirement": "Yêu cầu: Hãy lập trình giúp các bạn đếm số lượng các số đặc biệt trong đoạn [L; R].",
        "input": "Dữ liệu vào: Từ tệp văn bản SODB.INP gồm: \n - Dòng thứ nhất ghi số nguyên dương T (T <= 10^6) là số lượng cặp số nguyên dương L, R. \n - T dòng tiếp theo mỗi dòng ghi hai số nguyên dương L, R.",
        "output": "Kết quả: Ghi ra tệp văn bản SODB.OUT gồm T dòng, mỗi dòng ghi số lượng các số đặc biệt trong đoạn [L; R] tương ứng.",
        "constraints": "Giới hạn: \n - 60% số test ứng với T <= 10^2, R <= 10^3; \n - 30% số test ứng với 10^2 < T <= 10^3, R <= 10^5; \n - 10% số test ứng với 10^3 < T <= 10^6, R <= 10^6.",
        "examples": [
          {"SODB.INP": "3 \n 6 9 \n 10 15 \n 20 33", "SODB.OUT": "2 \n 3 \n 5", "Giải thích": "Từ 6 đến 9 có 2 số đặc biệt là: 6 và 8. Từ 10 đến 15 có 3 số đặc biệt là: 10, 14, 15. Từ 20 đến 33 có 5 số đặc biệt là: 21, 22, 26, 27, 33.", "cite": ""}
        ]
      },
      {
        "name": "Câu 2 (5.0 điểm). GIẢI MÃ",
        "context": "Để tìm ra kho báu các bạn cần phải có mật mã là một dãy S gồm các chữ cái in thường. Mật mã này đã được mã hóa thành dãy T theo quy tắc sau: Chọn trước 1 ký tự ch và tiến hành loại bỏ tất cả các ký tự ch trong dãy S thu được dãy mới là K. Nối dãy K vào sau dãy S thu được dãy T.",
        "requirement": "Yêu cầu: Tìm dãy S từ dãy T và kí tự ch đã cho.",
        "input": "Dữ liệu vào: Từ tệp văn bản GIAIMA.INP gồm: \n - Dòng thứ nhất ghi dãy T có độ dài L (2 <= L <= 10^6) \n - Dòng thứ hai ghi một ký tự ch.",
        "output": "Kết quả: Ghi ra tệp văn bản GIAIMA.OUT gồm một dòng là dãy S nếu tìm được mật mã, ngược lại ghi -1 nếu không tìm được mật mã.",
        "constraints": "Giới hạn: \n - 60% số test ứng với 2 <= L <= 10^3 \n - 40% số test ứng với 10^3 < L <= 10^6.",
        "examples": [
          {"GIAIMA.INP": "abcab \n c", "GIAIMA.OUT": "abc", "cite": ""},
          {"GIAIMA.INP": "abcabcc \n b", "GIAIMA.OUT": "-1", "cite": ""}
        ]
      },
      {
        "name": "Câu 3 (5.0 điểm). SỐ ĐẸP",
        "context": "Bình quy ước “Số đẹp” là số không chứa chữ số 0 tận cùng. Cho hai số nguyên dương a, b (a < b). Đặt S = a x (a+1) x ... x b.",
        "requirement": "Yêu cầu: Hãy cho biết số lượng chữ số 0 tận cùng của S cần xóa để S trở thành một số đẹp. (Kết quả lấy dư cho 10^9+7).",
        "input": "Dữ liệu vào: Từ tệp văn bản SODEP.INP gồm hai dòng: \n - Dòng thứ nhất chứa số nguyên T (1 <= T <= 10^5) là số lượng cặp số nguyên. \n - T dòng tiếp theo, mỗi dòng ghi hai số nguyên dương a, b (a < b <= 10^16).",
        "output": "Kết quả: Ghi ra tệp văn bản SODEP.OUT gồm T dòng, mỗi dòng ghi số lượng chữ số 0 tận cùng của S tương ứng. Kết quả có thể rất lớn nên cần chia lấy dư cho 10^9+7 trước khi ghi ra tệp.",
        "constraints": "Giới hạn: \n - 40% số test: 1 <= T <= 10, a < b <= 18; \n - 30% số test: T = 1, a < b <= 10^5; \n - 20% số test: 1 < T <= 10^4, a < b <= 10^5; \n - 10% số test: 10^4 < T <= 10^5, a < b <= 10^16.",
        "examples": [
          {"SODEP.INP": "4 \n 1 6 \n 1 10 \n 2 4 \n 10 20", "SODEP.OUT": "1 \n 2 \n 0 \n 3", "Giải thích": "Tích 1x2x...x6=720, kết quả là 1. Tích 1x...x10=3628800, kết quả là 2. Tích 2x3x4=24, kết quả là 0. Tích 10x...x20=6704425728000, kết quả là 3.", "cite": ""}
        ]
      },
      {
        "name": "Câu 4 (4.0 điểm). CỔ PHIẾU",
        "context": "Thời gian theo dõi giá trị cổ phiếu trong n ngày. Ngày thứ i có giá trị cổ phiếu là ai (ai <= 10^5). Ngày thứ i được gọi là tăng trưởng nếu có giá trị cổ phiếu lớn hơn ngày thứ j ở trước đó (j < i và aj < ai). Đối với ngày thứ i, gọi j là ngày xa nhất ở phía trước và có giá trị cổ phiếu thấp hơn ngày thứ i. Độ tăng trưởng của ngày thứ i được tính là số ngày đứng giữa ngày đó và ngày thứ j (có tính ngày thứ j).",
        "requirement": "Yêu cầu: Tính độ tăng trưởng của mỗi ngày trong các ngày Tuấn đang theo dõi.",
        "input": "Dữ liệu vào: Từ tệp văn bản COPHIEU.INP gồm: \n - Dòng thứ nhất ghi số nguyên dương n. \n - Dòng thứ hai ghi dãy số nguyên dương a1, a2, ..., an",
        "output": "Kết quả: Ghi ra tệp văn bản COPHIEU.OUT một dòng gồm n giá trị là độ tăng trưởng của các ngày theo dõi tương ứng.",
        "constraints": "Giới hạn: \n - 30% số test ứng với 0 < n <= 5*10^5; \n - 70% số test ứng với 5*10^5 < n <= 5*10^6.",
        "examples": [
          {"COPHIEU.INP": "6 \n 10 8 5 3 9 45", "COPHIEU.OUT": "0 0 0 0 3 5", "Giải thích": "Đối với ngày thứ 3: a3 = 5, không có ngày nào trước ngày đó có giá trị thấp hơn, nên độ tăng trưởng là 0.", "cite": ""},
          {"COPHIEU.INP": "7 \n 16 4 6 3 2 18 15", "COPHIEU.OUT": "0 0 1 0 0 5 5", "Giải thích": "Đối với ngày cuối cùng a7 = 15, ngày thứ j trước ngày đó xa nhất và có giá trị thấp hơn là ngày thứ 2, nên độ tăng trưởng là 5.", "cite": ""}
        ]
      }
    ]
  },

  {
    "id": "EXAM_VINH_PHUC_2025_2026",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO VĨNH PHÚC",
    "title": "KỲ THI TUYỂN SINH LỚP 10 THPT NĂM HỌC 2025-2026",
    "subject": "ĐỀ THI MÔN: TIN HỌC - CHUYÊN",
    "duration": "Thời gian làm bài: 150 phút (không kể thời gian phát đề)",
    "overview": {
      "title": "Tổng quan về đề thi",
      "table": [
        {"#": "1", "Tên bài": "Quà", "Chương trình": "GIFT.*", "Dữ liệu": "Bàn phím/stdin", "Kết quả": "Màn hình/stdout", "Giới hạn": "1s/test", "Điểm": "2.5", "cite": ""},
        {"#": "2", "Tên bài": "Tàu điện", "Chương trình": "METRO.*", "Dữ liệu": "Bàn phím/stdin", "Kết quả": "Màn hình/stdout", "Giới hạn": "1s/test", "Điểm": "2.5", "cite": ""},
        {"#": "3", "Tên bài": "Trò chơi", "Chương trình": "GAME.*", "Dữ liệu": "Bàn phím/stdin", "Kết quả": "Màn hình/stdout", "Giới hạn": "1s/test", "Điểm": "2.5", "cite": ""},
        {"#": "4", "Tên bài": "Chọn", "Chương trình": "SELECT.*", "Dữ liệu": "Bàn phím/stdin", "Kết quả": "Màn hình/stdout", "Giới hạn": "1s/test", "Điểm": "2.5", "cite": ""}
      ],
      "note": "Lưu ý: Thí sinh thay * trong tên chương trình thành PAS hoặc CPP tuỳ theo ngôn ngữ lập trình mà thí sinh sử dụng là Pascal hoặc C/C++."
    },
    "questions": [
      {
        "name": "Câu 1. Quà [GIFT]",
        "context": "Nhân dịp Tết thiếu nhi ngày 1-6, Công đoàn của công ty VHP sẽ tổ chức phát quà. Họ muốn phát k phần quà. Mỗi phần quà đều có một bó hoa, một hộp bút, một quyển vở. Hiện tại, Công đoàn đã chuẩn bị được: a bó hoa, b hộp bút, c quyển vở.",
        "requirement": "Yêu cầu: Tính số lượng tối thiểu các món đồ mà Công đoàn cần chuẩn bị thêm để đảm bảo có đủ k phần quà.",
        "input": "Dữ liệu (nhập từ bàn phím/thiết bị vào chuẩn): \n Một dòng gồm bốn số nguyên a, b, c, k (1 <= a, b, c, k <= 1000) tương ứng là số bó hoa, số hộp bút, số quyển vở, số phần quà.",
        "output": "Kết quả (ghi ra màn hình/thiết bị ra chuẩn): \n Một số nguyên duy nhất là số món đồ cần chuẩn bị thêm.",
        "examples": [
          {"Input": "2 3 5 4", "Output": "3", "Giải thích": "- Có 2 bó hoa, 3 hộp bút, 5 quyển vở nên chúng ta có 2 phần quà. \n - Chúng ta cần có thêm 2 bó hoa, 1 hộp bút nữa để tổng số là 4 phần quà. \n - Số món đồ cần chuẩn bị thêm là: 2 + 1 = 3.", "cite": ""}
        ]
      },
      {
        "name": "Câu 2. Tàu điện [METRO]",
        "context": "Gần nhà Bờm có một ga tàu điện. Tại ga này, hàng ngày, chuyến tàu điện đầu tiên sẽ dừng đón khách tại thời điểm T0, chuyến thứ hai dừng đón khách tại thời điểm T0 + D, chuyến thứ ba dừng tại thời điểm T0 + 2 x D,... Có N hành khách thường xuyên chờ tàu điện tại ga. Hành khách thứ i đến ga tàu tại thời điểm si và sẽ lên chuyến tàu đầu tiên đến ga ở thời điểm không sớm hơn si.",
        "requirement": "Yêu cầu: Cho T0, D và thời điểm các hành khách đến ga. Hãy xác định số hiệu chuyến tàu điện của từng hành khách sẽ lên, giả sử thời gian lên xuống xe của mỗi hành khách là không đáng kể.",
        "input": "Dữ liệu (nhập từ bàn phím/thiết bị vào chuẩn): \n - Dòng thứ nhất chứa ba số nguyên N, D, T0 (2 <= N <= 10^4; 1 <= D <= 10^4; 0 <= T0 <= 10^5); \n - Dòng thứ hai chứa N số nguyên s1, s2, ..., sN (0 <= si <= 10^6).",
        "output": "Kết quả (ghi ra màn hình/thiết bị ra chuẩn): \n Gồm một dòng chứa N số nguyên, số thứ i là số hiệu chuyến tàu điện mà hành khách thứ i sẽ lên.",
        "examples": [
          {"Input": "3 5 8 \n 0 15 23", "Output": "1 3 4", "Giải thích": "- Hành khách đầu tiên đón được chuyến tàu thứ 1 ở thời điểm 8. \n - Hành khách thứ 2 đón được chuyến tàu thứ 3 ở thời điểm 18. \n - Hành khách thứ 3 đón được chuyến tàu thứ 4 ở thời điểm 23.", "cite": ""}
        ]
      },
      {
        "name": "Câu 3. Trò chơi [GAME]",
        "context": "Nhân dịp Tết thiếu nhi ngày 1-6, Bờm và Cuội nhận được 2N đồ chơi, các đồ chơi có giá trị đôi một khác nhau, thuộc phạm vi từ 1 đến 2N. Đồ chơi của Bờm có giá trị a1, a2, a3, ..., aN, đồ chơi của Cuội có các giá trị còn lại. Hai bạn cùng rủ nhau chơi một trò chơi như sau: \n - Hai người lần lượt chọn một đồ chơi cho từng ván, mỗi người chỉ dùng mỗi đồ chơi đúng một lần. \n - Người có đồ chơi có giá trị lớn hơn thì thắng ván đó.",
        "requirement": "Yêu cầu: Hỏi trong trường hợp may mắn nhất, Bờm có thể thắng bao nhiêu ván?",
        "input": "Dữ liệu (nhập từ bàn phím/thiết bị vào chuẩn): \n - Dòng đầu tiên: Ghi một số nguyên N (1 <= N <= 50000); \n - N dòng tiếp theo: Mỗi dòng ghi 1 số nguyên ai (1 <= ai <= 2N), là giá trị các đồ chơi Bờm có.",
        "output": "Kết quả (ghi ra màn hình/thiết bị ra chuẩn): \n Một số nguyên duy nhất là số ván nhiều nhất mà Bờm có thể thắng.",
        "constraints": "Subtasks: \n - Subtask 1 (50% điểm): N <= 100; \n - Subtask 2 (50% điểm): N <= 50000.",
        "examples": [
          {"Input": "3 \n 1 \n 5 \n 4", "Output": "2", "Giải thích": "- Ván 1: Bờm chọn đồ chơi có giá trị 1, Cuội chọn đồ chơi có giá trị 6 (Cuội thắng). \n - Ván 2: Bờm chọn đồ chơi có giá trị 5, Cuội chọn đồ chơi có giá trị 2 (Bờm thắng). \n - Ván 3: Bờm chọn đồ chơi có giá trị 4, Cuội chọn đồ chơi có giá trị 3 (Bờm thắng).", "cite": ""}
        ]
      },
      {
        "name": "Câu 4. Chọn [SELECT]",
        "context": "Hai bạn Bờm và Cuội lại rủ nhau chơi trò chơi thứ hai như sau: Các bạn có n bảng số nguyên được đánh số từ 1 đến n, mỗi bảng mang một số nguyên dương là số điểm mà các bạn nhận được khi chọn bảng đó. Trò chơi được chia thành k lượt chơi (k = n/2 nếu n chẵn, k = (n+1)/2 nếu n lẻ). Tại lượt chơi thứ i, các bạn cần chọn ra i bảng số sao cho tổng điểm là lớn nhất và không được chọn đồng thời hai bảng số nào có số thứ tự liên tiếp nhau. Sau khi hoàn thành mỗi lượt chơi các bạn phải trả lại các bảng số đã chọn về vị trí cũ để phục vụ lượt chơi tiếp theo.",
        "requirement": "Yêu cầu: Hãy lập trình chương trình giải quyết bài toán trên.",
        "input": "Dữ liệu (nhập từ bàn phím/thiết bị vào chuẩn): \n - Dòng 1: Một số nguyên dương n (1 <= n <= 200000); \n - Dòng 2: Gồm n số nguyên dương a_i (1 <= a_i <= 10^9) là số điểm của mỗi bảng số.",
        "output": "Kết quả (ghi ra màn hình/thiết bị ra chuẩn): \n Gồm k dòng, dòng thứ i ghi ra điểm tối đa mà bạn Bờm và Cuội có thể đạt được tại lượt i.",
        "constraints": "Subtasks: \n - Subtask 1 (16% điểm): n <= 20; \n - Subtask 2 (16% điểm): n <= 2000; a_1 = a_2 = ... = a_n-1 = a_n; \n - Subtask 3 (18% điểm): n <= 2000; \n - Subtask 4 (50% điểm): Không có ràng buộc gì thêm.",
        "examples": [
          {"Input": "5 \n 1 6 4 9 8", "Output": "9 \n 15 \n 13", "Giải thích": "- Lượt 1 chọn vị trí: 4. \n - Lượt 2 chọn vị trí: 2 và 4. \n - Lượt 3 chọn vị trí: 1, 3 và 5.", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_DHSP_HN_2024",
    "province": "BỘ GIÁO DỤC VÀ ĐÀO TẠO - TRƯỜNG ĐẠI HỌC SƯ PHẠM HÀ NỘI",
    "title": "KỲ THI TUYỂN SINH LỚP 10 TRƯỜNG THPT CHUYÊN ĐẠI HỌC SƯ PHẠM NĂM 2024",
    "subject": "MÔN THI: TIN HỌC (Dùng riêng cho thí sinh thi vào lớp chuyên Tin học)",
    "duration": "Thời gian làm bài: 120 phút (không kể thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"STT": "1", "Tên bài": "Tổng lớn nhất", "Tên file bài làm": "CAU1.*", "Giới hạn mỗi test": "1 giây/1 GB", "Điểm": "3.0", "cite": ""},
        {"STT": "2", "Tên bài": "Máy quét số", "Tên file bài làm": "CAU2.*", "Giới hạn mỗi test": "1 giây/1 GB", "Điểm": "2.5", "cite": ""},
        {"STT": "3", "Tên bài": "Trò chơi", "Tên file bài làm": "CAU3.*", "Giới hạn mỗi test": "1 giây/1 GB", "Điểm": "2.5", "cite": ""},
        {"STT": "4", "Tên bài": "Tìm số", "Tên file bài làm": "CAU4.*", "Giới hạn mỗi test": "1 giây/1 GB", "Điểm": "2.0", "cite": ""}
      ],
      "note": "Dấu * được thay bằng cpp, c, pas, py tùy theo ngôn ngữ lập trình được sử dụng. Chương trình sử dụng cơ chế nhập/xuất dữ liệu từ thiết bị nhập chuẩn và thiết bị xuất chuẩn."
    },
    "questions": [
      {
        "name": "Câu 1. TỔNG LỚN NHẤT (3.0 điểm)",
        "context": "Cho một số nguyên dương n (n >= 3). Tìm số nguyên dương m (1 <= m < n-1) để tổng GCD(m, n) + m đạt giá trị lớn nhất. Với GCD(m, n) là ước chung lớn nhất của 2 số m và n.",
        "requirement": "Yêu cầu: Tìm m lớn nhất thỏa mãn. Nếu có nhiều số m thỏa mãn thì đưa ra số m lớn nhất.",
        "input": "Dữ liệu: Vào từ thiết bị nhập chuẩn gồm số nguyên dương n (n <= 10^14).",
        "output": "Kết quả: Ghi ra thiết bị xuất chuẩn gồm số nguyên dương m tìm được.",
        "constraints": "Giới hạn: \n - 60% số test ứng với n <= 10^4 \n - 40% số test còn lại ứng với n <= 10^14.",
        "examples": [
          {"Input": "15", "Output": "12", "cite": ""}
        ]
      },
      {
        "name": "Câu 2. MÁY QUÉT SỐ (2.5 điểm)",
        "context": "Hệ thống máy quét để nhận dạng các số của một ngân hàng bị hacker xâm nhập và không thể nhận dạng được một số chữ số (gọi là chữ số bị hỏng). Máy quét sẽ không nhận dạng được các số có chứa ít nhất một chữ số bị hỏng. Ví dụ: Có 3 chữ số bị hỏng: 0, 1, 3 thì máy quét sẽ không nhận dạng được các số: 1, 3, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 30,...",
        "requirement": "Yêu cầu: Biết các chữ số bị hỏng và một số nguyên dương n cho trước, hãy tìm số lượng số nguyên dương không vượt quá n mà máy quét vẫn nhận dạng được.",
        "input": "Dữ liệu: Vào từ thiết bị nhập chuẩn gồm: \n - Dòng 1: gồm một số nguyên dương n (n <= 10^7). \n - Dòng 2: gồm một xâu kí tự là các chữ số bị hỏng (độ dài xâu không vượt quá 10, viết liên tiếp không có dấu cách).",
        "output": "Kết quả: Ghi ra thiết bị xuất chuẩn một số nguyên duy nhất là số lượng các số nguyên dương không vượt quá n mà máy quét có thể nhận dạng được.",
        "constraints": "Giới hạn: \n - 20% số test ứng với n <= 10 \n - 30% số test khác ứng với n <= 10^5 \n - 50% số test còn lại ứng với các test không có ràng buộc gì thêm.",
        "examples": [
          {"Input": "30 \n 310", "Output": "14", "Giải thích": "Từ 1 tới 30 có 30 số nguyên dương. Có 3 chữ số bị hỏng là: 3, 1, 0 (hay chính là: 0, 1, 3). Các số không nhận dạng được là: 1, 3, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 30 (16 số). Còn lại: 30 - 16 = 14 số máy quét có thể nhận dạng được.", "cite": ""},
          {"Input": "100000 \n 01256789", "Output": "62", "cite": ""}
        ]
      },
      {
        "name": "Câu 3. TRÒ CHƠI (2.5 điểm)",
        "context": "Trên bảng, có vẽ sẵn một hình chữ nhật kích thước 1 x n được chia thành n ô vuông đơn vị. Mỗi ô vuông có ghi một số nguyên dương. Cô đưa ra một số nguyên m và yêu cầu các bạn học sinh trong lớp tìm cách tạo ra một khung hình chữ nhật kích thước 1 x k đặt lên bảng sao cho khi trượt lần lượt khung hình chữ nhật này từ trái qua phải, tổng các số trong dãy số lọt vào khung hình không được nhỏ hơn giá trị m đã cho.",
        "requirement": "Yêu cầu: Tìm ra độ dài k nhỏ nhất thỏa mãn các yêu cầu của cô giáo.",
        "input": "Dữ liệu: Vào từ thiết bị nhập chuẩn gồm: \n - Dòng đầu tiên chứa hai số nguyên n, m (1 <= n <= 10^6, 1 <= m <= 10^9). \n - Dòng tiếp theo chứa lần lượt các số a1, a2,..., an (1 <= a_i <= 10^9) lần lượt là các số được viết trên các ô vuông. Dữ liệu vào đảm bảo tổng của cả dãy không nhỏ hơn m.",
        "output": "Kết quả: Ghi ra thiết bị xuất chuẩn gồm một số nguyên duy nhất là độ dài nhỏ nhất của khung hình.",
        "constraints": "Giới hạn: \n - 50% số test có n <= 5000. \n - 50% số test còn lại có n <= 10^6.",
        "examples": [
          {"Input": "6 10 \n 3 5 6 4 5 1", "Output": "3", "Giải thích": "Các đoạn số nằm trọn trong khung hình 1x3 khi trượt từ trái qua phải là: \n Lần 1: 3 5 6. Tổng: 14. \n Lần 2: 5 6 4. Tổng: 15. \n Lần 3: 6 4 5. Tổng: 15. \n Lần 4: 4 5 1. Tổng: 10.", "cite": ""}
        ]
      },
      {
        "name": "Câu 4. TÌM SỐ (2.0 điểm)",
        "context": "Cho số tự nhiên a, hãy tìm số tự nhiên x thỏa mãn hai điều kiện: \n - x <= a \n - Biểu diễn thập phân của x gồm các chữ số theo thứ tự tăng nghiêm ngặt từ trái qua phải (từ hàng cao nhất tới hàng đơn vị). Nếu biểu diễn thập phân của x chỉ có một chữ số thì x cũng được coi là thỏa mãn điều kiện này.",
        "requirement": "Yêu cầu: Tìm số x thỏa mãn các điều kiện trên (Lưu ý: theo ví dụ thì cần tìm số x lớn nhất thỏa mãn).",
        "input": "Dữ liệu: Vào từ thiết bị nhập chuẩn gồm: \n - Dòng 1: Chứa số nguyên dương T < 10^6 là số test. \n - T dòng tiếp theo, mỗi dòng chứa một số tự nhiên a ứng với một test (0 <= a <= 10^9).",
        "output": "Kết quả: Ghi ra thiết bị xuất chuẩn T dòng, mỗi dòng ghi kết quả là số x tìm được với test tương ứng.",
        "constraints": "Giới hạn: \n - Có 40% số test ứng với T <= 10 và a <= 10^6 \n - Có 30% số test khác ứng với a <= 10^6 \n - Có 20% số test khác ứng với T <= 100 \n - Có 10% số test còn lại không có ràng buộc gì thêm.",
        "examples": [
          {"Input": "8 \n 11 \n 1000 \n 5678 \n 3498 \n 135246 \n 345341 \n 123456788", "Output": "9 \n 789 \n 5678 \n 3489 \n 134789 \n 256789 \n 23456789", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_DHSP_HN_2025_THAM_KHAO",
    "province": "BỘ GIÁO DỤC VÀ ĐÀO TẠO - TRƯỜNG ĐẠI HỌC SƯ PHẠM HÀ NỘI",
    "title": "KỲ THI TUYỂN SINH LỚP 10 TRƯỜNG THPT CHUYÊN ĐẠI HỌC SƯ PHẠM NĂM 2025 (ĐỀ THI THAM KHẢO)",
    "subject": "MÔN: TIN HỌC (Dùng riêng cho thí sinh thi vào lớp chuyên Tin học)",
    "duration": "Thời gian làm bài: 150 phút (không kể thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN ĐỀ THI",
      "table": [
        {"STT": "1", "Tên bài": "Số chính phương", "Tên file bài làm": "BAI1.*", "Giới hạn mỗi test": "1 giây/1 GB", "Điểm": "3.0", "cite": ""},
        {"STT": "2", "Tên bài": "Hội thao", "Tên file bài làm": "BAI2.*", "Giới hạn mỗi test": "1 giây/1 GB", "Điểm": "2.5", "cite": ""},
        {"STT": "3", "Tên bài": "Robot", "Tên file bài làm": "BAI3.*", "Giới hạn mỗi test": "1 giây/1 GB", "Điểm": "2.5", "cite": ""},
        {"STT": "4", "Tên bài": "Tinh thể", "Tên file bài làm": "BAI4.*", "Giới hạn mỗi test": "1 giây/1 GB", "Điểm": "2.0", "cite": ""}
      ],
      "note": "Dấu * được thay bằng cpp, c, pas, py tùy theo ngôn ngữ lập trình được sử dụng."
    },
    "questions": [
      {
        "name": "Bài 1 (3.0 điểm). SỐ CHÍNH PHƯƠNG (BAI1.*)",
        "context": "Số chính phương là số tự nhiên có căn bậc hai là một số tự nhiên. Ví dụ 1, 4, 9,... là các số chính phương.",
        "requirement": "Yêu cầu: Đếm các cặp nguyên dương (i, j) thỏa mãn điều kiện: 1 <= i < j <= n và i x j là số chính phương. (Theo diễn giải trong ví dụ: điều kiện trong giải thích cho thấy i, j có thể được duyệt như 1 cặp không xét thứ tự trước sau nghiêm ngặt).",
        "input": "Dữ liệu: Vào từ thiết bị nhập chuẩn ghi duy nhất số nguyên dương n (n <= 10^5).",
        "output": "Kết quả: Ghi ra thiết bị xuất chuẩn một số nguyên duy nhất là số cặp (i, j) tìm được.",
        "constraints": "Giới hạn: \n - 60% số điểm ứng với các test có 1 <= n <= 5000 \n - 40% số điểm còn lại không có ràng buộc bổ sung",
        "examples": [
          {"Input": "4", "Output": "6", "Giải thích": "Có 6 cặp thỏa mãn là: (1,1); (1,4); (2,2); (3,3); (4,1); (4,4).", "cite": ""}
        ]
      },
      {
        "name": "Bài 2 (2.5 điểm). HỘI THAO (BAI2.*)",
        "context": "Một trong những nội dung đặc biệt là đua xe đạp đôi, trong đó hai vận động viên cùng ngồi trên một chiếc xe đạp. Ban tổ chức có danh sách n vận động viên, được đánh số từ 1 đến n, với trọng lượng lần lượt là a1, a2, ..., an kg. Mỗi chiếc xe đạp có trọng tải tối đa là p kg, nên cần chọn ra hai vận động viên có tổng trọng lượng không vượt quá p để tham gia.",
        "requirement": "Yêu cầu: Bạn hãy giúp Ban tổ chức đếm số cách chọn hai vận động viên để làm mẫu.",
        "input": "Dữ liệu: Vào từ thiết bị nhập chuẩn \n - Dòng đầu tiên chứa 2 số nguyên n và p (2 <= n <= 2*10^5; p <= 10^9) - số lượng vận động viên và trọng tải của xe đạp. \n - Dòng thứ hai chứa n số nguyên a1, a2, ..., an (1 <= a_i <= 10^9) - tương ứng là trọng lượng của n vận động viên.",
        "output": "Kết quả: Ghi ra thiết bị xuất chuẩn một số nguyên là số cách chọn một cặp vận động viên để làm mẫu.",
        "constraints": "Giới hạn: \n - 60% số điểm ứng với các test có n <= 1000. \n - 40% số điểm còn lại không có ràng buộc bổ sung.",
        "examples": [
          {"Input": "5 9 \n 4 8 4 1 10", "Output": "4", "cite": ""}
        ]
      },
      {
        "name": "Bài 3 (2.5 điểm). ROBOT (BAI3.*)",
        "context": "Robot Alpha sẽ được cung cấp chuỗi dữ liệu hỗn loạn và cần phải tái tạo lại một chuỗi mục tiêu đã được mã hóa. Alpha không thể tự do nhập ký tự mà phải tuân theo quy tắc: \n - Di chuyển liền kề: Alpha có thể di chuyển đến ký tự kề bên trái hoặc kề bên phải trong chuỗi hiện tại và sao chép ký tự đó vào kết quả. \n - Di chuyển bằng kết nối dữ liệu: Alpha có thể dịch chuyển đến bất kỳ vị trí nào trong chuỗi có cùng ký tự với vị trí hiện tại mà không cần sao chép ký tự vào kết quả. Việc di chuyển tốn |x-y| giây, trong đó x và y là vị trí của ký tự ban đầu và ký tự mới.",
        "requirement": "Yêu cầu: Alpha phải tạo ra chuỗi mã hóa mục tiêu trong thời gian ngắn nhất.",
        "input": "Dữ liệu: Vào từ thiết bị nhập chuẩn \n - Dòng đầu tiên chứa một số nguyên n, m (1 <= n, m <= 3000). \n - Dòng thứ hai chứa n kí tự in thường, là chuỗi dữ liệu hỗn loạn ban đầu. \n - Dòng thứ ba chứa chuỗi mục tiêu được mã hóa.",
        "output": "Kết quả: Ghi ra thiết bị xuất chuẩn in ra thời gian ngắn nhất. Nếu không tạo được chuỗi mục tiêu thì in ra -1.",
        "constraints": "Giới hạn: \n - 50% số điểm ứng với các test có 1 <= n, m <= 300. \n - 50% số điểm còn lại không có ràng buộc bổ sung.",
        "examples": [
          {"Input": "2 2 \n W a \n a c", "Output": "-1", "cite": ""},
          {"Input": "10 5 \n D o o f e n f e r b \n f e r e n", "Output": "7", "Giải thích": "Alpha xuất phát từ vị trí thứ 7 và sao chép kí tự 'f'. Sau đó di chuyển sang phải hai lần, sao chép 'e', 'r'. Tiếp theo di chuyển sang trái một lần, sao chép 'e'. Bằng cách hai, Alpha di chuyển đến vị trí thứ 5 (ký tự 'e'). Cuối cùng di chuyển sang phải một lần, sao chép 'n'. Tổng cộng mất 7 giây.", "cite": ""}
        ]
      },
      {
        "name": "Bài 4 (2 điểm). TINH THỂ (BAI4.*)",
        "context": "Trên hành tinh có n điểm thu thập tinh thể được đánh số từ 1 đến n. Mỗi điểm thu thập chứa một tinh thể có giá trị năng lượng ai. Nếu ai dương, bạn nhận thêm năng lượng. Nếu ai âm, bạn bị tiêu hao năng lượng. Bạn có thể chọn thu thập hoặc bỏ qua từng tinh thể, nhưng tổng năng lượng của bạn không bao giờ được phép âm.",
        "requirement": "Yêu cầu: Mục tiêu của bạn là thu thập nhiều tinh thể nhất có thể khi di chuyển từ điểm đầu tiên đến điểm cuối cùng.",
        "input": "Dữ liệu: Vào từ thiết bị nhập chuẩn \n - Dòng đầu tiên chứa một số nguyên n (1 <= n <= 2*10^5) – số điểm thu thập tinh thể. \n - Dòng thứ hai chứa n số nguyên ai (-10^9 <= a_i <= 10^9) – giá trị năng lượng của từng tinh thể.",
        "output": "Kết quả: Ghi ra thiết bị xuất chuẩn một số nguyên duy nhất – số lượng tinh thể tối đa.",
        "constraints": "Giới hạn: \n - 50% số điểm ứng với các test có 1 <= n <= 2000. \n - 50% số điểm còn lại không có ràng buộc bổ sung.",
        "examples": [
          {"Input": "6 \n 4 -4 1 -3 1 -3", "Output": "5", "Giải thích": "Bạn có thể thu thập 5 tinh thể: 1, 3, 4, 5, 6", "cite": ""}
        ]
      }
    ]
  },

  {
    "id": "EXAM_TIEN_GIANG_2022_2023",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO TỈNH TIỀN GIANG",
    "title": "KỲ THI TUYỂN SINH LỚP 10 TRUNG HỌC PHỔ THÔNG NĂM HỌC 2022-2023",
    "subject": "Môn thi: TIN HỌC (Lập trình)",
    "duration": "Thời gian làm bài: 150 phút (không kể thời gian phát đề)",
    "overview": {
      "title": "TỔNG QUAN CÁC BÀI THI",
      "table": [
        {"Tên bài": "Bài 1 Cấp số cộng", "File chương trình": "aripro.*", "File dữ liệu vào": "Aripro.inp", "File kết quả": "Aripro.out", "cite": ""},
        {"Tên bài": "Bài 2 Trà sữa Bmilk", "File chương trình": "bmilk.*", "File dữ liệu vào": "Bmilk.inp", "File kết quả": "Bmilk.out", "cite": ""},
        {"Tên bài": "Bài 3 Bài tập về nhà", "File chương trình": "homework.*", "File dữ liệu vào": "Homework.inp", "File kết quả": "Homework.out", "cite": ""},
        {"Tên bài": "Bài 4 Tìm xâu Palindrome", "File chương trình": "palin.*", "File dữ liệu vào": "Palin.inp", "File kết quả": "Palin.out", "cite": ""},
        {"Tên bài": "Bài 5 Lối đi quanh công viên", "File chương trình": "park.*", "File dữ liệu vào": "Park.inp", "File kết quả": "Park.out", "cite": ""}
      ],
      "note": "Dấu * được thay thế bởi PAS, CPP, PY của ngôn ngữ lập trình được sử dụng tương ứng là Pascal, C++ hoặc Python."
    },
    "questions": [
      {
        "name": "Bài 1. Cấp số cộng - Aripro (2,0 điểm)",
        "context": "Cấp số cộng là một dãy số có qui luật, trong đó kể từ số hạng thứ 2 thì mỗi số hạng đều bằng tổng của số hạng đứng liền trước và công sai d không đổi. Giả sử cấp số cộng khởi đầu là số hạng a1 và công sai là d, thì số hạng thứ n của cấp số cộng được tính theo công thức: a_n = a1 + (n-1)xd. Tổng của n số hạng đầu tiên được xác định bằng công thức: S_n = n x [2xa1 + (n-1)xd] / 2.",
        "requirement": "Yêu cầu: Tìm số hạng thứ n và tổng của n số hạng đầu của cấp số cộng.",
        "input": "Dữ liệu vào: Đọc từ file văn bản Aripro.inp gồm 2 dòng: \n - Dòng thứ nhất chứa số nguyên dương n (1 <= n <= 10^6). \n - Dòng thứ hai chứa 2 số nguyên a1 và a2 (|a1| <= 10^3, |a2| <= 10^4), giữa hai số là một dấu cách.",
        "output": "Kết quả: Ghi ra file văn bản Aripro.out chứa \n - Dòng thứ nhất: số hạng thứ n của cấp số cộng. \n - Dòng thứ hai: tổng của n số hạng đầu của cấp số cộng.",
        "constraints": "Ràng buộc: 1 <= n <= 10^6; |a1| <= 10^3; |a2| <= 10^4.",
        "examples": [
          {"Aripro.inp": "5 \n 5 8", "Aripro.out": "17 \n 55", "Giải thích": "Công sai d = 8-5=3; a1=5; a2=8; a3=11; a4=14; a5=17; => S5 = 55", "cite": ""}
        ]
      },
      {
        "name": "Bài 2. Trà sữa Bmilk - Bmilk (2,0 điểm)",
        "context": "Chia khách hàng thành nhiều nhóm, mỗi nhóm có k người khách. Nhóm 1: từ khách hàng thứ nhất đến khách hàng thứ k. Nhóm 2: từ khách hàng thứ k+1 đến khách hàng thứ 2xk... Nhóm cuối cùng có thể không có đủ k người khách. Nếu doanh thu của mỗi nhóm khách hàng lớn hơn hay bằng giá trị p thì Bình sẽ được cha cho 20.000đ để bỏ vào ống heo.",
        "requirement": "Yêu cầu: Ban đầu, trong ống heo của Bình không có tiền. Hãy cho biết tổng số tiền trong ống heo của Bình sau khi phục vụ xong các khách hàng của ngày hôm nay.",
        "input": "Dữ liệu vào: Đọc từ file văn bản Bmilk.inp như sau: \n - Dòng đầu tiên chứa số nguyên dương n, k, p (với n là số lượng khách đến quán của ngày hôm nay; 1 <= n <= 10^6; 1 <= k <= n; 0 < p <= 10^12). \n - n dòng tiếp theo chứa n số nguyên dương a1, a2,..., an (với ai là số tiền mua trà sữa của khách hàng thứ i, 0 < ai <= 10^9), mỗi số trên một dòng.",
        "output": "Kết quả: Ghi ra file văn bản Bmilk.out duy nhất một số nguyên không âm là tổng số tiền trong ống heo của Bình sau khi phục vụ xong các khách hàng.",
        "constraints": "Ràng buộc: 1 <= n <= 10^6; 1 <= k <= n; 0 < p <= 10^12; 0 < ai <= 10^9: mọi 1 <= i <= n.",
        "examples": [
          {"Bmilk.inp": "5 2 80000 \n 48000 \n 44000 \n 60000 \n 15000 \n 34000", "Bmilk.out": "20000", "cite": ""},
          {"Bmilk.inp": "4 1 1000 \n 250 \n 568 \n 900 \n 999", "Bmilk.out": "0", "cite": ""}
        ]
      },
      {
        "name": "Bài 3. Bài tập về nhà – Homework (2,0 điểm)",
        "context": "Số chính phương là số tự nhiên có căn bậc hai là một số tự nhiên, hay nói cách khác, số chính phương bằng bình phương (lũy thừa bậc 2) của một số nguyên. Số nguyên tố là số tự nhiên chỉ có 2 ước số, gồm 1 và chính nó.",
        "requirement": "Yêu cầu: Bài tập về nhà Thầy cho dãy số A có n phần tử a1, a2,..., an và hỏi có bao nhiêu số có đúng 3 ước số dương trong dãy số A.",
        "input": "Dữ liệu vào: Đọc từ file văn bản Homework.inp gồm hai dòng: \n - Dòng 1: Chứa duy nhất số nguyên dương n (1 <= n <= 10^4). \n - Dòng 2: Gồm n số nguyên dương ai (0 < ai <= 10^9), giữa các số cách nhau bởi một dấu cách.",
        "output": "Kết quả: Ghi ra file văn bản Homework.out gồm duy nhất số nguyên dương là số lượng số có đúng 3 ước số dương. Nếu không có số nào thỏa mãn thì ghi 0.",
        "constraints": "Ràng buộc: 1 <= n <= 10^4; 0 < ai <= 10^9: mọi 1 <= i <= n.",
        "examples": [
          {"Homework.inp": "4 \n 9 8 8 1", "Homework.out": "1", "Giải thích": "n=4, chỉ có phần tử a2=9: có 3 ước số là 1, 3, 9.", "cite": "[cite: 2345]"},
          {"Homework.inp": "3 \n 10 7 100", "Homework.out": "0", "cite": "[cite: 2345]"}
        ]
      },
      {
        "name": "Bài 4. Tìm xâu Palindrome - Palin (2,0 điểm)",
        "context": "Xâu palindrome (xâu đối xứng) là xâu khi viết từ phải sang trái hay từ trái sang phải thì xâu đó không thay đổi. Ví dụ: madam, ioi...",
        "requirement": "Yêu cầu: Cho một xâu st độ dài không quá 10^5 kí tự, các kí tự được lấy từ tập 'a'..'z'; hãy đưa ra xâu con palindrome thứ i của st có độ dài bằng k (thứ tự i được tính tăng dần từ trái qua phải).",
        "input": "Dữ liệu vào: Đọc từ file văn bản Palin.inp có cấu trúc như sau: \n - Dòng 1 chứa xâu st có độ dài không quá 10^5 kí tự. \n - Dòng 2 chứa 2 số nguyên dương k và i (0 < k <= độ dài xâu st; 1 <= i <= 10^6).",
        "output": "Kết quả: Ghi ra file văn bản Palin.out chứa duy nhất xâu con palindrome thứ i của st có độ dài bằng k. Nếu không tồn tại thì in ra ***",
        "constraints": "Ràng buộc: Độ dài xâu st không quá 10^5 kí tự. 0 < k <= độ dài xâu st; 1 <= i <= 10^6.",
        "examples": [
          {"Palin.inp": "abcdcpc \n 3 2", "Palin.out": "cpc", "Giải thích": "Có 2 xâu con palindrome có độ dài là 3, xâu thứ 1 (cdc), xâu thứ 2 (cpc).", "cite": ""},
          {"Palin.inp": "xinchao \n 2 1", "Palin.out": "***", "Giải thích": "Không có xâu con nào có độ dài 2 và là xâu palindrome.", "cite": ""}
        ]
      },
      {
        "name": "Bài 5. Lối đi quanh công viên – Park (2,0 điểm)",
        "context": "Công viên có dạng là một hình chữ nhật có chiều dài là x (m) và chiều rộng là y (m). Công viên chỉ có duy nhất một vườn trồng hoa dạng hình chữ nhật được đặt ở trung tâm và các lối đi bao bọc xung quanh. Vườn trồng hoa có diện tích là a (m2).",
        "requirement": "Yêu cầu: Dựa vào các số liệu x, y và a hãy tìm độ rộng z lớn nhất của lối đi và kích thước của vườn trồng hoa.",
        "input": "Dữ liệu vào: Đọc từ file văn bản Park.inp gồm 1 dòng chứa 3 số nguyên dương theo thứ tự x, y và a (sao cho 0 < z; 0 < y <= x <= 10^5; 0 < a < y x x). Đảm bảo luôn tồn tại một công viên theo mô hình như thế.",
        "output": "Kết quả: Ghi ra file văn bản Park.out như sau: \n - Dòng đầu tiên ghi một số nguyên là độ rộng z lớn nhất của lối đi xung quanh. \n - Dòng thứ hai ghi chiều dài và chiều rộng của vườn trồng hoa, giữa hai số là một dấu cách.",
        "constraints": "Ràng buộc: 0 < z; 0 < y <= x <= 10^5; 0 < a < y x x.",
        "examples": [
          {"Park.inp": "60 50 1200", "Park.out": "10 \n 40 30", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_DA_NANG_2025_2026",
    "province": "SỞ GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ ĐÀ NẴNG",
    "title": "KỲ THI TUYỂN SINH LỚP 10 TRUNG HỌC PHỔ THÔNG NĂM HỌC 2025-2026 (Dành cho thí sinh thi vào Trường THPT chuyên Lê Quý Đôn)",
    "subject": "Môn thi: TIN HỌC (chuyên)",
    "duration": "Thời gian: 150 phút (không kể thời gian giao đề)",
    "overview": {
      "title": "TỔNG QUAN ĐỀ THI",
      "table": [
        {"Bài": "1", "Tên bài": "Lọc tín hiệu", "File chương trình": "TINHIEU.*", "Dữ liệu vào": "TINHIEU.INP", "Kết quả": "TINHIEU.OUT", "Điểm": "2,5", "cite": ""},
        {"Bài": "2", "Tên bài": "Mã hóa", "File chương trình": "MAHOA.*", "Dữ liệu vào": "MAHOA.INP", "Kết quả": "MAHOA.OUT", "Điểm": "2.5", "cite": ""},
        {"Bài": "3", "Tên bài": "Năng lượng", "File chương trình": "NHIETDO.*", "Dữ liệu vào": "NHIETDO.INP", "Kết quả": "NHIETDO.OUT", "Điểm": "2.5", "cite": ""},
        {"Bài": "4", "Tên bài": "Lựa chọn cấu hình", "File chương trình": "CAUHINH.*", "Dữ liệu vào": "CAUHINH.INP", "Kết quả": "CAUHINH.OUT", "Điểm": "2,5", "cite": ""}
      ],
      "note": "(Phần mở rộng * là PAS, PY hoặc CPP tùy theo ngôn ngữ và môi trường lập trình)"
    },
    "questions": [
      {
        "name": "Bài 1. Lọc tín hiệu",
        "context": "Mỗi tín hiệu cảm biến là một số nguyên dương. Chuỗi tín hiệu ban đầu là một dãy số nguyên có n số. Hệ thống sẽ lọc nhiễu tín hiệu trên chuỗi đó theo quy trình sau: \n Bước 1. Từ trái sang phải, nếu phát hiện 3 tín hiệu liên tiếp giống nhau, hệ thống xóa bộ ba này khỏi dãy và đánh lại chỉ số từ đầu, rồi chuyển sang bước 2. \n Bước 2. Từ phải sang trái, nếu phát hiện 3 tín hiệu liên tiếp giống nhau, hệ thống xóa bộ ba này khỏi dãy và đánh lại chỉ số từ đầu, rồi chuyển về bước 1. \n Quy trình này lặp lại cho đến khi không còn bộ ba nào giống nhau liên tiếp.",
        "requirement": "Yêu cầu: Viết chương trình mô phỏng quy trình lọc nhiễu tín hiệu và ghi ra kết quả.",
        "input": "Dữ liệu vào: Đọc từ file TINHIEU.INP gồm: \n - Dòng thứ nhất chứa số nguyên dương n (3 <= n <= 3.10^5) \n - Dòng thứ hai chứa n số nguyên dương Ai (1 <= Ai <= 10^4).",
        "output": "Kết quả: Ghi ra file văn bản TINHIEU.OUT dãy số nguyên dương A sau khi xóa.",
        "examples": [
          {"TINHIEU.INP": "14 \n 1 1 3 3 3 1 1 2 1 1 2 2 2 1", "TINHIEU.OUT": "1 2", "cite": ""}
        ]
      },
      {
        "name": "Bài 2. Mã hóa",
        "context": "Dữ liệu là xâu ký tự X gồm các chữ cái in thường tự 'a' đến 'z', độ dài xâu X không quá 10^6. Lần lượt thực hiện mã hóa: \n - Ban đầu xâu Y rỗng. \n - Đưa ra một ký tự xâu X vào cuối xâu Y và đảo ngược xâu Y. Các ký tự của xâu X đưa ra lần lượt vào xâu Y như vậy.",
        "requirement": "Yêu cầu: In ra xâu Y cuối cùng nhận được khi đã đưa ra hết ký tự của X vào.",
        "input": "Dữ liệu vào: Đọc từ file MAHOA.INP gồm một dòng duy nhất chứa xâu X.",
        "output": "Kết quả: Ghi ra file MAHOA.OUT xâu Y tìm được.",
        "constraints": "Ràng buộc: Có 55% số test độ dài xâu X không quá 255; 20% số test độ dài xâu X không quá 10^4; 25% số test độ dài xâu X không quá 10^6.",
        "examples": [
          {"MAHOA.INP": "agh", "MAHOA.OUT": "hag", "Giải thích": "Bước 1: đưa 'a' và đảo ngược Y được Y='a'. Bước 2: đưa 'g' và đảo ngược Y được Y='ga'. Bước 3: đưa 'h' và đảo ngược Y được Y='hag'", "cite": ""}
        ]
      },
      {
        "name": "Bài 3. Năng lượng",
        "context": "Khi hệ thống được cung cấp 3 mức nhiệt độ khác nhau theo thứ tự lần lượt là x, y và z thì sẽ tạo ra Q đơn vị điện năng theo công thức Q = xy - y^2 - xz + yz. Theo khảo sát có n thời điểm thay đổi nhiệt độ khác nhau trong ngày.",
        "requirement": "Yêu cầu: Cho dãy số nguyên a1, a2, ..., an là nhiệt độ tại n thời điểm theo thứ tự thời gian trong một ngày. Hãy tìm 3 thời điểm i, j, k (1 <= i < j < k <= n) để thu 3 mức nhiệt x = a_i, y = a_j và z = a_k sao cho năng lượng điện tạo ra là lớn nhất.",
        "input": "Dữ liệu vào: Đọc từ file NHIETDO.INP gồm: \n - Dòng thứ nhất chứa số nguyên n (3 <= n <= 10^6); \n - Dòng thứ hai chứa dãy gồm n số nguyên a1, a2, ..., an (|ai| <= 10^6).",
        "output": "Kết quả: Ghi ra file NHIETDO.OUT một số nguyên là năng lượng điện lớn nhất tạo được.",
        "constraints": "Ràng buộc: Có 40% số test có n <= 100; 30% số test có n <= 10^4; 30% số test không giới hạn gì thêm.",
        "examples": [
          {"NHIETDO.INP": "7 \n -5 12 4 20 5 9 3", "NHIETDO.OUT": "144", "cite": ""}
        ]
      },
      {
        "name": "Bài 4. Lựa chọn cấu hình",
        "context": "Bốn bộ phận chính là: chip, màn hình cảm ứng, bo mạch và vỏ máy. Mỗi bộ phận có n nhà cung cấp, và mỗi bộ phận của một nhà cung cấp có một điểm đánh giá của các khách hàng là Vi và có giá thành là Ci.",
        "requirement": "Yêu cầu: Chọn ra 4 nhà cung cấp cho 4 bộ phận chính của chiếc máy tính mà tổng điểm đánh giá là lớn nhất và giá thành không quá M.",
        "input": "Dữ liệu vào: Đọc từ file CAUHINH.INP gồm: \n - Dòng thứ nhất chứa hai số nguyên n (2 <= n <= 10^3) và M (2 <= M <= 10^9); \n - Dòng thứ k tiếp theo (k từ 1 đến 4) chứa n cặp số nguyên dương (Ck1, Vk1), (Ck2, Vk2),..., (Ckn, Vkn), (1 <= Vki, Cki <= 10^9).",
        "output": "Kết quả: Ghi ra file CAUHINH.OUT một số nguyên duy nhất là tổng điểm đánh giá lớn nhất của máy tính mà tổng giá thành không quá M.",
        "constraints": "Ràng buộc: Có 50% số test có n <= 10^2; 50% số test còn lại có n <= 10^3.",
        "examples": [
          {"CAUHINH.INP": "2 10 \n 2 2 3 3 \n 2 2 4 5 \n 2 2 5 8 \n 2 2 6 8", "CAUHINH.OUT": "11", "cite": ""}
        ]
      }
    ]
  },
  {
    "id": "EXAM_DH_VINH_2024_2025",
    "province": "BỘ GIÁO DỤC VÀ ĐÀO TẠO TRƯỜNG ĐẠI HỌC VINH",
    "title": "KỲ THI TUYỂN SINH VÀO LỚP 10 TRƯỜNG THPT CHUYÊN NĂM HỌC 2024 - 2025",
    "subject": "Môn thi chuyên: TIN HỌC",
    "duration": "Thời gian: 150 phút (không kể thời gian giao đề)",
    "overview": {
      "title": "TỔNG QUAN BÀI THI",
      "table": [
        {"Bài": "1", "Tên bài": "SỐ SONG NGUYÊN TỔ", "Tên tệp chương trình": "PRIME.*", "Tên tệp dữ liệu vào": "PRIME.INP", "Tên tệp kết quả": "PRIME.OUT", "Thời gian": "1 giây", "Bộ nhớ": "1024MB", "cite": ""},
        {"Bài": "2", "Tên bài": "DÃY SỐ TƯƠNG TỰ", "Tên tệp chương trình": "SEQ.*", "Tên tệp dữ liệu vào": "SEQ.INP", "Tên tệp kết quả": "SEQ.OUT", "Thời gian": "1 giây", "Bộ nhớ": "1024MB", "cite": ""},
        {"Bài": "3", "Tên bài": "MẬT KHẨU", "Tên tệp chương trình": "PASS.*", "Tên tệp dữ liệu vào": "PASS.INP", "Tên tệp kết quả": "PASS.OUT", "Thời gian": "1 giây", "Bộ nhớ": "1024MB", "cite": ""},
        {"Bài": "4", "Tên bài": "ROBOT MANG QUẢ", "Tên tệp chương trình": "ROBOT.*", "Tên tệp dữ liệu vào": "ROBOT.INP", "Tên tệp kết quả": "ROBOT.OUT", "Thời gian": "1 giây", "Bộ nhớ": "1024MB", "cite": ""}
      ],
      "note": "Dấu * được thay thế bởi PAS/C/CPP/PY của ngôn ngữ lập trình sử dụng tương ứng là Pascal/C/C++/Python."
    },
    "questions": [
      {
        "name": "Bài 1 (6,0 điểm) SỐ SONG NGUYÊN TỐ",
        "context": "Một số n được gọi là số song nguyên tố nếu n là số nguyên tố và tổng các chữ số của số n cũng là số nguyên tố. Ví dụ số 23 là số song nguyên tố vì 23 là số nguyên tố và tổng các chữ số của số 23 bằng 5 cũng là số nguyên tố.",
        "requirement": "Yêu cầu: Cho 2 số nguyên L và R với 1 < L <= R <= 10^6, hãy tính số lượng các số song nguyên tố thuộc đoạn [L, R].",
        "input": "Dữ liệu vào: Từ tệp văn bản PRIME.INP gồm một dòng chứa hai số nguyên L và R, mỗi số cách nhau một dấu cách.",
        "output": "Kết quả: Ghi ra tệp văn bản PRIME.OUT gồm một dòng là số lượng các số song nguyên tố thuộc đoạn [L, R]. Nếu các giá trị của L và R không thỏa mãn điều kiện bài toán thì ghi là -1.",
        "constraints": "Giới hạn: \n - 10% số test ứng với các giá trị của L và R không thỏa mãn điều kiện bài toán; \n - 70% số test ứng với 1 < L <= R <= 10^4; \n - 20% số test ứng với 1 < L <= R <= 10^6.",
        "examples": [
          {"PRIME.INP": "10 30", "PRIME.OUT": "3", "Giải thích": "Các số nguyên tố trong đoạn [10, 30] gồm 11, 13, 17, 19, 23, 29, trong đó có 3 số song nguyên tố là 11, 23 và 29.", "cite": ""}
        ]
      },
      {
        "name": "Bài 2 (5,0 điểm) DÃY SỐ TƯƠNG TỰ",
        "context": "Cho hai dãy số nguyên a1, a2, ..., an và b1, b2, ..., bn với điều kiện 1 < n <= 5x10^4 và 1 <= ai, bi <= 10^9 (i=1,2,...,n). Hai dãy số (ai) và (bi) gọi là tương tự nhau nếu với mọi i != j mà ai = aj thì bi = bj và ai != aj thì bi != bj.",
        "requirement": "Yêu cầu: Hãy kiểm tra hai dãy số (ai) và (bi) có tương tự nhau hay không?",
        "input": "Dữ liệu vào: Từ tệp văn bản SEQ.INP, trong đó: \n Dòng 1 ghi một số nguyên dương n; \n Dòng 2 ghi n số nguyên của dãy số (ai), mỗi số ghi cách nhau ít nhất một dấu cách; \n Dòng 3 ghi n số nguyên của dãy số (bi), mỗi số ghi cách nhau ít nhất một dấu cách.",
        "output": "Kết quả: Ghi ra tệp văn bản SEQ.OUT gồm một dòng chứa số 1 nếu dãy số (ai) và dãy số (bi) tương tự nhau và số 0 trong trường hợp ngược lại. Nếu n không thỏa mãn điều kiện bài toán thì ghi là -1.",
        "constraints": "Giới hạn: \n - 10% số test ứng với các giá trị của n không thỏa mãn điều kiện bài toán; \n - 70% số test ứng với 1 < n <= 10^4; \n - 20% số test ứng với 1 < n <= 5x10^4.",
        "examples": [
          {"SEQ.INP": "5 \n 1 2 3 1 3 \n 3 2 1 3 1", "SEQ.OUT": "1", "Giải thích": "Với mọi i != j (i,j=1,2,...,5) ta có ai = aj thì bi = bj và ai != aj thì bi != bj, do vậy hai dãy (ai) và (bi) tương tự nhau.", "cite": ""},
          {"SEQ.INP": "5 \n 1 2 3 1 3 \n 1 2 3 3 3", "SEQ.OUT": "0", "Giải thích": "Ta có a1 = a4 nhưng b1 != b4, do vậy hai dãy (ai) và (bi) không tương tự nhau.", "cite": ""}
        ]
      },
      {
        "name": "Bài 3 (5,0 điểm) MẬT KHẨU",
        "context": "Mật khẩu được giấu trong một xâu ký tự là một xâu con gồm các ký tự khác nhau, không chứa dấu cách trắng và có độ dài lớn nhất. Nếu có nhiều xâu con gồm các ký tự khác nhau, không chứa dấu cách trắng và có độ dài lớn nhất bằng nhau thì xâu con cuối cùng trong xâu ký tự là xâu mật khẩu để mở tệp.",
        "requirement": "Yêu cầu: Xác định mật khẩu được dấu trong một xâu ký tự.",
        "input": "Dữ liệu vào: Từ tệp văn bản PASS.INP, trong đó dòng 1 chứa một số nguyên dương n (1 <= n <= 2x10^4) là số lượng các dòng văn bản có trong tệp và n dòng tiếp theo, mỗi dòng chứa một xâu không vượt quá 256 ký tự bao gồm các chữ cái, chữ số, ký tự đặc biệt, dấu cách trống.",
        "output": "Kết quả: Ghi ra tệp văn bản PASS.OUT gồm các dòng tương ứng là mật khẩu được giấu trong xâu ký tự.",
        "constraints": "Giới hạn: \n - 50% số test ứng với 1 <= n <= 10^4; \n - 30% số test ứng với 10^4 < n <= 1.5x10^4; \n - 20% số test ứng với 1.5x10^4 < n <= 2x10^4.",
        "examples": [
          {"PASS.INP": "3 \n Good morning! \n How are you? \n Have a nice day!", "PASS.OUT": "morni \n you? \n day!", "Giải thích": "Xâu ký tự \"Good morning!\" có các ký tự khác nhau dài nhất là \"morni\", do vậy \"morni\" là mật khẩu. Xâu \"Have a nice day!\" có các ký tự khác nhau dài nhất là \"Have\", \"nice\" và \"day!\", vì xâu \"day!\" là xâu con cuối cùng trong 3 xâu nên xâu \"day!\" là mật khẩu.", "cite": "[cite: 2516]"}
        ]
      },
      {
        "name": "Bài 4 (4,0 điểm) ROBOT MANG QUÀ",
        "context": "Cho một bảng A kích thước n x m, trên mỗi ô ghi một số nguyên dương là số lượng quà mà một con robot cần mang đi. Con robot xuất phát tại một ô A[i, 1] nào đó của cột 1 (1 <= i <= n) cần di chuyển sang một ô lân cận của cột j (1 <= j <= m). Cụ thể, từ ô A[i,j] (1 <= i <= n, 1 <= j <= m), con robot chỉ được di chuyển sang một trong ba ô sau: A[i, j+1], A[i-1, j+1], A[i+1, j+1] và khi con robot đi qua ô nào thì mang theo toàn bộ lượng quà ở ô đó.",
        "requirement": "Yêu cầu: Hãy tìm đường đi cho con robot từ một ô nào đó của cột 1 đến một ô nào đó của cột m để cho tổng lượng quà mà con robot cần mang đi là lớn nhất.",
        "input": "Dữ liệu vào: Từ tệp văn bản ROBOT.INP, trong đó dòng một ghi 2 số nguyên n và m cách nhau ít nhất một dấu cách (1 <= n, m <= 1000). Dòng thứ i trong n dòng tiếp theo ghi m số nguyên dương, mỗi số không vượt quá 10^5 và hai số liên tiếp cách nhau ít nhất một dấu cách.",
        "output": "Kết quả: Ghi ra tệp văn bản ROBOT.OUT gồm một dòng là tổng các số chứa trong các ô mà con robot đã đi qua.",
        "constraints": "Giới hạn: \n - 50% số test ứng với 1 <= n, m <= 500; \n - 30% số test ứng với 500 < n, m <= 800; \n - 20% số test ứng với 800 < n, m <= 1000.",
        "examples": [
          {"ROBOT.INP": "3 5 \n 6 1 7 3 8 \n 15 8 3 14 1 \n 8 6 15 19 1 1", "ROBOT.OUT": "61", "Giải thích": "Tổng lớn nhất các số chứa trong các ô mà con robot đã đi qua là 61 (gồm các ô A[2,1], A[3,2], A[3,3], A[2,4], A[1,5]).", "cite": "[cite: 2532]"}
        ]
      }
    ]
  },
  {
    "id": "EXAM_MOCK_CSP_2026",
    "province": "Không xác định",
    "title": "Thi thử TS10 CSP 2026 - Xếp hạng",
    "subject": "Tin học",
    "duration": "Time limit: 1.0s",
    "overview": {
      "title": "Thông tin bài thi",
      "table": [],
      "note": "Memory limit: 1G"
    },
    "questions": [
      {
        "name": "Xếp hạng",
        "context": "Sau bài kiểm tra online, giáo sư X muốn xếp thứ hạng cho n học trò của mình dựa trên bài làm của chúng. Với mỗi bạn tham gia kì thi này, máy tính ghi lại hai thông tin: số bài đã làm được và tổng số thời gian làm bài. Để cho tiện ta gọi pi, ti tương ứng là số bài đã nộp và tổng thời gian làm bài của học sinh thứ i. Học sinh i được xếp hạng cao hơn học sinh j nếu i giải được nhiều bài hơn j hoặc giải được cùng số bài nhưng tổng thời gian lại ít hơn j. Với những bạn giải được cùng số bài trong cùng một khoảng thời gian bằng nhau thì coi là cùng thứ hạng.",
        "requirement": "Yêu cầu: Nếu xếp các bạn theo thứ hạng giảm dần, hãy cho biết xem có bao nhiêu thí sinh có cùng hạng với bạn thứ k trong danh sách đó?",
        "input": "Input \n • Dòng đầu gồm 2 số n, k (n, k <= 10^5). \n • n dòng tiếp theo, dòng thứ i ghi hai số pi và ti (1 <= pi, ti <= 10^9).",
        "output": "Output \n • Ghi ra 1 số duy nhất là số người cùng thứ hạng k theo cách xếp trên.",
        "examples": [
          {"Input": "7 2 \n 4 10 \n 4 10 \n 4 10 \n 3 20 \n 2 1 \n 2 1 \n 1 10", "Output": "3", "cite": ""}
        ]
      }
    ]
  }

];