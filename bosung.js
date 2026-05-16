// ============================================================================
// FILE: competition-cpp-exams-full.js
// CHỨC NĂNG: Quản lý kho đề thi thực tế và logic liên kết từ Giáo án -> Đề thi
// ============================================================================

const slugify = (text) => String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// 1. KHO ĐỀ THI TỔNG HỢP (2021 - 2025)
const examLibraryFull = {
    "Sở GDĐT": [
        {
            year: "2024 - 2025",
            name: "Đề Thi Tuyển Sinh Lớp 10 Chuyên Tin TP.HCM",
            duration: "150 phút",
            description: "Đề thi mới nhất của Sở GD&ĐT TP.HCM. Xu hướng ra đề hiện tại tập trung rất mạnh vào kỹ thuật Hai con trỏ (Two Pointers), Mảng cộng dồn (Prefix Sum) và Quy hoạch động trên lưới.",
            problems: [
                {
                    title: "Bài 1: MẬT KHẨU BẢO MẬT (PASSW) - 2.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Để tăng cường bảo mật, hệ thống tạo ra một mật khẩu dựa trên một chuỗi S chỉ gồm các chữ số từ '0' đến '9'. Mật khẩu là số lượng các chuỗi con liên tiếp của S mà khi chuyển thành số nguyên, nó chia hết cho 3.\n\nHãy giúp lập trình viên tính xem có bao nhiêu chuỗi con như vậy.",
                    input: "Một dòng duy nhất chứa chuỗi S.",
                    output: "Một số nguyên duy nhất là số lượng chuỗi con thỏa mãn.",
                    constraints: "- Subtask 1 (50%): Độ dài S ≤ 10^3.\n- Subtask 2 (50%): Độ dài S ≤ 10^5.",
                    sampleIn: "132",
                    sampleOut: "3",
                    sampleNote: "Các chuỗi con là: '3', '132' và bản thân số '132' tính từ index khác (nếu có, bài này áp dụng Prefix Sum Modulo)."
                },
                {
                    title: "Bài 2: HÀNG RÀO GỖ (FENCE) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Bác nông dân có N thanh gỗ, thanh i có độ cao H[i]. Bác muốn chọn một đoạn liên tiếp để làm hàng rào, sao cho chênh lệch giữa thanh cao nhất và thấp nhất trong đoạn không vượt quá K.\n\nHãy tìm độ dài của đoạn hàng rào liên tiếp dài nhất.",
                    input: "Dòng 1: Hai số N và K.\nDòng 2: N số nguyên H[1]..H[N].",
                    output: "Độ dài đoạn liên tiếp dài nhất.",
                    constraints: "- Subtask 1 (40%): N ≤ 1000, K ≤ 10^9.\n- Subtask 2 (60%): N ≤ 10^5, K ≤ 10^9.",
                    sampleIn: "5 2\n1 3 2 1 5",
                    sampleOut: "4",
                    sampleNote: "Đoạn [1, 3, 2, 1]. Max = 3, Min = 1, Max - Min = 2 ≤ K. Chiều dài là 4."
                },
                {
                    title: "Bài 3: GIAO HÀNG (DELIVERY) - 3.0 Điểm",
                    limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                    content: "Lưới N x M. Robot đi từ (1, 1) đến (N, M). Mỗi ô có C[i][j] xu. Robot chỉ được đi sang phải hoặc xuống dưới. Ô có giá trị -1 là vật cản. Tìm số xu lớn nhất có thể thu thập.",
                    input: "Dòng 1: N và M.\nN dòng tiếp theo: Lưới giá trị.",
                    output: "Số tiền xu lớn nhất. Nếu không thể đến đích, in -1.",
                    constraints: "- N, M ≤ 1000.\n- C[i][j] ≤ 10^6.",
                    sampleIn: "3 3\n1 2 5\n-1 3 -1\n4 1 2",
                    sampleOut: "10",
                    sampleNote: "Đường đi: (1,1)->(1,2)->(2,2)->(3,2)->(3,3). Tổng = 1+2+3+1+2 = 9. (Grid DP)."
                },
                {
                    title: "Bài 4: MẠNG LƯỚI ĐIỆN (GRID) - 2.0 Điểm",
                    limits: "Thời gian: 2.0 giây | Bộ nhớ: 512 MB",
                    content: "N trạm, M đường dây. Đường dây e_i có điện trở R_i. Tìm đường truyền từ trạm 1 đến N sao cho điện trở lớn nhất trên đường đó là nhỏ nhất có thể.",
                    input: "Dòng 1: N và M.\nM dòng tiếp: U, V, R.",
                    output: "Điện trở thỏa mãn. Nếu không có đường nối, in -1.",
                    constraints: "- N ≤ 10^5, M ≤ 2*10^5, R ≤ 10^9.",
                    sampleIn: "4 5\n1 2 10\n1 3 5\n2 4 8\n3 4 12\n2 3 2",
                    sampleOut: "8",
                    sampleNote: "Đi 1 -> 3 -> 2 -> 4. Max điện trở là 8."
                }
            ]
        },
        {
            year: "2023 - 2024",
            name: "Đề Thi Tuyển Sinh Lớp 10 Chuyên Tin TP.HCM",
            duration: "150 phút",
            description: "Cấu trúc đề chuẩn 4 bài của Hội đồng tuyển sinh TP.HCM. Đề nhấn mạnh vào kỹ năng xử lý mảng, chuỗi và đồ thị lưới.",
            problems: [
                {
                    title: "Bài 1: MẬT KHẨU (PASSWORD) - 2.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Mật khẩu của hệ thống là số lượng ước số của số nguyên dương N. Tính xem mật khẩu là số mấy.",
                    input: "Số nguyên dương N.",
                    output: "Số lượng ước số của N.",
                    constraints: "- N ≤ 10^12.",
                    sampleIn: "12",
                    sampleOut: "6",
                    sampleNote: "Các ước của 12 là: 1, 2, 3, 4, 6, 12."
                },
                {
                    title: "Bài 2: TRẠM PHÁT SÓNG (STATION) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Trên đường thẳng có N nhà, nhà i tọa độ X[i], dân số P[i]. Đặt 1 trạm phát sóng tại 1 nhà sao cho tổng (khoảng cách * dân số) là nhỏ nhất.",
                    input: "Dòng 1: N.\nN dòng tiếp: X[i], P[i].",
                    output: "Tổng khoảng cách nhỏ nhất.",
                    constraints: "- N ≤ 10^5, X[i], P[i] ≤ 10^6.",
                    sampleIn: "3\n1 5\n3 2\n6 3",
                    sampleOut: "21",
                    sampleNote: "Bài toán quy hoạch động mảng 1D hoặc Two Pointers."
                },
                {
                    title: "Bài 3: XẾP HỘP (BOXES) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "N hộp, khối lượng W[i], độ cứng C[i]. Xếp chồng lên nhau sao cho tổng khối lượng các hộp phía trên không vượt quá độ cứng hộp đang đứng. Tìm số hộp xếp tối đa.",
                    input: "N và N dòng tiếp W[i], C[i].",
                    output: "Số hộp tối đa.",
                    constraints: "- N ≤ 1000, W, C ≤ 10^5.",
                    sampleIn: "3\n10 10\n15 20\n5 5",
                    sampleOut: "2",
                    sampleNote: "Ba lô biến thể."
                },
                {
                    title: "Bài 4: MÊ CUNG BĂNG (ICEMAZE) - 2.0 Điểm",
                    limits: "Thời gian: 2.0 giây | Bộ nhớ: 512 MB",
                    content: "Lưới R x C. Bề mặt là băng trơn. Di chuyển theo 4 hướng sẽ trượt dài đến khi đụng vật cản. Tìm số lần trượt ít nhất từ S đến E.",
                    input: "R, C và bảng ký tự.",
                    output: "Số lần trượt ít nhất.",
                    constraints: "- R, C ≤ 1000.",
                    sampleIn: "4 5\nS....\n...#.\n.#...\n....E",
                    sampleOut: "3",
                    sampleNote: "Biến thể BFS."
                }
            ]
        },
        {
            year: "2022 - 2023",
            name: "Đề Thi Tuyển Sinh Lớp 10 Chuyên Tin TP.HCM",
            duration: "150 phút",
            description: "Đề thi năm 2022 nổi bật với các bài toán đếm số cách (Tổ hợp & Quy hoạch động) và phân tích miền liên thông trên đồ thị.",
            problems: [
                {
                    title: "Bài 1: MUA VÉ (TICKET) - 2.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Cần đi N chuyến xe buýt. Vé lẻ giá A, vé tháng giá B. Tìm số tiền ít nhất.",
                    input: "N, A, B.",
                    output: "Số tiền tối thiểu.",
                    constraints: "N, A, B ≤ 10^9.",
                    sampleIn: "10 5 40",
                    sampleOut: "40",
                    sampleNote: "Toán học / IF ELSE."
                },
                {
                    title: "Bài 2: CẶP SỐ (PAIRS) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Cho dãy A có N phần tử. Đếm số cặp (i, j) có i < j sao cho A[i] + A[j] = K.",
                    input: "N, K và dãy A.",
                    output: "Số lượng cặp.",
                    constraints: "N ≤ 2*10^5, |A[i]| ≤ 10^9.",
                    sampleIn: "5 6\n1 5 2 4 3",
                    sampleOut: "2",
                    sampleNote: "Map hoặc Two Pointers."
                },
                {
                    title: "Bài 3: BẬC THANG KỲ LẠ (VSTEPS) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Leo N bậc thang, bước 1 hoặc 2 bậc. Có K bậc hỏng. Đếm số cách leo lên đỉnh (modulo 14062008).",
                    input: "N, K và danh sách K bậc hỏng.",
                    output: "Số cách % 14062008.",
                    constraints: "N ≤ 10^5.",
                    sampleIn: "4 1\n2",
                    sampleOut: "1",
                    sampleNote: "DP cơ bản có vật cản."
                },
                {
                    title: "Bài 4: KHU RỪNG MIỀN LIÊN THÔNG (FOREST) - 2.0 Điểm",
                    limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                    content: "Lưới R x C. Đếm diện tích khu vực liên thông cùng ký tự với ô xuất phát (X, Y).",
                    input: "R, C, X, Y và lưới ký tự.",
                    output: "Diện tích miền liên thông.",
                    constraints: "R, C ≤ 1000.",
                    sampleIn: "4 5 2 2\nAAABB\nAACBB\nACCCB\nDDDEE",
                    sampleOut: "4",
                    sampleNote: "DFS / BFS Loang."
                }
            ]
        },
        {
            year: "2021 - 2022",
            name: "Đề Thi Tuyển Sinh (Tổng hợp Lê Hồng Phong & Trần Đại Nghĩa)",
            duration: "150 phút",
            description: "Bộ đề lưu trữ các bài toán kinh điển (VNOI), tập trung vào BFS, Dijkstra và Quy hoạch động.",
            problems: [
                {
                    title: "Bài 1: DÃY TĂNG DÀI NHẤT (LIQ) - 2.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Tìm độ dài của dãy con tăng ngặt dài nhất (LIS) trích ra từ dãy A.",
                    input: "N và dãy A.",
                    output: "Độ dài LIS.",
                    constraints: "N ≤ 10^5.",
                    sampleIn: "6\n1 2 5 4 6 2",
                    sampleOut: "4",
                    sampleNote: "DP + Binary Search."
                },
                {
                    title: "Bài 2: PHÂN CHIA TÀI SẢN (DIVIDE) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Chia N món đồ thành 2 phần sao cho độ chênh lệch tổng giá trị là NHỎ NHẤT.",
                    input: "N và dãy giá trị.",
                    output: "Độ chênh lệch nhỏ nhất.",
                    constraints: "N ≤ 100, Tổng V ≤ 10^5.",
                    sampleIn: "5\n10 20 15 5 25",
                    sampleOut: "5",
                    sampleNote: "Ba lô 0/1."
                },
                {
                    title: "Bài 3: MÊ CUNG ĐÁ (QBMAZE) - 2.0 Điểm",
                    limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                    content: "Tìm đường đi ngắn nhất từ (1,1) đến (M,N) trên lưới 0 (đường) và 1 (đá).",
                    input: "M, N và lưới.",
                    output: "Số bước ngắn nhất.",
                    constraints: "M, N ≤ 1000.",
                    sampleIn: "3 4\n0 1 0 0\n0 0 0 1\n1 1 0 0",
                    sampleOut: "5",
                    sampleNote: "BFS chuẩn."
                },
                {
                    title: "Bài 4: ĐI ĐẾN TRƯỜNG (QBSCHOOL) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Tìm chiều dài đường đi ngắn nhất từ 1 đến N và ĐẾM số tuyến đường ngắn nhất đó.",
                    input: "Đồ thị N đỉnh, M cạnh (1 chiều và 2 chiều).",
                    output: "Chiều dài min và số tuyến.",
                    constraints: "N ≤ 5000.",
                    sampleIn: "3 3\n2 1 2 3\n2 2 3 4\n1 1 3 7",
                    sampleOut: "7 2",
                    sampleNote: "Dijkstra + DP trace."
                }
            ]
        }
    ],
    PTNK: [
        {
            year: "2024 - 2025",
            name: "Đề Thi Tuyển Sinh Phổ Thông Năng Khiếu",
            duration: "150 phút",
            description: "Đề thi phân loại cực gắt. Đòi hỏi kết hợp Tìm kiếm nhị phân trên kết quả và Xử lý chuỗi.",
            problems: [
                {
                    title: "Bài 1: TRÒ CHƠI DÃY SỐ (GAMESEQ) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Đảo ngược ĐÚNG MỘT đoạn con của dãy A. Maximize tổng (A[i]*B[i]).",
                    input: "N, dãy A, dãy B.",
                    output: "Tổng Max.",
                    constraints: "N ≤ 5000.",
                    sampleIn: "5\n1 2 3 4 5\n5 4 3 2 1",
                    sampleOut: "55",
                    sampleNote: "DP mở rộng từ tâm."
                },
                {
                    title: "Bài 2: MẬT MÃ BÍ ẨN (CIPHER) - 3.0 Điểm",
                    limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                    content: "S ghép lại thành SS, chèn 1 ký tự sinh ra T. Cho T, tìm S.",
                    input: "K (độ dài T) và chuỗi T.",
                    output: "Chuỗi S.",
                    constraints: "K ≤ 2*10^6 + 1.",
                    sampleIn: "7\nABXCABC",
                    sampleOut: "ABC",
                    sampleNote: "String Hashing."
                },
                {
                    title: "Bài 3: XÂY DỰNG TRỤ SỞ (BUILDING) - 4.0 Điểm",
                    limits: "Thời gian: 2.0 giây | Bộ nhớ: 512 MB",
                    content: "Chọn K vị trí từ N vị trí sao cho khoảng cách min giữa 2 điểm bất kỳ là Max.",
                    input: "N, K và N tọa độ.",
                    output: "Khoảng cách cực đại.",
                    constraints: "N ≤ 10^5.",
                    sampleIn: "5 3\n1 2 8 4 9",
                    sampleOut: "3",
                    sampleNote: "Binary Search on Answer."
                }
            ]
        },
        {
            year: "2023 - 2024",
            name: "Đề Thi Tuyển Sinh Phổ Thông Năng Khiếu",
            duration: "150 phút",
            description: "Đề thi PTNK mang tính phân loại cao, đòi hỏi Hashing và Đồ thị nâng cao.",
            problems: [
                {
                    title: "Bài 1: TRUY VẤN DÃY SỐ (NKSEQ) - 3.0 Điểm",
                    limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                    content: "Tính tổng các phần tử chẵn trong đoạn [L, R] với Q truy vấn.",
                    input: "N, Q, dãy A và Q truy vấn.",
                    output: "Q dòng kết quả.",
                    constraints: "N, Q ≤ 10^5.",
                    sampleIn: "5 3\n1 2 3 4 5\n1 3\n2 5\n1 5",
                    sampleOut: "2\n6\n6",
                    sampleNote: "Prefix Sum."
                },
                {
                    title: "Bài 2: CHUỖI TƯƠNG ĐỒNG (NKSTRING) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "S[i..j] tương đồng S[u..v] nếu khác nhau tối đa 1 ký tự. Trả lời Q truy vấn.",
                    input: "Chuỗi S, Q truy vấn (i, j, u, v).",
                    output: "YES/NO.",
                    constraints: "|S|, Q ≤ 10^5.",
                    sampleIn: "abacaba\n2\n1 3 5 7\n1 4 2 5",
                    sampleOut: "YES\nNO",
                    sampleNote: "Hashing + Binary Search."
                },
                {
                    title: "Bài 3: GIAO THÔNG (NKCITY) - 4.0 Điểm",
                    limits: "Thời gian: 2.0 giây | Bộ nhớ: 512 MB",
                    content: "Đồ thị N đỉnh. Tìm đường từ 1 -> N sao cho cạnh có trọng số MIN trên đường đó là MAX.",
                    input: "N, M và M cạnh (U, V, W).",
                    output: "Trọng số MAX.",
                    constraints: "N ≤ 10^5, M ≤ 2*10^5.",
                    sampleIn: "4 4\n1 2 10\n2 4 5\n1 3 4\n3 4 8",
                    sampleOut: "5",
                    sampleNote: "Kruskal / Dijkstra biến thể."
                }
            ]
        },
        {
            year: "2022 - 2023",
            name: "Đề Thi Tuyển Sinh Phổ Thông Năng Khiếu",
            duration: "150 phút",
            description: "Một trong những bộ đề kinh điển kiểm tra tư duy mảng cộng dồn chia dư và Số học.",
            problems: [
                {
                    title: "Bài 1: SỐ PHONG PHÚ (NKABD) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Đếm số phong phú (Tổng ước thực sự > Chính nó) trong đoạn [L, R].",
                    input: "L, R.",
                    output: "Số lượng số.",
                    constraints: "L, R ≤ 10^5.",
                    sampleIn: "1 50",
                    sampleOut: "9",
                    sampleNote: "Sàng ước số."
                },
                {
                    title: "Bài 2: CHIA KẸO CHIA HẾT (DIVISIBLE) - 3.0 Điểm",
                    limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                    content: "Đếm đoạn con liên tiếp của dãy A có tổng chia hết cho K.",
                    input: "N, K và dãy A.",
                    output: "Số đoạn con.",
                    constraints: "N ≤ 10^5, K ≤ 1000.",
                    sampleIn: "5 3\n1 2 3 4 5",
                    sampleOut: "4",
                    sampleNote: "Prefix Sum Modulo."
                },
                {
                    title: "Bài 3: QUẢN LÝ HỘI TRƯỜNG (NKREZ) - 4.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "N yêu cầu mượn phòng (Start, End). Chọn sao cho không giao nhau và Tổng thời gian Max.",
                    input: "N và N cặp (Start, End).",
                    output: "Tổng thời gian Max.",
                    constraints: "N ≤ 10^4.",
                    sampleIn: "4\n1 4\n3 5\n0 6\n4 7",
                    sampleOut: "6",
                    sampleNote: "DP / LIS biến thể."
                }
            ]
        },
        {
            year: "2021 - 2022",
            name: "Đề Thi Tuyển Sinh Phổ Thông Năng Khiếu (Chuyên Đề Thuật Toán)",
            duration: "150 phút",
            description: "Tập trung vào Kỹ thuật xử lý số nguyên lớn, Chặt nhị phân và Truy vết DP.",
            problems: [
                {
                    title: "Bài 1: SỐ KHÔNG CÓ ƯỚC CHÍNH PHƯƠNG (NKNUMFRE) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Đếm số nguyên trong [A, B] không chia hết cho bình phương của bất kỳ số nguyên tố nào.",
                    input: "A, B.",
                    output: "Số lượng.",
                    constraints: "A, B ≤ 10^6.",
                    sampleIn: "1 10",
                    sampleOut: "7",
                    sampleNote: "Sàng Eratosthenes biến thể."
                },
                {
                    title: "Bài 2: GHÉP SỐ LỚN NHẤT (JOINNUM) - 2.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Ghép N số lại để được số nguyên lớn nhất.",
                    input: "N và N số.",
                    output: "Số ghép lớn nhất.",
                    constraints: "N ≤ 10^5.",
                    sampleIn: "4\n3 30 34 5 9",
                    sampleOut: "9534330",
                    sampleNote: "Sort chuỗi."
                },
                {
                    title: "Bài 3: PHÂN LÔ ĐẤT / XẾP BÒ (COWS) - 3.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Xếp C con bò vào N chuồng. Maximize khoảng cách Min giữa 2 con bò.",
                    input: "N, C và tọa độ chuồng.",
                    output: "Khoảng cách cực đại.",
                    constraints: "N ≤ 10^5.",
                    sampleIn: "5 3\n1 2 8 4 9",
                    sampleOut: "3",
                    sampleNote: "Binary Search on Answer."
                },
                {
                    title: "Bài 4: ĐƯỜNG ĐI LỚN NHẤT (QBMAX8) - 2.0 Điểm",
                    limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                    content: "Bảng 8 x N. Đi từ cột 1 đến N. In ra Tổng Max và Truy vết đường đi.",
                    input: "N và bảng số.",
                    output: "Tổng Max và Dòng đã đi.",
                    constraints: "N ≤ 2000.",
                    sampleIn: "3\n1 2 3\n4 5 6\n...",
                    sampleOut: "15\n2 2 3",
                    sampleNote: "DP có Trace."
                }
            ]
        }
    ]
};

