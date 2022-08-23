import React from 'react';
import Image from 'next/image';
import SectionTitle from 'elements/section-title/SectionTitle';
import BlogListOne from 'components/blog/BlogListOne';


const BlogOne = () => {
    return (
        <div className="section section-padding-equal">
            <div className="container">
                <SectionTitle 
                    subtitle="What's Going On"
                    title="Latest stories"
                    description="News From Abstrak And Around The World Of Web Design And Complete Solution of Online Digital Marketing"
                    textAlignment=""
                    textColor=""
                />
                <div className="row g-0">
                    <BlogListOne colSize="col-xl-6" itemShow="2" />
                </div>
            </div>
            <ul className="shape-group-1 list-unstyled">
                <li className="shape shape-1"><Image src={"/images/others/bubble-1.png"} alt="bubble" layout='fill' /></li>
                <li className="shape shape-2"><Image src={"/images/others/line-1.png"} alt="bubble" layout='fill' /></li>
                <li className="shape shape-3"><Image src={"/images/others/line-2.png"} alt="bubble" layout='fill' /></li>
                <li className="shape shape-4"><Image src={"/images/others/bubble-2.png"} alt="bubble" layout='fill' /></li>
            </ul>
        </div>
    )
}

export default BlogOne;