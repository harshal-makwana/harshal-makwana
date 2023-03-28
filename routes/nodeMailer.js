
const nodemailer = require('nodemailer')
require('dotenv').config();

module.exports = (app) => {
    
    async function main() {

        let transporter = nodemailer.createTransport({
          
            service: 'gmail',  // true for 465, false for other ports
            auth: {
              user: process.env.GMAIL_USER, // generated ethereal user
              pass: process.env.GMAIL_PASS, // generated ethereal password
            },
          });
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <harshalmakwana@protonmail.com>', // sender address
            to: "harshalmakwana@protonmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
        
        
        }
        
        main().catch(console.error);
}