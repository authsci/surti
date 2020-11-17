import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN;

export default class Activities extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			organizations: [],
			id: this.props.match.params,
		};
		console.log("inst props", this.props.match.params);
	}


	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const organizations = response.data.items[this.props.match.params.id].fields;
			this.setState({ organizations, loading: false });
			console.log("organizations", organizations);
		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, organizations } = this.state;

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
									<Link to="/" className="link-breadcrumbs">
										Home
									</Link>
									<span>/</span>
									<Link to="/institutions" className="link-breadcrumbs">
										Institutions
									</Link>
									<span>/</span>
									<b>{organizations.name}</b>
								</div>

								<h1>{organizations.name}</h1>

								<div className="nudge-md"></div>

								<a className="link-main">
									People
								</a>
								<a className="link-main">
									Events
								</a>
								<a className="link-main">
									Publications
								</a>
								<a className="link-main">
									Initiatives
								</a>
								<a className="link-main">
									Courses
								</a>

								{/* <h2>{people.firstname + " " + people.lastname}</h2>
								<span className={`dept-` + people.dept.toLowerCase()}>
									{people.dept}
								</span>
								<br />
								<div>{people.position}</div>
								<a href={`mailto:` + people.email}>
									<i className="far fa-envelope"></i>
								</a>
								<a className="link-default" href={`mailto:` + people.email}>
									{people.email}
								</a>
								<div className="nudge-sm"></div>

								<div className="profile">
									{people.photo &&
										media.includes.Asset.map(
											(image, index) =>
												people.photo.sys.id ==
													media.includes.Asset[index].sys.id && (
													<img
														key={index}
														src={media.includes.Asset[index].fields.file.url}
													/>
												)
										)}
								</div>

								<Markdown>{people.bio}</Markdown>
								<div className="nudge-xxl"></div> */}
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
