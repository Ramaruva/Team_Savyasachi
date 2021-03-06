import React from "react";
import styles from "./Navbar.module.css";

import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../Redux/LoginRedux/Loginaction";
import { tlogout } from "../../Redux/teacherLogin/tlaction";

function Navbar() {

  const { isAuth } = useSelector(state => state.login);
  const { tlSuccess } = useSelector(state => state.tLogin);
  const dispatch = useDispatch();
  const handleLogout = () => {
    if (isAuth) {
      
      dispatch(logoutSuccess());
      return;

    }
    if (tlSuccess) {
      dispatch(tlogout());
      return;
    }
  }

 

  return (
    <div className={styles.containers}>
    
      <div className={styles.navimg}>
        <Link to="/">
          <img width="110px" src="https://st2.depositphotos.com/8322640/44539/v/950/depositphotos_445391302-stock-illustration-dronacharya-teaching-bow-arrow-his.jpg" alt="logo"></img>
        </Link>
      </div>
      <div className={styles.navinfo}>
      <Link to="/learn">Learn</Link>
      {isAuth?<Link to="/quiz/pages">Quiz</Link>:null}
        {tlSuccess ? <Link to="/teach">Teach</Link> : null}
      
        {isAuth||tlSuccess? <Link to="/signin">
          <button onClick={handleLogout} className={styles.signin}>Sign-Out</button>
      </Link>:<Link to="/signin">
          <button className={styles.signin}>Sign-In</button>
      </Link>}
      
      { isAuth||tlSuccess?null:<Link to="/signup">
          <button className={styles.signup}>Sign-Up</button>
      </Link>}
        
      </div>
    </div>
  );
}

export {Navbar};
