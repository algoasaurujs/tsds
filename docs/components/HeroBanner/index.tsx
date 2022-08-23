import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedLogo from 'elements/AnimatedLogo';


const HeroBanner = () => {

    return (
        <div className="banner banner-style-2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1 className="title">Future JavaScript Data Structure</h1>
                            <Link href={"/project-grid-one"}><a className="axil-btn btn-fill-white btn-large">Documentation</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-18">
                <li className="shape shape-1 animated slideInRight">
                    <AnimatedLogo />
                </li>
                <li className="shape shape-3">
                    <span className="animated zoomIn delay">
                        <Image src="/images/others/bubble-16.png" width="24" height="24" alt="Shape" />
                    </span>
                </li>
                <li className="shape shape-4">
                    <span className="animated zoomIn delay">
                        <Image src="/images/others/bubble-15.png" width="140" height="140" alt="Shape" />
                    </span>
                </li>
                <li className="shape shape-5">
                    <span className="animated zoomIn delay">
                        <Image src="/images/others/bubble-14.png" width="80" height="80" alt="Shape" />
                    </span>
                </li>
                <li className="shape shape-6">
                    <span className="animated zoomIn delay">
                        <Image src="/images/others/bubble-16.png" width="24" height="24" alt="Shape" />
                    </span>
                </li>
                <li className="shape shape-7 animated slideInDown delay">
                    <Image src="/images/others/bubble-26.png" alt="Shape" width="408" height="300" />
                </li>
            </ul>
        </div>
    )
}

export default HeroBanner;