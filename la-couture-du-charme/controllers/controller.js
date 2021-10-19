const Message = require('../model/message');
const Nodemailer = require('nodemailer');

exports.sendMessage = (req, res) => {
    console.log('coucou')
    let {name, phone, mail, spam, message} = req.body;
    console.log(message)
    var txt = spam ;

    const msg = new Message({
      name: name,
      phone: phone,
      mail: mail,
      spam: spam,
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



