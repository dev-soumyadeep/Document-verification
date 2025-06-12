export type UserRole = "ISSUER" | "HOLDER" | "VALIDATOR" | "STAKER";

export interface User {
  name: string;
  type: "individual" | "organization";
  role: UserRole;
  email: string;
}
