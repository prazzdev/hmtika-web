import axios from "axios";

export default function handler(req, res) {
  const { id } = req.query;
  const url = `https://pddikti.kemdikbud.go.id/api/detail/mhs/${id}`;
  axios
    .get(url, {
      headers: {
        "x-api-key": "3ed297db-db1c-4266-8bf4-a89f21c01317",
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
    });
}
