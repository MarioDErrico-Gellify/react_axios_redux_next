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
    email: any;
    age: any;
    name: any;
    isAuthenticated?: boolean | string;
    user?: any;
    token?: any;
    action: string;
    status: HttpStatus;
    error: string;
  }
  export const initialStateUserForm: UserState = {
    name: "",
    age: null,
    email: "",
    status: HttpStatus.Accepted,
    action: '',
    error: '',
  };
  