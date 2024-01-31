'use client';

import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { data } from '../data';
import { FaAngleRight } from 'react-icons/fa';
function Slider() {
  // const [wrapper, setWrapper] = useState(0);

  let wrapper;
  if (typeof window !== 'undefined') {
    wrapper = document.querySelector('.card-wrapper');
  }

  const handlePrevClick = () => {
    let width = wrapper.clientWidth;
    let totalWidth = wrapper.scrollWidth;
    wrapper.scrollLeft = wrapper.scrollLeft - width;
    if (wrapper.scrollLeft <= 0) {
      wrapper.scrollLeft = totalWidth - width;
    }
  };

  const handleNextClick = () => {
    let width = wrapper.clientWidth;
    let totalWidth = wrapper.scrollWidth;
    console.log(totalWidth);
    wrapper.scrollLeft = wrapper.scrollLeft + width;
    console.log(wrapper.scrollLeft);
    if (wrapper.scrollLeft + width >= totalWidth) {
      wrapper.scrollLeft = 0;
    }
  };
  return (
    <>
      <div className="lg:px-20 md:px-20 px-12 pt-12">
        <div className=" flex justify-between">
          <h1 className="font-bold text-[30px]">Convert to PDF</h1>
          <button className="bg-gray-200/80 px-6 text-[14px] hover:bg-gray-200 flex justify-center items-center gap-1 rounded-full p-1">
            ALL
            <FaAngleRight />
          </button>
        </div>
        <div className="relative lg:pr-9 pr-6">
          <button className="inline-block absolute top-[40%] left-[-40px] bg-white rounded-full p-3 border-[3px] border-gray-500">
            <FaLongArrowAltLeft
              onClick={handlePrevClick}
              color="grey"
              size={20}
            />
          </button>
          <button
            disabled={true}
            onClick={handleNextClick}
            className="inline-block right-arrow absolute top-[40%] right-[-40px] cursor-pointer bg-white rounded-full p-3 border-[3px] border-gray-500">
            <FaLongArrowAltRight color="grey" size={20} />
          </button>
          <div
            className={`flex card-wrapper lg:gap-[24px] gap-[16px] overflow-x-hidden scroll-smooth py-12`}>
            {data.map((d) => {
              return (
                <div
                  key={d.id}
                  className={`p-[24px] lg:w-[20%] md:w-[46.99%] w-[99%] shrink-0 border cursor-pointer duration-500 hover:shadow-xl rounded-md bg-white
                      `}>
                  <img className="w-[65px]" src={d.link} alt={d.alt} />
                  <h1 className="text-[20px] mt-[16px] font-bold">{d.alt}</h1>
                  <p className="text-[14px] mt-[12px] text-[grey]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
