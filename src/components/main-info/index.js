import React, { Component } from 'react';
import Svg from 'react-svg';
import Label from './label';
import Logo from './logo';
import Details from './personal-details';
import AboutMe from './about-me';
import MySocial from './my-social';
import DownIcon from '../../assets/icons/chevron-down-solid.svg';
import './styles.scss';

class MainInfo extends Component {

  sectionRef = React.createRef();

  componentDidMount() {
    const { onGetSectionRef } = this.props;
    onGetSectionRef(this.sectionRef);
  }

  render() {
    const { scrollToPersonalInfo, scrollToProjects } = this.props;

    return (
      <div className="main-info-page" ref={this.sectionRef}>
        <div className="flex-table">
          <div className="main swing-in-top-fwd delay-1 ">
            <div className="info-field">
              <Label />
              <Logo />
              <Details />
            </div>
          </div>
          <div className="side">
            <div className="info-field swing-in-top-fwd delay-2">
              <AboutMe {...{ scrollToPersonalInfo }} />
            </div>
            <div className="info-field topSpacing swing-in-bottom-fwd delay-2">
              <MySocial />
            </div>
          </div>
        </div>
        <div className="flex-table secondary slide-in-br delay-1">
          <div className="info-field extras topSpacing">
            <div className="extra" onClick={scrollToPersonalInfo}>
              <p> My Profile </p>
               <Svg className="icon" src={DownIcon} />
            </div>
            <div className="extra" onClick={scrollToProjects}>
              <p> My Projects </p>
              <Svg className="icon right" src={DownIcon} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default MainInfo;
