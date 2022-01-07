import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import Graph from "./graph";

export default () => {
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
				})
				.catch(() => console.log("something went wrong!"));
		}
		return () => {
			is_mounted = false;
		};
	});

	return (
		<Card border="primary" className="text-center">
			<Card.Header>Sleep Graph</Card.Header>
			<Card.Body>
				<Graph />
			</Card.Body>
			<Card.Footer className="text-muted">
				Well, sleep more my dudes
			</Card.Footer>
		</Card>
	);
};
