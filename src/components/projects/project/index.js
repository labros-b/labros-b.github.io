import React, { Component } from 'react';
import './styles.scss';

class Project extends Component {

  render() {
    const { name, onClick } = this.props;

    return (
      <div className="space-bubble" {...{ onClick }}>
        <div className="bubble-content"> { name } </div>
      </div>
    );
  }

}

export default Project;
