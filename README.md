# 🎯 Ứng Dụng Luyện Thi Tiếng Anh: PART 1: VERB FORM
> **Tài liệu nguồn:** Giáo viên chuyên Anh - Thầy Bùi Văn Vinh (0988.333.599)  
> **Chủ đề:** Dạng của động từ (To-infinitives / Bare infinitives / Gerunds)

Ứng dụng web trắc nghiệm tiếng Anh tốc độ cao, hỗ trợ học tập siêu tốc trên cả máy tính và điện thoại.

---

## 🌟 TÍNH NĂNG NỔI BẬT

1. **⚡ Thiết kế Responsive cho Điện Thoại (KHÔNG CẦN CUỘN)**:
   - Toàn bộ giao diện câu hỏi, 4 đáp án A-B-C-D và phần giải thích nằm gọn gàng trong 1 màn hình điện thoại duy nhất.
   - Thanh cài đặt chuyển thành Accordion 1 dòng thu gọn (`⚙️ 10 câu • Bài 1 ▾`), tiết kiệm tối đa không gian.
   - Thao tác một chạm: chạm đáp án ➔ giải thích hiện ra ➔ **chạm bất kỳ đâu trên màn hình để chuyển ngay sang câu tiếp theo**.

2. **2 Cơ Chế Làm Bài Trắc Nghiệm Cốt Lõi**:
   - **Cơ chế 1: Phân biệt cấu trúc Verb Form**: Nhận diện động từ đi với **V-ing**, **To V**, **V (bare)** hay cả 2 dạng (có/không đổi nghĩa).
   - **Cơ chế 2: Trắc nghiệm nghĩa từ vựng**: 4 lựa chọn ngẫu nhiên, hỗ trợ 2 chiều: **Anh ➔ Việt** hoặc **Việt ➔ Anh**.

3. **🎲 Xáo Trộn Toàn Diện**:
   - Tự động xáo trộn ngẫu nhiên thứ tự câu hỏi và thứ tự các đáp án A, B, C, D trong mỗi bài làm để chống học vẹt.

4. **📚 Phân Chia Bài Học Linh Hoạt**:
   - **Bài 10 câu**: Làm nhanh trong 1 - 2 phút, có nút chuyển bài kế tiếp (`Bài 1`, `Bài 2`...).
   - **Đề tổng hợp 50 câu**: Ôn luyện toàn diện.
   - **♾️ Tất cả**: Luyện toàn bộ kho câu hỏi.

5. **⚠️ Xử Lý Câu Sai Thông Minh (Spaced Repetition)**:
   - Tự động đẩy câu làm sai xuống cuối bài để bạn làm lại cho nhớ.
   - Bảng **"Sổ tay câu sai"** hiển thị chi tiết bên dưới với nút **"Làm lại câu sai"** và nút **"Sao chép ghi chú"** vào clipboard.

6. **📚 Sổ Tay Tra Cứu Lý Thuyết & Ngân Hàng Câu Hỏi**:
   - Tra cứu 139+ từ vựng & cấu trúc ngữ pháp với bộ lọc tìm kiếm tức thì (0ms latency).

---

## 🚀 HƯỚNG DẪN TRIỂN KHAI LÊN RENDER (RENDER.COM)

Dự án đã được đóng gói sẵn sàng với file cấu hình `render.yaml`, `package.json` và `server.js` (Express + Compression).

### Cách 1: Triển khai dạng Web Service (Khuyên dùng)
1. Đăng nhập vào [Render.com](https://render.com).
2. Nhấn nút **New +** ➔ chọn **Web Service**.
3. Kết nối với kho GitHub: `https://github.com/VTP2407/Verb-Form`.
4. Render sẽ tự động nhận diện cấu hình:
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Port**: Tự động nhận diện từ Render qua `process.env.PORT`
5. Nhấn **Deploy Web Service** ➔ Hoàn tất trong 1 - 2 phút!

### Cách 2: Triển khai dạng Static Site (Miễn phí & CDN toàn cầu)
1. Trên Render, nhấn **New +** ➔ chọn **Static Site**.
2. Kết nối repo: `https://github.com/VTP2407/Verb-Form`.
3. Điền cấu hình:
   - **Build Command**: Để trống (hoặc `echo 'build done'`)
   - **Publish Directory**: `.`
4. Nhấn **Create Static Site** ➔ Hoàn tất trong 30 giây!

---

## 💻 CHẠY TRÊN MÁY LOCAL (LOCALHOST)

### Cách 1: Bằng file Batch (Dành cho Windows)
- Nhấp đúp chuột vào file `start_web.bat`.

### Cách 2: Bằng Node.js
```bash
npm install
npm start
# Mở trình duyệt tại: http://localhost:8080
```

### Cách 3: Bằng Python
```bash
python server.py
# Tự động mở http://localhost:8080 trên trình duyệt
```

---

## 📁 CẤU TRÚC THƯ MỤC
```
├── index.html            # Giao diện chính responsive
├── style.css             # CSS tối ưu cho cả Mobile & Desktop
├── app.js                # Toàn bộ logic trắc nghiệm, phím tắt, xáo trộn
├── questions_data.js     # Dữ liệu từ vựng và câu hỏi trắc nghiệm
├── questions_bank.json   # Ngân hàng câu hỏi định dạng JSON
├── danh_sach_cau_hoi.md  # Toàn bộ lý thuyết & câu hỏi dạng Markdown
├── server.js             # Máy chủ Node.js Express cho Render
├── package.json          # Cấu hình npm & dependencies
├── render.yaml           # Cấu hình Blueprint tự động cho Render.com
├── start_web.bat         # Khởi động nhanh trên Windows
└── server.py             # Máy chủ Python nội bộ
```

---
*Tác giả: VTP2407 • Dự án học tập & ôn thi tiếng Anh.*
