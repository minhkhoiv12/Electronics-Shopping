const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utiles/db");
const socket = require("socket.io");
const http = require("http");
const server = http.createServer(app);
require("dotenv").config();

// Cấu hình CORS
const allowedOrigins =
  process.env.mode === "pro"
    ? [
        process.env.client_customer_production_url,
        process.env.client_admin_production_url,
      ]
    : ["http://localhost:3000", "http://localhost:3001"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const io = socket(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
  transports: ["websocket", "polling"],
});

var allCustomer = [];
var allSeller = [];
let admin = {};

const addUser = (customerId, socketId, userInfo) => {
  if (!customerId) return;
  if (!allCustomer.some((u) => u.customerId === customerId)) {
    allCustomer.push({ customerId, socketId, userInfo });
  }
};

const addSeller = (sellerId, socketId, userInfo) => {
  if (!sellerId) return;
  if (!allSeller.some((u) => u.sellerId === sellerId)) {
    allSeller.push({ sellerId, socketId, userInfo });
  }
};

const findCustomer = (customerId) =>
  allCustomer.find((c) => c.customerId === customerId);
const findSeller = (sellerId) => allSeller.find((c) => c.sellerId === sellerId);

const remove = (socketId) => {
  allCustomer = allCustomer.filter((c) => c.socketId !== socketId);
  allSeller = allSeller.filter((c) => c.socketId !== socketId);
};

io.on("connection", (soc) => {
  console.log(`New client connected: ${soc.id}`);

  soc.on("add_user", (customerId, userInfo) => {
    addUser(customerId, soc.id, userInfo);
    io.emit("activeSeller", allSeller);
  });

  soc.on("add_seller", (sellerId, userInfo) => {
    addSeller(sellerId, soc.id, userInfo);
    io.emit("activeSeller", allSeller);
  });

  soc.on("send_seller_message", (msg) => {
    const customer = findCustomer(msg.receverId);
    if (customer) {
      io.to(customer.socketId).emit("seller_message", msg);
    }
  });

  soc.on("send_customer_message", (msg) => {
    const seller = findSeller(msg.receverId);
    if (seller) {
      io.to(seller.socketId).emit("customer_message", msg);
    }
  });

  soc.on("send_message_admin_to_seller", (msg) => {
    const seller = findSeller(msg.receverId);
    if (seller) {
      io.to(seller.socketId).emit("receved_admin_message", msg);
    }
  });

  soc.on("send_message_seller_to_admin", (msg) => {
    if (admin.socketId) {
      io.to(admin.socketId).emit("receved_seller_message", msg);
    }
  });

  soc.on("add_admin", (adminInfo) => {
    delete adminInfo.email;
    delete adminInfo.password;
    admin = { ...adminInfo, socketId: soc.id };
    io.emit("activeSeller", allSeller);
  });

  soc.on("disconnect", (reason) => {
    console.log(`Client disconnected: ${soc.id} (Reason: ${reason})`);
    remove(soc.id);
    io.emit("activeSeller", allSeller);
  });
});

// Cấu hình body-parser và cookie-parser
app.use(bodyParser.json());
app.use(cookieParser());

// API Routes
app.use("/api/home", require("./routes/home/homeRoutes"));
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/order/orderRoutes"));
app.use("/api", require("./routes/home/cardRoutes"));
app.use("/api", require("./routes/dashboard/categoryRoutes"));
app.use("/api", require("./routes/dashboard/productRoutes"));
app.use("/api", require("./routes/dashboard/sellerRoutes"));
app.use("/api", require("./routes/home/customerAuthRoutes"));
app.use("/api", require("./routes/chatRoutes"));
app.use("/api", require("./routes/paymentRoutes"));
app.use("/api", require("./routes/dashboard/dashboardRoutes"));

// API Root
app.get("/", (req, res) => res.send("Hello Server"));

// Kết nối Database
const port = process.env.PORT || 5000;
dbConnect();

// Khởi chạy Server
app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});
