import { useState } from "react";
import { navData, hamburgerMenu } from "../../data/nav";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hamburgerDrop, setHamburgerDrop] = useState(false);

  const showHamburger = () => {
    setHamburgerDrop(!hamburgerDrop);
  };

  const handleDropdownClick = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="flex justify-evenly bg-white border-b items-center">
      <div className="w-[170px] mt-1 flex justify-center mb-2">
        <img
          src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.settings/521c4d7548c284890e000001/594a155440e9fb9e592f2ba9-240x240.png"
          alt="nav-logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-center mb-2">
        {navData.map((nav) => (
          <div key={nav.id}>
            <ul>
              <li
                className="relative flex gap-1 items-baseline p-4 cursor-pointer justify-center"
                onClick={() => handleDropdownClick(nav.id)}
              >
                <span className="font-semibold">{nav.name}</span>
                <span className="text-[10px]">{nav.icon && <nav.icon />}</span>
              </li>

              {activeDropdown === nav.id && (
                <div
                  className={`bg-white absolute py-5 px-4 flex rounded-lg transform -translate-x-60`}
                  style={{
                    boxShadow: "0px 0px 20px 0.5px rgba(0, 0, 0, 0.3)",
                    width: nav.large ? "80%" : "auto",
                  }}
                  onClick={() => handleDropdownClick(nav.id)}
                >
                  <div
                    className="flex flex-col justify-between w-[40%]"
                    style={{ marginRight: nav.large ? "-5rem" : "auto" }}
                  >
                    <div className="flex flex-col w-[65%]">
                      <span className="font-bold text-green-700 uppercase">
                        {nav.name}
                      </span>
                      <span className="w-10 h-0.5 bg-emerald-700 mb-2 rounded-lg" />
                      <span
                        className=" text-[15px] font-normal opacity-70 text-wrap"
                        style={{ lineHeight: 1 }}
                      >
                        {nav.description}
                      </span>
                      {nav.btn === true && (
                        <button className="ml-0 bg-emerald-500 w-[60%] px-2 py-1 rounded-full mt-2 border border-transparent hover:bg-white hover:border-gray-300 font-semibold">
                          View all
                        </button>
                      )}
                    </div>
                    <div className="">
                      <img
                        src={nav.image}
                        alt={nav.image}
                        className="mb-2 w-[70%]"
                      />
                    </div>
                  </div>
                  {nav.dropdown.map((group, index) => (
                    <div
                      key={index}
                      className="py-3"
                      style={{ lineHeight: 1.5 }}
                    >
                      {Array.isArray(group) && index === 0 && (
                        <div className="grid grid-cols-2">
                          {group.map((item) => (
                            <div
                              key={item.id}
                              className="flex mt-2 cursor-pointer pb-3"
                              style={{ lineHeight: 1 }}
                            >
                              <img src={item.image} className="w-8 h-8 " />
                              <li className="flex flex-col pl-2 text-[15px]">
                                <span className="text-gray-500 font-bold hover:text-green-500">
                                  {item.title}
                                </span>
                                <span className="text-[12px] text-gray-400 pt-1 ">
                                  {item.description}
                                </span>
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {Array.isArray(group) && index === 1 && (
                        <div className="border-l grid grid-cols-1 pl-4">
                          {group.map((item) => (
                            <div
                              key={item.id}
                              className="flex mt-2 cursor-pointer pb-2"
                              style={{ lineHeight: 1 }}
                            >
                              <div className="">{item.heading}</div>
                              <img src={item.image} className="w-8 h-8 " />
                              <li className="flex flex-col pl-2 font-bold text-[15px] ">
                                <span className="text-gray-500 hover:text-green-600 hover:text-opacity-70">
                                  {item.title}
                                </span>
                                <span className="text-[12px] text-gray-400 font-normal">
                                  {item.description}
                                </span>
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <button className="py-1 px-5 bg-emerald-600 hover:bg-white hover:border-gray-300 border-2 border-transparent rounded-[2em] font-semibold">
          Contact us
        </button>
        <div>
          <span>
            <GiHamburgerMenu
              className="text-xl cursor-pointer"
              onClick={showHamburger}
            />
          </span>
        </div>
        {hamburgerDrop && (
          <div
            className="absolute translate-y-[5.5em] border bg-white rounded-md right-[6.5rem] w-[10%]"
            style={{ boxShadow: "0px 0px 20px 0.5px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="flex flex-col p-2 " onClick={showHamburger}>
              {hamburgerMenu.map((ham) => (
                <button
                  key={ham.id}
                  className="text-start font-semibold hover:text-green-600 text-[13px] pb-2"
                >
                  {ham.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
