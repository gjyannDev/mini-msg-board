import { Router } from "express";
import {
  addNewMessage,
  getAllMessage,
  getForm,
} from "../controllers/messageController.js";

const message_router = Router();

message_router.get("/", getAllMessage);

message_router.get("/new", getForm);

message_router.post("/new", addNewMessage);

export default message_router;
