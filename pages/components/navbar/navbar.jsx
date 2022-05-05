import styles from "./navbar.module.css";

export default function Navbar({ scrollToView }) {
  return (
    /**

.borderXwidth a:before,
.borderXwidth a:after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 2px;
    content: '';
    background: #7E0000;
    transition: all 0.6s;
}

.borderXwidth a:before {
    left: 0px;
    bottom: 0px;
}

.borderXwidth a:after {
    left: 0px;
    bottom: 0px;
}

.borderXwidth a:hover:before,
.borderXwidth a:hover:after {
    opacity: 1;
    width: 100%;
}

after :
    left: 0px;
    bottom: 0px;
        position: absolute;
    opacity: 0;
    width: 0%;
    height: 2px;
    content: '';
    background: #7E0000;
    transition: all 0.6s;
 */

    <div className="flex justify-evenly font-bold pt-8">
      <a
        className="text-[#7E0000] no-underline text-xl mt-0 mb-3 pt-3 pb-3 relative z-0 cursor-pointer"
        onClick={() => scrollToView("nous")}
      >
        NOUS
      </a>
      <a onClick={() => scrollToView("mariage")}>LE MARIAGE</a>
      <a onClick={() => scrollToView("infos")}>NOUS CONTACTER</a>
    </div>
  );
}
