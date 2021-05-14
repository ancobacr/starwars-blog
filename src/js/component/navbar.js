import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";

export const MainNavbar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			<Link to="/">
				<Navbar.Brand href="#home" name="sw-api">
					Star Wars
				</Navbar.Brand>
			</Link>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/character">
						<Nav.Link name="characters">Characters</Nav.Link>
					</Link>
					<Link to="/planets">
						{" "}
						<Nav.Link name="planets">Planets</Nav.Link>
					</Link>

					<Button variant="outline-light" name="myfavs">
						My Favs
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
