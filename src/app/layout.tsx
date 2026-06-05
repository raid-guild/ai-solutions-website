import type { Metadata } from "next";
import Providers from "@/app/providers";
import "@/index.css";

export const metadata: Metadata = {
  title: "System Weaver",
  description: "Embedded teams. Agentic systems. Operated outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
