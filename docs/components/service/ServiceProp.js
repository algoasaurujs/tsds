import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '../../utils';



const ServiceProp = ({colSize, serviceStyle, serviceData}) => {

    return (
		<>
			{serviceData.map((data, index) => (
				<div className={colSize} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<Image src={data.image} alt="icon" layout='fill' />
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

export default ServiceProp;