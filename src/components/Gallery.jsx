import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4 ">
        <div className="sm:col-span-3 col-span-2 row-span-2 ">
          <img
            className="w-full h-full object-cover "
            src="https://media.cntraveler.com/photos/53da649fdcd5888e145b19cd/master/pass/wailea-beach-villas-maui-maui-hawaii-103878-5.jpg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover "
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/475155191.jpg?k=caeb1789cf910d18b8bbfb51ab611d3b3a35b376c5dd5e2f183a01eec99d06e9&o=&hp=1"
            alt="/"
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover "
            src="https://assets-global.website-files.com/658352c9dc46a8af3404d0e2/659d0315ccf38d7cbbbf2ee2_8bf2170c-ee64-4b92-a1ba-715087eb5a10.webp"
            alt="/"
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover "
            src="https://img.freepik.com/premium-photo/sunset-beach-with-finishing-boat-view_997534-44.jpg"
            alt="/"
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover "
            src="https://static.vecteezy.com/system/resources/previews/027/102/820/large_2x/palm-trees-silhouette-against-a-stunning-background-of-a-tropical-sunset-beach-free-photo.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
