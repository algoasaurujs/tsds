import React from 'react';
import Image from 'next/image';

const TestimonialItem = ({colSize, itemShow, testimonialData, layoutStyle}) => {
    return (
        <>
            {testimonialData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                <div className={`testimonial-grid ${layoutStyle ? layoutStyle : ""}`}>
                    <span className="social-media">{data.fromtext}</span>
                    <p>{data.description}</p>
                    <div className="author-info">
                        <div className="thumb">
                            <Image src={data.authorimg} alt={data.authorname} layout='fill' />
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