import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Team from "./Team";
import NavActivities from "./NavActivities";
import _ from "lodash";

const setDate = Date.now();

const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN +
	"&" +
	setDate;

const myID = document.getElementById("myID");

export default class Start extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			institutions: [],
			timer: true,
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const institutions = response.data.items;
			this.setState({ institutions, loading: false });
			console.log("StartFull.js", response);
		});


		window.scrollTo(0, 0);

		setTimeout(
			function () {
				this.setState({ timer: false });
			}.bind(this),
			5000
		);
	}

	goTop = () => {
		scroll.scrollToTop({
			duration: 400,
			delay: 0,
		});
	};

	render() {
		let { loading, institutions, timer } = this.state;
		let mapped = institutions.map(function(el) {
			return { code: el.fields.code, name: el.fields.name, color: el.fields.color };
		})
		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<Fragment>
						<div className="video-fullscreen">
							<div className="iframe-wrapper">
								<div className="iframe-overlay">
									<div className="mainmenu-overlay">
										<div className="logo step0">
											<img src="img/logo-icon-white.png" />
											<div>
												<strong>Extimacies</strong>
												<span>
													Critical Theory from <br />
													the Global South
												</span>
											</div>
										</div>

										<Link to="/" className="logo-float stepLogo">
											<img src="img/logo-icon-white.png" />{" "}
											<div>
												<strong>Extimacies</strong>
												<span>
													Critical Theory from
													<br />
													the Global South
												</span>
											</div>
										</Link>

										<div className="mainmenu stepMenu">
										{_.sortBy(mapped, "code").map(
													(item, index) =>(
															<Link
																key={index}
																to={"/institution/" + item.code}
																className={`link-title-` + item.color}
																style={
																	timer
																		? { pointerEvents: "none" }
																		: { pointerEvents: "all" }
																}
															>
																<div>
																	<h1>{item.code}</h1>
																	<small>{item.name}</small>
																</div>
															</Link>
														)
												)}
										</div>
									</div>
									<div className="nav-down" id="arrow">
										<Link to="/home">
											<i className="fas fa-angle-down"></i>
										</Link>
									</div>
								</div>

								<video
									role="presentation"
									preload="auto"
									playsInline={true}
									crossOrigin="anonymous"
									loop
									autoPlay
									muted
								>
									<source src="img/full.webm" type="video/webm" />
									<source src="img/full.ogv" type="video/ogv" />
									<source src="img/full.mp4" type="video/mp4" />
									{/* <source src="img/watermark.mp4" type="video/mp4" /> */}
								</video>
							</div>
						</div>

						<NavActivities />

						<div className="nudge-lg"></div>

						<div className="contain">
							<div className="home-hero">
								{institutions.map(
									(item, index) =>
										item.fields.type == "about" && (
											<Fragment key={index}>
												<Markdown>{item.fields.body}</Markdown>
											</Fragment>
										)
								)}

								<div className="nudge-xl"></div>

								<Team />

								<div className="nudge-xl"></div>
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
