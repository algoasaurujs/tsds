import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';
import SectionTitle from '../../elements/section-title/SectionTitle';


const VideoTwo = () => {
    
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <div className="section section-padding-equal">
                <div className="container">
                    <SectionTitle 
                        subtitle="Experts in field"
                        title="Design startup <br> movement"
                        description=""
                        textAlignment=""
                        textColor=""
                    />
                    <div className="about-expert">
                        <div className="thumbnail">
                            <Image src={"/images/about/about-1.png"} alt="Thumbnail" layout='fill' />
                            <div className="popup-video">
                                <button className="play-btn" onClick={ () => setToggler(!toggler) }><FaPlay /></button>
                            </div>
                        </div>
                        <ul className="frame-shape list-unstyled">
                            <li className="shape shape-1"><Image src={"/images/about/frame-1.png"} alt="Frame" layout='fill' /></li>
                            <li className="shape shape-2"><Image src={"/images/about/frame-2.png"} alt="Frame" layout='fill' /></li>
                        </ul>
                    </div>
                </div>
                <ul className="shape-group-16 list-unstyled">
                    <li className="shape shape-1"><Image src={"/images/others/circle-2.png"} alt="circle" layout='fill' /></li>
                    <li className="shape shape-2"><Image src={"/images/others/bubble-2.png"} alt="Line" layout='fill' /></li>
                    <li className="shape shape-3"><Image src={"/images/others/bubble-1.png"} alt="Line" layout='fill' /></li>
                </ul>
            </div>
            <FsLightbox toggler={ toggler } sources={ ['https://www.youtube.com/watch?v=1iIZeIy7TqM'] }/>
        </>
    )
}

export default VideoTwo;

