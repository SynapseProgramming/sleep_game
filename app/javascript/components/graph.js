import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
} from "chart.js";
import {Scatter, Line} from "react-chartjs-2";
import React from "react";
import faker from "faker";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
);

export default props => {
	const new_data = props.data.map(a => {
		return {
			x: a["date"],
			y: a["hours"]
		};
	});

	// const options = {
	// 	scales: {
	// 		x: {
	// 			type: "time",
	// 			time: {
	// 				displayFormats: {
	// 					millisecond: "MMM DD",
	// 					second: "MMM DD",
	// 					minute: "MMM DD",
	// 					hour: "MMM DD",
	// 					day: "MMM DD",
	// 					week: "MMM DD",
	// 					month: "MMM DD",
	// 					quarter: "MMM DD",
	// 					year: "MMM DD"
	// 				}
	// 			}
	// 		},
	// 		y: {
	// 			beginAtZero: true
	// 		}
	// 	}
	// };
	const options = {
		legend: {
			display: false
		},
		xAxes: {
			title: "time",
			gridThickness: 2,
			type: "time"
			// time: {
			// 	displayormats: {
			// 		millisecond: "MMM DD",
			// 		second: "MMM DD",
			// 		minute: "MMM DD",
			// 		hour: "MMM DD",
			// 		day: "MMM DD",
			// 		week: "MMM DD",
			// 		month: "MMM DD",
			// 		quarter: "MMM DD",
			// 		year: "MMM DD"
			// 	}
			// }
		}
	};

	const data = {
		datasets: [
			{
				label: "A dataset",
				data: new_data,
				backgroundColor: "rgba(255, 99, 132, 1)"
			}
		]
	};

	return <Line options={options} data={data} />;
};
