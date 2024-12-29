import axios from "axios";
import { MantineFormDTO, retrieveFakeDataDto } from "./userFormTypes";
import { HttpStatus } from "@/constants/costants";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function registerUser(params: MantineFormDTO) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Simulazione di un ritardo (4 secondi)
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const response = await axios.post(API_URL!, params, config);
    console.log("Dati ricevuti dalla chiamata API:", response.data, HttpStatus.OK );
    return response.data;
  } catch (error) {
    console.error("Errore durante la chiamata API:", error , HttpStatus.Bad_Request);
    throw error;
  }
}


export async function retriveUser() {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(`${API_URL}/todos/1`, config);
    console.log("Dati ricevuti dalla chiamata API:", response.data);
    return response.data as retrieveFakeDataDto;
  } catch (error) {
    console.error("Errore durante la chiamata API:", error);
    throw error;
  }
}
