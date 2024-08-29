import type { Metadata } from "next";
import ReduxProvider from "@/Redux/provider";
import { ApolloWrapper } from "@/lib/client";

import "./fonts.css";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { footer, header } from "@/data/wrapperData";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Talent Kaksha",
  description: "Find Course that Suits You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-orange-50 !antialiased">
        <ReduxProvider>
          <ApolloWrapper>
            <ScrollToTopButton />
            {/* <Header header={header} /> */}
            {children}
            {/* <Footer footer={footer} /> */}
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
