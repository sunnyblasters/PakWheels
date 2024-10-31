
import {Lato} from "next/font/google";
import {Poppins} from "next/font/google";
import "./globals.css";
import NavBar from "./component/header/Navbar";

import TopBar from "./component/header/Topbar";
import Footer from "./component/footer/footer";

const lato_init = Lato({
  subsets: ["latin"],
  weight: ['100', '300','400','700','900'],
  variable: '--lato_init'

});

const poppins_init = Poppins({

  subsets: ['latin'],
  weight: ['100', '300','400','500', '600', '700', '800', '900'],
  variable: '--poppins_init'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins_init.variable} ${lato_init.variable} antialiased`}
      >
        <TopBar />
        <NavBar />
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
