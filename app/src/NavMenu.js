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
				<div className="nav-menu desktop">
							<UserSettings />
				</div>
			</Fragment>
		);
	}
}