examLibraryFull["Chuyên Đề Sở GD&ĐT"] = [
    {
        year: "Tổng Hợp Các Năm",
        name: "Tuyển Tập Bài Toán Mảng, Chuỗi & Đồ Thị (Sở GD&ĐT)",
        duration: "Luyện Tập",
        description: "Bộ đề tập hợp các câu hỏi phân loại học sinh khá/giỏi (Bài 2, Bài 3) thường xuyên xuất hiện trong các kỳ thi vào chuyên Tin Lê Hồng Phong và Trần Đại Nghĩa.",
        problems: [
            {
                title: "Bài 1: XẾP HẠNG HUY CHƯƠNG (MEDALS) - Buổi 11",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Trong một kỳ thi Olympic, có N đoàn tham gia. Mỗi đoàn đạt được số lượng huy chương Vàng, Bạc, Đồng nhất định. Hãy sắp xếp danh sách các đoàn theo thứ tự ưu tiên sau: Giảm dần theo số huy chương Vàng. Nếu Vàng bằng nhau, giảm dần theo Bạc. Nếu Bạc bằng nhau, giảm dần theo Đồng. Nếu vẫn bằng nhau, sắp xếp theo tên đoàn theo thứ tự từ điển tăng dần.",
                input: "Dòng 1: Số nguyên N (Số lượng đoàn).\nN dòng tiếp theo: Mỗi dòng gồm Tên đoàn (Chuỗi không khoảng trắng) và 3 số nguyên Vàng, Bạc, Đồng.",
                output: "Danh sách tên các đoàn sau khi đã sắp xếp, mỗi tên in trên 1 dòng.",
                constraints: "- N ≤ 10^5.\n- Số lượng huy chương ≤ 10^9.\n- Độ dài tên đoàn ≤ 20.",
                sampleIn: "4\nVN 5 2 1\nTH 5 2 1\nSG 3 10 10\nMY 5 3 0",
                sampleOut: "MY\nTH\nVN\nSG",
                sampleNote: "Sử dụng Comparator trong hàm sort(). TH xếp trước VN vì thứ tự từ điển chữ T đứng trước chữ V."
            },
            {
                title: "Bài 2: VÙNG ẢNH (IMAGE) - Buổi 14",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Một bức ảnh kỹ thuật số được biểu diễn dưới dạng ma trận kích thước N dòng và M cột. Mỗi điểm ảnh có một độ sáng C[i][j]. Có Q truy vấn, mỗi truy vấn yêu cầu tính tổng độ sáng của một vùng hình chữ nhật được giới hạn bởi góc trên bên trái (r1, c1) và góc dưới bên phải (r2, c2).",
                input: "Dòng 1: N, M, Q.\nN dòng tiếp: Mỗi dòng M số nguyên biểu diễn ma trận.\nQ dòng tiếp: Mỗi dòng 4 số nguyên r1, c1, r2, c2.",
                output: "Gồm Q dòng, mỗi dòng là tổng độ sáng của một truy vấn.",
                constraints: "- N, M ≤ 1000.\n- Q ≤ 10^5.\n- C[i][j] ≤ 10^6.",
                sampleIn: "3 3 2\n1 2 3\n4 5 6\n7 8 9\n1 1 2 2\n2 2 3 3",
                sampleOut: "12\n28",
                sampleNote: "Sử dụng mảng cộng dồn 2D (Prefix Sum 2D) để trả lời truy vấn trong O(1)."
            },
            {
                title: "Bài 3: VÙNG LIÊN THÔNG (REGION) - Buổi 26",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Bức ảnh vệ tinh được số hóa thành lưới N x M. Điểm ảnh '1' là đất liền, '0' là nước. Một vùng đất liền (hòn đảo) được tạo thành từ các điểm '1' chung cạnh (Trên, Dưới, Trái, Phải). Hãy đếm số lượng hòn đảo trên bản đồ và in ra diện tích (số điểm '1') của hòn đảo lớn nhất.",
                input: "Dòng 1: N và M.\nN dòng tiếp theo: Mỗi dòng gồm chuỗi M ký tự '0' hoặc '1'.",
                output: "Hai số nguyên cách nhau một khoảng trắng: Số lượng hòn đảo và diện tích đảo lớn nhất.",
                constraints: "- N, M ≤ 1000.",
                sampleIn: "4 5\n11000\n10011\n00010\n01100",
                sampleOut: "3 3",
                sampleNote: "Có 3 đảo. Đảo lớn nhất có diện tích là 3 (gồm các số 1 ở tọa độ 1,1; 1,2 và 2,1). Áp dụng DFS/BFS Loang."
            },
            {
                title: "Bài 4: TRẠM THU PHÁT SÓNG (STATION) - Buổi 43",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Trên trục Ox có N ngôi nhà, nhà i nằm ở tọa độ X[i] và có dân số P[i]. Một công ty viễn thông cần đặt một trạm phát sóng tại tọa độ của MỘT ngôi nhà để phục vụ. Chi phí truyền tải từ trạm đặt tại X[k] đến nhà X[i] được tính bằng: |X[k] - X[i]| * P[i]. Hãy tìm tọa độ đặt trạm sao cho TỔNG chi phí truyền tải đến tất cả các nhà là nhỏ nhất.",
                input: "Dòng 1: Số nguyên N.\nN dòng tiếp: Mỗi dòng 2 số nguyên X[i] và P[i] (X[i] đã được sắp xếp tăng dần).",
                output: "Tổng chi phí truyền tải nhỏ nhất.",
                constraints: "- N ≤ 10^5, X[i], P[i] ≤ 10^6.",
                sampleIn: "3\n1 5\n3 2\n6 3",
                sampleOut: "21",
                sampleNote: "Đây là bài toán kinh điển giải bằng Prefix Sum mảng 1D hoặc Two Pointers. Kết quả đạt được khi đặt trạm tại tọa độ 1."
            }
        ]
    }
];

