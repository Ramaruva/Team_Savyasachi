import React from "react";
import styles from "./Navbar.module.css";

import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
 

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
      <Link to="/signin">
          <button className={styles.signin}>Sign In</button>
      </Link>
      <Link to="/signup">
          <button className={styles.signup}>Sign Up</button>
      </Link>
        {/* <Link href="/profile">
              <button className={styles.signin}>Profile</button>
            </Link>
            <Link href="/">
              <button className={styles.signup}>
                Logout
              </button>
            </Link> */}
      </div>
    </div>
  );
}

export {Navbar};