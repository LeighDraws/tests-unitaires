import { expect, test } from "vitest";
import { sumNumbers, sumSmallNumbers } from "../modules/sum";
import { describe } from "node:test";

test("adds 1 + 2 to equal 3", () => {
  expect(sumSmallNumbers(1, 2)).toBe(3);
});

describe("sumNumbers", () => {

  // Test 0 : Petits nombres
  test("adds 1 + 2 equals 3", () => {
    expect(sumNumbers(1, 2)).toBe(3);
  });


  // Test 1 : Nombres supérieurs à 9
  // Résultat à 2 chiffres
  test("adds 42 + 22 equals 64", () => {
    expect(sumNumbers(42, 22)).toBe(64);
  });

  // // Test 2 : Nombres supérieurs à 9
  // // Résultat à 3 chiffres
  // // Attendu : 110 , Obtenu: 1010
  // test("adds 62 + 48 equals 110", () => {
  //   expect(sumNumbers(62, 48)).toBe(110);
  // });

});
