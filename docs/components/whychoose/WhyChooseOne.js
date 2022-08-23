import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';
import SectionTitle from '../../elements/section-title/SectionTitle';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const WhyChooseOne = () => {
    return (
      <div className="section-padding bg-color-light">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="why-choose-us">
                <SectionTitle 
                    subtitle="About Us"
                    title="Why branding matters?"
                    description="Ut condimentum enim nec diam convallis mollis. Sed felis quam, semper dapibus purus sed, rhoncus ullamcorper lacus."
                    textAlignment="heading-left"
                    textColor=""
                />
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                            <Accordion.Body>
                            Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><FaCode /> Design</Accordion.Header>
                            <Accordion.Body>
                            Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                            <Accordion.Body>
                            Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
                <div className="why-choose-us mb--30">
                <div className="why-choose-thumb">
                    <Image src={"/images/about/about-3.png"} alt="Office" layout='fill' />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}

export default WhyChooseOne;