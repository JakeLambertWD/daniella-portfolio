import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { bodyFont, displayFont } from "./fonts";
import { theme } from "./theme";

// TODO: Send her an invitation link. Once clicked, she will be greeted with fireworks and a happy birthday message and a click to enter Modal that will take her to the main page.
// TODO: greet her with a romantic message and a pic of me blowing her a kiss
// TODO: take colors from coolers.co with named colors - persian pink & carolina blue
// TODO: Add Framer Motion animations


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
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <ColorSchemeScript forceColorScheme="light" />
        <style>
          {/* // TODO: incase i want to remove the padding on small screens */}
          {/* {`
            @media (max-width: 500px) {
              .responsive {
                padding: 0 !important;
              }
            }
          `} */}
        </style>
      </head>
      <body className={bodyFont.className}>
        <MantineProvider theme={theme} forceColorScheme="light">
          <Header />
          <div className="responsive" style={{ padding: "0px 20px 0 20px" }}>
            {children}
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
