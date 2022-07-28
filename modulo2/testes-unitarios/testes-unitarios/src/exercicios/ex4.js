export function ordenaNumeros(array) {
  const arrayOrdenado = array.sort((a, b) => {
    return a - b;
  });
  return arrayOrdenado
}
