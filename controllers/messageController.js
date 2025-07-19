import { messages } from "../services/mockDb.js";

export function getAllMessage(req, res) {
  return res.render("index", { title: "Homepage", messages: messages });
}

export function getForm(req, res) {
  return res.render("form", { title: "Add message's", error: [] });
}

export function addNewMessage(req, res) {
  res.redirect("/");

  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
}
