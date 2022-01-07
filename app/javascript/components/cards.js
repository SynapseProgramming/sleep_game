import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import Graph from "./graph";

export default () => {
	const [sleepData, setsleepData] = useState([]);

	useEffect(() => {
		const url = "/api/v1/sleeps/index";
		let is_mounted = true;
		if (is_mounted) {
			fetch(url)
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					throw new Error("Network response was not ok.");
				})
				.then(response => {
					console.log(response);
					setsleepData(response);
				})
				.catch(() => console.log("something went wrong!"));
		}
		return () => {
			is_mounted = false;
		};
	}, []);

	return (
		<CardGroup>
			<Card border="primary" className="text-center">
				<Card.Header>Sleep Graph</Card.Header>
				<Card.Body>
					<Graph data={sleepData} />
				</Card.Body>
				<Card.Footer className="text-muted">
					Well, sleep more my dudes
				</Card.Footer>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
		</CardGroup>
	);
};
