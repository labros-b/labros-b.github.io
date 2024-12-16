import React, { Component } from 'react';
import './styles.css';

class Label extends Component {

  render() {

    return (
      <div
        className="label-component label"
        // onClick={() => { window.open('https://foqum.io') }}
      >
        Senior Front End Engineer
      </div>
    );
  }

}

export default Label;
