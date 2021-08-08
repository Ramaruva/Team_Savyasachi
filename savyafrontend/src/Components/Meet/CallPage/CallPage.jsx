import { useEffect, useReducer, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getRequest, postRequest } from "./../../../Utlis/apiRequests";
import {
  BASE_URL,
  GET_CALL_ID,
  SAVE_CALL_ID,
} from "./../../../Utlis/apiEndpoints";
import io from "socket.io-client";
import Peer from "simple-peer";


import MessageListReducer from "../../../reducers/MessageListReducer";

 import CallPageFooter from "../subcomponents/CallPageFooter/CallPageFooter";
import Messenger from "../subcomponents/Messenger/Messenger";
import "./CallPage.scss";
let peer = null;
const socket = io.connect("http://localhost:6583");
const initialState = [];
const CallPage = ()=>{
    const history = useHistory();
    let { id } = useParams();
    const isAdmin = window.location.hash === "#init" ? true : false;
    const url = `${window.location.origin}${window.location.pathname}`;
    let alertTimeout = null;
  
    const [messageList, messageListReducer] = useReducer(
      MessageListReducer,
      initialState
    );
  
    const [streamObj, setStreamObj] = useState();
    const [screenCastStream, setScreenCastStream] = useState();
    const [isPresenting, setIsPresenting] = useState(false);
    const [isMessenger, setIsMessenger] = useState(false);
    const [messageAlert, setMessageAlert] = useState({});
    const [isAudio, setIsAudio] = useState(true);
  
    useEffect(() => {
      initWebRTC();
      socket.on("code", (data) => {
        peer.signal(data);
      });
    }, []);
  
    const getRecieverCode = async () => {
      const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
      if (response.code) {
        peer.signal(response.code);
      }
    };
  
    const initWebRTC = async () => {
     await navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          setStreamObj(stream);
  
          peer = new Peer({
            initiator: isAdmin,
            trickle: false,
            stream: stream,
          });
  
          if (!isAdmin) {
            getRecieverCode();
          }
  
          peer.on("signal", async (data) => {
            if (isAdmin) {
              let payload = {
                id,
                signalData: data,
              };
              await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
            } else {
              socket.emit("code", data, (cbData) => {
                console.log("code sent");
              });
            }
          });
  
          peer.on("connect", () => {
            console.log("peer connected")
          });
  
          peer.on("data", (data) => {
            clearTimeout(alertTimeout);
            messageListReducer({
              type: "addMessage",
              payload: {
                user: "other",
                msg: data.toString(),
                time: Date.now(),
              },
            });
  
            setMessageAlert({
              alert: true,
              isPopup: true,
              payload: {
                user: "other",
                msg: data.toString(),
              },
            });
  
            alertTimeout = setTimeout(() => {
              setMessageAlert({
                ...messageAlert,
                isPopup: false,
                payload: {},
              });
            }, 10000);
          });
  
          peer.on("stream", (stream) => {
            let video = document.querySelector("video");
  
            if ("srcObject" in video) {
              video.srcObject = stream;
            } 
  
            video.play();
          });
          
        })
        .catch(() => {});
    };
  
    const sendMsg = (msg) => {
      peer.send(msg);
      messageListReducer({
        type: "addMessage",
        payload: {
          user: "you",
          msg: msg,
          time: Date.now(),
        },
      });
    };
  
    const screenShare = () => {
      navigator.mediaDevices
        .getDisplayMedia({ cursor: true })
        .then((screenStream) => {
          peer.replaceTrack(
            streamObj.getVideoTracks()[0],
            screenStream.getVideoTracks()[0],
            streamObj
          );
          setScreenCastStream(screenStream);
          screenStream.getTracks()[0].onended = () => {
            peer.replaceTrack(
              screenStream.getVideoTracks()[0],
              streamObj.getVideoTracks()[0],
              streamObj
            );
          };
          setIsPresenting(true);
        });
    };
  
    const stopScreenShare = () => {
      screenCastStream.getVideoTracks().forEach(function (track) {
        track.stop();
      });
      peer.replaceTrack(
        screenCastStream.getVideoTracks()[0],
        streamObj.getVideoTracks()[0],
        streamObj
      );
      setIsPresenting(false);
    };
  
    const toggleAudio = (value) => {
      streamObj.getAudioTracks()[0].enabled = value;
      setIsAudio(value);
    };
  
    const disconnectCall = () => {
      peer.destroy();
      history.push("/");
      window.location.reload();
    };
    console.log(url);
  
    return(
        <div className="callpage_container">
        <video className="video_container" src="" controls autoPlay playsInline></video>
        
        <CallPageFooter
         isPresenting={isPresenting}
         stopScreenShare={stopScreenShare}
         screenShare={screenShare}
         isAudio={isAudio}
         toggleAudio={toggleAudio}
         disconnectCall={disconnectCall}/>
        <Messenger
          setIsMessenger={setIsMessenger}
          sendMsg={sendMsg}
          messageList={messageList}
        />
        </div>
    )
}

export default CallPage;