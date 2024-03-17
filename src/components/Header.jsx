import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import getData from "../utils/GetUserData";

function Header({ state }) {
  const [userdiv, setUserdiv] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData().then((data) => {
      if (data?.aud) setUserdiv(true);
    });
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <header className="w-[97%] px-6 flex justify-between font-bold fixed top-3 mx-5  bg-black bg-opacity-50 rounded-2xl">
      <h1>
        <Link to="/">
          <img src="/assets/netflix.png" alt="" className="w-28" />
        </Link>
      </h1>
      <div className="flex items-center gap-4">
        <ul className="flex justify-center items-center gap-4 ">
          <li className=" text-black">
            <select
              name="language"
              id="language"
              className="p-2 bg-red-600 outline-none rounded "
            >
              <option value="eng">English</option>
              <option value="hindi">Hindi</option>
              <option value="ara">Arabic</option>
              <option value="fra">Francais</option>
            </select>
          </li>
        </ul>

        {userdiv ? (
          <div className="flex gap-4 items-center justify-center">
            <div className="rounded-xl flex gap-4">
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <button className="px-2 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-black">
                Sign OUT
              </button>
            </div>
          </div>
        ) : (
          loading && (
            <div className="flex gap-4">
              <div>
                <Button text="Sign IN" to="/signin" />
              </div>
              <div>
                <Button text="Sign UP" to="/signup" />
              </div>
            </div>
          )
        )}
      </div>
    </header>
  );
}

export default Header;
