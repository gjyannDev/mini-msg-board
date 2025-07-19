import dotenv from "dotenv";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import message_router from "./routers/messageRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "styles")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", message_router);

app.listen(PORT, () => {
  console.log(`Listing to port: ${PORT}`);
});
