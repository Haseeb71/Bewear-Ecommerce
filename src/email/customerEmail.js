const express = require("express");
function customerEmail(email,password){
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "93dbde6c8cf2c3",
            pass: "fdc0c5c456744d"
        }
    })
    let details = {
        from: "protip71@gmail.com",
        to: email,
        subject: "Testing Node Emails",
        text: `bewear ! your password is: ${password}`
    }
    try {
        transport.sendMail(details);
        console.log("Email Sent");
        
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
}

module.exports = customerEmail;