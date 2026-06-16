import type { Metadata } from "next";
import Providers from "@/app/providers";
import "@/index.css";

export const metadata: Metadata = {
  title: "RaidGuild AI Solutions",
  description:
    "Forward deployed AI operators building agentic systems, context infrastructure, and operated automation for teams with complex workflows.",
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
