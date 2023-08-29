import React, { useState, useRef } from "react";
import NavItem from "./NavItem";
import useSlider from "../../hooks/useSlider";
import { useMenuContext } from "../../context/menuContext";
import { useFetch } from "../../hooks/useFetch";
import { SidebarGroup } from "../../types/SidebarTypes";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<number>(2);
  const { menuOpen, closeMenu } = useMenuContext();
  const ulRef = useRef<HTMLUListElement>(null);
  const handleChangeTab = (value: number) => {
    setActiveTab(value);
  };

  const {
    data: sidebarData,
    loading,
    error,
  } = useFetch<SidebarGroup>("sidebarData.json");

  const sliderInfo = useSlider({
    ref: ulRef,
    tabIndex: activeTab,
  });

  const renderSidebarContent = () => {
    if (loading) {
      return <p className="p-4">Loading...</p>;
    }

    if (error) {
      return <p className="p-4">Error</p>;
    }

    return (
      <>
        <ul className="py-5" ref={ulRef}>
          {sidebarData?.map((sidearDataItem, index) => (
            <React.Fragment key={index}>
              {sidearDataItem.items.map((sidebarItem) => (
                <NavItem
                  key={sidebarItem.id}
                  {...sidebarItem}
                  handleChangeTab={handleChangeTab}
                  activeTab={activeTab}
                />
              ))}
              {index !== sidebarData.length - 1 && (
                <li className="divider my-5 w-full h-[1px]" />
              )}
            </React.Fragment>
          ))}
        </ul>
        <div
          className="absolute left-0 top-0 w-1 bg-[#76A0F0] transition-all duration-300"
          style={{
            transform: `translateY(${sliderInfo.top}px)`,
            height: `${sliderInfo.height}px`,
          }}
        ></div>
      </>
    );
  };

  return (
    <>
      <nav
        className={`sidebar bg-bg-base md:sticky fixed left-0 top-[60px] z-20 w-[260px] md:flex-[0_0_228px] md:w-auto h-[calc(100vh-60px)] text-white ${
          menuOpen ? "translate-x-0" : "-translate-x-[100%] md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {renderSidebarContent()}
        </div>
      </nav>
      <div
        onClick={closeMenu}
        className={`fixed top-0 left-0 h-screen w-screen cursor-pointer z-10 bg-black opacity-50 ${
          menuOpen ? "block" : "hidden"
        } md:hidden`}
      ></div>
    </>
  );
};

export default Sidebar;
