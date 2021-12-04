import React, { useState } from "react";
import "./DesktopPageMenu.css";
import logoBlue from "../../img/logoBlue.svg";
const DesktopPageMenu = ({ header, items, active, setActive }) => {
  // const [menuActive, setmenuActive] = useState(false);
  
  return (
    
    <div
      className={active ? "menu " : "menu active"}
      onClick={() => setActive(false)}
    >
      <div
        className="menu__content"
        onMouseOver={(e) => e.stopPropagation()}
        onMouseOut={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <img className="menu__header" src={logoBlue}></img>

        <ul className="menu__text">
          {items.map((items) => (
            <>
              <li>
                <a href={items.href} className={items.className}>
                  {items.value}
                  
                </a>
              </li>
            </>
          ))}
          <li>
            <button>Добавить клиента</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopPageMenu;
