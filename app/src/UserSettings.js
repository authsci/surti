import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import ReactTooltip from "react-tooltip";

const useStyles = makeStyles({
	list: {
		width: 320,
	},
	fullList: {
		width: "auto",
	},
	formControl: {
		minWidth: 320,
		fontSize: "10px",
	},
	selectEmpty: {},
	textField: {
		minWidth: 320,
	},
});

export default function SwipeableTemporaryDrawer() {
	const classes = useStyles();
	const [info, setInfo] = useState([]);
	const user = localStorage.getItem("user");
	const [state, setState] = React.useState({
		right: false,
	});


	const toggleDrawer = (side, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};


	return (
		<Fragment>
			{state.right ? (
				<div className="layout-row flex-right">
					<a className="link-sidepanel" onClick={toggleDrawer("right", false)}>
						<span className="material-icons">close</span>
					</a>
				</div>
			) : (
        <div className="layout-row flex-right">
					<a className="link-sidepanel" onClick={toggleDrawer("right", true)}>
						{/* <i className="fas fa-bars"></i> */}
        <span className="material-icons">menu</span>
					</a>
				</div>
			)}

			<SwipeableDrawer
				anchor="right"
				open={state.right}
				onClose={toggleDrawer("right", false)}
				onOpen={toggleDrawer("right", true)}
				id="user"
			>
				<div className="sidepanel">
					<div className="dock-top">{/* nothing here yet */}</div>
					<div className="nudge-xl"></div>

					<ul>
						<li>About</li>
						<li>People</li>
						<li>Events</li>
						<li>Publications</li>
						<li>Initiatives</li>
						<li>Courses</li>
					</ul>

					{/* 					
					<Link to="/login" className="link-text" data-tip data-for="username">
						Change Password?
					</Link>

					<ReactTooltip place="top" type="dark" effect="float" id="username">
						This will trigger SSO/Keycloak Flow
					</ReactTooltip> */}
					<div className="nudge-md"></div>
					{/* <div className="dock-drawer">
						<a className="link-save" onClick={toggleDrawer("right", false)}>
							Save
						</a>{" "}
						<a className="link-cancel" onClick={toggleDrawer("right", false)}>
							Cancel
						</a>
					</div> */}
				</div>
			</SwipeableDrawer>
		</Fragment>
	);
}
