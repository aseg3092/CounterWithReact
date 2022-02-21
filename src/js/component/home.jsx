import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = () => {
	let [count1, setCount1] = useState(0);
	let [count2, setCount2] = useState(0);
	let [count3, setCount3] = useState(0);
	let [count4, setCount4] = useState(0);
	let [count5, setCount5] = useState(0);
	let [count6, setCount6] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (count1 < 9) {
				setCount1(count1 + 1);
			} else if (count2 < 9) {
				setCount1(0);
				setCount2(count2 + 1);
			} else if (count3 < 9) {
				setCount2(0);
				setCount3(count3 + 1);
			} else if (count4 < 9) {
				setCount3(0);
				setCount4(count4 + 1);
			} else if (count5 < 9) {
				setCount4(0);
				setCount5(count4 + 1);
			} else {
				setCount5(0);
				setCount6(count4 + 1);
			}
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<SecondsCounter
			count6={count6}
			count5={count5}
			count4={count4}
			count3={count3}
			count2={count2}
			count1={count1}
		/>
	);
};

export default Home;
