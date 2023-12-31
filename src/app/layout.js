import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./components/Provider";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo",
  description: "Manage your tasks easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Provider>
            <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-blue-200 dark:from-blue-950 to-purple-400 dark:to-neutral-950">
              <div className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-2xl px-4 py-5 sm:px-10 sm:py-6 lg:px-12 text-sm sm:taxt-base h-5/6 w-10/12 sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-1/3 shadow-xl gap-8 font-mono">
                {children}
              </div>
            </div>
          </Provider>
        </body>
      </ThemeProvider>
    </html>
  );
}
