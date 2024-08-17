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
  constructor(id, userID, messages) {
    this.id = id;
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

    if (userDoc.exists()) {
      // Si el documento ya existe, agregar los nuevos mensajes al array existente
      await updateDoc(userDocRef, {
        messages: arrayUnion(...messages),
      });
    } else {
      // Si el documento no existe, crear un nuevo documento con los mensajes
      const newMessages = {
        userID,
        messages,
      };
      await setDoc(userDocRef, newMessages);
    }

    return new Message(userID, userID, messages);
  }

  // Método para obtener todos los mensajes de un usuario específico
  static async getMessages(userID) {
    const messagesCollection = collection(databaseCollections, "messages");

    // Crear una consulta para filtrar por userID
    const userMessagesQuery = query(
      messagesCollection,
      where("userID", "==", parseInt(userID))
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
