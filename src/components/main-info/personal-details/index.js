import React, { Component } from 'react';
import './styles.css';

class PersonalDetails extends Component {

  render() {

    return (
      <div className="personal-details">
        <p>
          <span> Name: </span>
          <span> Lampros </span>
        </p>
        <p>
          <span> Surname: </span>
          <span> Barmpounis </span>
        </p>
        <p>
          <span> E-mail: </span>
          <span className="email">
            <a href = "mailto: labros_b@hotmail.com"> labros_b@hotmail.com  </a>
          </span>
        </p>
      </div>
    );
  }

}

export default PersonalDetails;
