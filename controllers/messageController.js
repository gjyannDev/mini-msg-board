import { getAllMessages } from "../model/messagesModel.js";

export async function getAllMessage(req, res) {
  try {
    const messages = await getAllMessages();

    return res.render("index", { title: "Homepage", messages: messages });
  } catch (error) {
    console.error(error);
  }
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
