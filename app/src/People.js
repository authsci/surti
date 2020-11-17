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
			people: [],
			media: [],
			id: this.props.match.params.id,
		};
	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const media = response.data;
			const people = response.data.items[this.state.id].fields;
			this.setState({ media, people, loading: false });
		});

		window.scrollTo(0, 0);
	}

	render() {
		let { loading, media, people } = this.state;

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
								<h2>{people.firstname + " " + people.lastname}</h2>
								<p>{people.code}</p>
								<p>{people.position}</p>
								<a className="link-default" href={`mailto:` + people.email}>
									{people.email}
								</a>
								<div className="nudge-sm"></div>

								{people.photo && (
                  <Fragment>

									<div className="profile">
										{media.includes.Asset.map(
                      (image, index) =>
                      people.photo.sys.id ==
                      media.includes.Asset[index].sys.id && (
                        <img
                        key={index}
                        src={media.includes.Asset[index].fields.file.url}
                        height="200"
                        />
												)
                        )}

									</div>

										<Markdown>{people.bio}</Markdown>


                        </Fragment>

                  
								)}
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
