import React from "react";
import { shoes, statistics } from "../index.js";
import { bigShoe1 } from "../../assets/images/index.js";

const Hero = () => {
  return (
    <>
      <div className="flex flex-row flex-1">
        <div>
          <p className="text-orange-500 pl-32 text-xl  font-montserrat">
            Our Summer collection
          </p>
          <div className="w-[55rem] ">
            <h1 className="text-[5rem] font-bold px-28 -tracking-tighter  text-wrap font-palanquin">
              The New Arrival{" "}
              <span className="text-red-400 hover:text-red-600">Nike</span>{" "}
              Shoes
            </h1>
            <p className="text-stone-500 w-[24rem] mx-32 my-10 text-lg">
              Discover stylish Nike arrivals, quality comfort, and innovation
              for your active life
            </p>
            <button className="bg-red-400 w-44 hover:bg-red-600 text-white py-4 pl-4 mx-32 rounded-2xl">
              Shop now
              <img
                className="inline px-3"
                src="../../assets/icons/arrow-right.svg"
              />
            </button>
          </div>
          <div className="flex flex-start flex-row ml-20">
            {statistics.map((item, i) => (
              <div className="flex-col mx-10 my-10" key={i}>
                {console.log(item)}
                <p className="font-bold text-3xl">{item.value}</p>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src={bigShoe1}
            alt=""
            width={440}
            height={440}
            className=" relative right-32 flex flex-1 justify-center items-center z-40 object-contain mr-40"
          />
          <div className=" relative right-32 flex flex-row gap-10 mr-32 mt-20 ">
            {shoes.map((item, i) => (
              <div key={i} className="bg-stone-400 w-36 h-36 p-4 rounded-lg hover:ring ring-red-500" ><img src={item.bigShoe}  /></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
