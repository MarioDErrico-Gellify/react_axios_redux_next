import axios from "axios";
import { MantineFormDTO, retrieveFakeDataDto } from "./userFormTypes";

const API_URL = process.env.REACT_APP_API_URL!;

export async function registerUser(params: MantineFormDTO) {
  try {
    const response = await axios.post(API_URL, params);
    console.log("Dati ricevuti dalla chiamata API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Errore durante la chiamata API:", error);
    throw error;
  }
}

export async function retriveUser() {
  try {
    const response = await axios.get(`${API_URL}/todos/1`);
    console.log("Dati ricevuti dalla chiamata API:", response.data);
    return response.data as retrieveFakeDataDto;
  } catch (error) {
    console.error("Errore durante la chiamata API:", error);
    throw error;
  }
}
