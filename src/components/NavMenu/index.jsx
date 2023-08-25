import { useNavigate } from "react-router-dom"

const NavMenu = () => {
    const navigate = useNavigate()
    return (
        <>
        <div 
            className="w-full md:block md:w-auto bg-[#00ADB5]">
        <ul 
            className="flex flex-col p-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a 
                    type="button"
                    onClick={() => navigate('/')} 
                    className="block py-2 pl-3 pr-4 mb-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white bg-[#AAD8D3]" 
                    aria-current="page">Home</a>
            </li>
            <li>
                <a type="button"
                    onClick={() => navigate('/about')} 
                    className="block py-2 pl-3 pr-4 mb-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white bg-[#AAD8D3]" 
                    aria-current="page">About</a>
            </li>
            <li>
                <a type="button"
                    onClick={() => navigate('/team')} 
                    className="block py-2 pl-3 pr-4 mb-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white bg-[#AAD8D3]" 
                    aria-current="page">Team</a>
            </li>
            <li>
                <a 
                    type="button"
                    onClick={() => navigate('/event')} 
                    className="block py-2 pl-3 pr-4 mb-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white bg-[#AAD8D3]" 
                    aria-current="page">Event</a>
            </li>
            <li>
                <a 
                    type="button"
                    onClick={() => navigate('/info')} 
                    className="block py-2 pl-3 pr-4 mb-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white bg-[#AAD8D3]" 
                    aria-current="page">Info</a>
            </li>
            <li>
                <a 
                    type="button"
                    onClick={() => navigate('/gallery')} 
                    className="block py-2 pl-3 pr-4 mb-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white bg-[#AAD8D3]" 
                    aria-current="page">Gallery</a>
            </li>
        </ul>
        </div>
        </>
    )
}

export default NavMenu