import React from "react";
import { Card, Row, Col, CardDeck } from "react-bootstrap";

export const People = ({ data }) => {
	return (
		<>
			<h2>Characters</h2>
			<CardDeck>
				<Row>
					{data.map((people, i) => {
						return (
							<Col key={i}>
								<Card>
									<Card.Img variant="top" src="holder.js/100px180" />
									<Card.Title>{people.name}</Card.Title>
									<Card.Text>
										<strong>Gender:</strong>
										<p>{people.gender}</p>
										<strong>Eye Color:</strong>
										<p>{people.eye_color}</p>
										<strong>Hair Color:</strong>
										<p>{people.hair_color}</p>
									</Card.Text>
								</Card>
							</Col>
						);
					})}
				</Row>
			</CardDeck>
		</>
	);
};
