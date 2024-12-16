import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';

const maxWords = 10;
const options = {
  colors: ['#d5dbe3','#BCBCBC','#f78e8e','#a8a8f4'],
  enableTooltip: false,
  padding: 1.5,
  fontSizes: [10, 20],
  transitionDuration: 1000,
};


class CloudWord extends Component {

  render() {
    const { words } = this.props;

    return(
      <ReactWordcloud
        words={words}
        maxWords={maxWords}
        options={options}
      />
    )
  }

}

export default CloudWord;
