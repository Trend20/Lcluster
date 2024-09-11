"use client";

import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";
import ScrollToTop from "@/components/common/ScrollToTop";
import Providers from "@/store/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLogin = pathname === "/auth/signin";
  const isRegister = pathname === "/auth/signup";

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <NextAuthProvider>
              <div className="flex w-full flex-col">
                {!isLogin && !isRegister && <Header />}
                <main className="min-h-screen">{children}</main>
                {!isLogin && !isRegister && <Footer />}
                <ScrollToTop />
              </div>
          </NextAuthProvider>
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
