import React from 'react';
import Map from './Map';
import '../CSS/Footer.css';
import {useState} from 'react';
import services from '../services';

function Footer(){
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [spam, setSpam] = useState("");
    const [message, setMessage] = useState("");

    function handleMessage(e){
        // e.preventDefault()
        services.sendMessage(name, phone, mail, spam, message);
    };

    return (
        <div className="footer">
            <div className="footer-up">
                <div className="footer-contact-map">
                    <div className="footer-contact">
                        <h2> LA COUTURE DU CHARME</h2>
                        <p>1400, rue de Beaumetz</p>
                        <p>59310 SAMÉON</p>
                        <h3>📞 03 27 41 52 47</h3>
                    </div>
                    <div className="footer-map">
                        <Map/>
                    </div>
                </div>
                <form className="footer-message" onSubmit={handleMessage}>
                    <div className="footer-message-form">
                        <div className="footer-message-form-inputs">
                            <div className="footer-message-form-input">
                                <label htmlFor="Name">Nom et prénom</label>
                                <input name="Name" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="footer-message-form-input">
                                <label htmlFor="Phone">Numéro de téléphone</label>
                                <input name="Phone" onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="footer-message-form-input">
                                <label htmlFor="Mail">E-mail</label>
                                <input name="Mail" onChange={(e) => setMail(e.target.value)}/>
                            </div>
                            <div className="footer-message-form-input">
                                <label htmlFor="Spam">Anti-spam</label>
                                <input name="Spam" onChange={(e) => setSpam(e.target.value)}/>
                            </div>
                        </div>
                        <div className="footer-message-form-txtarea">
                            <label htmlFor="Message">Message</label>
                            <textarea name="Message" onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                    </div>
                    <button className="footer-message-form-send">📩 Envoyer le message</button>
                </form>
            </div>
            <div className="footer-down">
                <p>Couture du Charme 2021</p>
                <p className="footer-down-mention">📜 Mentions légales</p>
            </div>
        </div>
    );
};

export default Footer;