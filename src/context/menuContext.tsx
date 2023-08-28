import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useMediaQuery } from "usehooks-ts";

interface MenuContextProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const matches = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (!matches) setMenuOpen(false);
  }, [matches]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);
  const value: MenuContextProps = useMemo(
    () => ({
      menuOpen,
      toggleMenu,
      closeMenu,
    }),
    [menuOpen, toggleMenu, closeMenu]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
