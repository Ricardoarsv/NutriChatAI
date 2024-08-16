// Paquetes de Node.js
const express = require('express')
const dotenv = require('dotenv')
const pc = require('picocolors')
const cors = require('cors')

// Rutas de la API
// aqui voy a importar las rutas de la API

// Acceso a variables de entorno
dotenv.config()

class Server {
  constructor () {
    // Inicialización del servidor
    this.app = express()
    this.port = process.env.PORT

    // Routes
    this.whiteList = [`http://localhost:${this.port}`]

    // Middlewares
    this.middlewares()

    // Routes
    this.routes()
  }

  middlewares () {
    // CORS
    this.app.use(cors({ origin: this.whiteList, credentials: true }))

    // Parsear las respuestas y cuerpos de las peticiones
    this.app.use(express.json())

    // Directorio público
    this.app.use(express.static('public'))
  }

  routes () {

  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(
        pc.dim('--------------------------------------------------'),
        pc.blue('\n Dineflow app listening on port'),
        pc.yellow(`http://localhost:${this.port} 🚀 \n`),
        pc.green('Press Ctrl+C to quit \n'),
        pc.dim('--------------------------------------------------')
      )
    })
  }
}

module.exports = Server
