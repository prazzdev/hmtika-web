import Layout from "@/components/Layout"
import { useState } from "react"

let _url = 'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyBvQ8j8TDPTTqnRU7pgQZeDeqfFSLjFniA'

export default function index() {
    const [keyword, setKeyword] = useState('')

    async function search() {
        const query = await searchData()
        setKeyword(query.candidates[0].output)
        console.log({ query: query })
    }

    return (
        <>
        <Layout pageTitle="Chatbot">
            <section 
                id="chatbot"
                className="py-[120px]">
                <p>{keyword}</p>
                <input 
                    name="keyword" 
                    placeholder="masukkan kata kunci"
                    onChange={({ target }) => search(target.value)} />
            </section>
        </Layout>
        </>
    )
}

export async function searchData() {
    const res = await 
                fetch(_url, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ "prompt": { "text": "g30s/pki itu apa?"} })
                })
    const data = await res.json()
    return data
}