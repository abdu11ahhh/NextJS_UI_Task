import { useState, useRef, useEffect } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa6';
import { data } from '../data';

const Slider = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mt-8 px-[28px]">
      <div className="relative overflow-hidden">
        <div className="px-1 lg:px-[40px] mb-6 flex justify-between">
          <h1 className="font-bold text-[30px]">Convert to PDF</h1>
          <button className="bg-gray-200/80 px-6 text-[14px] hover:bg-gray-200 flex justify-center items-center gap-1 rounded-full p-1">
            ALL
            <FaAngleRight />
          </button>
        </div>
        <div className="w-full h-full">
          <button
            onClick={movePrev}
            className=" text-black border-2 bg-white z-10 border-[black] p-2 rounded-full top-[45%] left-[0px] absolute opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={isDisabled('prev')}>
            <FaLongArrowAltLeft className="z-0" />
          </button>
          <button
            onClick={moveNext}
            className="p-2 absolute top-[45%] right-4 border-[black] border-2 rounded-full  hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10"
            disabled={isDisabled('next')}>
            <FaLongArrowAltRight />
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-[32px] mx-12 overflow-x-hidden pb-10 scroll-smooth snap-x snap-mandatory">
          {data.map((d) => {
            return (
              <div
                key={d.id}
                className="carousel-item mx-2 group cursor-pointer duration-500 lg-hover:shadow-2xl hover:shadow-xl border rounded-md p-[24px] relative w-64 h-64 snap-start">
                <a className="h-full w-[100%] aspect-square block bg-no-repeat z-0">
                  <FaRegBookmark
                    size={24}
                    className="absolute right-6 group-hover:block  duration-500 hidden"
                  />
                  <img
                    src={d.link}
                    alt={d.alt}
                    className="w-[65px] aspect-square"
                  />
                  <h1 className="text-[18px] mt-[16px] font-bold">{d.alt}</h1>
                  <p className="text-[12px] mt-[12px] text-[grey]">{d.desc}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Slider;
