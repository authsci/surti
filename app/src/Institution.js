import React, { Fragment } from "react";
import axios from "axios";

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
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const organizations = response.data.items;
			this.setState({ organizations, loading: false });
			console.log(organizations);
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
							<div className="about">
								<div className="nudge-xl"></div>
								<p>Content will go here for institution.</p>
							</div>
						</div>

						{/* <div className="about">
							{organizations.map(
								(item, index) =>
									item.fields.type == "org" && (
										<Fragment key={index}>
											<Markdown>{item.fields.body}</Markdown>
										</Fragment>
									)
							)}
						</div> */}
					</Fragment>
				)}

			</Fragment>
		);
	}
}
