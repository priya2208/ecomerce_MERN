import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//configure env
dotenv.config();

//database config
connectDB();
//rest object
const app = express();

//PORT
const PORT = 8000;

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`port is listening at the No ${PORT}`.bgRed);
});

app.get("/", (req, res) => {
  res.send({
    message: "welcome",
  });
});
