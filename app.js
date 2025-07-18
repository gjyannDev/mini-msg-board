import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Listing to port: ${PORT}`);
});
