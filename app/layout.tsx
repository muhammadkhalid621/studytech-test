import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyTech AWS Personalisation Engine",
  description: "Mini AWS Cloud Practitioner study recommendation prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
