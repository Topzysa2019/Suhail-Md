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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347055658001";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_00_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgODAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI4LFxuICAgICAgICA1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5LFxuICAgICAgICAyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImYxSzc1OWZaclJJYWx6TVVwKzRzRFk3NGhFQkNWa242ZmJtaFgxZkkzcEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxxdGR3QTB3VFh5MVJ0RXk5YlRZU3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzBhNzVmNjEtMDk2Yi00M2RkLTk2OWItNmJjZGNiYWVhODJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTU3LFxuICAgICAgMTI4LFxuICAgICAgMjE1LFxuICAgICAgNDgsXG4gICAgICAzNSxcbiAgICAgIDU5LFxuICAgICAgMjEzLFxuICAgICAgMjM4LFxuICAgICAgNDksXG4gICAgICAxODQsXG4gICAgICAxNzIsXG4gICAgICA3NCxcbiAgICAgIDE4OCxcbiAgICAgIDM0LFxuICAgICAgMjUwLFxuICAgICAgMTIzLFxuICAgICAgMTMxLFxuICAgICAgMTAyLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDIyMSxcbiAgICAgIDE1MyxcbiAgICAgIDcyLFxuICAgICAgMjQxLFxuICAgICAgNDMsXG4gICAgICA0LFxuICAgICAgNTQsXG4gICAgICAyMTYsXG4gICAgICA4MCxcbiAgICAgIDIxOCxcbiAgICAgIDE2MyxcbiAgICAgIDI0NSxcbiAgICAgIDgzLFxuICAgICAgMTkyLFxuICAgICAgMzcsXG4gICAgICAyMzIsXG4gICAgICA4NyxcbiAgICAgIDAsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4MkxKUUxBUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1NTY1ODAwMTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjMyOTUxMjYzODg4MTM6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYUEwT1lGRUtEUnhiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNGNGF5N2hUS0ROM0wrYmJ6NXNRN1AvdGk0ZlNTVXZVNi9mVmJiS3FHRTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY2QvYndWSUZGQi9JSDNKNThxUncwTzk4MkwwQWZQTEkxOWg3TDJEQ1ljTGttays5cGl3dWo5ZWhXZ2taaHpNYXVORTBOaUFGVXF5ai9jZW0wT2c5RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT1p3aTkwOGtIQnNsMEc2aW9DMkw5b0pYMU1zYkpiVElwaGZtUU90WTJ4SHVnNHJKdGRhbWtrTXpDOXFpVmIrV2lBR0UyM1ZDSkUvVEVBSjM1cjFLaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1NTY1ODAwMTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcwODM5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9BUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0FQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWktQRGxEazQ3RHhFMzNYVHUwQkZKYm9kTlJ2OUFYZ2h4UFNLUTJ4OTQyMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTU3Mzk3NjIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
