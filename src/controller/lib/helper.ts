import e from "express";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function errorHandler (error:any,name:any,from:any){

const loggerFunction = console.log;
/*

if (process.env.NODE_ENV === 'production') {
  loggerFunction = console.error;
};
*/

loggerFunction("-----------Starting Error Handler-----------");
loggerFunction("Error Name: ", name);

if(from==="axios"){
   if(error.response){
    // The request was made and the server responded with a status code
    loggerFunction("Error Response: ", error.response.data);
    loggerFunction("Error Status: ", error.response.status);
    loggerFunction("Error Headers: ", error.response.headers);

}else if(error.request){
    // The request was made but no response was received
    loggerFunction("Error Request: ", error.request);
}else{
    // Something happened in setting up the request that triggered an Error
    loggerFunction("Error Message: ", error.message);
}
loggerFunction(error.toJSON());
}else{
loggerFunction("Error Message: ", error);
}


loggerFunction("-------End of Error Handler--------");
};

export {errorHandler};