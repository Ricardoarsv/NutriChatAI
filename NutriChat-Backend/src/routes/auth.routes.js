const express = require("express");
const AuthController = require("../controllers/auth.controller");

const authRouter = express.Router();

// User routes
authRouter.post("/login", AuthController.signIn);
authRouter.post("/sign_up", AuthController.signUp);

module.exports = authRouter;
