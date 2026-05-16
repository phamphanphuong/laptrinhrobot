const phase4 = {
    phaseId: 4,
    title: "GIAI ĐOẠN 4: LÝ THUYẾT ĐỒ THỊ VÀ QUY HOẠCH ĐỘNG",
    time: "THÁNG 7 - 8",
    duration: "8 Buổi (24 Giờ)",
    bgClass: "bg-orange-500",
    textClass: "text-orange-500",
    lightBgClass: "bg-orange-50",
    desc: "Chinh phục hai chuyên đề 'khó nhằn' và chiếm nhiều điểm nhất trong đề thi: Duyệt đồ thị (BFS/DFS/Dijkstra) và Tư duy trạng thái Quy hoạch động (DP).",
    icon: "fa-network-wired",
    requirements: "Sử dụng thành thạo STL (đặc biệt là queue, priority_queue, vector) và có tư duy đệ quy vững.",
    topics: "Danh sách kề, BFS, DFS, Dijkstra, Topo Sort, Trạng thái DP, Ba lô 0/1, LIS, LCS.",
    output: "Giải quyết trọn vẹn Bài 3 và lấy ít nhất 50% số điểm Bài 4 trong các kỳ thi chuyên cấp thành phố.",
    lessons: [
        lesson(
            "BUỔI 25",
            "Biểu diễn đồ thị & Duyệt theo chiều sâu (DFS)",
            [
                "[00:00 - 00:45] Các khái niệm cơ bản: Đỉnh (Node), Cạnh (Edge), Đồ thị vô hướng/có hướng. Tại sao không nên dùng Ma trận kề (tốn O(V^2) bộ nhớ)?",
                "[00:45 - 01:15] Khai báo Danh sách kề bằng vector<int> adj[MAX]. Kỹ thuật đọc input đồ thị cực nhanh.",
                "[01:15 - 02:15] Thuật toán DFS (Depth First Search): Dùng Đệ quy đi sâu đến cùng đường. Mảng đánh dấu visited[] để không bị lặp vô hạn.",
                "[02:15 - 03:00] Ứng dụng DFS: Đếm số thành phần liên thông (Connected Components) của đồ thị."
            ],
            `#include <bits/stdc++.h>
using namespace std;

const int MAXN = 100005;
vector<int> adj[MAXN];
bool visited[MAXN];

// Đệ quy duyệt DFS
void dfs(int u) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) {
            dfs(v);
        }
    }
}

int main() {
    int n, m; // n đỉnh, m cạnh
    cin >> n >> m;
    for (int i = 0; i < m; i++) {
        int u, v; cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u); // Bỏ dòng này nếu là đồ thị có hướng
    }
    
    // Đếm số thành phần liên thông
    int components = 0;
    for (int i = 1; i <= n; i++) {
        if (!visited[i]) {
            components++;
            dfs(i); // Loang ra toàn bộ miền liên thông
        }
    }
    cout << components << '\\n';
    return 0;
}`,
            "1. Viết DFS in ra đường đi từ đỉnh S đến đỉnh T (Yêu cầu mảng trace lưu vết).\n2. Kiểm tra đồ thị có tính liên thông không.\n3. Kiểm tra đồ thị vô hướng có chu trình không bằng DFS.",
            ["Các bài toán nhóm bạn bè, mạng lưới giao thông cơ bản."]
        ),
        lesson(
            "BUỔI 26",
            "Duyệt theo chiều rộng (BFS) & Loang trên lưới 2D",
            [
                "[00:00 - 00:45] Thuật toán BFS (Breadth First Search): Dùng std::queue loang như vết dầu loang. Tìm đường đi ngắn nhất trên đồ thị KHÔNG trọng số.",
                "[00:45 - 01:30] Mảng dist[] lưu khoảng cách. Kỹ thuật truy vết đường đi bằng mảng parent[].",
                "[01:30 - 02:30] ĐẶC SẢN THI CHUYÊN: BFS trên bảng 2D. Mô hình hóa mảng 2 chiều thành đồ thị. Mảng hướng đi dx = {-1, 1, 0, 0}, dy = {0, 0, -1, 1}.",
                "[02:30 - 03:00] Bẫy: Quên kiểm tra biên (Out of bounds) khi loang 4 hướng. Phải luôn check (nx >= 1 && nx <= N && ny >= 1 && ny <= M)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};
char a[1005][1005];
int dist[1005][1005];
int N, M;

void bfs_grid(int startX, int startY) {
    queue<pair<int, int>> q;
    q.push({startX, startY});
    dist[startX][startY] = 0;
    
    while (!q.empty()) {
        auto [x, y] = q.front();
        q.pop();
        
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i], ny = y + dy[i];
            // Kiểm tra hợp lệ: Nằm trong bảng, chưa đi qua, không phải vật cản (#)
            if (nx >= 1 && nx <= N && ny >= 1 && ny <= M && dist[nx][ny] == -1 && a[nx][ny] != '#') {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx, ny});
            }
        }
    }
}

