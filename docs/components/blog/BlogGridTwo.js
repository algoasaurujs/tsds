import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const BlogGridTwo = ({data, colSize}) => {


    return (
        <>
            {data.map((blog) => (
                <div className={colSize} key={blog.id}>
                    <div className="blog-grid blog-grid-2">
                        <div className="post-thumbnail">
                            <Link href={`/blog-details/${blog.id}`}><a><Image src={`/${blog.thumb}`} alt="Blog" layout='fill' /></a></Link>
                        </div>
                        <div className="author">
                            <div className="info">
                                <h6 className="author-name">{blog.author_name}</h6>
                                <ul className="blog-meta list-unstyled">
                                    <li>{blog.post_date}</li>
                                    <li>{blog.read_time}</li>
                                </ul>
                            </div>
                        </div>
                        <h5 className="title">
                            <Link href={`/blog-details/${blog.id}`}><a>{blog.title}</a></Link>
                        </h5>
                        <p>{blog.excerpt}</p>
                        <Link className="axil-btn btn-borderd" to={`/blog-details/${blog.id}`}><a>Read More</a></Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogGridTwo;