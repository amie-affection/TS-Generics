// Generic с объектами:

const logLength = <T extends { length: number }>(arg: T) => {
  console.log(arg.length);
};

console.log(logLength([1, 2, 3, 4, 5]));
console.log(logLength("AlinaStar"));

// ============================

const addFullName = <P extends { firstName: string; lastName: string}>(person: P) => {
  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  };
};

console.log(addFullName({
  firstName: 'Alina',
  lastName: 'Star',
}))

export {};
