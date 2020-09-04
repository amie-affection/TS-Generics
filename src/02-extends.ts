// Generic с объектами:

const logLength = <T extends { length: number }>(arg: T) => {
  console.log(arg.length);
};

console.log(logLength([1, 2, 3, 4, 5]));
console.log(logLength("AlinaStar"));

export {};
