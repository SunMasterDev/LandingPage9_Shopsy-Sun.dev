import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "../Navbar/DarkMode";


const Navbar = ({handleOrderPopup}) => {
  const Menu = [
    {
    id:1,
    name:"Home",
    link:"/#"
  },
  {
    id:2,
    name:"Top Rated",
    link:"/#services"
  },
  {
    id:3,
    name:"Kids Wear",
    link:"/#"
  },
  {
    id:4,
    name:"Mens Wear",
    link:"/#"
  },
  {
    id:5,
    name:"Electronics",
    link:"/#"
  },
]
  const DropdownLinks=[
  {
    id:1,
    name:"trending products",
    link:"/#",
  },
  {
    id:2,
    name:"best selling",
    link:"/#",
  },
  {
    id:3,
    name:"top rated",
    link:"/#",
  },
]
  return (
    <div className="shadow-md bg-white dark:bg-gray-900
     dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        {/* container */}
        <div className="container flex justify-between items-center">

          {/*LOGO #1 */}
          <div>
            <a href="#"
              className="font-bold text-xl
                sm:text-3xl md:text-2xl flex gap-2"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy-Sun.dev
            </a>
          </div>

          {/* search bar #2 */}
          <div className="flex justify-between 
          items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px]
                group-hover:w-[300px] transition-all duration-300
                rounded-full border border-gray-300
                px-2 py-1 focus:outline-none focus:border-1
                focus:border-primary
                dark:border-gray-500
                dark:bg-gray-800"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary
            absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            
          {/* order bar #3 */}
          <button
            onClick={() => handleOrderPopup()}
            className="bg-gradient-to-r from-primary to-secondary transition-all
            text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span
              className="group-hover:block hidden
            transition-all duration-200"
            >
              Order
            </span>
            <FaCartShopping className="text-xl text-white 
            drop-shadow-sm cursor-pointer" />
          </button>
          
          {/* DarkMode Switch #4 */}
          <div>
            <DarkMode/>
          </div>
        </div>
        </div>
      </div>
      {/* lower Navbar #5 */}
      <div className="flex justify-center"
      data-aos="zoom-in">
        <ul className="sm:flex hidden items-center gap-4">
          {
            Menu.map((data)=>( //ลูป map ใส่ () ไม่ใช่ {}
              <li key={data.id}>
                <a href={data.link} className="inline-block px-4
                hover:text-primary duration-200">{data.name}</a>
              </li>
            ))
          }
          {/* Simple Dropdown and Links #5.1*/}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Product
            <span>
              <FaCaretDown className="transition-all duration-200
              group-hover:rotate-180"/>
            </span>
            </a>
            {/* 1 */}
            <div className="absolute z-[9999]
            hidden group-hover:block w-[200px] rounded-md
            bg-white text-black p-2 shadow-md"> 
              <ul>
                {
                  DropdownLinks.map((data)=>(
                    <li key={data.id}>
                      <a href={data.link} className="capitalize inline-block
                      w-full rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
