import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./Teach.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { VideoModal } from './Modal';

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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: "340px",
        marginLeft: "750px",
        height: "700px"
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          marginTop: "40px",
          height: "700px"
      },
  
}));
export const Teach = () => {
    const classes = useStyles();
    const { trdata } = useSelector(state => state.tRegister);
    const tlData = useSelector(state=>state.tLogin.tlData)
    console.log(tlData)
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>{ tlData.first_name + " "+tlData.last_name}</h1>
                        <p className={styles.title}>{tlData.email}</p>
                        <p className={styles.title}>{trdata.phone_number}</p>
                        <p className={styles.title}>{ tlData.qualification}</p>
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
                        onClick={handleOpen}
						className={classes.submit}
					>
						Upload a recorded video
					</Button>
                </div>
                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <VideoModal/>
          </div>
        </Fade>
      </Modal>
            </div>
        </div>
    )
}
