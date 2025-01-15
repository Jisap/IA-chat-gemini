


export default function toTitleCase(text) {
  return text
    .split(' ')                                                 // Divide el texto en palabras
    .map((i) => i.replace(i[0], i[0].toUpperCase()))            // Convierte la primera letra de cada palabra a mayúscula
    .join(' ')                                                  // Concatena las palabras con un espacio en blanco
}