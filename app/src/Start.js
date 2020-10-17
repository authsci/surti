import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import SelectMulti from "./SelectMulti";
import ReactTooltip from "react-tooltip";
import { Events, animateScroll as scroll } from "react-scroll";
import CountUp from "react-countup";
import Video from "./Video";
import { FilterableContent, FilterableSection } from "react-filterable-content";
import TextField from "@material-ui/core/TextField";

export default class Activities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadUser: true,
      loadData: true,
      keyword: "",
      disciplineFilter: "",
      activities: [],
      disciplines: [],
      showOpen: true,
      showUpcoming: true,
      showClosed: false,
      showActions: false,
      showEval: true,
    };
    1;
  }

  componentDidMount() {
    const user = localStorage.getItem("user");

    // GET USER DATA
    axios
      .get("https://devoasys.1wa.org/portal/users/" + user)
      .then((response) => {
        const userData = response.data;
        this.setState({ userData, loadUser: false });

        if (!this.state.loadUser) {
          axios
            .get(
              "https://devoasys.1wa.org/portal/activities/" +
                this.state.userData.orgCode +
                "/bundle"
            )
            .then((response) => {
              const activities = response.data.timelines;
              const disciplines = response.data.disciplines;
              const filters = response.data.filters;
              const actions = response.data.filters.ACTION_REQUIRED.data.number;
              this.setState({
                activities,
                disciplines,
                actions,
                filters,
                loadData: false,
              });
              console.log("data in activities:", response.data);
              //console.log("disciplines in activities:", disciplines);
              window.scrollTo(0, 0);
            });
        }
      });

    // GET SUBSCRIPTION DATA

    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});
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

  handleOpenTE = () => {
    if (this.state.showOpen == false) {
      this.setState({ showOpen: true, showActions: false });
    } else {
      this.setState({ showOpen: false });
    }
    this.goTop();
  };

  handleClosedTE = () => {
    if (this.state.showClosed == false) {
      this.setState({ showClosed: true, showActions: false });
    } else {
      this.setState({ showClosed: false });
    }
    this.goTop();
  };

  handleClearKeyword = () => {
    this.setState({ keyword: "" });
    this.goTop();
  };

  handleClearDiscipline = () => {
    this.setState({ disciplineFilter: "" });
    this.goTop();
  };

  handleUpcomingTE = () => {
    if (this.state.showUpcoming == false) {
      this.setState({ showUpcoming: true, showActions: false });
    } else {
      this.setState({ showUpcoming: false });
    }
    this.goTop();
  };

  handleEvalTE = () => {
    if (this.state.showEval == false) {
      this.setState({ showEval: true, showActions: false });
    } else {
      this.setState({ showEval: false });
    }
    this.goTop();
  };

  handleActions = () => {
    if (this.state.showActions == false) {
      this.setState({
        showActions: true,
        showUpcoming: true,
        showOpen: true,
        showEval: false,
        showClosed: false,
      });
    } else {
      this.setState({ showActions: false });
    }
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
      activities,
      keyword,
      disciplineFilter,
      disciplines,
      loadData,
      showOpen,
      showClosed,
      showUpcoming,
      showActions,
      showEval,
      filters,
      actions,
    } = this.state;

    return (
      <Fragment>
        {loadData ? (
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
            <div className="contain-filter fade-in">
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
                          {/* <i
                        className={showOpen ? "fas fa-circle" : "far fa-circle"}
                      ></i> */}
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
                          {/* <i
                        className={
                          showUpcoming ? "fas fa-circle" : "far fa-circle"
                        }
                      ></i> */}
                          {filters.TE_UPCOMING.data.number}&nbsp;
                          {/* <div>{('0' + filters.TE_UPCOMING.data.number).slice(-2)}</div> */}
                          {filters.TE_UPCOMING.name}
                        </div>
                        <div
                          className={
                            showEval ? "task-rollup-selected" : "task-rollup"
                          }
                          onClick={this.handleEvalTE}
                        >
                          {/* <i
                        className={showEval ? "fas fa-circle" : "far fa-circle"}
                      ></i> */}
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
                  {/* <div
                      className={
                        showActions
                        ? "task-rollup-selected-actions"
                        : "task-rollup-actions"
                      }
                      onClick={this.handleActions}
                    >
                      <i
                        className={
                          showActions ? "fas fa-circle" : "far fa-circle"
                        }
                      ></i>
                      <div>{filters.ACTION_REQUIRED.data.number}</div>
                      <span>{filters.ACTION_REQUIRED.name}</span>
                    </div> */}
                </div>
              </div>
            </div>

            <div className="contain-task">
              <div className="task-title">
                <h3>ACTIVITIES</h3>
                <div className="task-status-filter">
                  {showOpen ||
                  showUpcoming ||
                  showClosed ||
                  showActions ||
                  showEval ? (
                    <Fragment>
                      Currently displaying Activities for
                      {showOpen && (
                        <span
                          className="link-small"
                          onClick={this.handleOpenTE}
                        >
                          Open Test Events <i className="fas fa-times"></i>
                        </span>
                      )}{" "}
                      {showUpcoming && (
                        <span
                          className="link-small"
                          onClick={this.handleUpcomingTE}
                        >
                          Upcoming Test Events <i className="fas fa-times"></i>
                        </span>
                      )}{" "}
                      {showClosed && (
                        <span
                          className="link-small"
                          onClick={this.handleClosedTE}
                        >
                          Closed Test Events <i className="fas fa-times"></i>
                        </span>
                      )}{" "}
                      {showEval && (
                        <span
                          className="link-small"
                          onClick={this.handleEvalTE}
                        >
                          Test Events in Evaluation
                          <i className="fas fa-times"></i>
                        </span>
                      )}{" "}
                      {!showActions ? "" : "and "}
                      {showActions && (
                        <Fragment>
                          <span
                            className="link-small"
                            onClick={this.handleActions}
                          >
                            {actions} action items{" "}
                            <i className="fas fa-times"></i>
                          </span>
                        </Fragment>
                      )}
                      {keyword && (
                        <Fragment>
                          {" "}
                          <span
                            className="link-small"
                            onClick={this.handleClearKeyword}
                          >
                            {" "}
                            {keyword}
                            <i className="fas fa-times"></i>
                          </span>
                        </Fragment>
                      )}
                      {disciplineFilter && (
                        <Fragment>
                          {" "}
                          <span
                            className="link-small"
                            onClick={this.handleClearDiscipline}
                          >
                            {" "}
                            {disciplineFilter}
                            <i className="fas fa-times"></i>
                          </span>
                        </Fragment>
                      )}
                    </Fragment>
                  ) : (
                    <Fragment>
                      Select a filter from above to display data for Test
                      Events.
                    </Fragment>
                  )}
                </div>
              </div>

              {activities.map(
                (item, index) =>
                  (item.status !== "CLOSED" || showClosed) &&
                  (item.status !== "OPEN" || showOpen) &&
                  (item.status !== "EVALUATION" || showEval) &&
                  (item.status !== "REGISTRATION" || showUpcoming) && (
                    <section key={index}>
                      {keyword.length == 0 &&
                        disciplineFilter.length == 0 &&
                        !showActions && (
                          <div className="timeline">
                            <div className="timeline-left">
                              <h4>
                                TIMELINE {item.year} TEST EVENT {item.testEvent}
                              </h4>
                              {item.progress.segmentStatus && (
                                <h5
                                  dangerouslySetInnerHTML={{
                                    __html: item.progress.segmentStatus,
                                  }}
                                ></h5>
                              )}

                              <h6
                                dangerouslySetInnerHTML={{
                                  __html: item.progress.timelineStatus,
                                }}
                              ></h6>
                            </div>

                            <div className="timeline-right">
                              {/* <div className="message-dev">
                                <small>DEV NOTE</small>
                                <b>INDEX {index}</b>
                              </div> */}
                              

                              {/* START BOXCARS */}

                              <div className="timeline-segment-group">
                                {item.markers.map(
                                  (item, index) =>
                                    (item.name !==
                                    "TODAY") && (
                                      <Fragment key={index}>
                                        <div
                                          className="timeline-segment-alt"
                                          style={{
                                            left: item.percentage + "%",
                                          }}
                                        >
                                          <b></b>
                                          <small data-tip data-for={item.id}>
                                            {item.name}
                                          </small>
                                        </div>

                                        <ReactTooltip
                                          place="top"
                                          type="dark"
                                          effect="float"
                                          id={item.id}
                                        >
                                          {item.tooltip}
                                        </ReactTooltip>
                                      </Fragment>
                                    )
                                )}
                              </div>

                              {/* END BOXCARS */}

                              {/* START SEGMENTS */}

                              <div className="timeline-segment-group">
                                <span className="caliper--topleft active"></span>
                                <span className="caliper--bottomleft active"></span>
                                <span
                                  className={
                                    item.segments[0].active
                                      ? "timeline-segment--active"
                                      : "timeline-segment"
                                  }
                                  style={{
                                    width: item.segments[0].percentage + "%",
                                  }}
                                >
                                  {item.segments[0].name}
                                </span>
                                <span className="caliper--topright active"></span>
                                <span className="caliper--bottomright active"></span>

                                <span className="buffer"></span>

                                <span className="caliper--topleft default"></span>
                                <span className="caliper--bottomleft default"></span>
                                <span
                                  className={
                                    item.segments[1].active
                                      ? "timeline-segment--active"
                                      : "timeline-segment"
                                  }
                                  style={{
                                    width: item.segments[1].percentage + "%",
                                  }}
                                >
                                  {item.segments[1].name}
                                  <span
                                    id="timeline-progress-label"
                                    style={{
                                      width: +item.segments[1].progress + "%",
                                    }}
                                  >
                                    {item.segments[1].progress + "%"}
                                  </span>
                                  <span
                                    id="timeline-progress"
                                    style={{
                                      width: +item.segments[1].progress + "%",
                                    }}
                                  ></span>
                                </span>
                                <span className="caliper--topright default"></span>
                                <span className="caliper--bottomright default"></span>

                                <span className="buffer"></span>

                                <span className="caliper--topleft"></span>
                                <span className="caliper--bottomleft"></span>
                                <span
                                  className={
                                    item.segments[2].active
                                      ? "timeline-segment--active"
                                      : "timeline-segment"
                                  }
                                  style={{
                                    width: item.segments[2].percentage + "%",
                                  }}
                                >
                                  {item.segments[2].name}
                                </span>
                                <span className="caliper--topright"></span>
                                <span className="caliper--bottomright"></span>

                                <span className="buffer"></span>
                                <span className="caliper--topleft"></span>
                                <span className="caliper--bottomleft"></span>
                                <span
                                  className="timeline-segment--end"
                                  style={{
                                    width: item.segments[3].percentage + "%",
                                  }}
                                >
                                  {item.segments[3].name}
                                </span>
                              </div>

                              {/* END SEGMENTS */}

                              {/* START DATES */}

                              <div className="timeline-segment-group">
                                <span
                                  className="timeline-segment-date"
                                  style={{
                                    width: item.segments[0].percentage + "%",
                                  }}
                                >
                                  <Moment
                                    format="D-MMM"
                                    date={item.segments[0].startDate}
                                  />
                                </span>

                                <span className="buffer"></span>

                                <span
                                  className="timeline-segment-date"
                                  style={{
                                    width: item.segments[1].percentage + "%",
                                  }}
                                >
                                  <Moment
                                    format="D-MMM"
                                    date={item.segments[1].startDate}
                                  />
                                </span>

                                <span className="buffer"></span>

                                <span
                                  className="timeline-segment-date"
                                  style={{
                                    width: item.segments[2].percentage + "%",
                                  }}
                                >
                                  <Moment
                                    format="D-MMM"
                                    date={item.segments[2].startDate}
                                  />
                                </span>

                                <span className="buffer"></span>
                                <span
                                  className="timeline-segment-date"
                                  style={{
                                    width: item.segments[3].percentage + "%",
                                  }}
                                >
                                  <Moment
                                    format="D-MMM"
                                    date={item.segments[3].startDate}
                                  />
                                </span>
                              </div>

                              {/* END DATE */}

                                {/* START TODAY MARKER */}
                              
                                <div className="timeline-segment-group">
                                {item.markers.map(
                                  (item, index) =>
                                    (item.name ==
                                    "TODAY") && (
                                      <Fragment key={index}>
                                        <div
                                          className="timeline-segment-today"
                                          style={{
                                            left: item.percentage + "%",
                                          }}
                                        >
                                          <b></b>
                                          <small>
                                            {item.name}
                                          </small>
                                        </div>

                                       
                                      </Fragment>
                                    )
                                )}
                              </div>

                              {/* END TODAY MARKER */}


                              {/* START WINDOW */}
                              <div className="timeline-segment-group-window">
                                <span
                                  className="timeline-segment-window"
                                  style={{
                                    width: item.segments[0].percentage + "%",
                                  }}
                                >
                                  {item.segments[0].window} DAYS
                                </span>

                                <span className="buffer"></span>

                                <span
                                  className="timeline-segment-window"
                                  style={{
                                    width: item.segments[1].percentage + "%",
                                  }}
                                >
                                  {item.segments[1].window} DAYS
                                </span>

                                <span className="buffer"></span>

                                <span
                                  className="timeline-segment-window"
                                  style={{
                                    width: item.segments[2].percentage + "%",
                                  }}
                                >
                                  {item.segments[2].window} DAYS
                                </span>

                                <span className="buffer"></span>
                                <span
                                  className="timeline-segment-window"
                                  style={{
                                    width: item.segments[3].percentage + "%",
                                  }}
                                >
                                  {item.segments[3].window} DAYS
                                </span>
                              </div>
                              {/* END WINDOW */}
                            </div>
                          </div>
                        )}

                      {!showActions && (
                        <ul className="task" filterable-group="true">
                          {(item.status !== "CLOSED" || showClosed) &&
                            (item.status !== "OPEN" || showOpen) &&
                            (item.status !== "REGISTRATION" || showUpcoming) &&
                            (item.status !== "EVALUATION" || showEval) &&
                            item.disciplines.map((item, index) => (
                              <div key={index}>
                                {keyword || disciplineFilter !== "" ? (
                                  ""
                                ) : (
                                  <h4>{item.name}</h4>
                                )}
                                {(item.name == disciplineFilter ||
                                  disciplineFilter == "") &&
                                  item.activities.map((item, index) => (
                                    <FilterableContent
                                      className="hilite"
                                      filterable-group="true"
                                      keyword={keyword}
                                      key={index}
                                    >
                                      {/* {keyword && <h4>{item.subscription.discipline.name}</h4>} */}
                                      <div
                                        filterable-group="true"
                                        className={
                                          !item.flags.excluded &&
                                          !item.flags.fullyResulted &&
                                          item.testEvent.status == "OPEN"
                                            ? "task-list-attention"
                                            : item.flags.excluded &&
                                              !item.flags.fullyResulted &&
                                              (item.testEvent.status ==
                                                "OPEN" ||
                                                item.testEvent.status ==
                                                  "CLOSED")
                                            ? "task-list-excluded"
                                            : "task-list"
                                        }
                                      >
                                        <div
                                          className="program-name"
                                          filterable-group="true"
                                        >
                                          <small>PROGRAM NAME</small>
                                          <strong>
                                            {item.subscription.program.name}
                                          </strong>
                                        </div>

                                        <div filterable-group="true">
                                          <small>ORDER CODE</small>
                                          <div className="order-code">
                                            {
                                              item.subscription.program
                                                .familyCode
                                            }
                                            <em>
                                              {
                                                item.subscription.program
                                                  .numberCode
                                              }
                                            </em>
                                            {
                                              item.subscription.program
                                                .suffixCode
                                            }
                                          </div>
                                        </div>

                                        <div>
                                          <small>SUBSCRIPTION</small>
                                          <b>{String(item.id)}</b>
                                        </div>

                                        <div>
                                          <small>SUBSCRIPTION TYPE</small>
                                          <b className="case-camel">
                                            {item.subscription.subscriptionType
                                              .code == "FULL" && (
                                              <a className="link-subscription-full">
                                                FULL
                                              </a>
                                            )}
                                            {item.subscription.subscriptionType
                                              .code == "REPORT_ONLY" && (
                                              <a className="link-subscription-alt">
                                                +RO
                                              </a>
                                            )}
                                            {item.subscription.subscriptionType
                                              .code == "SAMPLE_ONLY" && (
                                              <a className="link-subscription-alt">
                                                +SO
                                              </a>
                                            )}
                                          </b>
                                        </div>

                                        <div filterable-group="true">
                                          <small>Discipline</small>
                                          <b>
                                            {item.subscription &&
                                              item.subscription.discipline.name}
                                          </b>
                                        </div>

                                        <div
                                          className="task-docs-group"
                                          filterable-ignore="true"
                                        >
                                          {item.testEvent.status !==
                                            "CLOSED" && (
                                            <Fragment>
                                              <div className="task-docs video">
                                                <small>OVERVIEW</small>
                                                <Video />
                                              </div>
                                              <div className="task-docs">
                                                <small>INSTRUCTIONS</small>
                                                <b>
                                                  <i className="fas fa-file-pdf"></i>
                                                </b>
                                              </div>
                                              <div className="task-docs">
                                                <small>WORKSHEETS</small>
                                                <b>
                                                  <i className="fas fa-file-pdf"></i>
                                                </b>
                                              </div>
                                            </Fragment>
                                          )}

                                          {item.testEvent.status ==
                                            "CLOSED" && (
                                            <Fragment>
                                              <div className="task-docs">
                                                <small>PERFORMANCE</small>
                                                <b>
                                                  <i className="fas fa-file-pdf"></i>
                                                </b>
                                              </div>
                                              <div className="task-docs">
                                                <small>
                                                  HISTORICAL PERFORMANCE
                                                </small>
                                                <b>
                                                  <i className="fas fa-file-pdf"></i>
                                                </b>
                                              </div>
                                              <div className="task-docs">
                                                <small>
                                                  PARTICIPATION STATS
                                                </small>
                                                <b>
                                                  <i className="fas fa-file-pdf"></i>
                                                </b>
                                              </div>
                                            </Fragment>
                                          )}
                                        </div>

                                        <div
                                          className="task-cta"
                                          filterable-ignore="true"
                                        >
                                          {!item.flags.excluded &&
                                            item.testEvent.status == "OPEN" && (
                                              <Link
                                                to="/ted"
                                                className={
                                                  item.flags.fullyResulted
                                                    ? "link-cta--submitted"
                                                    : "link-cta"
                                                }
                                              >
                                                {item.flags.fullyResulted
                                                  ? "Results Submitted"
                                                  : "Submit Results"}{" "}
                                                {item.flags.fullyResulted && (
                                                  <i className="fas fa-angle-double-right"></i>
                                                )}
                                              </Link>
                                            )}

                                          {item.testEvent.status ==
                                            "REGISTRATION" &&
                                            item.flags.registrationMissing && (
                                              <Fragment>
                                                <div className="link-cta--register">
                                                  Register Instruments
                                                </div>
                                              </Fragment>
                                            )}

                                          {item.testEvent.status ==
                                            "REGISTRATION" &&
                                            !item.flags.registrationMissing && (
                                              <Fragment>
                                                <Link
                                                  to="/ted"
                                                  className="link-cta--registered"
                                                >
                                                  Registration Complete{" "}
                                                  <i className="fas fa-angle-double-right"></i>
                                                </Link>
                                              </Fragment>
                                            )}

                                          {item.testEvent.status ==
                                            "EVALUATION" && (
                                            <div>Evaluation in Progress</div>
                                          )}

                                          {!item.flags.excluded &&
                                            item.testEvent.status ==
                                              "CLOSED" && (
                                              <div className="task-status-complete">
                                                COMPLETE
                                              </div>
                                            )}

                                          {item.flags.excluded &&
                                          item.testEvent.status == "OPEN" ? (
                                            <div className="link-cta--excluded">
                                              This subscription has been
                                              excluded from this Test
                                              Event.&nbsp;&nbsp;
                                              <a className="link-text">
                                                Would you like to include it
                                                now?
                                              </a>
                                            </div>
                                          ) : (
                                            item.flags.excluded &&
                                            item.testEvent.status ==
                                              "CLOSED" && (
                                              <div className="link-cta--excluded">
                                                This subscription was exluded
                                                from this Test Event.
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </FilterableContent>
                                  ))}
                              </div>
                            ))}
                        </ul>
                      )}
                      {showActions && (
                        <Fragment>
                          <div className="nudge-lg"></div>
                          <ul className="task">
                            {(item.status !== "CLOSED" || showClosed) &&
                              (item.status !== "OPEN" || showOpen) &&
                              (item.status !== "REGISTRATION" ||
                                showUpcoming) &&
                              (item.status !== "EVALUATION" || showEval) &&
                              item.disciplines.map((item, index) => (
                                <div key={index} className="task-hilite">
                                  {item.activities.map(
                                    (item, index) =>
                                      item.flags.actionRequired &&
                                      !item.flags.excluded && (
                                        <div
                                          key={index}
                                          className={
                                            !item.flags.excluded &&
                                            !item.flags.fullyResulted &&
                                            item.testEvent.status == "OPEN"
                                              ? "task-list-attention hilite"
                                              : item.flags.excluded &&
                                                !item.flags.fullyResulted &&
                                                (item.testEvent.status ==
                                                  "OPEN" ||
                                                  item.testEvent.status ==
                                                    "CLOSED")
                                              ? "task-list-excluded hilite"
                                              : "task-list hilite"
                                          }
                                        >
                                          <div className="program-name">
                                            <small>PROGRAM NAME</small>
                                            <strong>
                                              {item.subscription.program.name}
                                            </strong>
                                          </div>

                                          <div>
                                            <small
                                              filterable-ignore="true"
                                              filterable-group="false"
                                            >
                                              ORDER CODE
                                            </small>
                                            <div className="order-code">
                                              {
                                                item.subscription.program
                                                  .familyCode
                                              }
                                              <em>
                                                {
                                                  item.subscription.program
                                                    .numberCode
                                                }
                                              </em>
                                              {
                                                item.subscription.program
                                                  .suffixCode
                                              }
                                            </div>
                                          </div>

                                          <div>
                                            <small>SUBSCRIPTION</small>
                                            <b>{String(item.id)}</b>
                                          </div>

                                          <div>
                                            <small>SUBSCRIPTION TYPE</small>
                                            <b className="case-camel">
                                              {item.subscription
                                                .subscriptionType.code ==
                                                "FULL" && (
                                                <a className="link-subscription-full">
                                                  FULL
                                                </a>
                                              )}
                                              {item.subscription
                                                .subscriptionType.code ==
                                                "REPORT_ONLY" && (
                                                <a className="link-subscription-alt">
                                                  +RO
                                                </a>
                                              )}
                                              {item.subscription
                                                .subscriptionType.code ==
                                                "SAMPLE_ONLY" && (
                                                <a className="link-subscription-alt">
                                                  +SO
                                                </a>
                                              )}
                                            </b>
                                          </div>

                                          <div className="task-docs-group">
                                            {item.testEvent.status !==
                                              "CLOSED" && (
                                              <Fragment>
                                                <div className="task-docs">
                                                  <small>VIDEO</small>
                                                  <Video />
                                                </div>
                                                <div className="task-docs">
                                                  <small>INSTRUCTIONS</small>
                                                  <b>
                                                    <i className="fas fa-file-pdf"></i>
                                                  </b>
                                                </div>
                                                <div className="task-docs">
                                                  <small>WORKSHEETS</small>
                                                  <b>
                                                    <i className="fas fa-file-pdf"></i>
                                                  </b>
                                                </div>
                                                <div className="task-docs">
                                                  <small>CONFIRMATION</small>
                                                  <b>
                                                    <i className="fas fa-file-pdf"></i>
                                                  </b>
                                                </div>
                                              </Fragment>
                                            )}

                                            {item.testEvent.status ==
                                              "CLOSED" && (
                                              <Fragment>
                                                <div className="task-docs">
                                                  <small>PERFORMANCE</small>
                                                  <b>
                                                    <i className="fas fa-file-pdf"></i>
                                                  </b>
                                                </div>
                                                <div className="task-docs">
                                                  <small>
                                                    HISTORICAL PERFORMANCE
                                                  </small>
                                                  <b>
                                                    <i className="fas fa-file-pdf"></i>
                                                  </b>
                                                </div>
                                                <div className="task-docs">
                                                  <small>
                                                    PARTICIPATION STATS
                                                  </small>
                                                  <b>
                                                    <i className="fas fa-file-pdf"></i>
                                                  </b>
                                                </div>
                                              </Fragment>
                                            )}
                                          </div>

                                          <div className="task-cta">
                                            {!item.flags.excluded &&
                                              item.testEvent.status ==
                                                "OPEN" && (
                                                <div
                                                  className={
                                                    item.flags.fullyResulted
                                                      ? "link-cta--submitted"
                                                      : "link-cta"
                                                  }
                                                >
                                                  {item.flags.fullyResulted
                                                    ? "Results Submitted"
                                                    : "Submit Results"}{" "}
                                                  {item.flags.fullyResulted && (
                                                    <i className="fas fa-angle-double-right"></i>
                                                  )}
                                                </div>
                                              )}

                                            {item.testEvent.status ==
                                              "REGISTRATION" &&
                                              item.flags
                                                .registrationMissing && (
                                                <Fragment>
                                                  <div className="link-cta--register">
                                                    Register
                                                  </div>
                                                </Fragment>
                                              )}

                                            {item.testEvent.status ==
                                              "REGISTRATION" &&
                                              !item.flags
                                                .registrationMissing && (
                                                <Fragment>
                                                  <Link
                                                    to="/ted"
                                                    className="link-cta--registered"
                                                  >
                                                    Registration Complete{" "}
                                                    <i className="fas fa-angle-double-right"></i>
                                                  </Link>
                                                </Fragment>
                                              )}

                                            {item.testEvent.status ==
                                              "EVALUATION" && (
                                              <div>Evaluation in Progress</div>
                                            )}

                                            {!item.flags.excluded &&
                                              item.testEvent.status ==
                                                "CLOSED" && (
                                                <div className="task-status-complete">
                                                  COMPLETE
                                                </div>
                                              )}

                                            {item.flags.excluded &&
                                            item.testEvent.status == "OPEN" ? (
                                              <div className="link-cta--excluded">
                                                This subscription has been
                                                excluded from this Test
                                                Event.&nbsp;&nbsp;
                                                <a className="link-text">
                                                  Would you like to include it
                                                  now?
                                                </a>
                                              </div>
                                            ) : (
                                              item.flags.excluded &&
                                              item.testEvent.status ==
                                                "CLOSED" && (
                                                <div className="link-cta--excluded">
                                                  This subscription was exluded
                                                  from this Test Event.
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )
                                  )}
                                </div>
                              ))}
                          </ul>
                        </Fragment>
                      )}
                      {/* <div className="nudge-lg"></div> */}
                    </section>
                  )
              )}

              <div className="nudge-xxl"></div>

              <a className="link-top" onClick={this.goTop}>
                <i className="fas fa-angle-up"></i>
              </a>
            </div>
          </Fragment>
        )}

        <div className="footer">
          Copyright © 2000 - 2020 Oneworld Accuracy Inc. | v20.7.2-SNAPSHOT |
          test-results2 | 07-Jul-2020 12:44:28 PM PDT
        </div>
      </Fragment>
    );
  }
}
