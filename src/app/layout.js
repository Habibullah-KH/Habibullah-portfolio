import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/Theme/useTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
      <ThemeProvider>
      <NavBar/>
      <div className="min-h-[calc(100dvh-300px)]">
        {children}
      </div>
      <Footer/>
      </ThemeProvider>
      
      </body>
    </html>
  );
}
