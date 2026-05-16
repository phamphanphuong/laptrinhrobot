const lesson = (session, name, timeline, code, tasks, realExams = []) => ({
    session,
    name,
    timeline,
    code,
    tasks,
    realExams
});

const phase1 = {
    phaseId: 1,
    title: "GIAI ĐOẠN 1: NỀN TẢNG C++ & TƯ DUY LẬP TRÌNH CHUẨN",
    time: "THÁNG 1 - 2",
    duration: "8 Buổi (24 Giờ)",
    bgClass: "bg-sky-600",
    textClass: "text-sky-600",
    lightBgClass: "bg-sky-50",
    desc: "Xây dựng nền móng lập trình vững chắc, làm quen môi trường thi offline và xử lý các bài toán số học cơ bản.",
    icon: "fa-seedling",
    requirements: "Không cần nền tảng, chỉ cần tư duy logic.",
    topics: "Cấu trúc chương trình, Kiểu dữ liệu, Câu lệnh điều kiện, Vòng lặp, Hàm và Mảng cơ bản.",
    output: "Học sinh thành thạo cú pháp C++, biết cách tối ưu I/O và giải quyết các bài toán cơ bản trong đề thi chuyên.",
    lessons: [
        lesson(
            "BUỔI 1",
            "Môi trường lập trình & Template chuẩn thi chuyên",
            [
                "[00:00 - 00:30] Cài đặt Dev-C++ hoặc Code::Blocks. Giải thích cơ chế biên dịch (Compiler).",
                "[00:30 - 01:15] Giải thích cấu trúc khung: #include <bits/stdc++.h>, using namespace std, int main().",
                "[01:15 - 02:00] Tối ưu I/O: ios::sync_with_stdio(0); cin.tie(0); Tại sao không nên dùng endl mà dùng '\\n'?",
                "[02:00 - 03:00] Thực hành freopen: Cách đọc dữ liệu từ file .INP và ghi ra file .OUT theo chuẩn thi Themis tại TP.HCM."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Tối ưu nhập xuất cho dữ liệu lớn
    ios::sync_with_stdio(0);
    cin.tie(0);

    // Chuẩn file thi (Uncomment khi thi offline)
    // freopen("NAME.INP", "r", stdin);
    // freopen("NAME.OUT", "w", stdout);

    long long a, b;
    if (cin >> a >> b) {
        cout << a + b << '\\n';
    }
    return 0;
}`,
            "1. Cài đặt môi trường thành công.\n2. Viết lại template chuẩn 5 lần để thuộc lòng.\n3. Giải bài toán tính tổng 2 số trên hệ thống chấm tự động.",
            ["Mọi đề thi chuyên: Kỹ năng bắt buộc để không bị 0 điểm vì sai định dạng file."]
        ),
        lesson(
            "BUỔI 2",
            "Kiểu dữ liệu & Bẫy tràn số (Overflow)",
            [
                "[00:00 - 00:45] Phân tích phạm vi: int (10^9), long long (10^18). Tuyệt đối dùng long long cho tổng/tích.",
                "[00:45 - 01:30] Kiểu thực (double): Cách dùng fixed và setprecision(x) để làm tròn số thập phân.",
                "[01:30 - 02:15] Phép toán cơ bản và ép kiểu: (long long)a * b vs a * b.",
                "[02:15 - 03:00] Bài tập: Tính chu vi, diện tích hình chữ nhật, hình tròn với dữ liệu lên đến 10^9."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    // Bẫy: Tích a*b có thể vượt 10^9, phải dùng long long
    long long area = a * b;
    cout << area << '\\n';

    // Làm tròn 2 chữ số thập phân
    double r; cin >> r;
    cout << fixed << setprecision(2) << 3.14159 * r * r << '\\n';
    return 0;
}`,
            "1. Tính diện tích tam giác theo công thức Heron.\n2. Bài toán đổi đơn vị: giây sang HH:MM:SS.\n3. Tính tiền điện theo các mốc giá khác nhau.",
            ["Sở GDĐT - Bài 1 (Thường yêu cầu tính toán cơ bản nhưng số rất lớn)."]
        ),
        lesson(
            "BUỔI 3",
            "Cấu trúc rẽ nhánh If/Else & Logic biên",
            [
                "[00:00 - 00:45] Cú pháp if, else if, else. Các toán tử logic: &&, ||, !.",
                "[00:45 - 01:30] Kỹ thuật 'Gộp điều kiện': Kiểm tra 3 cạnh tam giác, năm nhuận.",
                "[01:30 - 02:15] Phân tích bẫy logic: Thứ tự ưu tiên của phép toán (VD: && mạnh hơn ||).",
                "[02:15 - 03:00] Giải phương trình bậc nhất ax + b = 0 (Xét đầy đủ trường hợp vô số nghiệm/vô nghiệm)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    int year; cin >> year;
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        cout << "Nam nhuan\\n";
    } else {
        cout << "Khong nhuan\\n";
    }
    return 0;
}`,
            "1. Kiểm tra 3 số có lập thành tam giác không? Nếu có là tam giác gì (Đều, Cân, Vuông)?\n2. Tính thuế thu nhập cá nhân theo bậc.\n3. Tìm số ngày trong một tháng bất kỳ.",
            []
        ),
        lesson(
            "BUỔI 4",
            "Vòng lặp For & Độ phức tạp Big O",
            [
                "[00:00 - 00:45] Giới thiệu O(N). Quy tắc 1 giây chạy được ~10^8 phép tính.",
                "[00:45 - 01:30] Vòng lặp for: Duyệt từ 1 đến N, duyệt ngược từ N về 1.",
                "[01:30 - 02:15] Kỹ thuật tối ưu: Tại sao kiểm tra số nguyên tố chỉ cần chạy đến sqrt(N)?",
                "[02:15 - 03:00] Bài toán đếm ước: Đếm tất cả ước của số N trong O(sqrt(N))."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n; cin >> n;
    int cnt = 0;
    // O(sqrt(N)) - Chạy được với N lên đến 10^14
    for (long long i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            cnt++;
            if (i * i != n) cnt++;
        }
    }
    cout << cnt << '\\n';
    return 0;
}`,
            "1. Tính tổng S = 1 + 2 + ... + N.\n2. In ra các số nguyên tố trong đoạn [a, b].\n3. Kiểm tra số hoàn hảo (tổng các ước bằng chính nó).",
            ["PTNK - Các bài toán đếm ước số, số phong phú."]
        ),
        lesson(
            "BUỔI 5",
            "Vòng lặp While & Xử lý chữ số",
            [
                "[00:00 - 00:30] Khi nào dùng while thay vì for? Cấu trúc while(cin >> x).",
                "[00:30 - 01:15] Kỹ thuật tách chữ số: n % 10 và n /= 10.",
                "[01:15 - 02:00] Thuật toán tìm UCLN (GCD) bằng Euclid (Vòng lặp while).",
                "[02:00 - 03:00] Bài tập: Tổng chữ số, số đảo ngược, số đối xứng (Palindrome)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n, tmp, res = 0;
    cin >> n;
    tmp = n;
    while (tmp > 0) {
        res = res * 10 + tmp % 10;
        tmp /= 10;
    }
    if (res == n) cout << "Doi xung\\n";
    else cout << "Khong\\n";
    return 0;
}`,
            "1. Tính GCD và LCM của 2 số.\n2. Đổi số từ hệ thập phân sang nhị phân.\n3. Tìm chữ số lớn nhất của một số nguyên.",
            ["Sở GDĐT - Các bài toán xử lý con số trong dãy."]
        ),
        lesson(
            "BUỔI 6",
            "Hàm (Function) & Tham chiếu (Reference)",
            [
                "[00:00 - 00:45] Tại sao cần hàm? Cách viết hàm bool isPrime(n), long long sumDigits(n).",
                "[00:45 - 01:30] Tham số truyền vào: Truyền tham trị (value) vs Truyền tham chiếu (reference &).",
                "[01:30 - 02:15] Biến toàn cục (Global) vs Biến cục bộ (Local). Lợi ích của biến toàn cục trong thi chuyên.",
                "[02:15 - 03:00] Thực hành: Tách bài toán phức tạp thành các hàm nhỏ để dễ debug."
            ],
            `#include <bits/stdc++.h>
using namespace std;

// Hàm kiểm tra số nguyên tố chuẩn
bool is_prime(long long n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return false;
    return true;
}

int main() {
    long long n; cin >> n;
    if (is_prime(n)) cout << "YES"; else cout << "NO";
    return 0;
}`,
            "1. Viết hàm rút gọn phân số.\n2. Viết hàm kiểm tra số chính phương.\n3. Viết hàm hoán đổi 2 số dùng tham chiếu swap(a, b).",
            []
        ),
        lesson(
            "BUỔI 7",
            "Mảng 1 chiều & Mảng đánh dấu (Frequency)",
            [
                "[00:00 - 00:45] Khai báo mảng tĩnh, vector. Cách duyệt mảng và nhập xuất mảng.",
                "[00:45 - 01:30] Tìm Max, Min và vị trí Max/Min trong mảng.",
                "[01:30 - 02:15] Kỹ thuật Mảng đánh dấu (Frequency Array): Đếm số lần xuất hiện của mỗi giá trị.",
                "[02:15 - 03:00] Bẫy: Mảng khai báo trong main giới hạn bộ nhớ (Stack), nên khai báo toàn cục."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int cnt[1000005]; // Mảng đánh dấu tần suất

int main() {
    int n; cin >> n;
    int a[n];
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        if (a[i] <= 1000000) cnt[a[i]]++;
    }
    // In ra số lần xuất hiện của số 5
    cout << cnt[5] << '\\n';
    return 0;
}`,
            "1. Tìm phần tử lớn thứ 2 trong mảng.\n2. Xóa các phần tử trùng nhau (giữ lại 1).\n3. Kiểm tra mảng có đối xứng không.",
            ["Sở GDĐT - Thống kê phần tử trong dãy số."]
        ),
        lesson(
            "BUỔI 8",
            "Mock Test Giai Đoạn 1 - Tổng ôn nền tảng",
            [
                "[00:00 - 00:15] Nhắc lại quy tắc đặt tên file, đọc/ghi file.",
                "[00:15 - 02:45] Làm đề thi thử (4 câu): 1 câu logic, 1 câu số học, 1 câu xử lý chữ số, 1 câu mảng.",
                "[02:45 - 03:00] Hướng dẫn chấm bài bằng Themis và cách đọc lỗi chấm."
            ],
            `// Tuần này thi thử, không có code mẫu.`,
            "Tự hoàn thành đề thi trong 150 phút mà không xem tài liệu.",
            ["Mô phỏng đề thi thực tế TP.HCM."]
        )
    ]
};
window.phase1 = phase1;