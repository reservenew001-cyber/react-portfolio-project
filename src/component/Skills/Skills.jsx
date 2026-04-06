import React from "react";
import Style from "./Skills.module.css";
import {
  FaSquareJs,
  FaReact,
  FaFileExcel,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss,
} from "react-icons/fa6";
import { TbFileTypeSql } from "react-icons/tb";

function Skills() {
  return (
    <div id="Skill" className={Style.skills_con}>
      <h3 className={Style.skills_title}>My Skill Set</h3>
      <ul className={Style.skills_list}>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss />
        </li>
        <li>
          <FaSquareJs />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaGitAlt />
        </li>
        <li>
          <FaNodeJs />
        </li>
        <li>
          <TbFileTypeSql />
        </li>
        <li>
          <FaFileExcel />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
