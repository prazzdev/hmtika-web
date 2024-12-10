import axios from "axios";

const options = {
  headers: {
    "x-api-key": process.env.X_API_KEY,
  },
};

export const retrievePosts = async () => {
  try {
    const response = await axios.get("/api/v1/data/posts", options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const retrievePostsByTags = async (tags) => {
  try {
    const response = await axios.get(`/api/v1/data/posts`, {
      ...options,
      params: { tags },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const retrieveSinglePostBySlug = async (slug) => {
  try {
    const response = await axios.get(`/api/v1/data/posts`, {
      ...options,
      params: { slug },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
