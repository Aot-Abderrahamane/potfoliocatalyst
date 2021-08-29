import React from "react";
import "./Project.css";

const Project = (props) => {
	const { title, demoLink, sourceCodeLink, imageSrc } = props.project;

	return (
		<div className="project-container">
			<div className="image-wrapper">
				<img
					src={imageSrc}
					alt=""
					loading="lazy"
					style={{ height: "100%", width: "100%", aspectRatio: "16 / 9" }}
				/>
			</div>
			<div className="project-description">
				<h1>{title}</h1>
				{demoLink ? (
					<a href={demoLink} className="button-link">
						Demo
					</a>
				) : null}

				<a href={sourceCodeLink} className="button-link">
					GitHub
				</a>
			</div>
		</div>
	);
};

export default Project;
