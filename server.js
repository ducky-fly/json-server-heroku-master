const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Đọc dữ liệu từ db.json
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, "public"), // Phục vụ ảnh từ public/images
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Nếu bạn muốn thêm delay để giống server thật:
server.use((req, res, next) => {
  setTimeout(next, 500);
});

server.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});