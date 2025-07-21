import { addMessage, getAllMessages } from "../model/messagesModel.js";

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

export async function addNewMessage(req, res) {
  res.redirect("/");

  try {
    const result = await addMessage(req.body.message, req.body.name);

    return result;
  } catch (error) {
    console.error(error);
  }
}
