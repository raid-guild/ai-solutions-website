import type { Metadata } from "next";
import Providers from "@/app/providers";
import "@/index.css";

export const metadata: Metadata = {
  title: "RaidGuild AI Solutions",
  description:
    "Forward-deployed AI builders creating operating layers, context infrastructure, and agent-ready workflows for teams becoming AI-enabled organizations.",
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
    <html lang="en">
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
