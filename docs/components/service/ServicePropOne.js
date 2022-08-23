import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';


const AllData = ServiceData;

const ServicePropOne = ({colSize, serviceStyle, itemShow, marginTop}) => {

	const topMargin = (index) => {
		if (marginTop === "yes") {
			if (index === 0) {
				return "mt--200 mt_md--0";
			} else if (index === 1) {
				return "mt--100 mt_md--0";
			}else {
				return "mt--0";
			}
		}else {
			return "";
		}
	}

    return (
		<>
			{AllData.slice(0, itemShow).map((data, index) => (
				<div className={`${colSize} ${topMargin(index)}`} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<Image src={data.image} width="85" height="80" alt="icon" />
						</div>
						<div className="content">
							<h5 className="title"> 
								<Link href={`/service-details/${slugify(data.title)}`}><a>{data.title}</a></Link>
							</h5>
							<p>{data.description}</p>
							<Link href={`/service-details/${slugify(data.title)}`} className="more-btn"><a>Find out more</a></Link>
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default ServicePropOne;