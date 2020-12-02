import React, { Fragment } from "react";
import axios from "axios";
import Moment from "react-moment";
import { Events, animateScroll as scroll } from "react-scroll";

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
    
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const institutions = response.data.items;
			this.setState({ institutions, loading: false });
			console.log(institutions);
		});

		console.log("org");


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
					<div className="mainmenu">
						{institutions.map(
							(item, index) =>
								item.fields.type == "org" && (
									<Fragment key={index}>
										<div className="link-title">
											<h1>{item.fields.dept}</h1>
											<div className={`link-block-` + item.fields.color}></div>
											<small>{item.fields.name}</small>
										</div>
										<br />
									</Fragment>
								)
						)}
					</div>
				)}

				<div className="footer">
					Copyright ©<Moment format="YYYY" /> Extimacies Program |{" "}
					<Moment format="D-MMM-YYYY" />
				</div>
			</Fragment>
		);
	}
}
