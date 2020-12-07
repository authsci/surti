import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {
	Route,
	Switch,
	HashRouter as Router,
} from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import NavActivities from "./NavActivities";
import StartFull from "./StartFull";
import Intro from "./Intro";
import Institution from "./Institution";
import People from "./People";
import Home from "./Home";
import Institutions from "./Institutions";
import PeopleList from "./PeopleList";

import "./styles/main.scss";

window.$locale = "en";

const user = localStorage.getItem("user");

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
		};

		document.addEventListener("touchstart", function () {}, true);
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		setTimeout(
			function () {
				this.setState({ loading: false });
			}.bind(this),
			300
		);
	}

	render() {
		return (
			<Fragment>
				<Offline>
					<div className="offline">
						<p>
							<strong>OFFLINE.</strong>
						</p>
						<p>PLEASE CHECK YOUR INTERNET CONNECTION.</p>
					</div>
				</Offline>

				<Online>
					{this.state.loading ? (
						<div className="loader fade-in">
							<div className="loader-ellipsis">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					) : (
						<Fragment>
							<Router>
								<Switch>
									<Route
										exact
										path="/"
										render={(props) => (
											<Fragment>
												<StartFull />
											</Fragment>
										)}
									/>
									<Route
										exact
										path="/home"
										render={(props) => (
											<Fragment>
												<Home />
											</Fragment>
										)}
									/>
									<Route
										exact
										path="/intro"
										render={(props) => (
											<Fragment>
												{/* <NavMenu/> */}
												<Intro />
											</Fragment>
										)}
									/>

									<Route
										exact
										path="/institution/:id/:dept"
										render={(props) => (
											<Fragment>
												<NavActivities />
												<Institution {...props} />
											</Fragment>
										)}
									/>
								
									<Route
										exact
										path="/institutions/"
										render={(props) => (
											<Fragment>
												<Intro />
											</Fragment>
										)}
									/>

									<Route
										exact
										// path="/people/:id/:name"
										path="/people/:id"
										render={(props) => (
											<Fragment>
												<NavActivities />
												<People {...props} />
											</Fragment>
										)}
									/>

									<Route
										exact
										path="/list"
										render={(props) => (
											<Fragment>
												<NavActivities />
												<PeopleList {...props} />
											</Fragment>
										)}
									/>
								</Switch>
							</Router>
						</Fragment>
					)}
				</Online>
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
