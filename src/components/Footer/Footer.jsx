import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-500 to-red-500 text-white p-4 flex justify-between items-center">
    <div>&copy; 2024 Gayatri Kokate</div>
    <div>
      <a
        href="https://github.com/Gayatrikokate"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FaGithub className="inline-block w-6 h-6" />
      </a>
    </div>
  </footer>
);

export default Footer;
