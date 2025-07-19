import { messages } from "../services/mockDb.js";

export function getAllMessage(req, res) {
  return res.render("index", { title: "Homepage", messages: messages });
}

export function getForm(req, res) {
  return res.render("form", { title: "Add message's", error: [] });
}
