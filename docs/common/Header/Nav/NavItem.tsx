import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaAngleDown } from "react-icons/fa";

type NavItemProps = {
    children?: React.ReactNode
    title: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, children }) => {

    const [open, setOpen] = React.useState(false);

    const handleToggleOpen = () => setOpen(prev => !prev);

    return (
        <li className="menu-item-has-children">
            <Link href="#">
                <a className={cx({ 'open': open })} onClick={handleToggleOpen}>{title} <FaAngleDown /></a>
            </Link>
            {children &&
                <ul className={cx("axil-submenu", { "active": open })}>
                    {children}
                </ul>
            }
        </li>
    );
}

export default NavItem;
