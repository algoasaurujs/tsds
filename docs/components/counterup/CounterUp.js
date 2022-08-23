import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const Data = [
    {  
        id: 1,
        light_icon: "/images/icon/icon-7.png",
        dark_icon: "/images/icon/icon-10.png",
        countNum: 15,
        text: "Years of operation"
    },
    {  
        id: 2,
        light_icon: "/images/icon/icon-8.png",
        dark_icon: "/images/icon/icon-11.png",
        countNum: 360,
        text: "Projects deliverd"
    },
    {  
        id: 3,
        light_icon: "/images/icon/icon-9.png",
        dark_icon: "/images/icon/icon-12.png",
        countNum: 600,
        text: "Specialist"
    },
    {  
        id: 4,
        light_icon: "/images/icon/apple.png",
        dark_icon: "/images/icon/apple-black.png",
        countNum: 64,
        text: "Years of operation"
    }
   
];

const CounterUp = ({colSize, layoutStyle, evenTopMargin}) => {

    return (
        <>
            {Data.map((data) => (
                <div className={`${colSize} ${(data.id % 2  === 0) ? evenTopMargin : ""}`} key={data.id} >
                    <div className={`counterup-progress ${layoutStyle}`}>

                        { 
                            layoutStyle === "counterup-style-2" ? 
                            <div className="icon">
                                <img className="dark-icon" src={data.dark_icon} alt="Icon" />
                                <img className="light-icon" src={data.light_icon} alt="Icon" />
                            </div> : 
                            <div className="icon">
                                <Image src={data.light_icon} alt="Icon" layout='fill' />
                            </div> 
                        }

                        <div className="count-number h2">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end={data.countNum} duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                        </div>
                        <h6 className="title">{data.text}</h6>
                    </div>
                </div>
            ))}
        </>
    )
}



export default CounterUp;