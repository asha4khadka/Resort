import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700"> Send Us a Message</h2>
      <p className="text-center text-gray-700 py-2"> We are standing by!</p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[1200px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7RSzBp2oZChfPDxmRovtHzTIpTQcBIvwRmQ&s"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="First" />
            <input className="border m-2 p-2" type="text" placeholder="Last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="E-mail"
            />
            <input className="border m-2 p-2" type="tel" placeholder="Phone " />
            <input
              className="border col-span2"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="border border-gray-500 col-span-2 m-2 "
              cols="30"
              rows="10"
            ></textarea>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
