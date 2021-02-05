import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import ProfileCard from "./ProfileCard";

const setDate = Date.now();
console.log(setDate);

const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN +
	"&" +
	setDate;

export default class PeopleList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			people: [],
			media: [],
			id: this.props.match.params.id,
			name: this.props.match.params.name,
			showDept: true

		};
	}

	componentDidMount() {
		this.goTop();

		axios.get(contentfulAPI).then((response) => {
			const media = response.data;
			const people = response.data.items;
			this.setState({ media, people, loading: false });
		});

		console.log("PeopleList.js");
	}

	goTop = () => {
		scroll.scrollToTop({
			duration: 400,
			delay: 0,
		});
	};

	render() {
		let { loading, people, showDept } = this.state;

		return (
			!loading && (
				<Fragment>
					<div className="contain fade-in">
						<div className="copy">
							<div className="breadcrumbs">
								<Link to="/home" className="link-breadcrumbs">
									Home
								</Link>
								<span>/</span>
								<b>People</b>
							</div>

							<div className="nudge-md"></div>

							<Fragment>
								<h1>Scholars</h1>

								{people.map(
									(item, index) =>
										item.fields.type == "people" &&
										item.fields.scholar && (
											<Fragment key={index}>
												<ProfileCard id={item.sys.id} showDept={true} />
											</Fragment>
										)
								)}

								<div className="nudge-md"></div>

								<h1>Staff</h1>

								{people.map(
									(item, index) =>
										item.fields.type == "people" &&
										!item.fields.scholar && (
											<Fragment key={index}>
												<ProfileCard id={item.sys.id} showDept={true} />
											</Fragment>
										)
								)}
							</Fragment>
							<div className="nudge-xxl"></div>
						</div>
					</div>
				</Fragment>
			)
		);
	}
}
