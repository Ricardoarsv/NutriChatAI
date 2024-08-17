const {
  collection,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  query,
  where,
  getDocs,
} = require("firebase/firestore");
const { db: databaseCollections } = require("../config/firebase");

class Message {
  constructor(userID, messages) {
    this.userID = userID;
    this.messages = messages;
  }

  // Método para crear nuevos mensajes
  static async createMessages(userID, messages) {
    if (
      !userID ||
      !messages ||
      !Array.isArray(messages) ||
      messages.length === 0
    ) {
      throw new Error("userID and messages array are required");
    }

    const userDocRef = doc(databaseCollections, "messages", `${userID}`);
    const userDoc = await getDoc(userDocRef);

    // Añadir un ID único a cada mensaje en el array `messages`
    const uniqueMessages = messages.map((msg) => ({
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      userID: msg.userID,
      message: msg.message,
    }));

    if (userDoc.exists()) {
      // Si el documento ya existe, agregar los nuevos mensajes al array existente
      await updateDoc(userDocRef, {
        messages: arrayUnion(...uniqueMessages),
      });
    } else {
      // Si el documento no existe, crear un nuevo documento con los mensajes
      const newMessages = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        userID,
        messages: uniqueMessages,
      };
      await setDoc(userDocRef, newMessages);
    }

    return new Message(userID, userID, uniqueMessages);
  }

  // Método para obtener todos los mensajes de un usuario específico
  static async getMessages(userID) {
    const messagesCollection = collection(databaseCollections, "messages");

    // Crear una consulta para filtrar por userID
    const userMessagesQuery = query(
      messagesCollection,
      where("userID", "==", userID)
    );
    const snapshot = await getDocs(userMessagesQuery);

    let userMessages = [];
    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      userMessages.push(...data.messages);
    });

    return userMessages;
  }
}

module.exports = Message;
