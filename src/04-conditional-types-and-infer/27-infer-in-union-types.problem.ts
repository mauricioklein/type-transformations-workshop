import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type ParserFunc<T> = () => T;
type ParserParse<T> = { parse: ParserFunc<T> };
type ParserExtract<T> = { extract: ParserFunc<T> };

type Parser<T> = ParserFunc<T> | ParserParse<T> | ParserExtract<T>;

type GetParserResult<T> = T extends Parser<infer R> ? R : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
