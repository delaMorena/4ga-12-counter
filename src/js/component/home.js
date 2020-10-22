import React from "react";

import { Counter } from "./counter.js";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Counter miliSec="1000" />
			<Counter miliSec="10000" />
			<Counter miliSec="100000" />
			<Counter miliSec="1000000" />
			<Counter miliSec="10000000" />
		</div>
	);
}
