import React from "react";
import { Card, Row, Col, CardDeck } from "react-bootstrap";

export const Planets = ({ data }) => {
	return (
		<>
			<h2>Planets</h2>
			<CardDeck>
				<Row>
					{data.map((planets, i) => {
						return (
							<Col key={i}>
								<Card>
									<Card.Img variant="top" src="holder.js/100px180" />
									<Card.Title>{planets.name}</Card.Title>
									<Card.Text>
										<strong>Population:</strong>
										<p>{planets.population}</p>
										<strong>Terrain:</strong>
										<p>{planets.terrain}</p>
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
