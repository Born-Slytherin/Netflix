import React from "react";
import { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://65e48c823070132b3b24e9dc.mockapi.io/home")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <div className="w-full p-12">
      {categories.map((category) => (
        <div className="my-6">
          <h4 className="text-2xl text-red-600 font-bold text-left">
            {category.title}
          </h4>
          <div className="w-full flex rounded-xl gap-6 overflow-x-scroll">
            {category.movies.map((movie, index) => (
              <div key={index} className=" border border-white">
                <img
                  src={movie?.poster_path}
                  alt=""
                  className="w-full"
                  width={100}
                />  
                <h4 className="text-xl font-bold text-left w-[200px]">
                  {movie?.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
