import { HttpStatus } from "@/constants/costants";

export type MantineFormDTO = {
    name: string;
    email: string;
    age: number;
  };
  
  export type retrieveFakeDataDto = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  export interface UserState {
    email: any;
    age: any;
    name: any;
    isAuthenticated?: boolean;
    user?: any;
    token?: any;
    action: string;
    status: HttpStatus;
    error: string;
  }
  