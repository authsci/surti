import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import NavActivities from "./NavActivities";
import StartFull from "./StartFull";
import Intro from "./Intro";
import Institution from "./Institution";
import Events from "./Events";
import Home from "./Home";
import Publications from "./Publications";
import PeopleList from "./PeopleList";
import Profile from "./Profile";

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
						<div className="loading"></div>
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
												<Intro />
											</Fragment>
										)}
									/>

									<Route
										exact
										path="/institution/:dept"
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
										path="/publications/"
										render={(props) => (
											<Fragment>
												<NavActivities />
												<Publications {...props}/>
											</Fragment>
										)}
									/>
									<Route
										exact
										path="/events/"
										render={(props) => (
											<Fragment>
												<NavActivities />
												<Events {...props}/>
											</Fragment>
										)}
									/>
						
									<Route
										exact
										path="/events/"
										render={(props) => (
											<Fragment>
												<NavActivities />
												<Events {...props}/>
											</Fragment>
										)}
									/>

									<Route
										exact
										path="/profile/:id"
										render={(props) => (
											<Fragment>
												<NavActivities />
												<Profile {...props} />
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
