import React from "react";

const Hero = () => {
  return (
    <div className="width-full h-[90vh]">
      <img
        src="https://the-villa-by-silavadee-pool-spa-resort-lamai-beach.hotelmix.my/data/Photos/OriginalPhoto/3220/322047/322047005/The-Villa-By-Silavadee-Pool-Spa-Resort-Koh-Samui-Exterior.JPEG"
        alt=""
        className=" brightness-50% contract-20% w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl"> Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic"> With SunSet Resort</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            nihil eaque cumque, expedita enim fugit assumenda cum deserunt
            voluptatum accusamus magnam earum, est ut quos facilis, laborum
            commodi molestias doloremque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
