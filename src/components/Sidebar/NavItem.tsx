import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  icon: string;
  label: string;
  id: number;
  link: string;
  handleChangeTab: (value: number) => void;
  activeTab: number;
}

const NavItem = ({
  icon,
  label,
  id,
  handleChangeTab,
  activeTab,
  link,
}: NavItemProps) => {
  return (
    <li
      className={` cursor-pointer ${
        activeTab === id
          ? "bg-[rgba(118,160,240,0.25)] transition-colors duration-700"
          : "bg-transparent"
      }`}
      onClick={() => handleChangeTab(id)}
    >
      <Link to={`/${link}`} className="flex text-sm p-4">
        <img
          src={`./assets/images/sidebar/${icon}`}
          alt=""
          className="mr-2"
          width={20}
          height={20}
        />
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavItem;
