import createContentClient from "./config";
const client = createContentClient();

export const getEntriesByType = async (type, query) => {
  const response = await client.getEntries({
    content_type: type,
    ...query,
  });

  return response.items;
};

export const getBlogPosts = async (query) => {
  const response = await client.getEntries({
    content_type: "blogs",
    ...query,
  });
  return response.items;
};

export const getBlogPostsByTags = async (tags) => {
  const response = await getBlogPosts({ "fields.tags": tags });
  return response;
};

export const getSinglePostBySlug = async (slug) => {
  const response = await getBlogPosts({ "fields.slug[match]": slug });
  return response;
};

export const getEntryBySlug = async (slug, type) => {
  const queryOptions = {
    content_type: type,
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};

export const getMediaByFieldTag = async (tagId) => {
  const response = await client.getAssets({
    "metadata.tags.sys.id[in]": tagId,
  });

  console.log("response di lib", response);

  const mediaItems = response.items.map((item) => ({
    name: item.fields.file.fileName,
    alt: item.fields.title,
    source: item.fields.file.url,
  }));
  return mediaItems;
};
