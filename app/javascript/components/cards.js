import React from "react";
import Card from "react-bootstrap/Card";
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
	<Scatter options={options} data={data} />;

	return (
		<Card border="primary" className="text-center">
			<Card.Header>Sleep Graph</Card.Header>
			<Card.Body>
				<Scatter options={options} data={data} />;
			</Card.Body>
			<Card.Footer className="text-muted">
				Well, sleep more my dudes
			</Card.Footer>
		</Card>
	);
};
