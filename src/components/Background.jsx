import React from "react";

const Background = () => {
  return (
    <div className="absolute w-full h-screen z-[2]">
      <div className="absolute top-[3%] w-full py-10 flex justify-center text-xl text-zinc-300 ">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tight font-semibold text-zinc-900">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
