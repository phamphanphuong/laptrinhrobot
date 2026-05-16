const phase5 = {
    phaseId: 5,
    title: "GIAI ĐOẠN 5: QUY HOẠCH ĐỘNG NÂNG CAO & XỬ LÝ CHUỖI",
    time: "THÁNG 9",
    duration: "8 Buổi (24 Giờ)",
    bgClass: "bg-indigo-600",
    textClass: "text-indigo-600",
    lightBgClass: "bg-indigo-50",
    desc: "Làm chủ tư duy trạng thái phức tạp trên Lưới (Grid DP), kỹ thuật Truy vết (Trace) và Thuật toán băm chuỗi (Hashing) siêu tốc.",
    icon: "fa-diagram-project",
    requirements: "Thành thạo Ba lô 0/1 và cấu trúc mảng 2 chiều.",
    topics: "DP Lưới, Trace DP, Edit Distance, String Hashing, Rolling Hash, Palindrome Hashing.",
    output: "Hoàn thiện tư duy để ăn trọn điểm Bài 3 và Bài 4, đặc biệt là các bài chuỗi dài 10^5 của PTNK.",
    lessons: [
        lesson(
            "BUỔI 33",
            "Quy hoạch động trên lưới (Grid DP) - Đếm số đường đi",
            [
                "[00:00 - 00:45] Mô hình hóa mảng 2D thành đồ thị. Từ ô (i, j) chỉ được đi sang Phải (i, j+1) hoặc Xuống (i+1, j).",
                "[00:45 - 01:30] Đếm số cách đi từ (1, 1) đến (N, M). Công thức: dp[i][j] = dp[i-1][j] + dp[i][j-1].",
                "[01:30 - 02:15] Xử lý Ô Cấm (Vật cản): Nếu grid[i][j] == '#' thì dp[i][j] = 0.",
                "[02:15 - 03:00] Bẫy khởi tạo: Phải cẩn thận gán dp[1][1] = 1 (hoặc grid[0][0] = 1 nếu dùng 0-based) trước khi chạy vòng lặp."
            ],
            `#include <bits/stdc++.h>
using namespace std;

const long long MOD = 1e9 + 7;
string grid[1005];
long long dp[1005][1005];

int main() {
    int n, m; cin >> n >> m;
    for(int i = 0; i < n; i++) cin >> grid[i];

    // Base case
    if (grid[0][0] == '.') dp[0][0] = 1;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (grid[i][j] == '#') {
                dp[i][j] = 0;
            } else {
                if (i > 0) dp[i][j] = (dp[i][j] + dp[i-1][j]) % MOD; // Tới từ phía trên
                if (j > 0) dp[i][j] = (dp[i][j] + dp[i][j-1]) % MOD; // Tới từ bên trái
            }
        }
    }
    cout << dp[n-1][m-1] << '\\n';
    return 0;
}`,
            "1. Tính số đường đi trong mê cung có chướng ngại vật.\n2. Lưới có phí: Thay vì đếm số đường đi, hãy tìm đường đi có tổng chi phí nhỏ nhất (Min Path Sum).\n3. Bài toán thu thập Apple: Đi sang phải/xuống, gom được số táo nhiều nhất.",
            ["Các bài toán Di chuyển robot trên bảng."]
        ),
        lesson(
            "BUỔI 34",
            "Kỹ thuật Truy vết (Trace) trong Quy hoạch động",
            [
                "[00:00 - 00:45] Bài toán: Không chỉ in ra Tổng lớn nhất, mà phải in ra ĐƯỜNG ĐI (các bước Right, Down) để đạt được tổng đó.",
                "[00:45 - 01:30] Cách 1: Dùng mảng trace[i][j] lưu lại tọa độ ô trước đó đã dẫn tới (i, j).",
                "[01:30 - 02:15] Cách 2 (Khuyên dùng): Không cần mảng trace, lùi ngược từ ô đích (N, M), so sánh ngược lại bảng DP để biết đã tới từ (N-1, M) hay (N, M-1).",
                "[02:15 - 03:00] Thực hành: In ra cấu hình của bài Ba lô 0/1 (Danh sách các vật được chọn)."
            ],
            `// Cấu trúc Truy vết (Trace) cho bài Grid DP (Lùi ngược)
int i = n - 1, j = m - 1;
string path = "";

while (i > 0 || j > 0) {
    if (i == 0) {
        path += "R"; j--; // Đụng trần, chỉ có thể đi từ trái qua
    } else if (j == 0) {
        path += "D"; i--; // Đụng tường trái, chỉ có thể đi từ trên xuống
    } else {
        // Kiểm tra xem dp[i][j] được tạo ra từ đâu
        if (dp[i][j] == dp[i-1][j] + grid_value[i][j]) {
            path += "D"; i--;
        } else {
            path += "R"; j--;
        }
    }
}
// Vì lùi từ đích về đích, phải đảo ngược chuỗi
reverse(path.begin(), path.end());
cout << path << '\\n';`,
            "1. In ra đường đi thu thập nhiều xu nhất.\n2. In ra xâu con chung dài nhất (LCS) thực sự của 2 chuỗi (Không chỉ in độ dài).\n3. In ra danh sách các món đồ mang theo trong bài Ba lô 0/1.",
            ["Sở GDĐT - Đường đi (qbmax8) - Yêu cầu in giá trị max và đường đi."]
        ),
        lesson(
            "BUỔI 35",
            "DP trên Chuỗi: Khoảng cách Levenshtein (Edit Distance)",
            [
                "[00:00 - 00:45] Bài toán biến đổi chuỗi S1 thành S2 bằng 3 thao tác: Chèn, Xóa, Thay thế. Tìm số thao tác ít nhất.",
                "[00:45 - 01:30] Xây dựng trạng thái: dp[i][j] là số thao tác ít nhất để biến i ký tự đầu của S1 thành j ký tự đầu của S2.",
                "[01:30 - 02:15] Base cases: dp[i][0] = i (Xóa i lần), dp[0][j] = j (Chèn j lần).",
                "[02:15 - 03:00] Phân tích công thức chuyển: Nếu S1[i-1] == S2[j-1] -> dp[i][j] = dp[i-1][j-1]. Nếu khác: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    string word1, word2; cin >> word1 >> word2;
    int m = word1.length(), n = word2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // Giữ nguyên
            } else {
                dp[i][j] = 1 + min({
                    dp[i - 1][j],    // Xóa
                    dp[i][j - 1],    // Chèn
                    dp[i - 1][j - 1] // Thay thế
                });
            }
        }
    }
    cout << dp[m][n] << '\\n';
    return 0;
}`,
            "1. Tính khoảng cách chỉnh sửa giữa 2 đoạn gen.\n2. Bài toán Palindrome DP: Tìm số thao tác chèn ít nhất để biến chuỗi S thành chuỗi đối xứng.",
            ["PTNK - Chuỗi tương đồng (NKSTRING)"]
        ),
        lesson(
            "BUỔI 36",
            "Thuật toán Băm Chuỗi (Rolling Hash) Cơ bản",
            [
                "[00:00 - 00:45] Đặt vấn đề: So sánh 2 chuỗi độ dài N mất O(N). Mảng N chuỗi tốn O(N^2). Quá chậm!",
                "[00:45 - 01:30] Ý tưởng Băm (Hash): Biến 1 chuỗi thành 1 số nguyên. Nếu Hash(A) == Hash(B) thì A == B (Xác suất đúng 99.99%). So sánh 2 số nguyên chỉ mất O(1).",
                "[01:30 - 02:15] Công thức băm đa thức (Polynomial Rolling Hash): H = (s[0]*B^n-1 + s[1]*B^n-2 + ... + s[n-1]) % MOD.",
                "[02:15 - 03:00] Bẫy Collision (Đụng độ): Cách chọn Hệ số Base (thường 311 hoặc 31) và MOD (1e9+7) để tránh 2 chuỗi khác nhau sinh ra cùng số Hash."
            ],
            `#include <bits/stdc++.h>
