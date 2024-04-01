const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs/promises");
const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Function to generate a random OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit OTP
}

async function sendNotificationMail(email, action) {
    try {
        let templatePath = "";

        if (action === "verifyOtp") {
            templatePath = path.join(__dirname, "./template/otp.hbs");
        }

        const templateContent = await fs.readFile(templatePath, "utf-8");
        const template = handlebars.compile(templateContent);

        let otpCode = generateOTP(); // Generate OTP
        let templateData = {
            otpCode: otpCode
        };

        let emailBody = template(templateData);

        const { document } = new JSDOM(emailBody).window;
        const titleElement = document.querySelector("title");
        const subject = titleElement ? titleElement.textContent : "Verification Email";

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            html: emailBody,
        };

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASSWORD,
            },
        });
        await transporter.sendMail(mailOptions);
        const data = {
            otpCode : otpCode
        }
        return data
    } catch (error) {
        console.error(error);
    }
}

module.exports = sendNotificationMail;
