import NextAuth, { NextAuthOptions } from "next-auth";
import prisma from "../../../../../prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import users from "../../../../../helpers/constants";

const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;
      
        const user = users.find((user) => user.email === credentials.email);
      
        if (!user) return null;
      
        if (user.password !== credentials.password) return null;

        return user;
      }
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
