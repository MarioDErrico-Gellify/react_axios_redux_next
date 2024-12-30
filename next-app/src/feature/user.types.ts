import { HttpStatus } from "@/constants/costants";

 export type UserFormDTO = {
    name: string;
    email: string;
    age: number | undefined;
  };
  
  export type RetrieveFakeDataDto = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  export interface UserState {
    email: string;
    age: number;
    name: string;
    isAuthenticated?: boolean | string;
    user?: string;
    token?: string;
    action: string;
    status: HttpStatus;
    error: string;
  }
  export const initialStateUserForm: UserState = {
    name: "",
    age: 0,
    email: "",
    status: HttpStatus.Accepted,
    action: '',
    error: '',
  };
  