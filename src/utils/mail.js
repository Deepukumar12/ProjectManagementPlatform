import Mailgen from "mailgen";



const EmailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App! We are excited to have you on board",
            action: {
                instructions: "To verify your email please click the following button",
                button: {
                    color: "#22BC66", // Optional action button color
                    text: "Verify your email",
                    link: verificationUrl
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we would love to help"
        },
    };
};


const ForgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We got a request to reset password of your account",
            action: {
                instructions: "To reset your password please click the following button or link",
                button: {
                    color: "#22BC66", // Optional action button color
                    text: "Reset your password",
                    link: passwordResetUrl
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we would love to help"
        },
    };
};


export {
    EmailVerificationMailgenContent,
    ForgotPasswordMailgenContent
};