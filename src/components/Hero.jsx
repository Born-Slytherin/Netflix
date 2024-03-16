import React, { useState, useEffect } from "react";
import Component from "./Component";
import Loading from "./Loading";
// import Allmovies from "./Allmovies";
import Categories from "./Categories";

function Hero() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);
  const [loading, setloading] = useState(true);

  function isClicked() {
    setCount(count + 1);
    setColor(!color);
  }

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section class="h-full text-white flex flex-col gap-4 justify-center items-center my-32">
          <h1 className="text-4xl text-center font-bold text-white">
            Welcome to
          </h1>
          <p
            className={`${
              color ? "text-red-600" : "text-white"
            } select-none text-6xl font-bold`}
            onClick={() => {
              isClicked();
            }}
          >
            NETFLIX {count + ".0"}
          </p>
          <p className="text-xl">Enjoy uninterrupted movies for free</p>

          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt=""/> */}
              {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt=""/> */}
              <video
                autoPlay
                loop
                muted
                className=" h-[140px] md:h-[300px] w-full rounded-xl"
              >
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
          <Component />
          <Categories />
          {/* <Allmovies /> */}
        </section>
      )}
    </>
  );
}

export default Hero;
