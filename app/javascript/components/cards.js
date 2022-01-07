import React from "react";
import Card from "react-bootstrap/Card";
import Graph from "./graph";

export default () => {
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
