export type UserRole = 'ISSUER' | 'HOLDER' | 'VALIDATOR' | 'STAKER';

export interface User {
    name: string;
    role: UserRole;
    email: string;
}