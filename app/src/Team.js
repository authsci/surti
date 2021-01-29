import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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

export default class Team extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			people: [],
			media: [],
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;
			const people = response.data.items;
			this.setState({ media, people, loading: false });
		});

		console.log("Team.js");

		window.scrollTo(0, 0);
	}

	render() {
		let { media, people, loading } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<Fragment>
						{people.map(
							(item, index) =>
								item.fields.type == "people" &&
								item.fields.scholar && (
									<Fragment key={index}>
										<div className="card-compact">
											{/* <Link to={`/people/` + index}>
													{item.fields.photo &&
														media.includes.Asset.map(
															(image, index) =>
																item.fields.photo.sys.id ==
																	media.includes.Asset[index].sys.id && (
																	<img
																		key={index}
																		src={
																			media.includes.Asset[index].fields.file
																				.url
																		}
																	/>
																)
														)}
												</Link>

											<div> */}

											<Link to={`/people/` + index} className="link-default">
												<h3>
													{item.fields.firstname + " " + item.fields.lastname} | {item.fields.position} | {item.fields.institution}
												</h3>
											</Link>


											{/* </div> */}
										</div>
									</Fragment>
								)
						)}
					</Fragment>
				)}
			</Fragment>
		);
	}
}
