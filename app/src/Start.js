import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Markdown from "markdown-to-jsx";
import ReactTooltip from "react-tooltip";
import { Events, animateScroll as scroll } from "react-scroll";
import { FilterableContent, FilterableSection } from "react-filterable-content";
import TextField from "@material-ui/core/TextField";

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
			videoURL: `
			<video autoPlay muted loop playsInline>
			<source src="img/surti.webm" type="video/webm"/>
			</video>`
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

	handleChange = () => {
		if (event && event.target) {
			const { value } = event.target;
			this.setState({ keyword: value });
			window.scrollTo(0, 0);
		}
	};

	handleSelectDiscipline = (event) => {
		//console.log(event.target.value);
		this.setState({ disciplineFilter: event.target.value });
		window.scrollTo(0, 0);
	};

	handleClearFilters = () => {
		this.setState({
			disciplineFilter: "",
			showOpen: true,
			showUpcoming: true,
			showClosed: false,
			showActions: false,
			showEval: true,
			keyword: "",
		});
	};

	handleClearKeyword = () => {
		this.setState({ keyword: "" });
		this.goTop();
	};

	goTop = () => {
		scroll.scrollToTop({
			duration: 400,
			delay: 0,
		});
	};

	render() {
		let { loading, organizations, videoURL } = this.state;

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
						<div dangerouslySetInnerHTML={{ __html: videoURL }} />

						<div className="mainmenu">
							{organizations.map(
								(item, index) =>
									item.fields.type == "org" && (
										<Fragment key={index}>
											<Link to={"/institution/" + index} className="link-title">
												<h1>{item.fields.code}</h1>
												<div
													className={`link-block-` + item.fields.color}
												></div>
												<small>{item.fields.name}</small>
											</Link>
											<br />
										</Fragment>
									)
							)}
						</div>

						<div className="nudge-xl"></div>

						<div className="about">
							{organizations.map(
								(item, index) =>
									item.fields.type == "about" && (
										<Fragment key={index}>
											<Markdown>{item.fields.body}</Markdown>
										</Fragment>
									)
							)}
						</div>
					</Fragment>
				)}

				<div className="footer">
					Copyright ©<Moment format="YYYY" /> Extimacies Program |{" "}
					<Moment format="D-MMM-YYYY" />
				</div>
			</Fragment>
		);
	}
}
