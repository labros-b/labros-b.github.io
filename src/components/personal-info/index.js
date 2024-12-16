import React, { Component } from 'react';
import CloudWord from './cloud-word';
import { skillWords } from './cloud-word/words';
import SmallCard from './small-card';
import contents from './contents';

import './styles.scss';

class PersonalInfo extends Component {

  // To use different animations (not used)
  /*
  transitions = [
    { prev: 'career', next: 'studies', prevAnim: 'shrink', nextAnim: 'grow' },
    { prev: 'career', next: 'interests', prevAnim: 'shrink', nextAnim: 'grow' },
    { prev: 'studies', next: 'interests', prevAnim: null, nextAnim: 'moveDown' },
    { prev: 'studies', next: 'career', prevAnim: 'shrink', nextAnim: 'grow' },
    { prev: 'interests', next: 'studies', prevAnim: null, nextAnim: 'moveUp' },
    { prev: 'interests', next: 'career', prevAnim: 'shrink', nextAnim: 'grow' },
  ]
  */

  constructor(props) {
    super(props);
    this.cloudWordRenderPoint = 948;
    const cloudWord = props.width > this.cloudWordRenderPoint;
    this.state = { selected: 'career', showCloudWord: cloudWord };
  }

  state = { selected: 'career', showCloudWord: true };
  sectionRef = React.createRef();

  static setContent(selected) {
    let text = null;

    if (selected === 'career') text = contents[0].content;
    else if (selected === 'studies') text = contents[1].content;
    else if (selected === 'interests') text = contents[2].content;
    else text = [];

    return text.map((parag, i) => <p key={`paragraph-${i}`}> { parag } </p>);
  }

  componentDidMount() {
    const { onGetSectionRef } = this.props;
    onGetSectionRef(this.sectionRef);
  }

  componentDidUpdate(prevProps, prevState) {
    const { width } = this.props;
    const { selected, figureAnimation } = this.state;
    if (selected !== prevState.selected ||
        figureAnimation !== prevState.figureAnimation ||
        width !== prevProps.width) {
      this.renderCloudWordAsync();
    }
  }

  renderCloudWordAsync() {
    const { width } = this.props;
    const { selected, figureAnimation, showCloudWord } = this.state;
    if (selected === 'career' && figureAnimation !== 'shrink' && width > this.cloudWordRenderPoint) {
      if (!showCloudWord) {
        setTimeout(() => { this.setState({ showCloudWord: true }) }, 250);
      }
    } else {
      if (showCloudWord) {
        this.setState({ showCloudWord: false });
      }
    }
  }

  swapContent(nextSelected) {
    const { selected } = this.state;
    const timeout = 490;

    if (selected !== nextSelected) {
    /* const { prevAnim, nextAnim } = this.transitions.find(trans =>
        trans.prev === selected && trans.next === nextSelected) */
      this.setState({ figureAnimation: 'shrink' }, () =>
        setTimeout(() => {
          this.setState({ selected: nextSelected, figureAnimation: 'grow' })
        }, timeout)
      );
    }
  }

  renderContent(cat) {
    const { selected } = this.state;
    const toggleInClass = (cat === selected) ? 'toggleIn-info' : null;

    return (
      <div className={`info-container ${toggleInClass}`}>
        <div className="hiddenField"> </div>
        <div className="info-content"> {PersonalInfo.setContent(selected)} </div>
      </div>
    )
  }

  renderCloudWord() {
    const { showCloudWord } = this.state;
    if (showCloudWord) {
      return (
        <div className="cloud">
          <CloudWord words={skillWords} />
        </div>
      );
    }
    return null;
  }

  renderSmallCards() {
    return contents.map((content, index) => (
      <SmallCard
        key={`${content.category}-content`}
        image={content.image}
        title={content.title}
        content={content.smallContent}
        onClick={() => this.swapContent(content.category)}
      />
    ));
  }

  render() {
    const { selected, figureAnimation } = this.state;

    return (
      <div ref={this.sectionRef} className={`personal-info-page ${selected}-info-page`}>
        <div className="overlay">
          {this.renderContent('career')}
          {this.renderContent('studies')}
          {this.renderContent('interests')}
          <div className="cards-field">
            {this.renderCloudWord()}
            <div className={`figure ${figureAnimation}`}></div>
            {this.renderSmallCards()}
          </div>
          <div className="bottom-curve"></div>
        </div>
      </div>
    );
  }

}

export default PersonalInfo;
