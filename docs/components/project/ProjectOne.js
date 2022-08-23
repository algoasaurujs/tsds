import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import ProjectPropOne from './itemProp/ProjectPropOne';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectData from "../../data/project/ProjectData.json";


const filters = [
	{
		id: 1,
		label: "All Works",
    },
    {
		id: 2,
		label: "Branding",
    },
    {
		id: 3,
		label: "Mobile",
    }
];


const AllData = ProjectData;

// export type ProjectProps={
	
// }

const ProjectOne = ({parentClass, colSize, itemShow, columnGap}) => {

	const [getAllItems] = useState(AllData);
	const [visiableProject] = useState(itemShow ? itemShow : 6);
    const [activeFilter, setActiveFilter] = useState("");
	const [visibleItems, setVisibleItems] = useState([]);
	

	useEffect(() => {
        setActiveFilter(filters[0].label);
		setVisibleItems(getAllItems.filter((item) => item.id <= visiableProject));
    }, []);

	const handleChange = (e) => {
        e.preventDefault();
		let target = e.target.textContent;

        setActiveFilter(target);

        let tempData = [];
        if (target === filters[0].label) {
			tempData = getAllItems.filter((data) => data.id <= visiableProject);
        } else {
			for (let i = 0; i < getAllItems.length; i++) {
				const element = getAllItems[i];
				let categories = element['category'];
				
				if (categories.includes(target)) {
					tempData.push(element)
				} 
			}
        }
        setVisibleItems(tempData);
    };


    return (
		<>
			<div className={`section section-padding-2 ${parentClass ? parentClass : ""}`}>
                <div className="container">
                <SectionTitle 
                        subtitle="Our Project"
                        title="Some of our <br>
                        finest work."
                        textAlignment="heading-left mb--40"
                        textColor=""
                    />
                    <div className="isotope-button isotope-project-btn">

						{filters.map((filter) => (
							<button onClick={handleChange} className={
								filter.label === activeFilter
								? "is-checked"
								: " "
							} 
							key={filter.id}>{filter.label}</button>
						))}

					</div>
					<div className={`row ${columnGap ? columnGap : "row-35"}`}>
						{visibleItems.map((data) => (
							<div className={colSize ? colSize : "col-md-6"} key={data.id}>
								<ProjectPropOne projectStyle="" portfolio={data}/>
							</div>
						))}
					</div>

                </div>
                <ul className="shape-group-7 list-unstyled">
                    <li className="shape shape-1"><Image src={"/images/others/circle-2.png"} alt="circle" layout='fill' /></li>
                    <li className="shape shape-2"><Image src={"/images/others/bubble-2.png"} alt="Line" layout='fill' /></li>
                    <li className="shape shape-3"><Image src={"/images/others/bubble-1.png"} alt="Line" layout='fill' /></li>
                </ul>
            </div>
		</>
    )
}

export default ProjectOne;