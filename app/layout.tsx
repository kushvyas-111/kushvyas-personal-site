import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kush Vyas — MSBA @ Boston University",
  description:
    "Kush Vyas — Research-driven business analyst. MSBA candidate at Boston University. SQL, Python, Power BI, finance and supply chain analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
