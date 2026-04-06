import React from "react";
import style from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div id="Portfolio" className={style.port_con}>
      <h3 className={style.port_title}>Portfolio</h3>
      <div className={style.port_list}>
        <div className={style.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://media.istockphoto.com/id/2244276959/photo/ai-concepts-for-developers-who-are-integrating-ai-into-their-applications-to-enable-users-to.webp?a=1&b=1&s=612x612&w=0&k=20&c=dKTfic5mEtDZomD_VUQAVmJrUJ4xbRIQlenQjzb8YY8="
              alt=""
            />
          </Tilt>
          <p>Project title</p>
        </div>
        <div className={style.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVsbCUyMHN0YWNrJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww"
              alt=""
            />
          </Tilt>
          <p>Project title</p>
        </div>
        <div className={style.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
              alt=""
            />
          </Tilt>
          <p>Project title</p>
        </div>
        <div className={style.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://media.istockphoto.com/id/2210884541/photo/ux-ui-development-along-with-web-design-to-develop-mobile-and-laptop-app-interface-layout.webp?a=1&b=1&s=612x612&w=0&k=20&c=KTDhRLzwXr6t2i44KLSB35hVKnHSHyi5QpEKW5GCUlY="
              alt=""
            />
          </Tilt>
          <p>Project title</p>
        </div>
        <div className={style.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww"
              alt=""
            />
          </Tilt>
          <p>Project title</p>
        </div>
        <div className={style.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://media.istockphoto.com/id/1200717412/photo/database-structure-flow-chart-of-a-control-panel-of-web-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=QSe-O3AUmJAyL-3M9DmaKDkEtYEwdMZe-zKLgf-JDFw="
              alt=""
            />
          </Tilt>
          <p>Project title</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
