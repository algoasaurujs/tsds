import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const CtaLayoutOne = () => {

    return (

        <div className="section call-to-action-area">
            <div className="container">
                <div className="call-to-action">
                    <div className="section-heading heading-light">
                        <span className="subtitle">Let&apos;s Work Together</span>
                        <h2 className="title">Need a successful project?</h2>
                        <Link href={"/contact"} className="axil-btn btn-large btn-fill-white"><a>
                            Estimate Project
                        </a></Link>
                    </div>
                    <div className="thumbnail">
                        <div className="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                            <img className="paralax-image" src={"/images/others/chat-group.png"} alt="Chat" />
                        </div>
                        <ul className="list-unstyled small-thumb">
                            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="800" data-sal-delay="400">
                                <img className="paralax-image" src={"/images/others/laptop-poses.png"} alt="Laptop" />
                            </li>
                            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="800" data-sal-delay="300">
                                <img className="paralax-image" src={"/images/others/bill-pay.png"} alt="Bill" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-9">
                <li className="shape shape-1"><Image src={"/images/others/bubble-12.png"} alt="Comments" layout='fill' /></li>
                <li className="shape shape-2"><Image src={"/images/others/bubble-16.png"} alt="Comments" layout='fill' /></li>
                <li className="shape shape-3"><Image src={"/images/others/bubble-13.png"} alt="Comments" layout='fill' /></li>
                <li className="shape shape-4"><Image src={"/images/others/bubble-14.png"} alt="Comments" layout='fill' /></li>
                <li className="shape shape-5"><Image src={"/images/others/bubble-16.png"} alt="Comments" layout='fill' /></li>
                <li className="shape shape-6"><Image src={"/images/others/bubble-15.png"} alt="Comments" layout='fill' /></li>
                <li className="shape shape-7"><Image src={"/images/others/bubble-16.png"} alt="Comments" layout='fill' /></li>
            </ul>
        </div>
    )

}

export default CtaLayoutOne;