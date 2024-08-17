import words from '../JSON/validWords.json';

export default function validateMessage(message) {
  // Convertir el mensaje a mayúsculas
  let messageToValidate = message.toUpperCase();

  // Reemplazar acentos
  messageToValidate = messageToValidate
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  // Quitar signos de interrogación
  messageToValidate = messageToValidate.replace(/[¿?]/g, '');

  // Verificar si el mensaje contiene alguna palabra relacionada a nutrición
  const messageWords = messageToValidate.split(' ');
  const containsValidWord = messageWords.some((word) => words.includes(word));

  if (!containsValidWord) {
    return [false, 'Por favor, pregunta algo relacionado a nutrición.'];
  }

  // Verificar si el mensaje tiene más de 2 palabras
  if (messageWords.length <= 2) {
    return [false, 'Por favor, proporciona más información.'];
  }

  return [true, null];
}
