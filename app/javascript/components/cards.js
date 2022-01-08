import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import Graph from "./graph";
import Dnut from "./dnut";

export default () => {
	const [sleepData, setsleepData] = useState([]);
	const [sleepQos, setsleepQos] = useState([]);

	//function which returns an array, where the first ele is the no. of days the user slept for >=7 hrs
	// the second ele is the no. of days the user slept for <7
	const qos = inp => {
		let good_sleep_cnt = 0;
		let bad_sleep_cnt = 0;
		inp.map(x => {
			let curr = x["hours"];
			if (curr <= 6) {
				bad_sleep_cnt = bad_sleep_cnt + 1;
			} else {
				good_sleep_cnt = good_sleep_cnt + 1;
			}
		});
		return [good_sleep_cnt, bad_sleep_cnt];
	};

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
					setsleepData(response);
					setsleepQos(qos(response));
				})
				.catch(() => console.log("something went wrong!"));
		}
		return () => {
			is_mounted = false;
		};
	}, []);

	return (
		<CardGroup>
			<Card border="success" className="text-center">
				<Card.Header>Points</Card.Header>
				<Card.Body>
					<Card.Title>You have {sleepQos[0]} Sleep Points!</Card.Title>
					<Card.Text>
						You need {100 - sleepQos[0]} More to Earn a brand new pillow :)
					</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">Good Luck!</Card.Footer>
			</Card>
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
				<Card.Header>QualityOfSleep</Card.Header>
				<Card.Body>
					<Dnut data={sleepQos} />
				</Card.Body>
			</Card>
		</CardGroup>
	);
};
