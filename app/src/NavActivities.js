import React, { Fragment } from "react";
import UserSettings from "./UserSettings";
import { NavLink, Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			login: [],
			loading: true,
			isActive: false,
			showMenu: false,
		};
	}



	goTop = () => {
		scroll.scrollToTop({
			duration: 400,
			delay: 0,
		});
	};

	render() {
		return (
			<Fragment>
				<div className="nav-activities">
					<div
						className={
							this.state.showMenu
								? "nav-activities-left nudge-right desktop"
								: "nav-activities-left desktop"
						}
					>
						{/* {this.state.showMenu && ( */}
						<Link to="/" className="link-slug fade-in" onClick={this.goTop()}>
							<img src="img/logo-icon.png" />{" "}
							<div>
								<strong>Extimacies</strong>
								<span>Critical Theory from the Global South</span>
							</div>
						</Link>
						{/* )} */}
					</div>

					<div className="nav-activities-left mobile">
						<Link to="/" className="link-slug fade-in">
							<img src="img/logo-icon.png" />{" "}
							<div>
								<strong>Extimacies</strong>
								<span>Critical Theory from the Global South</span>
							</div>
						</Link>
					</div>

					<div className="nav-activities-right nudge-right">
						<NavLink
							to="/"
							exact
							activeClassName="link-menu-hilite"
							className="link-menu desktop"
						>
							Home
						</NavLink>

						<NavLink
							to="/list"
							activeClassName="link-menu-hilite"
							className="link-menu desktop"
						>
							People
						</NavLink>

						<NavLink
							to="/events"
							activeClassName="link-menu-hilite"
							className="link-menu desktop"
						>
							Events
						</NavLink>
						<NavLink
							to="/publications"
							activeClassName="link-menu-hilite"
							className="link-menu desktop"
						>
							Publications
						</NavLink>
						<NavLink
							to="/initiatives"
							activeClassName="link-menu-hilite"
							className="link-menu desktop"
						>
							Initiatives
						</NavLink>
						<NavLink
							to="/course"
							activeClassName="link-menu-hilite"
							className="link-menu desktop"
						>
							Course
						</NavLink>

						<span className="mobile">
							<UserSettings />
						</span>
					</div>
				</div>
			</Fragment>
		);
	}
}
