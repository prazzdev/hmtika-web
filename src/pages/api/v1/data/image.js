import { getMediaByFieldTag } from "@/lib/contentful/queries";

export default async function handler(req, res) {
  try {
    const response = await getMediaByFieldTag("heroImage");
    console.log("response api", response);
    res.status(200).json({ statusCode: 200, data: response });
  } catch (error) {
    console.error(error);
  }
}
