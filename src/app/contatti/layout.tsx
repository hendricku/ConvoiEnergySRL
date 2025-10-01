import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const bodyStyle = {
  margin: 0,
  padding: 0
}

export const metadata: Metadata = {
  title: "Convoi Energy SRL | Contatti",
  description: 'Soluzioni energetiche innovative per privati e aziende. Proposte personalizzate su misura per te. Reali esigenze soddisfatte.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={bodyStyle}>{children}</body>
    </html>
  );
}
