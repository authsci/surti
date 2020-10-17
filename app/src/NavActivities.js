import React, {Fragment} from "react";
import UserSettings from './UserSettings';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      login: [],
      loading: true,
      isActive: false,
      showMenu: false
    }

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY < 60) {
        this.setState({ showMenu: false });
    } else {
        this.setState({ showMenu: true });
    }
}
  
render() {

  return (

    <Fragment>

        <div className="nav-activities">

          <div className={this.state.showMenu ? 'nav-activities-left nudge-right desktop' : 'nav-activities-left desktop'}>
          { this.state.showMenu && 
          <Link to="/" className="link-inert fade-in">
            <img src="/img/logo-icon.png" height="30" /> <strong>Extimacies</strong>&nbsp;<span>Critical Theory from the Global South</span>
          </Link> }  
          </div>
         
          <div className={this.state.showMenu ? 'nav-activities-left nudge-right mobile' : 'nav-activities-left mobile'}>
          { this.state.showMenu && 
          <Link to="/" className="link-inert fade-in">
            <img src="/img/logo-icon.png" height="30" />
          </Link> }  
          </div>

          <div className={this.state.showMenu ? 'nav-activities-right nudge-left desktop' : 'nav-activities-right nudge-right desktop'}>
          { this.state.showMenu && <UserSettings /> }
          </div>
      
          <div className={this.state.showMenu ? 'nav-activities-right nudge-left mobile' : 'nav-activities-right nudge-right mobile'}>
          <UserSettings/>
          </div>

        </div>
            
      </Fragment>

    )
  }
};