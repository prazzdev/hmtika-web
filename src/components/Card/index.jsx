export default function Card(props) {
    const { thumbnail, category, title, description } = props
    return (
        <div className="max-w-xs p-6 rounded-lg shadow-md bg-gray-200 text-gray-800 mb-8">
            <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-md h-72" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{category}</span>
                <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
            </div>
            <p className="dark:text-gray-100">
                {description}
            </p>
        </div>
    )
}
