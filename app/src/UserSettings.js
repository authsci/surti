import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link } from "react-router-dom";
import axios from "axios";

const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN;

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
	const [info, setInfo] = useState();
  const user = localStorage.getItem("user");
  const [state, setState] = useState({
    right: false,
  });

	useEffect(() => {
		axios.get(contentfulAPI).then(({ data }) => {
			setInfo(data);
			console.log(data);
		});
	});

	const toggleDrawer = (side, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		window.scrollTo(0, 0);

		setState({ ...state, [side]: open });
	};

	return info ? (
			<Fragment>
				{state.right ? (
					<div className="layout-row flex-right">
						<a
							className="link-sidepanel"
							onClick={toggleDrawer("right", false)}
						>
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
						<h3></h3>
						<Link to="/" onClick={toggleDrawer("right", false)}>
							Home
						</Link>
						{/* <a>About</a> */}
						<Link to={"/list/"} onClick={toggleDrawer("right", false)}>
							People
						</Link>
						<li>Events</li>
						<li>Publications</li>
						<li>Initiatives</li>
						<li>Courses</li>

						<div className="nudge-md"></div>

						<h3>Institutions</h3>
						 {/* {info.map((item, index) => (
      <Fragment key={index}>{item.fields.name}</Fragment>
    ))} */}
						{/* {info.map(
							(item, index) =>
								item.fields.type == "org" && (
									<Link key={index} to={"/institution/" + index} onClick={toggleDrawer("right", false)}>{item.fields.code} - {item.fields.name}</Link>
								)
						)} */}

						<Link to={"/institution/" + 0} onClick={toggleDrawer("right", false)}>VU - Villanova University</Link>
						<Link to={"/institution/" + 1} onClick={toggleDrawer("right", false)}>AUB - The American University of Beirut</Link>
						<Link to={"/institution/" + 2} onClick={toggleDrawer("right", false)}>AUC - The American University in Cairo</Link>
						<Link to={"/institution/" + 3} onClick={toggleDrawer("right", false)}>FUABC - Federal University of ABC</Link>
						<Link to={"/institution/" + 4} onClick={toggleDrawer("right", false)}>IUA - The Ibero-American University</Link>

						{/* 					
					<Link to="/login" className="link-text" data-tip data-for="username">
						Change Password?
					</Link>

					<ReactTooltip place="top" type="dark" effect="float" id="username">
						This will trigger SSO/Keycloak Flow
					</ReactTooltip> */}
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
			
			) : (
				<Fragment></Fragment>
			)
}
