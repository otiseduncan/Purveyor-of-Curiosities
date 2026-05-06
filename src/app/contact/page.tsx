import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Purveyor of Curiosities about item details, pickup options, shipping questions, and availability.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-charcoal text-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <a href="/" className="text-sm font-semibold text-gold transition hover:text-ivory">
          ← Back to home
        </a>

        <h1 className="mt-6 font-serif text-4xl font-black md:text-5xl">Contact</h1>

        <div className="mt-8 space-y-6 rounded-[2rem] border border-bronze/60 bg-espresso/75 p-8 text-sand">
          <p>
            Questions are welcome. Reach out for item condition details, pickup logistics, shipping options, and current availability.
          </p>
          <p>
            Email: <a className="font-semibold text-gold hover:text-ivory" href="mailto:contact@purveyorofcuriosities.com">contact@purveyorofcuriosities.com</a>
          </p>
          <p>
            Looking to browse what is available right now? Head back to the collection and explore the newest finds.
          </p>
          <a
            href="/#shop"
            className="inline-flex rounded-full border border-gold bg-gold px-5 py-3 text-sm font-bold text-charcoal transition hover:bg-[#D8AF5A]"
          >
            Browse the Collection
          </a>
        </div>
      </div>
    </main>
  );
}
