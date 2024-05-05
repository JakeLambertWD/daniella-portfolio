import type { Metadata } from "next";
import { ColorSchemeScript, createTheme, MantineProvider, CSSVariablesResolver, Modal } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { Roboto_Condensed } from "next/font/google";
import "@mantine/core/styles.css";
import SocialMediaLinks from "./SocialMediaLinks";
import Footer from "./components/Footer";
import MantineModal from "./components/MantineModal";

// TODO: Send her an invitation link. Once clicked, she will be greeted with fireworks and a happy birthday message and a click to enter Modal that will take her to the main page.
// TODO: greet her with a romantic message and a pic of me blowing her a kiss
// TODO: take colors from coolers.co with named colors - persian pink & carolina blue
// TODO: Add Framer Motion animations

export const theme = createTheme({
  /** Put your mantine theme override here */
  white: "#fff8ff",
  black: "#212121",

  colors: {
    persianPink: [
      "#d8b6b6",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ],
    carolinaBlue: [
      "#56A3A6",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ],
  },
});

const montserrat = Roboto_Condensed({ subsets: ["greek"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Daniella Makeup",
  description: "Makeup artist in London",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={montserrat.className}>
        <MantineProvider theme={theme}>
          {/* <NavigationBar /> */}
          <MantineModal />
          <div style={{ padding: "0px 20px 0 20px" }}>
            <SocialMediaLinks />
            {children}
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
