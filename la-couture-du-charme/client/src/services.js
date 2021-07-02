import axios from 'axios';

const API_URL = 'http://localhost:3001/api/';

class services {
    sendMessage(name, phone, mail, spam, message){
        return axios
            .post(API_URL + 'SendMessage', {name, phone, mail, spam, message});
    };

    getMessages(){
        return axios
            .get(API_URL + 'GetMessages');
    };
};

export default new services();