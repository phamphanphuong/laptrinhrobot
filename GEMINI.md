# Quy Định Dự Án (Project Rules)

## 1. Không Sử Dụng Browser Subagent (Disable Browser Subagent)
- **TUYỆT ĐỐI KHÔNG** gọi công cụ `browser_subagent` trong bất kỳ trường hợp nào để kiểm tra, duyệt web hay chụp ảnh/quay video màn hình.
- Mọi bước xác minh giao diện (UI) chỉ sử dụng:
  - Kiểm tra cú pháp và cấu trúc mã nguồn trực tiếp qua file edit.
  - Sử dụng lệnh kiểm tra phản hồi HTTP (`Invoke-WebRequest` / `curl`) nếu cần.
  - Để người dùng tự mở và trải nghiệm trực tiếp trên trình duyệt cá nhân (Live Server / trình duyệt ngoài).
- Mục đích: Tránh phát sinh file cache ghi hình WebP dung lượng lớn (hàng trăm MB/GB) và tiết kiệm tối đa token.
