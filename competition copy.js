const database = [
    {
        phaseId: 1,
        title: "GIAI ĐOẠN 1: NỀN TẢNG THỰC CHIẾN",
        time: "THÁNG 1 - 2", duration: "16 Buổi (48 Giờ)",
        bgClass: "bg-blue-600", textClass: "text-blue-600", lightBgClass: "bg-blue-50",
        desc: "Đập bỏ thói quen code chậm, làm quen hệ thống I/O siêu tốc và đánh giá Big O.",
        icon: "fa-seedling",
        requirements: "Không cần biết lập trình, chỉ cần tư duy Toán cấp 2.",
        topics: "Cú pháp Python, List Comprehension, Đánh giá Big O, Mảng 1D, Dict/Set.",
        output: "Viết code chuẩn thi đấu, không bị lỗi Time Limit do I/O.",
        lessons: [
            {
                session: "BUỔI 1", name: "Khai Giảng & Hệ Thống I/O Siêu Tốc",
                timeline: [
                    "[00:00 - 00:30] Khởi động: Cài đặt Python, VS Code. Giới thiệu hệ thống chấm bài Online Judge.",
                    "[00:30 - 01:00] Lý thuyết: Cấm dùng input(). Bản chất đọc file 1 lần bằng sys.stdin.read().split().",
                    "[01:00 - 01:30] Code cùng GV: Xây dựng Template chuẩn cho mọi bài thi.",
                    "[01:30 - 03:00] Thực chiến: Giải 3 bài tập cơ bản trên OJ."
                ],
                code: "import sys\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    print(int(data[0]) + int(data[1]))\n\nif __name__ == '__main__':\n    solve()",
                tasks: "1. Đăng nhập hệ thống OJ.\n2. Bài 1: Tính tổng A+B.\n3. Bài 2: Tính chu vi, diện tích hình chữ nhật với I/O siêu tốc."
            },
            {
                session: "BUỔI 2", name: "Toán Tử Logic & Câu Lệnh Rẽ Nhánh",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ: Review code các bài tập I/O buổi trước.",
                    "[00:30 - 01:15] Lý thuyết: Toán tử so sánh, and, or, not. Phép % và //.",
                    "[01:15 - 01:45] Code cùng GV: Kiểm tra năm nhuận, phân loại tam giác.",
                    "[01:45 - 03:00] Thực chiến: 5 bài tập phân loại số, xét điều kiện."
                ],
                code: "n = int(data[0])\nif (n % 4 == 0 and n % 100 != 0) or (n % 400 == 0):\n    print('YES')\nelse:\n    print('NO')",
                tasks: "1. Kiểm tra số chẵn lẻ.\n2. Phân loại tam giác (đều, cân, vuông).\n3. Giải phương trình bậc 1."
            },
            {
                session: "BUỔI 3", name: "Vòng Lặp For & Hàm Range()",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ: Các lỗi logic If/Else thường gặp.",
                    "[00:30 - 01:15] Lý thuyết: Cấu trúc lặp tuần tự. Hiểu tham số range(start, stop, step).",
                    "[01:15 - 01:45] Code cùng GV: Tính tổng S = 1 + 2 + ... + N. In dãy số lẻ.",
                    "[01:45 - 03:00] Thực chiến: Đếm số lượng ước số, tính giai thừa N!."
                ],
                code: "n = int(data[0])\ntotal = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        total += 1\nprint(total)",
                tasks: "1. In ra các số chẵn từ 1 đến N.\n2. Tính tổng bình phương các số từ 1 đến N.\n3. Đếm số lượng ước số của N."
            },
            {
                session: "BUỔI 4", name: "Vòng Lặp While & Kỹ Thuật Break/Continue",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ: Phân tích độ phức tạp khi dùng For.",
                    "[00:30 - 01:00] Lý thuyết: Khi nào dùng While thay vì For? Cảnh báo vòng lặp vô tận.",
                    "[01:00 - 01:45] Code cùng GV: Tách từng chữ số của một số nguyên bằng n % 10 và n //= 10.",
                    "[01:45 - 03:00] Thực chiến: Tìm tổng các chữ số, tìm chữ số lớn nhất."
                ],
                code: "n = int(data[0])\ntotal = 0\nwhile n > 0:\n    total += n % 10\n    n //= 10\nprint(total)",
                tasks: "1. Tính tổng các chữ số của N.\n2. Đảo ngược một số nguyên (VD: 123 -> 321).\n3. Tìm chữ số lớn nhất của N."
            },
            {
                session: "BUỔI 5", name: "Cấu Trúc Mảng 1 Chiều (List)",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ: Sửa bài đảo ngược số.",
                    "[00:30 - 01:15] Lý thuyết: Khai báo List. Các phương thức append, pop, insert.",
                    "[01:15 - 01:45] Code cùng GV: Tìm Max, Min trong mảng bằng vòng lặp.",
                    "[01:45 - 03:00] Thực chiến: Nhập mảng, đếm số lượng chẵn/lẻ."
                ],
                code: "n = int(data[0])\narr = [int(x) for x in data[1:n+1]]\nmax_val = arr[0]\nfor x in arr:\n    if x > max_val:\n        max_val = x\nprint(max_val)",
                tasks: "1. Nhập mảng N phần tử, in ra theo chiều đảo ngược.\n2. Tính trung bình cộng các phần tử dương.\n3. Đếm số phần tử chẵn, lẻ trong mảng."
            },
            {
                session: "BUỔI 6", name: "Ma Thuật List Comprehension",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ.",
                    "[00:30 - 01:15] Lý thuyết: Viết vòng lặp thu gọn 1 dòng. Khởi tạo Ma trận.",
                    "[01:15 - 01:45] Code cùng GV: Phân tích lỗi tham chiếu [[0]*M]*N. Cách viết đúng: [[0]*M for _ in range(N)].",
                    "[01:45 - 03:00] Thực chiến: Khởi tạo mảng nhanh, lọc số nguyên tố."
                ],
                code: "# Khởi tạo ma trận chuẩn\nrows, cols = 5, 5\ngrid = [[0] * cols for _ in range(rows)]\n# Lọc chẵn 1 dòng\nevens = [x for x in arr if x % 2 == 0]",
                tasks: "1. Tạo mảng chứa bình phương các số từ 1 đến N trong 1 dòng.\n2. Lọc ra các số chia hết cho 3 từ mảng ban đầu.\n3. Khởi tạo ma trận NxM toàn số 1."
            },
            {
                session: "BUỔI 7", name: "Bí Kíp Sinh Tồn: Đánh Giá Big O",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Quy tắc đếm phép toán. Ngưỡng: O(1), O(N), O(N log N), O(N^2).",
                    "[00:45 - 01:30] Quy tắc nhẩm nhanh: Python xử lý 10^7 phép tính/s.",
                    "[01:30 - 03:00] Thực chiến Debug: Tìm nguyên nhân code O(N^2) gây TLE và cách khắc phục."
                ],
                code: "import time\nstart = time.time()\n# Đoạn code cần test tốc độ\nfor i in range(10**7): pass\nprint('Time elapsed:', time.time() - start)",
                tasks: "1. Viết 2 đoạn code đếm số lượng cặp bằng nhau: 1 đoạn O(N^2) dùng 2 vòng for, 1 đoạn tối ưu O(N).\n2. Submit cả 2 lên OJ để quan sát lỗi TLE."
            },
            {
                session: "BUỔI 8", name: "Cấu Trúc Tập Hợp (Set) & O(1)",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ: Chữa các bài bị TLE buổi trước.",
                    "[00:30 - 01:15] Lý thuyết: Tại sao x in List mất O(N) nhưng x in Set mất O(1)?",
                    "[01:15 - 01:45] Code cùng GV: Khử trùng lặp mảng bằng list(set(arr)).",
                    "[01:45 - 03:00] Thực chiến: Đếm phần tử phân biệt, giao hợp tập hợp."
                ],
                code: "arr = [1, 2, 2, 3, 3, 3, 4]\nunique_elements = set(arr)\nprint(len(unique_elements)) # O(N)",
                tasks: "1. Đếm số lượng giá trị phân biệt trong mảng.\n2. Tìm các phần tử xuất hiện ở mảng A nhưng không có ở mảng B.\n3. Kiểm tra mảng có chứa phần tử trùng lặp hay không (trả về YES/NO)."
            },
            {
                session: "BUỔI 9", name: "Từ Điển (Dict / Hash Map)",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ.",
                    "[00:30 - 01:15] Lý thuyết: Lưu Key-Value. Xử lý lỗi KeyError. collections.Counter.",
                    "[01:15 - 01:45] Code cùng GV: Bài toán 2Sum (A+B=K) dùng Hash Map.",
                    "[01:45 - 03:00] Thực chiến: Đếm tần số xuất hiện, tìm phần tử đa số."
                ],
                code: "from collections import Counter\narr = [1, 2, 2, 3, 1, 4, 2]\nfreq = Counter(arr)\nprint(freq[2]) # In ra 3",
                tasks: "1. In ra tần số xuất hiện của mỗi phần tử trong mảng.\n2. Tìm phần tử xuất hiện nhiều lần nhất.\n3. Giải bài toán 2Sum với độ phức tạp O(N)."
            },
            {
                session: "BUỔI 10", name: "Thuật Toán Sắp Xếp (Sorting)",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ.",
                    "[00:30 - 01:15] Lý thuyết: Timsort O(N log N). Phân biệt list.sort() và sorted().",
                    "[01:15 - 01:45] Code cùng GV: Tùy biến key=lambda để sắp xếp đa điều kiện.",
                    "[01:45 - 03:00] Thực chiến: Sắp xếp học sinh theo Điểm giảm dần, Tên tăng dần."
                ],
                code: "students = [('An', 8), ('Binh', 9), ('Cuong', 8)]\nstudents.sort(key=lambda x: (-x[1], x[0]))\nprint(students)",
                tasks: "1. Sắp xếp mảng số nguyên tăng dần, giảm dần.\n2. Sắp xếp mảng chuỗi theo độ dài chuỗi.\n3. Bài toán xếp hạng: Xếp theo điểm số, nếu bằng điểm xếp theo ID."
            },
            {
                session: "BUỔI 11", name: "Mảng Cộng Dồn (Prefix Sum)",
                timeline: [
                    "[00:00 - 00:30] Đặt vấn đề: Tính tổng đoạn liên tục 10^5 lần.",
                    "[00:30 - 01:15] Giải thuật: S[i] = S[i-1] + A[i]. Công thức Sum(L, R) = S[R] - S[L-1].",
                    "[01:15 - 01:45] Code cùng GV: Cài đặt Prefix Sum với padding [0].",
                    "[01:45 - 03:00] Thực chiến: Giải quyết truy vấn tổng đoạn."
                ],
                code: "n = 5\narr = [2, 4, 1, 3, 5]\npref = [0] * (n + 1)\nfor i in range(1, n + 1):\n    pref[i] = pref[i-1] + arr[i-1]\n# Truy vấn tổng từ index 1 đến 3\nans = pref[3] - pref[0]\nprint(ans)",
                tasks: "1. Khởi tạo mảng cộng dồn.\n2. Trả lời Q truy vấn (L, R) tính tổng các phần tử từ chỉ số L đến R.\n3. Ứng dụng: Tìm mảng con độ dài K có tổng lớn nhất."
            },
            {
                session: "BUỔI 12", name: "Thực Chiến Prefix Sum",
                timeline: [
                    "[00:00 - 00:30] Sửa lỗi Index Out of Bounds thường gặp khi dùng Prefix Sum.",
                    "[00:30 - 03:00] Coding Bootcamp: Đếm số mảng con tổng K, Bài toán nhà hàng."
                ],
                code: "k = 5\npref_counts = {0: 1}\ncurr_sum = 0\nans = 0\nfor x in arr:\n    curr_sum += x\n    ans += pref_counts.get(curr_sum - k, 0)\n    pref_counts[curr_sum] = pref_counts.get(curr_sum, 0) + 1",
                tasks: "1. Đếm số mảng con có tổng đúng bằng K.\n2. Tìm mảng con có tổng chia hết cho M.\n3. Bài toán đếm số lượt khách trong nhà hàng."
            },
            {
                session: "BUỔI 13", name: "Xử Lý Chuỗi & Slicing",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ.",
                    "[00:30 - 01:15] Lý thuyết: Chuỗi là Immutable. Kỹ thuật cắt s[start:stop:step].",
                    "[01:15 - 01:45] Code cùng GV: Đảo ngược s[::-1]. Kiểm tra Palindrome.",
                    "[01:45 - 03:00] Thực chiến: Chuẩn hóa họ tên, đếm từ."
                ],
                code: "s = 'Truong Chuyen'\nprint(s[::-1]) # Đảo ngược chuỗi\nif s == s[::-1]:\n    print('Palindrome')",
                tasks: "1. Viết chương trình kiểm tra chuỗi đối xứng (Palindrome).\n2. Đếm số lượng từ trong một câu.\n3. Chuẩn hóa chuỗi: Loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu."
            },
            {
                session: "BUỔI 14", name: "Bảng Mã ASCII & Xử Lý Ký Tự",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ.",
                    "[00:30 - 01:15] Lý thuyết: Hàm ord() và chr() trong ASCII. Các hàm isupper, islower.",
                    "[01:15 - 01:45] Code cùng GV: Mã hóa vòng Caesar.",
                    "[01:45 - 03:00] Thực chiến: Kiểm tra tính hợp lệ mật khẩu, Thống kê ký tự."
                ],
                code: "char = 'A'\nshifted = chr((ord(char) - 65 + 3) % 26 + 65)\nprint(shifted) # Output: 'D' (Mã hóa Caesar)",
                tasks: "1. Mã hóa và giải mã chuỗi bằng thuật toán Caesar.\n2. Kiểm tra chuỗi password (có hoa, có thường, có số).\n3. Thống kê số lượng chữ cái, chữ số và ký tự đặc biệt trong chuỗi."
            },
            {
                session: "BUỔI 15", name: "Thiết Kế Hàm & Đệ Quy Cơ Bản",
                timeline: [
                    "[00:00 - 00:30] Tại sao phải chia nhỏ code thành Hàm?",
                    "[00:30 - 01:15] Lý thuyết: Từ khóa def, global, return. Khái niệm Call Stack.",
                    "[01:15 - 01:45] Code cùng GV: Viết hàm tính UCLN bằng Đệ quy.",
                    "[01:45 - 03:00] Thực chiến: Xây dựng thư viện các hàm Toán học cá nhân."
                ],
                code: "def gcd(a, b):\n    if b == 0: return a\n    return gcd(b, a % b)",
                tasks: "1. Viết hàm kiểm tra số nguyên tố.\n2. Viết hàm đệ quy tính N!.\n3. Viết hàm đệ quy tính số Fibonacci thứ N."
            },
            {
                session: "BUỔI 16", name: "Mock Test (Kiểm Tra Giai Đoạn 1)",
                timeline: [
                    "[00:00 - 00:15] Phổ biến quy chế thi: Không Internet, tự động chấm.",
                    "[00:15 - 03:00] Thi thực chiến 4 bài toán tổng hợp. Hệ thống tự động xếp hạng."
                ],
                code: "# Môi trường phòng thi - Học sinh tự viết 100% code.\nsys.stdin.read()",
                tasks: "Cấu trúc đề:\nBài 1: Logic If/Else (Nhận dạng tam giác).\nBài 2: Vòng lặp & Array (Thống kê điểm).\nBài 3: String (Xử lý chuỗi DNA).\nBài 4: Prefix Sum (Truy vấn tổng doanh thu)."
            }
        ]
    },

    {
        phaseId: 2,
        title: "GIAI ĐOẠN 2: TỐI ƯU HÓA & KỸ THUẬT MẢNG",
        time: "THÁNG 3 - 4", duration: "16 Buổi (48 Giờ)",
        bgClass: "bg-emerald-600", textClass: "text-emerald-600", lightBgClass: "bg-emerald-50",
        desc: "Làm chủ Two Pointers, Sliding Window, Custom Sort và Prefix Sum 2D.",
        icon: "fa-rocket",
        requirements: "Nắm vững Cấu trúc mảng và từ điển (Dict).",
        topics: "Hai con trỏ, Cửa sổ trượt, Nén tọa độ, Mảng Hiệu 1D.",
        output: "Giải quyết mượt mà các bài đếm cặp số giới hạn N=10^6.",
        lessons: [
            {
                session: "BUỔI 17", name: "Kỹ Thuật Hai Con Trỏ (Two Pointers) Ngược Chiều",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Dịch con trỏ l, r trên mảng đã sắp xếp để đạt O(N).",
                    "[00:45 - 01:30] Code mẫu: Tìm cặp A[i] + A[j] = K.",
                    "[01:30 - 03:00] Thực chiến: Đếm số cặp có hiệu < K."
                ],
                code: "arr.sort()\nl, r = 0, n - 1\nwhile l < r:\n    if arr[l] + arr[r] == k:\n        print(l, r); break\n    elif arr[l] + arr[r] < k: l += 1\n    else: r -= 1",
                tasks: "1. Tìm 2 số có tổng bằng K.\n2. Cặp số có tổng gần K nhất.\n3. Đếm số cặp (i, j) sao cho A[i] + A[j] <= K."
            },
            {
                session: "BUỔI 18", name: "Hai Con Trỏ Cùng Chiều & Gộp Mảng",
                timeline: [
                    "[00:00 - 00:30] Sửa bài cũ Two Pointers.",
                    "[00:30 - 01:15] Lý thuyết: Kỹ thuật gộp 2 mảng sắp xếp thành 1 mảng sắp xếp trong O(N+M).",
                    "[01:15 - 01:45] Code cùng GV: Thuật toán Merge.",
                    "[01:45 - 03:00] Thực chiến: Tìm phần tử chung của 2 mảng, Giao/Hợp mảng."
                ],
                code: "res = []\ni, j = 0, 0\nwhile i < len(a) and j < len(b):\n    if a[i] < b[j]: res.append(a[i]); i += 1\n    else: res.append(b[j]); j += 1\nres.extend(a[i:]); res.extend(b[j:])",
                tasks: "1. Trộn 2 mảng đã sắp xếp thành 1 mảng sắp xếp.\n2. Tìm giao của 2 mảng.\n3. Hợp của 2 mảng đã sắp xếp."
            },
            {
                session: "BUỔI 19", name: "Cửa Sổ Trượt (Sliding Window) Cố Định",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Khái niệm 'Vào một, ra một'. Tính tổng cửa sổ K phần tử.",
                    "[00:45 - 01:30] Code mẫu: Mảng con K phần tử có tổng lớn nhất.",
                    "[01:30 - 03:00] Thực chiến: Trung bình cộng lớn nhất, Số lượng số nguyên tố trong cửa sổ K."
                ],
                code: "window_sum = sum(arr[:k])\nmax_sum = window_sum\nfor i in range(k, n):\n    window_sum += arr[i] - arr[i-k]\n    max_sum = max(max_sum, window_sum)\nprint(max_sum)",
                tasks: "1. Tìm mảng con độ dài K có tổng lớn nhất.\n2. Đếm số lượng chuỗi con anagram trong một chuỗi lớn (dùng Dictionary window).\n3. Mảng con độ dài K có độ lệch Max-Min nhỏ nhất."
            },
            {
                session: "BUỔI 20", name: "Cửa Sổ Trượt Co Giãn (Variable Window)",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Cửa sổ nở ra (r tăng) cho đến khi vi phạm, sau đó thu hẹp (l tăng).",
                    "[00:45 - 01:30] Code mẫu: Đoạn con dài nhất có tổng <= S.",
                    "[01:30 - 03:00] Thực chiến: Đoạn con có số lượng số chẵn <= K."
                ],
                code: "l = curr_sum = max_len = 0\nfor r in range(n):\n    curr_sum += arr[r]\n    while curr_sum > S:\n        curr_sum -= arr[l]\n        l += 1\n    max_len = max(max_len, r - l + 1)",
                tasks: "1. Tìm chuỗi con dài nhất không chứa ký tự lặp lại.\n2. Mảng con liên tiếp có tổng đúng bằng S (cho mảng số dương).\n3. Đoạn con dài nhất chứa tối đa K số 0 (có thể lật bit)."
            },
            {
                session: "BUỔI 21", name: "Thực Chiến Two Pointers & Sliding Window",
                timeline: [
                    "[00:00 - 00:30] Sửa lỗi sai: Lỗi Index Out of Range khi cửa sổ trượt quá biên.",
                    "[00:30 - 03:00] Bootcamp: Set 5 bài tập thực chiến độ khó cấp Tỉnh/Thành phố."
                ],
                code: "# Code luyện tập đa dạng kỹ thuật tùy bài toán",
                tasks: "1. Bài toán: Subarrays with K Different Integers.\n2. Bài toán: Longest Repeating Character Replacement.\n3. Bài toán: Max Consecutive Ones III."
            },
            {
                session: "BUỔI 22", name: "Sắp Xếp Tùy Biến (Custom Sort & Lambda)",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Sức mạnh hàm Lambda. Tham số key trong hàm sort().",
                    "[00:45 - 01:30] Code mẫu: Sắp xếp đối tượng nhiều điều kiện (Điểm giảm dần, Tên tăng dần).",
                    "[01:30 - 03:00] Thực chiến: Xếp hạng Olympic."
                ],
                code: "# Điểm giảm dần (-x[0]), Thời gian tăng dần (x[1])\nstudents.sort(key=lambda x: (-x[0], x[1]))",
                tasks: "1. Sắp xếp danh sách điểm thi: Điểm giảm dần, nếu bằng thì ưu tiên ai nộp bài sớm hơn.\n2. Sắp xếp mảng chuỗi theo số lượng ký tự 'a' xuất hiện.\n3. Bài toán: Ghép số tạo thành số lớn nhất (VD: 9, 34 -> 934)."
            },
            {
                session: "BUỔI 23", name: "Kỹ Thuật Nén Tọa Độ (Coordinate Compression)",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Map dữ liệu 10^18 về 1->N để tiết kiệm RAM.",
                    "[00:45 - 01:30] Code mẫu: list -> set -> sort -> dict mapping.",
                    "[01:30 - 03:00] Thực chiến: Đếm phân phối dữ liệu khổng lồ."
                ],
                code: "sorted_unique = sorted(list(set(arr)))\nmapping = {val: idx for idx, val in enumerate(sorted_unique)}\ncompressed_arr = [mapping[x] for x in arr]",
                tasks: "1. Rời rạc hóa mảng A (Các phần tử biến thành thứ hạng của nó từ 1 đến N).\n2. Ứng dụng nén tọa độ cho mảng 10^5 phần tử nhưng giá trị lên đến 10^18."
            },
            {
                session: "BUỔI 24", name: "Nhập Môn Tham Lam (Greedy) Cơ Bản",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Nguyên lý lựa chọn cục bộ tốt nhất.",
                    "[00:45 - 01:30] Code mẫu: Bài toán xếp lịch (Sort theo thời gian kết thúc).",
                    "[01:30 - 03:00] Thực chiến: Bài toán trả tiền lẻ, Lựa chọn đồ vật."
                ],
                code: "intervals.sort(key=lambda x: x[1])\ncount = 0; end_time = -1\nfor start, end in intervals:\n    if start >= end_time:\n        count += 1\n        end_time = end",
                tasks: "1. Đổi tiền ít tờ nhất (cho các mệnh giá chuẩn).\n2. Lập lịch hội trường: Chọn được nhiều cuộc họp nhất.\n3. Chia kẹo cho trẻ em (Cookie distribution)."
            },
            {
                session: "BUỔI 25", name: "Mảng Cộng Dồn 2 Chiều (Prefix Sum 2D)",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Nguyên lý bù trừ diện tích hình chữ nhật.",
                    "[00:45 - 01:30] Code mẫu: Xây dựng mảng pref 2D với padding viền 0.",
                    "[01:30 - 03:00] Thực chiến: Tổng diện tích khu vườn, Mật độ cây trồng."
                ],
                code: "pref[i][j] = pref[i-1][j] + pref[i][j-1] - pref[i-1][j-1] + matrix[i-1][j-1]\n# Truy vấn HCN (r1,c1) đến (r2,c2)\nans = pref[r2][c2] - pref[r1-1][c2] - pref[r2][c1-1] + pref[r1-1][c1-1]",
                tasks: "1. Khai báo và tạo bảng Prefix Sum 2D.\n2. Truy vấn Q lần tổng phần tử trong hình chữ nhật (x1, y1, x2, y2).\n3. Đếm số hình chữ nhật con có tổng bằng 0."
            },
            {
                session: "BUỔI 26", name: "Mảng Hiệu (Difference Array)",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Cập nhật cộng thêm V vào đoạn [L, R] mất O(1).",
                    "[00:45 - 01:30] Code mẫu: D[i] = A[i] - A[i-1]. Lệnh thần chú D[L] += V, D[R+1] -= V.",
                    "[01:30 - 03:00] Thực chiến: Bài toán nhà thầu đắp đường, Tàu hỏa."
                ],
                code: "diff = [0] * (n + 2)\ndef update(l, r, v):\n    diff[l] += v\n    diff[r + 1] -= v\n# Sau khi update, Prefix sum lại mảng diff sẽ thu được kết quả.",
                tasks: "1. Cho mảng toàn 0, Q truy vấn cộng dồn v vào đoạn [L, R]. In ra mảng cuối cùng.\n2. Bài toán đặt vé tàu: Kiểm tra xem tàu có bị quá tải không."
            },
            {
                session: "BUỔI 27", name: "Toán Tử Bitwise (Thao Tác Bit)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: AND (&), OR (|), XOR (^), Dịch bit (<<, >>).",
                    "[01:00 - 01:45] Code mẫu: Dùng XOR tìm số lẻ loi, dùng & kiểm tra số chẵn lẻ.",
                    "[01:45 - 03:00] Thực chiến: Các bài toán tối ưu cấp thấp."
                ],
                code: "ans = 0\nfor x in arr:\n    ans ^= x  # Tìm số xuất hiện 1 lần trong mảng các số xuất hiện 2 lần",
                tasks: "1. Kiểm tra số chẵn/lẻ bằng toán tử AND.\n2. Đổi chỗ 2 biến không dùng biến tạm (a = a^b, b = a^b, a = a^b).\n3. Tìm số xuất hiện lẻ lần trong mảng."
            },
            {
                session: "BUỔI 28", name: "Mặt Nạ Bit (Bit Masking)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Biểu diễn tập con bằng số nguyên (Subset generation).",
                    "[01:00 - 01:45] Code mẫu: Sinh 2^N tập con bằng vòng lặp.",
                    "[01:45 - 03:00] Thực chiến: Tổng tập con bằng K."
                ],
                code: "for mask in range(1 << n):\n    subset_sum = 0\n    for i in range(n):\n        if mask & (1 << i):\n            subset_sum += arr[i]",
                tasks: "1. Sinh tất cả các tập con của mảng N phần tử.\n2. Tìm tập con có tổng đúng bằng K (với N <= 20)."
            },
            {
                session: "BUỔI 29", name: "Trại Code Thực Chiến (Bootcamp Đề Sở)",
                timeline: [
                    "[00:00 - 03:00] Luyện giải đề chuyên tin Sở GD&ĐT cấp THCS."
                ],
                code: "# Code luyện tập tùy chỉnh do học sinh thực hiện.",
                tasks: "1. Giải bài 1, 2 đề thi Tin học trẻ.\n2. Giải bài thi học sinh giỏi cấp Thành Phố."
            },
            {
                session: "BUỔI 30", name: "Trại Code Thực Chiến (Bootcamp Đề PTNK)",
                timeline: [
                    "[00:00 - 03:00] Luyện giải đề chuyên tin PTNK, rèn luyện tư duy toán tin."
                ],
                code: "# Code luyện tập tùy chỉnh do học sinh thực hiện.",
                tasks: "1. Giải bài mảng trong đề PTNK.\n2. Vận dụng kỹ thuật Mảng cộng dồn 2D vào đề thi thật."
            },
            {
                session: "BUỔI 31", name: "Ôn Tập Tổng Hợp Giai Đoạn 2",
                timeline: [
                    "[00:00 - 01:30] Sửa lỗi sai thường gặp của toàn Giai đoạn 2.",
                    "[01:30 - 03:00] Hệ thống hóa: Khi nào dùng Prefix Sum, khi nào Two Pointers."
                ],
                code: "# Tổng kết tư duy thuật toán.",
                tasks: "Làm bài test lý thuyết thuật toán và độ phức tạp."
            },
            {
                session: "BUỔI 32", name: "Mock Test (Kiểm Tra Giai Đoạn 2)",
                timeline: [
                    "[00:00 - 03:00] Thi 4 bài: Sort đa điều kiện, Two Pointers, Sliding Window, Prefix Sum 2D."
                ],
                code: "# Môi trường thi thử.",
                tasks: "1. Bài 1: Nén tọa độ.\n2. Bài 2: Cửa sổ trượt.\n3. Bài 3: Two Pointers.\n4. Bài 4: Prefix Sum 2D."
            }
        ]
    },

    {
        phaseId: 3,
        title: "GIAI ĐOẠN 3: TOÁN THUẬT TOÁN",
        time: "THÁNG 5", duration: "8 Buổi (24 Giờ)",
        bgClass: "bg-purple-600", textClass: "text-purple-600", lightBgClass: "bg-purple-50",
        desc: "Vượt qua trọn vẹn 'Câu Số Học' luôn xuất hiện trong đề Sở & Năng Khiếu.",
        icon: "fa-calculator",
        requirements: "Tư duy Toán số học và Đại số vững vàng.",
        topics: "Sàng Eratosthenes, Modulo, Lũy thừa nhị phân, Phân tích thừa số.",
        output: "Lấy trọn điểm các bài toán số học lớn.",
        lessons: [
            {
                session: "BUỔI 33", name: "Số Nguyên Tố & Sàng Eratosthenes",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Kiểm tra NT trong O(căn N). Bản chất Sàng sinh số NT.",
                    "[01:00 - 01:45] Code mẫu: Cài đặt mảng boolean để tối ưu RAM.",
                    "[01:45 - 03:00] Thực chiến: Tìm cặp số NT."
                ],
                code: "def sieve(n):\n    prime = [True] * (n+1)\n    prime[0] = prime[1] = False\n    for i in range(2, int(n**0.5) + 1):\n        if prime[i]:\n            for j in range(i*i, n+1, i):\n                prime[j] = False\n    return prime",
                tasks: "1. In ra tất cả số nguyên tố <= N.\n2. Cài đặt thuật toán Sàng Eratosthenes với N = 10^7."
            },
            {
                session: "BUỔI 34", name: "Ứng Dụng Sàng Nguyên Tố",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Sàng trên đoạn [L, R] với giá trị L, R lớn.",
                    "[01:00 - 03:00] Thực chiến: Các bài toán biến thể của Sàng."
                ],
                code: "# Segmented Sieve logic",
                tasks: "1. Đếm số lượng số nguyên tố trong đoạn [L, R].\n2. Khoảng cách gần nhất giữa 2 số nguyên tố liên tiếp."
            },
            {
                session: "BUỔI 35", name: "Phân Tích Thừa Số Nguyên Tố",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Vòng lặp chia liên tục để phân tích thừa số.",
                    "[01:00 - 01:45] Code mẫu: Phân tích N trong O(căn N).",
                    "[01:45 - 03:00] Thực chiến: Đếm số lượng ước số dựa trên thừa số."
                ],
                code: "factors = []\nd = 2\nwhile d * d <= n:\n    while (n % d) == 0:\n        factors.append(d)\n        n //= d\n    d += 1\nif n > 1: factors.append(n)",
                tasks: "1. In ra cấu hình thừa số nguyên tố của N (VD: 12 = 2^2 * 3^1).\n2. Ứng dụng công thức tính số lượng ước số của N."
            },
            {
                session: "BUỔI 36", name: "Toán Học: UCLN (GCD) & BCNN (LCM)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Thuật toán Euclid tính GCD. Tính BCNN qua GCD.",
                    "[01:00 - 01:45] Code mẫu: Sử dụng math.gcd.",
                    "[01:45 - 03:00] Thực chiến: Rút gọn phân số, phương trình Diophantine."
                ],
                code: "import math\na, b = 12, 18\ngcd_val = math.gcd(a, b)\nlcm_val = (a * b) // gcd_val",
                tasks: "1. Viết hàm đệ quy tính GCD tự làm.\n2. Tính LCM của một mảng N phần tử.\n3. Rút gọn phân số tử/mẫu."
            },
            {
                session: "BUỔI 37", name: "Đồng Dư Thức (Modulo Arithmetic)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Quy tắc cộng, trừ, nhân modulo (A*B) % M. Tránh tràn số.",
                    "[01:00 - 03:00] Thực chiến: Tính chữ số tận cùng, Tính giai thừa dư."
                ],
                code: "MOD = 10**9 + 7\n# Phép cộng modulo\nres = (a % MOD + b % MOD) % MOD",
                tasks: "1. Tính (A + B) % MOD, (A * B) % MOD với số cực lớn.\n2. Tính N! modulo 10^9+7.\n3. Tìm chữ số tận cùng của A^B."
            },
            {
                session: "BUỔI 38", name: "Lũy Thừa Nhị Phân & Nghịch Đảo Modulo",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Tính A^B % M cực nhanh. Định lý Fermat nhỏ.",
                    "[01:00 - 01:45] Code mẫu: Hàm pow(a, b, mod).",
                    "[01:45 - 03:00] Thực chiến: Phép chia Modulo."
                ],
                code: "MOD = 10**9 + 7\n# Tính A^B % M cực nhanh:\nans = pow(a, b, MOD)\n# Nghịch đảo modulo của A\ninvA = pow(a, MOD - 2, MOD)",
                tasks: "1. Cài đặt thuật toán Binary Exponentiation tự làm.\n2. Tính tổ hợp chập K của N (C(N,K)) modulo 10^9+7 bằng Nghịch đảo modulo."
            },
            {
                session: "BUỔI 39", name: "Hệ Cơ Số (Base Conversion)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Chuyển đổi Cơ số 2, 10, 16 bằng bin(), hex(), int(s, base).",
                    "[01:00 - 03:00] Thực chiến: Xử lý chuỗi nhị phân."
                ],
                code: "num = int('1010', 2) # Binary to Int\nbin_str = bin(10)[2:] # Int to Binary",
                tasks: "1. Viết hàm chuyển từ cơ số 10 sang cơ số X (X <= 16).\n2. Cộng hai số nhị phân siêu lớn dạng chuỗi."
            },
            {
                session: "BUỔI 40", name: "Thực Chiến Toán Số Học Tổng Hợp",
                timeline: [
                    "[00:00 - 03:00] Bootcamp: Giải full 5 bài Số học trong đề thi PTNK các năm."
                ],
                code: "# Code luyện tập tự do",
                tasks: "1. Bài tập về số nguyên tố trong đề Năng Khiếu.\n2. Bài tập dãy số quy luật đồng dư."
            }
        ]
    },

    {
        phaseId: 4,
        title: "GIAI ĐOẠN 4: THUẬT TOÁN PHÂN LOẠI",
        time: "THÁNG 6 - 7", duration: "16 Buổi (48 Giờ)",
        bgClass: "bg-orange-500", textClass: "text-orange-500", lightBgClass: "bg-orange-50",
        desc: "Giải quyết Bài 2 & 3. Tham lam, Binary Search và Đồ thị loang.",
        icon: "fa-network-wired",
        requirements: "Rèn luyện đủ 3 tháng thuật toán nền.",
        topics: "Tham lam (Greedy), Chặt nhị phân kết quả, Đồ thị BFS/DFS.",
        output: "Đạt mốc 6.0 - 7.0 điểm an toàn trong kỳ thi thật.",
        lessons: [
            {
                session: "BUỔI 41", name: "Chặt Nhị Phân (Binary Search) Cơ Bản",
                timeline: [
                    "[00:00 - 00:45] Lý thuyết: Thuật toán chia để trị, giảm O(N) xuống O(log N).",
                    "[00:45 - 01:30] Code mẫu: Cài đặt bằng while (left <= right).",
                    "[01:30 - 03:00] Thực chiến: Tìm phần tử trong mảng."
                ],
                code: "l, r = 0, n - 1\nwhile l <= r:\n    mid = (l + r) // 2\n    if arr[mid] == target: print('Found'); break\n    elif arr[mid] < target: l = mid + 1\n    else: r = mid - 1",
                tasks: "1. Tìm vị trí xuất hiện của X trong mảng đã sắp xếp.\n2. Tìm vị trí đầu tiên xuất hiện của X (Lower Bound)."
            },
            {
                session: "BUỔI 42", name: "Binary Search với thư viện Bisect",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: bisect_left và bisect_right trong Python.",
                    "[01:00 - 03:00] Thực chiến: Đếm số lượng x trong đoạn."
                ],
                code: "import bisect\nidx_left = bisect.bisect_left(arr, target)\nidx_right = bisect.bisect_right(arr, target)\ncount = idx_right - idx_left",
                tasks: "1. Đếm số lượng phần tử X trong mảng O(log N).\n2. Tìm số lượng phần tử nằm trong khoảng [A, B]."
            },
            {
                session: "BUỔI 43", name: "Binary Search On Answer (Tìm Min của Max)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Chuyển bài toán tối ưu thành bài toán kiểm tra (Hàm Check).",
                    "[01:00 - 01:45] Code mẫu: Khung chuẩn BS on Answer.",
                    "[01:45 - 03:00] Thực chiến: Bài toán phân chia sách."
                ],
                code: "def check(mid):\n    # Hàm kiểm tra logic\n    return True\n\nleft, right = 1, 10**18\nans = -1\nwhile left <= right:\n    mid = (left + right) // 2\n    if check(mid):\n        ans = mid\n        right = mid - 1 # Tìm Min\n    else:\n        left = mid + 1",
                tasks: "1. Phân chia mảng thành K phần sao cho tổng lớn nhất của các phần là nhỏ nhất.\n2. Bài toán: Xếp bò vào chuồng."
            },
            {
                session: "BUỔI 44", name: "Binary Search On Answer (Tìm Max của Min)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: BS On Answer đảo ngược điều kiện.",
                    "[01:00 - 03:00] Thực chiến: Phân lô gỗ, Cắt cáp."
                ],
                code: "def check(mid):\n    count = sum(x // mid for x in arr)\n    return count >= k",
                tasks: "1. Bài toán cắt cáp: Cắt N sợi cáp thành K sợi có độ dài bằng nhau sao cho dài nhất.\n2. Cắt gỗ: Chặt cây theo chiều cao H."
            },
            {
                session: "BUỔI 45", name: "Luyện Tập Binary Search On Answer",
                timeline: [
                    "[00:00 - 03:00] Bootcamp: 5 bài luyện tập cường độ cao."
                ],
                code: "# Giải bài tập theo chuyên đề",
                tasks: "1. Koko eating bananas.\n2. Capacity To Ship Packages Within D Days."
            },
            {
                session: "BUỔI 46", name: "Nhập Môn Tham Lam (Greedy)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Tại sao tham lam lại đúng? Chứng minh bằng phản chứng.",
                    "[01:00 - 03:00] Thực chiến: Bài toán cái ba lô Fractional Knapsack."
                ],
                code: "items.sort(key=lambda x: x.value / x.weight, reverse=True)",
                tasks: "1. Lấy đồ vật để túi có giá trị lớn nhất (được phép cắt nhỏ đồ).\n2. Bài toán trạm đổ xăng."
            },
            {
                session: "BUỔI 47", name: "Greedy: Xếp Lịch Sự Kiện",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Tham lam theo thời gian kết thúc.",
                    "[01:00 - 03:00] Thực chiến: Xếp lịch không chồng chéo."
                ],
                code: "events.sort(key=lambda x: x.end)\nlast_end = -1; cnt = 0\nfor e in events:\n    if e.start >= last_end:\n        cnt += 1\n        last_end = e.end",
                tasks: "1. Activity Selection Problem.\n2. Tìm số lượng tối thiểu phòng họp cần thiết."
            },
            {
                session: "BUỔI 48", name: "Greedy kết hợp Hàng Đợi Ưu Tiên (Heapq)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Giới thiệu thư viện heapq (Min Heap).",
                    "[01:00 - 03:00] Thực chiến: Bài toán nối dây."
                ],
                code: "import heapq\nheapq.heapify(arr)\nwhile len(arr) > 1:\n    a = heapq.heappop(arr)\n    b = heapq.heappop(arr)\n    heapq.heappush(arr, a + b)",
                tasks: "1. Nối N sợi dây với chi phí nhỏ nhất.\n2. K phần tử lớn nhất trong mảng."
            },
            {
                session: "BUỔI 49", name: "Nhập Môn Đồ Thị & Biểu Diễn Đồ Thị",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Đỉnh (Vertex), Cạnh (Edge), Vô hướng, Có hướng.",
                    "[01:00 - 01:45] Code mẫu: Tạo Danh sách kề bằng collections.defaultdict.",
                    "[01:45 - 03:00] Thực chiến: Đếm bậc đồ thị, Tìm đỉnh cô lập."
                ],
                code: "from collections import defaultdict\ngraph = defaultdict(list)\nfor u, v in edges:\n    graph[u].append(v)\n    graph[v].append(u) # Vô hướng",
                tasks: "1. Nhập M cạnh, chuyển thành ma trận kề.\n2. Chuyển ma trận kề thành danh sách kề.\n3. In ra các đỉnh kề của đỉnh U."
            },
            {
                session: "BUỔI 50", name: "Duyệt Đồ Thị Chiều Rộng (BFS Cơ bản)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Tìm đường đi ngắn nhất không trọng số. Queue FIFO.",
                    "[01:00 - 01:45] Code mẫu: Cấm dùng list.pop(0). Bắt buộc dùng deque.",
                    "[01:45 - 03:00] Thực chiến: Duyệt theo tầng."
                ],
                code: "from collections import deque\nq = deque([start_node])\nvisited = {start_node}\nwhile q:\n    curr = q.popleft()\n    for neighbor in graph[curr]:\n        if neighbor not in visited:\n            visited.add(neighbor)\n            q.append(neighbor)",
                tasks: "1. In ra thứ tự duyệt BFS từ đỉnh 1.\n2. Tìm đường đi ngắn nhất (số cạnh ít nhất) từ A đến B."
            },
            {
                session: "BUỔI 51", name: "Thuật Toán Loang Lưới (BFS Mê Cung)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Ứng dụng BFS trên mặt phẳng tọa độ lưới.",
                    "[01:00 - 03:00] Thực chiến: Lối thoát mê cung (Maze)."
                ],
                code: "for dr, dc in [(0,1), (1,0), (0,-1), (-1,0)]:\n    nr, nc = r+dr, c+dc\n    if valid(nr, nc) and not visited[nr][nc]:\n        # Process",
                tasks: "1. Đếm số bước ngắn nhất thoát khỏi mê cung (O là đường đi, 1 là tường).\n2. Mã đi tuần (Knight's tour) tìm đường ngắn nhất."
            },
            {
                session: "BUỔI 52", name: "BFS Đa Nguồn (Multi-source BFS)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Bỏ nhiều điểm khởi đầu vào Queue cùng lúc.",
                    "[01:00 - 03:00] Thực chiến: Bài toán lửa cháy, Bệnh dịch."
                ],
                code: "q = deque(all_sources)\n# Khởi tạo visited = all_sources\n# Chạy BFS bình thường",
                tasks: "1. Tìm khoảng cách từ mọi điểm 빈 trên bản đồ tới vòi nước gần nhất.\n2. Rotten Oranges: Tính thời gian tất cả cam bị hỏng."
            },
            {
                session: "BUỔI 53", name: "Thực Chiến BFS",
                timeline: [
                    "[00:00 - 03:00] Giải 4 bài tập dạng loang phức tạp."
                ],
                code: "# Code luyện tập nhóm",
                tasks: "1. Word Ladder (Tìm đường đổi chữ).\n2. BFS có lưu vết đường đi."
            },
            {
                session: "BUỔI 54", name: "Duyệt Đồ Thị Chiều Sâu (DFS)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Stack LIFO. Đệ quy. Thiết lập sys.setrecursionlimit.",
                    "[01:00 - 01:45] Code mẫu: Hàm đệ quy duyệt.",
                    "[01:45 - 03:00] Thực chiến: Đi sâu nhất có thể."
                ],
                code: "import sys\nsys.setrecursionlimit(10**6)\ndef dfs(node):\n    visited.add(node)\n    for neighbor in graph[node]:\n        if neighbor not in visited:\n            dfs(neighbor)",
                tasks: "1. In ra thứ tự DFS từ đỉnh 1.\n2. Kiểm tra đồ thị có tính liên thông hay không."
            },
            {
                session: "BUỔI 55", name: "Ứng Dụng DFS: Đếm Vùng Liên Thông",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Connected Components.",
                    "[01:00 - 03:00] Thực chiến: Bài toán đếm số hòn đảo."
                ],
                code: "count = 0\nfor i in range(1, N+1):\n    if i not in visited:\n        dfs(i)\n        count += 1",
                tasks: "1. Number of Islands.\n2. Đếm số lượng phòng trong bản đồ nhà."
            },
            {
                session: "BUỔI 56", name: "Thi Chuyển Giai Đoạn 4",
                timeline: [
                    "[00:00 - 03:00] Thi 4 bài: Greedy, BS on Answer, BFS Mê cung, DFS Vùng liên thông."
                ],
                code: "# Môi trường thi thử",
                tasks: "Kiểm tra thực chiến kiến thức đồ thị và tìm kiếm nhị phân."
            }
        ]
    },

    {
        phaseId: 5,
        title: "GIAI ĐOẠN 5: QUY HOẠCH ĐỘNG (DP)",
        time: "THÁNG 8", duration: "8 Buổi (24 Giờ)",
        bgClass: "bg-red-500", textClass: "text-red-500", lightBgClass: "bg-red-50",
        desc: "Vũ khí hạng nặng lấy điểm Bài 4, Bài 5. Cạnh tranh vị trí Thủ Khoa.",
        icon: "fa-crown",
        requirements: "Đệ quy cực tốt, logic phân tích nhạy bén.",
        topics: "DP Top-down với @cache, Bài toán Cái túi (Knapsack), LIS, LCS.",
        output: "Làm chủ Quy hoạch động mà không cần viết mảng 2D phức tạp.",
        lessons: [
            {
                session: "BUỔI 57", name: "Tư Duy DP Top-Down & Decorator @cache",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Phân rã bài toán con. Sự vi diệu của Memoization.",
                    "[01:00 - 01:45] Code mẫu: Tính Fibonacci O(N) không dùng vòng lặp.",
                    "[01:45 - 03:00] Thực chiến: Bài toán leo cầu thang."
                ],
                code: "import sys\nfrom functools import cache\nsys.setrecursionlimit(10**6)\n\n@cache\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)",
                tasks: "1. Cài đặt Fibonacci có cache.\n2. Leo cầu thang (Climbing Stairs) đi 1 bước hoặc 2 bước.\n3. Đếm số cách phủ bảng 2xN bằng domino."
            },
            {
                session: "BUỔI 58", name: "DP 1 Chiều: Dãy Con Tăng Dài Nhất (LIS)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Gọi dp(i) là độ dài LIS kết thúc tại i. Công thức truy hồi.",
                    "[01:00 - 01:45] Code mẫu: Cài đặt O(N^2) bằng mảng dp.",
                    "[01:45 - 03:00] Thực chiến: Dãy con giảm dài nhất."
                ],
                code: "dp = [1] * n\nfor i in range(1, n):\n    for j in range(i):\n        if arr[i] > arr[j]:\n            dp[i] = max(dp[i], dp[j] + 1)\nprint(max(dp))",
                tasks: "1. Tìm LIS O(N^2).\n2. Tìm dãy con Bitonic dài nhất (tăng rồi giảm)."
            },
            {
                session: "BUỔI 59", name: "LIS Mở Rộng O(N log N)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Dùng mảng tail và Binary Search (bisect) để giảm độ phức tạp.",
                    "[01:00 - 03:00] Thực chiến: Áp dụng cho N = 10^5."
                ],
                code: "import bisect\ntail = []\nfor x in arr:\n    pos = bisect.bisect_left(tail, x)\n    if pos == len(tail): tail.append(x)\n    else: tail[pos] = x\nprint(len(tail))",
                tasks: "1. Giải bài toán Xếp Búp bê (Russian Dolls) ứng dụng LIS O(NlogN).\n2. Maximum Length of Pair Chain."
            },
            {
                session: "BUỔI 60", name: "DP 2 Chiều: Xâu Con Chung Dài Nhất (LCS)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: So sánh s1[i] và s2[j].",
                    "[01:00 - 01:45] Code mẫu: dp(i, j) = 1 + dp(i-1, j-1) nếu bằng nhau.",
                    "[01:45 - 03:00] Thực chiến: Cài đặt Bottom-up O(N*M)."
                ],
                code: "dp = [[0] * (m + 1) for _ in range(n + 1)]\nfor i in range(1, n + 1):\n    for j in range(1, m + 1):\n        if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1\n        else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])",
                tasks: "1. Tìm độ dài LCS của 2 chuỗi.\n2. Truy vết in ra chuỗi chung đó."
            },
            {
                session: "BUỔI 61", name: "Ứng Dụng LCS: Khoảng Cách Edit Distance",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Số phép xóa, chèn, sửa ít nhất để biến chuỗi A thành B.",
                    "[01:00 - 03:00] Thực chiến: Bài toán sửa lỗi chính tả."
                ],
                code: "if s1[i-1] == s2[j-1]:\n    dp[i][j] = dp[i-1][j-1]\nelse:\n    dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])",
                tasks: "1. Tính khoảng cách Levenshtein.\n2. Biến chuỗi thành chuỗi đối xứng bằng ít phép chèn nhất."
            },
            {
                session: "BUỔI 62", name: "Bài Toán Cái Túi (Knapsack 0/1)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Trạng thái dp(idx, current_weight). Chọn hoặc Bỏ qua.",
                    "[01:00 - 01:45] Code mẫu: Top-down với @cache.",
                    "[01:45 - 03:00] Thực chiến: Đi cướp ngân hàng."
                ],
                code: "@cache\ndef dp(idx, weight_left):\n    if idx == n or weight_left == 0: return 0\n    res = dp(idx + 1, weight_left) # Bỏ qua\n    if weights[idx] <= weight_left:\n        res = max(res, values[idx] + dp(idx + 1, weight_left - weights[idx]))\n    return res",
                tasks: "1. Giải bài toán balo 0/1 kinh điển.\n2. Partition Equal Subset Sum (Chia mảng thành 2 phần tổng bằng nhau)."
            },
            {
                session: "BUỔI 63", name: "Bài Toán Cái Túi Vô Hạn (Unbounded Knapsack)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Một món đồ được nhặt nhiều lần. Chỉnh sửa dp.",
                    "[01:00 - 03:00] Thực chiến: Đổi tiền xu (Coin Change)."
                ],
                code: "dp = [float('inf')] * (amount + 1)\ndp[0] = 0\nfor coin in coins:\n    for x in range(coin, amount + 1):\n        dp[x] = min(dp[x], dp[x - coin] + 1)",
                tasks: "1. Bài toán Coin Change (Số lượng đồng xu ít nhất).\n2. Cắt thanh sắt bán lấy giá lớn nhất."
            },
            {
                session: "BUỔI 64", name: "DP Trên Lưới (Grid DP)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Đi từ (0,0) đến (N,M) chỉ được sang phải/xuống dưới.",
                    "[01:00 - 03:00] Thực chiến: Đếm số đường đi, Hái nấm max."
                ],
                code: "dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j]",
                tasks: "1. Tìm đường đi có tổng lớn nhất.\n2. Đếm số cách đi đến đích (Unique Paths) với vật cản."
            }
        ]
    },

    {
        phaseId: 6,
        title: "GIAI ĐOẠN 6: THỰC CHIẾN LẤY GIẢI",
        time: "THÁNG 9", duration: "8 Buổi (24 Giờ)",
        bgClass: "bg-indigo-600", textClass: "text-indigo-600", lightBgClass: "bg-indigo-50",
        desc: "Kỹ năng Subtasking vét cạn cứu điểm liệt, giải full đề thi thật.",
        icon: "fa-stopwatch",
        requirements: "Hoàn thành 95% kiến thức thuật toán.",
        topics: "Vét cạn (Brute Force) dùng itertools, Cấu trúc testcase, Quản lý thời gian.",
        output: "Phản xạ phòng thi nhạy bén, biết cách vét điểm nhỏ khi bí bài lớn.",
        lessons: [
            {
                session: "BUỔI 65", name: "Nghệ Thuật Subtasking & Vét Cạn (Brute Force)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Phân tích cấu trúc testcase (20% N<=10, 30% N<=1000).",
                    "[01:00 - 01:45] Code mẫu: Lấy 1 bài điểm 10 Đề QG, yêu cầu học sinh vét cạn lấy 3 điểm.",
                    "[01:45 - 03:00] Thực chiến: Các kỹ thuật 2 vòng for trâu bò."
                ],
                code: "# Code lấy 30 điểm khi không biết thuật toán chuẩn O(N)\nans = 0\nfor i in range(n):\n    for j in range(i+1, n):\n        if check(arr[i], arr[j]): ans += 1",
                tasks: "1. Đọc giới hạn N=20 -> Suy ra chạy quay lui đệ quy.\n2. Đọc N=1000 -> Suy ra chạy O(N^2).\n3. Đọc N=10^5 -> Bắt buộc suy nghĩ thuật O(N log N)."
            },
            {
                session: "BUỔI 66", name: "Thư Viện Vét Cạn (Itertools)",
                timeline: [
                    "[00:00 - 01:00] Lý thuyết: Sinh hoán vị, Tổ hợp nhanh chóng bằng thư viện.",
                    "[01:00 - 03:00] Thực chiến: Sinh tập con giải bài cực khó."
                ],
                code: "from itertools import permutations, combinations\nfor p in permutations(arr):\n    if check_condition(p):\n        print(p)\n        break",
                tasks: "1. In tất cả hoán vị của chữ cái.\n2. Liệt kê tổ hợp chập K của N.\n3. Bài toán Travelling Salesman Problem (Vét cạn ăn điểm subtask 1)."
            },
            {
                session: "BUỔI 67", name: "Giải Mã Đề Thi PTNK (Phần 1)",
                timeline: [
                    "[00:00 - 01:30] Phân tích cấu trúc đề năng khiếu các năm gần đây.",
                    "[01:30 - 03:00] Giải chi tiết bài 1, bài 2 đề PTNK."
                ],
                code: "# Code luyện thi chuyên Năng Khiếu",
                tasks: "Hoàn thành 100% test case Bài 1, Bài 2 của đề PTNK năm trước."
            },
            {
                session: "BUỔI 68", name: "Thi Thử: Đề Thi PTNK (Bấm Giờ)",
                timeline: [
                    "[00:00 - 02:30] Thi thử: Bấm giờ 150 phút giải 1 đề PTNK.",
                    "[02:30 - 03:00] Sửa bài: Chỉ ra các bẫy logic Toán học thường gặp của PTNK."
                ],
                code: "# Môi trường thi khép kín",
                tasks: "Học sinh luyện tập chịu áp lực phòng thi 150 phút."
            },
            {
                session: "BUỔI 69", name: "Giải Mã Đề Thi Lê Hồng Phong (Sở GDĐT)",
                timeline: [
                    "[00:00 - 01:30] Phân tích style ra đề của Sở TP.HCM (Chú trọng cấu trúc mảng, DP cơ bản).",
                    "[01:30 - 03:00] Nhấn mạnh việc không được bỏ sót Edge Cases (N=0, mảng trống)."
                ],
                code: "# Thói quen tốt trước khi submit code:\nif not arr or len(arr) == 0: return 0\n# Xử lý các edge cases",
                tasks: "Giải Bài 1, Bài 2, Bài 3 trong đề tuyển sinh chung của Sở."
            },
            {
                session: "BUỔI 70", name: "Thi Thử: Đề Thi Lê Hồng Phong",
                timeline: [
                    "[00:00 - 02:30] Thi thử: Bấm giờ 150 phút giải 1 đề Sở TP.HCM.",
                    "[02:30 - 03:00] Sửa lỗi Runtime Error, Memory Limit."
                ],
                code: "# Môi trường thi khép kín",
                tasks: "Học sinh luyện tập chịu áp lực phòng thi Sở."
            },
            {
                session: "BUỔI 71", name: "Chiến Thuật Phòng Thi & Tối Ưu Lỗi",
                timeline: [
                    "[00:00 - 01:30] Phổ biến kỹ năng: 30 phút đầu tiên chỉ đọc đề, nháp thuật toán, không code. Cách debug bằng lệnh print.",
                    "[01:30 - 03:00] Review toàn bộ các lỗi Runtime Error, IndexError, KeyError."
                ],
                code: "import sys\n# Thần chú chạy cực nhanh cho kỳ thi chuyên\ninput = sys.stdin.readline\nsys.setrecursionlimit(200000)",
                tasks: "1. Học kỹ năng Debug lỗi trên giấy khi hệ thống không báo test case lỗi.\n2. Setup template Python mạnh nhất."
            },
            {
                session: "BUỔI 72", name: "Mock Test: Trận Chiến Cuối Cùng",
                timeline: [
                    "[00:00 - 03:00] Tổ chức thi mô phỏng 100% không khí phòng thi thật. Công bố bảng xếp hạng. Trao thưởng và dặn dò trước khi đi thi thật."
                ],
                code: "# Good luck, Have Fun!",
                tasks: "Làm bài thi tổng hợp quyết định. Chúc các em thi đỗ chuyên Tin!"
            }
        ]
    }
];