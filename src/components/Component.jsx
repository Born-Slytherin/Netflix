import React, { useEffect, useState } from "react";

function Component() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://65ed59d50ddee626c9b18026.mockapi.io/feature")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="h-screen mt-32">
      <h3 className="text-white text-3xl text-center font-bold ">Features</h3>
      <div className="grid grid-cols-3 gap-4 p-12 ">
        {data.map((result) => (
          <div
            className={`text-white rounded-xl border border-white flex flex-col justify-center items-center gap-2 p-6 text-center `}
          >
            <img src={result.image} alt="" className="w-60 h-40 rounded-xl" />
            <h4 className="text-2xl ">{result.name}</h4>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component;
