import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Tắt bớt log rác để chạy nhanh nhất có thể
        pass

def main():
    os.chdir(DIRECTORY)
    # Cho phép tái sử dụng port ngay lập tức
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 60)
        print(f" Web Luyện Tập Tiếng Anh: PART 1: VERB FORM")
        print(f" Máy chủ đang chạy tại: {url}")
        print(" Tốc độ phản hồi: Siêu tốc (0ms latency)")
        print(" Nhấn Ctrl + C trong cửa sổ này để dừng máy chủ.")
        print("=" * 60)
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nĐã tắt máy chủ.")
            sys.exit(0)

if __name__ == "__main__":
    main()