examLibraryFull["Chuyên Đề PTNK & VNOI"] = [
    {
        year: "Tổng Hợp Nâng Cao",
        name: "Tuyển Tập Phổ Thông Năng Khiếu & VNOI",
        duration: "Luyện Tập",
        description: "Bộ đề bao gồm các chuyên đề số học sâu, chia để trị, thuật toán chuỗi và quy hoạch động phân hóa cao độ, quen thuộc với học sinh hệ thi PTNK.",
        problems: [
            {
                title: "Bài 1: ĐẾM SỐ NGUYÊN TỐ (PRIMES) - Buổi 17",
                limits: "Thời gian: 1.5 giây | Bộ nhớ: 256 MB",
                content: "Cho Q truy vấn, mỗi truy vấn gồm hai số nguyên dương L và R. Yêu cầu tính nhanh có bao nhiêu số nguyên tố nằm trong đoạn [L, R].",
                input: "Dòng 1: Số lượng truy vấn Q.\nQ dòng tiếp theo: Mỗi dòng gồm hai số L và R.",
                output: "In ra Q dòng, mỗi dòng là số lượng số nguyên tố thuộc đoạn [L, R].",
                constraints: "- Subtask 1 (30%): Q ≤ 100, L, R ≤ 10^5.\n- Subtask 2 (70%): Q ≤ 10^5, L, R ≤ 10^7.",
                sampleIn: "3\n1 10\n10 20\n1 100",
                sampleOut: "4\n4\n25",
                sampleNote: "Bắt buộc phải cài đặt Sàng Eratosthenes kết hợp với Mảng cộng dồn O(1) để chống TLE."
            },
            {
                title: "Bài 2: GHÉP CHUỖI (JOINSTR) - Buổi 43",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Cho N chuỗi ký tự chỉ gồm các chữ số. Bạn được quyền ghép tất cả N chuỗi này lại với nhau theo một thứ tự bất kỳ. Hãy tìm cách ghép để tạo ra một chuỗi biểu diễn số nguyên có giá trị LỚN NHẤT có thể.",
                input: "Dòng 1: Số nguyên N.\nDòng 2: N chuỗi ký tự, cách nhau bởi khoảng trắng.",
                output: "Chuỗi kết quả lớn nhất.",
                constraints: "- N ≤ 10^5.\n- Tổng độ dài các chuỗi ≤ 10^6.",
                sampleIn: "4\n3 30 34 5 9",
                sampleOut: "9534330",
                sampleNote: "Kỹ thuật so sánh tùy chỉnh: So sánh 2 chuỗi a và b bằng cách xét (a+b) > (b+a). Không dùng so sánh từ điển thông thường."
            },
            {
                title: "Bài 3: CẮT GỖ (WOOD) - Buổi 44",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Bác thợ mộc cần thu hoạch ít nhất M mét gỗ. Bác có N cây gỗ trong rừng, cây thứ i có chiều cao H[i]. Máy cưa của bác có thể được thiết lập ở một độ cao X. Khi đó, tất cả các cây có chiều cao > X sẽ bị cắt phần ngọn (thu được H[i] - X mét gỗ), các cây ≤ X không bị ảnh hưởng. Hãy tìm độ cao X LỚN NHẤT sao cho bác vẫn thu được tổng lượng gỗ ≥ M.",
                input: "Dòng 1: Hai số nguyên N và M.\nDòng 2: N số nguyên H[1], H[2], ..., H[N].",
                output: "Độ cao X lớn nhất.",
                constraints: "- N ≤ 10^6, M ≤ 2*10^9.\n- H[i] ≤ 10^9.",
                sampleIn: "4 7\n20 15 10 17",
                sampleOut: "15",
                sampleNote: "Nếu cắt ở độ cao 15: Cây 20 được 5m, cây 17 được 2m. Tổng = 7m (vừa đủ M). Bài toán kinh điển Binary Search on Answer."
            }
        ]
    }
];

