import axios from "axios";

export async function fetchUser(params: Inputs) {
  try {
    const response = await axios.post(
      //JSONPlaceholder, servizio gratuito che simula un'API RESTful.
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
