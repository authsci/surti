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
			showDept: this.props.showDept,
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;
			const data = response.data.items;
			this.setState({ media, data, loading: false });
			console.log(data);
		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, media, data, id, showDept } = this.state;

		return (
			!loading && (
				<Fragment>
					{data.map(
						(item, index) =>
							id == item.sys.id && (
								<Link
									to={`/profile/` + item.sys.id}
									className="link-profile"
									key={index}
								>
									<strong>
										{item.fields.firstname + " " + item.fields.lastname}{" "}
									</strong>{" "}
									<span>|</span> {item.fields.position} <span>|</span>
									{item.fields.inst &&
										item.fields.inst.map((itemInst, index) => (
											<Fragment key={index}>
												{showDept == true &&
													data.map(
														(item, index) =>
															item.sys.id == itemInst.sys.id &&
															item.fields.type == "org" && (
																<Fragment key={index}>
																	{item.fields.name} 
                                  <span className={
																					`inst dept-` +
																					item.fields.code.toLowerCase()
																				}>{item.fields.code}</span>
																</Fragment>

															)
													)}
											</Fragment>
										))}
								</Link>
							)
					)}
				</Fragment>
			)
		);
	}
}
