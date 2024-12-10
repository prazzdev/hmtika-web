import { getEntriesByType } from "@/lib/contentful/queries";

export default async function handler(req, res) {
  await getEntriesByType("candidates").then((response) => {
    if (response) {
      const candidatesData = [];
      const data = response.map((candidate, i) => {
        candidatesData[i] = {
          order: candidate?.fields.order,
          fullname: candidate?.fields.fullname,
          picture: candidate?.fields.picture?.fields.file.url.replace(
            "//",
            "https://"
          ),
          position: candidate?.fields.position,
          email: candidate?.fields?.email,
          linkedIn: candidate?.fields?.linkedIn,
          github: candidate?.fields?.github,
          ig: candidate?.fields?.ig,
          website: candidate?.fields?.website,
        };
      });
      return res
        .status(200)
        .json(candidatesData.sort((a, b) => a.order - b.order));
    }
    return res.json(response);
  });
}
