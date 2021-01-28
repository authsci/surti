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

export default class Publications extends React.Component {
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
								{_.sortBy(publications, "order").map(
									(item, index) =>
										item.fields.type == "publication" && (
<Fragment key={index}>
											<div className={ item.fields.graphic ? 'publication' : 'publication-list' } >
												<div>
													{item.fields.graphic &&
														media.includes.Asset.map(
															(image, index) =>
																item.fields.graphic.sys.id ==
																	media.includes.Asset[index].sys.id && (
                                    item.fields.link ? <a href={item.fields.link} target="_blank"  key={index}><img
																		key={index}
																		src={
																			media.includes.Asset[index].fields.file
																				.url
																		}
                                  /></a> :
                                  
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
													<h4>{item.fields.subtext}</h4>
                          <div className="nudge-sm"></div>
													<small>{item.fields.author}</small>
													<small>{item.fields.year}</small>
                          {item.fields.abstract && <Markdown>{item.fields.abstract}</Markdown> }
                          <div className="nudge-sm"></div>
													{item.fields.link && <a href={item.fields.link} target="_blank">Available Here</a>}
												</div>


											</div>
                </Fragment>
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
