import React from 'react'
import { Carouselsection } from './Carousel'
import styles from "./Navbar.module.css";
import ReactPlayer from 'react-player';

export const Home = () => {

    return (
        <div>
            <div
				style={{
					position: "relative",
					zIndex: "-1",
					width: "99.85%",
					height: "90%",
				}}
			>
                <ReactPlayer
                    className='react-player'
                    url='https://youtu.be/kf-Zagr442E'
                    width='99.85%'
                    height='99.85%'
                />
			</div>
          
           <Carouselsection />
            
            <div className={styles.edtec}>
                <div className={styles.minicon}>
                    <h1 className={styles.heading}>The most important gift of all is the gift of education, Distubute your skills to helps students</h1>
                    <button className={styles.signin}>Teach</button>
                </div>
                <div className={styles.minicon2}>
                    <img src="https://www.cheggindia.com/wp-content/uploads/2021/08/Untitled-design-41.png" alt="degree.png" />
                </div>
           </div>
        </div>
    )
}
