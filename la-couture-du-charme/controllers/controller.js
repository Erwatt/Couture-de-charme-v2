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
        service: 'ethereal',
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'king.hayes@ethereal.email',
          pass: 'nKQqWyhsaBmZeg21Ua'
        }
    });

    const mailOptions = {
        from: 'king.hayes@ethereal.email',
        to: 'david@minucci.tech',
        subject: `Nouveau message de ${name} : ${mail} / ${phone}`,
        html: `${txt}`
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
          console.log(error)
          res.json({ msg: 'fail' })
      }
      else {
          console.log('Message envoyé !')
          res.json({ msg: 'success' })
      }
  })

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



