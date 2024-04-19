import { Inter } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <Head>
          <link rel="icon" href="/images/icon/favicon.ico" type="image/x-icon"/>
      </Head>
      <body className={inter.className}>{children}</body>


      </html>
  );
}