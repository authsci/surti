import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import NavActivities from "./NavActivities";
import NavBranded from "./NavBranded";
import Start from "./Start";
import Organization from "./Organization";
import Institution from "./Institution";

import "./styles/main.scss";

window.$locale = "en";

const user = localStorage.getItem("user");

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
		};
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
												<NavActivities />
												<Start />
											</Fragment>
										)}
									/>
								
                	<Route
										exact
										path="/institution/:id"
										render={(props) => (
											<Fragment>
													<NavActivities />
												<NavBranded />
												<Institution {...props} />
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
