import React from "react";

import { Counter } from "./counter.js";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div id="contador" className="row">
				<Counter className="col-3" miliSec="1000" />
				<Counter className="col-3" miliSec="10000" />
				<Counter className="col-3" miliSec="100000" />
				<Counter className="col-3" miliSec="1000000" />
			</div>
		</div>
	);
}
