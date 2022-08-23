import React from "react";
import cx from 'classnames';
import Logo from "elements/logo/Logo";
import SwitcherHeader from "elements/switcher/SwitcherHeader";
import Nav from "./Nav";
import useStickyHeader from "./useStickyHeader";
import MobileMenu from "./MobileMenu";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {

  let sticky = false;
  if (typeof window !== "undefined") {
    sticky = useStickyHeader(100);
  }

  const mobileMenuHandler = () => {
    document?.querySelector(".mobilemenu-popup")?.classList.toggle("show");
    document?.querySelector("body")?.classList.toggle("mobilemenu-show");
  };

  return (
    <>
      <header className="header axil-header header-style-2">
        <div className={cx("axil-mainmenu", { "axil-sticky": sticky })}>
          <div className="container-fluid">
            <div className="header-navbar">
              <div className="header-logo">
                <Logo
                  limage="/images/logo-2.svg"
                  dimage="/images/logo-3.svg"
                  simage="/images/logo-2.svg"
                />
              </div>
              <div className="header-main-nav">
                <Nav />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                    <button
                      className="btn-wrap btn-dark"
                      onClick={mobileMenuHandler}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <SwitcherHeader />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu mobileHandler={mobileMenuHandler} />
    </>
  );
};

export default Header;
