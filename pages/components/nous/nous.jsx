import ReactPlayer from "react-player/youtube";
import Typed from "typed.js";
import React from "react";

export default function Nous() {
  let textRef = React.useRef(null);
  let typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "On est des grands bavards, mais parfois des images valent mieux que 1000 mots. Alors au cas où vous ne connaîtriez qu’un seul des deux mariés, on a décidé de se présenter au travers du regard de l’autre...",
      ],
      typeSpeed: 10,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(textRef.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="flex items-center min-h-screen">
      <div className="h-[20rem] w-[30rem] ml-60 z-50">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          light={true}
        />
      </div>
      <div className="h-[40rem] w-[50rem] bg-white flex justify-end items-center">
        <p
          className="text-2xl text-right text-[#7E0000] font-thin ml-80 mr-16"
          ref={textRef}
        ></p>
      </div>
    </div>
  );
}
