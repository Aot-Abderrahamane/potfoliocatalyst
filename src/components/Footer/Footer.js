import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<h1 className="hover-underline-animation">Contact</h1>
			<div className="social-links">
				<a
					href="https://www.linkedin.com/in/abderrahmane-aitoutahra/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<i className="fab fa-linkedin"></i>
				</a>
				
				<a
					href="https://github.com/arthur1997-wq"
					target="_blank"
					rel="noreferrer noopener"
				>
					<i className="fab fa-github"></i>
				</a>
				<a
					href="https://twitter.com/Vincentsys"
					target="_blank"
					rel="noreferrer noopener"
				>
					<i className="fab fa-twitter"></i>
				</a>
				
			</div>
			<p style={{ color: "white", margin: "1rem", paddingTop: "2rem" }}>
				Made with passion &copy; 2021
			</p>
		</footer>
	);
};

export default Footer;
