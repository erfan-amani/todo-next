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
          const loginResponse = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(credentials),
            }
          );

          const loginData = await loginResponse.json();

          if (loginData.error) {
            throw loginData.error;
          }

          if (loginData.user) {
            return loginData.user;
          } else {
            const registerResponse = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
              }
            );

            const registerData = await registerResponse.json();

            return registerData.user;
          }
        } catch (error) {
          const errorResponse =
            typeof error === "string" ? { message: error } : error;

          return Promise.reject(errorResponse);
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

export const getAuthHeader = async () => {
  const token = await cookies().get(process.env.COOKIE_TOKEN_NAME)?.value;

  return { Authorization: `Bearer ${token}` };
};
