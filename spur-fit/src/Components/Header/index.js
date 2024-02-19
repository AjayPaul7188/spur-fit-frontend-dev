import logo from '../images/logo.png';

import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="logo"
        src={logo}
        alt="logo"
      />

      <ul className="list">
        <li className="each-item">Emotions</li>
        <li className="each-item">Manifesto</li>
        <li className="each-item">Self-Awareness test</li>
        <li className="each-item">Work with us</li>
      </ul>

      <button className="button" type="button">
        Download app
      </button>
    </div>
  </nav>
);

export default Header;
