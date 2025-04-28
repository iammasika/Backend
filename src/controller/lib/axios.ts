import axios from 'axios';
function getAxiosInstance(base_URL:any,headers={}){
return{
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    get(method: any,params:any){
        return axios.get(`/${method}`,{
            baseURL: base_URL,
            headers,
            params
        });
    },
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    post(method:any,data: any){
        return axios({
            method: 'post',
            url: `/${method}`,
            baseURL: base_URL,
            headers,
            data
        });

    
}
   }

     }

     export {getAxiosInstance};
     