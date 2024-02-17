import Leaf from "../images/Leaf.png";
import circle from "../images/circle.png";
import overlapCircle from "../images/overlapCircle.png";
import img4 from "../images/img4.png";

import { gsap } from "gsap"

import "./index.css";


gsap.to(".img1", {
  rotation: 300,
  transformOrigin: "center",
  ease: "none",
  duration: 5,
  repeat: false,
});

gsap.to(".img3", {
  rotation: 250,
  transformOrigin: "center",
  ease: "none",
  duration: 5,
  repeat: false,
});

const ContentPart = () => (
  <div className="main-page">
    <div className="section-1">
      <div className="upper-part">
        <img className="img1" src={Leaf} alt="leaf" />
        <img className="img2" src={circle} alt="circle" />
        <img className="img3" src={Leaf} alt="leaf" />
        <img
          style={{ marginRight: "30%" }}
          className="img2"
          src={overlapCircle}
          alt="overlap"
        />
      </div>

      <div className="middle-part">
        <img className="img4" src={circle} alt="img4" />
        <div>
          <p className="name">Ahead app</p>
          <h1 className="heading">Master your life by mastering emotions</h1>
        </div>
      </div>
      <div className="last-part">
        <img className="img5" src={img4} alt="img5" />
      </div>
    </div>
  </div>
);

export default ContentPart;
