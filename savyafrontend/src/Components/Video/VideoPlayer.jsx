import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./VideoPlayer.module.css";


function Videoplayer({ video }) {
	
	return (
		<div className={styles.videoplayer}>
			<ReactPlayer
				controls
				
				width="100%"
				height="100%"
				url={video}
			/>
		</div>
	);
}
export  {Videoplayer};
