import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link } from "react-router-dom";
// import axios from "axios";


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



  const [state, setState] = useState({
    right: false,
  });

	// useEffect(() => {
	// 	axios.get(contentfulAPI).then(({ data }) => {
	// 		setInfo(data);
	// 		console.log(data);
	// 	});
	// });

	const toggleDrawer = (side, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		// window.scrollTo(0, 0);

		setState({ ...state, [side]: open });
	};

	return  (
			<Fragment>
				{!state.right && (
				
					<div className="layout-row flex-right">
						<a className="link-sidepanel" onClick={toggleDrawer("right", true)}>
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

						<a
							className="link-close"
							onClick={toggleDrawer("right", false)}
						>
							<span className="material-icons">close</span>
						</a>
						
					<div className="sidepanel">
						<h3></h3>
						<Link to="/home" onClick={toggleDrawer("right", false)}>
							Home
						</Link>
						{/* <a>About</a> */}
						<Link to={"/list/"} onClick={toggleDrawer("right", false)}>
							People
						</Link>
						{/* <li>Events</li> */}
						<Link to={"/publications/"} onClick={toggleDrawer("right", false)}>
						Publications
						</Link>
						<Link to={"/institutions"} onClick={toggleDrawer("right", false)}>
							Institutions
						</Link>

						<div className="nudge-md"></div>

					</div>
				</SwipeableDrawer>
			</Fragment>
			
	)
}
