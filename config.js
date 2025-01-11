const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻`" 


global.devs = "2347038336733" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349076512666";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349076512666";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_27_01_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICA3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc0LFxuICAgICAgICA0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTczLFxuICAgICAgICA3MCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndVb3B4ZEVVcHVMNS9udGMwVlBObU9VZ1JiMUw1Y215MnZza1pvQzBrRUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA3NjUxMjY2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0NUJERkYwM0E4MTgzN0JBQjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM2NTE5Mjc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1NQUp2U0xaUVhxOGp2aDJBYzRNV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGI4YWRlYWItYmQzOC00ZWZiLWJhOGQtOTYxYWIyMzZlZTM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMjE3LFxuICAgICAgNjEsXG4gICAgICAxMzEsXG4gICAgICAxMzAsXG4gICAgICAxMzksXG4gICAgICAyMjAsXG4gICAgICAxMzYsXG4gICAgICA2OCxcbiAgICAgIDIyNixcbiAgICAgIDI0LFxuICAgICAgMjIsXG4gICAgICAxNzYsXG4gICAgICAxNyxcbiAgICAgIDE0MSxcbiAgICAgIDIwNSxcbiAgICAgIDkxLFxuICAgICAgMjksXG4gICAgICA2NixcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDEwMyxcbiAgICAgIDE5OSxcbiAgICAgIDE3MixcbiAgICAgIDExMixcbiAgICAgIDgxLFxuICAgICAgODAsXG4gICAgICAxODAsXG4gICAgICAxOCxcbiAgICAgIDI4LFxuICAgICAgMjIwLFxuICAgICAgMTkxLFxuICAgICAgNjYsXG4gICAgICAyNCxcbiAgICAgIDIwOCxcbiAgICAgIDI0LFxuICAgICAgMTM3LFxuICAgICAgODAsXG4gICAgICAyNDEsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRKN1BZVERIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDc2NTEyNjY2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ5MDk1OTIyMjA4ODQ3OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUm9ubmllXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDN4MXhzUTVOeUV2QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5U0x1SVRXN1VOK0tKWVg3aUJKcXNzeE9Pam5vb05MdGlTTkhRZTBFMUZJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkd3Q2VKOW1rZmtBUGNyS0lrNHpBTGNNMDhjS05TYTBTMDRSODJOSDBuQWZDNlJ5M1AvREtPeFQwRXp5dTZkQ2pEcnM0dHpPcTBLNHJZc2NaVGRXY2pBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllyOWt0QUI3T2F1SVd2ZHBtb00ra0hLbDZhMTVjaWs2UVhSTHJuR2hBcDI3TndrdFFFZUFFRWVhN1pJTlMzcUZ6Z0tIa3lMcXdaWU02VWNCbXlnQUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzY1MTI2NjY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM2NTE5MjcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlVBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCVUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyN0psT1VZV2s5czY0bkYzZTFHdDBaajZhcHpnaUVuMGFPQVVCb2Rxd1FvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4MDYzMTAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzY1MTkyNzM0MzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔻𝔸ℝ𝕋𝕆ℕ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔻𝔸ℝ𝕋𝕆ℕ",
  packname: process.env.PACK_NAME || "𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻",
  botname : process.env.BOT_NAME  || "`𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻`",
  ownername:process.env.OWNER_NAME|| "`𝔻𝔸ℝ𝕋𝕆ℕ`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔻𝔸ℝ𝕋𝕆ℕ"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
