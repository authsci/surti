import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PublicationsSolo from "./PublicationsSolo";
import Profile from "./Profile";
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

export default class People extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			people: [],
			media: [],
			id: this.props.match.params.id,
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
		let { loading, data, id } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<Fragment>
						<div className="contain fade-in">
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
												<Fragment key={index}>
													<Profile id={item.sys.id} />
												</Fragment>

											))}
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
