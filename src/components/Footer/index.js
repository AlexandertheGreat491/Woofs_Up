import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <a
          style={{ width: "20%", height: "20%" }}
          href="https://github.com/AlexandertheGreat491"
        >
          <FaGithub />
        </a>
        <span className="p-2">&copy; 2022 Alexander Van Dyke</span>
      </div>
    </footer>
  );
};

export default Footer;
