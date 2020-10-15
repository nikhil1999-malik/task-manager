const SgMail=require('@sendgrid/mail')


SgMail.setApiKey(process.env.SgAPIKey)

const sendWelcomeEmail=(email,name)=>{
    SgMail.send({
        to:email,
        from:'nikhilmalikp@gmail.com',
        subject:'Thanks for joining in',
        text:`Welcome to the App, ${name}.Let me know how you get along with the app`
    })
}
const SendCancelationEmail=(email,name)=>{
    SgMail.send({
        to:email,
        from:'nikhilmalikp@gmail.com',
        subject:'Reason for Deleting an Email',
        text:`Hope you you'll join soon, ${name}.Let me know how you get along with the app`
    })
}


module.exports={
    sendWelcomeEmail,
    SendCancelationEmail
}