import Image from "next/image";

export default function SponsorCard({ name, thumbnail }) {
    return (
        <>
        <div className="w-[80%] flex flex-col justify-center items-center bg-gray-200 shadow-md mb-6 p-4 py-6 rounded-lg">
            <Image src={thumbnail} height={300} width={300} className="mx-auto shadow-md" />
            <h1 className="font-bold text-xl mt-4">{name}</h1>
        </div>
        </>
    )
}