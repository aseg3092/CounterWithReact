import React from "react";

const SecondsCounter = (props) => {
	return (
		<>
			<div className="container" id="main">
				<div className="icon">{props.count6}</div>
				<div className="icon">{props.count5}</div>
				<div className="icon">{props.count4}</div>
				<div className="icon">{props.count3}</div>
				<div className="icon">{props.count2}</div>
				<div className="icon">{props.count1}</div>
			</div>
		</>
	);
};

export default SecondsCounter;
