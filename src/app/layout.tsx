import type { Metadata } from "next";
import { Source_Sans_3, Lora } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Gobierno Bolivariano de Nueva Esparta - Portal Oficial",
  description: "Portal Oficial de la Gobernación del estado Bolivariano de Nueva Esparta. Dirección del Poder Popular para la Tecnología de Comunicación e Informaciones GBNE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <ClientBody className={`${sourceSans.variable} ${lora.variable} font-sans`}>
        {children}
      </ClientBody>
    </html>
  );
}
