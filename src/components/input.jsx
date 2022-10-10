import React, { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import Details from "./details";
import axios from "axios";

const Input = (props) => {
  const [ipData, setIpData] = useState("");

  const newAddress = async () => {
    const res = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_API_KEY
      }&${
        checkIpAddress.test(ipData)
          ? `ipAddress=${ipData}`
          : checkDomain.test(ipData)
          ? `domain=${ipData}`
          : ""
      }`
    );

    props.setAddress(res.data);
  };

  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  const handleChange = (e) => {
    setIpData(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    newAddress();
  }

  return (
    <section className="flex flex-col justify-center items-center relative z-20">
      <div className="address--container flex flex-col justify-center items-center relative w-full">
        <h1 className="capitalize text-2xl text-neutral-100 text-bold mb-8">
          ip address tracker
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex  md:min-w-[35%] shadow-lg mb-40 md:mb-36 lg:mb-[7em]"
        >
          <input
            value={ipData}
            onChange={handleChange}
            placeholder="search for any ip address or domain"
            type="text"
            className="px-8 py-3 w-full mouse-pointer font-semibold cursor-pointer"
          />
          <button onClick={newAddress} className="p-0">
            <img src={arrow} alt={arrow} className="bg-black hover:bg-slate-900 p-[1em] w-[4em]" />
          </button>
        </form>
      </div>

      <div className=" mx-auto flex justify-center items-center absolute -bottom-[10em]  md:-bottom-[5em] min-w-[85%] md:min-w-[90%]">
        <Details ipData={ipData} address={{ ...props.address }} />
      </div>
    </section>
  );
};

export default Input;
