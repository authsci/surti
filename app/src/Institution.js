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
			institutions: [],
		};
		console.log("inst props", this.props);
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const institutions =
				response.data.items[this.props.match.params.id].fields;
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
									<Link to="/intro" className="link-breadcrumbs">
										Home
									</Link>
									<span>/</span>
									<Link to="/intro" className="link-breadcrumbs">
										Institutions
									</Link>
									<span>/</span>
									<b>{institutions.name}</b>
								</div>

								<h1>{institutions.name}</h1>

								<Markdown>{institutions.desc}</Markdown>

								<div className="nudge-md"></div>

								<a className="link-main">People</a>
								<a className="link-main">Events</a>
								<a className="link-main">Initiatives</a>
								<a className="link-main">Publications</a>

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
