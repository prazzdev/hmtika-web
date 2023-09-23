import Layout from "@/components/Layout"
import { useState } from "react"

let _url = 'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyBvQ8j8TDPTTqnRU7pgQZeDeqfFSLjFniA'

export default function index() {
    const [keyword, setKeyword] = useState('. . .')
    const [response, setResponse] = useState('')
    console.log(keyword)

    async function search(q) {
        console.log(q)
        setKeyword(q)
        // const data = await searchData(q)
        // const result = data.candidates[0].output
        // if(result == undefined) { setKeyword(". . .") }
        // else { setKeyword(result) }
        // setKeyword(q)
        // console.log(keyword)
    }

    async function onSubmit(event) {
        event.preventDefault()
        console.log(event.target)
        // console.log(event)
        // const formDate = new FormData()
        let json = await searchData(keyword)
        let result = json.candidates[0].output
        setResponse(result)
    }

    console.log(response)

    return (
        <>
        <Layout pageTitle="Chatbot">
            <section 
                id="chatbot"
                className="w-full py-[120px] flex flex-col justify-center">
                <h1 className="text-xl text-pgray font-bold text-center mb-10">Chatbot</h1>
                <div className="chat chat-start">
                    <div className="chat-bubble">{response}</div>
                </div>
                <form 
                    onSubmit={onSubmit}
                    className="w-full p-4 flex flex-row justify-center items-center">
                    <input 
                        name="keyword" 
                        value={keyword}
                        type="text" placeholder="Masukkan kata kunci" 
                        className="input input-bordered w-full max-w-xs mx-auto"
                        onChange={({ target }) => search(target.value)} 
                        />
                        <button type="submit" className="btn btn-neutral">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.75 12C21.75 12.2724 21.6023 12.5233 21.3642 12.6556L19.0819 13.9236C14.5705 16.4299 9.81474 18.4687 4.88879 20.008L4.22371 20.2159C3.99598 20.287 3.74798 20.2456 3.55575 20.1043C3.36352 19.9629 3.25 19.7386 3.25 19.5L3.25 13.75C3.25 13.359 3.55041 13.0336 3.94019 13.0024L4.16752 12.9842C6.31898 12.8121 8.45387 12.4829 10.5552 11.9997C8.42436 11.5098 6.25902 11.1782 4.0769 11.0083L3.94175 10.9977C3.55131 10.9673 3.25 10.6416 3.25 10.25L3.25 4.50001C3.25 4.26142 3.36352 4.03706 3.55575 3.89574C3.74798 3.75441 3.99598 3.71298 4.22371 3.78415L4.88878 3.99198C9.81474 5.53134 14.5705 7.57008 19.0819 10.0764L21.3642 11.3444C21.6023 11.4767 21.75 11.7276 21.75 12ZM19.4557 12L18.3534 11.3877C14.0256 8.98333 9.46847 7.01801 4.75 5.52089L4.75 9.55957C7.68008 9.82384 10.5783 10.3702 13.4043 11.1912L13.7092 11.2798C14.0299 11.3729 14.2503 11.6668 14.25 12.0007C14.2497 12.3346 14.0287 12.6281 13.7078 12.7206L13.3173 12.8333C10.5188 13.6404 7.65003 14.1784 4.75 14.44L4.75 18.4791C9.46846 16.982 14.0256 15.0167 18.3534 12.6124L19.4557 12Z" fill="#fff"/>
                            </svg>
                        </button>
                </form>
            </section>
        </Layout>
        </>
    )
}

export async function searchData(q) {
    const res = await 
                fetch(_url, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ "prompt": { "text": q} })
                })
    const data = await res.json()
    return data
}