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
            src="/johndoe-img.jpg"
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
            src="/jackdoe-img.jpg"
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
            src="/joedoe-img.jpg"
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
