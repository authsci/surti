import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import PublicationsSolo from "./PublicationsSolo";
import ReactTooltip from "react-tooltip";

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

export default class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			media: [],
			id: this.props.match.params.id,
		};

		console.log(this.props.match.params.id);
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;
			const data = response.data.items;
			this.setState({ media, data, loading: false });

			console.log("data", data);
		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, media, data, id } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<div className="contain fade-in">
						{data.map(
							(item, index) =>
								id == item.sys.id && (
									<div key={index} className="copy">

<div className="breadcrumbs">
								<Link to="/home" className="link-breadcrumbs">
									Home
								</Link>
								<span>/</span>
								<Link to="/list" className="link-breadcrumbs">
									People
								</Link>
								<span>/</span>
								{data.map(
										(item, index) =>
											id == item.sys.id && (
												<b key={index}>
													{item.fields.firstname} {item.fields.lastname}
												</b>
											)
									)}
							</div>

						{data.map(
							(item, index) =>
								id == item.sys.id && (
									<div key={index} className="profile-card-lg">
										<Link to={`/profile/` + item.sys.id} className="link-inert">
											{item.fields.photo &&
												media.includes.Asset.map(
													(image, index) =>
														item.fields.photo.sys.id ==
															media.includes.Asset[index].sys.id && (
															<img
																key={index}
																src={
																	media.includes.Asset[index].fields.file.url
																}
															/>
														)
												)}
										</Link>

										<div>
											{item.fields.inst &&
												item.fields.inst.map((itemInst, index) => (
													<Fragment key={index}>
														{data.map(
															(item, index) =>
																item.sys.id == itemInst.sys.id &&
																item.fields.type == "org" && (
																	<Fragment key={index}>
																			<Link
																				to={`/institution/` + item.fields.code}
																				className={
																					`dept-` +
																					item.fields.code.toLowerCase()
																				}
																				data-tip
																				data-for={item.fields.code}
																			>
																				{item.fields.code}
																			</Link>



																		<ReactTooltip
																			place="top"
																			type="dark"
																			effect="float"
																			id={item.fields.code}
																		>
																			{item.fields.name}
																		</ReactTooltip>

																	</Fragment>

																	
																)
														)}


													</Fragment>

													
												))}
											<h1>
												{item.fields.firstname + " " + item.fields.lastname}
											</h1>
											<h2>{item.fields.position}</h2>
											<a href={`mailto:` + item.fields.email} className="link-icon">
											<i className="far fa-envelope"></i>
										</a>
										<a className="link-email" href={`mailto:` + item.fields.email}>
											{item.fields.email}
										</a>

										
									
										</div>
									</div>
								)
						)}

										<div className="nudge-md"></div>

										<div className="profile-bio">
											{item.fields.bio && (
												<Markdown>{item.fields.bio}</Markdown>
											)}
										</div>
								

										<div className="nudge-md"></div>

										<PublicationsSolo id={id} />
									</div>
								)
						)}
					</div>
				)}
			</Fragment>
		);
	}
}
