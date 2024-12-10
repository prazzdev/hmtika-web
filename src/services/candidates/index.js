import axios from "axios";

const options = {
  headers: {
    "x-api-key": process.env.X_API_KEY,
  },
};

export const retrieveCandidates = async () => {
  try {
    const response = await axios.get("/api/v1/data/candidates", options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
