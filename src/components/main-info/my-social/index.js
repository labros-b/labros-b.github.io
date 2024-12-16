import React, { Component } from 'react';
import linkedIn from '../../../assets/linkedin-icon.png';
import youtube from '../../../assets/youtube.png';
import github from '../../../assets/github.png';
import './styles.css';

class MySocial extends Component {

  render() {

    return (
      <div className="my-social">
        <img
          src={linkedIn}
          alt="LinkedIn"
          onClick={() => {
            window.open('https://www.linkedin.com/in/labrosb/', "_blank");
          }}
        />
        <img
          src={github}
          alt="GitHub"
          onClick={() => {
            window.open('https://github.com/labrosb', "_blank");
          }}
        />
        <img
          src={youtube}
          alt="YouTube"
          onClick={() => {
            window.open('https://www.youtube.com/user/TheLabrosb/videos', "_blank");
          }}
        />
      </div>
    )
  }

}

export default MySocial;
