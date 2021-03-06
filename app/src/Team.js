import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import _ from "lodash";
import ProfileRows from "./ProfileRows";

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

		});


		window.scrollTo(0, 0);
	}

	render() {
		let { media, people, loading } = this.state;

		let mapped = people.map(function (el, index) {
			return {
				order: el.fields.order,
				type: el.fields.type,
				role: el.fields.role,
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
							item.role == "Scholar"  && (
									<ProfileRows id={item.id} showDept={true} key={index} />
							)
						)}
					</Fragment>
				)}
			</Fragment>
		);
	}
}
