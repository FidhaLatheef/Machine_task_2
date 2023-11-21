import "./css/App.css";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Woman from "./images/c1.jpg";
import City from "./images/c2.jpg";
import Fly from "./images/c3.jpg";

function App() {
  return (
    <div className="App">
       <Parallax strength={300} bgImage={Woman}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
          <div className="icon-content">
            <i >
              <FontAwesomeIcon icon={faAngleDown} className="fa-beat" style={{ color: "white" }} />
            </i>
          </div>
        </div>
      </Parallax>
      

      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={City}>
        <div className="content">
          <div className="text-content">Blur</div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={Fly}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>

      <div className="content"></div>
    </div>
  );
}

export default App;
