import Navbar from "../navbar/navbar.jsx";
import React from "react";
import Nous from "../nous/nous";
import Mariage from "../mariage/mariage";
import Coordonnees from "../coordonnees/coordonnees";

export default function Accueil() {
  let nousRef = React.useRef(null);
  let mariageRef = React.useRef(null);
  let infosRef = React.useRef(null);

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
    }
  };
  return (
    <>
      <div className="min-h-screen bg-backhome bg-no-repeat bg-top bg-fixed bg-cover">
        <Navbar scrollToView={scrollToView}></Navbar>
        <h1 className="font-brittany text-white text-9xl font-thin mt-64 ml-28">
          Pauline et Simon
        </h1>
      </div>
      <div ref={nousRef} className="min-h-screen bg-[#F4F4F4]">
        <Nous></Nous>
      </div>
      <div ref={mariageRef} className="min-h-screen bg-white">
        <Mariage></Mariage>
      </div>
      <div
        ref={infosRef}
        className="min-h-screen bg-backnous bg-no-repeat bg-top bg-fixed bg-cover pt-1"
      >
        <Coordonnees></Coordonnees>
      </div>
    </>
  );
}
