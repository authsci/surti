import React, { Fragment } from "react";
import UserSettingsLight from "./UserSettingsLight";
import { animateScroll as scroll } from "react-scroll";

export default class NavMenu extends React.Component {
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
				<div className="nav-menu">
							<UserSettingsLight />
				</div>
			</Fragment>
		);
	}
}
