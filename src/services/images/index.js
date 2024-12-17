import axios from "axios";

const options = {
  headers: {
    "x-api-key": process.env.X_API_KEY,
  },
};

export const retieveImageByTag = async (tag) => {
  try {
    const response = await axios.get(`/api/v1/data/image`, {
      ...options,
      params: { tag },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
