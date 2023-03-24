import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/carousel";

const Carousel = (props) => {
  const { items } = props;
  // console.log(items);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(items.length);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(items.length);
  }, [items]);

  const next = () => {
    if (currentIndex < length - 3) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item) => {
              return (
                <div>
                  <Link
                    to={`/product/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <img
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                      src={item.image}
                      key={item.id}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
