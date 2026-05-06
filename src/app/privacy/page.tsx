import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy statement for Purveyor of Curiosities and how inquiry information is handled.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-charcoal text-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <a href="/" className="text-sm font-semibold text-gold transition hover:text-ivory">
          ← Back to home
        </a>

        <h1 className="mt-6 font-serif text-4xl font-black md:text-5xl">Privacy</h1>

        <div className="mt-8 space-y-6 rounded-[2rem] border border-bronze/60 bg-espresso/75 p-8 text-sand">
          <p>
            We collect basic contact details that you share with us when you submit an inquiry or request information about an item.
          </p>
          <p>
            Contact information is used only to respond to your questions, coordinate availability, and assist with shipping or pickup conversations.
          </p>
          <p>
            We do not sell personal information to third parties.
          </p>
          <p>
            If you need help with a privacy question, contact us directly and we will respond as soon as possible.
          </p>
        </div>
      </div>
    </main>
  );
}
