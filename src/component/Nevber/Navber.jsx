import React, { useState } from "react";
import style from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";
import { PiCatBold } from "react-icons/pi";

function Navber() {
  const [isToggled, setIsToggled] = useState(false);

  const handlerToggle = () => {
    setIsToggled(!isToggled); //false+false=true
  };

  return (
    <nav>
      <div className={style.container}>
        <div className={style.nav_con}>
          <div className={style.logo}>
            <a href="#"><PiCatBold/></a>
            <a href="#">SJC</a>
          </div>

          <ul>
            <li>
              <a href="#Skill">Skill</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>

          {/* <div className={style.button}>
            <a href="#">Hire Me</a>
          </div> */}
          <button className={style.type1}></button>
        </div>

        {/* Mobile menu */}
        <FaBars className={style.bars} onClick={handlerToggle} />
        {isToggled ? (
          <>
            <ul className={style.mobile_menu}>
              <li>
                <a href="#Skill">Skill</a>
              </li>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            {/* <div className={style.moblie_button}>
              <a href="#">Hire Me</a>
            </div> */}
            <button className={style.moblie_type1}></button>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navber;
