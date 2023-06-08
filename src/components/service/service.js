import axios from 'axios';

export function sendFile_Questioners(data){
    return axios.post("http://54.215.190.217:5000/compare_questionnaires",data,
        {
            headers : {
                "Content-Type" : "multipart/form-data"
            } 
        }
        )
}
export function sendFile_SOC2(data){
    return axios.post("http://54.215.190.217:5000/compare_pdfs",data,
        {
            headers : {
                "Content-Type" : "multipart/form-data"
            } 
        }
        )
}
