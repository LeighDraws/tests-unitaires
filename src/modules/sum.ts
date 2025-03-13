export function sumSmallNumbers(a: number, b: number): number {
  if (a < 0 || b < 0 || a > 9 || b > 9) {
    throw new Error("Numbers must be between 0 and 9");
  }
  return a + b;
}

// Sum sans utiliser + ou -.
// Découpage des nombres avant de les additionner.
// Utiliser la fonction sumSmallNumbers pour additionner les chiffres.
export function sumNumbers(a: number, b: number): number {
  let resultFinal: string = "";
  
    const aArray = a.toString().split("").map(Number);
    console.log(aArray);
    const bArray = b.toString().split("").map(Number);
    console.log(bArray);

    for (let i = 0; i < aArray.length && bArray.length; i++) {
      const result = sumSmallNumbers(aArray[i], bArray[i]);
      if (result <= 9) {
        resultFinal = [resultFinal, result].join("");
      }
  
    console.log(resultFinal);
  } 
  return parseInt(resultFinal);
}
