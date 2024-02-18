import Slider  from 'react-slick'

import Leaf from "../images/Leaf.png";
import circle from "../images/circle.png";
import overlapCircle from "../images/overlapCircle.png";
import img4 from "../images/img4.png";
import emoji1 from '../images/emoji1.png';
import flower from '../images/flower.png';
import sun from '../images/sun.png';
import smile from '../images/smile.png';

import { gsap } from "gsap"



import "./index.css";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };


const ContentPart = () => (
  <div className="main-container">
    <div className="first-page">
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
        <div className="section2">will do</div>
    </div>
    
    <div className="part-2">
        <h1 className="head">EQ beats IQ</h1>
        <p className="para">People with high emotional intellegence (EQ) live more fulfiled lives. They tend to be happier and have healthier relationships.</p>
        <p className="para">They are more successful in their pursuits and make for inspring leaders. According to science, they earn $29k a year.</p>
    </div>

    <div className="part-3">
        <div className="head-part">
            <h1 className="head1">Does this sound familiar...</h1>
            <img className="emoji-1" src={emoji1} alt="emoji1" />
        </div>

        <div className="slider-container">
            <Slider {...settings}>
                <div className="box box-color-1">
                    <img className="emoji-img" src="https://img.elo7.com.br/product/zoom/D55ED5/emoji-20x20cm-emoji.jpg" alt="emoji" />
                    <h1 className="box-head">You argue with a colleague</h1>
                    <p className="box-para">You get angry and defensive, instead of staying open and working towards common ground.</p>
                </div>

                <div className="box box-color-2">
                    <img className="emoji-img" src="https://img.elo7.com.br/product/zoom/D55ED5/emoji-20x20cm-emoji.jpg" alt="emoji" />
                    <h1 className="box-head">You argue with a colleague</h1>
                    <p className="box-para">You get angry and defensive, instead of staying open and working towards common ground.</p>
                </div>

                <div className="box">
                    <img className="emoji-img" src="https://img.elo7.com.br/product/zoom/D55ED5/emoji-20x20cm-emoji.jpg" alt="emoji" />
                    <h1 className="box-head">You argue with a colleague</h1>
                    <p className="box-para">You get angry and defensive, instead of staying open and working towards common ground.</p>
                </div>

                <div className="box box-angle box-color-3">
                    <img className="emoji-img" src="https://img.elo7.com.br/product/zoom/D55ED5/emoji-20x20cm-emoji.jpg" alt="emoji" />
                    <h1 className="box-head">You argue with a colleague</h1>
                    <p className="box-para">You get angry and defensive, instead of staying open and working towards common ground.</p>
                </div>

                <div className="box box-color-4">
                    <img className="emoji-img" src="https://img.elo7.com.br/product/zoom/D55ED5/emoji-20x20cm-emoji.jpg" alt="emoji" />
                    <h1 className="box-head">You argue with a colleague</h1>
                    <p className="box-para">You get angry and defensive, instead of staying open and working towards common ground.</p>
                </div>

                <div className="box box-color-5">
                    <img className="emoji-img" src="https://img.elo7.com.br/product/zoom/D55ED5/emoji-20x20cm-emoji.jpg" alt="emoji" />
                    <h1 className="box-head">You argue with a colleague</h1>
                    <p className="box-para">You get angry and defensive, instead of staying open and working towards common ground.</p>
                </div>

                <div className="box box-color-4">
                    <img className="emoji-img" src="https://img.elo7.com.br/product/zoom/D55ED5/emoji-20x20cm-emoji.jpg" alt="emoji" />
                    <h1 className="box-head">You argue with a colleague</h1>
                    <p className="box-para">You get angry and defensive, instead of staying open and working towards common ground.</p>
                </div>
            </Slider>
        </div>
    </div>

    <div className="part-4">
        <div className="img-sec">
            <img className="flow-img" style={{display: "block"}} src={flower} alt="flower" />
            <img className="img6" src={Leaf} alt="leaf" />
        </div>
        <p className='para'>Built out of frustration</p>
        <h1 className='head1' style={{padding: "0px"}}>Meet the ahead app</h1>
        <div className='anim-sec'>
            <div className='toys'>
                <img className="flow-img" style={{display: "block"}} src={sun} alt="sun" />

                <div style={{display:"flex", justifyContent:"center"}}>
                    <img className="smile-img" src={smile} alt="smile" />
                    <div style={{display:'flex', flexDirection:'column', alignItems: "flex-end"}}>
                        <img className="img2" src={circle} alt="circle" />
                        <img className="img3" src={Leaf} alt="leaf" />
                        <img
                        style={{ marginRight: "30%" }}
                        className="img2"
                        src={overlapCircle}
                        alt="overlap"
                        />
                    </div>
                </div>
            </div>
            <div className='text-sec'>
                <p className='para' style={{width: '80%'}}>A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional intelligence.</p>
                <p className='para' style={{width: '80%'}}>Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
            </div>
        </div>
    </div>

  </div>
);


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

export default ContentPart;
