import React, { useEffect, useState}from 'react'
import styles from "./Video.module.css";
import ReactStars from 'react-stars'
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { updateVideo } from '../../Redux/Videos/videoaction';
export const Vdata = ({ item }) => {

    let link=item.link.split("/")
//   console.log(link)

    const dispatch = useDispatch();
    
    const [vdataid, setVdataId] = React.useState("");
    const [rating, setRating] = useState(0);
    const [rating1, setRating1] = useState(item.rating);

    
    const videodata = () => {

        let sum = 0;
        for (let i = 0; i < item.rating.length; i++){
            sum += item.rating[i];
            
        }

        let avg = sum / item.rating.length;
        setRating(avg);

       for(let i=0;i<link.length;i++){
           if(link[i]=="d"){
               setVdataId(link[i + 1]);
               return;
           }
        }
    
    }


const ratingChanged = (newRating) => {
    console.log(newRating)
    // updateVideo(newRating,id)

    rating1.push(newRating);

    const payload = {
        rating:rating1,
    }

    console.log(item._id);
    dispatch(updateVideo(payload, item._id));
    
    
}
    
    console.log(vdataid);

    
    useEffect(() => {
        videodata()
    },[])

    
    return (
        <div>
             <div key={item._id} className={styles.card}>
                            <div className={styles.flex}>
                           
                                <video controls="controls" style={{ width: "100%", height: "100%" ,marginTop:"-95px"}}>
                                  
                                <source src={`https://drive.google.com/uc?export=download&id=${vdataid}`} type='video/webm'/>
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
                            onChange={ratingChanged}
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
