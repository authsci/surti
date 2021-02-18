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
						<Link
							to="/intro"
							className="link-slug"
							onClick={this.goTop()}
						>
							<img src="img/logo-icon-white.png" />{" "}
							<div>
								<strong>Extimacies</strong>
								<span>Critical Theory from the Global South</span>
							</div>
						</Link>
						{/* )} */}
					</div>

					<div className="nav-activities-left mobile">
						<Link to="/intro" className="link-slug">
							<img src="img/logo-icon-white.png" />{" "}
							<div>
								<strong>Extimacies</strong>
								<span>Critical Theory from the Global South</span>
							</div>
						</Link>
					</div>

					<div className="nav-activities-right nudge-right">
						

						<span>
							<UserSettings />
						</span>
					</div>
				</div>
			</Fragment>
		);
	}
}
