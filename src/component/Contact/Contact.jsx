import React from "react";
import style from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div id="Contact" className={style.contact_wrapper}>
      <div className={style.contact_con}>
        <div className={style.contact_info}>
          <h3>Get in touch</h3>
          <p className={style.contact_desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius
            eligendi in laboriosam delectus ipsum inventore alias dolorem
            ducimus aliquid.
          </p>
          <p className={style.contact_address}>
            123 Main Street <br />
            Bangkok, Thailand
          </p>
          <p>
            <FaPhone />
            (+66) 98 555 1234
          </p>
          <p>
            <FaEnvelope />
            support@site.com
          </p>
        </div>
        <div className={style.contact_form}>
          <form action="">
            <div className={style.input_group}>
              <div>
                <label htmlFor="first name">First Name</label>
                <input type="text" placeholder="eg. Somjai" />
              </div>
              <div>
                <label htmlFor="last name">Last Name</label>
                <input type="text" placeholder="eg. Cat" />
              </div>
            </div>
            <label htmlFor="email address">Email Address</label>
            <input type="email" placeholder="eg. Somjaicat@gmail.com" />
            <label htmlFor="message">Your message</label>
            <textarea name="" id="" placeholder="Try here"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
