import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
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
			showDept: false
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;

			const data = response.data.items;

			this.setState({ media, data, loading: false });
			console.log("Institution.js", response);
		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, data, dept, showDept } = this.state;

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
											<Fragment key={index}>
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

												<div className="nudge-lg"></div>

												<h1>People</h1>

												{item.fields.people.map(
									(item, index) => (
											<Fragment key={index}>
												<ProfileCard id={item.sys.id} showDept={false} />
											</Fragment>
										)
								)}



												{/* {item.fields.people &&
													item.fields.people.map((item, index) => (
														<Fragment key={index}>
															{data.map(
																(profile, index) =>
																	profile.fields.type == "people" &&
																	item.sys.id == profile.sys.id && (
																		<Fragment key={index}>
																			<Card className="card">
																				<CardContent>
																					<div>{profile.fields.name}</div>

																					<h1>
																						{profile.fields.firstname +
																							" " +
																							profile.fields.lastname}
																					</h1>

																					<h2>{profile.fields.position}</h2>

																					<a
																						href={
																							`mailto:` + profile.fields.email
																						}
																						className="link-icon"
																					>
																						<i className="far fa-envelope"></i>
																					</a>
																					<a
																						className="link-default"
																						href={
																							`mailto:` + profile.fields.email
																						}
																					>
																						{profile.fields.email}
																					</a>

																					<div className="nudge-sm"></div>
																					<Link
																						to={`/profile/` + profile.sys.id}
																					>
																						{profile.fields.photo &&
																							media.includes.Asset.map(
																								(image, index) =>
																									profile.fields.photo.sys.id ==
																										media.includes.Asset[index]
																											.sys.id && (
																										<img
																											key={index}
																											src={
																												media.includes.Asset[
																													index
																												].fields.file.url
																											}
																										/>
																									)
																							)}
																					</Link>

																					<div className="nudge-sm"></div>

																					<Link
																						to={`/profile/` + profile.sys.id}
																						className="link-default"
																					>
																						View{" "}
																						{profile.fields.firstname + `'s`}{" "}
																						Profile
																					</Link>
																				</CardContent>
																			</Card>
																		</Fragment>
																	)
															)}
														</Fragment>
													))} */}
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
