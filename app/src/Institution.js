import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
			people: [],
			media: [],
			id: this.props.match.params.id,
			dept: this.props.match.params.dept,
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;
			const institution =
				response.data.items[this.props.match.params.id].fields;

			const people = response.data.items;

			this.setState({ institution, media, people, loading: false });
			console.log("institution", institution);
		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, institution, people, media, dept } = this.state;

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
						<div
							className={`load accent-` + institution.code.toLowerCase()}
						></div>

						<div className="contain">
							<div className="copy">
								<div className="breadcrumbs">
									<Link to="/home" className="link-breadcrumbs">
										Home
									</Link>
									<span>/</span>
									<Link to="/institutions" className="link-breadcrumbs">
										Institutions
									</Link>
									<span>/</span>
									<b>{institution.name}</b>
								</div>

								<h1>{institution.name}</h1>
								{institution.desc && <Markdown>{institution.desc}</Markdown>}

								<br />

								<div className="nudge-md"></div>

								{/* <a className="link-main">People</a>
								<a className="link-main">Events</a>
								<a className="link-main">Initiatives</a>
								<a className="link-main">Publications</a> */}

								{people.map(
									(item, index) =>
										item.fields.type == "people" && item.fields.dept == dept && (
											<Fragment key={index}>
												<Card className="card">
													<CardContent>
														{/* <div
										data-tip
										data-for={item.fields.email}
										className={`dept-` + item.fields.dept.toLowerCase()}
									>
										{item.fields.dept}
									</div> */}

														<div
															id="dept"
															className={
																`dept-` + item.fields.dept.toLowerCase()
															}
															data-tip
															data-for={item.fields.email}
														>
															{item.fields.dept}
															<div>{item.fields.name}</div>
														</div>

														<h1>
															{item.fields.firstname +
																" " +
																item.fields.lastname}
														</h1>

														<h2>{item.fields.position}</h2>

														<a
															href={`mailto:` + item.fields.email}
															className="link-icon"
														>
															<i className="far fa-envelope"></i>
														</a>
														<a
															className="link-default"
															href={`mailto:` + item.fields.email}
														>
															{item.fields.email}
														</a>

														<div className="nudge-sm"></div>
														<Link to={`/people/` + index}>
															{item.fields.photo &&
																media.includes.Asset.map(
																	(image, index) =>
																		item.fields.photo.sys.id ==
																			media.includes.Asset[index].sys.id && (
																			<img
																				key={index}
																				src={
																					media.includes.Asset[index].fields
																						.file.url
																				}
																			/>
																		)
																)}
														</Link>

														<div className="nudge-sm"></div>

														<Link
															to={`/people/` + index}
															className="link-default"
														>
															View {item.fields.firstname + `'s`} Profile
														</Link>
													</CardContent>
												</Card>
												<ReactTooltip
													place="top"
													type="dark"
													effect="float"
													className="desktop"
													id={item.fields.email}
												>
													{item.fields.institution}
												</ReactTooltip>
											</Fragment>
										)
								)}

								<div className="nudge-xl"></div>
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
