import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogData from "../../data/blog/BlogData.json";
import { slugify } from '../../utils';
import { FaPlay, FaAngleRight, FaAngleLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import FsLightbox from 'fslightbox-react';
import Slider from "react-slick";
import ReactPaginate from 'react-paginate';


const allBlogData = BlogData;


const BlogGridOne = () => {

    const [toggler, setToggler] = useState(false);
    
    function SlickNextArrow(props) {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}><FaAngleRight /></div>
        );
    }

    function SlickPrevArrow(props) {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}><FaAngleLeft /></div>
        );
    }

    var slideSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />,
       
    }

    const [blogs] = useState(allBlogData);
    const [pageNumber, setPageNumber] = useState(0);

    const blogsPerPage = 4;
    const pageVisited = pageNumber * blogsPerPage;
    
    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }


    return (
        <>
            {blogs.slice(pageVisited, pageVisited + blogsPerPage).map((data) => (
                <div className="blog-grid" key={data.id}>
                    <h3 className="title">
                        <Link href={`/blog-details/${data.id}`}><a>{data.title}</a></Link>
                    </h3>
                    <div className="author">
                        <div className="author-thumb">
                            <Image src={`/${data.author_avatar}`} alt="Blog Author" layout='fill' />
                        </div>
                        <div className="info">
                            <h6 className="author-name">
                                <Link href={`/archive/${slugify(data.author_name)}`}><a>{data.author_name}</a></Link>
                            </h6>
                            <ul className="blog-meta list-unstyled">
                                <li>{data.post_date}</li>
                                <li>{data.read_time}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="post-thumbnail">
                        {
                            Array.isArray(data.large_thumb) ? 
                            <Slider {...slideSettings} className="slick-arrow-nav">
                                {data.large_thumb.map((data, index) => (
                                    <div className="slide-item" key={index}>
                                        <Image src={`/${data}`} alt="Blog" layout='fill' />
                                    </div>
                                ))}
                                
                            </Slider> 
                            : <Link href={`/blog-details/${data.id}`}><a><Image src={`/${data.large_thumb}`} alt="Blog" layout='fill' /></a></Link>
                        }
                        
                        {data.format === "video" ?
                        <>
                            <div className="popup-video">
                                <button className="play-btn" onClick={ () => setToggler(!toggler) }><FaPlay /></button>
                            </div> 
                            <FsLightbox toggler={ toggler } sources={ ['https://www.youtube.com/watch?v=1iIZeIy7TqM'] }/>
                        </> 
                        : ""
                        }  
                    </div>
                    <p>{data.excerpt}</p>
                    <Link className="axil-btn btn-borderd btn-large" to={`/blog-details/${data.id}`}><a>Read More</a></Link>
                </div>
            ))}

            <ReactPaginate
                previousLabel={<FaArrowLeft />}
                nextLabel={<FaArrowRight />}
                pageCount= {pageCount}
                onPageChange={changePage}
                containerClassName={"pagination justify-content-start"}
                previousLinkClassName={"prev"}
                nextLinkClassName={"next"}
                disabledClassName={"disabled"}
                activeClassName={"current"}
            />

        </>
    )
}

export default BlogGridOne;