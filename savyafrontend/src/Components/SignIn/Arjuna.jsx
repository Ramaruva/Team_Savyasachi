import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../Redux/LoginRedux/Loginaction";
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
// eslint-disable-next-line
const init = {
	email: "",
	password: "",
	// student: "",
	// teacher: "",
};

export const Arjuna = () => {
	const [loginData, setloginData] = useState(init);
	const { email, password} = loginData;
	const classes = useStyles();

	const handleLogin = (e) => {
		let { name, value, type, checked } = e.target;

		value = type === "checkbox" ? checked : value;
		setloginData({ ...loginData, [name]: value });
	};

	
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.login);

	const Login = (e) => {
		e.preventDefault();
		const payload = {
			email,
			password,
			
		};
		dispatch(loginUser(payload))

	};
	

   

	return !isAuth?(
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Arjuna's Sign-In
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={handleLogin}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						value={password}
						onChange={handleLogin}
						autoComplete="current-password"
					/>
					
					<Button
						type="submit"
						fullWidth
                        variant="contained"
						
						onClick={Login}
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	):<Redirect to="/"/> 

};

