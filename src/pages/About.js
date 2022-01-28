import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {
	return (
		<div className="about">
			<div
				className="aboutTop"
				style={{ backgroundImage: `url(${MultiplePizzas})` }}
			></div>
			<div className="aboutBottom">
				<h1>ABOUT US</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eveniet dolorem nam, veritatis ad? Libero asperiores sed
					repellendus laborum omnis quos, tempora accusantium culpa
					iure nemo delectus autem accusamus neque incidunt! Molestiae
					aliquid, repellendus debitis laboriosam saepe inventore
					perferendis rem a sit libero. Error debitis id vitae, soluta
					laboriosam placeat, distinctio. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Eveniet dolorem nam, veritatis
					ad? Libero asperiores sed repellendus laborum omnis quos,
					tempora accusantium culpa iure nemo delectus autem accusamus
					neque incidunt! Molestiae aliquid, repellendus debitis
					laboriosam saepe inventore perferendis rem a sit libero.
					Error debitis id vitae, soluta laboriosam placeat,
					distinctio.
				</p>
			</div>
		</div>
	);
};

export default About;
