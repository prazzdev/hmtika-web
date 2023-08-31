export default function NavMenuDropDown({ title, menuList }) {
    return (
        <>
        <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn m-1">{title}</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            {menuList.map((menu) => {
                return (
                    <>
                    <li><a href={menu.target}>{menu.title}</a></li>
                    </>    
                )
            })}
            </ul>
        </div>
        </>
    )
}