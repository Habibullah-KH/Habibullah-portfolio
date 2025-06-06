import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/Theme/useTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Website",
  description: "My awesome website",
  icons: {
    icon: "/mylogo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
      <ThemeProvider>
      <NavBar/>
      <div className="min-h-[calc(100dvh-300px)]">
        {children}
      </div>
      <div id="footer">
      <Footer/>
      </div>
      </ThemeProvider>
      
      </body>
    </html>
  );
}
