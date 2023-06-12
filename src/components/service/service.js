import axios from 'axios';

const API = "http://54.193.24.238:5000"

export function sendFile_Questioners(data){
    return axios.post(`${API}/compare_questionnaires`,data,
        {
            headers : {
                "Content-Type" : "multipart/form-data"
            } 
        }
        )
}
export function sendFile_SOC2(data){
    return axios.post(`${API}/compare_pdfs`,data,
        {
            headers : {
                "Content-Type" : "multipart/form-data"
            } 
        }
        )
}
