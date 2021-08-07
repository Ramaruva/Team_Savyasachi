import React from 'react'
import styles from "./Video.module.css";
import ReactStars from 'react-stars'
import TextField from "@material-ui/core/TextField";

export const Vdata = ({ item }) => {

  
 
const ratingChanged = (newRating) => {
  console.log(newRating)
}


    
    return (
        <div>
             <div key={item._id} className={styles.card}>
                            <div className={styles.flex}>
                           
                                <video controls="controls" style={{ width: "100%", height: "100%" ,marginTop:"-95px"}}>
                                  
                                <source src="https://drive.google.com/uc?export=download&id=1JcKNDCw8sD1miiqmlBsuB0Pe7YPwl5uu" type='video/webm'/>
                                </video>
                          
                            </div>
                            <div className={styles.flex2}>
                                <p className={styles.title}>Title: {item.title}</p>

                                <h3 className={styles.tname}>Teacher name: { item.authorID.first_name +""+item.authorID.last_name}</h3>
                                <p className={styles.qua}>Qualification: { item.authorID.qualification}</p>
                                <p className={styles.qua}>Email: {item.authorID.email}</p>
                                <p className={styles.qua}>SubName: {item.subName}</p>
                    <p className={styles.views}>Views: {item.views}</p>
                     <ReactStars
                            count={5}
                            onChange={()=>ratingChanged(item.rating)}
                            size={25}
                            color2={'#ffd700'} />
                              <br/><br /><br />
                    <div className={styles.cont}>
                    <div className={styles.comments}>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="comments"
                        label="Comments"
                        name="Comments"
                        autoComplete="comments"
                        autoFocus
                        value=""
                        />                                 
                    </div>
                        <button className={styles.commentsbtn}>Comments</button>
                    </div>
                </div>
                </div>
        </div>
    )
}
