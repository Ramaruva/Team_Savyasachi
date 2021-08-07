import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { Arjuna } from "./Arjuna";
import { Drona } from "./Drona";
// import { useDispatch, useSelector } from "react-redux";
import styles from "./Styles.css";
import style from "../Home/Navbar.module.css"
import { ArjunaSignUp } from "./ArjunaReg";
import { DronaSignUp } from "./DronaReg";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
        margin: theme.spacing(3, 0, 2),
        color:"black",
        backgroundColor: "rgb(153, 168, 126)"
       
	},
  
}));


export const SignUp = () => {
	
	const classes = useStyles();

	const [arjuna, setArujuna] = useState(true);
	const [drona, setDrona] = useState(false);

	const arjunafn = () => {
		setArujuna(true);
		setDrona(false);
	}
	const dronafn = () => {
		setDrona(true);
		setArujuna(false);
	}
	
	return (
		<div>
		<div className={style.toggleTab}>
          <button
            style={{
              backgroundColor: arjuna ? "white" : "#4DA5E0",
              borderColor: arjuna ? "#4DA5E0" : "white",
              color: arjuna ? "#4DA5E0" : "white",
            }}
            className={style.tabButton}
            onClick={arjunafn}
          >
            Arjuna
          </button>
          <button
            style={{
              backgroundColor: drona? "white" : "#4DA5E0",
              borderColor: drona? "#4DA5E0" : "white",
              color: drona? "#4DA5E0" : "white",
            }}
            className={style.tabButton}
            onClick={dronafn}
          >
           Drona
          </button>
        </div>
			{arjuna &&<ArjunaSignUp/>}
			{drona && <DronaSignUp/>}
			
		</div>
	)
		
};
