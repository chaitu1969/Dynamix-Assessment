import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.APP_URL.toString();

export async function fetchData() {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.error("Error fetching application data:", error);
    throw new Error("Failed to fetch application data.");
  }
}
