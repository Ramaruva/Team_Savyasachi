import React from "react";
import styles from "./Navbar.module.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	
	title: {
		color: "white",
	},
	subtitle: {
		color: "orangered",
		textTransform: "uppercase",
    fontSize: "45px"
	},
	typedContainer: {
		position: "relative",
		top: "100%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1,
	},
	
}));
const contentStyle = {
  height: "50vh",
  color: "white",
  fontSize: "30px",
  textAlign: "center",
  background: "black",
  opacity: "0.6",
  paddingTop: "25vh",
};

function Carouselsection() {
	const classes = useStyles();

  return (
    <div>
      <Carousel
        className={styles.Carousel}
        effect="scrollx"
        dotPosition="bottom"
        autoplay
      >
        <div className={styles.CarouselItemOne}>
          <div>
            <h3 style={contentStyle}>
              Part of being a person is about helping others.
            </h3>
          </div>
        </div>
        <div className={styles.CarouselItemTwo}>
          <div>
            <h3 style={contentStyle}>What you give today you get tomorrow.</h3>
          </div>
        </div>
        <div className={styles.CarouselItemThree}>
          <div>
            <h3 style={contentStyle}>
            The most important gift of all is the gift of education
            </h3>
          </div>
          
        </div>
        <div className={styles.CarouselItemFour}>
          <div>
            <h3 style={contentStyle}>
             No poor ,No rular, No white, No black ,Education is common for all 
            </h3>
          </div>
        </div>
      </Carousel>
      <Box className={classes.typedContainer}>
            <Typography className={classes.title} variant="h4">
				<Typed strings={["Dronacharya"]} typeSpeed={40} />
			</Typography>
			<br />
			<Typography className={classes.subtitle} variant="h5">
				<Typed
					strings={["We are Students first","We are Team","We are Arjuna's"]}
					typeSpeed={60}
					backSpeed={50}
					loop
				/>
			</Typography>
      </Box>
    </div>
  );
}

export  {Carouselsection};