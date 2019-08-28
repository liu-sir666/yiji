import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './myswiper.scss'
class MySwiper extends Component {
  state = {}
  componentDidMount() {
    const {
      className,
      pagination,
      loop,
      slidesPerView,
      autoplay,
      centeredSlides,
      spaceBetween,
      initialSlide,
      direction
    } = this.props
    new Swiper(`.${className}`, {
      loop: loop, //循环
      pagination: pagination,
      autoplay: autoplay,
      slidesPerView: slidesPerView,
      centeredSlides: centeredSlides,
      spaceBetween: spaceBetween,
      initialSlide: initialSlide,
      direction: direction
    })
  }
  render() {
    const { pics, className, pagination, width } = this.props

    return (
      <div className="swiper">
        <div className={`swiper-container ${className}`}>
          <div className="swiper-wrapper">
            {pics
              ? pics.map((ele, index) => (
                  <div key={index} style={{ width }} className="swiper-slide">
                    <img style={{ width: '100%' }} src={ele} alt="" />
                  </div>
                ))
              : '请稍等。。。。'}
          </div>

          <div
            style={{ display: pagination ? 'block' : 'none' }}
            className="swiper-pagination"
          />
        </div>
      </div>
    )
  }
}

export default MySwiper
