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
          <button className=" text-content ripple ripple-surface btn btn-primary btn-danger" role="button" >Normal Parallax</button>
          <div className="icon-content">
            <p className="small text-secondary">Scroll Down</p>
            <i >
              <FontAwesomeIcon icon={faAngleDown} className="fa-beat" style={{ color: "white" }} />
            </i>
          </div>
        </div>
      </Parallax>


      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={City}>
        <div className="content">

          <div className="icon-contentup">
            <p className="small text-secondary">Scroll Up</p>
            <i >
              <FontAwesomeIcon icon={faAngleUp} className="fa-beat" style={{ color: "white" }} />
            </i>
          </div>
          <button className=" text-content ripple ripple-surface btn btn-primary btn-secondary" role="button" >Blur Parallax</button>

          <div className="icon-content">
            <p className="small text-secondary">Scroll Down</p>
            <i >
              <FontAwesomeIcon icon={faAngleDown} className="fa-beat" style={{ color: "white" }} />
            </i>
          </div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={Fly}>
        <div className="content">
          <div className="icon-contentup">
            <p className="small text-secondary">Scroll Up</p>
            <i >
              <FontAwesomeIcon icon={faAngleUp} className="fa-beat" style={{ color: "white" }} />
            </i>
          </div>
          <button className=" text-content ripple ripple-surface btn btn-primary btn-primary" role="button" >Reverse Parallax</button>

          <div className="icon-content">
            <p className="small text-secondary">Scroll Down</p>
            <i >
              <FontAwesomeIcon icon={faAngleDown} className="fa-beat" style={{ color: "white" }} />
            </i>
          </div>
        </div>
      </Parallax>

      <div className="content"></div>
    </div>
  );
}

export default App;
