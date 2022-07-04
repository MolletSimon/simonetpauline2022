import ReactPlayer from "react-player/youtube";
import Typed from "typed.js";
import React from "react";

export default function Nous() {
  return (
    <>
      <div className="flex md:items-center xl:flex-row flex-col-reverse md:min-h-screen mb-8">
        <div className="xl:h-[20rem] xl:w-[40rem] 2xl:left-40 xl:z-50 bg-black xl:absolute xl:left-10 hidden md:block">
          {/* <video controls playsInline preload="metadata">
            <source src="/videos/mariage.mov" type="video/mp4" />
          </video> */}
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/WRR23bS2Y2U"
          ></iframe>
        </div>
        <div className="xl:h-[20rem] xl:w-[40rem] 2xl:left-40 xl:z-50 bg-black xl:absolute xl:left-10 block md:hidden">
          {/* <video controls playsInline preload="metadata">
            <source src="/videos/mariage.mov" type="video/mp4" />
          </video> */}
          <iframe
            id="ytplayer"
            type="text/html"
            width="400"
            height="360"
            src="https://www.youtube.com/embed/WRR23bS2Y2U"
          ></iframe>
        </div>
        <div
          className="xl:h-[40rem] xl:w-[50rem] xl:m-0 md:m-40 m-20 xl:bg-white xl:flex xl:justify-end 
        xl:items-center xl:z-40 xl:absolute 2xl:right-40 xl:right-10"
        >
          <p className="text-2xl xl:text-right text-center text-[#7E0000] font-thin xl:ml-80 xl:mr-16">
            On est des grands bavards, mais parfois des images valent mieux que
            1000 mots. Alors au cas où vous ne connaîtriez qu’un seul des deux
            mariés, on a décidé de se présenter au travers du regard de
            l’autre...
          </p>
        </div>
      </div>
    </>
  );
}
