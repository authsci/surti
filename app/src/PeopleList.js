import React, { Fragment } from "react";
import axios from "axios";
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
			people: [],
			media: [],
			id: this.props.match.params.id,
			name: this.props.match.params.name,
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;
			const people = response.data.items;
			this.setState({ media, people, loading: false });
		});
		window.scrollTo(0, 0);
	}

	render() {
		let { loading, media, people } = this.state;

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
						<div className="contain">
							<div className="copy">
								<div className="breadcrumbs">
									<Link to="/" className="link-breadcrumbs">
										Home
									</Link>
									<span>/</span>
									<b>People</b>
								</div>

								<Fragment>

									<h1>
									Scholars
									</h1>
									{people.map(
										(item, index) =>
											item.fields.type == "people" && (
												<Card key={index} className="card">
													<CardContent>
														<div
															data-tip
															data-for={item.fields.email}
															className={
																`dept-` + item.fields.dept.toLowerCase()
															}
														>
															{item.fields.dept}
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

														<ReactTooltip
															place="top"
															type="dark"
															effect="float"
															className="desktop"
															id={item.fields.email}
														>
															{item.fields.institution}
														</ReactTooltip>

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
											)
									)}
								</Fragment>
								<div className="nudge-xxl"></div>
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
