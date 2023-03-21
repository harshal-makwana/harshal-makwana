
const nodemailer = require('nodemailer')


module.exports = (app) => {
    
    async function main() {

        let transporter = nodemailer.createTransport({
          
            service: 'gmail',  // true for 465, false for other ports
            auth: {
              user: 'harshalmakwana84@gmail.com', // generated ethereal user
              pass: 'harshal333', // generated ethereal password
            },
          });
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <harshalmakwana@protonmail.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        
        }
        
        main().catch(console.error);
}