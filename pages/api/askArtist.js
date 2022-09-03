
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { toMail, html } = req.body;

    const msg = {
      to: toMail,
      from: process.env.FROM_MAIL,
      subject: "Arte Ask for Painting",
      html: html,
    };

    await sgMail.send(msg);
    res.json({ success: true });
  }
}
