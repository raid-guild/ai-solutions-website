"use client";

import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

const ContactPage = () => (
  <div className="noise-bg relative min-h-screen overflow-hidden">
    <Navbar />

    <main className="relative z-10">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.07]">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M6 80 C26 34, 47 70, 66 32 S88 34, 96 17"
              fill="none"
              stroke="hsl(160 63% 50%)"
              strokeDasharray="2 3"
              strokeWidth="0.35"
            />
            <path
              d="M4 90 C23 60, 42 62, 59 48 S77 27, 97 43"
              fill="none"
              stroke="hsl(347 100% 61%)"
              strokeDasharray="1 4"
              strokeWidth="0.25"
            />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Talk to a Builder
            </p>
            <h1 className="mb-6 max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              Tell us where computer work slows your team down.{" "}
              <span className="text-primary text-glow-teal">
                We will help you find a practical AI starting point.
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Send your email and we will follow up like humans. If you want,
              add a quick snapshot of the tools, tasks, and screen-heavy work
              your team wants to make easier.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  </div>
);

export default ContactPage;
