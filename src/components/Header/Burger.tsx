import React from "react";
import { useMenuContext } from "../../context/menuContext";

const Burger = () => {
  const { menuOpen, toggleMenu } = useMenuContext();
  return (
    <button
      aria-label="Burger"
      onClick={toggleMenu}
      className={`hamburger block md:hidden focus:outline-none ${
        menuOpen && "open"
      }`}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
};

export default Burger;
