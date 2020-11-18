import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Markdown from "markdown-to-jsx";
import ReactTooltip from "react-tooltip";
import { Events, animateScroll as scroll } from "react-scroll";
import { FilterableContent, FilterableSection } from "react-filterable-content";
import TextField from "@material-ui/core/TextField";

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
									
										{people.map(
											(item, index) =>
												item.fields.type == "people" && (
													<Fragment key={index}>
														<h2>
															{item.fields.firstname +
																" " +
																item.fields.lastname}
														</h2>
														<span
															className={
																`dept-` + item.fields.dept.toLowerCase()
															}
														>
															{item.fields.dept}
														</span>
														<br />
														<div>{item.fields.position}</div>
														<a href={`mailto:` + item.fields.email}>
															<i className="far fa-envelope"></i>
														</a>
														<a
															className="link-default"
															href={`mailto:` + item.fields.email}
														>
															{item.fields.email}
														</a>
														<div className="nudge-xs"></div>

                            <div className="profile">

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
                            
                            </div>

                            <Markdown>{item.fields.bio}</Markdown>

														<div className="nudge-lg"></div>
													</Fragment>
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
