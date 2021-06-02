import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import Moment from "react-moment";

import { Link } from "react-router-dom";
import * as _ from "lodash";
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

export default class EventListforInstitution extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			events: [],
			media: [],
			id: this.props.id,
		};

		console.log("props", this.props.id);
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const events = response.data.items;
			const media = response.data;
			this.setState({ media, events, loading: false });

			console.log("events", events);
		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, events, media, id } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<Fragment>
						<div className="nudge-md"></div>

						<h1>Events</h1>

						{events.map(
							(item, index) =>
								item.sys.contentType.sys.id == "events" &&
								item.fields.showInMainEvents && (
									<div key={index} className="event-container">
										<div className="event-card">
											<Link
												to={"/event/" + item.sys.id + "/" + item.fields.title}
												className="link-inert"
											>
												{item.fields.graphic ? (
													media.includes.Asset.map(
														(image, index) =>
															item.fields.graphic.sys.id ==
																media.includes.Asset[index].sys.id && (
																<div
																	key={index}
																	style={{
																		backgroundImage:
																			"url(" +
																			media.includes.Asset[index].fields.file
																				.url +
																			")",
																		backgroundSize: "cover",
																		backgroundPosition: "center center",
																		height: "175px",
																		width: "100%",
																		backgroundRepeat: "no-repeat"
																	}}
																></div>
															)
													)
												) : (
													<div
														key={index}
														style={{
															backgroundImage:
																'url("img/placeholder.png")',
															backgroundSize: "cover",
															backgroundPosition: "center center",
															height: "175px",
															width: "100%",
														}}
													></div>
												)}
											</Link>

											<div>
												<h1>{item.fields.title}</h1>
												<h2>{item.fields.subtext}</h2>
												{item.fields.year && (
													<p>
														<strong>
															<Moment
																format="LL"
																date={item.fields.eventDate}
															/>
														</strong>
													</p>
												)}
												<Link
													to={"/event/" + item.sys.id + "/" + item.fields.title}
													className="link-default"
												>
													View Event Details
												</Link>
											</div>
										</div>
									</div>
								)
						)}
					</Fragment>
				)}
			</Fragment>
		);
	}
}
