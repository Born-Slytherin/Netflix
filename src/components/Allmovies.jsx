import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Allmovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://65ed59d50ddee626c9b18026.mockapi.io/allmovies")
      .then((res) => res.json())
      .then((movies) => setMovies(movies));
  }, []);

  return (
    <div className="my-32">
      <h4 className="text-3xl font-bold text-left text-red-600 ml-12">
        All movies
      </h4>
      <div className="grid grid-cols-4 gap-4 p-12 ">
        {movies.map((result) => (
          <div
            className={`text-white rounded-xl border border-white flex flex-col justify-end items-center gap-2  text-center relative w-full h-[200px]`}
          >
            <Link
              to={`/allmovies/${result._id}`}
              className="w-full h-full rounded-xl absolute"
            >
              <img
                src={result.backdrop_path}
                alt=""
                className="w-full h-full rounded-xl absolute z-10 opacity-50"
              />
            </Link>
            <h4 className="text-xl font-bold text-left z-20">
              {result.original_title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allmovies;
