import { Equal, Expect } from "../helpers/type-utils";
import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<TPath extends string> = {
  [P in S.Split<TPath, "/">[number] as P extends `:${infer PType}` ? PType : never]: string
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
