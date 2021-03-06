import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapter from 'next-auth/adapters'

import prisma from '@/lib/prisma'

export default NextAuth({
  providers: [
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
  ],
  // Optional SQL or MongoDB database to persist users
  adapter: Adapter.Prisma.Adapter({ prisma }),

  secret: process.env.JWT_SECRET,

  // pages: {
  //   signIn: '/api/auth/signin',
  //   signOut: '/api/auth/signout',
  //   verifyRequest: '/api/auth/verify-request',
  // },

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
