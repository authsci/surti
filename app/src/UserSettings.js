import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import axios from "axios";

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

	useEffect(() => {
		axios
			.get("https://devoasys.1wa.org/portal/users/" + user)
			.then(({ data }) => {
				setInfo(data);
				console.log("current user", data);
			});
	}, []);

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

	const handleSignout = () => {
		localStorage.removeItem("user");
	};

	return (
		<Fragment>
			{state.right ? (
				<div className="layout-row flex-right">
					<a className="link-sidepanel" onClick={toggleDrawer("right", false)}>
						<span class="material-icons fade-in">close</span>
					</a>
				</div>
			) : (
				<div className="layout-row flex-right" style={{ fontSize: "13px" }}>
					<a className="link-sidepanel" onClick={toggleDrawer("right", true)}>
						<i className="fas fa-bars"></i>
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
					<div className="dock-top">{/* noth9ng here */}</div>
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
