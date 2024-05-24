import React from "react";

const HeroImageComponent = ({ children }: any) => {
  return (
    <section className="h-3/5 relative">
      <div className=" bg-gradient-to-b from-transparent to-100% via-80% via-transparent to-gray-800 h-full w-full absolute z-20 flex flex-row items-center">
        <div className="flex-grow"></div>
        <div className="flex-1 z-30">{children}</div>
      </div>
      <div className="bg-hero-image bg-cover bg-left-top h-full w-full absolute z-10"></div>
    </section>
  );
};

export default HeroImageComponent;
