import "./css/App.css";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Woman from "./images/c1.jpg";
import City from "./images/c2.jpg";
import Fly from "./images/c3.jpg";

function App() {
  return (
    <div className="App">
      <Parallax strength={300} bgImage={Woman}>
        <div className="content">
          <button className="text-content ripple ripple-surface btn btn-primary btn-danger">Normal Parallax</button>
          <div className="icon-content">
            <p className="small text-secondary">Scroll Down</p>
            <i>
              <FontAwesomeIcon icon={faAngleDown} className="fa-beat" style={{ color: "white" }} />
            </i>
          </div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={City}>
        <div className="content">
          <div className="icon-contentup">
            <i>
              <FontAwesomeIcon icon={faAngleUp} className="fa-beat" style={{ color: "white" }} />
            </i>
            <p className="small text-secondary">Scroll Up</p>
          </div>
          <button className="text-content ripple ripple-surface btn btn-primary btn-secondary">Blur Parallax</button>
          <div className="icon-content">
            <p className="small text-secondary">Scroll Down</p>
            <i>
              <FontAwesomeIcon icon={faAngleDown} className="fa-beat" style={{ color: "white" }} />
            </i>
          </div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={Fly}>
        <div className="content">
          <div className="icon-contentup">
            <i>
              <FontAwesomeIcon icon={faAngleUp} className="fa-beat" style={{ color: "white" }} />
            </i>
            <p className="small text-secondary">Scroll Up</p>
          </div>
          <button className="text-content ripple ripple-surface btn btn-primary btn-primary">Reverse Parallax</button>
          <div className="icon-content">
            <p className="small text-secondary">Scroll Down</p>
            <i>
              <FontAwesomeIcon icon={faAngleDown} className="fa-beat" style={{ color: "white" }} />
            </i>
          </div>
        </div>
      </Parallax>

    </div>
  );
}

export default App;
