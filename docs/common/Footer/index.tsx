import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance, FaEnvelopeOpen } from "react-icons/fa";
import cx from 'classnames';
import ServiceData from "data/service/ServiceMain.json";
import { slugify } from 'utils';

const getServiceData = ServiceData;

export type FooterProps = React.HTMLProps<HTMLElement>

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {

    return (
        <footer className={cx("footer-area", className)} {...props}>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link href="https://facebook.com/"><a><FaFacebookF /></a></Link></li>
                            <li><Link href="https://twitter.com/"><a><FaTwitter /></a></Link></li>
                            <li><Link href="https://www.pinterest.com/"><a><FaPinterestP /></a></Link></li>
                            <li><Link href="https://www.linkedin.com/"><a><FaLinkedin /></a></Link></li>
                            <li><Link href="https://www.instagram.com/"><a><FaInstagram /></a></Link></li>
                            <li><Link href="https://vimeo.com/"><a><FaVimeoV /></a></Link></li>
                            <li><Link href="https://dribbble.com/"><a><FaDribbble /></a></Link></li>
                            <li><Link href="https://www.behance.net/"><a><FaBehance /></a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <p>Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus</p>
                                    <form>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link href={`/service-details/${slugify(data.title)}`}><a>{data.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Resourses</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link href={"/blog-grid"}><a>Blog</a></Link></li>
                                                <li> <Link href={"/case-study"}><a>Case Studies</a></Link></li>
                                                <li><Link href={"/project-grid-one"}><a>Portfolio</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link href={"/contact"}><a>Contact</a></Link></li>
                                                <li> <Link href={"/privacy-policy"}><a>Privacy Policy</a></Link></li>
                                                <li><Link href={"/terms-use"}><a>Terms of Use</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">Axilthemes</a>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link href={"/privacy-policy"}><a>Privacy Policy</a></Link></li>
                                    <li><Link href={"/terms-use"}><a>Terms of Use</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;