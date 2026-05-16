const phase6 = {
    phaseId: 6,
    title: "GIAI ĐOẠN 6: TỔNG ÔN THỰC CHIẾN & MOCK TEST",
    time: "THÁNG 10 - 11",
    duration: "8 Buổi (24 Giờ)",
    bgClass: "bg-rose-600",
    textClass: "text-rose-600",
    lightBgClass: "bg-rose-50",
    desc: "Đóng gói toàn bộ kiến thức, mài giũa chiến thuật phòng thi, kỹ năng sinh test tự động (Stress Testing) và rèn luyện tâm lý thép qua các bài thi thử.",
    icon: "fa-trophy",
    requirements: "Đã hoàn thành toàn bộ 5 giai đoạn trước. Có khả năng chịu được áp lực thời gian cao.",
    topics: "Chiến thuật Subtask, Stress Testing, Debug offline, Tối ưu hóa, Thi thử tổng hợp.",
    output: "Hoàn thiện bản lĩnh thi đấu. Biết cách phân bổ 150 phút hợp lý, tuyệt đối không nộp bài bị 0 điểm vì lỗi ngớ ngẩn (I/O, tràn số).",
    lessons: [
        lesson(
            "BUỔI 41",
            "Chiến thuật phòng thi & Nghệ thuật lấy điểm Subtask",
            [
                "[00:00 - 00:45] Quy tắc 150 phút: 10 phút đầu ĐỌC HẾT ĐỀ. Không code ngay. Phân loại bài: Dễ (Code 15p), Vừa (Code 30p), Khó (Để sau cùng).",
                "[00:45 - 01:30] Nghệ thuật Subtask: Đề thi chuyên luôn chia điểm theo N. Nếu bài khó quá, phải viết ngay 2 vòng for lồng nhau (O(N^2)) để vét 30-40% điểm của Subtask N <= 1000.",
                "[01:30 - 02:15] Kỹ thuật 'Code Trâu' (Brute-force): Code thuật toán ngây thơ nhất nhưng chắc chắn ĐÚNG để làm mốc so sánh (Baseline).",
                "[02:15 - 03:00] Bẫy nộp bài: Kiểm tra file .INP, .OUT (Thừa khoảng trắng, sai chữ hoa/thường). Themis chấm bằng máy, sai 1 ký tự là 0 điểm toàn bài."
            ],
            `// Cấu trúc vét Subtask trong 1 file code
#include <bits/stdc++.h>
using namespace std;

void subtask1() {
    // Trâu bò O(N^2) hoặc O(N^3) cho N <= 10^3
    // Chắc chắn lấy 30% - 40% điểm
}

void subtask_full() {
    // Thuật toán tối ưu O(N log N) hoặc O(N) cho N <= 10^5
    // Có nguy cơ code sai (WA)
}

int main() {
    int n; cin >> n;
    // Tự động rẽ nhánh theo kích thước Test
    if (n <= 1000) {
        subtask1();
    } else {
        subtask_full();
    }
    return 0;
}`,
            "1. Luyện viết nhanh code Brute-force vét cạn cho 3 bài toán khó.\n2. Lập Checklist 5 bước kiểm tra trước khi tắt máy nộp bài (Tên file, ios_base, long long, tràn mảng, output format).",
            ["Mọi đề thi PTNK và Sở GDĐT đều áp dụng chiến thuật này."]
        ),
        lesson(
            "BUỔI 42",
            "Sinh Test tự động (Stress Testing) & Kỹ thuật Debug offline",
            [
                "[00:00 - 01:00] Vấn đề: Nghĩ ra thuật toán Tối ưu nhưng nộp lên Themis báo WA (Sai kết quả) mà không biết sai ở đâu (vì không có test case để xem).",
                "[01:00 - 02:00] Giải pháp Stress Testing: Viết 3 file: 1 file sinh dữ liệu ngẫu nhiên (Generator), 1 file code Trâu (chậm nhưng chuẩn), 1 file code Tối ưu (nhanh nhưng dễ sai).",
                "[02:00 - 03:00] Dùng Script C++ hoặc CMD Windows để chạy hàng ngàn test case ngẫu nhiên. Nếu code Trâu và code Tối ưu ra kết quả khác nhau -> Dừng lại và in ra test sai (Hack test)."
            ],
            `// Code sinh dữ liệu ngẫu nhiên (Generator.cpp)
#include <bits/stdc++.h>
using namespace std;

// Hàm sinh số ngẫu nhiên trong khoảng [L, R]
long long Rand(long long l, long long r) {
    return l + (1LL * rand() * (RAND_MAX + 1) + rand()) % (r - l + 1);
}

int main() {
    srand(time(NULL)); // Khởi tạo seed
    int n = Rand(1, 100); // Sinh N ngẫu nhiên từ 1 đến 100
    cout << n << "\\n";
    for(int i = 1; i <= n; i++) {
        cout << Rand(1, 1000000) << " "; // Sinh mảng ngẫu nhiên
    }
    return 0;
}`,
            "1. Thực hành viết 1 file sinh test cho mảng ngẫu nhiên.\n2. Viết file batch (.bat) trong Windows để tự động so sánh kết quả 2 file .exe.",
            ["Kỹ năng tối thượng để tự cứu mình khi bị WA trong phòng thi offline."]
        ),
        lesson(
            "BUỔI 43",
            "Tổng Ôn Tốc Độ 1: Mảng, Chuỗi & Cấu Trúc Dữ Liệu",
            [
                "[00:00 - 01:00] Nhắc lại các lỗi chết người: Quên xóa bộ đệm (cin.ignore) trước khi getline, sử dụng map thay vì unordered_map để chống bị hack.",
                "[01:00 - 02:00] Ôn tập Prefix Sum 1D/2D, Two Pointers. Kỹ năng nhận diện: N = 10^5 mà có truy vấn đoạn thì 99% là Prefix Sum hoặc Binary Search.",
                "[02:00 - 03:00] Speed coding: Cho 3 bài tập cơ bản, yêu cầu học sinh gõ code, test và submit hoàn thiện trong đúng 45 phút."
            ],
            `// Template luyện phản xạ gõ nhanh
#include <bits/stdc++.h>
#define ll long long
#define pb push_back
#define fi first
#define se second
using namespace std;

const int MAXN = 2e5 + 5;
long long a[MAXN], pref[MAXN];

int main() {
    ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    // Code here...
    return 0;
}`,
            "1. Giải nhanh 3 bài xử lý mảng và chuỗi trên VNOJ.\n2. Tối ưu code sao cho ngắn gọn, ít biến phụ nhất có thể.",
            ["Sở GDĐT - Trạm thu phát sóng", "PTNK - Bài toán ghép chuỗi."]
        ),
        lesson(
            "BUỔI 44",
            "Tổng Ôn Tốc Độ 2: Số học, Bitmask & Tìm kiếm",
            [
                "[00:00 - 01:00] Sàng nguyên tố: Nhắc lại cách cài đặt O(N log log N). Nhắc lại Lũy thừa nhị phân O(log N) và Modulo 1e9+7.",
                "[01:00 - 02:00] Backtracking & Bitmask: Luyện viết nhanh code sinh hoán vị và sinh tập con. Nhớ kỹ năng Cắt tỉa nhánh (Branch & Bound).",
                "[02:00 - 03:00] Binary Search on Answer: Đọc đề, tìm từ khóa 'Giá trị Lớn nhất của Nhỏ nhất' hoặc 'Nhỏ nhất của Lớn nhất' -> Bật công tắc Chặt nhị phân."
            ],
            `// Khung sườn Binary Search on Answer quen thuộc
long long L = 1, R = 1e18, ans = -1;
while(L <= R) {
    long long mid = L + (R - L) / 2;
    if (check(mid)) {
        ans = mid;
        L = mid + 1; // Thử tìm kết quả tốt hơn
    } else {
        R = mid - 1;
    }
}`,
            "1. Tự tay gõ lại Sàng Eratosthenes trong dưới 3 phút.\n2. Giải 2 bài toán tìm kiếm nhị phân trên kết quả (VD: Bài toán Chia bánh).",
            ["PTNK - Phân lô đất", "VNOI - Cắt gỗ."]
        ),
        lesson(
            "BUỔI 45",
            "Tổng Ôn Tốc Độ 3: Đồ thị & Quy hoạch động (DP)",
            [
                "[00:00 - 01:00] Đồ thị: Phân biệt khi nào dùng BFS (đường đi ngắn nhất không trọng số), khi nào dùng DFS (Đếm vùng liên thông), khi nào Dijkstra (Có trọng số dương).",
                "[01:00 - 02:00] DP: Ôn lại 3 dạng kinh điển: Ba lô 0/1 (Duyệt ngược sức chứa), LIS (Dùng vector + lower_bound), LCS (Bảng 2D).",
                "[02:00 - 03:00] Kỹ năng đọc lỗi: Bị TLE ở bài Đồ thị thường do thiếu mảng visited hoặc chưa pop priority_queue hợp lý. Bị Memory Limit Exceeded do mảng DP quá lớn (10000x10000)."
            ],
            `// Bẫy kinh điển bài Đồ thị: Quên gán visited = true NGAY KHI PUSH VÀO QUEUE
queue<int> q;
q.push(start);
visited[start] = true; // Bắt buộc phải có

while(!q.empty()) {
    int u = q.front(); q.pop();
    for(int v : adj[u]) {
        if(!visited[v]) {
            visited[v] = true; // Gán ngay lập tức
            q.push(v);
        }
    }
}`,
            "1. Code nhanh thuật toán Loang BFS trên bảng 2D có vật cản.\n2. Cài đặt lại thuật toán Ba lô 0/1 tối ưu mảng 1 chiều.",
            ["Sở GDĐT - Mê cung", "Sở GDĐT - Bậc thang."]
        ),
        lesson(
            "BUỔI 46",
            "Mock Test 1: Mô phỏng Đề Sở GD&ĐT TP.HCM (Lê Hồng Phong)",
            [
                "[00:00 - 00:15] Ngắt mạng hoàn toàn. Bật chế độ thi nghiêm ngặt. Phát đề trên giấy A4.",
                "[00:15 - 02:45] Làm bài 150 phút. Cấu trúc: 1 Bài toán học đếm số lượng, 1 Bài chuỗi/mảng cộng dồn, 1 Bài DP (Ba lô/LIS), 1 Bài Đồ thị (Dijkstra/Loang).",
                "[02:45 - 03:00] Thu bài bằng Themis. Thầy giáo chấm và xuất file log lỗi (Tất cả test case xanh/đỏ)."
            ],
            `// Kỳ thi giả lập: Sự im lặng tuyệt đối.`,
            "Mục tiêu: Đạt được tối thiểu 60-70/100 điểm. Lấy trọn điểm 2 bài đầu. Subtask 2 bài sau.",
            ["Đề thi tham khảo cấu trúc Lê Hồng Phong."]
        ),
        lesson(
            "BUỔI 47",
            "Mock Test 2: Mô phỏng Đề Phổ Thông Năng Khiếu",
            [
                "[00:00 - 00:15] Đề PTNK thường nặng về Toán, Tổ hợp và Các thủ thuật String (Hashing). Tâm lý phải cực kỳ vững vàng vì đề sẽ đọc rất 'trừu tượng'.",
                "[00:15 - 02:45] Thi thử 150 phút. Yêu cầu học sinh áp dụng triệt để kỹ năng Stress Testing nếu bị bế tắc thuật toán tối ưu.",
                "[02:45 - 03:00] Thu bài và chấm điểm. Chấp nhận điểm số thấp ở đề này để rèn sức chịu đựng."
            ],
            `// Kỳ thi giả lập độ khó cực đại.`,
            "Mục tiêu: Không nộp giấy trắng (0 điểm bài nào). Ít nhất phải vét được Subtask bằng trâu bò.",
            ["Đề thi tham khảo cấu trúc Phổ thông Năng khiếu."]
        ),
        lesson(
            "BUỔI 48",
            "Review Lỗi, Định Hướng Tâm Lý & Lời Căn Dặn Cuối Cùng",
            [
                "[00:00 - 01:00] Phân tích toàn bộ các file code sai trong 2 buổi Mock Test. Chỉ ra nguyên nhân cốt lõi (Tràn biến, sai format output, quên trường hợp n=0).",
                "[01:00 - 02:00] Rà soát lại bộ 'Bí kíp': Cách khai báo mảng 10^7, Cách dùng fast I/O, Cách viết file input.",
                "[02:00 - 03:00] Chuẩn bị tâm lý thi thật: Ngủ đủ giấc, mang theo đồng hồ bấm giờ (nếu cho phép). Nhớ rằng: Bài 1 sai = Rớt. Bài 4 bỏ trống = Mất đi cơ hội bứt phá."
            ],
            `// Lời dặn dò nằm lòng
#include <bits/stdc++.h>
using namespace std;
// 1. Array luôn khai báo TOÀN CỤC (Global)
// 2. int tối đa 2 tỷ, quá thì LONG LONG
// 3. Array bounds: Cẩn thận truy xuất a[-1] hoặc a[N+1]
// 4. CHECK FILE I/O THEMIS!
int main() {
    return 0;
}`,
            "1. Tự viết lại Template 10 lần.\n2. Soạn sẵn một 'Cheatsheet' vào đầu để mang vào phòng thi.\n3. Nghỉ ngơi hoàn toàn trước ngày thi.",
            ["Chạm tay vào giấc mơ Chuyên Tin!"]
        )
    ]
};
window.phase6 = phase6;