const Message = require('../model/message');
const SpaGift = require('../model/spaGift');
const Nodemailer = require('nodemailer');

exports.sendMessage = (req, res) => {
    console.log('coucou')
    let {name, phone, mail, message} = req.body;
    console.log(message)
    var txt = message ;

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
        subject: `Nouveau message de ${name} : ${mail} / ${phone}`,
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

exports.spaGift = (req, res) => {
  let {from, to, mailSender, mailReceiver, telSender, telReceiver, message, number, creneau, sending} = req.body;
  const spaG = new SpaGift({
    from: from,
    to: to,
    mailSender: mailSender,
    mailReceiver: mailReceiver,
    telSender: telSender,
    telReceiver: telReceiver,
    message: message,
    number: number,
    creneau: creneau,
    sending: sending
  });

  const txt = `Bon cadeau spa de la part de ${from}: ${mailSender} ${telSender}, à ${to}: ${mailReceiver} ${telReceiver}, message: ${message}, envoi: ${sending}. ${creneau} pour ${number} personnes.`;

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
    subject: `Nouveau bon cadeau spa de ${from} : ${mailSender} / ${telSender}`,
    html: `${txt}`
  };

  transporter.sendMail(mailOptions);

  spaG.save()
    .then(() => res.status(201).json({message: 'bon cadeau spa enregistrée'}))
    .catch(error => res.status(400).json({error}));
};



