import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import _ from "lodash";

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

export default class Team extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			people: [],
			media: [],
		};

	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;
			const people = response.data.items;
			this.setState({ media, people, loading: false });

			console.log(response.data.items);
		});

		console.log("Team.js");

		window.scrollTo(0, 0);
	}

	render() {
		let { media, people, loading } = this.state;

		let mapped = people.map(function (el, index) {
			return {
				order: el.fields.order,
				type: el.fields.type,
				scholar: el.fields.scholar,
				firstname: el.fields.firstname,
				lastname: el.fields.lastname,
				institution: el.fields.institution,
				position: el.fields.position,
				id: el.sys.id,
			};
		});

		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<Fragment>
						{_.sortBy(mapped, "order").map(
							(item, index) =>
								item.type == "people" &&
								item.scholar && (
									<Fragment key={item.id}>
										<div className="card-compact">
											<Link to={`/profile/` + item.id} className="link-default">
												<h3>
													{item.firstname + " " + item.lastname} |{" "}
													{item.position} | {item.institution}
												</h3>
											</Link>
										</div>
									</Fragment>
								)
						)}
					</Fragment>
				)}
			</Fragment>
		);
	}
}
