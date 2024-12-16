import React, { Component } from 'react';
import './styles.scss';

class SmallCard extends Component {

  render() {
    const { title, content, onClick, image } = this.props;
    return (
      <div className="small-card" onClick={onClick}>
        <p className="label"> { title } </p>
        <div className="image">
          <img src={require(`../../../assets/icons/${image}`)} alt="logo" />
        </div>
        <p className="content"> { content } </p>
      </div>
    );
  }

}

export default SmallCard;
