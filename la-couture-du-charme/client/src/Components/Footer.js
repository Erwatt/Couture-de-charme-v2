import React from 'react';
import logo from '../Images/logo.png';
import '../CSS/Footer.css';

function Footer(){
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
                    <img src={logo} alt="logo" className="footer-logo"/>
                </div>
                <form className="footer-message">
                    <div className="footer-message-form">
                        <div className="footer-message-form-inputs">
                            <div className="footer-message-form-input">
                                <label htmlFor="Name">Nom et prénom</label>
                                <input name="Name"/>
                            </div>
                            <div className="footer-message-form-input">
                                <label htmlFor="Phone">Numéro de téléphone</label>
                                <input name="Phone"/>
                            </div>
                            <div className="footer-message-form-input">
                                <label htmlFor="Mail">E-mail</label>
                                <input name="Mail"/>
                            </div>
                            <div className="footer-message-form-input">
                                <label htmlFor="Spam">Anti-spam</label>
                                <input name="Spam"/>
                            </div>
                        </div>
                        <div className="footer-message-form-txtarea">
                            <label htmlFor="Message">Message</label>
                            <textarea name="Message"/>
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