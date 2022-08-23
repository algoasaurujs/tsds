import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '../../../utils';


const PropOne = ({projectStyle, portfolio}) => {
	
    return (
		<>
			<div className={`project-grid ${projectStyle}`}>
				<div className="thumbnail">
				<Link href={`/project-details/${slugify(portfolio.title)}`}><a>
					<Image src={portfolio.image} alt="icon" layout='fill' />
				</a></Link>
				</div>
				<div className="content">
				<h4 className="title"> 
					<Link href={`/project-details/${slugify(portfolio.title)}`}><a>{portfolio.title}</a></Link>
				</h4>
				<span className="subtitle">
					{portfolio.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
				</div>
			</div>
		</>
    )
}

export default PropOne;