import React from 'react';
import Swiper from 'react-id-swiper';
 
class WttjSwiper extends React.Component {
  render() {
    const params = {
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      breakpoints: {
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }
      }
    }

    return (
      <Swiper {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>
          <article>
            <q>Life is short, work somewhere awesome.</q>
          </article>
        </div>
        <div>Slide 4</div>
        <div>Slide 5</div>
        <div>Slide 6</div>
        <div>Slide 7</div>
        <div>Slide 8</div>
        <div>Slide 9</div>
        <div>Slide 10</div>
        <div>Slide 11</div>
        <div>Slide 12</div>
      </Swiper>
    )
  }
}

export default WttjSwiper;