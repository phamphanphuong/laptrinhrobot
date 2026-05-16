const phase3 = {
    phaseId: 3,
    title: "GIAI ĐOẠN 3: TOÁN SỐ HỌC VÀ TÌM KIẾM NHỊ PHÂN",
    time: "THÁNG 5 - 6",
    duration: "8 Buổi (24 Giờ)",
    bgClass: "bg-violet-600",
    textClass: "text-violet-600",
    lightBgClass: "bg-violet-50",
    desc: "Nắm vững các công cụ toán học mạnh mẽ nhất và vũ khí 'Chặt nhị phân' để tối ưu hóa thời gian chạy cho các bài toán phân loại học sinh giỏi.",
    icon: "fa-calculator",
    requirements: "Thành thạo mảng, cấu trúc lặp và hiểu về độ phức tạp thuật toán O(N).",
    topics: "Sàng Eratosthenes, Modulo, Lũy thừa nhanh, Backtracking, Binary Search, Bitmask.",
    output: "Ăn trọn điểm các bài toán số học, biết cách dùng chặt nhị phân trên kết quả để giải các bài toán tưởng chừng như không có thuật toán.",
    lessons: [
        lesson(
            "BUỔI 17",
            "Sàng Nguyên Tố Eratosthenes - O(N log log N)",
            [
                "[00:00 - 00:45] Giới hạn của hàm isPrime(N) O(sqrt(N)): Sẽ TLE nếu phải kiểm tra 10^5 số, mỗi số lên đến 10^7.",
                "[00:45 - 01:30] Nguyên lý Sàng Eratosthenes: Dùng mảng đánh dấu, bội số của số nguyên tố chắc chắn là hợp số.",
                "[01:30 - 02:15] Cài đặt tối ưu: Vòng lặp ngoài chạy đến sqrt(MAX), vòng lặp trong bắt đầu từ i*i.",
                "[02:15 - 03:00] Bẫy bộ nhớ: Sàng mảng boolean 10^7 phần tử tốn khoảng 10MB RAM, hoàn toàn an toàn (Giới hạn thường là 256MB). Khai báo mảng Sàng ở TOÀN CỤC (Global)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

const int MAXN = 10000000;
// Khai báo mảng toàn cục, mặc định là true (coi tất cả là số nguyên tố)
vector<bool> isPrime(MAXN + 1, true);

void sieve() {
    isPrime[0] = isPrime[1] = false;
    for (int p = 2; p * p <= MAXN; p++) {
        if (isPrime[p]) {
            // Đánh dấu các bội số của p
            for (int i = p * p; i <= MAXN; i += p)
                isPrime[i] = false;
        }
    }
}

int main() {
    sieve(); // Gọi 1 lần duy nhất ở đầu chương trình
    int q; cin >> q;
    while (q--) {
        int x; cin >> x;
        if (isPrime[x]) cout << "YES\\n";
        else cout << "NO\\n";
    }
    return 0;
}`,
            "1. Sàng nguyên tố và in ra K số nguyên tố đầu tiên.\n2. Ứng dụng Sàng kết hợp Prefix Sum: Đếm có bao nhiêu số nguyên tố trong đoạn [L, R] với 10^5 truy vấn.\n3. Sàng trên đoạn (Nâng cao): Lọc các số nguyên tố trong đoạn [L, R] với L, R lên tới 10^12 nhưng R - L <= 10^5.",
            ["PTNK - Bài toán đếm số lượng số nguyên tố (Subtask lớn)."]
        ),
        lesson(
            "BUỔI 18",
            "Phân tích Thừa số Nguyên tố & Đếm Ước",
            [
                "[00:00 - 00:45] Định lý cơ bản của Số học: Mọi số đều có thể phân tích thành tích các thừa số nguyên tố (N = p1^a * p2^b...).",
                "[00:45 - 01:30] Thuật toán phân tích trong O(sqrt(N)): Tách dần các ước số d từ 2 đến sqrt(N).",
                "[01:30 - 02:15] Công thức siêu việt: Số lượng ước của N = (a+1) * (b+1) *... Đây là công thức cứu mạng trong bài đếm ước số lớn.",
                "[02:15 - 03:00] Thực hành: Phân tích N! (N giai thừa) ra thừa số nguyên tố."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int countDivisors(long long n) {
    int total_divisors = 1;
    for (long long d = 2; d * d <= n; d++) {
        if (n % d == 0) {
            int count = 0;
            while (n % d == 0) {
                count++;
                n /= d;
            }
            // Áp dụng công thức (số mũ + 1)
            total_divisors *= (count + 1);
        }
    }
    // Nếu n còn lại lớn hơn 1, nó là số nguyên tố
    if (n > 1) {
        total_divisors *= 2; // n^1 -> (1 + 1) = 2
    }
    return total_divisors;
}

int main() {
    long long n; cin >> n;
    cout << "So luong uoc: " << countDivisors(n) << '\\n';
    return 0;
}`,
            "1. Viết chương trình in ra phân tích thừa số (VD: 60 = 2^2 * 3^1 * 5^1).\n2. Tìm số có nhiều ước nhất trong đoạn [1, N].\n3. Tính tổng các ước số của N dựa trên công thức chuỗi hình học.",
            ["PTNK - Số không có ước chính phương (nknumfre)", "PTNK - Số phong phú (nkabd)"]
        ),
        lesson(
            "BUỔI 19",
            "Modulo Arithmetic & Lũy thừa nhị phân (Fast Power)",
            [
                "[00:00 - 00:45] Tại sao đề bài hay yêu cầu in kết quả chia dư cho 10^9 + 7? (Số nguyên tố lớn, tránh tràn int).",
                "[00:45 - 01:30] Tính chất Modulo: (A + B) % M, (A * B) % M. Chú ý phép trừ: (A - B + M) % M để tránh số âm.",
                "[01:30 - 02:15] Bài toán: Tính A^B % M với B = 10^18. Vòng lặp for O(N) sẽ chết ngắc.",
                "[02:15 - 03:00] Thuật toán Lũy thừa nhị phân (Binary Exponentiation): Tính A^B trong O(log B)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

const long long MOD = 1e9 + 7;

// Tính (a^b) % mod trong O(log b)
long long fast_pow(long long a, long long b, long long mod) {
    long long res = 1;
    a %= mod;
    while (b > 0) {
        if (b % 2 == 1) { // Nếu b lẻ
            res = (res * a) % mod;
        }
        a = (a * a) % mod; // a = a^2
        b /= 2;            // b = b / 2
    }
    return res;
}

int main() {
    long long a, b;
    cin >> a >> b;
    cout << fast_pow(a, b, MOD) << '\\n';
    return 0;
}`,
            "1. Áp dụng: Tính số dư của số Fibonacci thứ N cho 10^9 + 7 (Bằng vòng lặp, N <= 10^6).\n2. Viết lại hàm lũy thừa nhanh bằng phương pháp Đệ quy.\n3. Tính tổ hợp chập K của N (nCk) theo modulo (Yêu cầu biết Nghịch đảo modulo - Giới thiệu thêm).",
            ["Mọi đề thi có yêu cầu 'in kết quả modulo 10^9+7 hoặc 998244353'."]
        ),
        lesson(
            "BUỔI 20",
            "Toán tử Bit (Bitwise) & Biểu diễn trạng thái (Bitmask)",
            [
                "[00:00 - 00:30] Hệ nhị phân. Các phép toán Bit: AND (&), OR (|), XOR (^), NOT (~), Dịch trái (<<), Dịch phải (>>).",
                "[00:30 - 01:15] Mẹo Bitwise: x & 1 (Kiểm tra chẵn lẻ), x << 1 (Nhân 2), x >> 1 (Chia 2).",
                "[01:15 - 02:15] Bitmask: Dùng 1 số nguyên để đại diện cho 1 tập hợp. VD: 5 (101) nghĩa là chọn phần tử thứ 0 và thứ 2.",
                "[02:15 - 03:00] Bật bit thứ i (x | (1 << i)), Tắt bit thứ i (x & ~(1 << i)), Kiểm tra bit thứ i ((x >> i) & 1)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 3;
    vector<int> a = {10, 20, 30};
    
    // In tất cả các tập con bằng Bitmask (2^N trường hợp)
    // Phù hợp với N <= 20
    for (int mask = 0; mask < (1 << n); mask++) {
        long long sum = 0;
        cout << "Tap con: { ";
        for (int i = 0; i < n; i++) {
            // Nếu bit thứ i của mask được bật
            if ((mask >> i) & 1) {
                cout << a[i] << " ";
                sum += a[i];
            }
        }
        cout << "} - Tong: " << sum << '\\n';
    }
    return 0;
}`,
            "1. Cho mảng N số (N <= 20), tìm tập con có tổng bằng S.\n2. Tìm số xuất hiện 1 lần trong mảng (tất cả các số khác xuất hiện 2 lần) bằng XOR O(N).\n3. Đếm số lượng bit 1 của một số nguyên.",
            ["Các bài toán giới hạn N <= 20 trong đề PTNK và Sở."]
        ),
        lesson(
            "BUỔI 21",
            "Đệ Quy (Recursion) & Quay lui (Backtracking)",
            [
                "[00:00 - 00:45] Định nghĩa đệ quy. Khái niệm Call Stack. Tầm quan trọng sinh tử của Điểm Dừng (Base Case).",
                "[00:45 - 01:30] Quay lui (Backtracking): Thử chọn -> Gọi đệ quy -> Xóa dấu vết (Bỏ chọn).",
                "[01:30 - 02:15] Vẽ cây đệ quy lên giấy để học sinh hình dung luồng thực thi.",
                "[02:15 - 03:00] Thực hành kinh điển: Sinh các chuỗi nhị phân độ dài N, Sinh hoán vị các số từ 1 đến N."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int n;
int x[100]; // Mảng lưu cấu hình
bool used[100]; // Mảng đánh dấu phần tử đã dùng

// Quay lui sinh hoán vị
void Try(int i) {
    for (int j = 1; j <= n; j++) {
        if (!used[j]) {
            x[i] = j;      // Thử chọn j
            used[j] = true; // Đánh dấu đã dùng
            
            if (i == n) {  // Base case: Đủ N phần tử
                for (int k = 1; k <= n; k++) cout << x[k] << " ";
                cout << '\\n';
            } else {
                Try(i + 1); // Đệ quy bước tiếp theo
            }
            used[j] = false; // QUAY LUI: Xóa dấu vết
        }
    }
}

int main() {
    cin >> n;
    Try(1);
    return 0;
}`,
            "1. Sinh tất cả các tổ hợp chập K của N.\n2. Sinh dãy ngoặc đúng độ dài 2N.\n3. Bài toán Xếp 8 Quân Hậu trên bàn cờ.",
            ["Sở GDĐT - Các bài toán liệt kê cấu hình, duyệt vét cạn."]
        ),
        lesson(
            "BUỔI 22",
            "Nhánh Cận (Branch & Bound) - Tối ưu Quay lui",
            [
                "[00:00 - 00:45] Backtracking trâu bò sẽ dễ bị TLE nếu test case hóc búa.",
                "[00:45 - 01:30] Kỹ thuật Nhánh cận: Nếu biết chắc chắn đường đi hiện tại không thể sinh ra kết quả tốt hơn Kỷ Lục (Best) hiện tại -> CẮT NHÁNH (Return sớm).",
                "[01:30 - 02:15] Bài toán Người du lịch (TSP): Tìm đường đi qua N thành phố chi phí nhỏ nhất.",
                "[02:15 - 03:00] Tối ưu hóa: Sắp xếp dữ liệu trước khi đệ quy để cắt nhánh sớm hơn."
            ],
            `// Cắt nhánh trong bài toán Người Du Lịch (Mô phỏng logic)
void Try(int i, int current_cost) {
    // Nếu chi phí hiện tại đã lớn hơn kỷ lục tốt nhất, cắt nhánh luôn
    if (current_cost >= min_cost_ever) return;
    
    // ... logic duyệt tiếp ...
}`,
            "1. Áp dụng nhánh cận vào bài toán Ba Lô bằng Backtracking.\n2. Tối ưu bài Xếp Hậu: Chỉ sinh các cấu hình thỏa mãn điều kiện đường chéo ngay từ lúc gán.",
            ["PTNK - Bài toán yêu cầu vét cạn tối ưu (Subtask 2)."]
        ),
        lesson(
            "BUỔI 23",
            "Binary Search (Tìm kiếm nhị phân) & Chặt nhị phân trên kết quả",
            [
                "[00:00 - 00:45] Lower_bound và Upper_bound trong STL. Cơ chế trả về con trỏ (iterator). Trừ đi name.begin() để lấy vị trí.",
                "[00:45 - 01:30] Đếm số lần xuất hiện của phần tử X trong đoạn [L, R] bằng upper_bound - lower_bound.",
                "[01:30 - 02:30] VŨ KHÍ TỐI THƯỢNG: Binary Search on Answer. Khi bài toán hỏi 'Tìm giá trị Max/Min thỏa mãn...', ta thử đoán một đáp án Mid, và viết hàm check() để xem Mid có thỏa mãn không.",
                "[02:30 - 03:00] Bẫy vòng lặp vô hạn: Xác định rõ Mid = L + (R-L)/2, L = Mid + 1, R = Mid."
            ],
            `#include <bits/stdc++.h>
using namespace std;

// Hàm check: Với khoảng cách nhỏ nhất là mid, có thể xếp được C con bò không?
bool check(long long mid, vector<long long>& a, int C) {
    int cows = 1;
    long long last_pos = a[0];
    for (int i = 1; i < a.size(); i++) {
        if (a[i] - last_pos >= mid) {
            cows++;
            last_pos = a[i];
            if (cows == C) return true;
        }
    }
    return false;
}

int main() {
    int N, C; cin >> N >> C;
    vector<long long> a(N);
    for (int i = 0; i < N; i++) cin >> a[i];
    sort(a.begin(), a.end());

    // Chặt nhị phân tìm khoảng cách cực đại
    long long L = 0, R = a[N-1] - a[0], ans = 0;
    while (L <= R) {
        long long mid = L + (R - L) / 2;
        if (check(mid, a, C)) {
            ans = mid;     // mid khả thi, lưu lại kỷ lục
            L = mid + 1;   // Thử tìm khoảng cách lớn hơn
        } else {
            R = mid - 1;   // mid quá lớn, phải giảm xuống
        }
    }
    cout << ans << '\\n';
    return 0;
}`,
            "1. Bài toán Chia thanh gỗ (Tìm độ dài đoạn ngắn nhất cực đại).\n2. Bài toán Copy tài liệu: 2 máy copy có tốc độ khác nhau, tìm thời gian tối thiểu copy được N bản.\n3. Đếm số cặp (i, j) sao cho A[i] + A[j] <= K bằng lower_bound.",
            ["PTNK - Bài toán phân lô đất", "VNOI - Xếp bò (Aggressive Cows)"]
        ),
        lesson(
            "BUỔI 24",
            "Mock Test Giai Đoạn 3 - Áp lực thời gian",
            [
                "[00:00 - 00:15] Nhắc nhở chiến thuật làm bài: Đọc kĩ giới hạn dữ liệu. N=10^18 -> Modulo/FastPow. N=10^5 -> Binary Search.",
                "[00:15 - 02:45] Làm đề thi mô phỏng 150 phút. 4 câu: 1 Sàng nguyên tố, 1 Backtracking, 1 Binary Search on Answer, 1 Prefix Sum.",
                "[02:45 - 03:00] Thu bài bằng USB/Network. Chấm qua Themis. Phân tích nguyên nhân TLE."
            ],
            `// Sinh viên tự thực chiến. Giáo viên đóng vai trò giám thị.`,
            "Hoàn thành tối thiểu 50% số điểm bài Binary Search. Bắt buộc viết code ngây thơ (Subtask 1) cho các câu khó.",
            ["Đề thi mô phỏng cấp cao chuẩn Sở GDĐT TP.HCM."]
        )
    ]
};
window.phase3 = phase3;