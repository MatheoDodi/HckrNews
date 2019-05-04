const next = require('next');
const http = require('http');
const url = require('url');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      // Parse request url to get the pathname
      const parsedUrl = url.parse(req.url, true);
      const { pathname } = parsedUrl;

      // If Service Worker is requested, serve as static file
      if (pathname === '/service-worker.js') {
        const filePath = path.join(__dirname, '.next', pathname);
        app.serveStatic(req, res, filePath);
      } else {
        handle(req, res, parsedUrl);
      }
    })
    .listen(port, () => `listening on port ${port}`);
});
