import * as React from "react"
import { useState } from 'react'

//Axios permet d'envoyer le formulaire via une requête HTTP
import axios from 'axios'

//On importe les CSS
import '../css/formulaire.scss'

//On importe les SVG
import Play from '../images/play.svg'



export default function NewFormulaire() {


    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [question, setQuestion] = useState("")
    const [success, setSuccess] = useState("")
    const [questionError, setQuestionError] = useState("")


    // Fonction qui permet de remettre le state à 0
    function initialState() {
        setName("")
        setMail("")
        setPhone("")
        setMessage("")
        setQuestion("")
        setQuestionError("")
    }


    // On envoie le formulaire
    function handleSubmit(event) {

        event.preventDefault()

        switch (question) {
            case 'paris':
                return envoiFormulaire()
            case 'PARIS':
                return envoiFormulaire()
            case 'Paris':
                return envoiFormulaire()
            case 'PaRiS':
                return envoiFormulaire()
            case 'pArIs':
                return envoiFormulaire()
            case 'SAMEON':
                return envoiFormulaire()
            default:
                return setQuestionError("La réponse est incorrecte.")
        }
    }


    function envoiFormulaire() {

        // Send a POST request
        //http://localhost:8000/post
        //https://domaine.com/post
        axios.post('https://lacoutureducharme.herokuapp.com/api/SendMessage', {
            name,
            mail,
            phone,
            message

        }
        )



        //Reinitialiser le formulaire après une soumission réussie
        initialState()
        setSuccess("Message reçu !")
        // console.log("Le formulaire s'est envoyé")

    }




    return (
        <div className="MainForm">

            <form onSubmit={handleSubmit}>


                <div className="GroupForm">

                    <div className="ContainerForm">

                        <div className="BlocForm">

                            <div className="ItemForm">
                                <label htmlFor="name">
                                    Nom et prénom
                                </label>
                                <br />
                                <input type="text" id="nom" name="name" placeholder="Nom et prénom" value={name} onChange={e => {
                                    setName(e.target.value)
                                }} required />

                            </div>

                            <div className="ItemForm">
                                <label htmlFor="phone">
                                    Téléphone
                                </label>
                                <br />
                                <input type="phone" id="telephone" name="phone" placeholder="0607000000" value={phone} onChange={e => setPhone(e.target.value)} required />
                            </div>

                        </div>

                        <div className="BlocForm">


                            <div className="ItemForm">
                                <label htmlFor="mail">
                                    E-mail
                                </label>
                                <br />
                                <input type="email" id="email" name="mail" placeholder="nom@email.fr" value={mail} onChange={e => setMail(e.target.value)} required />
                            </div>

                            <div className="ItemForm">
                                <label htmlFor="question" className="labelheight">
                                    Dans quelle ville est située la Tour Eiffel ?
                                </label>
                                <br />
                                <input type="text" id="question" name="question" placeholder="Votre réponse" value={question} onChange={e => setQuestion(e.target.value)} required />

                                {!questionError ? <div></div> : <div className="ProblemeFormulaire">{questionError}</div>}
                            </div>

                        </div>

                        <div className="BlocForm">
                            <div className="ItemForm">
                                <label htmlFor="message" className="labelheight">
                                    Votre message
                                </label>
                                <br />
                                <textarea type="text" id="message" placeholder="Quelle est votre question ?" name="message" value={message} onChange={e => setMessage(e.target.value)} required />

                            </div>


                            <div className="ItemForm ItemFormBouton">
                                <p align="center">En envoyant votre message, vous acceptez que les informations saisies soient exploitées pour traiter votre demande et vous répondre.</p>
                                <div className="AnimationBouton">
                                <button type="submit" className="hover hover-1"><img src={Play} alt="picto flèche" width="15px"/>Envoyer le message</button>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>


                {!success ? <div></div> : <div className="ConfirmationEnvoi" align="center">{success}</div>}




            </form>
        </div>
    )
}
