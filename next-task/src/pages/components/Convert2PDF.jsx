import React from 'react';

const data = [
  {
    imgUrl: 'https://images.hipdf.com/images2022/icons/pdf-word.svg',
    alt: 'PDF to Word',
    desc: 'Easily convert PDF to Word document.',
  },
  {
    imgUrl: 'https://images.hipdf.com/images2022/icons/PDF-PPT.svg',
    alt: 'PDF to PPT',
    desc: 'Convert PDF to Powerpoint online.',
  },
  {
    imgUrl: 'https://images.hipdf.com/images2022/icons/pdf-excel.svg',
    alt: 'PDF to Excel',
    desc: 'Convert PDF to xls for free.',
  },
  {
    imgUrl: 'https://images.hipdf.com/images2022/icons/PDF-JPG.svg',
    alt: 'PDF to JPG',
    desc: 'Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF images.',
  },
  {
    imgUrl: 'https://images.hipdf.com/images2022/icons/PDF-TXT.svg',
    alt: 'PDF to TXT',
    desc: 'Convert your PDF to TXT, and extract text from your PDF.',
  },
];

function Convert2PDF() {
  return (
    <>
      <div className="lg:px-20 pb-8 px-8 lg:pt-4">
        <h1 className="font-bold text-[30px] mb-[24px]">Convert From PDF</h1>
        <div className="flex flex-wrap gap-[32px]">
          {data.map((d) => {
            return (
              <>
                <a className="p-[24px] lg:w-64 w-[100%] border cursor-pointer duration-500 hover:shadow-xl rounded-md bg-white">
                  <img className="w-[65px]" src={d.imgUrl} alt={d.alt} />
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
