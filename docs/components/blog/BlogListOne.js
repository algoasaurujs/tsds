import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa";
import BlogData from "../../data/blog/BlogData.json";


const allBlogData = BlogData;

const BlogListOne = ({colSize, itemShow}) => {
    return (
        <>
            {allBlogData.slice(0, itemShow).map((data) => (
                <div className={`${colSize}`} key={data.id}>
                    <div className={`blog-list ${(data.id % 2  === 0) ? "border-start" : ""}`}>
                        <div className="post-thumbnail">
                            <Link href={`/blog-details/${data.id}`}><a>
                                <Image src={`/${data.thumb}`} alt="Blog Post" layout='fill' />
                            </a></Link>
                        </div>
                        <div className="post-content">
                            <h5 className="title">
                                <Link href={`/blog-details/${data.id}`}><a>
                                    {data.title}
                                </a></Link>
                            </h5>
                            <p>{data.excerpt}</p>
                            <Link href={`/blog-details/${data.id}`} className="more-btn"><a>
                                Learn more <FaAngleRight />
                            </a></Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogListOne;