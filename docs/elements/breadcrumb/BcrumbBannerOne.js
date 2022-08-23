import React from 'react';
import Tilty from 'react-tilty';
import Image from 'next/image';

const BcrumbBannerOne = ({title, paragraph, styleClass, mainThumb}) => {
    return (
        <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="section-heading heading-left">
                    <h1 className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                    <p dangerouslySetInnerHTML={{__html: paragraph}}></p>
                </div>
                <div className={`banner-thumbnail ${styleClass}`}>
                    <Tilty perspective={2000} reset={false}>
                        <Image src={mainThumb} alt="Illustration" layout='fill' />
                    </Tilty>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1">
                    <Image src={"/images/others/bubble-9.png"} alt="Bubble" layout='fill' />
                </li>
                <li className="shape shape-2">
                    <Image src={"/images/others/bubble-21.png"} alt="Bubble" layout='fill' />
                </li>
                <li className="shape shape-3">
                    <Image src={"/images/others/line-4.png"} alt="Line" layout='fill' />
                </li>
            </ul>
        </div>
    )
}

export default BcrumbBannerOne;