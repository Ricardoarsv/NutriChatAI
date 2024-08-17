const Auth = require("../models/auth.model");
// Auth controller
class AuthController {
  async signIn(req, res) {
    console.log("POST /sign_in");
    const { email, password } = req.body;
    const authInstance = new Auth();
    try {
      const { user } = await authInstance.signIn(email, password);
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async signUp(req, res) {
    console.log("POST /sign_up");
    const { email, password } = req.body;
    const authInstance = new Auth();
    try {
      const { user } = await authInstance.signUp(email, password);
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();
