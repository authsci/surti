import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import * as _ from "lodash";

const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN;

export default class Institutions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			institutions: [],
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const institutions = response.data.items;
			this.setState({ institutions, loading: false });
			console.log("institutions", institutions);
		});


		window.scrollTo(0, 0);
	}

	render() {
		let { loading, institutions } = this.state;

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
									<b>Institutions</b>
								</div>

								<div className="nudge-xl"></div>

								{_.sortBy(institutions, "order")
									.map(
										(item, index) =>
											item.fields.type == "org" && (
												<Link to={'/institution/' + index} key={index} className="link-list">
													<span
														className={`dept-` + item.fields.code.toLowerCase()}
														data-tip
														data-for={item.fields.code}
													>
														{item.fields.code}
													</span>
													<div>{item.fields.name}</div>
												</Link>
											)
									).reverse()}
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
