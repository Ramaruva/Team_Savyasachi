const { google } = require("googleapis")
const path = require("path")
const fs = require("fs")

require("dotenv").config();

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

const filePath = path.join(__dirname,'zoom_0.mp4')

async function uploadFile(){
    try{
        const response = await drive.files.create({
            requestBody:{
                name: 'zoom_0.mp4',
                mimeType:'video/mp4'
            },
            media:{
                mimeType:'video/mp4',
                body: fs.createReadStream(filePath)
            }
        })
        // console.log(response.data);
        generatePublicUrl(response.data.id)
    }
    catch(error){
        console.log(error);
    }
}


uploadFile();

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
        console.log(result.data);
    }
    catch(error){
        console.log(error.message);
    }
}

// generatePublicUrl()