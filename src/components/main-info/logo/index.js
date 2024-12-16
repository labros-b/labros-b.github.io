/* eslint-disable no-undef */
import React, { Component } from 'react';
import Pieces from '../../../utilities/pieces';
import avatar from '../../../assets/avatar.png';
import welcome from '../../../assets/welcome.png';
import './styles.css';

class Avatar extends Component {

  constructor() {
    super();
		this.isAnimating = false;
  }

  componentDidMount() {
		this.piecesObj = new Pieces(document.querySelector('.avatar'), {
			pieces: { rows: 14, columns: 12 },
			delay: [0, 40],
		});
    setTimeout(() => { this.openImage(avatar) }, 2600);
  }

  openImage = (item) => {
    if (this.isAnimating) {
      return false;
    }

    this.isAnimating = true;

    this.piecesObj.animate({
      duration: 200,
      easing: 'easeOutQuad',
      delay: (t, i, l) => parseInt(t.dataset.row) * parseInt(t.dataset.delay),
      translateX: (t, i) => `${anime.random(-50, 50)}px`,
      translateY: (t, i) => `${anime.random(-800, -200)}px`,
      rotateZ: (t, i) => `${anime.random(-45, 45)}deg`,
      opacity: 0,
      complete: () => {
        this.piecesObj.setImage(item)
        this.piecesObj.animate({
          duration: 500,
          easing: [0.3, 1, 0.3, 1],
          delay: (t, i, l) => parseInt(t.dataset.row) * parseInt(t.dataset.delay),
          translateX: 0,
          translateY: () => [anime.random(200, 800) + 'px','0px'],
          rotateZ: 0,
          opacity: {
            value: 1,
            duration: 500,
            easing: 'linear'
          },
          complete: () => {
            this.isAnimating = false
            this.forceUpdate()
          }
        })
      }
    });
  }

  render() {
    return (
      <div
        className="avatar pieces"
        style={{ backgroundImage: `url(${welcome})` }}>
      </div>
    )
  }

}

export default Avatar;
