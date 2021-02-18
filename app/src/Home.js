import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { Events, animateScroll as scroll } from "react-scroll";
import Team from "./Team";
import NavActivities from "./NavActivities";

const setDate = Date.now()

const SPACE_ID = "yzeyubafmmte";
const ACCESS_TOKEN = "3uqmp9O_VOmdmZhd7VGyTEDbuwrKAyTMLnAfHSZYkdM";
const contentfulAPI =
	"https://cdn.contentful.com/spaces/" +
	SPACE_ID +
	"/entries?access_token=" +
	ACCESS_TOKEN + "&" + setDate;

export default class Home extends React.Component {
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
					<div className="loading"></div>
				) : (
					<Fragment>
						<NavActivities />

						<div className="contain">
							<div className="home-hero">
								{institutions.map(
										(item, index) =>
											item.fields.type == "about" && (
												<Fragment key={index}>
													<Markdown>{item.fields.body}</Markdown>
												</Fragment>
											)
									)
									.reverse()}

								<div className="nudge-lg"></div>

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
