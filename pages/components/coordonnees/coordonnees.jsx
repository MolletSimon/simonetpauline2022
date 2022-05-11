import react from "react";

export default function Coordonnees() {
  return (
    <>
      <h1 className="text-5xl md:text-8xl text-center text-white font-brittany pt-20">
        Nos coordonnées
      </h1>
      <div
        className="shadow-2xl drop-shadow-2xl bg-[#B0B0B0] bg-opacity-50 rounded-xl mr-10 ml-10
      md:mr-28 md:ml-28 
      xl:mr-60 xl:ml-60 mt-20 pt-20 pb-20"
      >
        <div
          className="flex items-center justify-center flex-col text-2xl
          md:text-3xl"
          data-aos="fade-in"
        >
          <span className="font-montserratLightItalic">168 Avenue</span>
          <span className="font-montserratLightItalic">du Mont Riboudet</span>
          <div data-aos="fade-in">
            <span className="font-montserratLightItalic">76 000</span>
            <span className="font-montserratMedium"> Rouen</span>
          </div>
        </div>
        <div
          className="flex items-center justify-evenly mt-16"
          data-aos="fade-in"
        >
          <div
            className="flex flex-col items-center text-xl
          md:text-3xl"
          >
            <span className="font-montserratMediumItalic">Pauline</span>
            <span className="font-montserratLight">06.89.41.17.67</span>
          </div>
          <div
            className="flex flex-col items-center text-xl
          md:text-3xl"
          >
            <span className="font-montserratMediumItalic">Simon</span>
            <span className="font-montserratLight">06.70.05.93.27</span>
          </div>
        </div>
      </div>
    </>
  );
}
