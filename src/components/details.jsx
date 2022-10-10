import React from "react";



const Details = ({address}) => {


  return (
    <div  
    className="my-auto flex flex-col md:flex md:flex-row  md:max-w-full bg-white z-10
     rounded-lg w-[80%] text-center py-6 md:py-8 md:justify-around md:items-center shadow-lg md:text-start">
      <div className="px-8 md:w-[25%]">
        <h1 className="text-[10px] selection:font-semibold text-slate-400 leading-7">IP ADDRESS</h1>
        <p className="font-bold md:text-[14px]  md:mt-3 leading-7 md:leading-0">{address?.ip}</p>
      </div>
      <div className="border-slate-500 vline px-8 md:w-[25%]">
        <h1 className="text-[10px]  font-semibold text-slate-400 leading-7">LOCATION</h1>
        <p className="font-bold md:text-[14px]  md:mt-3 leading-7 md:leading-0">{address?.location?.region},{address?.location?.country}</p>
      </div>
      <div className="border-slate-500 vline px-8 md:w-[25%]">
        <h1 className="text-[10px] font-semibold text-slate-400 leading-7">TIMEZONE</h1>
        <p className="font-bold md:text-[14px]  md:mt-3 leading-7 md:leading-0">UTC{address?.location?.timezone}</p>
      </div>
      <div className="border-slate-500 vline px-8 md:w-[25%]">
        <h1 className="text-[10px] font-semibold text-slate-400 leading-7">ISP</h1>
        <p className="font-bold md:text-[14px]  md:mt-3 leading-7 md:leading-0">{address?.isp}</p>
      </div>
    </div>
  );
};

export default Details;
