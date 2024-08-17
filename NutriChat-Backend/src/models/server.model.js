// Paquetes de Node.js
const express = require("express");
const dotenv = require("dotenv");
const pc = require("picocolors");
const cors = require("cors");

// Rutas de la API
const IaRouter = require("../routes/ia.routes");
const authRouter = require("../routes/auth.routes");
const messagesRouter = require("../routes/messages.routes");

// Acceso a variables de entorno
dotenv.config();

class Server {
  constructor() {
    // Inicialización del servidor
    this.app = express();
    this.port = process.env.PORT;

    // Routes
    this.whiteList = [`http://localhost:${this.port}`, "http://localhost:5173"];

    // Middlewares
    this.middlewares();

    // Routes
    this.iaRoutePath = "/api/nutriGPT/getAnswer";
    this.authRoutePath = "/api/auth";
    this.messageRoutPath = "/api/messages";
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors({ origin: this.whiteList, credentials: true }));

    // Parsear las respuestas y cuerpos de las peticiones
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.iaRoutePath, IaRouter);
    this.app.use(this.authRoutePath, authRouter);
    this.app.use(this.messageRoutPath, messagesRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        pc.dim("--------------------------------------------------"),
        pc.blue("\n Dineflow app listening on port"),
        pc.yellow(`http://localhost:${this.port} 🚀 \n`),
        pc.green("Press Ctrl+C to quit \n"),
        pc.dim("--------------------------------------------------")
      );
    });
  }
}

module.exports = Server;
