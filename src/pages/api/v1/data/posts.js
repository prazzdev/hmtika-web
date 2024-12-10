import {
  getBlogPostsByTags,
  getEntriesByType,
  getSinglePostBySlug,
} from "@/lib/contentful/queries";

export default async function handler(req, res) {
  if (req.query.tags) {
    const tags = req.query.tags;
    await getBlogPostsByTags(tags).then((response) => {
      if (response) {
        const postsData = [];
        const data = response.map((article, i) => {
          postsData[i] = {
            slug: article?.fields.slug,
            title: article?.fields.title,
            description: article?.fields.postDescription?.replace(
              "//",
              "https://"
            ),
            featureImage:
              article?.fields.featureImage?.fields.file.url?.replace(
                "//",
                "https://"
              ),
            date: article?.fields.date,
            createdAt: article.sys.createdAt,
            updatedAt: article.sys.updatedAt,
            tags: article?.fields.tags,
          };
        });
        return res.status(200).json(postsData);
      }
    });
  } else if (req.query.slug) {
    const slug = req.query.slug;
    await getSinglePostBySlug(slug).then((response) => {
      if (response) {
        const postsData = [];
        const data = response.map((article, i) => {
          postsData[i] = {
            slug: article?.fields.slug,
            title: article?.fields.title,
            description: article?.fields.postDescription?.replace(
              "//",
              "https://"
            ),
            featureImage:
              article?.fields.featureImage?.fields.file.url?.replace(
                "//",
                "https://"
              ),
            date: article?.fields.date,
            createdAt: article.sys.createdAt,
            updatedAt: article.sys.updatedAt,
            tags: article?.fields.tags,
          };
        });
        return res.status(200).json(postsData);
      }
    });
  } else {
    await getEntriesByType("blogs").then((response) => {
      if (response) {
        const postsData = [];
        const data = response.map((article, i) => {
          postsData[i] = {
            id: article.sys.id,
            title: article?.fields.title,
            description: article?.fields.postDescription?.replaceAll(
              "//",
              "https://"
            ),
            featureImage:
              article?.fields.featureImage?.fields.file.url?.replaceAll(
                "//",
                "https://"
              ),
            date: article?.fields.date,
            createdAt: article.sys.createdAt,
            updatedAt: article.sys.updatedAt,
            tags: article?.fields.tags,
          };
        });
        return res.status(200).json(postsData);
      }
      return res.json(response);
    });
  }
}
