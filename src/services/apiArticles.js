import axios from "axios";

const API_URL = "https://dev.to/api/articles?username=kaustubh_adhav_6666f7b909";
export async function getArticles() {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw Error("Failed to get Articles");
  }
}
