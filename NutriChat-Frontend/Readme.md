# NutriChatAI Front

Frontend del aplicativo web NutriChatAI, que te permite hacer solicitudes http al servidor, para comunicarte con una IA, en forma de preguntas relacionadas a la nutricion.

## Project Structure

root/  
│  
├── mock/  
│ └── messages.json  
├── src/  
│ ├── components/  
│ │ └── Chat/  
│ │ │ └── Chat.jsx  
│ │ │ └── ChatInput.jsx  
│ │ └── Header.jsx  
│ │ └── WelcomeMessage.jsx  
│ ├── JSON/  
│ │ └── validWords.json  
│ ├── pages/  
│ │ └── ChatBot.jsx  
│ │ └── History.jsx  
│ ├── UI/  
│ │ └── alert.modal.jsx  
│ │ └── ChatBubbles.jsx  
│ ├── utils/  
│ │ └── getMessages.jsx  
│ │ └── postMessages.jsx  
│ │ └── validateMessages.jsx  
│ ├── app.jsx  
│ ├── index.css  
│ └── Main.jsx  
├── .prettierignore  
├── .prettierrc  
├── index.html  
├── package.json  
├── package-lock.json  
├── postcss.config.cjs  
├── tailwind.config.js  
└── README.md

## Installation

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Ricardoarsv/NutriChatAI.git
   cd NutriChat-Frontend
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Ejecuta el comando para correr el servidor en modo desarrollo**:
   ```bash
   npm run dev
   ```

## Scripts

- **`npm run dev`**: Inicia el servidor con vite, para observar los cambios en archivos.

## Dependencies

- **fortawesome/free-solid-svg-icons:**: Iconos sólidos gratuitos de FontAwesome.
- **fortawesome/react-fontawesome**: Componentes de React para usar iconos de FontAwesome.
- **autoprefixer**: Herramienta para agregar prefijos específicos del navegador a CSS.
- **framer-motion**: Librería para animaciones en React.
- **react-dom**: Paquete para trabajar con el DOM en React.
- **react-router-dom:**: Enrutador para aplicaciones React.
- **tailwindcss**: Framework de CSS para diseño rápido.

---

Desarrollado por **RicardoArsv**.
