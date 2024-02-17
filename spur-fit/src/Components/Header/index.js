import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="logo"
        src="https://tse2.mm.bing.net/th?id=OIP.Zu5IOKkCYQepVFv4G_03qgHaGL&pid=Api&P=0&h=180"
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
