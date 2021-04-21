import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import * as _ from "lodash";
const setDate = Date.now();
import Moment from "react-moment";


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
			id: this.props.match.params.id,
			name: this.props.match.params.name,
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
		let { loading, events, media, id, name } = this.state;

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
									<Link to="/events" className="link-breadcrumbs">
										Events
									</Link>
									<span>/</span>
									<b>{name}</b>
								</div>

								<div className="nudge-md"></div>
								{events.map(
									(item, index) =>
										id == item.sys.id && (
											<Fragment key={index}>
												<div style={{textAlign: "justify"}}
													className={
														item.fields.graphic
															? "event-detail"
															: "event-detail-list"
													}
												>
													<h1>{item.fields.title}</h1>
													{item.fields.subtext && (
														<h2>{item.fields.subtext}</h2>
													)}
													<p>{item.fields.author}</p>
													
													{item.fields.year && <h3>{item.fields.year}</h3> }


													{ item.fields.showEventDate && <p><Moment
																format="LL"
																date={item.fields.eventDate}
															/></p>
													}
													

													<div>
														{item.fields.graphic &&
															media.includes.Asset.map(
																(image, index) =>
																	item.fields.graphic.sys.id ==
																		media.includes.Asset[index].sys.id &&
																	(item.fields.link ? (
																		<a
																			href={item.fields.link}
																			target="_blank"
																			key={index}
																		>
																			<img
																				key={index}
																				src={
																					media.includes.Asset[index].fields
																						.file.url
																				}
																			/>
																		</a>
																	) : (
																		<img
																			key={index}
																			src={
																				media.includes.Asset[index].fields.file
																					.url
																			}
																		/>
																	))
															)}
													</div>

													

													<div>
														{item.fields.abstract && (
															<Fragment>

															<Markdown>{item.fields.abstract}</Markdown>
															</Fragment>

														)}
														{item.fields.link && (
															<a href={item.fields.link} target="_blank">
																More Event Info Here
															</a>
														)}
													</div>

													
												</div>

											</Fragment>
										)
								)}
							</div>


						</div>


					</Fragment>
				)}
			</Fragment>
		);
	}
}
