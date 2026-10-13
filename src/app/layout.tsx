import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

//! Update metadata to match your project
export const metadata: Metadata = {
  title: "Beachside Thrift - Team 6",
  description: "Team 6 Hack for Impact 2026 Bootcamp Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {}
        {children}
      </body>
    </html>
  );
}
