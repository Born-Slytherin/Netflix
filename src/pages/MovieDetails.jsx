import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getData from "../utils/GetUserData";
import Loader from "../components/Loader";

function MovieDetails() {

  const [loading , setLoading]= useState(true)
  const { id } = useParams();
  const [movies, setMovies] = useState({});


  useEffect(() => {
    fetch(`https://65ed59d50ddee626c9b18026.mockapi.io/allmovies/${id}`)
      .then((res) => res.json())
      .then((movies) => setMovies(movies));
    setTimeout(()=>{
      setLoading(false)
    }, 2000);
  }, []);

  return loading ? (<Loader/>):(
    <div className="w-full h-full flex  gap-6 justify-center items-center p-12 my-32">
      {/* Image */}
      <div className="w-1/2 flex justify-end">
        <img
          src={movies.poster_path}
          alt=""
          className="w-[400px] h-[500px] rounded-xl"
        />
      </div>

      {/* Contents */}
      <div className=" w-1/2 h-full ">
        <div className="w-1/2 h-full flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h4 className="text-6xl font-bold text-red-600">
              {movies.original_title}
            </h4>
            <span className="text-white text-xl">
              release date: {movies.release_date}
            </span>
          </div>

          {/* Genre */}
          <div>
            {movies?.genres?.map((genre) => (
              <div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    className="w-6 h-6 text-green-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-white">{genre}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-white">{movies.overview}</p>
        </div>
      </div>
    </div>
  
  );
}

export default MovieDetails;
