import React, { useEffect, useState } from 'react'
import { GiCoffeeBeans } from "react-icons/gi";
import { AiOutlineLeftCircle,AiOutlineRightCircle } from "react-icons/ai";
import "./Style.css";

const Banner = () => {
  const images = [
    {
      image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80",
      title: "Daily Fresh Coffee",

    },
    {
      image: "https://images.unsplash.com/photo-1575930385416-1061ff7a4d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      title: "Now Seek Out For Coffee"
    },
    {
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZmZlZSUyMGJlYW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "A blend Especially for cold brew"
    }
  ]

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  // console.log(current);
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay">
              <GiCoffeeBeans className="coffee-icon"></GiCoffeeBeans>
                <h2 className="card_title">{image.title}</h2>
                <h3 className="card_title">Flat 50% Off</h3>
                <button className='btn_buy'>Buy Now</button>
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          <AiOutlineLeftCircle></AiOutlineLeftCircle>
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
        <AiOutlineRightCircle></AiOutlineRightCircle>
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Banner
