const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use("/api", authRoutes);

app.listen(3000, () => {
  console.log("서버 실행 중");
});
