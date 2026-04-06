import React from "react";
import style from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={style.hero_wrapper}>
      <div className={style.container}>
        <div className={style.hero_con}>
          <div className={style.hero_info}>
            <p className={style.text_1}>Hi, it's me</p>
            <h3 className={style.text_2}>Somjai Cat</h3>
            <p className={style.text_3}>
              <span style={{ marginRight: "10px" }}>I'm a</span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Front-end Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={style.text_4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur dolorum optio natus dicta <br /> aliquam cum incidunt,
              dolores itaque ea, cupiditate fugit, nemo iusto eligendi aut
              eveniet.
            </p>
            <ul className={style.hero_socail}>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={style.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