examLibraryFull["Chuyên Đề Bổ Sung (LHP, TĐN, Classic)"] = [
    {
        year: "Kinh Điển Cấu Trúc Dữ Liệu",
        name: "Đồ Thị, Cấu Trúc Map và Quy Hoạch Động",
        duration: "Luyện Tập",
        description: "Chứa các mô hình bài toán lập lịch, chia tài sản (Ba lô) và phân tích mạng lưới kết nối.",
        problems: [
            {
                title: "Bài 1: THỐNG KÊ (STATISTICS) - LHP - Buổi 12",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Cho dãy số nguyên A gồm N phần tử. Giá trị của các phần tử rất lớn. Hãy tìm số xuất hiện NHIỀU LẦN NHẤT trong dãy. Nếu có nhiều số có cùng tần suất xuất hiện, hãy in ra số có giá trị nhỏ nhất.",
                input: "Dòng 1: Số nguyên N.\nDòng 2: N số nguyên A[1..N].",
                output: "Hai số nguyên: Số xuất hiện nhiều nhất và tần suất của nó.",
                constraints: "- N ≤ 10^5.\n- A[i] ≤ 10^18.",
                sampleIn: "6\n1000000000 5 5 1000000000 3 5",
                sampleOut: "5 3",
                sampleNote: "Vì A[i] lên đến 10^18 nên không thể dùng mảng đánh dấu đếm phân phối. Phải sử dụng std::map hoặc sort + đếm mảng."
            },
            {
                title: "Bài 2: PHÂN CHIA (DIVIDE) - TĐN - Buổi 30",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Có N món tài sản với giá trị V[1], V[2], ..., V[N]. Một người cha trước khi mất muốn chia N món tài sản này cho 2 người con sao cho độ chênh lệch tổng giá trị tài sản giữa 2 người là NHỎ NHẤT. Biết rằng không được bẻ đôi hay chia lẻ bất kỳ món tài sản nào.",
                input: "Dòng 1: Số nguyên N.\nDòng 2: N số nguyên V[1..N].",
                output: "Độ chênh lệch nhỏ nhất tìm được.",
                constraints: "- N ≤ 100.\n- Tổng các V[i] ≤ 10^5.",
                sampleIn: "5\n10 20 15 5 25",
                sampleOut: "5",
                sampleNote: "Mô hình quy hoạch động Ba lô 0/1 (Subset Sum). Tìm tập con có tổng gần bằng (Tổng V / 2) nhất."
            },
            {
                title: "Bài 3: NHÓM BẠN (FRIENDS) - Classic - Buổi 25",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Có N người dùng mạng xã hội và M mối quan hệ bạn bè 2 chiều. Tính chất bắc cầu: Nếu A là bạn B, B là bạn C thì A và C thuộc cùng một nhóm bạn. Hãy đếm số lượng nhóm bạn bè độc lập trong mạng xã hội và in ra số lượng thành viên của nhóm đông nhất.",
                input: "Dòng 1: N và M.\nM dòng tiếp theo: Hai số U, V thể hiện U và V là bạn bè.",
                output: "Hai số nguyên: Số lượng nhóm bạn và Kích thước nhóm lớn nhất.",
                constraints: "- N, M ≤ 10^5.",
                sampleIn: "5 3\n1 2\n2 3\n4 5",
                sampleOut: "2 3",
                sampleNote: "Sử dụng thuật toán DFS/BFS đếm miền liên thông trên đồ thị vô hướng."
            },
            {
                title: "Bài 4: LẬP LỊCH (SCHEDULE) - Classic - Buổi 28",
                limits: "Thời gian: 1.0 giây | Bộ nhớ: 256 MB",
                content: "Một dự án công nghệ có N công việc (đánh số từ 1 đến N) và M điều kiện ràng buộc. Ràng buộc (U, V) có ý nghĩa: Công việc U bắt buộc phải hoàn thành xong thì công việc V mới được phép bắt đầu. Hãy tìm ra một thứ tự thực hiện N công việc hợp lệ. Nếu dự án có chu trình bế tắc (Deadlock - không thể hoàn thành), in ra -1.",
                input: "Dòng 1: N và M.\nM dòng tiếp theo: Hai số U, V.",
                output: "N số nguyên thể hiện thứ tự làm việc. Nếu có nhiều kết quả, in ra thứ tự bất kỳ. Nếu bế tắc in -1.",
                constraints: "- N, M ≤ 10^5.",
                sampleIn: "4 3\n1 2\n1 3\n2 4",
                sampleOut: "1 3 2 4",
                sampleNote: "Đây là bài toán Sắp xếp Tô-pô (Topological Sort) cơ bản trên Đồ thị có hướng (DAG)."
            }
        ]
    }
];

