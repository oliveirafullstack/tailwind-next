import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Tailwind-NextJs",
  description: "Curso de Tailwind CSS da Rocketseat",
  icons: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="antialiased" lang="pt-BR">
      <body>
        <div className="grid grid-cols-app min-h-screen">
          <Sidebar />
          <main className="pb-12 pt-8 px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
