import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./Teach.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
export const Teach = () => {
    const classes = useStyles();
    const { trdata } = useSelector(state => state.tRegister);

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>{ trdata.first_name + " "+trdata.last_name}</h1>
                        <p className={styles.title}>{trdata.email}</p>
                        <p className={styles.title}>{trdata.phone_number}</p>
                        <p className={styles.title}>{ trdata.qualification}</p>
                <p className={styles.title}>Harvard University</p>
                <div style={{margin: "24px"}}>
                    <a href="#"><i className="fa fa-dribbble"></i></a> 
                    <a href="#"><i className="fa fa-twitter"></i></a>  
                    <a href="#"><i className="fa fa-linkedin"></i></a>  
                    <a href="#"><i className="fa fa-facebook"></i></a> 
                </div>
                <p><button>Contact</button></p>
                </div>
                <div className={styles.btn}>
                <Button
						type="submit"
						fullWidth
                        variant="contained"
						className={classes.submit}
					>
						Start Live Class
                    </Button>
                    <Button
						type="submit"
						fullWidth
                        variant="contained"
						className={classes.submit}
					>
						Upload a recorded video
					</Button>
                </div>
            </div>
        </div>
    )
}
