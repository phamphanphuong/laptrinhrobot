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
                "Làm Quen C++ & Template I/O Nhanh (Bắt buộc)",
                [
                    "[00:00 - 00:30] Cài đặt IDE (Code::Blocks/Dev-C++). Giải thích tư duy biên dịch code offline.",
                    "[00:30 - 01:15] Cấu trúc khung: include, namespace std, hàm main. Giải thích vì sao dùng <bits/stdc++.h>.",
                    "[01:15 - 01:45] Tối ưu I/O: ios::sync_with_stdio(false); cin.tie(nullptr); (Giải thích cặn kẽ để chống TLE).",
                    "[01:45 - 03:00] I/O File cơ bản: Dùng freopen để mô phỏng thi Themis. Thực hành bài A+B."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Tối ưu hóa I/O - Bắt buộc trong mọi bài thi
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    // Mở file (nếu thi offline)
    // freopen("CAU1.INP", "r", stdin);
    // freopen("CAU1.OUT", "w", stdout);

    long long a, b;
    if (cin >> a >> b) {
        cout << a + b << '\\n';
    }
    return 0;
}`,
                "1. Viết template chuẩn và lưu lại để dùng cho 47 buổi còn lại.\n2. Thực hành đọc/ghi file đuôi .INP và .OUT.\n3. Nộp bài A+B lên một hệ thống Online Judge để làm quen với thông báo AC, WA, TLE.",
                ["Mọi đề thi chuyên Tin (Kỹ năng bắt buộc)"]
            ),
            lesson(
                "BUỔI 2",
                "Kiểu Dữ Liệu & Rủi Ro Tràn Số (Overflow)",
                [
                    "[00:00 - 00:45] Phân biệt int (2 tỷ) và long long (9 tỷ tỷ). Khắc cốt ghi tâm: Tính tổng/tích lớn luôn dùng long long.",
                    "[00:45 - 01:30] Xử lý số thập phân: double, fixed, setprecision() để làm tròn đúng yêu cầu đề.",
                    "[01:30 - 02:15] Toán tử chia lấy dư (Modulo %): Ứng dụng để kiểm tra chẵn lẻ, tách chữ số.",
                    "[02:15 - 03:00] Bài tập ép kiểu: (long long)a * b để tránh tràn số trung gian."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a = 1000000, b = 2000000;
    // Sai lầm kinh điển: a * b sẽ bị tràn int trước khi gán cho c
    // long long c = a * b; // SAI
    
    // Ép kiểu đúng:
    long long c = (long long)a * b; 
    
    // In số thập phân 2 chữ số
    double d = 10.0 / 3.0;
    cout << fixed << setprecision(2) << d << '\\n';
    return 0;
}`,
                "1. Tính diện tích hình chữ nhật với cạnh lên tới 10^9.\n2. Tính điểm trung bình của 3 môn làm tròn 2 chữ số.\n3. Đổi thời gian từ giây sang định dạng HH:MM:SS.",
                ["Sở GDĐT - Các bài toán khởi động tính toán cơ bản"]
            ),
            lesson(
                "BUỔI 3",
                "Rẽ Nhánh & Phân Tích Logic Biên",
                [
                    "[00:00 - 00:30] Cấu trúc if/else if/else. Toán tử logic && (AND), || (OR), ! (NOT).",
                    "[00:30 - 01:15] Kỹ thuật lồng ghép điều kiện ngắn gọn, tránh viết code quá dài.",
                    "[01:15 - 02:00] Phân tích Test Biên (Edge Cases): Số 0, số âm, điều kiện không tưởng.",
                    "[02:00 - 03:00] Thực hành: Giải phương trình bậc nhất, kiểm tra năm nhuận, phân loại tam giác."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b, c;
    cin >> a >> b >> c;
    
    // Kiểm tra tam giác hợp lệ
    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b == c) cout << "Deu\\n";
        else if (a == b || b == c || a == c) cout << "Can\\n";
        else if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a) cout << "Vuong\\n";
        else cout << "Thuong\\n";
    } else {
        cout << "Khong hop le\\n";
    }
    return 0;
}`,
                "1. Bài toán tính tiền taxi theo các mốc km khác nhau.\n2. Kiểm tra tính hợp lệ của ngày tháng năm.\n3. Tìm số lớn thứ nhì trong 4 số nguyên.",
                []
            ),
            lesson(
                "BUỔI 4",
                "Vòng Lặp (For/While) & Khử Độ Phức Tạp Thuật Toán",
                [
                    "[00:00 - 00:45] Giới thiệu Big O Notation O(N). Giới hạn 1 giây ~ 10^8 phép tính.",
                    "[00:45 - 01:30] Vòng lặp for: Tính tổng, đếm số lượng.",
                    "[01:30 - 02:15] Vòng lặp while: Tách chữ số, tìm UCLN.",
                    "[02:15 - 03:00] Bài toán đếm ước: Vì sao chỉ chạy for đến sqrt(N) thay vì N?"
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;
    int count_divisors = 0;
    
    // Tối ưu: Chỉ lặp đến căn bậc 2 của n -> O(sqrt(N))
    for (long long i = 1; i * i <= n; ++i) {
        if (n % i == 0) {
            count_divisors++; // Ước i
            if (i * i != n) count_divisors++; // Ước n/i
        }
    }
    cout << count_divisors << '\\n';
    return 0;
}`,
                "1. Tính giai thừa của N modulo 10^9+7.\n2. Đếm số lượng chữ số chẵn của một số N.\n3. Kiểm tra số nguyên tố bằng vòng lặp tối ưu O(sqrt(N)).",
                ["Đề thi PTNK - Các câu khởi động đếm số lượng"]
            ),
            lesson(
                "BUỔI 5-7",
                "Mảng 1 Chiều, Hàm Tự Tạo & Thực Hành Tổng Hợp",
                [
                    "[Buổi 5] Khai báo mảng tĩnh, vector. Truy xuất index từ 0. Duyệt mảng tìm Max/Min.",
                    "[Buổi 6] Hàm (Functions): Tách nhỏ code (VD: hàm isPrime). Truyền tham chiếu (&) và tham trị.",
                    "[Buổi 7] Kỹ thuật đếm tần suất (Frequency Array) bằng mảng đánh dấu.",
                    "[Thực hành] Các dạng bài: Đảo ngược mảng, tìm phần tử xuất hiện nhiều nhất."
                ],
                `#include <bits/stdc++.h>
using namespace std;

// Hàm kiểm tra nguyên tố độc lập
bool isPrime(long long n) {
    if (n < 2) return false;
    for (long long i = 2; i * i <= n; ++i)
        if (n % i == 0) return false;
    return true;
}

int main() {
    int n; cin >> n;
    vector<int> a(n);
    int prime_count = 0;
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
        if (isPrime(a[i])) prime_count++;
    }
    cout << prime_count << '\\n';
    return 0;
}`,
                "Làm quen với việc đọc dữ liệu N phần tử, lưu vào vector, truyền vector vào hàm để xử lý và trả về kết quả.",
                ["Sở GDĐT - Dạng bài xử lý dãy số nguyên"]
            ),
            lesson(
                "BUỔI 8",
                "Mock Test Giai Đoạn 1",
                [
                    "[00:00 - 00:15] Phổ biến quy chế làm bài: Đặt tên file đúng, tắt Internet.",
                    "[00:15 - 01:00] Hướng dẫn học sinh tự sinh file test bằng tay để check code.",
                    "[01:00 - 03:00] Thi thử offline 4 bài (chấm bằng Themis)."
                ],
                `// Học sinh tự viết lại toàn bộ template, IO file.`,
                "Hoàn thành 4 bài: 1. Logic cơ bản | 2. Vòng lặp toán học | 3. Mảng 1 chiều | 4. Đếm tần suất nhỏ.",
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
                "BUỔI 9-11",
                "Sắp xếp (Sort), Struct & Pair (Vũ khí phân tích dữ liệu)",
                [
                    "[Buổi 9] std::pair<int, int> và mảng pair để lưu tọa độ, giá trị đi kèm vị trí ban đầu.",
                    "[Buổi 10] struct: Gom nhóm dữ liệu phức tạp (VD: Phân số, Học sinh).",
                    "[Buổi 11] Hàm std::sort. Viết hàm cmp (Comparator) để sắp xếp theo nhiều tiêu chí (VD: Điểm giảm dần, tên tăng dần)."
                ],
                `#include <bits/stdc++.h>
using namespace std;

struct Item {
    int weight, value, index;
};

// Sắp xếp: Ưu tiên giá trị giảm dần, nếu bằng thì ưu tiên khối lượng tăng dần
bool cmp(const Item& a, const Item& b) {
    if (a.value != b.value) return a.value > b.value;
    return a.weight < b.weight;
}

int main() {
    vector<Item> items = {{5, 10, 1}, {2, 10, 2}, {3, 5, 3}};
    sort(items.begin(), items.end(), cmp);
    cout << "ID vat pham tot nhat: " << items[0].index << '\\n';
    return 0;
}`,
                "1. Sắp xếp mảng phân số.\n2. Bài toán ghép số tạo thành số lớn nhất (VD: 3 và 30 ghép thành 330).\n3. Sắp xếp các điểm trên mặt phẳng tọa độ theo khoảng cách tới gốc tọa độ.",
                ["Sở GDĐT - Bài toán xếp hạng, lựa chọn tham lam"]
            ),
            lesson(
                "BUỔI 12",
                "Cấu trúc dữ liệu Map & Set (Tìm kiếm O(log N))",
                [
                    "[00:00 - 00:45] std::set: Lưu các phần tử duy nhất, tự động sắp xếp. Ứng dụng: Lọc trùng lặp.",
                    "[00:45 - 01:30] std::map: Lưu cặp Key-Value. Tự động sắp xếp theo Key. Ứng dụng: Đếm tần suất khi giá trị N quá lớn không thể dùng mảng tĩnh.",
                    "[01:30 - 02:15] std::unordered_map: Băm (Hash) O(1) nhưng rủi ro tràn bộ nhớ. Khuyên dùng map tiêu chuẩn trong thi chuyên.",
                    "[02:15 - 03:00] Thực hành: Bài toán 2Sum (Tìm cặp số có tổng bằng K)."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k; cin >> n >> k;
    vector<int> a(n);
    map<int, int> freq;
    long long pairs = 0;
    
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
        // Tìm xem k - a[i] đã xuất hiện trước đó chưa
        int target = k - a[i];
        if (freq.count(target)) {
            pairs += freq[target];
        }
        freq[a[i]]++; // Cập nhật tần suất của a[i]
    }
    cout << pairs << '\\n';
    return 0;
}`,
                "1. Đếm số phần tử khác nhau trong mảng.\n2. Tìm phần tử xuất hiện nhiều nhất (N, A[i] <= 10^9).\n3. Bài toán tìm đoạn con có các phần tử phân biệt (kết hợp Two Pointers).",
                ["PTNK - Bài toán đếm cặp số", "Sở GDĐT - Thống kê dữ liệu"]
            ),
            lesson(
                "BUỔI 13",
                "Prefix Sum 1D (Mảng Cộng Dồn) & Kỹ thuật truy vấn O(1)",
                [
                    "[00:00 - 00:30] Nỗi đau TLE: Bài toán tính tổng đoạn [L, R] với 10^5 truy vấn.",
                    "[00:30 - 01:15] Xây dựng mảng cộng dồn P[i] = P[i-1] + A[i]. Luôn dùng 1-based index (bắt đầu từ 1).",
                    "[01:15 - 01:45] Công thức thần thánh: Tổng [L, R] = P[R] - P[L-1].",
                    "[01:45 - 03:00] Bẫy thực chiến: Mảng P bắt buộc dùng long long để tránh tràn."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false); cin.tie(nullptr);
    int n, q;
    if (!(cin >> n >> q)) return 0;

    vector<long long> a(n + 1), pref(n + 1, 0);
    for (int i = 1; i <= n; ++i) {
        cin >> a[i];
        pref[i] = pref[i - 1] + a[i];
    }

    while (q--) {
        int l, r;
        cin >> l >> r;
        cout << pref[r] - pref[l - 1] << '\\n';
    }
    return 0;
}`,
                "1. Tìm đoạn con liên tiếp độ dài K có tổng lớn nhất.\n2. Đếm số lượng đoạn con có tổng bằng 0 (Kết hợp Map).\n3. Prefix Sum kết hợp mảng đánh dấu (Frequency).",
                ["Đề chuyên Lê Hồng Phong 2020 - Bài 1", "Sở GDĐT 2019 - Trạm thu phát sóng"]
            ),
            lesson(
                "BUỔI 14-16",
                "Prefix Sum 2D, Two Pointers & Cửa Sổ Trượt (Sliding Window)",
                [
                    "[Buổi 14] Prefix Sum 2D: P[i][j] = P[i-1][j] + P[i][j-1] - P[i-1][j-1] + A[i][j]. Tính tổng hình chữ nhật.",
                    "[Buổi 15] Two Pointers: 2 con trỏ chạy trên mảng đã sắp xếp. Sliding Window: Duy trì một 'cửa sổ' dữ liệu hợp lệ (VD: Tìm chuỗi con dài nhất không chứa ký tự lặp).",
                    "[Buổi 16] Bootcamp giải đề tập trung, áp dụng mix các kỹ thuật."
                ],
                `// Code mẫu Sliding Window tìm đoạn con max sum độ dài K
long long max_sum = 0, window_sum = 0;
for (int i = 0; i < k; ++i) window_sum += a[i];
max_sum = window_sum;
for (int i = k; i < n; ++i) {
    window_sum += a[i] - a[i - k];
    max_sum = max(max_sum, window_sum);
}`,
                "Luyện độ nhạy bén: Khi nào dùng thuật toán O(N) (Two pointers), khi nào dùng O(N log N) (Binary Search).",
                ["Sở GDĐT - Truy vấn bảng 2D", "PTNK - Bài toán dãy con"]
            )
        ]
    },
    {
        phaseId: 3,
        title: "GIAI ĐOẠN 3: TOÁN, SỐ HỌC VÀ TÌM KIẾM NHỊ PHÂN",
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
                "BUỔI 17-19",
                "Số học chuyên sâu (Sàng nguyên tố, Modulo, Thừa số nguyên tố)",
                [
                    "[Buổi 17] Sàng Eratosthenes (O(N log log N)). Lọc các số nguyên tố siêu tốc lên đến 10^7.",
                    "[Buổi 18] Phân tích thừa số nguyên tố. Đếm số lượng ước của một số dựa trên công thức tích (số mũ + 1).",
                    "[Buổi 19] Modulo Arithmetic: Công thức (A*B)%M, (A+B)%M. Cực kỳ quan trọng để chống tràn số trong các bài đếm tổ hợp."
                ],
                `#include <bits/stdc++.h>
using namespace std;

const int MAX = 1000000;
vector<bool> isPrime(MAX + 1, true);

void sieve() {
    isPrime[0] = isPrime[1] = false;
    for (int p = 2; p * p <= MAX; p++) {
        if (isPrime[p]) {
            for (int i = p * p; i <= MAX; i += p)
                isPrime[i] = false;
        }
    }
}

int main() {
    sieve();
    int n; cin >> n;
    if(isPrime[n]) cout << "YES\\n"; else cout << "NO\\n";
    return 0;
}`,
                "Lập trình sàng nguyên tố. Đếm số nguyên tố trong đoạn [L, R] bằng cách kết hợp Sàng và Prefix Sum.",
                ["PTNK - Số không có ước chính phương (nknumfre)", "PTNK - Số phong phú (nkabd)"]
            ),
            lesson(
                "BUỔI 20-22",
                "Toán tử Bit (Bitwise) & Đệ quy Quay lui (Backtracking)",
                [
                    "[Buổi 20] Toán tử AND (&), OR (|), XOR (^), Dịch bit (<<, >>). Cách dùng bit để đại diện cho tập hợp con (Bitmask).",
                    "[Buổi 21] Bản chất của Đệ quy (Call Stack). Bài toán sinh hoán vị, sinh tổ hợp.",
                    "[Buổi 22] Cấu trúc Backtracking: Duyệt qua các khả năng, ĐÁNH DẤU, gọi đệ quy, rồi BỎ ĐÁNH DẤU."
                ],
                `// Code mẫu đệ quy quay lui sinh chuỗi nhị phân độ dài N
void Try(int i, vector<int>& a, int n) {
    for (int j = 0; j <= 1; ++j) {
        a[i] = j;
        if (i == n) {
            for(int k=1; k<=n; k++) cout << a[k]; cout << '\\n';
        } else {
            Try(i + 1, a, n);
        }
    }
}`,
                "Sinh toàn bộ dãy ngoặc đúng đắn (Catalan number). Xếp 8 quân hậu trên bàn cờ vua.",
                ["Sở GDĐT - Các bài toán liệt kê cấu hình"]
            ),
            lesson(
                "BUỔI 23",
                "Tìm kiếm nhị phân (Binary Search) - Vũ khí săn điểm tuyệt đối",
                [
                    "[00:00 - 00:45] Thuật toán chia đôi không gian O(log N). Bắt buộc mảng phải sắp xếp.",
                    "[00:45 - 01:30] Viết hàm lower_bound (phần tử đầu tiên >= X) và upper_bound (phần tử đầu tiên > X) từ đầu.",
                    "[01:30 - 02:15] Dùng hàm STL lower_bound/upper_bound và cách thao tác với con trỏ (iterator).",
                    "[02:15 - 03:00] Tuyệt kỹ: Tìm kiếm nhị phân trên KẾT QUẢ (Binary Search on Answer)."
                ],
                `#include <bits/stdc++.h>
using namespace std;

// Kiểm tra xem với giới hạn 'mid', có thỏa mãn điều kiện đề bài không
bool check(long long mid, const vector<int>& a, int k) {
    // Logic của bài toán cụ thể
    return true; 
}

int main() {
    long long L = 0, R = 1e15, ans = -1;
    while (L <= R) {
        long long mid = L + (R - L) / 2;
        if (check(mid, a, k)) {
            ans = mid;
            R = mid - 1; // Tìm kết quả nhỏ nhất thỏa mãn
        } else {
            L = mid + 1;
        }
    }
    return 0;
}`,
                "1. Tìm số lần xuất hiện của phần tử X trong mảng O(log N).\n2. Bài toán chia cắt thanh gỗ (Chặt nhị phân trên kết quả).\n3. Bài toán vắt sữa bò/xếp bò vào chuồng sao cho khoảng cách min là max.",
                ["PTNK - Bài toán phân lô đất", "VNOI - Đi cáp treo"]
            ),
            lesson(
                "BUỔI 24",
                "Mock Test Giai Đoạn 3",
                [
                    "[00:00 - 00:15] Phổ biến quy chế làm bài.",
                    "[00:15 - 03:00] Đề tập trung vào số học và tìm kiếm nhị phân."
                ],
                `// Học sinh tự thi`,
                "Áp dụng triệt để: Đọc giới hạn N <= 10^5 -> Định hướng giải bằng O(N log N) (Sort + Binary Search).",
                []
            )
        ]
    },
    {
        phaseId: 4,
        title: "GIAI ĐOẠN 4: LÝ THUYẾT ĐỒ THỊ VÀ QUY HOẠCH ĐỘNG",
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
                "BUỔI 25-27",
                "Đồ thị, BFS (Chiều rộng) & DFS (Chiều sâu)",
                [
                    "[Buổi 25] Biểu diễn đồ thị bằng danh sách kề (vector<int> adj[]). Cài đặt thuật toán loang BFS bằng std::queue. Tìm đường đi ngắn nhất trên đồ thị không trọng số.",
                    "[Buổi 26] DFS bằng đệ quy. Đếm số thành phần liên thông. Kỹ thuật Flood Fill (Loang vết dầu) trên lưới 2D (Bài toán mê cung).",
                    "[Buổi 27] Dijkstra - Tìm đường đi ngắn nhất trên đồ thị có trọng số dương bằng std::priority_queue."
                ],
                `// Loang BFS trên lưới 2D tìm đường đi ngắn nhất
int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

void bfs(int startX, int startY) {
    queue<pair<int, int>> q;
    q.push({startX, startY});
    dist[startX][startY] = 0;
    
    while(!q.empty()) {
        auto [x, y] = q.front(); q.pop();
        for(int i = 0; i < 4; i++) {
            int nx = x + dx[i], ny = y + dy[i];
            if(nx >= 0 && nx < N && ny >= 0 && ny < M && grid[nx][ny] != '#' && dist[nx][ny] == -1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx, ny});
            }
        }
    }
}`,
                "1. Loang tìm đường thoát khỏi mê cung.\n2. Đếm số vùng đảo (diện tích miền liên thông) trên bản đồ lưới.\n3. Cài đặt thuật toán Dijkstra từ nhà đến trường.",
                ["Sở GDĐT - Mê cung (qbmaze)", "Sở GDĐT - Đi đến trường (qbschool)"]
            ),
            lesson(
                "BUỔI 28-29",
                "Cấu trúc Cây (Tree) & Topological Sort",
                [
                    "[Buổi 28] Cây: Đồ thị vô hướng liên thông không có chu trình. Tìm đường kính của cây bằng 2 lần BFS/DFS.",
                    "[Buổi 29] Topological Sort: Sắp xếp các đỉnh của đồ thị có hướng không chu trình (DAG) bằng mảng bán bậc vào (In-degree) và Queue."
                ],
                `// Code mẫu tính bậc vào và Topo Sort cơ bản`,
                "Ứng dụng Topo Sort để giải bài toán sắp xếp công việc phụ thuộc lẫn nhau.",
                []
            ),
            lesson(
                "BUỔI 30",
                "Quy Hoạch Động (DP) Cơ Bản & Ba Lô 0/1",
                [
                    "[00:00 - 00:45] DP là gì? Học cách trả lời 3 câu hỏi: 1. Trạng thái? 2. Base case? 3. Công thức truy hồi?",
                    "[00:45 - 01:30] Phân tích Ba lô 0/1: Chọn vật sao cho tổng giá trị max, tổng khối lượng <= W. Gọi dp[i][j] là xét i vật, sức chứa j.",
                    "[01:30 - 02:15] Tối ưu bộ nhớ DP Ba Lô xuống mảng 1 chiều. Bẫy: Vòng lặp chứa khối lượng phải lặp NGƯỢC từ W về w[i].",
                    "[02:15 - 03:00] Nhận diện Ba lô ẩn: Các bài toán chia tập hợp có cùng bản chất."
                ],
                `#include <bits/stdc++.h>
using namespace std;

int main() {
    int N, W; cin >> N >> W;
    vector<int> weight(N), value(N);
    for(int i=0; i<N; i++) cin >> weight[i] >> value[i];

    // Tối ưu DP mảng 1 chiều
    vector<long long> dp(W + 1, 0);

    for(int i = 0; i < N; ++i) {
        // Lặp ngược để mỗi vật chỉ được chọn 1 lần
        for(int j = W; j >= weight[i]; --j) {
            dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    cout << dp[W] << '\\n';
    return 0;
}`,
                "1. Bài toán đi cầu thang (Fibonacci DP).\n2. Cài đặt chuẩn bài toán Ba lô 0/1.\n3. Bài toán phân chia tài sản thành 2 phần bằng nhau nhất.",
                ["Sở GDĐT - Bài toán Bậc thang", "Trần Đại Nghĩa - Phân chia tài sản"]
            ),
            lesson(
                "BUỔI 31-32",
                "DP: Dãy Con Tăng Dài Nhất (LIS) & Chuỗi Con Chung",
                [
                    "[Buổi 31] LIS: Thuật toán quy hoạch động O(N^2) cơ bản. Tối ưu thuật toán LIS xuống O(N log N) bằng vector và lower_bound.",
                    "[Buổi 32] Xâu con chung dài nhất (LCS) bằng mảng DP 2 chiều. Truy vết (Trace) để in ra cấu hình thỏa mãn."
                ],
                `// Code mẫu LIS tối ưu O(N log N)
vector<int> tail;
for(int x : a) {
    auto it = lower_bound(tail.begin(), tail.end(), x);
    if(it == tail.end()) tail.push_back(x);
    else *it = x;
}
cout << tail.size(); // Chiều dài LIS`,
                "Thực hành nhận diện dấu hiệu bài toán cần dùng LIS/LCS.",
                ["Sở GDĐT - Dãy con tăng dài nhất (liq)"]
            )
        ]
    },
    {
        phaseId: 5,
        title: "GIAI ĐOẠN 5: QUY HOẠCH ĐỘNG NÂNG CAO & XỬ LÝ CHUỖI",
        time: "THÁNG 9",
        duration: "8 Buổi (24 Giờ)",
        bgClass: "bg-indigo-600",
        textClass: "text-indigo-600",
        lightBgClass: "bg-indigo-50",
        desc: "Làm chủ tư duy trạng thái phức tạp, DP trên lưới và kỹ thuật Hashing chuỗi.",
        icon: "fa-diagram-project",
        requirements: "Hoàn thiện vững chắc Giai đoạn 4.",
        topics: "DP Lưới, Hashing, Trie.",
        output: "Ăn trọn điểm bài số 3 hoặc 4 trong đề thi.",
        lessons: [
            lesson(
                "BUỔI 33-36",
                "Quy hoạch động trên Lưới (Grid DP) & Truy hồi",
                [
                    "[Buổi 33] Trạng thái DP trên Lưới 2D. Tính số đường đi từ (1,1) đến (N,M) qua các vật cản.",
                    "[Buổi 34] DP tìm đường đi thu thập được nhiều giá trị/đồng xu nhất trên lưới.",
                    "[Buổi 35] Kỹ thuật lưu vết (Trace). Tạo mảng song song để truy vết từ trạng thái cuối ngược về đầu.",
                    "[Buổi 36] DP đoạn (Interval DP) - Ứng dụng bài toán cắt thanh gỗ, nhân ma trận (Giới thiệu tư duy nâng cao)."
                ],
                `// DP tìm đường đi tổng max trên lưới
dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j];`,
                "Giải các bài toán DP phức tạp và bắt buộc in ra đường đi (kết hợp Truy vết).",
                ["Sở GDĐT - Đường đi (qbmax8)"]
            ),
            lesson(
                "BUỔI 37-40",
                "Xử lý Chuỗi (String) & Hashing",
                [
                    "[Buổi 37] Cấu trúc chuỗi trong C++. Các thao tác cắt chuỗi (substr), tìm kiếm (find).",
                    "[Buổi 38] Thuật toán Hashing (Băm chuỗi): Biến một chuỗi thành 1 số nguyên lớn để so sánh O(1). Modulo 10^9+7.",
                    "[Buổi 39] Kiểm tra chuỗi đối xứng (Palindrome) siêu tốc bằng Hashing xuôi + ngược.",
                    "[Buổi 40] Bootamp: Cày đề về mảng và chuỗi."
                ],
                `// Hashing cơ bản (Minh họa)`,
                "Thực hành phân tích các bài toán có chuỗi dài 10^5.",
                ["PTNK - Chuỗi đối xứng (nkpalin)"]
            )
        ]
    },
    {
        phaseId: 6,
        title: "GIAI ĐOẠN 6: TỔNG ÔN ĐỈNH CAO & MOCK TEST",
        time: "THÁNG 10 - 11",
        duration: "8 Buổi (24 Giờ)",
        bgClass: "bg-rose-600",
        textClass: "text-rose-600",
        lightBgClass: "bg-rose-50",
        desc: "Tổng hợp toàn bộ kỹ năng, luyện tốc độ và chuẩn hóa chiến thuật phòng thi offline.",
        icon: "fa-trophy",
        requirements: "Đã hoàn thành 5 giai đoạn trước.",
        topics: "Chiến thuật thi, tối ưu I/O, Debug phòng máy, Mock Test.",
        output: "Sẵn sàng 100% tinh thần, kỹ năng và tốc độ cho kỳ thi chuyên Tin thực tế.",
        lessons: [
            lesson(
                "BUỔI 41-43",
                "Chiến thuật phòng thi & Tối ưu Test (Stress Test)",
                [
                    "[Buổi 41] Kỹ thuật 'Đọc hiểu đề': Nhận diện bài toán từ câu chữ. Viết Brute-Force (Cách ngây thơ) để luôn lấy được 30-40% số điểm test nhỏ.",
                    "[Buổi 42] Sinh test tự động (Stress Testing): Hướng dẫn viết 1 file Python nhỏ để sinh ra hàng ngàn bộ test ngẫu nhiên.",
                    "[Buổi 43] Chấm chéo: Chạy code Brute-Force (code chuẩn, chậm) và code Thuật Toán (nhanh nhưng dễ sai) trên file test sinh ra. Dùng FC (File Compare) trong Windows CMD để tìm test sai."
                ],
                `// Chiến thuật quan trọng nhất: TUYỆT ĐỐI KHÔNG BỎ TRỐNG. 
// Luôn viết code Brute-force vét cạn cho N <= 100.`,
                "Rèn bản lĩnh phòng thi: Luôn gõ code an toàn lấy điểm Subtask 1 trước khi lao vào tối ưu thuật toán cho Subtask cuối.",
                []
            ),
            lesson(
                "BUỔI 44-48",
                "Mock Test Chuyên Sâu (Thi thử chuẩn HCMC)",
                [
                    "[Buổi 44] Đề thi thử PTNK các năm cũ: Ngắt mạng, thời gian 150 phút. Dùng IDE cơ bản.",
                    "[Buổi 45] Sửa đề PTNK: Phân tích TLE, WA. Tại sao code bị mất điểm mảng?",
                    "[Buổi 46] Đề thi thử Sở GDĐT TP.HCM: Bám sát ma trận đề chuyên Tin Lê Hồng Phong.",
                    "[Buổi 47] Sửa đề Sở GDĐT. Rèn dũa thao tác copy nộp file .CPP.",
                    "[Buổi 48] Căn dặn cuối cùng: Template I/O, Khai báo bộ nhớ tĩnh toàn cục (Global arrays) thay vì khai báo trong hàm main() để tránh tràn Stack, Checklist kiểm tra tên file I/O."
                ],
                `// Template cuối cùng mang vào phòng thi
#include <bits/stdc++.h>
using namespace std;

// Khai báo mảng tĩnh cực lớn ở ngoải hàm main để tránh Stack Overflow
const int MAXN = 1e6 + 5;
long long a[MAXN];

int main() {
    ios::sync_with_stdio(0); cin.tie(0);
    // freopen("CAU1.INP", "r", stdin);
    // freopen("CAU1.OUT", "w", stdout);
    
    return 0;
}`,
                "Học sinh tự động reflex: Ngồi vào máy là gõ template, bật ios::sync_with_stdio, kiểm tra giới hạn mảng N, W.",
                ["Trọn bộ đề chuyên Tin TP.HCM"]
            )
        ]
    }
];

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