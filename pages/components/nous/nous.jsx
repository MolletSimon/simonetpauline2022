import styles from "./nous.module.css";
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
    <div className={styles.nous}>
      <div className={styles.video}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          light={true}
        />
      </div>
      <div className={styles.card}>
        <p className={styles.text} ref={textRef}></p>
      </div>
    </div>
  );
}
