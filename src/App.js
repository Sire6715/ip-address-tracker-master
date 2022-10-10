import React from "react";
import Input from "./components/input";
import Map from "./components/map";
import { useEffect, useState } from "react";
import axios from "axios";



function App() {
  const [address, setAddress] = useState(null)



  useEffect(() => {
    try {
      axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress`)
        .then((res) => setAddress(res.data))
    } catch (error) {
      console.trace(error)
    }
  }, [])



  return (
    <div className="App font-Rubik">
      {address && <>
        <Input address={address} setAddress={setAddress} />
        <Map position={address} /></>}
        <section className="flex items-center justify-center bg-transparent">
          <h1>Challenge by <span className="text-blue-700">Frontend Mentor</span>. Coded by Your <span className="text-blue-700">sire</span>.</h1>
        </section>
    </div>
  );
}

export default App;
