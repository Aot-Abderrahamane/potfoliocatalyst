import React from "react";
import ecommerceImg from "../../images/ecommerce-site.png";
import netflixCloneImg from "../../images/netflix.png";
import contactKeeperImg from "../../images/contact-keeper.PNG";
import chatAppImg from "../../images/socketio.png";
import Project from "../Project/Project";
import blogImage from "../../images/blog-image.PNG";
import CPMC from "../../images/cpmc-website.PNG";
import homeIMG from "../../images/home.png";
import carsIMG from "../../images/choosing car.png";
import contactIMG from "../../images/contact.png";
import louerIMG from "../../images/contact.png";
import "./Projects.css";

const Projects = () => {
	//List of projects
	const projects = [
		{
			title: "SITE WEB E-COMMERCE",
			demoLink: "",
			sourceCodeLink: "",
			imageSrc: blogImage,
			description:"un site web ecommerce de vente des produits informatique. Dans le cadre de nos études à L'institut supérieur de génie informatique BAC +3, on désir de faire un site web e-commerce DE VENTE DES PRODUITS INFORMATIQUE Pour l’obtention du diplôme des études supérieur de niveau Bac+3 en génie informatique.",
			stack:['Laravel 8', 'Bootsrtap 5', 'JavaScript', 'Ajax'],
			thumbnail :[blogImage,blogImage,blogImage,blogImage],
			descGenral:"Voluptate cillum minim qui tempor anim fugiat ea velit do quis. Nostrud ipsum amet veniam officia minim est occaecat ad. Veniam minim exercitation sit mollit laboris. Elit qui veniam est culpa esse consequat ipsum ad sit minim consectetur ea ex deserunt. Consequat culpa dolore mollit fugiat incididunt. Ut adipisicing eiusmod proident pariatur anim non. Ipsum deserunt occaecat consectetur minim anim ipsum pariatur adipisicing consequat."
		},
		{
			title: "Tet1Cars",
			demoLink: "",
			sourceCodeLink: "",
			imageSrc: homeIMG,
			description:"tet1cars est une plateforme vise à gérer une agence de location des voitures. Grâce à sa simplicité et l'efficacité.Il manipule les données tel que les scooters,l'état de voiture, les contrats de locations avec la durée ...",
			stack:['Wordpress', 'Elementor'],
			thumbnail :[homeIMG,carsIMG,contactIMG,louerIMG,],
			descGenral:"Voluptate cillum minim qui tempor anim fugiat ea velit do quis. Nostrud ipsum amet veniam officia minim est occaecat ad. Veniam minim exercitation sit mollit laboris. Elit qui veniam est culpa esse consequat ipsum ad sit minim consectetur ea ex deserunt. Consequat culpa dolore mollit fugiat incididunt. Ut adipisicing eiusmod proident pariatur anim non. Ipsum deserunt occaecat consectetur minim anim ipsum pariatur adipisicing consequat."


		},
		{
			title: "APPLICATION DE GESTION DES COURS",
			demoLink: "",
			sourceCodeLink: "",
			imageSrc: ecommerceImg,
			description:"est un site web E-LEARNING offre tous les types des cours du secteur de developpement informatique. Vous trouverez dans se site vitrine virtuelle toutes les meilleures cours de programmation",
			stack:['JAVA', 'SPRING BOOT', 'BootStrap'],
			thumbnail :[blogImage,blogImage,blogImage,blogImage],
			descGenral:"Voluptate cillum minim qui tempor anim fugiat ea velit do quis. Nostrud ipsum amet veniam officia minim est occaecat ad. Veniam minim exercitation sit mollit laboris. Elit qui veniam est culpa esse consequat ipsum ad sit minim consectetur ea ex deserunt. Consequat culpa dolore mollit fugiat incididunt. Ut adipisicing eiusmod proident pariatur anim non. Ipsum deserunt occaecat consectetur minim anim ipsum pariatur adipisicing consequat."

		},
		{
			title: "Application de CHATROOM",
			demoLink: "",
			sourceCodeLink: "",
			imageSrc: chatAppImg,
			description:"est un site web de chat offre une tous les types des cours du secteur de developpement informatique. Vous trouverez dans se site vitrine virtuelle toutes les meilleures cours de programmation ",
			stack:['Python', 'Flask',"Socket.io", 'BootStrap'],
			thumbnail :[blogImage,blogImage,blogImage,blogImage],
			descGenral:"Voluptate cillum minim qui tempor anim fugiat ea velit do quis. Nostrud ipsum amet veniam officia minim est occaecat ad. Veniam minim exercitation sit mollit laboris. Elit qui veniam est culpa esse consequat ipsum ad sit minim consectetur ea ex deserunt. Consequat culpa dolore mollit fugiat incididunt. Ut adipisicing eiusmod proident pariatur anim non. Ipsum deserunt occaecat consectetur minim anim ipsum pariatur adipisicing consequat."

		},
		{
			title: "GESTION CLINIC",
			demoLink: "",
			sourceCodeLink: "",
			imageSrc: netflixCloneImg,
			description:"GESTION D'HOPITAL est un logiciel développé sous ASP.Net et Sql Server est destiné aux cliniques et cabinets médicaux désireux de connaître les situations des recettes issues des prestations réalisées pour les patients ainsi que les medecins. Comme dit le logiciel est donc composé de deux modules: Gestion des patients et Gestion de Medecins. Ces deux modules sont indépendants l'un de l'autre.",
			stack:['ASP.NET', 'Bootsrtap 5', 'SQLSERVER'],
			thumbnail :[blogImage,blogImage,blogImage,blogImage],
			descGenral:"Voluptate cillum minim qui tempor anim fugiat ea velit do quis. Nostrud ipsum amet veniam officia minim est occaecat ad. Veniam minim exercitation sit mollit laboris. Elit qui veniam est culpa esse consequat ipsum ad sit minim consectetur ea ex deserunt. Consequat culpa dolore mollit fugiat incididunt. Ut adipisicing eiusmod proident pariatur anim non. Ipsum deserunt occaecat consectetur minim anim ipsum pariatur adipisicing consequat."

		},
		
	];
	

	return (
		<div className="backgroundStyle">
			<h1 className="work-heading hover-underline-animation">	Mes Projets</h1>
			<div id="work" className="projects-container" projects={projects}>
				{projects.map((project, index) => {
					return <Project project={project} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
