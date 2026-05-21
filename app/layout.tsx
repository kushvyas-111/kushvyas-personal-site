import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { PROFILE } from "./data";
import Nav from "./components/Nav";

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
      <body className="font-sans antialiased text-black">
        <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6 py-10 md:py-14">
          {/* Site header — shown on every page */}
          <header className="flex flex-col gap-4 border-b border-blue-100 pb-6">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="text-2xl font-semibold tracking-tight text-black hover:text-blue-700"
              >
                {PROFILE.name}
              </Link>
              <p className="text-sm text-black/70">
                {PROFILE.headline} · {PROFILE.location}
              </p>
            </div>
            <Nav />
          </header>

          {/* Page content */}
          <main className="flex-1 py-10">{children}</main>

          {/* Footer */}
          <footer className="border-t border-blue-100 pt-6 text-xs text-black/50">
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js,
            deployed on Vercel.
          </footer>
        </div>
      </body>
    </html>
  );
}
