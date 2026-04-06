import React from "react";
import style from "./Services.module.css";
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";

function Services() {
  return (
    <div className={style.services_con}>
      <h3 className={style.services_title}>My Services</h3>
      <div className={style.services_list}>
        <div className={style.services_item}>
            <FaCode/>
            <h4>Web Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
        <div className={style.services_item}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
        <div className={style.services_item}>
            <FaDesktop/>
            <h4>Front-end Consulting</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
