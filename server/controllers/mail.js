'use strict';

exports.postMail = async (req, res) => {

  try {

    //array para dividir la string
    let aaar = [];

    //string después del cálculo
    let strDes = '';

    //dividir la string por comas
    aaar = req.body.obj.split(',');

    //codificar la clave
    let codedKey = encodeURI(process.env.UAI)

    //para el indice de la clave
    let indx = 0;

    //recorro cada uno de los valores
    for (let i = 0; i < aaar.length; i++) {

      //si el indice es mayor que la longitud de la clave
      if (indx + 1 === codedKey.length) {
        indx = 0
      } else {
        indx++
      }

      strDes = strDes + String.fromCharCode(parseInt(aaar[i]) + codedKey.charCodeAt(indx))

    }

    const body = JSON.parse(decodeURI(strDes));

    //Si no se envía la palabra tina
    if (body.val !== 'tina') {
      res.status(500).send("HackitCat");
    } else {

      const nodemailer = require('nodemailer');

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL,
          pass: process.env.PASSWORD
        }
      });

      console.log("Transporrter: ", transporter)

      let mailOptions = {
        from: `"Mail de la ONG 😻" <${process.env.MAIL}>`, // sender address
        replyTo: body.email,
        to: process.env.MAIL, // list of receivers
        subject: body.subject, // Subject line
        text: 'Teléfono: ' + body.telephone, // plain text body
        html: '<b>' + body.message + '</b>' // html body
      };

      console.log("Mail options: ", mailOptions)

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);

        res.status(201).jsonp(body);

      });

    }

  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }

}