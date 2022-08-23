import React from 'react';
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa";
import NavItem from './NavItem';


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <NavItem title='Documentation'>
                    <li><Link href={"/digital-agency"}><a>Sample Link</a></Link></li>
                    {/* <li><Link href={"/creative-agency"}><a>Creative Agency</a></Link></li>
                    <li><Link href={"/personal-portfolio"}><a>Personal Portfolio</a></Link></li>
                    <li><Link href={"/home-startup"}><a>Home Startup</a></Link></li>
                    <li><Link href={"/corporate-agency"}><a>Corporate Agency</a></Link></li>
                    <li><a href="https://new.axilthemes.com/demo/react/abstrak-rtl/">RTL Demo</a></li> */}
                </NavItem>
                {/* <NavItem title='Services'>
                    <li><Link href={"/service-one"}><a>Service</a></Link></li>
                    <li><Link href={"/service-two"}><a>Service Two</a></Link></li>
                    <li><Link href={"/service-details/design"}><a>Service Details</a></Link></li>
                </NavItem>
                <NavItem title='Portfolio'>
                    <li><Link href={"/project-grid-one"}><a>Two Column</a></Link></li>
                    <li><Link href={"/project-grid-two"}><a>Three Column</a></Link></li>
                    <li><Link href={"/project-grid-three"}><a>Four Column</a></Link></li>
                    <li><Link href={"/project-width-one"}><a>Three Column Width</a></Link></li>
                    <li><Link href={"/project-width-two"}><a>Four Column Width</a></Link></li>
                    <li><Link href={"/project-details/plan-management"}><a>Portfolio Details</a></Link></li>
                </NavItem>
                <NavItem title='Pages'>
                    <li><Link href={"/about-us"}><a>About Us</a></Link></li>
                    <li><Link href={"/our-office"}><a>Our Office</a></Link></li>
                    <li><Link href={"/case-study"}><a>Case Study</a></Link></li>
                    <li><Link href={"/case-details/whitehorse"}><a>Case Study Details</a></Link></li>
                    <li><Link href={"/team"}><a>Team</a></Link></li>
                    <li><Link href={"/team-details/jane-cooper"}><a>Team Details</a></Link></li>
                    <li><Link href={"/our-clients"}><a>Our Clients</a></Link></li>
                    <li><Link href={"/testimonials"}><a>Testimonial</a></Link></li>
                    <li><Link href={"/pricing-table"}><a>Pricing Table</a></Link></li>
                    <li><Link href={"/typography"}><a>Typography</a></Link></li>
                    <li><Link href={"/404"}><a>404 Page</a></Link></li>
                    <li><Link href={"/coming-soon"}><a>Coming Soon</a></Link></li>
                </NavItem>
                <NavItem title='Blog'>
                    <li><Link href={"/blog-grid"}><a>Blog</a></Link></li>
                    <li><Link href={"/blog-details/1"}><a>Standard Post</a></Link></li>
                    <li><Link href={"/blog-details/2"}><a>Gallery Post</a></Link></li>
                    <li><Link href={"/blog-details/3"}><a>Video Post</a></Link></li>
                    <li><Link href={"#"}><a>Audio Post</a></Link></li>
                    <li><Link href={"#"}><a>Quote Post</a></Link></li>
                </NavItem> */}
                <li><Link href={"/contact"}><a>Contact</a></Link></li>
            </ul>
        </nav>
    )
}

export default Nav;