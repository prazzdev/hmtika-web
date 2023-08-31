import Link from "next/link"

export default function NavMenuDropDown({ title, menuList }) {
    return (
        <>
        <div className="dropdown dropdown-right">
            <label tabIndex={0} className="bg-white hover:bg-[#00ADB5] text-gray-700 hover:text-white btn m-1 border-1 border-white hover:border-none">{title}</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-box w-52">
            {menuList.map((menu) => {
                return (
                    <>
                    <li className="bg-white hover:bg-[#00ADB5] text-gray-700 rounded-lg"><Link href={menu.target} className="hover:text-white">{menu.title}</Link></li>
                    </>    
                )
            })}
            </ul>
        </div>
        </>
    )
}