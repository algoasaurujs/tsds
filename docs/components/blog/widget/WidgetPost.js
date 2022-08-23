import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogData from "../../../data/blog/BlogData.json";


const allBlogData = BlogData;


const WidgetPost = () => {
    return (
        <div className="post-list-wrap">
        
        {allBlogData.slice(0, 3).map((data, index) => (
            <div className="single-post" key={index}>
                <div className="post-thumbnail">
                    <Link href={`/blog-details/${data.id}`}><a>
                        <Image src={`/${data.thumb}`} alt="Blog" layout='fill' />
                    </a></Link>
                </div>
                <div className="post-content">
                    <h6 className="title">
                    <Link href={`/blog-details/${data.id}`}><a>
                        {data.title}
                    </a></Link>
                    </h6>
                    <ul className="blog-meta list-unstyled">
                        <li>{data.post_date}</li>
                        <li>{data.read_time}</li>
                    </ul>
                </div>
            </div>
        ))}
    </div>
    )
}

export default WidgetPost;


