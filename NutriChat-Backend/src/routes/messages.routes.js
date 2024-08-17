const MessagesController = require("../controllers/messages.controller");
const { Router } = require("express");

const messagesRouter = Router();

messagesRouter.post("/create", MessagesController.createMessage);
messagesRouter.get("/:userID", MessagesController.getMessages);

module.exports = messagesRouter;
