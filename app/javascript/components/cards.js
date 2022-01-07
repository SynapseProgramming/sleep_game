// import {Line} from "react-chartjs-2";
// import {React} from "react";
//
// export default () => {
// 	return (
// 		<Line
// 			datasetIdKey="id"
// 			data={{
// 				labels: ["Jun", "Jul", "Aug"],
// 				datasets: [
// 					{
// 						id: 1,
// 						label: "",
// 						data: [5, 6, 7]
// 					},
// 					{
// 						id: 2,
// 						label: "",
// 						data: [3, 2, 1]
// 					}
// 				]
// 			}}
// 		/>
// 	);
// };

import React from "react";
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
} from "chart.js";
import {Scatter} from "react-chartjs-2";
import faker from "faker";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
	scales: {
		y: {
			beginAtZero: true
		}
	}
};

export const data = {
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

export default () => {
	return <Scatter options={options} data={data} />;
};
