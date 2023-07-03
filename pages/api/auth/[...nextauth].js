import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        // callbackUrl: 'http://localhost:3000/api/auth/callback/google',
        //  redirect: false,
      }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        // callbackUrl: 'http://localhost:3000/api/auth/callback/facebook',
        // redirect: true,
        }),
  ]
})