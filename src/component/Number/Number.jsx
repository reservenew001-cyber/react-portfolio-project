import React from "react";
import style from "./Number.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Number() {
  const { ref, inView } = useInView({
    triggerOnce: false, // ให้รันทุกครั้งเมื่อเลื่อนมาเจอ
    threshold: 0.5, // เห็นไปแล้ว 50% ถึงจะเริ่มทำงาน
  });
  const CountUpComponent = CountUp.default ? CountUp.default : CountUp;

  return (
    <div className={style.number_con}>
      <div className={style.number_items}>
        <h3 ref={ref}>
          {inView ? (
            <CountUpComponent end={100} duration={5} suffix="+" />
          ) : (
            "0+"
          )}
        </h3>
        <p>Project Delivered</p>
      </div>
      <div className={style.number_items}>
        <h3 ref={ref}>
          {inView ? (
            <CountUpComponent end={50} duration={5} suffix="+" />
          ) : (
            "0+"
          )}
        </h3>
        <p>Companies Helped </p>
      </div>
      <div className={style.number_items}>
        <h3 ref={ref}>
          {inView ? (
            <CountUpComponent end={10} duration={5} suffix="+" />
          ) : (
            "0+"
          )}
        </h3>
        <p>Years of experience</p>
      </div>
      <div className={style.number_items}>
        <h3 ref={ref}>
          {inView ? (
            <CountUpComponent end={200} duration={5} suffix="+" />
          ) : (
            "0+"
          )}
        </h3>
        <p>Happy Clients</p>
      </div>
    </div>
  );
}

export default Number;
