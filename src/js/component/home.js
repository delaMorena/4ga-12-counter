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

			<div id="contador" className="row">
				<Counter className="col-3" miliSec="1000" />
				<Counter className="col-3" miliSec="10000" />
				<Counter className="col-3" miliSec="100000" />
				<Counter className="col-3" miliSec="1000000" />
			</div>
		</div>
	);
}
