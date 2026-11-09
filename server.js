const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

try {
  const express = require('express');
  const compression = require('compression');
  const app = express();

  app.use(compression());

  // Health check endpoint cho Render
  app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
  });

  // Serve static files từ thư mục gốc
  app.use(express.static(__dirname, {
    maxAge: '1h',
    index: 'index.html'
  }));

  // Fallback về index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(PORT, HOST, () => {
    console.log(`=======================================================`);
    console.log(`🚀 Verb Form Quiz Server running on http://${HOST}:${PORT}`);
    console.log(`🌐 Sẵn sàng cho Render Deployment (PORT: ${PORT})`);
    console.log(`=======================================================`);
  });
} catch (e) {
  // Dự phòng trường hợp chưa chạy `npm install` - dùng HTTP thuần của Node.js
  const http = require('http');

  const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.md': 'text/markdown; charset=utf-8'
  };

  const server = http.createServer((req, res) => {
    if (req.url === '/healthz') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end('OK');
    }

    let cleanUrl = req.url.split('?')[0];
    let filePath = path.join(__dirname, cleanUrl === '/' ? 'index.html' : cleanUrl);

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        filePath = path.join(__dirname, 'index.html');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      fs.readFile(filePath, (readErr, content) => {
        if (readErr) {
          res.writeHead(500);
          return res.end('Internal Server Error');
        }
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=3600'
        });
        res.end(content);
      });
    });
  });

  server.listen(PORT, HOST, () => {
    console.log(`🚀 Native HTTP Server running on http://${HOST}:${PORT}`);
  });
}
