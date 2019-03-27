import React from 'react';
import Swiper from 'react-id-swiper';

import ArrowLeftIcon from '../../icons/ArrowLeftIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon';

import Slide from './Slide';

import './Slider.scss';
import dataJson from './data.json';
 
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
    this.nbRows = parseInt(new URL(document.location).searchParams.get('rows'), 10) || 1;
    this.nbCols = parseInt(new URL(document.location).searchParams.get('columns'), 10) || 1;

    this.slides = dataJson.slides;
  }
 
  goNext() {
    if(this.swiper) this.swiper.slideNext();
  }
 
  goPrev() {
    if(this.swiper) this.swiper.slidePrev();
  }

  updateSlidesHeight() {
    const slides = Object.values(this.swiper.slides);
    const nbSlides = slides.length - 1;

    for(let i = 0; i < nbSlides; i++) {
      slides[i].style.height = `calc(100%/${this.nbRows})`;
    }
  }

  render() {
    const swiperParams = {
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true
      },
      slidesPerColumnFill: 'column',
      slidesPerView: this.nbCols,
      slidesPerGroup: this.nbCols,
      slidesPerColumn: this.nbRows,
      breakpoints: {
        768: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }
      }
    };

    const slides = this.slides.map((slide, index) => 
      <Slide key={index} slide={slide} />
    );

    return (
      <div className="Swiper">
        <header className="Swiper__header">
          <a className="headerLogo" href="#">
            <h1>Slider</h1>
          </a>

          <div className="Swiper__nav">
            <button type="button" onClick={this.goPrev}>
              <ArrowLeftIcon />
            </button>
            <button type="button" onClick={this.goNext}>
              <ArrowRightIcon />
            </button>
          </div>
        </header>
        <div className="Swiper__content">
          <Swiper {...swiperParams} ref={node => {if(node) this.swiper = node.swiper }}>
            {slides}
          </Swiper>
        </div>
        <footer className="Swiper__footer">
        </footer>
      </div>
    )
  }

  componentDidMount() {
    this.updateSlidesHeight();
  }
}

export default Slider;