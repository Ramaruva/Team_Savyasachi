import React from "react";
import styles from "./Navbar.module.css";

import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../Redux/LoginRedux/Loginaction";

function Navbar() {

  const { isAuth } = useSelector(state => state.login);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutSuccess());
  }

  return (
    <div className={styles.containers}>
    
      <div className={styles.navimg}>
        <Link to="/">
          <img width="110px" src="https://st2.depositphotos.com/8322640/44539/v/950/depositphotos_445391302-stock-illustration-dronacharya-teaching-bow-arrow-his.jpg" alt="logo"></img>
        </Link>
      </div>
      <div className={styles.navinfo}>
      <Link to="/learning">Learning</Link>
        <Link to="/help">Help</Link>
        {isAuth? <Link to="/signin">
          <button onClick={handleLogout} className={styles.signin}>Sign-Out</button>
      </Link>:<Link to="/signin">
          <button className={styles.signin}>Sign-In</button>
      </Link>}
      
      { isAuth?null:<Link to="/signup">
          <button className={styles.signup}>Sign-Up</button>
      </Link>}
        
      </div>
    </div>
  );
}

export {Navbar};
