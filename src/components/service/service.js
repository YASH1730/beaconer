import axios from 'axios';

export function sendFile(data){
    return axios.post("http://54.183.231.38:5000/compare_questionnaires",data,
        {
            headers : {
                "Content-Type" : "multipart/form-data"
            } 
        }
        )
}
