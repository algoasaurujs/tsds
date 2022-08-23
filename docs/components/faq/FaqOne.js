import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';
import SectionTitle from '../../elements/section-title/SectionTitle';
import FaqData from '../../data/faq/FaqData.json';

const allData = FaqData;


const FaqOne = () => {
    return (
        <div className="section section-padding-equal bg-color-light faq-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xl-4">
                        <SectionTitle 
                            subtitle="Pricing Plan"
                            title="Frequently asked questions"
                            description="Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque."
                            textAlignment="heading-left"
                            textColor=""
                        />
                    </div>
                    <div className="col-lg-7 col-xl-8">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                                {allData.map((data) => (
                                    <Accordion.Item eventKey={data.id} key={data.id}>
                                        <Accordion.Header><span>{`${data.id}.`}</span>{data.title}</Accordion.Header>
                                        <Accordion.Body><p>{data.body}</p></Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><Image src={"/images/others/bubble-7.png"} alt="Bubble" layout='fill' /></li>
                <li className="shape shape-2"><Image src={"/images/others/line-4.png"} alt="line" layout='fill' /></li>
                <li className="shape shape-4"><Image src={"/images/others/poses-lady.png"} alt="Poses" layout='fill' /></li>
            </ul>
        </div>
    )
}

export default FaqOne;