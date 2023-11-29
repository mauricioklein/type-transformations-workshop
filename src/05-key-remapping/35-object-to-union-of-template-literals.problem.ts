import { Equal, Expect } from "../helpers/type-utils";

interface FruitMap {
  apple: "red";
  banana: "yellow";
  pina: {
    foo: "bar",
    bar: "baz",
  },
  orange: "orange";
  blueberry: {
    ignore: true,
  }
}

type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`
}[keyof FruitMap];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
