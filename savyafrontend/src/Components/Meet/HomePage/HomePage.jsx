import "./HomePage.scss";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
const HomePage = () => {
  const history = useHistory();
  
  const startCall = ()=>{
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  }
  return (
    <div className="homepage">
      <div className="body">
        <div className="Left_body">
          <div className="text">
            <div className="actions">
              <button className="btn green" onClick={startCall}>
                <FontAwesomeIcon className="each_icon" icon={faVideo} />
                New Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
