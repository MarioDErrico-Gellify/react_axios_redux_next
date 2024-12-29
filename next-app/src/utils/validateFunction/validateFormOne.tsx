import {MantineFormDTO} from "@/service/userFormTypes";
import {constants} from "@/constants/costants";

export const validateForm = (values: MantineFormDTO) => {
  const errors: {[key: string]: string | null} = {};

  errors.name =
    values.name.length < 2 ? "Name must have at least 2 letters" : null;
  errors.email = !constants.EMAIL_REGEX.test(values.email)
    ? "Invalid email"
    : null;

  errors.age = values.age < 18 ? "You must be at least 18 to register" : null;

  return errors;
};
