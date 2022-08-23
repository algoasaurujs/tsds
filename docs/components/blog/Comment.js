import React from 'react';
import Image from 'next/image';
import { FaReply } from "react-icons/fa";


const Comment = () => {

    return (
       <>
       <div className="blog-comment">
            <h3 className="section-title">Comments:</h3>
            <div className="comment-list">
                <div className="comment">
                    <div className="thumbnail">
                        <Image src={"/images/blog/author-1.png"} alt="Blog Comment" layout='fill' />
                    </div>
                    <div className="content">
                        <div className="heading">
                            <h5 className="title">Sophie Asveld</h5>
                            <div className="comment-date">
                                <p>February 14, 2021</p>
                                <button className="reply-btn"><FaReply /></button>
                            </div>
                        </div>
                        <p>Email is a crucial channel in any marketing mix,
                            and never has this been truer than for today’s entrepreneur. Curious
                            what to say.</p>
                    </div>
                </div>
                <div className="comment comment-reply">
                    <div className="thumbnail">
                        <Image src={"/images/blog/author-2.png"} alt="Blog Comment" layout='fill' />
                    </div>
                    <div className="content">
                        <div className="heading">
                            <h5 className="title">Ariana Gerad</h5>
                            <div className="comment-date">
                                <p>February 14, 2021</p>
                                <button className="reply-btn"><FaReply /></button>
                            </div>
                        </div>
                        <p>Email is a crucial channel in any marketing mix,
                            and never has this been truer than for today’s entrepreneur. Curious
                            what to say.</p>
                    </div>
                </div>
                <div className="comment">
                    <div className="thumbnail">
                        <Image src={"/images/blog/author-3.png"} alt="Blog Comment" layout='fill' />
                    </div>
                    <div className="content">
                        <div className="heading">
                            <h5 className="title">Sophie Asveld</h5>
                            <div className="comment-date">
                                <p>February 14, 2021</p>
                                <button className="reply-btn"><FaReply /></button>
                            </div>
                        </div>
                        <p>Email is a crucial channel in any marketing mix,
                            and never has this been truer than for today’s entrepreneur. Curious
                            what to say.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-comment-form">
            <h3 className="title">Leave a comment:</h3>
            <form>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" placeholder="John Smith" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="name" placeholder="example@mail.com" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" className="form-control" name="Phone" placeholder="+123456789" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Website</label>
                            <input type="text" className="form-control" name="website" placeholder="www.example.com" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group mb--30">
                            <label>How can we help you?</label>
                            <textarea name="message" id="message" className="form-control textarea" cols="30" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="form-group">
                            <button type="submit" className="axil-btn btn-fill-primary btn-fluid" name="submit-btn">Submit Now</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
       </>
    )
}


export default Comment