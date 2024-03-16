import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function Header({ state }) {
  return (
    <header className="w-[97%] px-6 flex justify-between font-bold fixed top-3 mx-5  bg-black bg-opacity-50 rounded-2xl">
      <h1>
        <Link to="/">
          <img src="/assets/netflix.png" alt="" className="w-28" />
        </Link>
      </h1>
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

        <div>
          <Button text="Sign IN" to="/signin" />
        </div>
        <div>
          <Button text="Sign UP" to="/signup" />
        </div>
      </ul>
    </header>
  );
}

export default Header;
