const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'jduma108@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'jduma108@gmail.com',
        subject: 'Goodbye!',
        text: `Sorry to see you go ${name}! Please let us know why you are leaving.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}