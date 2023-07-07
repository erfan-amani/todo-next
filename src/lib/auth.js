import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credential",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          let response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(credentials),
            }
          );

          let user = await response.json();

          if (user) {
            return user;
          } else {
            response = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
              }
            );

            user = await response.json();

            return user;
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

export const getAuthHeader = () => {
  const token = cookies().get("next-auth.session-token")?.value;

  return { Authorization: `Bearer ${token}` };
};
