import axios from "axios"

export default function handler(req, res) {
    let _url = 'https://komikcast.net/detective-conan-chapter-001/'
    axios.get(_url)
            .then(async function(response) {
                console.log(response.data)
                res.status(200).json(response.data)
            })
}