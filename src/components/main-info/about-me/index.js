import React, { Component } from 'react';
import './styles.css';

class PersonalDetails extends Component {

  render() {
    const { scrollToPersonalInfo } = this.props;

    return (
      <div className="about-me">
        <p className="label"> About me...</p>
        <p>
          I am a Software Engineer with 8+ years of experience,
          including 3+ years in leadership roles. I possess a product-oriented mindset,
          strong management skills, good eye for detail and a profound sense of ownership.
        </p>
        <p className="more" onClick={scrollToPersonalInfo}>
          Read More...
        </p>
      </div>
    );
  }

}

export default PersonalDetails;
