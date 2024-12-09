export interface User {
  name: string;
  age: number;
  gender: boolean;
}

export type PartialUser = Partial<User>;
export type RequiredUser = Required<User>;
export type OmitUser = Omit<User, 'age' | "gender">;
export type PickedUser = Pick<User, 'age' | "gender">;
export type PartiallyPickedUser = Partial<Pick<User, 'age' | "gender">>;
export type ReadonlyUser = Readonly<User>;

type Mutable <T> = {
  -readonly [K in keyof T]: T[K];
}
type MutableUser = Mutable<ReadonlyUser>;

// UNION TYPES

export type Role = "admin" | "user" | "guest";
type NonAdminRole = Exclude<Role, "admin" | "guest">;

type RoleAttributes = 
  { role: "admin", permissions: string[] } |
  { role: "user" } |
  { role: "guest" };

type AdminRole = Extract<RoleAttributes, {role: "admin"}>;

// RETURN TYPE
type Funct = (a: number, b: string) => string;
type ReturnValue = ReturnType<Funct>;
type Params = Parameters<Funct>;

// 

type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;
type PromiseString = Promise <string>;
type Result = Awaited<PromiseString>;

// CHALLENGE
const func = async () => {
  return {
    id: 123,
  };
}

type funcResult = Awaited<ReturnType<typeof func>>