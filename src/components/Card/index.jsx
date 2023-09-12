import Link from "next/link"

export default function Card({ redirectTo, thumbnail, category, title, description }) {
    console.log(redirectTo)
    let target
    if(redirectTo == undefined) {
        target = '#'
    } else {
        target = redirectTo
    }
    return (
        <Link 
            href={target}
             className="p-6 rounded-lg shadow-md bg-gray-200 text-gray-800 mb-8">
            <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-md h-[180px]" />
            <div className="mt-6 mb-2">
                <span className="block text-xs text-pteal font-bold tracking-widest uppercase mb-1">{category}</span>
                <h2 className="text-xl text-pgray font-semibold tracking-wide">{title}</h2>
            </div>
            <p className="text-sm text-sgray">
                {description}
            </p>
        </Link>
    )
}
