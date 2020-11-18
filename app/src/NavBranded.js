import React, { Fragment } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import UserSettings from "./UserSettings";


export default class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			login: [],
			loadUser: true,
			loadData: true,
			isActive: false,
			visible: true,
		};
	}

	render() {
		let { loadData, actions } = this.state;

		return (
			<Fragment>
				<div className="contain">
					<div className="nav-branded">
						<div className="nav-branded-left desktop">
							<NavLink to="/">
								<div className="logo">
									<img src="img/logo-icon.png" />
									<div>
										<strong>Extimacies</strong>
										<span>
											Critical Theory from the Global South
										</span>
									</div>
								</div>
							</NavLink>
						</div>

						<div className="nav-branded-right desktop">
							<NavLink
								to="/"
								exact
								activeClassName="link-menu-hilite"
								className="link-menu"
							>
								About
							</NavLink>

							<NavLink
								to="/list"
								activeClassName="link-menu-hilite"
								className="link-menu"
							>
								People
							</NavLink>

							<NavLink
								to="/events"
								activeClassName="link-menu-hilite"
								className="link-menu"
							>
								Events
							</NavLink>
							<NavLink
								to="/publications"
								activeClassName="link-menu-hilite"
								className="link-menu"
							>
								Publications
							</NavLink>
							<NavLink
								to="/initiatives"
								activeClassName="link-menu-hilite"
								className="link-menu"
							>
								Initiatives
							</NavLink>
							<NavLink
								to="/course"
								activeClassName="link-menu-hilite"
								className="link-menu"
							>
								Course
							</NavLink>
							{/* <Menu /> */}
						</div>

						<div className="nav-branded-right mobile">
							<UserSettings />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
