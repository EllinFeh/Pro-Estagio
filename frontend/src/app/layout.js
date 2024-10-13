import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const Inter = localFont({
  src: "./fonts/inter.ttf",
  variable: "inter-font",
  weight: "100 900",
});

export const metadata = {
  title: "IFPE ProEstagio",
  description: "Sistema de estágio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <body className={`${Inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
