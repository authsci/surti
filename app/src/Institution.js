import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import EventCard from "./EventCard";
import PublicationsInstitution from "./PublicationsInstitution";
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

export default class Institution extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			institutions: [],
			data: [],
			media: [],
			id: this.props.match.params.id,
			dept: this.props.match.params.dept,
			showDept: false,
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;

			console.log("response", response);

			const data = response.data.items;

			this.setState({ media, data, loading: false });
		});

		window.scrollTo(0, 0);

	}

	render() {
		let { loading, data, dept, id } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div className="loading"></div>
				) : (
					<Fragment>
						<div className={`load accent-` + dept.toLowerCase()}></div>

						<div className="contain">
							<div className="copy">
								<div className="breadcrumbs">
									<Link to="/home" className="link-breadcrumbs">
										Home
									</Link>
									<span>/</span>
									<Link to="/Institutions" className="link-breadcrumbs">
										Institutions
									</Link>
									<span>/</span>
									{dept}
								</div>

								<div className="nudge-md"></div>

								{data.map(
									(item, index) =>
										item.fields.code == dept && (
											<Fragment key={index}>
												<span
													className={`dept-` + item.fields.code.toLowerCase()}
													data-tip
													data-for={item.fields.code}
												>
													{item.fields.code}
												</span>
												<h1>{item.fields.name}</h1>
												{item.fields.desc && (
													<Markdown>{item.fields.desc}</Markdown>
												)}

												<div className="nudge-lg"></div>

												<h1>People</h1>

												{item.fields.people.map((item, index) => (
													<Fragment key={index}>
														<ProfileCard id={item.sys.id} showDept={false} />
													</Fragment>
												))}

												<div className="nudge-md"></div>

												<h1>Events</h1>
										
													{item.fields.events && item.fields.events.map((item, index) => (
													<Fragment key={index}>
														
														<EventCard id={item.sys.id} />
													</Fragment>
												))}
												
												<div className="nudge-md"></div>
												{item.fields.publications && item.fields.publications.map((item, index) => (
													<Fragment key={index}>
														<PublicationsInstitution id={item.sys.id} />
													</Fragment>
												))}
											</Fragment>
										)
								)}

								<div className="nudge-lg"></div>
					
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
