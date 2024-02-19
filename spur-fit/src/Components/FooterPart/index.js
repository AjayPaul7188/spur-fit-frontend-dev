import { IoLocationSharp } from "@react-icons/all-files/io5/IoLocationSharp";
import { BiEnvelope } from "@react-icons/all-files/bi/BiEnvelope";

import logo from '../images/logo.png';
import appstore from '../images/appstore.png';

import './index.css'

const FooterPart = () => (
    <div className='footer-cont'>
        <img className='logo' src={logo} alt="logo" />
        <h2 className='app-name' style={{alignSelf:'center'}}>ahead</h2>
        <div style={{display:'flex', alignItems:'center'}}>
            <IoLocationSharp />
            <p className="sm-para" style={{marginRight: "15px"}}>Auguststrage 26, 10117 Berlin</p>
            <BiEnvelope />
            <p className="sm-para">hi@ahead-app.com</p>
        </div>

        <img className="logo" src={appstore} alt="appstore" />
        
        <p className="sm-para">@ 2022 Ahead app. All rights reserved</p>
    </div>
)

export default FooterPart