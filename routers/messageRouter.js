import { Router } from "express";
import { getAllMessage, getForm } from "../controllers/messageController.js";

const message_router = Router();

message_router.get("/", getAllMessage);

message_router.get("/new", getForm);

export default message_router;
