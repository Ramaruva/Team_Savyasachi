import React from 'react'
import { Carouselsection } from './Carousel'
import styles from "./Navbar.module.css";
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';
import {Button} from '@material-ui/core'

export const Home = () => {

    const history = useHistory();
    const handleTeach = () => {
        history.push("/teach");
    }
    const handleLearn = () => {
        history.push("/learn");
    }
    return (
        <div>
            {/* <div
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
                    loop="true"
                    volume="null"
                    controls
                    muted="true"
                />
			</div> */}
          
           <Carouselsection />
           
            <div className={styles.edtec}>
                <div className={styles.minicon}>
                    <h3 className={styles.heading}>The most important gift of all is the gift of education, Distribute your skills to helps students and Also Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</h3>
                    <button onClick={handleTeach} className={styles.signin}>Teach</button>
                    <br/>
                    <br/>
                    <button onClick={handleLearn} className={styles.signin}>Learn</button>
                </div>
                <div className={styles.minicon2}>
                    <img src="/teacher.svg" alt="teacher" />
                </div>
               
           </div>
           <div className={styles.quizbtn_main_div}>
           <div className={styles.image}>
                        <img src="/education.svg" />
                    </div>
                    <div className={styles.quizbtn_div}>
                        <h5>LEARNERS AND STUDENTS</h5>
                        <h3>You Can Learn anything.</h3>
                        <p>Build a deep, solid understanding in math, science, grammar, history, SAT®, and more.</p>
                        <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        href="/quiz/pages"
                        >
                           Participate in Quiz</Button>
                    </div>
                   
                </div>
        </div>
    )
}
