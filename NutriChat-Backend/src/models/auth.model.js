const { auth } = require("../config/firebase");
const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");

class Auth {
  constructor() {}

  async signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return { user: user.uid };
    } catch (error) {
      console.error("Error signing in:", error);
      throw new Error("Sign in failed");
    }
  }

  async signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      return { user };
    } catch (error) {
      console.error("Error signing up:", error);
      throw new Error(`Sign up failed: ${error.code}`);
    }
  }
}

module.exports = Auth;
