import axios from "axios";
import { registerFormDto, retrieveFakeDataDto } from "./userTypes";

export async function registerUser(params: registerFormDto) {
  try {
    const response = await axios.post(
      //JSONPlaceholder, RESTFULL API SIMULATED WIHT FREE SERVICE.
      //TODO...CREATE FORM AND INJECT THIS HOOK
      "https://jsonplaceholder.typicode.com/posts",
      params
    );
    console.log("Dati ricevuti dalla chiamata API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Errore durante la chiamata API:", error);
    throw error;
  }
}

export async function retriveUser() {
  try {
    const response = await axios.get(
      // JSONPlaceholder, RESTFUL API SIMULATED WITH FREE SERVICE.
      // TODO: CREATE FORM AND INJECT THIS HOOK
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Dati ricevuti dalla chiamata API:", response.data);
    return response.data as retrieveFakeDataDto;
  } catch (error) {
    console.error("Errore durante la chiamata API:", error);
    throw error;
  }
}