int main() {
    // ... Nhập liệu, khởi tạo dist là -1 ...
    return 0;
}`,
            "1. Bài toán Mê cung: Tìm số bước ít nhất từ (1,1) đến (N,M).\n2. Đếm số lượng 'đảo' (miền đất liền) trên bản đồ lưới (Flood Fill).\n3. BFS nhiều nguồn: Lửa cháy lan trong rừng có N đám cháy bắt đầu cùng lúc.",
            ["Sở GDĐT - Mê cung (qbmaze)", "Sở GDĐT - Vùng ảnh liên thông."]
        ),
        lesson(
            "BUỔI 27",
            "Thuật toán Dijkstra - Đường đi ngắn nhất có trọng số",
            [
                "[00:00 - 00:45] Tại sao BFS sụp đổ khi các cạnh có độ dài (trọng số) khác nhau? Giới thiệu ý tưởng tham lam của Dijkstra.",
                "[00:45 - 01:30] Cấu trúc dữ liệu std::priority_queue (Hàng đợi ưu tiên). Cách khai báo để ưu tiên phần tử nhỏ nhất: greater<pair<long long, int>>.",
                "[01:30 - 02:30] Cài đặt Dijkstra chuẩn. Trạng thái lưu: pair<Độ_dài, Đỉnh>.",
                "[02:30 - 03:00] Bẫy Relaxation: Phải kiểm tra (du > dist[u]) continue; để bỏ qua các trạng thái rác trong priority_queue, tránh Time Limit Exceeded (TLE)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

const long long INF = 1e18;
vector<pair<int, int>> adj[100005]; // <đỉnh kề, trọng số>
long long dist_arr[100005];

void dijkstra(int start, int n) {
    for (int i = 1; i <= n; i++) dist_arr[i] = INF;
    dist_arr[start] = 0;
    
    // Min-heap: <khoảng cách, đỉnh>
    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> pq;
    pq.push({0, start});
    
    while (!pq.empty()) {
        auto [du, u] = pq.top();
        pq.pop();
        
        if (du > dist_arr[u]) continue; // Cực kỳ quan trọng để tối ưu
        
        for (auto edge : adj[u]) {
            int v = edge.first;
            long long uv = edge.second;
            if (dist_arr[v] > du + uv) {
                dist_arr[v] = du + uv;
                pq.push({dist_arr[v], v});
            }
        }
    }
}`,
            "1. Dijkstra từ nhà S đến trường T.\n2. Bài toán: Tìm đường đi ngắn nhất, nếu có nhiều đường thì chọn đường đi qua ít đỉnh nhất.\n3. Dijkstra kết hợp truy vết (Trace) để in ra danh sách các đỉnh đi qua.",
            ["Sở GDĐT - Đi đến trường (qbschool) - Luôn có 1 câu Dijkstra trong bài 4."]
        ),
        lesson(
            "BUỔI 28",
            "Cây (Tree) & Sắp xếp Tô-pô (Topological Sort)",
            [
                "[00:00 - 00:45] Đặc tính của Cây: N đỉnh, N-1 cạnh, liên thông, không chu trình. Gốc (Root) và Lá (Leaf).",
                "[00:45 - 01:30] Tìm Đường kính của cây (Tree Diameter) bằng 2 lần BFS/DFS.",
                "[01:30 - 02:15] Đồ thị có hướng không chu trình (DAG). Mảng Bán bậc vào (In-degree).",
                "[02:15 - 03:00] Thuật toán Kahn (Topological Sort) bằng Queue: Dùng để sắp xếp thứ tự thực hiện công việc (Việc A xong mới được làm việc B)."
            ],
            `// Tư tưởng Thuật toán Kahn (Topo Sort)
vector<int> topo_order;
queue<int> q;
// Push các đỉnh có indegree == 0 vào queue
for(int i = 1; i <= n; i++) if (indegree[i] == 0) q.push(i);

while(!q.empty()) {
    int u = q.front(); q.pop();
    topo_order.push_back(u);
    for(int v : adj[u]) {
        indegree[v]--; // Xóa cạnh u -> v
        if (indegree[v] == 0) q.push(v);
    }
}
// Nếu topo_order.size() < n => Đồ thị có chu trình!`,
            "1. Sắp xếp thứ tự học các môn học có điều kiện tiên quyết.\n2. Phát hiện Deadlock (Chu trình) trong mạng lưới quy trình.\n3. Tính độ sâu lớn nhất của một cây cho trước.",
            ["Bài toán lập lịch dự án, công việc phụ thuộc."]
        ),
        lesson(
            "BUỔI 29",
            "Bản chất Quy hoạch động (Dynamic Programming)",
            [
                "[00:00 - 00:45] DP là gì? Kỹ thuật 'Ghi nhớ' (Memoization) và 'Lập bảng' (Tabulation). Khắc phục sự lặp lại của Đệ quy (Ví dụ Fibonacci).",
                "[00:45 - 01:30] 3 Câu hỏi bắt buộc khi làm DP: 1. dp[i] mang ý nghĩa gì? 2. Base case (dp[0], dp[1]) bằng mấy? 3. Công thức chuyển từ bài toán nhỏ lên lớn là gì?",
                "[01:30 - 02:15] Bài toán Bậc thang: Mỗi bước đi 1 hoặc 2 bậc. Số cách leo lên bậc N. Công thức dp[i] = dp[i-1] + dp[i-2].",
                "[02:15 - 03:00] Bài toán thu thập xu trên lưới 1D (Frog Jump). dp[i] = max/min(dp[i-1] + cost, dp[i-2] + cost)."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; cin >> n;
    // Bẫy: Số cách thường rất lớn, phải dùng long long hoặc modulo
    vector<long long> dp(n + 1, 0);
    dp[1] = 1; // 1 bậc có 1 cách
    if (n >= 2) dp[2] = 2; // 2 bậc có 2 cách (1+1 hoặc nhảy 2)
    
    for (int i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007; // Công thức chuyển
    }
    cout << dp[n] << '\\n';
    return 0;
}`,
            "1. Cài đặt bài toán Ếch nhảy (Frog 1 & 2) trên AtCoder DP Contest.\n2. Bài toán cướp nhà: Không được cướp 2 nhà liền kề, tối đa hóa tổng tiền.\n3. Nhận dạng các bài toán tổ hợp đếm số cách.",
            ["Sở GDĐT - Bài toán Bậc thang (vsteps)"]
        ),
        lesson(
            "BUỔI 30",
            "Trùm cuối DP: Bài toán Ba lô 0/1 (0/1 Knapsack)",
            [
                "[00:00 - 00:45] Mô hình: N vật (khối lượng W_i, giá trị V_i), Túi sức chứa M. Tìm max giá trị. Trạng thái: dp[i][j] (Xét đến vật i, sức chứa j).",
                "[00:45 - 01:30] Bảng phương án 2D: dp[i][j] = max(dp[i-1][j], dp[i-1][j - W_i] + V_i).",
                "[01:30 - 02:30] Tối ưu không gian (Vũ khí thi chuyên): Giảm mảng 2 chiều dp[N][M] xuống mảng 1 chiều dp[M].",
                "[02:30 - 03:00] BẪY CHẾT NGƯỜI: Vòng lặp sức chứa j phải chạy NGƯỢC từ M về W_i để tránh việc 1 vật bị chọn lại nhiều lần."
            ],
            `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, M; cin >> n >> M;
    vector<int> w(n), v(n);
    for (int i = 0; i < n; i++) cin >> w[i] >> v[i];
    
    // dp[j] là giá trị lớn nhất đạt được khi dùng sức chứa j
    vector<long long> dp(M + 1, 0);
    
    for (int i = 0; i < n; i++) {
        // PHẢI LẶP NGƯỢC TỪ M VỀ w[i]
        for (int j = M; j >= w[i]; j--) {
            dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
        }
    }
    cout << dp[M] << '\\n';
    return 0;
}`,
            "1. Code chuẩn bài Ba lô 0/1 và vượt qua giới hạn M = 10^5.\n2. Bài toán Tập con có tổng bằng S: Có thể trích ra một số phần tử có tổng = S không? (Biến thể Ba lô).\n3. Bài toán Ba lô không giới hạn (Unbounded Knapsack) - Đổi vòng lặp thành chạy xuôi.",
            ["Trần Đại Nghĩa - Phân chia tài sản (Chia 2 tập sao cho chênh lệch nhỏ nhất)."]
        ),
        lesson(
            "BUỔI 31",
            "Dãy con tăng dài nhất (LIS) & Chuỗi con chung (LCS)",
            [
                "[00:00 - 00:45] Dãy con tăng dài nhất (LIS): dp[i] là độ dài LIS kết thúc tại i. Thuật toán O(N^2) bằng 2 vòng lặp.",
                "[00:45 - 01:30] Tối ưu LIS bằng Binary Search (lower_bound) xuống O(N log N). Mảng tail[] lưu trữ.",
                "[01:30 - 02:15] Chuỗi con chung dài nhất (LCS): Xâu không liền kề. Trạng thái dp[i][j] trên 2 chuỗi S1, S2.",
                "[02:15 - 03:00] Truy vết DP: Dùng vòng lặp while chạy ngược từ dp[n][m] về dp[0][0] để in ra chuỗi chung thực sự."
            ],
            `// Tối ưu LIS O(N log N) bằng vector
