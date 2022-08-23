import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectPropTwo from './itemProp/ProjectPropTwo';
import ProjectData from "../../data/project/ProjectData.json";

const portfolioData = ProjectData;


const ProjectThree = () => {
    return (
        <div className="section section-padding pb--80 pb_lg--40 pb_md--20 pb_sm--0">
        <div className="container">
            <SectionTitle 
            subtitle="Featured Case study"
            title="Photography &amp; drawing"
            description=""
            textAlignment="heading-left"
            textColor=""
            />
            <div className="row row-45">
                {portfolioData.slice(16, 18).map((data) => (
                    <div className="col-md-6" key={data.id}>
                        <ProjectPropTwo projectStyle="project-style-2" portfolio={data}/>

                    </div>
                ))}

            </div>
        </div>
    </div>
    )
}

export default ProjectThree;