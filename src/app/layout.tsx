import "react-toastify/dist/ReactToastify.css";
import "./styles/global.scss";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "@next/font/local";
import Image from "next/image";
import Providers from "./Providers";

const gordita = localFont({
  src: [
    {
      path: "../../public/fonts/gordita/Gordita-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/gordita/Gordita-Light.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/gordita/Gordita-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gordita/Gordita-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/gordita/Gordita-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gordita/Gordita-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/gordita/Gordita-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/gordita/Gordita-BoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/gordita/Gordita-Black.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/gordita/Gordita-BlackItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-gordita",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${gordita.className} relative text-white bg-background`}
      >
        <Providers>
          <div className="relative z-20">
            <Navbar />
            <div className="min-h-screen mt-header">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
