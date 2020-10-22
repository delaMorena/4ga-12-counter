import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	const [timer, setTimer] = useState(0);

	//useEffect(() => {
	//	const timerUpdate = setInterval(() => {
	//		setTimer(timer => timer + 1);
	//	}, 1000);
	// en el return hace falta una fn flecha ya que a clearInterval hay que llamarlo
	// constantemente.
	//	return clearInterval(timerUpdate);
	//}, []);
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(timer => timer + 1);
		}, props.miliSec);
		return () => clearInterval(interval);
	}, []);
	//funcion para parar el timer
	return <div>{timer % 10}</div>;
}

Counter.propTypes = {
	miliSec: PropTypes.number
};
