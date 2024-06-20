import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-50px]">
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          {" "}
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover border-4 border-white shadow-lg"
          src="https://img.freepik.com/premium-photo/bar-beach-sunset-party-view-from-bar-beach-palms-cozy-atmosphere_205121-2585.jpg?w=740"
          alt=""
        />
      </div>

      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          {" "}
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover border-4 border-white shadow-lg"
          src="https://img.freepik.com/premium-photo/beautiful-outdoor-views-patio-hotel-room-interior-generative-ai_506134-3453.jpg"
        />
      </div>

      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          {" "}
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover border-4 border-white shadow-lg"
          src="https://img.freepik.com/premium-photo/enjoying-sunset-beach-view-from-hotel-room_848747-50.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Activities;
