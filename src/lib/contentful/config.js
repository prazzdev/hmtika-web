import { createClient } from "contentful";

const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY,
  });
};

export default createContentClient;