// 2. RENDER LINK ĐỀ THI TRONG BÀI HỌC
const escapeHtml = window.escapeHtml || function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
};

window.phase1 = typeof phase1 !== 'undefined' ? phase1 : window.phase1;
window.phase2 = typeof phase2 !== 'undefined' ? phase2 : window.phase2;
window.phase3 = typeof phase3 !== 'undefined' ? phase3 : window.phase3;
window.phase4 = typeof phase4 !== 'undefined' ? phase4 : window.phase4;
window.phase5 = typeof phase5 !== 'undefined' ? phase5 : window.phase5;
window.phase6 = typeof phase6 !== 'undefined' ? phase6 : window.phase6;

if (!Array.isArray(window.database)) {
    window.database = [phase1, phase2, phase3, phase4, phase5, phase6].filter(Boolean);
}

if (!window.lessonExamLinks) {
    window.lessonExamLinks = {
        'Sở GDĐT - Bài 1 (Thường yêu cầu tính toán cơ bản nhưng số rất lớn).': '#exam-so-gd-t-2023-2024-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
        'Sở GDĐT - Các bài toán đếm ước số, số phong phú.': '#exam-so-gd-t-2023-2024-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
        'Sở GDĐT - Các bài toán xử lý con số trong dãy.': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
        'Sở GDĐT - Trạm thu phát sóng (100% ra trong các bài truy vấn).': '#exam-so-gd-t-2023-2024-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
        'Sở GDĐT - Mê cung': '#exam-so-gd-t-2023-2024-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
        'Sở GDĐT - Bậc thang.': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
        'PTNK - Bài toán ghép số': '#exam-ptnk-2023-2024-e-thi-tuyen-sinh-pho-thong-nang-khieu',
        'PTNK - Đếm số lượng cặp phần tử': '#exam-ptnk-2022-2023-e-thi-tuyen-sinh-pho-thong-nang-khieu',
        'PTNK - Bài toán đếm số lượng số nguyên tố (Subtask lớn).': '#exam-ptnk-2023-2024-e-thi-tuyen-sinh-pho-thong-nang-khieu',
        'PTNK - Số không có ước chính phương (nknumfre)': '#exam-ptnk-2022-2023-e-thi-tuyen-sinh-pho-thong-nang-khieu',
        'PTNK - Số phong phú (nkabd)': '#exam-ptnk-2022-2023-e-thi-tuyen-sinh-pho-thong-nang-khieu',
        'PTNK - Truy vấn dãy số (NKSEQ)': '#exam-ptnk-2023-2024-e-thi-tuyen-sinh-pho-thong-nang-khieu',
        'PTNK - Chuỗi tương đồng (NKSTRING)': '#exam-ptnk-2023-2024-e-thi-tuyen-sinh-pho-thong-nang-khieu',
        'Sở GDĐT - CẶP SỐ (PAIRS)': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
        'Sở GDĐT - Vùng ảnh liên thông.': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
        'Sở GDĐT - Bài toán Bậc thang (vsteps)': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
        'Sở GDĐT - Xếp hạng huy chương.': '#exam-chuyen-e-so-gd-t-tong-hop-cac-nam-tuyen-tap-bai-toan-mang-chuoi-o-thi-so-gd-t',
        'Sở GDĐT - Bài toán tính tổng diện tích, vùng ảnh.': '#exam-chuyen-e-so-gd-t-tong-hop-cac-nam-tuyen-tap-bai-toan-mang-chuoi-o-thi-so-gd-t',
        'Sở GDĐT - Vùng ảnh liên thông': '#exam-chuyen-e-so-gd-t-tong-hop-cac-nam-tuyen-tap-bai-toan-mang-chuoi-o-thi-so-gd-t',
        'Sở GDĐT - Trạm thu phát sóng': '#exam-chuyen-e-so-gd-t-tong-hop-cac-nam-tuyen-tap-bai-toan-mang-chuoi-o-thi-so-gd-t',
        'PTNK - Bài toán đếm số lượng số nguyên tố (Subtask lớn).': '#exam-chuyen-e-ptnk-vnoi-tong-hop-nang-cao-tuyen-tap-pho-thong-nang-khieu-vnoi',
        'PTNK - Bài toán ghép chuỗi.': '#exam-chuyen-e-ptnk-vnoi-tong-hop-nang-cao-tuyen-tap-pho-thong-nang-khieu-vnoi',
        'VNOI - Cắt gỗ.': '#exam-chuyen-e-ptnk-vnoi-tong-hop-nang-cao-tuyen-tap-pho-thong-nang-khieu-vnoi',
        'Lê Hồng Phong - Thống kê dữ liệu lớn.': '#exam-chuyen-e-bo-sung-lhp-t-n-classic-kinh-ien-cau-truc-du-lieu-o-thi-cau-truc-map-va-quy-hoach-ong',
        'Trần Đại Nghĩa - Phân chia tài sản': '#exam-chuyen-e-bo-sung-lhp-t-n-classic-kinh-ien-cau-truc-du-lieu-o-thi-cau-truc-map-va-quy-hoach-ong',
        'Các bài toán nhóm bạn bè, mạng lưới giao thông cơ bản': '#exam-chuyen-e-bo-sung-lhp-t-n-classic-kinh-ien-cau-truc-du-lieu-o-thi-cau-truc-map-va-quy-hoach-ong',
        'Bài toán lập lịch dự án, công việc phụ thuộc': '#exam-chuyen-e-bo-sung-lhp-t-n-classic-kinh-ien-cau-truc-du-lieu-o-thi-cau-truc-map-va-quy-hoach-ong'
    };
}

