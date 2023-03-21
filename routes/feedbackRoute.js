const express = require("express");
const nodemailer = require('nodemailer')

module.exports = (app) => {

    
    app.post('/feedback' ,async (req,res) => {
    
        const Email = await req.body.email 
        const subject = await req.body.subject
        const description = await req.body.description 
   
        console.log( Email , subject , description );

        async function main() {

          let transporter = nodemailer.createTransport({
            
              service: 'gmail',  // true for 465, false for other ports
              auth: {
                user: 'harshalmakwana84@gmail.com', // generated ethereal user
                pass: 'lbxyjsvjsjzdlxli', // generated ethereal password
              }
            });
          
            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: Email, // sender address
              to: "harshalmakwana84@gmail.com", // list of receivers
              subject: subject, // Subject line
              text: description, // plain text body
              html: `<h1>From ${Email}</h1>
              <p>     
              <h4> ${description} </h4>
               </p>
              `
          
              // html body
            });
          
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          
            if(info.messageId)
            {
             res.render('contact')
           }
          }
          
          main().catch(console.error);
      
         
   
   
   })

   


}

