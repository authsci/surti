import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import ReactTooltip from "react-tooltip";

const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN;

export default class People extends React.Component {
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
			const people = response.data.items[this.state.id].fields;
			this.setState({ media, people, loading: false });
		});

		console.log("people");


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
									<Link to="/home" className="link-breadcrumbs">
										Home
									</Link>
									<span>/</span>
									<Link to="/list" className="link-breadcrumbs">
										People
									</Link>
									<span>/</span>
									<b>{people.firstname + " " + people.lastname}</b>
								</div>

							<div className="desktop">
								<div className="profile">
									<div>
										{people.photo &&
											media.includes.Asset.map(
												(image, index) =>
													people.photo.sys.id ==
														media.includes.Asset[index].sys.id && (
														<img
															key={index}
															src={media.includes.Asset[index].fields.file.url}
														/>
													)
											)}
									</div>
									<div>
										<div
											className={`dept-` + people.dept.toLowerCase()}
											data-tip
											data-for="profile"
										>
											{people.dept}
										</div>

										<h1>{people.firstname + " " + people.lastname}</h1>

									

										<h2>{people.position}</h2>

										<a href={`mailto:` + people.email} className="link-icon">
											<i className="far fa-envelope"></i>
										</a>
										<a className="link-email" href={`mailto:` + people.email}>
											{people.email}
										</a>
									</div>
								</div>
							</div>

							<div className="mobile">

								<div className="profile">
									<div
										className={`dept-` + people.dept.toLowerCase()}
									>
										{people.dept}
									</div>

									<h1>{people.firstname + " " + people.lastname}</h1>

									<h2>{people.position}</h2>

									<a href={`mailto:` + people.email} className="link-icon">
										<i className="far fa-envelope"></i>
									</a>
									<a className="link-email" href={`mailto:` + people.email}>
										{people.email}
									</a>

								<div className="nudge-sm"></div>


									{people.photo &&
										media.includes.Asset.map(
											(image, index) =>
												people.photo.sys.id ==
													media.includes.Asset[index].sys.id && (
													<img
														key={index}
														src={media.includes.Asset[index].fields.file.url}
													/>
												)
										)}
								</div>
								</div>

								<div className="nudge-sm"></div>

								<div className="profile-bio">
								{people.bio &&
									<Markdown>{people.bio}</Markdown>
								}
								</div>

								<div className="nudge-xxl"></div>
							</div>
						</div>

						<ReactTooltip
											place="top"
											type="dark"
											effect="float"
											id="profile"
											className="desktop"
										>
											{people.institution}
										</ReactTooltip>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
