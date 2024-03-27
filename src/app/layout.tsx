import type { Metadata } from "next";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Montserrat } from "next/font/google";
import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const montserrat = Montserrat({ subsets: ["latin"] });

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
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
