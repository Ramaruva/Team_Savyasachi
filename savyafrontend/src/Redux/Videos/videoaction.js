import axios from "axios";
import {VIDEO_LOADING,VIDEO_SUCCESS,VIDEO_FAILURE} from "./videoTypes.js"
export const videoLoading =()=>(
    {
        type:VIDEO_LOADING
    }
)

export const videoFailure =()=>(
    {
        type:VIDEO_FAILURE
    }
)
export const videoSuccess =(payload)=>(
    {
        type:VIDEO_SUCCESS,
        payload
    }
)


export const getVideo =()=>async(dispatch)=>{
    try {
          dispatch(videoLoading())
          const res= await axios.get('http://localhost:8000/video')
          dispatch(videoSuccess(res.data.data))
        console.log(res.data.data);
    } catch (error) {
        console.log(error)
         dispatch(videoFailure())
    }
}
  
export const PostVideo =(payload)=>async(dispatch)=>{
  try {
        dispatch(videoLoading())
        const res= await axios.post('http://localhost:8000/video',payload)
      getVideo();
  } catch (error) {
      console.log(error)
       dispatch(videoFailure())
  }
}