import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { label: "ABOUT ME", path: "/" },
    { label: "PORTFOLIO", path: "/portfolio" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-white/50 backdrop-blur-lg rounded-full mt-3 lg:mt-2 overflow-hidden">
        <ul className="flex flex-row gap-0 px-2 items-center">
          {menuItems.map((item, index) => (
            <Fragment key={item.path}>
              <li>
                <Link to={item.path}>
                  <div
                    className={`relative group py-2 px-3 ${
                      currentPath === item.path ? "cursor-default" : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-0 w-full transition-transform duration-300 origin-center ${
                        currentPath === item.path
                          ? "bg-slate-600 h-1 scale-x-100 "
                          : "bg-slate-200 h-0.5 scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </div>
                </Link>
              </li>
              {index < menuItems.length - 1 && (
                <div className="h-5 w-0.5 bg-slate-500 mx-2"></div>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
