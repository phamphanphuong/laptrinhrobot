const phase2 = {
    phaseId: 2,
    title: "GIAI ĐOẠN 2: STL VÀ KỸ THUẬT TỐI ƯU MẢNG",
    time: "THÁNG 3 - 4",
    duration: "8 Buổi (24 Giờ)",
    bgClass: "bg-emerald-600",
    textClass: "text-emerald-600",
    lightBgClass: "bg-emerald-50",
    desc: "Làm chủ bộ thư viện chuẩn STL C++, rút ngắn thời gian code và nắm vững kỹ thuật mảng cộng dồn, hai con trỏ để khử độ phức tạp thuật toán.",
    icon: "fa-layer-group",
    requirements: "Hoàn thành Giai đoạn 1. Nắm vững vòng lặp và mảng cơ bản.",
    topics: "Struct, Pair, String, Sort, Map, Set, Prefix Sum 1D/2D, Two Pointers.",
    output: "Giải quyết gọn gàng Bài 2 trong các đề thi chuyên. Rút ngắn 50% số dòng code so với việc tự viết các cấu trúc dữ liệu thủ công.",
    lessons: [
        lesson(
            "BUỔI 9",
            "Gom nhóm dữ liệu: Struct và Pair",
            [
                "[00:00 - 00:45] Giới thiệu std::pair<int, int>. Truy xuất first và second. Ứng dụng lưu tọa độ (x, y) trên mặt phẳng.",
                "[00:45 - 01:30] Giới thiệu Struct: Gom nhóm nhiều thuộc tính (VD: Học sinh có Tên, Toán, Văn).",
                "[01:30 - 02:15] Khai báo mảng pair và mảng struct: vector<pair<int, int>> và vector<HocSinh>.",
                "[02:15 - 03:00] Thực hành: Quản lý danh sách điểm tọa độ, in ra tọa độ xa gốc tọa độ nhất."
            ],
            `#include <bits/stdc++.h>
using namespace std;

// Khai báo kiểu dữ liệu mới
struct Point {
    int x, y, id;
};
window.phase2 = phase2;
window.phase2 = phase2;
window.phase2 = phase2;
window.phase2 = phase2;

int main() {
    // Sử dụng pair
    pair<int, int> p1 = make_pair(3, 4);
    pair<int, int> p2 = {5, 12}; // Cú pháp C++11 ngắn gọn
    
    // Sử dụng struct
    Point p3 = {10, 20, 1};
    cout << "Toa do X: " << p3.x << ", ID: " << p3.id << '\\n';
    
    return 0;
}`,
            "1. Nhập N điểm trên mặt phẳng, tìm cặp điểm có khoảng cách lớn nhất.\n2. Lưu trữ thông tin N phân số (tử, mẫu). Rút gọn tất cả các phân số đó.\n3. Lưu trữ thông tin N học sinh và in ra học sinh có tổng điểm cao nhất.",
            ["Các bài toán Hình học tọa độ hoặc xếp hạng (Ranking) trong đề thi."]
        ),
        lesson(
            "BUỔI 10",
            "Xử lý Chuỗi (String) & Bẫy trôi lệnh",
            [
                "[00:00 - 00:45] Khai báo std::string. Độ dài s.length(). Nối chuỗi (+), so sánh chuỗi (==, <, >).",
                "[00:45 - 01:30] Hàm getline(cin, s) để đọc chuỗi có khoảng trắng.",
                "[01:30 - 02:15] Bẫy 'Trôi lệnh' kinh điển: Tại sao dùng cin >> n rồi gọi getline lại bị nhận chuỗi rỗng? Cách dùng cin.ignore().",
                "[02:15 - 03:00] Xử lý chuỗi: Đếm số lượng nguyên âm, viết hoa chữ cái đầu, kiểm tra chuỗi đối xứng (Palindrome)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    // BẪY: cin để lại ký tự '\\n' trong bộ đệm. Phải ignore() trước khi getline
    cin.ignore(); 
    
    string s;
    getline(cin, s); // Đọc cả dòng chứa khoảng trắng
    
    // Đảo ngược chuỗi bằng hàm STL
    string rev_s = s;
    reverse(rev_s.begin(), rev_s.end());
    
    if (s == rev_s) cout << "Doi xung\\n";
    else cout << "Khong doi xung\\n";
    
    return 0;
}`,
            "1. Chuẩn hóa họ tên: Xóa khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ.\n2. Đếm số lượng từ trong một câu văn.\n3. Nén chuỗi (VD: AAAABBBCCDAA -> 4A3B2C1D2A).",
            ["PTNK - Chuỗi tương đồng (NKSTRING)"]
        ),
        lesson(
            "BUỔI 11",
            "Sắp xếp O(N log N) & Comparator (Vũ khí bắt buộc)",
            [
                "[00:00 - 00:30] Thuật toán std::sort(). Phân tích độ phức tạp O(N log N) giúp chạy qua 10^5 phần tử.",
                "[00:30 - 01:15] Sắp xếp mảng cơ bản (Tăng dần, giảm dần dùng greater<int>()).",
                "[01:15 - 02:15] Kỹ năng tối quan trọng: Viết hàm Comparator (cmp) cho Struct/Pair để sắp xếp theo nhiều tiêu chí.",
                "[02:15 - 03:00] Bẫy so sánh nghiêm ngặt (Strict Weak Ordering): Hàm cmp phải trả về false nếu 2 phần tử bằng nhau, nếu không sẽ bị Runtime Error."
            ],
            `#include <bits/stdc++.h>
using namespace std;

struct Student {
    string name;
    int math, lit;
};

// Hàm cmp sắp xếp: Tổng điểm giảm dần. Nếu bằng nhau thì tên tăng dần (theo từ điển).
bool cmp(const Student& a, const Student& b) {
    int sum_a = a.math + a.lit;
    int sum_b = b.math + b.lit;
    if (sum_a != sum_b) return sum_a > sum_b; // Ưu tiên 1
    return a.name < b.name;                   // Ưu tiên 2
}

int main() {
    vector<Student> a = {{"An", 8, 9}, {"Binh", 9, 8}, {"Chi", 7, 7}};
    sort(a.begin(), a.end(), cmp);
    cout << a[0].name << '\\n'; // In ra người đứng đầu
    return 0;
}`,
            "1. Sắp xếp các phân số tăng dần.\n2. Bài toán ghép số: Cho các số, ghép lại thành số lớn nhất (VD: 3 và 30 ghép thành 330).\n3. Xếp hạng thí sinh thi chuyên Tin theo tổng điểm, điểm Tin, năm sinh.",
            ["PTNK - Bài toán ghép số", "Sở GDĐT - Xếp hạng huy chương."]
        ),
        lesson(
            "BUỔI 12",
            "Map & Set: Tìm kiếm và Loại bỏ trùng lặp O(log N)",
            [
                "[00:00 - 00:45] Set: Cấu trúc cây đỏ đen (Red-Black Tree). Lưu các phần tử duy nhất, tự động sắp xếp. O(log N).",
                "[00:45 - 01:30] Map: Lưu theo cặp (Key-Value). Ứng dụng đếm tần suất khi Key lớn đến 10^18 (Mảng đánh dấu bình thường sẽ bị tràn bộ nhớ).",
                "[01:30 - 02:15] Cảnh báo: Truy xuất map[x] khi x chưa tồn tại sẽ tự động tạo x với giá trị 0. Phải dùng map.count(x).",
                "[02:15 - 03:00] Khuyên dùng map/set thay vì unordered_map/unordered_set trong thi chuyên để tránh bị hack (Anti-hash test cases)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; cin >> n;
    map<long long, int> freq; // Đếm tần suất các số lên đến 10^18
    set<long long> unique_nums; // Lưu các số không trùng lặp

    for (int i = 0; i < n; i++) {
        long long x; cin >> x;
        freq[x]++;
        unique_nums.insert(x);
    }

    cout << "So luong phan tu khac nhau: " << unique_nums.size() << '\\n';
    return 0;
}`,
            "1. Tìm phần tử xuất hiện nhiều nhất trong dãy số có giá trị lên đến 10^18.\n2. Cho 2 mảng, in ra phần tử giao nhau của 2 mảng.\n3. Bài toán 2Sum: Tìm cặp số A[i] + A[j] = X bằng Map trong O(N log N).",
            ["PTNK - Đếm số lượng cặp phần tử", "Lê Hồng Phong - Thống kê dữ liệu lớn."]
        ),
        lesson(
            "BUỔI 13",
            "Prefix Sum 1D (Mảng cộng dồn) - Kỹ thuật khử TLE",
            [
                "[00:00 - 00:30] Bài toán thực tế: Tính tổng đoạn [L, R] với N = 10^5 và Q = 10^5 truy vấn. Vòng lặp for ngây thơ mất 10^10 phép tính -> TLE.",
                "[00:30 - 01:15] Xây dựng mảng cộng dồn: P[i] = P[i-1] + A[i]. Tại sao phải dùng chỉ số 1-based (Bắt đầu từ index 1)?",
                "[01:15 - 02:00] Công thức truy vấn O(1): Tổng đoạn [L, R] = P[R] - P[L-1].",
                "[02:00 - 03:00] Kết hợp Prefix Sum và Map để giải quyết bài toán mảng con có tổng bằng 0 hoặc chia hết cho K."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0); cin.tie(0);
    int n, q; cin >> n >> q;
    
    // Luôn khai báo kích thước n + 1 để dùng 1-based index
    vector<long long> a(n + 1), P(n + 1, 0);
    
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        P[i] = P[i - 1] + a[i]; // Xây dựng P O(N)
    }
    
    while (q--) {
        int l, r; cin >> l >> r;
        // Trả lời truy vấn O(1)
        cout << P[r] - P[l - 1] << '\\n'; 
    }
    return 0;
}`,
            "1. Tìm đoạn con liên tiếp độ dài K có tổng lớn nhất.\n2. Cập nhật mảng tĩnh bằng Mảng hiệu (Difference Array).\n3. Đếm số đoạn con liên tiếp có tổng bằng S.",
            ["PTNK - Truy vấn dãy số (NKSEQ)"]
        ),
        lesson(
            "BUỔI 14",
            "Prefix Sum 2D - Tính tổng hình chữ nhật",
            [
                "[00:00 - 00:45] Nâng cấp lên không gian 2 chiều. Nguyên lý bù trừ (Inclusion-Exclusion Principle).",
                "[00:45 - 01:30] Công thức xây dựng: P[i][j] = P[i-1][j] + P[i][j-1] - P[i-1][j-1] + A[i][j].",
                "[01:30 - 02:15] Công thức truy vấn: Tổng HCN từ (x1, y1) đến (x2, y2) = P[x2][y2] - P[x1-1][y2] - P[x2][y1-1] + P[x1-1][y1-1].",
                "[02:15 - 03:00] Thực hành: Vẽ bảng 2D ra giấy, gạch xóa các vùng để học sinh tự chứng minh công thức."
            ],
            `#include <bits/stdc++.h>
using namespace std;

long long P[1005][1005]; // Khai báo toàn cục

int main() {
    int n, m, q; cin >> n >> m >> q;
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= m; j++) {
            long long a; cin >> a;
            P[i][j] = P[i-1][j] + P[i][j-1] - P[i-1][j-1] + a;
        }
    }
    
    while(q--) {
        int x1, y1, x2, y2; cin >> x1 >> y1 >> x2 >> y2;
        long long sum = P[x2][y2] - P[x1-1][y2] - P[x2][y1-1] + P[x1-1][y1-1];
        cout << sum << '\\n';
    }
    return 0;
}`,
            "1. Tính tổng các phần tử trong một miền ảnh (Image Processing cơ bản).\n2. Tìm hình chữ nhật con có tổng các phần tử lớn nhất (Kích thước K x K).\n3. Bài toán trồng cây trên mảnh đất 2D.",
            ["Sở GDĐT - Bài toán tính tổng diện tích, vùng ảnh."]
        ),
        lesson(
            "BUỔI 15",
            "Hai Con Trỏ (Two Pointers) & Cửa Sổ Trượt (Sliding Window)",
            [
                "[00:00 - 00:45] Kỹ thuật Hai con trỏ (L và R). Áp dụng trên mảng đã sắp xếp. Tìm cặp số có tổng bằng S trong O(N).",
                "[00:45 - 01:30] Phân biệt Two Pointers (Co giãn tự do) và Sliding Window (Khung cửa sổ có kích thước cố định).",
                "[01:30 - 02:15] Sliding Window: Duy trì trạng thái của một đoạn liên tiếp khi thêm phần tử R và loại bỏ phần tử L.",
                "[02:15 - 03:00] Thực hành: Tìm đoạn con liên tiếp dài nhất có tổng nhỏ hơn hoặc bằng K."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k; cin >> n >> k;
    vector<int> a(n);
    for(int i=0; i<n; i++) cin >> a[i];
    
    // Tìm đoạn con liên tiếp có độ dài lớn nhất, tổng <= K
    int L = 0, max_len = 0;
    long long cur_sum = 0;
    
    for (int R = 0; R < n; R++) {
        cur_sum += a[R];
        // Cửa sổ trượt giãn ra. Nếu quá tổng K thì thu hẹp L lại
        while (cur_sum > k && L <= R) {
            cur_sum -= a[L];
            L++;
        }
        max_len = max(max_len, R - L + 1);
    }
    cout << max_len << '\\n';
    return 0;
}`,
            "1. Cho mảng đã sort, đếm số lượng cặp (i, j) sao cho A[i] + A[j] = X.\n2. Cửa sổ trượt cố định: Tìm trung bình cộng lớn nhất của một đoạn dài đúng K.\n3. Tìm xâu con liên tiếp dài nhất không chứa ký tự lặp lại.",
            ["Sở GDĐT - CẶP SỐ (PAIRS)"]
        ),
        lesson(
            "BUỔI 16",
            "Mock Test Giai Đoạn 2 - Phân tích thuật toán",
            [
                "[00:00 - 00:15] Chia sẻ kinh nghiệm: Nhìn Data Constraints đoán thuật toán (N=10^5 -> Sort/PrefixSum).",
                "[00:15 - 02:45] Đề thi 4 câu: 1 Cấu trúc Struct, 1 Chuỗi, 1 Two Pointers, 1 Prefix Sum 2D.",
                "[02:45 - 03:00] Sửa bài, kiểm tra xem học sinh có tối ưu I/O và dùng `long long` không."
            ],
            `// Sinh viên tự thực hành dưới áp lực thời gian (150 phút)`,
            "Thực hành kỹ năng phân bổ thời gian: Làm ngay Bài 1 và 2 trong 45 phút đầu.",
            ["Đề thi mô phỏng cấp thành phố."]
        )
    ]
};