import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const AboutFive = () => {
    return (
      <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-team">
                    <div className="thumbnail">
                        <Image src={"/images/about/about-2.png"} alt="thumbnail" layout='fill' />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle">Our Team</span>
                        <h2>Alone we can do so little; together we can do so much.</h2>  
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero.</p>
                        <Link href="#" className="axil-btn btn-large btn-fill-primary"><a>Our Team</a></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive;