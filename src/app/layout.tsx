import type { Metadata } from "next";
import Providers from "@/app/providers";
import "@/index.css";

export const metadata: Metadata = {
  title: "RaidGuild AI Solutions",
  description:
    "Forward-deployed AI builders creating operating layers, context infrastructure, and agent-ready workflows for teams becoming AI-enabled organizations.",
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
