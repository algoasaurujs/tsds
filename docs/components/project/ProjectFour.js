import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectPropTwo from './itemProp/ProjectPropTwo';
import ProjectData from "../../data/project/ProjectData.json";
import Link from 'next/link';
import Image from 'next/image';

const portfolioData = ProjectData;

const ProjectFour = () => {
    return (
        <div className="section section-padding-equal bg-color-dark">
            <div className="container">
            <SectionTitle 
                subtitle="Case study"
                title="Selected projects"
                description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue eget risus imperdiet."
                textAlignment="heading-light-left mb--90"
                textColor=""
            />
            <div className="project-add-banner">
                <div className="content">
                    <span className="subtitle">branding, design</span>
                    <h3 className="title">Godaddy- Online platform and website design</h3>
                    <div className="brand-logo">
                        <Image src={"/images/project/godaddy.png"} alt="Godaddy" layout='fill' />
                    </div>
                </div>
                <div className="thumbnail">
                    <Image src={"/images/project/mobile-mockup.png"} alt="Mockup" layout='fill' />
                </div>
            </div>

            <div className="row row-45">
                {portfolioData.slice(12, 16).map((data) => (
                    <div className="col-md-6" key={data.id}>
                        <ProjectPropTwo projectStyle="project-style-2" portfolio={data}/>
                    </div>
                ))}

            </div>
            <div className="more-project-btn">
                <Link href={"/project-grid-two"} className="axil-btn btn-fill-white"><a>Discover More Projects</a></Link>
            </div>
        </div>
    </div>
    )
}

export default ProjectFour;