import React from 'react';
import Image from 'next/image';
import TestimonialData from "../../data/testimonial/TestimonialData.json";


const allData = TestimonialData;


const TestimonialItem = ({colSize, itemShow}) => {
    return (
        <>
            {allData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                    <div className="testimonial-grid">
                        <span className="social-media">
                            <Image src={data.from} alt="Yelp" layout='fill' />
                        </span>
                        <p>{data.description}</p>
                        <div className="author-info">
                            <div className="thumb">
                                <Image src={data.authorimg} alt="Google Review" layout='fill' />
                            </div>
                            <div className="content">
                                <span className="name">{data.authorname}</span>
                                <span className="designation">{data.authordesig}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TestimonialItem;