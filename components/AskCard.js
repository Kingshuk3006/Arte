import React from 'react';

const AskCard = () => {
  return (
    <div className="bg-[#1b1b1b88] rounded-xl border border-[#f9dbb341] w-full flex flex-col space-y-4 text-[#ffffffbe] font-Roboto_flex py-4 md:px-8 px-4">
      <section className="flex justify-start space-x-4 items-center">
        <img
          src="/images/user1.jpg"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h1 className="text-[#F9DBB3] text-lg">Kingshuk Sarkar</h1>
      </section>
      <section className="text-base px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.
      </section>
      <div className="md:text-right text-center pt-4">
        <button className="btn-brown w-fit text-sm px-2 py-2">
          Start Painting
        </button>
      </div>
    </div>
  );
};

export default AskCard;
