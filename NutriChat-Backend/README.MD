# NutriChatAI API-REST

Backend del aplicativo web NutriChatAI, que conecta el cliente con las apis externas a utilizar para gestionar las solicitudes http.

## Project Structure
root/  
│  
├── src/  
│ ├── config/  
│ │   └── ...  
│ ├── controllers/  
│ │   └── ...  
│ ├── middlewares/  
│ │   └── ...  
│ ├── models/  
│ │   └── server.models.js   
│ ├── routes/  
│ │   └── ...    
│ ├── utils/    
│ │   └── ...  
├── tests/  
│ ├── controllers/  
│ ├── models/  
│ ├── routes/  
│ └── ...  
├── public/  
│   ├── img/  
├── .env  
├── index.js  
├── package.json  
└── README.md  
  

## Installation

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/Ricardoarsv/NutriChatAI.git
    cd NutriChat-Backend
    ```

2. **Instala las dependencias**:
    ```bash
    npm install
    ```

3. **Establece las variables de entorno**:
   Create a `.env` file in the root directory and configure your environment variables. For example:
    ```env
        PORT=3000
    ```

4. **Ejecuta el comando para correr el servidor en modo desarrollo**:
    ```bash
    npm run dev
    ```

## Scripts

- **`npm run dev`**: Inicia el servidor con nodemon, para observar los cambios en archivos.  

## Dependencies

- **express**: Framework de node.js.  
- **picocolors**: Libreria para llenar de vida la consola.
- **dotenv**: Modulo para cargar los archivos `.env`.
- **cors**: Middleware para habilitar las (CORS).  


## Dev Dependencies

- **nodemon**: Reinicia automaticamente el servidor al detectar cambios en archivos.
- **standard**: Guia standar de formato de codigo JavaScript.

---

Desarrollado por **RicardoArsv**.
