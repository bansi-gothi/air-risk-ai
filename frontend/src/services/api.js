import axios from "axios";

const BASE_URL = "http://localhost:8000"; // backend URL

export const getPollutionRecommandation = async (cityObj) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/pollution`, cityObj);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch pollution data", err);
    return { error: "Failed to fetch pollution data" };
  }
};
