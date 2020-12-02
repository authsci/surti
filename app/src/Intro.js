import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Events, animateScroll as scroll } from "react-scroll";
import Team from "./Team";
import NavActivities from "./NavActivities";

const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN;

const myID = document.getElementById("myID");

export default class Activities extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			institutions: [],
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const institutions = response.data.items;
			this.setState({ institutions, loading: false });
		});

		window.scrollTo(0, 0);

	}


	render() {
		let { loading, institutions } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div className="loader fade-in">
						<div className="loader-ellipsis">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				) : (
					<Fragment>
						<div className="video-fullscreen">
							<div className="iframe-wrapper">
								<div className="iframe-overlay">
									<div className="mainmenu-overlay">
									



										<div className="mainmenu">
											{institutions.map(
												(item, index) =>
													item.fields.type == "org" && (
														<Link
															key={index}
															to={"/institution/" + index}
															className={`link-title-` + item.fields.color}
														>
															<div>
																<h1>{item.fields.code}</h1>
																<small>{item.fields.name}</small>
															</div>
														</Link>
													)
											)}
										</div>

                    <Link to="/intro" className="logo-float">
											<img src="img/logo-icon-white.png" />{" "}
											<div>
												<strong>Extimacies</strong>
												<span>Critical Theory from<br/>the Global South</span>
											</div>
										</Link>
									</div>
                  <div className="nav-down" id="arrow">
										<Link to="/home"><i className="fas fa-angle-down"></i></Link>
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
