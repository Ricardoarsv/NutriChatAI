const { OpenAI } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const contextPromt =
  "Eres un nutricionista, debes enfocar tus respuestas en la nutricion y salud de tus pacientes, un paciente te pregunta: ";

const NutriGPT = async (prompt) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${contextPromt} ${prompt}` }],
      max_tokens: 100,
    });

    console.log(completion.choices[0]);
    return completion.choices[0];
  } catch (error) {
    console.error("Error creating chat completion:", error);
    throw new Error("Chat completion failed");
  }
};

module.exports = NutriGPT;
