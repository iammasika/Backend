const {getAxiosInstance} = require('./axios');
const {errorHandler} = require('./helper');
const dotenv=require('dotenv').config();


const MyToken= "7542968813:AAGkMrZm7hcCOOSs7WjPWOVvviqAJWBWkz8";
const base_URL=`https://api.telegram.org/bot${MyToken}/`;
const axiosInstance=getAxiosInstance(base_URL);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function sendMessage(chatId: any, text:any) {
    return axiosInstance
    .get('sendMessage', {
        chatId: chatId,
        text: text,
        }
    )
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    .catch((ex: any) => {
        errorHandler(ex,"sendMessage","axios");
    }
    );
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
async function handleMessage(messageObj:any) {
    const messageText=messageObj.text||"";
    if(!messageText){
        errorHandler("messageText is empty","handleMessage");
        return "";
    }


try{
    const chatId=messageObj.chat.id;
    const messageId=messageObj.message_id;
    const fromId=messageObj.from.id;
    const text=messageText.replace(/\/start/g,"");
    const textArray=text.split(" ");
    const command=textArray[0];
    const args=textArray.slice(1);

    switch(command){
        case "/start":
            return sendMessage(chatId,"Welcome to the bot!");
            
        case "/help":
            return sendMessage(chatId,"This is a help message.");
        
        default:
            return sendMessage(chatId,"Unknown command.");
            
    }
}catch(ex)
{
    errorHandler(ex,"handleMessage");
}
} 

export {sendMessage,handleMessage};
