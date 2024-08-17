const IaController = require("../controllers/ia.controller.js");
const { Router } = require("express");

const Iarouter = Router();

Iarouter.post("/send_question", IaController.getNutriGptAnswer);

module.exports = Iarouter;
