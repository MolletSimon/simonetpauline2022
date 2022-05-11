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
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex md:items-center xl:flex-row md:flex-col-reverse min-h-screen ">
        <div className="xl:h-[20rem] xl:w-[40rem] 2xl:left-40 xl:z-50 bg-black xl:absolute xl:left-10">
          <video controls poster="/images/laugh.jpg">
            <source src="/videos/videoplayback.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className="xl:h-[40rem] xl:w-[50rem] xl:m-0 md:m-40 m-20 xl:bg-white xl:flex xl:justify-end 
        xl:items-center xl:z-40 xl:absolute 2xl:right-40 xl:right-10"
        >
          <p
            className="text-2xl xl:text-right text-center text-[#7E0000] font-thin xl:ml-80 xl:mr-16"
            ref={textRef}
          ></p>
        </div>
      </div>
    </>
  );
}
