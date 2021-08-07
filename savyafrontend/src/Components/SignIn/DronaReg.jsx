import React, { useState } from 'react';
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
  fname: "",
  lname: "",
  phone: "",
  email: "",
  psd: "",
  qualification: "",
  category:""
}

export  function DronaSignUp(init) {
  const classes = useStyles();
  const [data, setData] = useState(init);
  const { fname, lname, phone,email, psd, qualification, category } = data;



  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({...data,[name]:value});
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    const payload = {
      firs_tname: fname,
      last_name: lname,
      phone_number: phone,
      email: email,
      password: psd,
      qualification: qualification,
      role:category
    }

    console.log(payload)

  }

  const value = [
    {
      value: 'select',
      label: 'Select',
    },
    {
      value: 'employee',
      label: 'Employee',
    },
    {
      value: 'job-seeker',
      label: 'Job Seeker',
    },

  ];
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Drona's Sign-UP
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="fname"
                variant="outlined"
                value={fname}
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lname"
                onChange={handleChange}

                value={lname}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}

                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="psd"
                onChange={handleChange}

                value={psd}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}

                value={phone}
                name="phone"
                label="Phone-Number"
                type="number"
                id="phone-number"
                autoComplete="current-phone-number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                onChange={handleChange}

                fullWidth
                value={qualification}
                name="qualification"
                label="Qualification"
                type="text"
                id="qualification"
                autoComplete="current-qualification"
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                fullWidth
              id="outlined-select-currency-native"
              select
              label="Native select"
                value={category}
                name="category"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
              variant="outlined"
        >
          {value.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleSignup}
          >
            Sign Up
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
  );
}