if (typeof window.switchTab !== 'function') {
    window.switchTab = function switchTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('text-primary', 'font-medium');
            btn.classList.add('text-slate-500');
        });

        const target = document.getElementById('tab-' + tabName);
        if (target) target.classList.add('active');

        const targetBtn = document.querySelector(`[data-target="${tabName}"]`);
        if (targetBtn) {
            targetBtn.classList.remove('text-slate-500');
            targetBtn.classList.add('text-primary', 'font-medium');
        }

        if (tabName === 'home' && typeof window.renderOverview === 'function' && document.getElementById('overview-container').innerHTML.trim().length < 100) {
            window.renderOverview();
        }
        if (tabName === 'syllabus' && document.getElementById('syllabus-container').innerHTML.trim().length < 100) {
            window.renderSyllabus();
        }
        if (tabName === 'exams' && document.getElementById('exams-container').innerHTML.trim().length < 100) {
            window.renderExams();
        }
    };
}

if (typeof window.renderOverview !== 'function') {
    window.renderOverview = function renderOverview() {
        const container = document.getElementById('overview-container');
        if (!container || !Array.isArray(window.database)) {
            return;
        }

        container.innerHTML = window.database.map(phase => `
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
    };
}

window.gotoExamHash = function gotoExamHash(hash) {
    if (typeof window.switchTab === 'function') {
        window.switchTab('exams');
    }

    const targetHash = String(hash || '').startsWith('#') ? String(hash) : `#${String(hash || '')}`;
    let attempts = 0;

    const scrollToTarget = () => {
        const target = document.getElementById(targetHash.slice(1));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        if (attempts < 20) {
            attempts += 1;
            requestAnimationFrame(scrollToTarget);
        }
    };

    requestAnimationFrame(scrollToTarget);
    window.location.hash = targetHash;
    return false;
};

if (document.getElementById('overview-container') && document.getElementById('overview-container').innerHTML.trim().length < 100) {
    window.renderOverview();
}

function renderLessonExamRef(real) {
    if (typeof real === 'object' && real.school) {
        return `<button onclick="scrollToProblem('${real.school}', '${real.year}', ${real.problemIdx})" class="text-secondary-600 hover:text-primary-600 font-semibold underline block text-left transition-colors cursor-pointer mb-2">
            <i class="fa-solid fa-arrow-up-right-from-square mr-1 text-xs"></i> ✓ Đề ${real.school} (${real.year}) - ${escapeHtml(real.label)}
        </button>`;
    }
    const label = String(real);
    const href = window.lessonExamLinks?.[label];
    if (href) {
        return `<a href="${href}" onclick="return gotoExamHash('${href}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100 hover:border-sky-300 transition text-xs font-semibold shadow-sm mb-2 mr-2">
            <i class="fa-solid fa-building-columns text-sky-500 text-[10px]"></i>
            <span>↗ ${escapeHtml(label)}</span>
        </a>`;
    }
    return '';
}

// 3. NÂNG CẤP HÀM RENDER GIÁO ÁN
globalThis.renderSyllabus = function renderSyllabus() {
    if (typeof window.renderSyllabusBase === 'function') {
        return window.renderSyllabusBase();
    }

    const container = document.getElementById('syllabus-container');
    const syllabusDatabase = window.database || [];
    container.innerHTML = syllabusDatabase.filter(p => Object.keys(p).length > 0).map(phase => `
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
            <div class="space-y-2">
                ${phase.lessons.map(lesson => {
                    const renderedRealExams = (lesson.realExams || []).map(real => renderLessonExamRef(real)).filter(Boolean);
                    return `
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
                                ${renderedRealExams.length ? `
                                    <div class="bg-orange-50 border border-orange-100 p-3 rounded-2xl text-sm text-slate-800">
                                        <p class="font-bold text-orange-700 mb-2">Ứng dụng thực chiến trong đề thi:</p>
                                        <div class="mt-1">
                                            ${renderedRealExams.join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </details>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');
};

// 4. RENDER GIAO DIỆN KHO ĐỀ THI
globalThis.renderExams = function renderExams() {
    const container = document.getElementById('exams-container');
    let html = '';

    for (const [school, exams] of Object.entries(examLibraryFull)) {
        const headingHtml = school === 'PTNK'
            ? '<i class="fa-solid fa-crown text-amber-500 mr-2"></i> Trường Phổ Thông Năng Khiếu'
            : school === 'Sở GDĐT'
                ? '<i class="fa-solid fa-building-columns text-primary-500 mr-2"></i> Sở GD&ĐT TP.HCM (LHP, TĐN)'
                : `<i class="fa-solid fa-book-open text-accent-500 mr-2"></i> ${escapeHtml(school)}`;

        html += `
            <div class="mb-14">
                <h3 class="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-4 border-primary-500 font-heading inline-block">
                    ${headingHtml}
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
                                    const problemId = `${examId}-problem-${idx + 1}`;
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
};

// 5. LOGIC ĐIỀU HƯỚNG TỰ ĐỘNG TỪ BÀI HỌC QUA ĐỀ THI
window.scrollToProblem = function(school, year, problemIdx) {
    if (typeof switchTab === 'function') {
        switchTab('exams');
    }

    setTimeout(() => {
        const containers = document.querySelectorAll('[id^="exam-"]');
        let targetDetail = null;
        const schoolSlug = slugify(school);
        const yearSlug = slugify(year);

        containers.forEach(container => {
            const id = container.id;
            if (id.includes(schoolSlug) && id.includes(yearSlug)) {
                const detailsElements = container.querySelectorAll('details');
                if (detailsElements[problemIdx - 1]) {
                    targetDetail = detailsElements[problemIdx - 1];
                }
            }
        });

        if (targetDetail) {
            targetDetail.open = true;
            targetDetail.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            targetDetail.classList.add('bg-amber-50', 'ring-2', 'ring-amber-400', 'transition-all', 'duration-300');
            setTimeout(() => {
                targetDetail.classList.remove('bg-amber-50', 'ring-2', 'ring-amber-400');
            }, 2000);
        }
    }, 150);
};