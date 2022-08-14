import React, { useState } from "react";
import "./Project.css";
import Modal from "../Modal/Modal";





const Project = (props) => {
	const[model,setModel]=useState(false);

	const [tempdata,setTempdata]=useState([]);
	

	const { title,description, demoLink, sourceCodeLink, imageSrc,stack,descGenral,thumbnail } = props.project;
	
	const getData=(imageSrc,title,description,stack,descGenral,thumbnail)=>{
	
		
		let tempData=[imageSrc,title,description,stack,descGenral,thumbnail];
		
		setTempdata(item=>[1,...tempData]);
		
		console.warn(tempData);
		
		return setModel(true)
	}

	return (
		<div className="project-container">
			<div className="image-wrapper">
				<img src={imageSrc} alt="" loading="lazy" height="100%" width="100%" />
			</div>
			<div className="project-description">
				<h2>{title}</h2>
				{demoLink ? (
					<a
						href={demoLink}
						className="button-link"
						target="_blank"
						rel="noreferrer noopener"
					>
						Demo
					</a>
				) : null}

				<a
					href={sourceCodeLink}
					className="button-link"
					target="_blank"
					rel="noreferrer noopener"
				>
					GitHub
				</a>
				<button className="button-link"
				 onClick={()=>getData(imageSrc,title,description,stack,descGenral,thumbnail)}
				 >
					Details
				</button>
			</div>
			{ model === true ? <Modal imageSrc={tempdata[1]} title={tempdata[2]} description={tempdata[3]} stack={tempdata[4]} descGenral={tempdata[5]} thumbnail={tempdata[6]} hide={()=> setModel(false)}/>:""}
		</div>
	);
};

export default Project;
