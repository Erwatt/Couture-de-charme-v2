const Message = require('../model/message');
const Nodemailer = require('nodemailer');

exports.sendMessage = (req, res) => {
    console.log('coucou')
    let {name, phone, mail, message} = req.body;
    var txt = "message: " + message + ". tél: " + phone;

    const msg = new Message({
      name: name,
      phone: phone,
      mail: mail,
      message: message
    });
    

    const transporter = Nodemailer.createTransport({
        service: 'ionos',
        host: 'smtp.ionos.fr',
        auth: {
          user: process.env.SENDER,
          pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.SENDER,
        to: process.env.RECEIVER,
        subject: `Nouveau message de ${mail} : ${name}`,
        html: `${txt}`
    };

    transporter.sendMail(mailOptions);

    msg.save()
        .then(() => res.status(201).json({message: 'Message créé et envoyé'}))
        .catch(error => res.status(400).json({error}));
};

exports.getMessages = (req, res) => {
    Message.find()
      .then(messages => res.status(200).json(messages))
      .catch(error => res.status(400).json({error}));
};