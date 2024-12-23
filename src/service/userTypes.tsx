export type registerFormDto = {
  name: string;
  surname: string;
  password: string;
};

export type retrieveFakeDataDto = {
  [x: string]: any;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
