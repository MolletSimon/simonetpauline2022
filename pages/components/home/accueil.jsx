import Navbar from "../navbar/navbar.jsx";
import React from "react";
import Nous from "../nous/nous";
import Mariage from "../mariage/mariage";
import Coordonnees from "../coordonnees/coordonnees";
import Liste from "../liste/liste";

export default function Accueil() {
  let nousRef = React.useRef(null);
  let mariageRef = React.useRef(null);
  let infosRef = React.useRef(null);
  let listeRef = React.useRef(null);

  const scrollToView = (page) => {
    switch (page) {
      case "nous":
        nousRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "mariage":
        mariageRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "infos":
        infosRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "liste":
        listeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className="min-h-screen bg-backphone bg-no-repeat bg-center bg-cover md:bg-top md:bg-fixed
      md:bg-backhome"
      >
        <Navbar scrollToView={scrollToView}></Navbar>

        <h1
          className="text-white font-brittany mt-20 text-7xl ml-8 font-thin
        md:text-9xl md:mt-64 md:ml-28"
        >
          Pauline et Simon
        </h1>
      </div>
      <div ref={nousRef} className="bg-[#F4F4F4]">
        <Nous></Nous>
      </div>
      <div ref={mariageRef} className="bg-white">
        <Mariage></Mariage>
      </div>
      <div ref={listeRef} className="bg-[#F4F4F4] min-h-screen">
        <Liste></Liste>
      </div>
      <div
        ref={infosRef}
        className="min-h-screen bg-backnousmobile md:bg-backnous bg-no-repeat bg:center md:bg-top md:bg-fixed bg-cover pt-1"
      >
        <Coordonnees></Coordonnees>
      </div>
    </>
  );
}
