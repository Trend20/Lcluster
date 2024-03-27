"use client";

import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLogin = pathname === "/auth/signin";
  const isRegister = pathname === "/auth/signup";
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextAuthProvider>
          {loading ? (
            <Loader />
          ) : (
            <div className="flex w-full flex-col">
              {!isLogin && !isRegister && <Header />}
              <main className="min-h-screen">{children}</main>
              {!isLogin && !isRegister && <Footer />}
              <ScrollToTop />
            </div>
          )}
        </NextAuthProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
