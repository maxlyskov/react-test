import React from "react";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[60px] bg-bg-base flex items-center justify-between gap-2 px-4 md:px-5 sticky top-0 z-20">
      <div className="flex items-center gap-5">
        <Burger />
        <Link to="/">
          <img
            src="./assets/images/logo.svg"
            alt="storyteller"
            width={184}
            height={35}
          />
        </Link>
      </div>
      <div className="flex items-center gap-5 lg:gap-8">
        <Link to="/">
          <img
            src="./assets/images/question.svg"
            alt="question"
            width={20}
            height={20}
          />
        </Link>
        <button className="w-9 h-9 bg-[#103B8E] rounded-full flex items-center justify-center text-white">
          RJ
        </button>
      </div>
    </header>
  );
};

export default Header;
