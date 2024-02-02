import React from 'react';

const data = [
  {
    link: 'https://images.hipdf.com/images2022/icons/editPDF.svg',
    alt: 'Edit PDF',
    desc: 'Use the best online tool to edit PDFs in your browser.',
  },
  {
    link: 'https://images.hipdf.com/images2022/icons/Crop-PDF.svg',
    alt: 'Crop PDF',
    desc: 'Crop PDF online to a selected area, adjust margin size swiftly.',
  },
  {
    link: 'https://images.hipdf.com/images2022/icons/replace-text-pdf.svg',
    alt: 'Replace Text',
    desc: 'The easiest way to replace text online.',
  },
];

function BookMarks() {
  return (
    <>
      <div className="lg:px-20 px-8 lg:pt-12 pt-8">
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

export default BookMarks;
