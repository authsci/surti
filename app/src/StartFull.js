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

	goTop = () => {
		scroll.scrollToTop({
			duration: 400,
			delay: 0,
		});
	};

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

										<div className="logo step1">
											<img src="img/logo-icon-white.png" />
										</div>

                    <div className="logo step2">
											<div>
												<strong>Extimacies</strong>
											</div>
										</div>

                    <div className="logo step3-a">
											<div>
												<span style={{marginTop: "-24px"}}>Critical Theory from</span>
											</div>
										</div>

                    <div className="logo step3-b">
											<div>
												<span style={{marginTop: "24px"}}>the Global South</span>
											</div>
										</div>


										<Link to="/" className="logo-float step5">
											<img src="img/logo-icon-white.png" />{" "}
											<div>
												<strong>Extimacies</strong>
												<span>Critical Theory from the Global South</span>
											</div>
										</Link>

                    <div className="mainmenu step4">
										{institutions.map(
											(item, index) =>
												item.fields.type == "org" && (
														<Link key={index}
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

									</div>

									{/* <div className="nav-down">
										<i className="fas fa-chevron-down indicate"></i>
									</div> */}
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
									{/* <source src="img/full.webm" type="video/webm"/> */}
									{/* <source src="img/full.ogv" type="video/ogv"/> */}
									<source src="img/full.mp4" type="video/mp4" />
									{/* <source src="img/watermark.mp4" type="video/mp4" /> */}
								</video>
							</div>
						</div>

						<NavActivities />

						<div className="nudge-xl"></div>

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