using namespace std;

const long long BASE = 311;
const long long MOD = 1e9 + 7;

long long getHash(string s) {
    long long hash_val = 0;
    for (char c : s) {
        hash_val = (hash_val * BASE + c) % MOD;
    }
    return hash_val;
}

int main() {
    string a, b; cin >> a >> b;
    if (getHash(a) == getHash(b)) cout << "Giong nhau\\n";
    else cout << "Khac nhau\\n";
    return 0;
}`,
            "1. Tự cài đặt hàm Hash.\n2. Cho N từ vựng, đếm số lượng từ vựng duy nhất bằng cách Hash chúng rồi bỏ vào std::set<long long>.\n3. Khám phá cách MOD ngăn chặn tràn số (Overflow).",
            ["PTNK - Chuỗi tương đồng (NKSTRING)"]
        ),
        lesson(
            "BUỔI 37",
            "Hashing Đoạn Con & Thuật toán Rabin-Karp",
            [
                "[00:00 - 00:45] Bài toán: Tính Hash của chuỗi con S[L..R] trong thời gian O(1) để trả lời 10^5 truy vấn.",
                "[00:45 - 01:30] Kỹ thuật Mảng Hash Cộng Dồn: Hash[i] = (Hash[i-1] * BASE + S[i]) % MOD. Tính trước mảng lũy thừa POW[i] = BASE^i % MOD.",
                "[01:30 - 02:15] Công thức O(1): Hash(L, R) = (Hash[R] - Hash[L-1] * POW[R - L + 1] + MOD^2) % MOD.",
                "[02:15 - 03:00] Thuật toán Rabin-Karp: Tìm số lần xuất hiện của chuỗi P trong chuỗi T siêu tốc bằng Hashing."
            ],
            `#include <bits/stdc++.h>
using namespace std;

const int MAXN = 1e5 + 5;
const long long BASE = 311, MOD = 1e9 + 7;
long long H[MAXN], POW[MAXN];

