const express = require("express");
const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();
const router = express.Router();
const Video = require("../model/video.model");
const uploads = require("../utils/multer");


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

 const oauth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
  )
  
  oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
  
  const drive = google.drive({
      version:'v3',
      auth: oauth2Client
  })
//   const filePath = path.join("C:/Users/ajmal/OneDrive/Desktop/Drona/Team_Savyasachi/savyabackend/src/utils",'zoom_0.mp4')
// console.log(filePath)



let datanew = "";
router.post("/",upload.single("video"), async (req, res) => {
datanew = await  uploadFile( req.file.path);
    
   setTimeout(async ()=>{
    let obj = {
        title:req.body.title,
        link:datanew,
        views:req.body.views||0,
        rating:req.body.rating||0,
        comments:req.body.rating||[],
        subName:req.body.subName||"",
        description:req.body.description||"",
        authorID:req.body.authorID
    }
        req.body.link = datanew;
      const video = await Video.create(obj);
      return res.status(201).json({ data: video });
   },5000)

});

async function uploadFile(filePath){
      try{
          const response = await drive.files.create({
              requestBody:{
                  name: uuidv4()  + ".mp4",
                  mimeType:'video/mp4'
              },
              media:{
                  mimeType:'video/mp4',
                  body: fs.createReadStream(filePath)
              }
          })
          generatePublicUrl(response.data.id)
      }
      catch(error){
          console.log(error);
      }
  }
  
  
//   uploadFile();
  
  async function deleteFile(){
      try{
          const response = await drive.files.delete({
              fileId: '1IYMbCkDBToT-6jyeweZi2XIQkiZOAtD_',
          });
          console.log(response.data,response.status);
      }
      catch(error){
          console.log(error.message);
      }
  }
  
  // deleteFile();

//    const someFunc = function(){
//          return new Promise((resolve,reject)=>{

//          })
//    }
  
  async function generatePublicUrl(id){
      console.log(id);
      try{
          const fileId = id;
          await drive.permissions.create({
              fileId:fileId,
              requestBody:{
                  role:'reader',
                  type:'anyone'
              }
          })
          const result = await drive.files.get({
              fileId:fileId,
              fields: 'webViewLink, webContentLink',
          });
      //     console.log(result.data.webViewLink);
      datanew =  result.data.webViewLink
      }
      catch(error){
          console.log(error.message);
      }
  }

module.exports = router;
