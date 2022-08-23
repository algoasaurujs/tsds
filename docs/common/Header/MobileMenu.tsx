import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import Nav from "./Nav";

export type MobileMenuProps = {
  mobileHandler: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileHandler }) => {
  return (
    <div className="mobilemenu-popup">
      <div className="mobilemenu-inner">
        <div className="mobilemenu-header">
          <div className="mobile-nav-logo">
            <Link href="/">
              <a>
                <img
                  className="light-mode"
                  src={"/images/logo-2.svg"}
                  alt="Site Logo"
                />
                <img
                  className="dark-mode"
                  src={"/images/logo-2.svg"}
                  alt="Site Logo"
                />
              </a>
            </Link>
          </div>
          <button className="mobile-menu-close" onClick={mobileHandler}>
            <FaTimes />
          </button>
        </div>
        <div className="mobilemenu-body">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
