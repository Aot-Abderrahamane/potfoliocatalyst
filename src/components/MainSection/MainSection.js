import React from "react";
import {Btn,Paragraph} from "./MainSectionStyle"
import background from "../../images/svgimage.png";


let  svgStyle ={
  backgroundImage: `url(${background})`,
  backgroundSize:'cover',
  opacity: 0.7,
}
 
const MainSection = () => {
	return (
		
		<div className="main-section" >
			<div className=" row gx-1 about-me" id="about">
				<div className=" col about-me-info" >
					<h1 className="hover-underline-animation">À propos de moi </h1>

					<Paragraph >
					Je suis un programmeur web « Full Stack » spécialisé en développement de sites et d'application web.
					</Paragraph>
					<Paragraph >
					Expérimenté dans le développement Web pour fournir une application Web robuste pour
						Présentation de haut niveau.
					</Paragraph>
					<Btn onClick={() => window.open ("https://api.whatsapp.com/send?phone=212638440680","_blank")}>Contactez moi</Btn>
					<Btn onClick={() =>  window.open("https://drive.google.com/file/d/1e5ALH6lex6JLqCRdEPILKiEole9hcRJK/view?usp=sharing", "_blank")} >Resume</Btn>
				</div>
				
			</div>
				
			<div className=" col main-heading-master hidden-mobile" style={svgStyle}>
				
				</div>
		</div>
			
		
		
		
	);
};

export default MainSection;