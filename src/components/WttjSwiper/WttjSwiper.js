import React from 'react';
import Swiper from 'react-id-swiper';

import ArrowLeftIcon from '../../icons/ArrowLeftIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon';

import WttjSwiperSlide from './WttjSwiperSlide';

import './WttjSwiper.scss';
import dataJson from './data.json';
 
class WttjSwiper extends React.Component {
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
      <WttjSwiperSlide key={index} slide={slide} />
    );

    return (
      <div className="Swiper">
        <header className="Swiper__header">
          <a className="headerLogo" href="https://www.welcometothejungle.co/companies/wttj">
            <img src="https://cdn.welcometothejungle.co/uploads/organization/logo/2636/144492/thumb_wttj.png" alt="Welcome to the Jungle" />
            <h1>Welcome to the Jungle</h1>
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
          <a href="https://www.welcometothejungle.co">
            <img src="https://cdn.welcometothejungle.co/wttj-front/assets/images/logos/wttj-long.svg" alt="" />
          </a>

          <a className="Swiper__profileLink" href="https://www.welcometothejungle.co/companies/wttj">Voir le profil</a>
        </footer>
      </div>
    )
  }

  componentDidMount() {
    this.updateSlidesHeight();
  }
}

export default WttjSwiper;