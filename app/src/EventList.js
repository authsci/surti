import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import ReactTooltip from "react-tooltip";
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

export default class Events extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			events: [],
			media: [],
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const events = response.data.items;
			const media = response.data;
			this.setState({ media, events, loading: false });
		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, events, media } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<Fragment>
						<div className="contain">
							<div className="copy">
								<div className="breadcrumbs">
									<Link to="/home" className="link-breadcrumbs">
										Home
									</Link>
									<span>/</span>
									<b>Events</b>
								</div>

								<div className="nudge-md"></div>

								<h1>Events</h1>

								<div className="nudge-md"></div>
								{events.map(
									(item, index) =>
										item.sys.contentType.sys.id == "events" &&
										item.fields.showInMainEvents && (
											<Fragment key={index}>
												<Link
													to={"/event/" + item.sys.id + "/" + item.fields.title}
													className="publication-list"
												>
													<div>
														{item.fields.graphic &&
															media.includes.Asset.map(
																(image, index) =>
																	item.fields.graphic.sys.id ==
																		media.includes.Asset[index].sys.id &&
																		<img
																		key={index}
																		style={{paddingRight: "12px"}}
																		src={
																			media.includes.Asset[index].fields.file
																				.url
																		}
																	/>
															)}
													</div>
													<h2>
														{item.fields.title}
													</h2>
														<b>{item.fields.subtext}</b>
													{/* <b>{item.fields.author}</b> */}
													 { item.fields.eventDate &&
													<b>Event Date: <Moment
																		format="LL"
																		date={item.fields.eventDate}
																	/></b>
													 }
												</Link>
											
											</Fragment>
										)
								)}

								<p>{events.length && `More `}Coming Soon.</p>
							</div>

							<div className="nudge-xl"></div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
