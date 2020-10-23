import React from "react";

import { Counter } from "./counter.js";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hi Developer</h1>
			<p className="lead">
				Learning to code is hard...suuuuuper hard sometimes. You feel as
				if you were loosing track of time and spending hours trying to
				find out stuff. And you know what?? You actually are!!
			</p>
			<hr className="my-4" />
			<h5>
				So... Keep track of your time. Try not to invest more than 10-15
				minutes researching by yourself.
				<p>You´re now part of a big friendly community.</p>
				<p>Ask for help.</p>
			</h5>
			<div id="name" className="row">
				<div className="col-8">Minutos</div>
				<div className="col-4">Segundos</div>
			</div>
			<div id="contador" className="row d-flex flex-row-reverse">
				<Counter className="col-6" miliSec="1000" />
				<Counter className="col-6" miliSec="10000" />
				<Counter className="col-6" miliSec="100000" />
				<Counter className="col-6" miliSec="1000000" />
			</div>
		</div>
	);
}
