import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import { getVideo } from '../../Redux/Videos/videoaction';


export const Video = () => {

    const dispatch=useDispatch()
    const getVideoData = () => {
        dispatch(getVideo())
    }

    useEffect(() => {
        getVideoData();
    },[])

    return (
        <div>
            <button onClick={getVideoData}>Dispatch</button>
        </div>
    )
}
