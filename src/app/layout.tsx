import type { Metadata } from "next";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { Roboto_Condensed } from "next/font/google";

import "@mantine/core/styles.css";
import NavigationBar from "./NavigationBar";
import SocialMediaLinks from "./SocialMediaLinks";

// TODO: take colors from coolers.co with named colors - persian pink & carolina blue
const theme = createTheme({
  /** Put your mantine theme override here */
  white: "#fff8ff",
  black: "#212121",
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
      <body className={montserrat.className} style={{ padding: "0px 20px 0 20px" }}>
        <MantineProvider theme={theme}>
          <NavigationBar />
          <SocialMediaLinks />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
