import React, { Fragment } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import * as _ from "lodash";
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

export default class PublicationsSolo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			events: [],
      media: [],
      id: this.props.id
		};


	}

	componentDidMount() {
		axios.get(contentfulAPI).then((response) => {
			const events = response.data.items;
			const media = response.data;
			this.setState({ media, events, loading: false });
    });
    

		window.scrollTo(0, 0);
	}

	render() {
    let { loading, events, media, id } = this.state;
    
  
		return (
			<Fragment>
				{loading  ?  (
					<div className="loading"></div>
				) : (
					<Fragment>

						<div className="nudge-md"></div>

									<h1>Events</h1>
							

						{events.map(
							(item, index) =>
								item.sys.contentType.sys.id == "events" && (
									<Fragment key={index}>

										<div
											className={
												item.fields.graphic ? "publication" : "publication-list"
											}
										>
											<div>
												{item.fields.graphic &&
													media.includes.Asset.map(
														(image, index) =>
															item.fields.graphic.sys.id ==
																media.includes.Asset[index].sys.id &&
															(item.fields.link ? (
																<a
																	href={item.fields.link}
																	target="_blank"
																	key={index}
																>
																	<img
																		key={index}
																		src={
																			media.includes.Asset[index].fields.file
																				.url
																		}
																	/>
																</a>
															) : (
																<img
																	key={index}
																	src={
																		media.includes.Asset[index].fields.file.url
																	}
																/>
															))
													)}
											</div>

											<div>
												<h2>{item.fields.title}</h2>
												<h4>{item.fields.subtext}</h4>
												<div className="nudge-sm"></div>
												<small>{item.fields.author}</small>
												<small>{item.fields.eventDate}</small>
												{item.fields.abstract && (
													<Markdown>{item.fields.abstract}</Markdown>
												)}
												<div className="nudge-sm"></div>
												{item.fields.link && (
													<a href={item.fields.link} target="_blank">
														Available Here
													</a>
												)}
											</div>
										</div>
									</Fragment>
                ))}
								<p>{events.length && `More `}Coming Soon.</p>

					</Fragment>
        )}
			</Fragment>
		);
	}
}
