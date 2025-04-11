import React from "react";
import {useState} from "react"

import Luz from "./Luz.jsx"

let colores = ["red","green","yellow"]

const Home = () => {
	const [color, setColor] = useState("")
	const [purpleEnabled, setPurple] = useState(false)

	const newLight = () => {
		setPurple(true)
		colores.push("purple")
	}

	const randomColor = () => {
		setColor(colores[Math.floor(Math.random()*colores.length)])
	}

	return (
		<div className="container d-flex p-5 w-50">
			<div className="d-inline-flex flex-column justify-content-center mx-auto p-3 rounded-4 bg-dark">
				<Luz color="red" elegido={color} stateFunction={setColor}/>
				<Luz color="yellow" elegido={color} stateFunction={setColor}/>
				<Luz color="green" elegido={color} stateFunction={setColor}/>
				{purpleEnabled ? <Luz color="purple" elegido={color} stateFunction={setColor}/> : ""}
			</div>
			<div className="ms-5">
				<button onClick={randomColor} type="button" className="btn btn-primary m-5">Random Light</button>
				<button onClick={newLight} type="button" className="btn btn-primary m-5">New Purple Light</button>
			</div>
		</div>
	);
};

export default Home;