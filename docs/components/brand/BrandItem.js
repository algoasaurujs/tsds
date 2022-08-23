import React from 'react';
import Image from 'next/image';

const Data = [
    {
        image: "/images/brand/brand-1.png"
    },
    {
        image: "/images/brand/brand-2.png"
    },
    {
        image: "/images/brand/brand-3.png"
    },
    {
        image: "/images/brand/brand-4.png"
    },
    {
        image: "/images/brand/brand-5.png"
    },
    {
        image: "/images/brand/brand-6.png"
    },
    {
        image: "/images/brand/brand-7.png"
    },
    {
        image: "/images/brand/brand-8.png"
    }
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <Image src={data.image} alt="Brand" layout='fill' />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;