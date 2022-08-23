import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance } from "react-icons/fa";

const BlogAuthor = ({data}) => {
    return (
        <div className="blog-author">
            <div className="author">
                <div className="author-thumb">
                    <Image src={`/${data.author_avatar}`} alt="Blog Author" layout='fill' />
                </div>
                <div className="info">
                    <h5 className="title">{data.author_name}</h5>
                    <p>{data.author_para}</p>
                    <ul className="social-share list-unstyled">
                        <li><a href={data.social[0].facebook}><FaFacebookF /></a></li>
                        <li><a href={data.social[0].twitter}><FaTwitter /></a></li>
                        <li><a href={data.social[0].linkedin}><FaLinkedin /></a></li>
                        <li><a href={data.social[0].instagram}><FaInstagram /></a></li>
                        <li><a href={data.social[0].vimeo}><FaVimeoV /></a></li>
                        <li><a href={data.social[0].pinterst}><FaPinterestP /></a></li>
                        <li><a href={data.social[0].dribble}><FaDribbble /></a></li>
                        <li><a href={data.social[0].behance}><FaBehance /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogAuthor;