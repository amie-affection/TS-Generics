// Generic-interfaces

interface User<T> {
  id: T;
}

const alina: User<number> = { id: 24 };
const stacie: User<string> = { id: "skgk5l" };

console.log(alina, stacie);

// ===========================

interface Tab<T> {
  id: string;
  position: number;
    active: boolean;
    content: T,
}

const tab1: Tab<string> = {
  id: "id-1",
  position: 2,
  active: false,
  content: "Tab data",
};

const tab2: Tab<string[]> = {
  id: "id-2",
  position: 4,
  active: true,
  content: ["content-1", "content-2"],
};

console.log(tab1, tab2);

export {};
