import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import ReactTooltip from "react-tooltip";
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

export default class Institutions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			institutions: [],
			media: [],
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const publications = response.data.items;
			const media = response.data;
			this.setState({ media, publications, loading: false });
			console.log("Publications.js", response);
		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, publications, media } = this.state;

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
									<b>Publications</b>
								</div>

								<div className="nudge-md"></div>

								<h1>Publications</h1>

								<div className="nudge-md"></div>
								{/* {_.sortBy(publications, "order") */}
								{publications.map(
									(item, index) =>
										item.fields.type == "publication" && (
											<div className="publication" key={index}>
												<div>
													{item.fields.graphic &&
														media.includes.Asset.map(
															(image, index) =>
																item.fields.graphic.sys.id ==
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
												</div>

												<div>
													<h2>{item.fields.title}</h2>
													<p>{item.fields.author}</p>
													<p>{item.fields.year}</p>
													<a href={item.fields.link}>{item.fields.link}</a>
												</div>

								<div className="nudge-md"></div>

											</div>
										)
								)}
								{/* ).reverse()} */}
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
