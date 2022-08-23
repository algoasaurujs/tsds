import React from 'react';
import Tilty from 'react-tilty';
import Image from 'next/image';

const BcrumbBannerTwo = ({title, paragraph, mainThumb}) => {
    return (
        <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-heading heading-left">
                            <h1 className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                            <p dangerouslySetInnerHTML={{__html: paragraph}}></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <Tilty perspective={2000} reset={false}>
                                <Image src={mainThumb} alt="Illustration" layout='fill' />
                            </Tilty>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1">
                    <Image src={"/images/others/bubble-9.png"} alt="Bubble" layout='fill' />
                </li>
                <li className="shape shape-2">
                    <Image src={"/images/others/bubble-20.png"} alt="Bubble" layout='fill' />
                </li>
                <li className="shape shape-3">
                    <Image src={"/images/others/line-4.png"} alt="Line" layout='fill' />
                </li>
            </ul>
        </div>
    )
}

export default BcrumbBannerTwo;
