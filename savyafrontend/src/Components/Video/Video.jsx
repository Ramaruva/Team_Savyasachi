import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { getVideo } from '../../Redux/Videos/videoaction';
import { Vdata } from './Vdata';
import styles from "./Video.module.css";


export const Video = () => {

    const dispatch=useDispatch()
    const getVideoData = () => {
        dispatch(getVideo())
    }

    const { vdata } = useSelector(state => state.video)
    
   // console.log(vdata[0].authorID)

    useEffect(() => {
        getVideoData();
    },[])
   
  
    return (
        <div>
          
            <div className={styles.container}>
                {vdata?.map((item) => {
                    return (
                        <Vdata item={item}/>
                    )
                })}
            </div>
        </div>
    )
}
