import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    // Passwordless / email sign in
    Providers.Email({
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>',
    }),

    Providers.Instagram({
      clientId: process.env.INSTAGRAM_ID,
      clientSecret: process.env.INSTAGRAM_SECRET,
    }),
  ],
  // Optional SQL or MongoDB database to persist users
  database: process.env.DATABASE_URL,

  callbacks: {
    redirect: async (url, baseUrl) => {
      return Promise.resolve(url)
    },
  },

  // Optional session secret
  // secret: process.env.SECRET,

  // Optional function to send emails
  // See
  //
  //  * https://nodemailer.com/
  //  *
  //  *
  //  *
  //  *

  // email: (to, from, subject, message) => {
  //   const nodemailer = require('nodemailer')
  //
  //   const transporter = nodemailer.createTransport({
  //     host: process.env.MAIL_SERVER,
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: process.env.MAIL_USER,
  //       pass: process.env.MAIL_PASS,
  //     },
  //   })
  //
  //   const mailOptions = {
  //     from: from,
  //     to: to,
  //     subject: subject,
  //     text: message,
  //   }
  //
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error(error)
  //     }
  //   })
  // },
})
