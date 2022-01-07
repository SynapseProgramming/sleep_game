import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default props => {
	console.log(props.data);
	const data = {
		labels: ["Good Sleep", "Bad Sleep"],
		datasets: [
			{
				label: "Quality of Sleep",
				data: props.data,
				backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
				borderWidth: 1
			}
		]
	};

	return <Doughnut data={data} />;
};
