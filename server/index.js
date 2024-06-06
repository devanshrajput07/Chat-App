const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const DATABASE_URL = process.env.DATABASE_URL;
const router = require("./routes/index");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

connectDB(DATABASE_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
