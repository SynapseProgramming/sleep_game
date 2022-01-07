import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
} from "chart.js";
import {Scatter} from "react-chartjs-2";
import React from "react";
import faker from "faker";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default props => {
	const new_data = props.data.map(x => {
		return {
			date: new Date(x["date"]),
			hours: x["hours"]
		};
	});
	console.log(new_data);
	const options = {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	};

	const data = {
		datasets: [
			{
				label: "A dataset",
				data: Array.from({length: 100}, () => ({
					x: faker.datatype.number({min: -100, max: 100}),
					y: faker.datatype.number({min: -100, max: 100})
				})),
				backgroundColor: "rgba(255, 99, 132, 1)"
			}
		]
	};

	return <Scatter options={options} data={data} />;
};
