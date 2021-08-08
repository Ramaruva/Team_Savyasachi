import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faPhone,
  faDesktop,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./CallPageFooter.scss";

const CallPageFooter = ({
  isPresenting,
  stopScreenShare,
  screenShare,
  isAudio,
  toggleAudio,
  disconnectCall,
}) => {
  return (
    <div className="footerItem">
      <div className="leftItem">
      </div>
      <div className="centerItem">
        <div
          className={`iconBlock ${!isAudio ? "redBg" : null}`}
          onClick={() => toggleAudio(!isAudio)}
        >
          <FontAwesomeIcon
            className="icon"
            icon={isAudio ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div className="iconBlock" onClick={disconnectCall}>
          <FontAwesomeIcon className="icon red" icon={faPhone} />
            <p className="title">End Meet</p>
        </div>
        {isPresenting ? (
          <div className="iconBlock" onClick={stopScreenShare}>
            <FontAwesomeIcon className="icon red" icon={faDesktop} />
            <p className="title">Stop Share</p>
          </div>
        ) : (
          <div className="iconBlock" onClick={screenShare}>
            <FontAwesomeIcon className="icon red" icon={faDesktop} />
            <p className="title">Share Screen</p>
          </div>
        )}
      </div>
      <div className="rightItem">
      </div>
    </div>
  );
};

export default CallPageFooter;