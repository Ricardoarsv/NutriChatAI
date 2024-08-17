const Ia = require("../models/ia.model.js");

// Ia controller
class IaController {
  async getNutriGptAnswer(req, res) {
    console.log("POST /send_question");
    const { question } = req.body;
    const iaInstance = new Ia(question);
    try {
      const answer = await iaInstance.getAnswer();
      if (answer.success) {
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
