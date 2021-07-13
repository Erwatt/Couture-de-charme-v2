import React from 'react';
import Map from './Map';
import '../CSS/Footer.scss';
import {useState} from 'react';
import services from '../services';
import {Link} from 'react-router-dom';
import facebook from '../Images/facebook.png'

function Footer(){
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [spam, setSpam] = useState("");
    const [message, setMessage] = useState("");

    function handleMessage(e){
        if ( spam !== 'Camille'){
            e.preventDefault()
            alert('Mauvaise réponse au test anti spam, va te faire foutre sale bot')
        } else {
            services.sendMessage(name, phone, mail, message);
        }
        // e.preventDefault()
        
    };

    return (
        <div className="footer">
            <div className="footer-up">
                <div className="footer-contact-map">
                    <div className="footer-contact">
                        <h2> LA COUTURE DU CHARME</h2>
                        <p>1400, rue de Beaumetz<br></br>59310 SAMÉON</p>
                        <h3>📞 03 27 41 52 47</h3>
                    </div>
                    <div className="footer-share">
                        <h2>RESEAUX SOCIAUX</h2>
                        <a href="https://www.facebook.com/coutureducharme" target="_blank" rel="noreferrer">           
                        <img className="footer-facebook" src={facebook} alt="facebook" loading="lazy"/>
                        </a>
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
                                <input className="form__field" name="Name" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="footer-message-form-input">
                                <label htmlFor="Phone">Numéro de téléphone</label>
                                <input className="form__field" name="Phone" onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="footer-message-form-input">
                                <label htmlFor="Mail">E-mail</label>
                                <input className="form__field" name="Mail" onChange={(e) => setMail(e.target.value)}/>
                            </div>
                            <div className="footer-message-form-input">
                                <label htmlFor="Spam">Comment s'appelle la femme de nico ?</label>
                                <input className="form__field" name="Spam" onChange={(e) => setSpam(e.target.value)}/>
                            </div>
                        </div>
                        <div className="footer-message-form-txtarea">
                            <label htmlFor="Message">Message</label>
                            <textarea name="Message" onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                    </div>
                    <button className="footer-message-form-send">Envoyer le message</button>
                </form>
            </div>
            <div className="footer-down">
                <p>Couture du Charme 2021</p>
                <Link to="/MentionsLégales" className="footer-link"><div className="footer-down-mention"><p>Mentions légales</p></div></Link>
            </div>
        </div>
    );
};

export default Footer;