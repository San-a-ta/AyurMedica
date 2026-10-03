#!/usr/bin/env python3
"""
AyurMedica Local Web Server
Runs the student platform on http://localhost:8000 with auto-browser launch.
"""
import http.server
import socketserver
import webbrowser
import os
import sys

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    os.chdir(DIRECTORY)
    port = PORT
    server = None

    for attempt_port in range(PORT, PORT + 10):
        try:
            server = socketserver.TCPServer(("", attempt_port), Handler)
            port = attempt_port
            break
        except OSError:
            continue

    if not server:
        print(f"Error: Could not bind to any port between {PORT} and {PORT+9}")
        sys.exit(1)

    url = f"http://localhost:{port}/index.html"
    print("\n" + "="*60)
    print(" [AyurMedica] BAMS Student Learning Platform")
    print(" Ministry of AYUSH & NCISM Aligned Digital Companion")
    print("="*60)
    print(f"\n Server running successfully at: {url}")
    print(" Press Ctrl+C at any time to stop the server.\n")

    # Attempt to open browser automatically
    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n Shutting down AyurMedica server gracefully. Have a great study session!")
        server.server_close()

if __name__ == "__main__":
    main()
