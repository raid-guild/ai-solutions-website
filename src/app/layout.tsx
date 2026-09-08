import type { Metadata } from "next";
import Providers from "@/app/providers";
import { ebGaramond, maziusDisplay, ubuntuMono } from "@/lib/fonts";
import "@/index.css";

export const metadata: Metadata = {
  title: "RaidGuild AI Solutions",
  description:
    "Hands-on AI bootstrap for owner-led businesses: simple workflows, practical habits, and guidance your team can keep using.",
  icons: {
    icon: "/images/Logomark.svg",
    shortcut: "/images/Logomark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-brand-reign="louchi" className="dark">
      <head>
        <script
          async
          src="https://plausible-production-78b3.up.railway.app/js/pa-0UNKvm2xqDLJ3uRNf69-o.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};\nplausible.init()",
          }}
        />
      </head>
      <body
        className={`${maziusDisplay.variable} ${ebGaramond.variable} ${ubuntuMono.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
