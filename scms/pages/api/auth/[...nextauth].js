import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyUser } from '../../../backend/user'; // You can reuse the logic from your backend

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Replace this with your actual verification logic
        const user = await verifyUser(credentials.email, credentials.password);

        if (user) {
          return { id: user.customerID, email: user.email };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',  // Specify the login page
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Store customerID
        token.email = user.email; // Store email
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    }
  }
});
