const lesson = (session, name, timeline, code, tasks, realExams = []) => ({
    session,
    name,
    timeline,
    code,
    tasks,
    realExams
});

const database = [
    {
        phaseId: 1,
        title: "GIAI ĐOẠN 1: NỀN TẢNG C++",
        time: "THÁNG 1 - 2",
        duration: "8 Buổi (24 Giờ)",
        bgClass: "bg-sky-600",
        textClass: "text-sky-600",
        lightBgClass: "bg-sky-50",
        desc: "Làm quen môi trường C++, cú pháp cơ bản, I/O nhanh và tư duy giải bài chuẩn thi chuyên.",
        icon: "fa-seedling",
        requirements: "Không cần biết lập trình, chỉ cần tư duy logic cơ bản.",
        topics: "C++ cơ bản, nhập xuất, rẽ nhánh, vòng lặp, hàm, mảng 1 chiều.",
        output: "Viết được chương trình C++ sạch, chạy nhanh và đủ tự tin xử lý bài cơ bản.",
        lessons: [
            lesson(
                "BUỔI 1",
                "Làm Quen C++ & Template I/O Nhanh",
                [
                    "[00:00 - 00:30] Cài đặt VS Code, MinGW/g++, chạy thử chương trình đầu tiên.",
                    "[00:30 - 01:15] Giải thích cấu trúc include, namespace, main, return.",
                    "[01:15 - 01:45] Bật fast I/O: ios::sync_with_stdio(false), cin.tie(nullptr).",
                    "[01:45 - 03:00] Thực hành: A+B, đọc nhiều test đơn giản."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    long long a, b;
    if (!(cin >> a >> b)) return 0;
    cout << a + b << '\n';
    return 0;
}`,
                "1. Viết chương trình tính A + B với I/O nhanh.\n2. Viết template C++ chuẩn cho mọi bài thi.\n3. Nộp 3 bài A+B trên OJ để kiểm tra thao tác.",
                ["PTNK - Dịch mã (nksev)"]
            ),
            lesson(
                "BUỔI 2",
                "Kiểu Dữ Liệu, Biến, Toán Tử Và Ép Kiểu",
                [
                    "[00:00 - 00:30] Ôn lại template C++ và lỗi thường gặp khi nhập/xuất.",
                    "[00:30 - 01:15] int, long long, double, char, string và phạm vi giá trị.",
                    "[01:15 - 01:45] Toán tử số học, so sánh, logic và ép kiểu an toàn.",
                    "[01:45 - 03:00] Bài tập thực chiến về tính chu vi, diện tích, trung bình cộng."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    cout << (long long)(a * b) << '\n';
    cout << fixed << setprecision(2) << (double)a / b << '\n';
    return 0;
}`,
                "1. In ra tích và thương của hai số nguyên.\n2. Khai báo đúng kiểu dữ liệu cho các bài tính toán lớn.\n3. Viết chương trình đổi từ độ C sang độ F.",
                ["Sở GDĐT - bài tính toán cơ bản về số học"]
            ),
            lesson(
                "BUỔI 3",
                "Rẽ Nhánh If/Else Và Bài Toán Điều Kiện",
                [
                    "[00:00 - 00:30] Nhắc lại kiểu dữ liệu và luồng chương trình.",
                    "[00:30 - 01:15] if, else if, else; toán tử &&, ||, !.",
                    "[01:15 - 01:45] Code mẫu: kiểm tra năm nhuận và phân loại số.",
                    "[01:45 - 03:00] Bài tập: tam giác, số chẵn lẻ, chia hết."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int year;
    cin >> year;
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) cout << "YES";
    else cout << "NO";
    return 0;
}`,
                "1. Kiểm tra năm nhuận.\n2. Phân loại tam giác theo ba cạnh.\n3. Viết chương trình tìm số lớn nhất trong 3 số.",
                []
            ),
            lesson(
                "BUỔI 4",
                "Vòng Lặp For Và Tư Duy Đếm",
                [
                    "[00:00 - 00:30] Sửa bài cũ và nhấn mạnh lỗi dấu ngoặc trong điều kiện.",
                    "[00:30 - 01:15] for, range đếm, duyệt mảng và duyệt theo bước.",
                    "[01:15 - 01:45] Code mẫu: tính tổng, đếm ước số, đếm số nguyên tố.",
                    "[01:45 - 03:00] Bài tập: dãy số, giai thừa, tổng bình phương."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    long long sum = 0;
    for (int i = 1; i <= n; ++i) sum += i;
    cout << sum << '\n';
    return 0;
}`,
                "1. Tính tổng từ 1 đến N.\n2. Đếm số ước của N bằng vòng lặp.\n3. In ra các số chẵn từ 1 đến N.",
                []
            ),
            lesson(
                "BUỔI 5",
                "While, Break, Continue Và Xử Lý Chữ Số",
                [
                    "[00:00 - 00:30] Khi nào nên dùng while thay vì for.",
                    "[00:30 - 01:15] break, continue và lỗi vòng lặp vô hạn.",
                    "[01:15 - 01:45] Tách chữ số bằng % 10 và /= 10.",
                    "[01:45 - 03:00] Luyện bài tổng chữ số, đảo số, tìm chữ số lớn nhất."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    cout << sum << '\n';
    return 0;
}`,
                "1. Tính tổng chữ số của N.\n2. Đảo ngược một số nguyên.\n3. Tìm chữ số lớn nhất trong N.",
                []
            ),
            lesson(
                "BUỔI 6",
                "Hàm, Tham Số Và GCD/LCM",
                [
                    "[00:00 - 00:30] Lý do phải chia nhỏ chương trình thành các hàm.",
                    "[00:30 - 01:15] Tham số truyền giá trị, truyền tham chiếu.",
                    "[01:15 - 01:45] Viết hàm gcd theo Euclid.",
                    "[01:45 - 03:00] Ứng dụng: rút gọn phân số, tính lcm."
                ],
                `#include <bits/stdc++.h>
using namespace std;

long long gcd_ll(long long a, long long b) {
    if (b == 0) return a;
    return gcd_ll(b, a % b);
}

int main() {
    long long a, b;
    cin >> a >> b;
    cout << gcd_ll(a, b) << '\n';
    return 0;
}`,
                "1. Viết hàm gcd đệ quy.\n2. Viết hàm tính lcm từ gcd.\n3. Dùng hàm để rút gọn phân số.",
                []
            ),
            lesson(
                "BUỔI 7",
                "Mảng Một Chiều Và Vector",
                [
                    "[00:00 - 00:30] Mảng tĩnh và vector trong C++.",
                    "[00:30 - 01:15] push_back, pop_back, size, empty.",
                    "[01:15 - 01:45] Duyệt mảng tìm max/min.",
                    "[01:45 - 03:00] Bài tập xử lý danh sách điểm và thống kê."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int &x : a) cin >> x;
    cout << *max_element(a.begin(), a.end()) << '\n';
    return 0;
}`,
                "1. Nhập mảng N phần tử bằng vector.\n2. Tìm phần tử lớn nhất, nhỏ nhất.\n3. Đếm số phần tử chẵn trong mảng.",
                []
            ),
            lesson(
                "BUỔI 8",
                "Mock Test Giai Đoạn 1",
                [
                    "[00:00 - 00:15] Phổ biến quy chế làm bài và cách submit.",
                    "[00:15 - 01:00] Ôn nhanh template, điều kiện, vòng lặp, mảng.",
                    "[01:00 - 03:00] Thi thử 4 bài tổng hợp C++ cơ bản."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}`,
                "Cấu trúc đề: Logic if/else, vòng lặp, mảng 1 chiều, hàm cơ bản.\nHọc viên tự viết toàn bộ code trong 180 phút.",
                []
            )
        ]
    },
    {
        phaseId: 2,
        title: "GIAI ĐOẠN 2: STL VÀ KỸ THUẬT MẢNG",
        time: "THÁNG 3 - 4",
        duration: "8 Buổi (24 Giờ)",
        bgClass: "bg-emerald-600",
        textClass: "text-emerald-600",
        lightBgClass: "bg-emerald-50",
        desc: "Làm chủ STL, chuỗi, sắp xếp, map/set và các kỹ thuật mảng thường gặp trong đề thi.",
        icon: "fa-layer-group",
        requirements: "Đã quen với C++ cơ bản, vòng lặp, hàm và mảng.",
        topics: "pair, struct, string, sort, map, set, prefix sum, two pointers.",
        output: "Tối ưu code gọn hơn, nhanh hơn và đủ mạnh để xử lý đề trung bình.",
        lessons: [
            lesson(
                "BUỔI 9",
                "pair, struct và dữ liệu nhiều trường",
                [
                    "[00:00 - 00:30] pair<int,int>, make_pair và truy cập first/second.",
                    "[00:30 - 01:15] struct để nhóm thông tin nhiều trường.",
                    "[01:15 - 01:45] vector<pair<...>> và bài toán sắp xếp dữ liệu.",
                    "[01:45 - 03:00] Thực hành: lưu điểm thi, ID, thời gian nộp."
                ],
                `#include <bits/stdc++.h>
using namespace std;

struct Student {
    string name;
    int score;
};

int main() {
    vector<Student> a = {{"An", 8}, {"Binh", 9}, {"Chi", 8}};
    sort(a.begin(), a.end(), [](const Student& x, const Student& y) {
        if (x.score != y.score) return x.score > y.score;
        return x.name < y.name;
    });
    cout << a[0].name << '\n';
    return 0;
}`,
                "1. Lưu danh sách học sinh bằng struct.\n2. Sắp xếp theo điểm giảm dần, tên tăng dần.\n3. In ra phần tử đầu tiên sau khi sắp xếp.",
                []
            ),
            lesson(
                "BUỔI 10",
                "Chuỗi String và getline",
                [
                    "[00:00 - 00:30] Khác nhau giữa cin và getline.",
                    "[00:30 - 01:15] Duyệt từng ký tự, xử lý khoảng trắng.",
                    "[01:15 - 01:45] Đếm từ, chuẩn hóa họ tên, kiểm tra palindrome.",
                    "[01:45 - 03:00] Bài tập chuỗi thực chiến."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    getline(cin, s);
    reverse(s.begin(), s.end());
    cout << s << '\n';
    return 0;
}`,
                "1. Đếm số từ trong một câu.\n2. Kiểm tra chuỗi đối xứng.\n3. Chuẩn hóa tên học sinh.",
                []
            ),
            lesson(
                "BUỔI 11",
                "Sắp Xếp Với sort Và Comparator",
                [
                    "[00:00 - 00:30] sort, stable_sort và độ phức tạp O(N log N).",
                    "[00:30 - 01:15] Comparator theo nhiều tiêu chí.",
                    "[01:15 - 01:45] Sắp xếp số, chuỗi, cặp, struct.",
                    "[01:45 - 03:00] Bài toán xếp hạng học sinh và ghép số lớn nhất."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> a = {3, 30, 34, 5, 9};
    sort(a.begin(), a.end(), greater<int>());
    for (int x : a) cout << x << ' ';
    return 0;
}`,
                "1. Sắp xếp mảng số tăng/giảm dần.\n2. Tự viết comparator cho struct.\n3. Ghép các số thành số lớn nhất.",
                ["Mở rộng tư duy: sắp xếp theo nhiều điều kiện trong đề thi tỉnh"]
            ),
            lesson(
                "BUỔI 12",
                "set, multiset, map và unordered_map",
                [
                    "[00:00 - 00:30] Khi nào dùng set, map, unordered_map.",
                    "[00:30 - 01:15] Đếm tần suất, loại bỏ trùng lặp, truy vấn tồn tại.",
                    "[01:15 - 01:45] multiset để giữ phần tử trùng và lấy min/max.",
                    "[01:45 - 03:00] Bài toán đếm số khác nhau và 2Sum."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> a = {1, 2, 2, 3, 3, 3};
    unordered_map<int, int> freq;
    for (int x : a) ++freq[x];
    cout << freq[3] << '\n';
    return 0;
}`,
                "1. Đếm tần suất xuất hiện của từng số.\n2. Tìm phần tử xuất hiện nhiều nhất.\n3. Kiểm tra mảng có giá trị trùng hay không.",
                []
            ),
            lesson(
                "BUỔI 13",
                "Prefix Sum 1D Và Truy Vấn Đoạn",
                [
                    "[00:00 - 00:30] Đặt vấn đề: nhiều truy vấn tổng đoạn.",
                    "[00:30 - 01:15] Công thức pref[i] = pref[i-1] + a[i].",
                    "[01:15 - 01:45] Tính nhanh sum(l, r) trong O(1).",
                    "[01:45 - 03:00] Luyện bài truy vấn tổng, số mảng con."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<long long> a = {2, 4, 1, 3, 5};
    int n = (int)a.size();
    vector<long long> pref(n + 1, 0);
    for (int i = 1; i <= n; ++i) pref[i] = pref[i - 1] + a[i - 1];
    cout << pref[4] - pref[1] << '\n';
    return 0;
}`,
                "1. Tạo mảng cộng dồn 1D.\n2. Trả lời nhiều truy vấn tổng đoạn.\n3. Tìm đoạn con có tổng lớn nhất độ dài cố định.",
                ["Sở GDĐT - truy vấn tổng đoạn, đếm dãy con"]
            ),
            lesson(
                "BUỔI 14",
                "Prefix Sum 2D Và Difference Array",
                [
                    "[00:00 - 00:30] Tổng hình chữ nhật và nguyên lý bù trừ.",
                    "[00:30 - 01:15] pref 2D với viền 0 để tránh lỗi chỉ số.",
                    "[01:15 - 01:45] Mảng hiệu cho truy vấn cộng đoạn.",
                    "[01:45 - 03:00] Thực hành: lưới, ô màu, cập nhật hàng loạt."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 3, m = 3;
    vector<vector<int>> a = {{1,2,3},{4,5,6},{7,8,9}};
    vector<vector<int>> pref(n + 1, vector<int>(m + 1, 0));
    for (int i = 1; i <= n; ++i)
        for (int j = 1; j <= m; ++j)
            pref[i][j] = pref[i-1][j] + pref[i][j-1] - pref[i-1][j-1] + a[i-1][j-1];
    cout << pref[3][3] << '\n';
    return 0;
}`,
                "1. Tạo prefix sum 2D cho bảng số.\n2. Tính tổng hình chữ nhật con.\n3. Viết mảng hiệu 1D để cộng đoạn O(1).",
                []
            ),
            lesson(
                "BUỔI 15",
                "Two Pointers Và Sliding Window",
                [
                    "[00:00 - 00:30] Tư duy hai con trỏ trên mảng đã sắp xếp.",
                    "[00:30 - 01:15] Cửa sổ trượt cố định và co giãn.",
                    "[01:15 - 01:45] Tìm cặp số, đoạn con, chuỗi con.",
                    "[01:45 - 03:00] Bài tập tăng tốc độ xử lý mảng lớn."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> a = {1, 2, 3, 4, 5};
    int k = 3;
    int sum = 0;
    for (int i = 0; i < k; ++i) sum += a[i];
    int best = sum;
    for (int i = k; i < (int)a.size(); ++i) {
        sum += a[i] - a[i - k];
        best = max(best, sum);
    }
    cout << best << '\n';
    return 0;
}`,
                "1. Tìm đoạn con độ dài K có tổng lớn nhất.\n2. Tìm cặp số có tổng bằng K.\n3. Đếm chuỗi con không có ký tự lặp lại.",
                []
            ),
            lesson(
                "BUỔI 16",
                "Bootcamp Giai Đoạn 2",
                [
                    "[00:00 - 00:30] Ôn lại sort, map, set, prefix sum, two pointers.",
                    "[00:30 - 03:00] Luyện 5 bài tổng hợp theo phong cách đề thi thật."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}`,
                "1. Giải bài sắp xếp nhiều điều kiện.\n2. Giải bài truy vấn tổng đoạn.\n3. Giải bài cửa sổ trượt và map/set.",
                []
            )
        ]
    },
    {
        phaseId: 3,
        title: "GIAI ĐOẠN 3: TOÁN, ĐỆ QUY VÀ BIT",
        time: "THÁNG 5 - 6",
        duration: "8 Buổi (24 Giờ)",
        bgClass: "bg-violet-600",
        textClass: "text-violet-600",
        lightBgClass: "bg-violet-50",
        desc: "Đi qua các chuyên đề số học, đệ quy, bit, binary search và tối ưu hoá tư duy giải bài.",
        icon: "fa-calculator",
        requirements: "Nắm vững mảng, STL và kỹ thuật duyệt cơ bản.",
        topics: "Sàng nguyên tố, modulo, fast power, bitmask, backtracking, binary search.",
        output: "Xử lý được bài toán số học và tìm kiếm thường xuất hiện ở vòng thi chuyên.",
        lessons: [
            lesson(
                "BUỔI 17",
                "Sàng Nguyên Tố Và Kiểm Tra Số Nguyên Tố",
                [
                    "[00:00 - 00:30] Cách kiểm tra nguyên tố O(sqrt(n)).",
                    "[00:30 - 01:15] Sàng Eratosthenes và tối ưu bộ nhớ.",
                    "[01:15 - 01:45] Sàng các số đến 10^7.",
                    "[01:45 - 03:00] Bài tập đếm số nguyên tố và cặp nguyên tố."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 20;
    vector<bool> prime(n + 1, true);
    prime[0] = prime[1] = false;
    for (int i = 2; i * i <= n; ++i)
        if (prime[i])
            for (int j = i * i; j <= n; j += i)
                prime[j] = false;
    cout << prime[19] << '\n';
    return 0;
}`,
                "1. In ra tất cả số nguyên tố nhỏ hơn hoặc bằng N.\n2. Đếm số lượng số nguyên tố trong đoạn [L, R].\n3. Tìm cặp số nguyên tố có tổng bằng K.",
                ["PTNK - Số không có ước chính phương (nknumfre)"]
            ),
            lesson(
                "BUỔI 18",
                "Phân Tích Thừa Số Và Đếm Ước",
                [
                    "[00:00 - 00:30] Phân tích một số thành thừa số nguyên tố.",
                    "[00:30 - 01:15] Công thức số ước từ số mũ các thừa số.",
                    "[01:15 - 01:45] Ứng dụng vào bài toán ước số và ước chung.",
                    "[01:45 - 03:00] Bài tập đếm ước và so sánh nhanh."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n = 84;
    vector<pair<long long,int>> fac;
    for (long long d = 2; d * d <= n; ++d) {
        if (n % d == 0) {
            int cnt = 0;
            while (n % d == 0) {
                n /= d;
                ++cnt;
            }
            fac.push_back({d, cnt});
        }
    }
    if (n > 1) fac.push_back({n, 1});
    cout << fac.size() << '\n';
    return 0;
}`,
                "1. Phân tích thừa số của N.\n2. Tính số lượng ước của N.\n3. Tính tổng các ước của N.",
                ["PTNK - Số phong phú (nkabd)"]
            ),
            lesson(
                "BUỔI 19",
                "Modulo Arithmetic Và Tránh Tràn Số",
                [
                    "[00:00 - 00:30] Vì sao phải lấy modulo trong bài lớn.",
                    "[00:30 - 01:15] Cộng, trừ, nhân dưới modulo.",
                    "[01:15 - 01:45] Dùng long long và tránh overflow.",
                    "[01:45 - 03:00] Bài tập số lớn, chữ số tận cùng và lũy thừa."
                ],
                `#include <bits/stdc++.h>
using namespace std;

const long long MOD = 1000000007LL;

int main() {
    long long a, b;
    cin >> a >> b;
    cout << (a % MOD * b % MOD) % MOD << '\n';
    return 0;
}`,
                "1. Tính (A + B) % MOD và (A * B) % MOD.\n2. Tính N! modulo 10^9+7.\n3. Tìm chữ số tận cùng của A^B.",
                []
            ),
            lesson(
                "BUỔI 20",
                "Lũy Thừa Nhanh Và Tổ Hợp",
                [
                    "[00:00 - 00:30] Binary exponentiation và chia để trị.",
                    "[00:30 - 01:15] Tính a^b % mod trong O(log b).",
                    "[01:15 - 01:45] Tổ hợp chập k của n bằng giai thừa và nghịch đảo.",
                    "[01:45 - 03:00] Bài toán đếm cách chọn, xác suất và chia nhóm."
                ],
                `#include <bits/stdc++.h>
using namespace std;

long long mod_pow(long long a, long long b, long long mod) {
    long long res = 1 % mod;
    while (b > 0) {
        if (b & 1) res = res * a % mod;
        a = a * a % mod;
        b >>= 1;
    }
    return res;
}

int main() {
    cout << mod_pow(2, 10, 1000000007LL) << '\n';
    return 0;
}`,
                "1. Viết hàm lũy thừa nhị phân tự cài đặt.\n2. Tính tổ hợp C(n, k) modulo.\n3. Tính nghịch đảo modulo bằng Fermat.",
                []
            ),
            lesson(
                "BUỔI 21",
                "Toán Tử Bit Và Bitmask",
                [
                    "[00:00 - 00:30] AND, OR, XOR, NOT, dịch trái/phải.",
                    "[00:30 - 01:15] Kiểm tra chẵn lẻ, đặt/xóa/toggle bit.",
                    "[01:15 - 01:45] Sinh tập con bằng bitmask.",
                    "[01:45 - 03:00] Bài tập với tập con và các trạng thái."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int x = 5;
    cout << ((x & 1) ? "ODD" : "EVEN") << '\n';
    return 0;
}`,
                "1. Kiểm tra số chẵn/lẻ bằng toán tử bit.\n2. Sinh tất cả tập con của mảng nhỏ.\n3. Tìm số xuất hiện lẻ lần bằng XOR.",
                []
            ),
            lesson(
                "BUỔI 22",
                "Đệ Quy Và Backtracking",
                [
                    "[00:00 - 00:30] Khái niệm call stack và base case.",
                    "[00:30 - 01:15] Đệ quy tính giai thừa, Fibonacci, gcd.",
                    "[01:15 - 01:45] Backtracking sinh tổ hợp, hoán vị.",
                    "[01:45 - 03:00] Bài tập quay lui với tập con và hoán vị."
                ],
                `#include <bits/stdc++.h>
using namespace std;

void backtrack(int idx, vector<int>& cur, const vector<int>& a) {
    if (idx == (int)a.size()) {
        for (int x : cur) cout << x << ' ';
        cout << '\n';
        return;
    }
    cur.push_back(a[idx]);
    backtrack(idx + 1, cur, a);
    cur.pop_back();
    backtrack(idx + 1, cur, a);
}

int main() {
    vector<int> a = {1, 2, 3};
    vector<int> cur;
    backtrack(0, cur, a);
    return 0;
}`,
                "1. Viết đệ quy tính N!.\n2. Sinh tất cả tổ hợp chập K của N.\n3. Viết chương trình sinh tất cả tập con của một mảng nhỏ.",
                []
            ),
            lesson(
                "BUỔI 23",
                "Binary Search Cơ Bản Và Lower/Upper Bound",
                [
                    "[00:00 - 00:30] Tư duy chia đôi không gian tìm kiếm.",
                    "[00:30 - 01:15] Tìm phần tử, vị trí đầu tiên và cuối cùng.",
                    "[01:15 - 01:45] Dùng lower_bound, upper_bound trong STL.",
                    "[01:45 - 03:00] Bài tập đếm số phần tử trong khoảng."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> a = {1, 2, 2, 3, 4, 4, 5};
    int x = 4;
    auto L = lower_bound(a.begin(), a.end(), x) - a.begin();
    auto R = upper_bound(a.begin(), a.end(), x) - a.begin();
    cout << R - L << '\n';
    return 0;
}`,
                "1. Tìm vị trí xuất hiện đầu tiên của X.\n2. Đếm số lần xuất hiện của X.\n3. Tìm phần tử đầu tiên lớn hơn hoặc bằng X.",
                ["Đề LHP/TĐN - dạng tìm kiếm nhị phân trên mảng"]
            ),
            lesson(
                "BUỔI 24",
                "Mock Test Giai Đoạn 3",
                [
                    "[00:00 - 00:15] Nhắc lại chiến thuật xử lý đề và quản lý thời gian.",
                    "[00:15 - 03:00] Thi thử tổng hợp: số học, bit, recursion, binary search."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}`,
                "Đề thi mô phỏng gồm 4 bài: sàng nguyên tố, modulo, bitmask, binary search.\nHọc viên tự tối ưu code và nộp dưới áp lực thời gian.",
                []
            )
        ]
    },
    {
        phaseId: 4,
        title: "GIAI ĐOẠN 4: ĐỒ THỊ VÀ DP",
        time: "THÁNG 7 - 8",
        duration: "8 Buổi (24 Giờ)",
        bgClass: "bg-orange-500",
        textClass: "text-orange-500",
        lightBgClass: "bg-orange-50",
        desc: "Đi vào các chuyên đề đồ thị, đường đi ngắn, quy hoạch động và tổng ôn thi thử.",
        icon: "fa-network-wired",
        requirements: "Đã nắm vững STL, tư duy số học và kỹ thuật tìm kiếm.",
        topics: "BFS, DFS, Dijkstra, topo sort, tree, DP cơ bản, LIS, knapsack.",
        output: "Hoàn thiện bộ kỹ năng giải đề chuyên tin với các bài trung bình đến khá khó.",
        lessons: [
            lesson(
                "BUỔI 25",
                "Biểu Diễn Đồ Thị, DFS Và BFS",
                [
                    "[00:00 - 00:30] Danh sách kề, ma trận kề và cạnh.",
                    "[00:30 - 01:15] DFS đệ quy, BFS bằng queue.",
                    "[01:15 - 01:45] Duyệt thành phần liên thông.",
                    "[01:45 - 03:00] Bài tập trên đồ thị vô hướng cơ bản."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 4;
    vector<vector<int>> g(n + 1);
    g[1] = {2, 3};
    queue<int> q;
    vector<bool> vis(n + 1, false);
    q.push(1);
    vis[1] = true;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : g[u]) if (!vis[v]) {
            vis[v] = true;
            q.push(v);
        }
    }
    cout << vis[3] << '\n';
    return 0;
}`,
                "1. Viết DFS đệ quy để duyệt đồ thị.\n2. Viết BFS tìm số bước ngắn nhất trên đồ thị không trọng số.\n3. Đếm số thành phần liên thông.",
                ["Sở GDĐT - bài mê cung, loang BFS"]
            ),
            lesson(
                "BUỔI 26",
                "BFS Trên Lưới Và Flood Fill",
                [
                    "[00:00 - 00:30] Mô hình hóa ô lưới thành đỉnh đồ thị.",
                    "[00:30 - 01:15] 4 hướng di chuyển và đánh dấu đã thăm.",
                    "[01:15 - 01:45] Tìm đường đi, vùng liên thông, diện tích vùng.",
                    "[01:45 - 03:00] Bài tập mê cung và vùng nước tràn."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<string> a = {"....", ".##.", ".#..", "...."};
    int n = a.size(), m = a[0].size();
    vector<vector<int>> dist(n, vector<int>(m, -1));
    queue<pair<int,int>> q;
    q.push({0, 0});
    dist[0][0] = 0;
    int dx[4] = {1, -1, 0, 0};
    int dy[4] = {0, 0, 1, -1};
    while (!q.empty()) {
        auto [x, y] = q.front(); q.pop();
        for (int dir = 0; dir < 4; ++dir) {
            int nx = x + dx[dir], ny = y + dy[dir];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && a[nx][ny] == '.' && dist[nx][ny] == -1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx, ny});
            }
        }
    }
    cout << dist[n - 1][m - 1] << '\n';
    return 0;
}`,
                "1. Tìm đường đi ngắn nhất trên lưới có vật cản.\n2. Đếm số ô thuộc cùng một vùng liên thông.\n3. Mở rộng bài toán sang 8 hướng.",
                []
            ),
            lesson(
                "BUỔI 27",
                "Dijkstra Và Đường Đi Ngắn Có Trọng Số",
                [
                    "[00:00 - 00:30] Khi nào BFS không còn đủ.",
                    "[00:30 - 01:15] priority_queue và cặp (dist, node).",
                    "[01:15 - 01:45] Mẫu cập nhật khoảng cách ngắn hơn.",
                    "[01:45 - 03:00] Bài tập đường đi tối ưu trong bản đồ thành phố."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    const long long INF = (1LL << 60);
    int n = 3;
    vector<vector<pair<int,int>>> g(n + 1);
    g[1].push_back({2, 5});
    g[2].push_back({3, 2});
    vector<long long> dist(n + 1, INF);
    priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<pair<long long,int>>> pq;
    dist[1] = 0;
    pq.push({0, 1});
    while (!pq.empty()) {
        auto [du, u] = pq.top(); pq.pop();
        if (du != dist[u]) continue;
        for (auto [v, w] : g[u]) {
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    cout << dist[3] << '\n';
    return 0;
}`,
                "1. Cài đặt Dijkstra từ đầu.\n2. Tìm đường đi ngắn nhất trên đồ thị có trọng số dương.\n3. Phân biệt BFS và Dijkstra.",
                []
            ),
            lesson(
                "BUỔI 28",
                "Topo Sort Và Bài Toán DAG",
                [
                    "[00:00 - 00:30] Khái niệm đồ thị có hướng không chu trình.",
                    "[00:30 - 01:15] Topological sort bằng indegree và queue.",
                    "[01:15 - 01:45] Ứng dụng: thứ tự môn học, phụ thuộc công việc.",
                    "[01:45 - 03:00] Bài tập sắp xếp công việc theo điều kiện trước-sau."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 4;
    vector<vector<int>> g(n + 1);
    vector<int> indeg(n + 1, 0);
    queue<int> q;
    q.push(1);
    cout << q.front() << '\n';
    return 0;
}`,
                "1. Viết topo sort bằng Kahn.\n2. Phát hiện đồ thị có chu trình.\n3. Ứng dụng topo để sắp xếp công việc phụ thuộc.",
                []
            ),
            lesson(
                "BUỔI 29",
                "Cây, DFS Và Đường Kính Cây",
                [
                    "[00:00 - 00:30] Cây là gì và khác đồ thị thường như thế nào.",
                    "[00:30 - 01:15] DFS trên cây, mối liên hệ cha con.",
                    "[01:15 - 01:45] Đường kính cây bằng 2 lần BFS/DFS.",
                    "[01:45 - 03:00] Bài tập về khoảng cách xa nhất trên cây."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<vector<int>> g(5);
    g[1] = {2, 3};
    g[2] = {4};
    cout << g[1].size() << '\n';
    return 0;
}`,
                "1. Duyệt cây bằng DFS.\n2. Tính đường kính cây.\n3. Tính độ sâu của từng đỉnh.",
                []
            ),
            lesson(
                "BUỔI 30",
                "DP Cơ Bản Và Ba Lô 0/1",
                [
                    "[00:00 - 00:30] Tư duy trạng thái và công thức chuyển.",
                    "[00:30 - 01:15] DP 1 chiều, 2 chiều và tối ưu bộ nhớ.",
                    "[01:15 - 01:45] Ba lô 0/1 và bài toán chọn vật.",
                    "[01:45 - 03:00] Bài tập tổng hợp với quy hoạch động."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> w = {2, 3, 4};
    vector<int> val = {4, 5, 10};
    int cap = 5;
    vector<int> dp(cap + 1, 0);
    for (int i = 0; i < (int)w.size(); ++i)
        for (int j = cap; j >= w[i]; --j)
            dp[j] = max(dp[j], dp[j - w[i]] + val[i]);
    cout << dp[cap] << '\n';
    return 0;
}`,
                "1. Viết DP ba lô 0/1.\n2. Tối ưu DP một chiều.\n3. Giải bài đếm số cách chọn với tổng K.",
                ["Sở GDĐT - bài bậc thang, ba lô cơ bản"]
            ),
            lesson(
                "BUỔI 31",
                "LIS, Chuỗi Và DP Dãy Con",
                [
                    "[00:00 - 00:30] Dãy con tăng dài nhất là gì.",
                    "[00:30 - 01:15] DP O(N^2) và ý tưởng tối ưu O(N log N).",
                    "[01:15 - 01:45] Kết hợp chuỗi và dãy số vào bài thực chiến.",
                    "[01:45 - 03:00] Bài tập về subsequence và LIS."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> a = {3, 1, 5, 2, 6, 4, 9};
    vector<int> tail;
    for (int x : a) {
        auto it = lower_bound(tail.begin(), tail.end(), x);
        if (it == tail.end()) tail.push_back(x);
        else *it = x;
    }
    cout << tail.size() << '\n';
    return 0;
}`,
                "1. Tính LIS bằng DP và bằng patience sorting.\n2. Tìm xâu con chung dài nhất ở mức cơ bản.\n3. Đếm số dãy con tăng.",
                ["Sở GDĐT - bài dãy con tăng dài nhất (liq)"]
            ),
            lesson(
                "BUỔI 32",
                "Mock Test Cuối Khóa",
                [
                    "[00:00 - 00:15] Phổ biến cấu trúc đề và chiến thuật phân bổ thời gian.",
                    "[00:15 - 03:00] Thi thử 4 bài tổng hợp: đồ thị, DP, chuỗi, tối ưu."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}`,
                "Đề mô phỏng gồm 4 bài: BFS/DFS, Dijkstra, DP, LIS hoặc chuỗi.\nHọc viên làm độc lập và được chữa kỹ sau khi nộp.",
                ["PTNK - Chuỗi đối xứng (nkpalin)", "Sở GDĐT - Đường đi (qbmax8)"]
            )
        ]
    }
];

const phase5 = {
    phaseId: 5,
    title: "GIAI ĐOẠN 5: QUY HOẠCH ĐỘNG & CHUỖI",
    time: "THÁNG 9",
    duration: "8 Buổi (24 Giờ)",
    bgClass: "bg-indigo-600",
    textClass: "text-indigo-600",
    lightBgClass: "bg-indigo-50",
    desc: "Làm chủ tư duy trạng thái, chuyển tiếp và các bài chuỗi thường gặp trong đề chuyên.",
    icon: "fa-diagram-project",
    requirements: "Đã vững STL, mảng, số học và các mẫu duyệt cơ bản.",
    topics: "DP 1D, DP 2D, knapsack, LIS, LCS, grid DP, trie, hashing.",
    output: "Giải được các bài quy hoạch động cơ bản đến khá và các bài chuỗi kinh điển.",
    lessons: [
        lesson(
            "BUỔI 33",
            "Tư Duy Trạng Thái DP Và Công Thức Chuyển",
            [
                "[00:00 - 00:30] Vì sao phải dùng quy hoạch động thay vì duyệt brute force.",
                "[00:30 - 01:15] Xác định trạng thái, trạng thái gốc và công thức chuyển.",
                "[01:15 - 01:45] Cài đặt DP 1 chiều với mảng memo.",
                "[01:45 - 03:00] Bài tập: tính số cách tạo tổng và số đường đi."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 10;
    vector<long long> dp(n + 1, 0);
    dp[0] = 1;
    for (int i = 1; i <= n; ++i) dp[i] = dp[i - 1] + (i >= 2 ? dp[i - 2] : 0);
    cout << dp[n] << '\n';
    return 0;
}`,
            "1. Xác định trạng thái DP cho bài số cách đi cầu thang.\n2. Viết mảng memo 1 chiều.\n3. So sánh brute force và DP trên cùng một bài.",
            []
        ),
        lesson(
            "BUỔI 34",
            "Ba Lô 0/1 Và Ba Lô Không Giới Hạn",
            [
                "[00:00 - 00:30] Phân biệt 0/1 knapsack và unbounded knapsack.",
                "[00:30 - 01:15] Duyệt ngược và duyệt xuôi trong chuyển trạng thái.",
                "[01:15 - 01:45] Tối ưu không gian DP một chiều.",
                "[01:45 - 03:00] Bài tập chọn vật, đổi tiền và tối ưu giá trị."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> w = {2, 3, 5};
    vector<int> v = {6, 10, 18};
    int cap = 8;
    vector<int> dp(cap + 1, 0);
    for (int i = 0; i < (int)w.size(); ++i)
        for (int j = cap; j >= w[i]; --j)
            dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
    cout << dp[cap] << '\n';
    return 0;
}`,
            "1. Cài đặt ba lô 0/1.\n2. Cài đặt ba lô không giới hạn.\n3. Giải bài đổi tiền bằng DP.",
            ["Sở GDĐT - bài ba lô cơ bản"]
        ),
        lesson(
            "BUỔI 35",
            "Dãy Con Tăng Dài Nhất (LIS)",
            [
                "[00:00 - 00:30] Xây dựng LIS bằng DP O(N^2).",
                "[00:30 - 01:15] Tối ưu LIS O(N log N) bằng lower_bound.",
                "[01:15 - 01:45] So sánh hai cách và khi nào dùng từng cách.",
                "[01:45 - 03:00] Bài tập tăng dãy, giảm dãy, và biến thể."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> a = {4, 2, 5, 3, 7, 6, 9};
    vector<int> tail;
    for (int x : a) {
        auto it = lower_bound(tail.begin(), tail.end(), x);
        if (it == tail.end()) tail.push_back(x);
        else *it = x;
    }
    cout << tail.size() << '\n';
    return 0;
}`,
            "1. Tính LIS của một mảng cho trước.\n2. Viết phiên bản O(N^2) và O(N log N).\n3. Tìm dãy con giảm dài nhất bằng cách biến đổi bài toán.",
            ["Sở GDĐT - Dãy con tăng dài nhất (liq)"]
        ),
        lesson(
            "BUỔI 36",
            "Xâu Con Chung Dài Nhất (LCS)",
            [
                "[00:00 - 00:30] Khi nào cần DP 2 chiều trên chuỗi.",
                "[00:30 - 01:15] Công thức LCS và bảng trạng thái.",
                "[01:15 - 01:45] Truy vết để lấy ra xâu con chung.",
                "[01:45 - 03:00] Bài tập so khớp chuỗi và biến thể edit distance."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    string a = "ABCBDAB", b = "BDCAB";
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    for (int i = 1; i <= n; ++i)
        for (int j = 1; j <= m; ++j)
            dp[i][j] = (a[i - 1] == b[j - 1]) ? dp[i - 1][j - 1] + 1 : max(dp[i - 1][j], dp[i][j - 1]);
    cout << dp[n][m] << '\n';
    return 0;
}`,
            "1. Tính độ dài LCS giữa hai chuỗi.\n2. Truy vết để in ra một xâu con chung.\n3. Phân biệt LCS và substring.",
            []
        ),
        lesson(
            "BUỔI 37",
            "DP Lưới Và Đường Đi Tối Ưu",
            [
                "[00:00 - 00:30] Mô hình hóa bài toán lưới thành trạng thái ô.",
                "[00:30 - 01:15] Cộng hướng đi và xử lý ô cấm.",
                "[01:15 - 01:45] Tối ưu bộ nhớ bằng 2 hàng DP.",
                "[01:45 - 03:00] Bài tập đường đi, robot và mê cung."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<string> grid = {"..#", "...", "#.."};
    int n = grid.size(), m = grid[0].size();
    vector<vector<long long>> dp(n, vector<long long>(m, 0));
    if (grid[0][0] == '.') dp[0][0] = 1;
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < m; ++j)
            if (grid[i][j] == '.') {
                if (i) dp[i][j] += dp[i - 1][j];
                if (j) dp[i][j] += dp[i][j - 1];
            }
    cout << dp[n - 1][m - 1] << '\n';
    return 0;
}`,
            "1. Đếm số đường đi trong lưới có vật cản.\n2. Tìm đường đi ngắn nhất nếu chỉ được đi phải/xuống.\n3. Tối ưu DP lưới với hai hàng bộ nhớ.",
            []
        ),
        lesson(
            "BUỔI 38",
            "DP Đoạn Và Truy Hồi",
            [
                "[00:00 - 00:30] Trạng thái trên đoạn [l, r].",
                "[00:30 - 01:15] Quy hoạch động theo độ dài đoạn.",
                "[01:15 - 01:45] Truy hồi lời giải bằng mảng trace.",
                "[01:45 - 03:00] Bài tập tối ưu cắt đoạn và gộp đoạn."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> a = {1, 3, 1, 5, 2, 8};
    int n = a.size();
    vector<int> dp(n, 1);
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < i; ++j)
            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);
    cout << *max_element(dp.begin(), dp.end()) << '\n';
    return 0;
}`,
            "1. Xây dựng DP trên đoạn hoặc trên chỉ số.\n2. Tạo mảng trace để truy vết.\n3. Giải thích vì sao DP đoạn thường có độ phức tạp lớn.",
            []
        ),
        lesson(
            "BUỔI 39",
            "Trie, Hashing Và Tìm Kiếm Chuỗi",
            [
                "[00:00 - 00:30] Khi nào dùng trie thay vì set/map.",
                "[00:30 - 01:15] Hash chuỗi để so sánh nhanh và tìm trùng lặp.",
                "[01:15 - 01:45] Bài toán tiền tố, từ điển và gợi ý tự động.",
                "[01:45 - 03:00] Luyện bài tìm chuỗi con và kiểm tra xuất hiện."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<string> words = {"cat", "car", "dog"};
    unordered_set<string> st(words.begin(), words.end());
    cout << st.count("cat") << '\n';
    return 0;
}`,
            "1. Xây dựng từ điển bằng trie hoặc set.\n2. Kiểm tra một chuỗi có xuất hiện hay không.\n3. Thực hành hash chuỗi để so sánh tiền tố.",
            []
        ),
        lesson(
            "BUỔI 40",
            "Bootcamp DP & Chuỗi",
            [
                "[00:00 - 00:30] Chốt lại các công thức DP cốt lõi.",
                "[00:30 - 03:00] Luyện 4 bài tổng hợp về DP, LIS, LCS, chuỗi."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}`,
            "1. Giải bài DP một chiều.\n2. Giải bài LIS hoặc LCS.\n3. Giải bài chuỗi dùng trie hoặc hashing.",
            ["Sở GDĐT - Chuỗi đối xứng (qbstr)"]
        )
    ]
};

const phase6 = {
    phaseId: 6,
    title: "GIAI ĐOẠN 6: TỔNG ÔN & MOCK TEST",
    time: "THÁNG 10 - 11",
    duration: "8 Buổi (24 Giờ)",
    bgClass: "bg-rose-600",
    textClass: "text-rose-600",
    lightBgClass: "bg-rose-50",
    desc: "Tổng hợp toàn bộ kỹ năng, luyện tốc độ và chuẩn hóa chiến thuật làm đề trong phòng thi.",
    icon: "fa-trophy",
    requirements: "Đã hoàn thành toàn bộ 5 giai đoạn trước đó.",
    topics: "Ôn tập tổng hợp, chiến thuật thi, tối ưu code, mock test, phân tích lỗi.",
    output: "Sẵn sàng cho đề thi thật với nhịp độ làm bài, tối ưu và tâm lý ổn định.",
    lessons: [
        lesson(
            "BUỔI 41",
            "Chiến Thuật Làm Bài Và Đọc Đề",
            [
                "[00:00 - 00:30] Cách phân bổ thời gian cho từng câu.",
                "[00:30 - 01:15] Đọc đề, nhận diện mẫu bài và chọn hướng giải.",
                "[01:15 - 01:45] Viết code nhanh nhưng vẫn an toàn.",
                "[01:45 - 03:00] Thực hành một đề ngắn theo thời gian thực."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}`,
            "1. Lập checklist đọc đề trong 5 phút đầu.\n2. Tự đặt giới hạn thời gian cho từng bài.\n3. Ghi lại lỗi đọc đề thường gặp.",
            []
        ),
        lesson(
            "BUỔI 42",
            "Tối Ưu I/O, Debug Và Template",
            [
                "[00:00 - 00:30] Ôn lại fast I/O và các macro hữu ích.",
                "[00:30 - 01:15] Template chuẩn cho thi chuyên bằng C++.",
                "[01:15 - 01:45] Cách dùng debug print và kiểm tra biên.",
                "[01:45 - 03:00] Chữa lỗi thường gặp trong code thi thật."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cerr << "debug\n";
    return 0;
}`,
            "1. Hoàn thiện template thi chuẩn của riêng mình.\n2. Tập debug với test nhỏ.\n3. Xác định 3 lỗi biên thường gặp.",
            []
        ),
        lesson(
            "BUỔI 43",
            "Ôn Tập Mảng, STL Và Prefix Sum",
            [
                "[00:00 - 00:30] Gom lại các kỹ thuật trên mảng và STL.",
                "[00:30 - 01:15] Sắp xếp, set, map, prefix sum trong một đề tổng hợp.",
                "[01:15 - 01:45] Chọn cấu trúc dữ liệu phù hợp cho từng bài.",
                "[01:45 - 03:00] Giải 2 bài luyện tốc độ."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> a = {1, 2, 3, 4};
    vector<int> pref(a.size() + 1);
    for (int i = 0; i < (int)a.size(); ++i) pref[i + 1] = pref[i] + a[i];
    cout << pref.back() << '\n';
    return 0;
}`,
            "1. Ôn lại map/set và prefix sum.\n2. Giải bài truy vấn tổng trong thời gian ngắn.\n3. Chọn đúng cấu trúc dữ liệu cho dữ kiện lớn.",
            []
        ),
        lesson(
            "BUỔI 44",
            "Ôn Tập Số Học, Bit Và Đệ Quy",
            [
                "[00:00 - 00:30] Sàng, modulo và lũy thừa nhanh.",
                "[00:30 - 01:15] Bitmask và đệ quy quay lui.",
                "[01:15 - 01:45] Khi nào nên dùng công thức, khi nào nên duyệt.",
                "[01:45 - 03:00] Bài luyện tốc độ chuyên đề số học."
            ],
            `#include <bits/stdc++.h>
using namespace std;

long long mod_pow(long long a, long long b, long long mod) {
    long long res = 1 % mod;
    while (b > 0) {
        if (b & 1) res = res * a % mod;
        a = a * a % mod;
        b >>= 1;
    }
    return res;
}`,
            "1. Tự cài sàng và lũy thừa nhanh.\n2. Viết bài toán bitmask sinh tập con.\n3. Lập bảng các công thức số học cần nhớ.",
            []
        ),
        lesson(
            "BUỔI 45",
            "Ôn Tập Đồ Thị Và Cây",
            [
                "[00:00 - 00:30] Nhắc lại BFS, DFS, Dijkstra, topo, cây.",
                "[00:30 - 01:15] Chọn thuật toán phù hợp theo dạng đề.",
                "[01:15 - 01:45] Gợi ý cách viết code đồ thị an toàn.",
                "[01:45 - 03:00] Luyện 1 đề đồ thị tổng hợp."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    queue<int> q;
    q.push(1);
    cout << q.front() << '\n';
    return 0;
}`,
            "1. Phân biệt BFS và DFS trong thực tế.\n2. Chỉ ra khi nào phải dùng Dijkstra.\n3. Ôn lại topo sort và đường kính cây.",
            []
        ),
        lesson(
            "BUỔI 46",
            "Mock Test 1",
            [
                "[00:00 - 00:15] Phổ biến đề và chia chiến lược 4 câu.",
                "[00:15 - 03:00] Thi thử tổng hợp: mảng, chuỗi, số học, đồ thị."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}`,
            "1. Làm bài theo thứ tự ưu tiên điểm.\n2. Ghi lại câu nào cần bỏ qua để quay lại sau.\n3. Tự chấm lỗi sau khi nộp.",
            ["Đề luyện mô phỏng 4 bài theo format thi thật"]
        ),
        lesson(
            "BUỔI 47",
            "Mock Test 2",
            [
                "[00:00 - 00:15] Kiểm tra trạng thái trước khi làm bài.",
                "[00:15 - 03:00] Thi thử 4 bài nâng độ khó, giới hạn thời gian nghiêm ngặt."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}`,
            "1. Quản lý thời gian 3 tiếng như thi thật.\n2. Dừng đúng lúc khi kẹt ý tưởng.\n3. Tập thói quen viết lời giải ngắn gọn.",
            []
        ),
        lesson(
            "BUỔI 48",
            "Tổng Kết & Định Hướng Thi Thật",
            [
                "[00:00 - 00:45] Tổng kết toàn bộ kiến thức đã học.",
                "[00:45 - 01:30] Chữa các lỗi chiến lược và lỗi kỹ thuật.",
                "[01:30 - 03:00] Lập kế hoạch ôn tập cá nhân trước ngày thi."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Ready for contest" << '\n';
    return 0;
}`,
            "1. Lập checklist ôn thi 7 ngày cuối.\n2. Viết lại template riêng của bản thân.\n3. Chốt chiến thuật cho kỳ thi thật.",
            ["PTNK - bài tổng hợp cuối khóa", "Sở GDĐT - bài tổng ôn"]
        )
    ]
};

