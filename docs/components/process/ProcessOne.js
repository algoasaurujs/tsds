import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProcesstData from "../../data/process/ProcessData.json";
import Tilty from 'react-tilty';
import Image from 'next/image';

const getProcesstData = ProcesstData;

const ProcessOne = () => {
    return (
        
        <div className="section section-padding bg-color-light pb--70">
            <SectionTitle 
                subtitle="Process"
                title="Our logo design process"
                description="Our comprehensive logo design strategy ensures a perfectly crafted logo for your business."
                textAlignment=""
                textColor="mb--90"
            />
            <div className="container">
                {getProcesstData.map((data) => (
                    <div key={data.id} className={`process-work ${(data.id % 2  === 0) ? "content-reverse" : ""}`}>
                        <Tilty perspective={2000}>
                            <div className="thumbnail">
                                <Image src={data.thumb} alt="Thumbnail" layout='fill' />
                            </div>
                        </Tilty>
                    <div className="content">
                        <span className="subtitle">{data.subtitle}</span>
                        <h3 className="title">{data.title}</h3>
                        <p>{data.paragraph}</p>
                    </div>
                </div>
                ))}
            </div>
            <ul className="shape-group-17 list-unstyled">
                <li className="shape shape-1"><Image src={"/images/others/bubble-24.png"} alt="Bubble" layout='fill' /></li>
                <li className="shape shape-2"><Image src={"/images/others/bubble-23.png"} alt="Bubble" layout='fill' /></li>
                <li className="shape shape-3"><Image src={"/images/others/line-4.png"} alt="Line" layout='fill' /></li>
                <li className="shape shape-4"><Image src={"/images/others/line-5.png"} alt="Line" layout='fill' /></li>
                <li className="shape shape-5"><Image src={"/images/others/line-4.png"} alt="Line" layout='fill' /></li>
                <li className="shape shape-6"><Image src={"/images/others/line-5.png"} alt="Line" layout='fill' /></li>
            </ul>
        </div>
    )
}

export default ProcessOne;