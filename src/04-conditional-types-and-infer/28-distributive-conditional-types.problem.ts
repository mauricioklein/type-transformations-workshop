import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type GetFruits<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana = GetFruits<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
