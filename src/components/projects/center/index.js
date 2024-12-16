import React, { Component } from 'react';
import './styles.scss';

class BlackHole extends Component {

  render() {

    return (
      <div className="black-hole">
        <div className ="singularityContainer">
          <div className ="vortex vortex-3"> </div>
          <div className ="vortex vortex-2"> </div>
          <div className ="vortex vortex-1"> </div>
          <div className="singularity"></div>
        </div>
      </div>
    );
  }

}

export default BlackHole;
