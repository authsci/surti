import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Events, animateScroll as scroll } from "react-scroll";

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
			console.log("institutions", institutions);
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
						{/* <div className="mobile-placeholder mobile">
							&nbsp;
						</div> */}

						<div className="outer-container">
							<div className="inner-container">
								<div className="video-overlay fade-in">
									<div className="logo">
										<img src="img/logo-icon-white.png" />
										<div>
											<strong>Extimacies</strong>
											<span>Critical Theory from the Global South</span>
										</div>
									</div>

									<div className="mainmenu">
										{institutions.map(
											(item, index) =>
												item.fields.type == "org" && (
													<Fragment key={index}>
														<Link
															to={"/institution/" + index}
															className={`link-title-` + item.fields.color}
														>
															<div>
																<h1>{item.fields.code}</h1>
																<small>{item.fields.name}</small>
															</div>
														</Link>
													</Fragment>
												)
										)}
									</div>

									<div className="nav-down">
										<i className="fas fa-chevron-down indicate"></i>
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
									src="img/mobius.mp4"
									type="video/mp4"
									// poster="img/mobius.jpg"
								></video>
							</div>
						</div>

						<div className="nudge-xl"></div>

						<div className="contain">
							<div className="copy-hero">
								{institutions.map(
									(item, index) =>
										item.fields.type == "about" && (
											<Fragment key={index}>
												<Markdown>{item.fields.body}</Markdown>
											</Fragment>
										)
								)}

								<div className="nudge-lg"></div>

								{institutions.map(
									(item, index) =>
										item.fields.type == "people" && (
											<div key={index} className="profile">
												<Link to={`/people/` + index} className="link-default">
													{item.fields.firstname + " " + item.fields.lastname}
												</Link>
												<span
													className={`dept-` + item.fields.dept.toLowerCase()}
												>
													{item.fields.dept}
												</span>
												<span>{item.fields.position}</span>
											</div>
										)
								)}


								<div className="nudge-xl"></div>
							</div>
						</div>
					</Fragment>
				)}

				{/* <div className="footer desktop">
					Copyright ©<Moment format="YYYY" /> Extimacies Program |{" "}
					<Moment format="D-MMM-YYYY" />
				</div> */}
			</Fragment>
		);
	}
}
