import axios from 'axios';

// const API_URL = 'http://localhost:3001/api/';
const API_URL = 'https://lacoutureducharme.herokuapp.com/api/'

class services {
    sendMessage(name, phone, mail, spam, message){
        return axios
            .post(API_URL + 'SendMessage', {name, phone, mail, spam, message});
    };

    getMessages(){
        return axios
            .get(API_URL + 'GetMessages');
    };

    spaGift(from, to, mailSender, mailReceiver, telSender, telReceiver, message, number, creneau, sending){
        return axios
            .post(API_URL + 'SpaGift', {from, to, mailSender, mailReceiver, telSender, telReceiver, message, number, creneau, sending})
    };
};

export default new services();