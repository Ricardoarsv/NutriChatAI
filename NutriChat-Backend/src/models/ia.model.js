const NutriGPT = require("../config/openAi.js");
const validateMessage = require("../utils/validateMessage.js");

class Ia {
  constructor(question) {
    this.question = question;
  }

  async getAnswer() {
    try {
      const validateQuestion = validateMessage(this.question);
      if (!validateQuestion[0]) {
        return {
          success: false,
          msg: validateQuestion[1],
        };
      }
      const answer = await NutriGPT(this.question);
      return {
        success: true,
        msg: answer,
      };
    } catch (error) {
      console.error("Error getting answer from IA:", error);
      return {
        success: false,
        msg: "Error getting answer from IA",
      };
    }
  }
}

module.exports = Ia;
