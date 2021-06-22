import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
			event: [],
			media: [],
			id: this.props.id,
			showDept: this.props.showDept
		};

	

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

		return !loading && (
			<Fragment>

			
					<div className="profile-container">

						{data.map(
							(item, index) =>
								id == item.sys.id && (
									<div key={index} className="profile-card">
										<Link to={`/event/` + item.sys.id} className="link-inert">
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
											
											<h1>
												{item.fields.title}
											</h1>
											<h2>{item.fields.position}</h2>
											<Link
												to={`/event/` + item.sys.id}
												className="link-default"
											>
												View Event Details
											</Link>
										</div>
									</div>
								)
						)}
					</div>
			</Fragment>
		);
	}
}
