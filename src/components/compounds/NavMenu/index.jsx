import Image from "next/image";
import NavMenuDropDown from "../../fragments/NavMenuDropDown";
import Link from "next/link";
import menuData from "@/lib/data/menuData";

export default function NavMenu() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="right-7 bottom-6 fixed lg:hidden hover:bg-[#4de4ec] shadow-lg p-3 rounded-lg drawer-button pbgcolor"
          >
            <Image src={"/src/image/menu.svg"} width={22} height={22} />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="bottom-[130px] fixed bg-base-20 p-4 w-50 min-h-[300px] text-base-content menu">
            {menuData.map((menu, i) => (
              <div className="dropdown-right dropdown">
                {menu.child ? (
                  <>
                    <label
                      tabIndex={0}
                      className="border-1 border-white bg-white hover:bg-[#00ADB5] m-1 hover:border-none text-gray-700 hover:text-white btn"
                    >
                      {menu.name}
                    </label>
                    <ul
                      tabIndex={0}
                      className="z-[1] bg-white shadow-lg p-2 rounded-box w-52 dropdown-content menu"
                    >
                      {menu.child.map((subMenu, i) => {
                        return (
                          <>
                            <li
                              key={i}
                              className="bg-white hover:bg-[#00ADB5] rounded-lg text-gray-700"
                            >
                              <Link
                                href={subMenu.path}
                                className="hover:text-white"
                              >
                                {subMenu.name}
                              </Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <Link
                    href="/"
                    className="border-1 border-white bg-white hover:bg-[#00ADB5] m-1 hover:border-none text-gray-700 hover:text-white btn"
                  >
                    Beranda
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
