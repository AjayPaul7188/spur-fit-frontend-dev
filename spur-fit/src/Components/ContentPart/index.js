import Slider  from 'react-slick'

import {Chrono} from 'react-chrono'

import Leaf from "../images/Leaf.png";
import circle from "../images/circle.png";
import overlapCircle from "../images/overlapCircle.png";
import img4 from "../images/img4.png";
import emoji1 from '../images/emoji1.png';
import flower from '../images/flower.png';
import sun from '../images/sun.png';
import smile from '../images/smile.png';
import cry from '../images/cry.png';
import numer2 from '../images/numer2.png';
import number3 from '../images/number3.png';
import chro from '../images/chro.png';
import happy from '../images/happy.png'

import { gsap } from "gsap"



import "./index.css";

gsap.to(".img1", {
    scrollTrigger: ".img1",
    rotation: 300,
    transformOrigin: "center",
    ease: "none",
    duration: 5,
    repeat: 1,
  });
  
  gsap.to(".img3", {
    scrollTrigger: ".img3",
    rotation: 250,
    transformOrigin: "center",
    ease: "none",
    duration: 5,
    repeat: 1,
  });

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


const items = []



const ContentPart = () => (
  <div className="content-cont">
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

    <div className='part-5'>
        <div className='head-sec-4'>
            <div style={{width: "50%"}}>
                <p className='para' style={{width: '100%'}}>Wrong with self-improvement & how we're fixing it.</p>
                <h1 className='head1' style={{padding: "0px", marginTop: '0px'}}>Self-improvement. Ugh.</h1>
            </div>
            <div style={{width: "50%", alignSelf: 'center'}}>
                <img className="emoji-1" src={cry} alt="cry" />
            </div>
        </div>

        <div className='chrono-container'>
            <Chrono mode='VERTICAL'  items={items} itemWidth="500" hideControls="true" theme={{
                primary: "#4775d1",
                secondary: "#4775d1",
                cardBgColor: "transperent",
                cardForeColor: "violet",
                titleColor: "red",
            }}>
                <div>
                    <h1 className='chrono-head'>It's not as easy as 1-2-3.</h1>
                    <p className='para' style={{fontSize: "18px", width: "70%"}}>The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p>
                </div>

                <div>
                    <h1 className='chrono-head'>It's not as easy as 1-2-3.</h1>
                    <p className='para' style={{fontSize: "18px", width: "70%"}}>And bad behaviors die hard. Fortunately, we give you great, science- backed techniques to use.</p>
                </div>

                <div>
                    <h1 className='chrono-head'>It's not as easy as 1-2-3.</h1>
                    <p className='para' style={{fontSize: "18px", width: "70%"}}>Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.</p>
                </div>

                <div>
                    <h1 className='chrono-head'>It's not as easy as 1-2-3.</h1>
                    <p className='para' style={{fontSize: "18px", width: "70%"}}>Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.</p>
                </div>

                <div>
                    <h1 className='chrono-head'>It's not as easy as 1-2-3.</h1>
                    <p className='para' style={{fontSize: "18px", width: "70%"}}>Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.</p>
                </div>

                <div>
                    <h1 className='chrono-head'>It's not as easy as 1-2-3.</h1>
                    <p className='para' style={{fontSize: "18px", width: "70%"}}>Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.</p>
                </div>
            </Chrono>
        </div>
    </div>

    <div className="part-2" style={{marginTop: "20vh", marginBottom: "20vh"}}>
        <h1 className="head" style={{fontSize: "25px"}}>Be the best you with EQ</h1>
        <p className="para" style={{marginRight: "20px"}}>Not having your own emotions under control might be holding you back.</p>
        <p className="para">Additionally, not understanding those of others stops you from being parent, friend you can be.</p>
    </div>

    <div className='part-6'>
        <p className='para' style={{fontSize: "18px", width:"100%", textAlign:'center', fontWeight: "600"}}>Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
        <h1 className='head1' style={{marginTop:"0px"}}>Ever wondered what others thinks of you?</h1>
        <div className='chrono-cont'>
            <div style={{display:"flex", alignItems:"center", width: "90%", justifyContent:'center'}}>
                <img src={sun} alt="image1" />
                <hr className='hr-line'/>
                <img src={numer2} alt="image1" />
                <hr className='hr-line'/>
                <img src={number3} alt="image1" />
            </div>
            <div style={{display:"flex", alignItems:"center", width: "100%", justifyContent:'space-between'}}>
                <p className='para' style={{fontSize:"13px"}}>Answer questions on your social skills</p>
                <p className='para' style={{fontSize:"13px"}}>let others anonymously answer the same questions about you</p>
                <p className='para' style={{fontSize:"13px"}}>Find out where you and others see things the same way - and where out!</p>
            </div>
        </div>

        <img className='img-chr' src={chro} alt="chro"/>
    </div>

    <div className='part-7'>
        <p className='para'style={{margin:"0px", textAlign: "center"}}>We take privacy seriously</p>
        <h1 className='head1' style={{margin:"0px", textAlign: "center"}}>Before you get started</h1>
        <p className='para'style={{margin:"0px", textAlign: "center"}}>"We wont't share your answers with anyone (and wont't ever tell you which friends said what about you)"</p>
        <p className='para'style={{textAlign: "center"}}>with love, <span className='sign'>Team ahead</span></p>
        <button className='start-btn' type='button'>Start a test</button>
        <p className='sm-para'>Take only 5 minutes</p>
    </div>

    <div className='part-8'>
        <div className='section-a'>
            <h1 className='head' style={{width:"100%"}}>Work with us</h1>
            <img className='happy-img' src={happy} alt="happy" />
            <div>
                <h1 className='head3'>About</h1>
                <p className='para' style={{paddingLeft:"20px", width:"100%"}}>At ahead our goal is to make self- improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</p>
            </div>

            <div>
                <h1 className='head3'>Product</h1>
                <p className='para' style={{paddingLeft:"20px", width:"100%"}}>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
            </div>

        </div>

        <div className='section-b'>
            <h1 className='app-name'>ahead</h1>
            <div className='side-scroll'>
                <div className='side-cont'>
                    <h1 className='side-head'>Power through, even when the going gets tough</h1>
                    <p className='side-para'>We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p>
                </div>

                <div className='side-cont'>
                    <h1 className='side-head'>Learn more about who you are and where you want to go</h1>
                    <p className='side-para'>We ask the right questions to help you better understand why you do things the way you do.</p>
                </div>

                <div className='side-cont'>
                    <h1 className='side-head'>Play and grow together with others on the same journey</h1>
                    <p className='side-para'>Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!</p>
                </div>

                <div className='side-cont'>
                    <h1 className='side-head'>Power through, even when the going gets tough</h1>
                    <p className='side-para'>We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p>
                </div>

                <div className='side-cont'>
                    <h1 className='side-head'>Learn more about who you are and where you want to go</h1>
                    <p className='side-para'>We ask the right questions to help you better understand why you do things the way you do.</p>
                </div>

                <div className='side-cont'>
                    <h1 className='side-head'>Play and grow together with others on the same journey</h1>
                    <p className='side-para'>Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!</p>
                </div>
            </div>
        </div>
    </div>

    <div className='part-9'>
        <h1 className='head1'>Open vacancies</h1>

        <div className='rows'>
            <div className='items'>
                <h1 className='head4'>Senior Full-Stack Engineer</h1>
                <ul className='ul-list'>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>$65-85k, 0.5-1.5% equity share options</li>
                </ul>
                <button className='details-btn' type='button'>See Details</button>
            </div>

            <div className='items'>
                <h1 className='head4'>Senior Designer</h1>
                <ul className='ul-list'>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>$65-85k, 0.5-1.5% equity share options</li>
                </ul>
                <button className='details-btn' type='button'>See Details</button>
            </div>

            <div className='items'>
                <h1 className='head4'>uperstar Intern</h1>
                <ul className='ul-list'>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>$65-85k, 0.5-1.5% equity share options</li>
                </ul>
                <button className='details-btn' type='button'>See Details</button>
            </div>
        </div>
    </div>

  </div>
);



export default ContentPart;
