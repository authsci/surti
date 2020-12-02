import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { Events, animateScroll as scroll } from "react-scroll";
import Team from "./Team";
import NavActivities from "./NavActivities";

const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN;

const myID = document.getElementById("myID");

export default class Activities extends React.Component {
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
		});

		window.scrollTo(0, 0);

	}



	goTop = () => {
		scroll.scrollToTop({
			duration: 400,
			delay: 0,
		});
	};

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

						<NavActivities />

						<div className="nudge-lg"></div>

						<div className="contain fade-in">
							<div className="home-hero">
								{institutions.map(
									(item, index) =>
										item.fields.type == "about" && (
											<Fragment key={index}>
												<Markdown>{item.fields.body}</Markdown>
											</Fragment>
										)
								)}

								<div className="nudge-xl"></div>

								<Team />

								<div className="nudge-xl"></div>
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
