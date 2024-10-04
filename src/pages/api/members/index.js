import axios from "axios";

export default function handler(req, res) {
  const name = req.body.name;

  const url = `https://pddikti.kemdikbud.go.id/api/pencarian/mhs/${name.replaceAll(
    " ",
    "%20"
  )}%20teknik%20informatika%20stimik%20tunas%20bangsa%20banjarnegara`;
  axios
    .get(url, {
      headers: {
        "x-api-key": "3ed297db-db1c-4266-8bf4-a89f21c01317",
      },
    })
    .then((response) => {
      const filteredResponse = response.data.filter((data) =>
        data.nama.toLowerCase().includes(name.toLowerCase())
      );
      if (filteredResponse.length === 0) {
        res.status(200).json({ message: "Data not found" });
      }
      res.status(200).json(filteredResponse);
      // res.status(200).json(response.data);
    });
}
