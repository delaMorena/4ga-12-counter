import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	const [timer, setTimer] = useState(0);

	//useEffect(() => {
	//	const timerUpdate = setInterval(() => {
	//		setTimer(timer => timer + 1);
	//	}, 1000);
	//	return clearInterval(timerUpdate);
	//}, []);
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(timer => timer + 1);
		}, props.miliSec);
		return () => clearInterval(interval);
	}, []);
	//
	return <div>{timer % 10}</div>;
}

Counter.propTypes = {
	miliSec: PropTypes.number
};
