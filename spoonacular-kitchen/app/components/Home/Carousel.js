"use client"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
export default  function Carousel ({ slides })  {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () =>{
    if(currentSlide === 0 ){
        setCurrentSlide(slides.length - 1);
    }
    else {
      setCurrentSlide(currentSlide - 1);
    }

  }
  const nextSlide = () =>{
    if(currentSlide === slides.length -1  ){
        setCurrentSlide(0);
    }
    else {
      setCurrentSlide(currentSlide + 1);
    }

  }
  return (
    <div className="overflow-hidden relative">
      <div className={`flex transition ease-out duration-300 `}
      style={{
        transform: `translateX(-${currentSlide * 100}%)`
      }}
      >
        {slides.map((slide,index) => {
          return <img key={"img " +index}  src={slide} alt="" />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between text-white px-4 text-4xl">
        <button  >
        <FaArrowAltCircleLeft onClick={previousSlide} />
        </button>
        <button>
        <FaArrowAltCircleRight  onClick={nextSlide} />
        </button>
      </div>
    </div>
  );
};