// Chuẩn bị Hashing trong O(N)
void buildHash(string s) {
    int n = s.length();
    POW[0] = 1;
    for (int i = 1; i <= n; i++) {
        POW[i] = (POW[i - 1] * BASE) % MOD;
        H[i] = (H[i - 1] * BASE + s[i - 1]) % MOD;
    }
}

// Lấy Hash đoạn [L, R] (1-based) trong O(1)
long long getHash(int l, int r) {
    long long res = (H[r] - H[l - 1] * POW[r - l + 1] % MOD + MOD) % MOD;
    return res;
}`,
            "1. Cho chuỗi S, kiểm tra xem S[a..b] có giống S[c..d] không trong O(1).\n2. Tìm chuỗi con chung dài nhất của 2 chuỗi bằng Hashing + Binary Search.\n3. Đếm số lượng chuỗi con phân biệt của S.",
            ["PTNK - Chuỗi tương đồng (NKSTRING)"]
        ),
        lesson(
            "BUỔI 38",
            "Hash Xuôi & Ngược - Kiểm tra Palindrome O(1)",
            [
                "[00:00 - 00:45] Đặc trưng của chuỗi đối xứng (Palindrome): Đọc xuôi bằng đọc ngược.",
                "[00:45 - 01:30] Kỹ thuật: Xây dựng 2 mảng Hash. H_xuôi cho chuỗi S, và H_ngược cho chuỗi S bị đảo ngược (reverse).",
                "[01:30 - 02:30] Kiểm tra chuỗi con S[L..R] có phải Palindrome không trong O(1): Hash_xuôi(L, R) == Hash_ngược(N - R + 1, N - L + 1).",
                "[02:30 - 03:00] Thực hành tổng hợp: Đếm số lượng chuỗi con đối xứng trong chuỗi S dài 10^5."
            ],
            `// Logic kiểm tra Palindrome siêu tốc
bool isPalindrome(int L, int R, int N) {
    long long h_forward = getHashForward(L, R);
    
    // Ánh xạ tọa độ (L, R) sang mảng ngược
    int rev_L = N - R + 1;
    int rev_R = N - L + 1;
    long long h_backward = getHashBackward(rev_L, rev_R);
    
    return h_forward == h_backward;
}`,
            "1. Tìm chuỗi con đối xứng dài nhất của S (Kết hợp Binary Search độ dài).\n2. Cắt chuỗi S thành các đoạn đối xứng nhỏ nhất.\n3. Thêm/Xóa 1 ký tự để tạo thành Palindrome.",
            ["PTNK - Chuỗi tương đồng (NKSTRING)"]
        ),
        lesson(
            "BUỔI 39",
            "Quy hoạch động trên Chuỗi & Double Hashing",
            [
                "[00:00 - 00:45] Khi 1 MOD bị 'Hack' (Hash Collision): Kỹ thuật Double Hashing (Dùng 2 BASE và 2 MOD khác nhau song song).",
                "[00:45 - 01:30] Nếu Hash1(A) == Hash1(B) VÀ Hash2(A) == Hash2(B) -> Tỷ lệ đụng độ gần như bằng 0.",
                "[01:30 - 02:15] DP trên chuỗi: Tìm cách ghép các từ trong Từ điển (Dictionary) để tạo thành chuỗi S.",
                "[02:15 - 03:00] Tổng kết kỹ năng xử lý mảng ký tự và chuỗi lớn trong C++."
            ],
            `// Double Hashing Struct
struct HashValue {
    long long h1, h2;
    bool operator==(const HashValue& o) const {
        return h1 == o.h1 && h2 == o.h2;
    }
};`,
            "1. Cài đặt Double Hashing cho thuật toán Rabin-Karp an toàn tuyệt đối.\n2. Bài toán: Kiểm tra xem chuỗi S có thể được chia thành các từ thuộc tập hợp M từ cho trước không.",
            []
        ),
        lesson(
            "BUỔI 40",
            "Mock Test Giai Đoạn 5 - Vượt rào tử thần",
            [
                "[00:00 - 00:15] Dặn dò: Không lạm dụng Hashing nếu có thể dùng Hai Con Trỏ (Two Pointers) cho bài toán String nhỏ.",
                "[00:15 - 02:45] Thi thử 4 bài nâng cao: 1 bài DP Grid có Trace, 1 bài Edit Distance, 1 bài Truy vấn Chuỗi bằng Hash, 1 bài toán tổng hợp.",
                "[02:45 - 03:00] Đánh giá: Ở giai đoạn này, học sinh nào giải được 3/4 bài là đã đủ trình độ đỗ PTNK."
            ],
            `// Không có code mẫu. Học sinh phải tự gọi lại kiến thức DP và Hash.`,
            "Tự implement thuật toán Hashing và Trace DP dưới áp lực phòng thi.",
            ["Các bài toán cấp độ Thành phố / Olympic 30 tháng 4."]
        )
    ]
};
window.phase5 = phase5;