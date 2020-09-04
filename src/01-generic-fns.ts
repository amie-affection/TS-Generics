// Generic с одним параметром:

const reverse = <T>(array: T[]) => {
  return [...array].reverse();
};

console.log(reverse([1, 2, 3, 5, 5]));
console.log(reverse(["Stacie", "Alina", "Kateryna"]));

export {};

// Generic с несколькими параметрами:

const isEqual = <T, Y>(a: T, b: Y) => {
  return Object.is(a, b);
};

console.log(isEqual(3, 3));
console.log(isEqual("Alina", 30));

// ==========================

const makeArray = <T, Y>(a: T, b: Y) => {
  return [a, b];
};

console.log(makeArray(30, "Alina"));
console.log(makeArray("Alina", "Stacie"));
console.log(makeArray(true, "Alina"));

export { };
