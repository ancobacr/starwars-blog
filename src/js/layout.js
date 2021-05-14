import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { MainNavbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { People } from "./component/people";
import { Planets } from "./component/planets";

//create your first component
const Layout = () => {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		async function fetchPeople() {
			let res = await fetch("https://www.swapi.tech/api/people/");
			let data = await res.json();
			setPeople(data.results);
		}

		async function fetchPlanets() {
			let res = await fetch("https://www.swapi.tech/api/planets/");
			let data = await res.json();
			setPlanets(data.results);
		}

		fetchPeople();
		fetchPlanets();
	}, []);

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MainNavbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People data={people} />
						</Route>
						<Route exact path="/planets">
							<Planets data={planets} />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
