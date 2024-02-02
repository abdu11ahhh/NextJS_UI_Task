import React from 'react';

const data = [{ imgUrl: '', alt: '', desc: ',' }];

function Convert2PDF() {
  return (
    <>
      <div className="lg:px-20 px-8 lg:pt-4">
        <h1 className="font-bold text-[30px] mb-[24px]">Your Bookmarks</h1>
        <div className="flex flex-wrap gap-[32px]">
          {data.map((d) => {
            return (
              <>
                <a className="p-[24px] lg:w-64 w-[100%] border cursor-pointer duration-500 hover:shadow-xl rounded-md bg-white">
                  <img className="w-[65px]" src={d.link} alt={d.alt} />
                  <h1 className="text-[18px] mt-[16px] font-bold">{d.alt}</h1>
                  <p className="text-[12px] mt-[12px] text-[grey]">{d.desc}</p>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Convert2PDF;
