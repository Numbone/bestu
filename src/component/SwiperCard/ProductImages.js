import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs } from "swiper";

const ProductImages = (props) => {
  const [heightImg, setHeightImg] = useState(0);
  const [isWide, setIsWide] = useState(window.innerWidth);
  useEffect(() => {
    const select = document?.getElementById("img")?.offsetWidth;
    setHeightImg(select);
    function handleResize() {
      setIsWide(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      setHeightImg(select);
    };
  }, [isWide]);
  console.log(isWide);
  return (
    <>
      <Swiper
        Loop={true}
        pagination={true}
        spaceBetween={10}
        modules={[Thumbs, Pagination]}
        grabCursor={true}
      >
        {props?.images === undefined ? (
          <div></div>
        ) : (
          props?.images?.map((item, index) => (
            <SwiperSlide>
              <img
                id="img"
                src={item}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: heightImg,
                }}
                alt="SliderImage"
              ></img>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

ProductImages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImages;
