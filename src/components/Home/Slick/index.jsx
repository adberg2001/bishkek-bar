import React, { Component, useState } from "react";
import Slider from "react-slick";
import style from "./style.module.sass"
import img1 from "./assets/homepage.jpg"
import img2 from "./assets/baby.jpg"
import img3 from "./assets/dominik-mecko-OgEAh3TcOFw-unsplash.jpg"
import img4 from "./assets/office.jpg"
import img5 from "./assets/relax.jpg"

export default class Slick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
    };
    const photos = [
      {id:1, img: img1},
      {id:2, img: img2},
      {id:3, img: img3},
      {id:4, img: img4},
      {id:5, img: img5}
    ]

    return (
      <div className={style.mainCont}>
        <Slider
          {...settings}
          style={{zIndex: "1"}}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}

        >
          {photos.map(i => <div key={i.id}><div className={style.mainSlide} style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)), url(${i.img})`}}/></div>)}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
        >
          {photos.map(i => <div key={i.id}><div className={style.secondSlide} style={{backgroundImage: `url(${i.img})`}}/></div>)}
        </Slider>
      </div>
    );
  }
}