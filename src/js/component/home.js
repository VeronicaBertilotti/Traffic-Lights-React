import React, { useState } from "react";
import "../../styles/home.css";

export function Home() {
	const [red, setRed] = useState("redlight");
	const [yellow, setYellow] = useState("yellowlight");
	const [green, setGreen] = useState("greenlight");

	return (
		<div className="trafficlights">
			<div className="traffictop"> </div>

			<div className="colors">
				<div
					className={red}
					onClick={() => (
						setRed("redlightOn"),
						setYellow("yellowlight"),
						setGreen("greenlight")
					)}
				/>

				<div
					className={yellow}
					onClick={() => (
						setYellow("yellowlightOn"),
						setRed("redlight"),
						setGreen("greenlight")
					)}
				/>
				<div
					className={green}
					onClick={() => (
						setGreen("greenlightOn"),
						setRed("redlight"),
						setYellow("yellowlight")
					)}
				/>
			</div>
		</div>
	);
}

export default Home;
