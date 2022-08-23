import React, { useState } from 'react';
import ProjectPropOne from './itemProp/ProjectPropOne';
import ProjectData from "../../data/project/ProjectData.json";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

const AllData = ProjectData;

const ProjectFive = ({colSize, parentClass, perPageShow}) => {

    const [projects] = useState(AllData.slice(0, 16));
    const [pageNumber, setPageNumber] = useState(0);

    const projectPerPage = perPageShow ? perPageShow : 6;
    const pageVisited = pageNumber * projectPerPage;

    const displayProjects = projects.slice(pageVisited, pageVisited + projectPerPage)
    .map((data) => (
        <div className="col" key={data.id}>
            <ProjectPropOne projectStyle="" portfolio={data}/>
        </div>
    ))

    const pageCount = Math.ceil(projects.length / projectPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <div className={`section section-padding-equal pt--200 pt_md--80 pt_sm--60 ${parentClass ? parentClass : ""}`}>
            <div className="container-fluid plr--30">
                <div className={`row row-cols-1 ${colSize ? colSize : "row-cols-sm-2 row-cols-xl-3"}`}>
                    {displayProjects}
                </div>
                <ReactPaginate
                previousLabel={<FaArrowLeft />}
                nextLabel={<FaArrowRight />}
                pageCount= {pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"prev"}
                nextLinkClassName={"next"}
                disabledClassName={"disabled"}
                activeClassName={"current"}
                />
            </div>
        </div>
    )
}

export default ProjectFive;