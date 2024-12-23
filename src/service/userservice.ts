import axios from "axios";
import { registerFormDto } from "./userTypes";

export async function fetchUser(params: registerFormDto) {
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
