import React from "react";
import style from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={style.testi_con}>
      <h3 className={style.testi_title}>Testimonials</h3>
      <div className={style.testi_list}>
        <div className={style.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img
            src="src/images/9D316A8D-9934-40A6-9E62-0A535A2A1491.jpg"
            alt=""
          />
          <h4>John Doe</h4>
          <p className={style.bio}>Web Developer</p>
        </div>
        <div className={style.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img
            src="src/images/251294A2-2521-4A88-952F-C3176BA9E01C.jpg"
            alt=""
          />
          <h4>Jack Doe</h4>
          <p className={style.bio}>Web Developer</p>
        </div>
        <div className={style.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img
            src="src/images/C6C0F334-1A8D-4631-8A7C-6EE6ECDA6783.jpg"
            alt=""
          />
          <h4>Joe Doe</h4>
          <p className={style.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
