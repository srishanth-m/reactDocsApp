import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {

  const refs = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, ratione",
      fileSize: ".9mb",
      close: true,
      tags: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={refs} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item , index) => (
        <Card data={item} key={index} refs={refs} />
      ))}
    </div>
  );
}

export default Foreground;
