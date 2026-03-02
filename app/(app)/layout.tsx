import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/Sidebar/SideBar";
import Header from "./components/Dashboard/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atelier",
  description:
    "Atelier - Votre assistant IA pour une expérience client exceptionnelle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathName = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col bg-white">
          <div className="flex">
            <SideBar />
            <div className="flex flex-col w-full ">
              {/* <Header /> */}
              <Header />
              {children}
            </div>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
