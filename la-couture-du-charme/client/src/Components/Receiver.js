import React from 'react';
import {useState, useEffect} from 'react';
import services from '../services';

function Receiver(){
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        services.getMessages()
            .then(res => setMessageList(res.data));
    }, []);

    return messageList.length > 0 ? (
            messageList.map(({name, phone, mail, spam, message}) => (
                <div>
                    <p>Message de {name}</p>
                    <p>Tél: {phone}</p>
                    <p>Mail: {mail}</p>
                    <p>Spam: {spam}</p>
                    <p>{message}</p>
                </div>
            ))
    ):(
        <div>Pas de message</div>
    );
};

export default Receiver;