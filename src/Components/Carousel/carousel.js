import classNames from "classnames";
import React, { cloneElement, useEffect, useState } from "react";
import { carouselImageData } from "../../Assets/data/data";
import "./carousel.scss";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="Carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return cloneElement(child, { width: "100%" });
        })}
      </div>

      <div className="Carousel-footer">
        <div className="Carousel-details">
          <a href="">
            <h4>{carouselImageData[activeIndex].title}</h4>
            <p>{carouselImageData[activeIndex].date}</p>
          </a>
        </div>
        <div className="Carousel-indicators">
          {React.Children.map(children, (child, index) => {
            return (
              <span
                class={classNames(
                  "dot",
                  index === activeIndex && "dot--active"
                )}
                onClick={() => {
                  updateIndex(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