vector<int> tail;
for (int x : a) {
    // Tìm vị trí đầu tiên >= x trong tail
    auto it = lower_bound(tail.begin(), tail.end(), x);
    if (it == tail.end()) {
        tail.push_back(x); // Nếu x lớn nhất, kéo dài dãy
    } else {
        *it = x; // Nếu không, thay thế để giữ mảng tail nhỏ nhất có thể
    }
}
cout << "Chieu dai LIS: " << tail.size() << '\\n';`,
            "1. Tìm số trạm thu phát sóng bị phá hủy ít nhất để dãy còn lại là dãy tăng.\n2. Tính độ dài LCS của 2 chuỗi gen sinh học dài 5000 ký tự.\n3. LIS hai chiều (Bài toán xếp Búp bê Nga / Russian Doll Envelopes).",
            ["Sở GDĐT - Dãy con tăng dài nhất (liq)", "Sở GDĐT - Xếp khối hộp."]
        ),
        lesson(
            "BUỔI 32",
            "Mock Test Giai Đoạn 4 - Đại chiến Đồ thị & DP",
            [
                "[00:00 - 00:15] Trấn an tâm lý: Các em có thể TLE (Quá thời gian) bài Đồ thị/DP nếu chọn sai hướng, nhưng tuyệt đối không được WA (Sai kết quả).",
                "[00:15 - 02:45] Đề thi mô phỏng: 1 câu Loang lưới BFS, 1 câu Dijkstra, 1 câu DP Ba lô biến thể, 1 câu LIS.",
                "[02:45 - 03:00] Phân tích lý do vì sao bài Dijkstra bị TLE (thường do quên lệnh continue) hoặc bài Ba lô bị sai (do lặp xuôi thay vì lặp ngược)."
            ],
            `// Đề test gắt gao - Học sinh code độc lập`,
            "Hoàn thành các Subtask ngây thơ cho bài DP (Dùng quay lui) để vét điểm nếu không nghĩ ra công thức quy hoạch động.",
            ["Mô phỏng 2 câu Khó nhất (Bài 3, Bài 4) của Đề thi Lê Hồng Phong."]
        )
    ]
};
window.phase4 = phase4;