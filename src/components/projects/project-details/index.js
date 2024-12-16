import React, { Component } from 'react';
import Svg from 'react-svg';
import ExitIcon from '../../../assets/icons/times-solid.svg';
import './styles.scss';

class ProjectsDetails extends Component {

  static getLink(linkType, link) {
    let message;
    let icon;

    if (link) {
      if (linkType === 'online') {
        message = 'Try it Online';
        icon = 'play-circle-solid.svg';
      } else if (linkType === 'playstore') {
        message = 'Try on PlayStore';
        icon = 'google-play.svg';
      } else if (linkType === 'github') {
        message = 'Source Code';
        icon = 'code-solid.svg';
      } else if (linkType === 'youtube') {
        message = 'Video';
        icon = 'youtube.svg';
      } else if (linkType === 'youtube2') {
        message = 'Video(2)';
        icon = 'youtube.svg';
      } else if (linkType === 'soon') {
        message = 'Material coming soon...';
        icon = 'code-solid.svg';
      } else {
        return null;
      }

      return (
        <div className="link" onClick={() => link !== '#' ? window.open(link) : null }>
          <p> {message} </p>
          <Svg className="icon" src={require(`../../../assets/icons/${icon}`)} />
        </div>
      );
    }

    return null;
  }

  state = {
    animation: null,
    title: "My Projects",
    content: [
      `Here you can see examples of my work and personal projects!`,
      `In the personal projects you can also see the source code while some
      of them you can see them on video or try them yourself.`,
    ],
    postContentHref: {
      preHrefText: `Some projects are not maintained anymore and the links might stop working. \n
        For newer projects please visit my`,
      hrefText: 'GitHub profile',
      hrefUrl: 'https://github.com/labrosb',
      postHrefText: '',
    },
    defaultModal: true,
    image: { src:'geek-boy-laptop.png' },
    links: {},
  };

  componentDidMount() {
    this.setProjectDetails();
  }

  setProjectDetails() {
    const { project } = this.props;

    if (project) {
      const { title, content, postContentHref, image, links } = project;
      const text = content.map((parag, i) => <p key={`paragraph-${i}`}> { parag } </p>);
      this.setState({
        title,
        content: text,
        postContentHref,
        image,
        links,
        defaultModal: false,
        animation: 'slide-in-back',
      });
    } else {
      const { content } = this.state;
      const text = content.map((parag, i) => <p key={`paragraph-${i}`}> { parag } </p>);
      this.setState({ content: text, animation: 'slide-in-back' });
    }
  }

  exitProjectDetails() {
    const { onExit } = this.props;
    const timeout = 490;

    this.setState({ animation: 'shrink' }, () =>
      setTimeout(() => { onExit() }, timeout)
    );
  }

  renderImage() {
    const { defaultModal, image } = this.state;
    const { src, smallW } = image;
    if (!defaultModal && src) {
      const smallWClass = smallW ? 'smallW' : null;
      return (
        <div className={`imageContainer ${smallWClass}`}>
          <img src={require(`../../../assets/project-thumbs/${src}`)} alt=''/>
        </div>
      )
    }
    return null;
  }

  renderDefaultImage() {
    const { defaultModal, image } = this.state;
    const { src } = image;
    if (defaultModal && src) {
      return (
        <div className='defaultImageContainer'>
          <img src={require(`../../../assets/project-thumbs/${src}`)} alt=''/>
        </div>
      )
    }
    return null;
  }

  renderPostContentHref() {
    const { postContentHref: content } = this.state;
    if (!content) return null;
    return (
      <p>
        {content.preHrefText ? `${content.preHrefText} ` : ''} 
        {content.hrefUrl ? (
          <a className="contentHref" target="_blank" rel="noopener noreferrer" href={content.hrefUrl}>
            {content.hrefText || content.hrefUrl}
          </a>
          ) : null}
      </p>
    );
  }

  renderButtons() {
    const { links } = this.state;
    const { online, playStore, github, youtube, youtube2, soon } = links;
    const hidden = online || playStore || github || youtube || youtube2 || soon ? null : 'hidden';
    return (
      <div className={`links-container ${hidden}`}>
        {ProjectsDetails.getLink('online', online)}
        {ProjectsDetails.getLink('playstore', playStore)}
        {ProjectsDetails.getLink('youtube', youtube)}
        {ProjectsDetails.getLink('youtube2', youtube2)}
        {ProjectsDetails.getLink('github', github)}
        {ProjectsDetails.getLink('soon', soon)}
      </div>
    );
  }

  render() {
    const { title, content, animation, defaultModal } = this.state;
    const def = defaultModal ? 'default' : null;

    return (
      <div className='projects-details'>
        <div className='background'>
          <div className={`container ${animation} ${def}`}>
            <Svg className='x' src={ExitIcon} onClick={() => this.exitProjectDetails()} />
            {this.renderDefaultImage()}
            <div>
              <div className='title'>
                <p> { title } </p>
              </div>
              <div className='content'>
                {this.renderImage()}
                { content }
                {this.renderPostContentHref()}
              </div>
              {this.renderButtons()}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectsDetails;
