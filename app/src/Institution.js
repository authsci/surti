import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const setDate = Date.now()


const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN + "&" + setDate;

export default class Institution extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			institutions: [],
			data: [],
			media: [],
			id: this.props.match.params.id,
			dept: this.props.match.params.dept,
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;

			const data = response.data.items;

			this.setState({ media, data, loading: false });
		});

		window.scrollTo(0, 0);

		console.log("Institution.js");
	}

	render() {
		let { loading, data, media, dept } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<Fragment>
						<div className={`load accent-` + dept.toLowerCase()}></div>

						<div className="contain">
							<div className="copy">

							<div className="breadcrumbs">
									<Link to="/home" className="link-breadcrumbs">
										Home
									</Link>
									<span>/</span>
									<Link to="/Institutions" className="link-breadcrumbs">
									Institutions
									</Link>
									<span>/</span>
									{dept}

								</div>

								<div className="nudge-md"></div>
								
								{data.map(
									(item, index) =>
										item.fields.type == "org" &&
										item.fields.code == dept && (
											<div key={index}>
												<span
													className={`dept-` + item.fields.code.toLowerCase()}
													data-tip
													data-for={item.fields.code}
												>
													{item.fields.code}
												</span>
												<h1>{item.fields.name}</h1>
												{item.fields.desc && (
													<Markdown>{item.fields.desc}</Markdown>
												)}
											</div>
										)
								)}
								<div className="nudge-lg"></div>
								<h1>People</h1>
								{data.map(
									(item, index) =>
										item.fields.type == "people" &&
										item.fields.dept == dept && (
											<Fragment key={index}>
												<Card className="card">
													<CardContent>
														<div>{item.fields.name}</div>

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
											</Fragment>
										)
								)}

								<div className="nudge-lg"></div>

								<h1>Events</h1>
								<p>Coming Soon</p>
								<div className="nudge-md"></div>
								<h1>Initiatives</h1>
								<p>Coming Soon</p>
								<div className="nudge-md"></div>
								<h1>Publications</h1>
								<p>Coming Soon</p>
								<div className="nudge-md"></div>
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
