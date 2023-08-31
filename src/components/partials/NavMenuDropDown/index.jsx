export default function NavMenuDropDown({ title, menuList }) {
    return (
        <>
        <div className="dropdown dropdown-right">
            <label tabIndex={0} className="hover:bg-[#00ADB5] text-gray-700 hover:text-white btn m-1 hover:border-none">{title}</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52">
            {menuList.map((menu) => {
                return (
                    <>
                    <li className="hover:bg-[#00ADB5] text-gray-700 rounded-lg"><a href={menu.target} className="hover:text-white">{menu.title}</a></li>
                    </>    
                )
            })}
            </ul>
        </div>
        </>
    )
}