import React, { useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch,useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { PostVideo } from '../../Redux/Videos/videoaction';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color:"black",
    backgroundColor:"rgb(153, 168, 126)"
  },
}));

const init = {
    title: "",
    subName: "",
    description: "",

}

export  function VideoModal(init) {
  const classes = useStyles();
  const [data, setData] = useState(init);
  const { title, subName, description } = data;
  const videoup = useRef()
  const { isRegister } = useSelector((state) => state.register);
  const tlData = useSelector(state=>state.tLogin.tlData)
  console.log("isRegister",isRegister)
  const [authorID,setauthorID]=useState(tlData. _id)
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({...data,[name]:value});
  };

  const dispatch = useDispatch();
    
  const handleSignup = (e) => {
    e.preventDefault();
    console.log(videoup.current.files[0]);
    const payload = {
        title,
        video:videoup.current.files[0],
        subName,
        description,
        authorID
    }


    dispatch(PostVideo(payload))
   console.log(payload)


  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Upload Video
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                value={title}
                required
                fullWidth
                id="title"
                label="Title"
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                name="video"
                onChange={handleChange}
                value={video}
                 ref={videoup}
                name="video"
                autoComplete="video"
              /> */}
              <input type="file" accept="video/mp4,video/x-m4v,video/*"  ref={videoup} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="subName"
                label="SubName"
                name="subName"
                value={subName}
                autoComplete="subName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                onChange={handleChange}
                value={description}
                label="Description"
                type="text"
                id="description"
                autoComplete="current-description"
              />
            </Grid> 
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleSignup}
          >
           Upload
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>  
    </Container>
  )
}