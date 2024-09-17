import Link from "next/link";

export default function NavMenuDropDown({ title, menuList, key }) {
  return (
    <>
      <div className="dropdown-right dropdown">
        <label
          tabIndex={0}
          className="border-1 border-white bg-white hover:bg-[#00ADB5] m-1 hover:border-none text-gray-700 hover:text-white btn"
        >
          {title}
        </label>
        <ul
          tabIndex={0}
          className="z-[1] bg-white shadow-lg p-2 rounded-box w-52 dropdown-content menu"
        >
          {menuList.map((menu, i) => {
            return (
              <>
                <li
                  key={i}
                  className="bg-white hover:bg-[#00ADB5] rounded-lg text-gray-700"
                >
                  <Link href={menu.target} className="hover:text-white">
                    {menu.title}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
