const Ia = require("../models/ia.model.js");
const Message = require("../models/messages.model.js");
// Ia controller
class IaController {
  async getNutriGptAnswer(req, res) {
    console.log("POST /send_question");
    const { question, userID } = req.body;
    const iaInstance = new Ia(question);
    try {
      const answer = await iaInstance.getAnswer();
      if (answer.success) {
        const messages = [
          {
            userID: "NutriGPT",
            message: answer.msg,
          },
        ];
        await Message.createMessages(userID, messages);
        res.json({ answer: answer.msg });
      } else {
        res.status(400).json({ error: answer.msg });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = new IaController();
