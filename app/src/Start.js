import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import ReactTooltip from "react-tooltip";
import { Events, animateScroll as scroll } from "react-scroll";
import CountUp from "react-countup";
import { FilterableContent, FilterableSection } from "react-filterable-content";
import TextField from "@material-ui/core/TextField";

export default class Activities extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			keyword: "",
			activities: []
		};
		1;
	}

	componentDidMount() {
    window.scrollTo(0, 0);
    
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      3000
    );


		// const user = localStorage.getItem("user");

		// axios
		//   .get("https://devoasys.1wa.org/portal/users/" + user)
		//   .then((response) => {
		//     const userData = response.data;
		//     this.setState({ userData, loadUser: false });

		//     if (!this.state.loadUser) {
		//       axios
		//         .get(
		//           "https://devoasys.1wa.org/portal/activities/" +
		//             this.state.userData.orgCode +
		//             "/bundle"
		//         )
		//         .then((response) => {
		//           const activities = response.data.timelines;
		//           const disciplines = response.data.disciplines;
		//           const filters = response.data.filters;
		//           const actions = response.data.filters.ACTION_REQUIRED.data.number;
		//           this.setState({
		//             activities,
		//             disciplines,
		//             actions,
		//             filters,
		//             loadData: false,
		//           });
		//           console.log("data in activities:", response.data);
		//           window.scrollTo(0, 0);
		//         });
		//     }
		//   });

		// Events.scrollEvent.register("begin", function () {});
		// Events.scrollEvent.register("end", function () {});
	}

	componentWillUnmount() {
		Events.scrollEvent.remove("begin");
		Events.scrollEvent.remove("end");
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
		let {
			loading,
		} = this.state;

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
						{/* <div className="contain-filter fade-in">
              <div className="filter-sticky">
                <div className="filter-left" id="filters">
                  <h3>FILTER</h3>

                  {showActions ? (
                    <div className="message-filter">
                      <a className="link-hide" onClick={this.handleActions}>
                        DISPLAY
                      </a>{" "}
                      ALL ACTIVITIES
                    </div>
                  ) : (
                    <div className="message-filter">
                      <a className="link-show" onClick={this.handleActions}>
                        DISPLAY
                      </a>{" "}
                      ALL
                      <span className="pulse-fast">&nbsp;{actions}&nbsp;</span>
                      ACTIVITIES THAT REQUIRE MY ACTION
                    </div>
                  )}

                  <div className="message-filter">
                    Use these filters to display Activities by Test Events,
                    Disciplines and Keywords
                  </div>
                  <small>
                    <a className="link-clear" onClick={this.handleClearFilters}>
                      Reset Filters
                    </a>
                  </small>

                  <div className="filter-rollups">
                    <div className="toggle-group">
                      <div className="toggle-group-label">
                        <label>BY TEST EVENT</label>
                      </div>

                      <div className="toggle-group-row">
                        <div
                          className={
                            showOpen ? "task-rollup-selected" : "task-rollup"
                          }
                          onClick={this.handleOpenTE}
                        >
                          {filters.TE_OPEN.data.number}&nbsp;
                          {filters.TE_OPEN.name}
                        </div>
                        <div
                          className={
                            showUpcoming
                              ? "task-rollup-selected"
                              : "task-rollup"
                          }
                          onClick={this.handleUpcomingTE}
                        >
                          {filters.TE_UPCOMING.data.number}&nbsp;
                          {filters.TE_UPCOMING.name}
                        </div>
                        <div
                          className={
                            showEval ? "task-rollup-selected" : "task-rollup"
                          }
                          onClick={this.handleEvalTE}
                        >
                          {filters.TE_EVALUATION.data.number}&nbsp;
                          {filters.TE_EVALUATION.name}
                        </div>
                      </div>
                    </div>

                    <div className="filter-group">
                      <SelectMulti
                        handleSelectDiscipline={this.handleSelectDiscipline.bind(
                          this
                        )}
                        disciplines={disciplines}
                      />{" "}
                      <TextField
                        id="standard-basic"
                        onChange={this.handleChange}
                        autoComplete="off"
                        spellCheck="false"
                        label="BY KEYWORD"
                        defaultValue={keyword}
                        placeholder="Filter by Discipline, Order Code, Program, Subscription, or Analyte"
                        style={{
                          marginLeft: "24px",
                          marginRight: "0",
                          width: "425px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="filter-right">
                </div>
              </div>
            </div> */}
					</Fragment>
				)}

				<div className="footer">
					Copyright ©<Moment format="YYYY" today /> Extimacies Program |{" "}
					<Moment format="D-MMM-YYYY" today />
				</div>
			</Fragment>
		);
	}
}
