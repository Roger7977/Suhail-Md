const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_33_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2LFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQXI4RDI5QUZjRVhVdVlOdG5pTC8vNU00bkRTT1BhQkt4cUVaNW1TWnJJbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1NTg2NDExOTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQzJEQTc5MERCMTBCOEM3MzU2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzQ5MzYzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzU1ODY0MTE5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFNTgwQzk3NTQ1OEZDQzdFM0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NDkzNjM1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtjVVNBX3hqU1BtWnhPT3c5OGNFSmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmFkOTcxODQtYzczYS00NGYwLTk1N2MtYThhMDI1NzE3NmM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDI1MixcbiAgICAgIDEzNixcbiAgICAgIDEzNixcbiAgICAgIDEwMCxcbiAgICAgIDExOCxcbiAgICAgIDE1MCxcbiAgICAgIDQyLFxuICAgICAgMTk2LFxuICAgICAgMjQ2LFxuICAgICAgMjAwLFxuICAgICAgMTUsXG4gICAgICAxNzcsXG4gICAgICAzMyxcbiAgICAgIDE4NSxcbiAgICAgIDU2LFxuICAgICAgMzUsXG4gICAgICAxOTUsXG4gICAgICAzLFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDEyNCxcbiAgICAgIDIyMixcbiAgICAgIDQ4LFxuICAgICAgNjYsXG4gICAgICA2OSxcbiAgICAgIDEyMyxcbiAgICAgIDEwMixcbiAgICAgIDYwLFxuICAgICAgNTUsXG4gICAgICAyMDMsXG4gICAgICAxOTQsXG4gICAgICA2MyxcbiAgICAgIDE5MyxcbiAgICAgIDExMyxcbiAgICAgIDEwNyxcbiAgICAgIDE5MixcbiAgICAgIDYyLFxuICAgICAgMzQsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTjQ2UzlaQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTU4NjQxMTkwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJSREsgRm9ybWFsIERvY3VTZXJ2aWNlXFxuUkRLIFRyYXZlbCBhbmQgVG91cmlzbSBcXG5SREsgQ2hpYyBUcmVuZHMgYm91dGlxdWVcIixcbiAgICBcImxpZFwiOiBcIjIxMTgwNjc5ODc3MDI3NDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vMGtJWU1FUG0rKzdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiblIwRjRobVFvbmw0QnY5RXhDVE5UaWs4N2o1aFBTVEl1OHdsZmpaNlBWZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJialNGNklVRjcrNStHeWVjajVJWDUvLzBiMTM4Vm9sSjRUWnc0cG5oRlRkY1N4eVlEL3VtaTA0dUJXaGhVWm5DeVpUY1JSZ3BVVnRSRUtTcnBRblFDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmV3FGRzJWZU5EUTdnMXBOK2pzSDZ6NVdBZllLZnlHYzM0RXkwZTYrbGsrdCtOby9sbkNyYm1xVGo2aEd3cnBZUCtBVXI4Y1ZyLy9pNEdOVkFBbUxCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NTg2NDExOTA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NDkzNjI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXlsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBeWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxMTh4WHFvclhiUUhEcTBzRmtHU05mUG1sT2JaR0pzNUZsamNZU24xdWs4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMzQwODU0ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzQ5MzYyOTIzNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
