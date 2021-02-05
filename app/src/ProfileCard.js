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

export default class ProfileCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			people: [],
			media: [],
			id: this.props.id,
			showDept: this.props.showDept
		};

		console.log("props",this.props.showDept);
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;
			const data = response.data.items;
			this.setState({ media, data, loading: false });

		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, media, data, id, showDept } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<div className="profile-container">
						{data.map(
							(item, index) =>
								id == item.sys.id && (
									<div key={index} className="profile-card">
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
														{showDept == true && data.map(
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
											<Link
												to={`/profile/` + item.sys.id}
												className="link-default"
											>
												View {item.fields.firstname + `'s`} Profile
											</Link>
										</div>
									</div>
								)
						)}
					</div>
				)}
			</Fragment>
		);
	}
}
