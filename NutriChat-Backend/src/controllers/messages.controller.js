const Message = require("../models/messages.model");

class MessagesController {
  // Método para manejar la creación de un nuevo mensaje
  async createMessage(req, res) {
    console.log("POST messages");
    const { userID, messages } = req.body;
    if (
      !userID ||
      !messages ||
      !Array.isArray(messages) ||
      messages.length === 0
    ) {
      return res
        .status(400)
        .json({ error: "userID and messages array are required" });
    }
    try {
      const newMessages = await Message.createMessages(userID, messages);
      res.status(201).json(newMessages);
    } catch (error) {
      console.error("Error creating messages:", error);
      res.status(500).json({ error: "Failed to create messages" });
    }
  }

  // Método para manejar la obtención de mensajes de un usuario específico
  async getMessages(req, res) {
    console.log("GET messages");
    const { userID } = req.params;
    try {
      const userMessages = await Message.getMessages(userID);
      res.status(200).json(userMessages);
    } catch (error) {
      console.error("Error getting messages:", error);
      res.status(500).json({ error: "Failed to get messages" });
    }
  }
}

module.exports = new MessagesController();