database.push(phase5, phase6);

const examLibrary = {
    PTNK: [
        {
            year: 2024,
            name: "Bộ đề luyện tập chuyên tin C++",
            tags: ["C++", "STL", "DP"],
            description: "Các đề luyện tập được chọn để rèn tư duy thuật toán, cấu trúc dữ liệu và kỹ năng cài đặt bằng C++.",
            realExams: ["PTNK - Dịch mã (nksev)", "PTNK - Số phong phú (nkabd)"]
        },
        {
            year: 2023,
            name: "Thực chiến tổng hợp Chuyên Tin",
            tags: ["Graph", "Greedy", "Prefix Sum"],
            description: "Bộ đề thiên về tối ưu I/O, truy vấn mảng, đồ thị và quy hoạch động cơ bản.",
            realExams: ["PTNK - Xây dựng thành phố (nkcity)", "PTNK - Chuỗi đối xứng (nkpalin)"]
        },
        {
            year: 2022,
            name: "Luyện đề theo chuyên đề",
            tags: ["Math", "Bit", "Search"],
            description: "Tập trung vào các bài toán số học, bitmask và tìm kiếm nhị phân thường gặp trong đề thi chuyên.",
            realExams: ["PTNK - Số không có ước chính phương (nknumfre)", "PTNK - Hội trường (nkrez)"]
        }
    ],
    "Sở GDĐT": [
        {
            year: 2024,
            name: "Đề luyện thi học sinh giỏi và chuyên tin",
            tags: ["BFS", "DFS", "Dijkstra"],
            description: "Nhóm đề thiên về đồ thị, đường đi ngắn nhất và tối ưu hóa mô hình bài toán bằng C++.",
            realExams: ["Sở GDĐT - Mê cung (qbmaze)", "Sở GDĐT - Đi đến trường (qbschool)"]
        },
        {
            year: 2023,
            name: "Đề tổng hợp mảng và chuỗi",
            tags: ["Array", "String", "Prefix Sum"],
            description: "Bài tập xoay quanh prefix sum, xử lý chuỗi, sắp xếp và truy vấn trên mảng.",
            realExams: ["Sở GDĐT - Hình chữ nhật (ts10hcm23b2)", "Sở GDĐT - Trạm thu phát sóng (ts10hcm19b3)"]
        },
        {
            year: 2022,
            name: "Đề luyện tập quy hoạch động",
            tags: ["DP", "LIS", "Knapsack"],
            description: "Các bài quy hoạch động từ cơ bản đến trung bình, phù hợp cho giai đoạn tổng ôn cuối khóa.",
            realExams: ["Sở GDĐT - Bậc thang (vsteps)", "Sở GDĐT - Dãy con tăng dài nhất (liq)"]
        }
    ]
};

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
    container.innerHTML = database.map(phase => `
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

function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    container.innerHTML = database.map(phase => `
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

function renderExams() {
    const container = document.getElementById('exams-container');
    let html = '';

    for (const [school, exams] of Object.entries(examLibrary)) {
        html += `
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b-4 border-primary-500 font-heading">
                    ${school === 'PTNK' ? '🏆 Phổ Thông Năng Khiếu (PTNK)' : '📚 Sở GD&ĐT TP.HCM'}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${exams.map(exam => `
                        <div class="soft-card rounded-2xl p-6 border-l-4 border-primary-500 hover:-translate-y-1 transition">
                            <div class="mb-4">
                                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Năm: ${exam.year}</p>
                                <h4 class="text-lg font-bold text-slate-900 mt-2 font-heading">${exam.name}</h4>
                            </div>
                            <div class="mb-4">
                                <div class="flex flex-wrap gap-2">
                                    ${exam.tags.map(tag => `
                                        <span class="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-100">${tag}</span>
                                    `).join('')}
                                </div>
                            </div>
                            <details class="mb-4">
                                <summary class="cursor-pointer font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-2">
                                    <i class="fa-solid fa-chevron-right"></i> Xem Chi Tiết
                                </summary>
                                <div class="mt-4 text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl whitespace-pre-wrap border border-slate-100">
                                    ${escapeHtml(exam.description)}
                                </div>
                            </details>
                            ${exam.realExams ? `
                                <div class="bg-accent-50 border border-accent-100 p-3 rounded-2xl text-sm text-slate-800">
                                    <p class="font-bold text-accent-700 mb-2">Ứng dụng thực chiến:</p>
                                    ${exam.realExams.map(real => `<p>✓ ${escapeHtml(real)}</p>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderOverview();
});