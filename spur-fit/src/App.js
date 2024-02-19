import Header from "./Components/Header";
import ContentPart from "./Components/ContentPart";
import FooterPart from "./Components/FooterPart";

import "./App.css";

const App = () => (
  <div className="main-cont">
    <div className="main-container">
      <Header />
      <ContentPart />
      <FooterPart />
    </div>
  </div>
);

export default App;
