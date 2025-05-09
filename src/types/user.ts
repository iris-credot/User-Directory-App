export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    address?: Address;
    role?: UserRole;
  }
  
  export type UserRole = 'Admin' | 'Editor' | 'Viewer';