"use client";

import { useState } from "react";
import type { Metadata } from "next";

const faqs = [
  {
    question: "What sizes of wheels do you offer?",
    answer:
      'We offer wheels in sizes ranging from 15" to 24" to fit most vehicles. Our most popular sizes are 17", 18", 19", and 20". We can also create custom sizes for special applications.',
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes, we offer professional installation services at our authorized dealer locations. We also provide detailed installation guides for DIY enthusiasts. Contact us to find a dealer near you.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "All our wheels come with a comprehensive warranty covering manufacturing defects for 2 years. We also offer extended warranty options. Our customer service team is available to help with any warranty claims.",
  },
  {
    question: "How do I know which wheels will fit my vehicle?",
    answer:
      "You can use our vehicle fitment guide on our website, or contact our customer service team with your vehicle's make, model, and year. We'll help you find the perfect fit.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer flexible financing options through our partner lenders. You can apply for financing during checkout, and we offer 0% APR for qualified buyers on select wheel packages.",
  },
  {
    question: "What materials do you use for your wheels?",
    answer:
      "We use premium materials including forged aluminum, cast aluminum, and carbon fiber. Each material is carefully selected for its strength, weight, and performance characteristics.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days within the continental US. We also offer expedited shipping options. International shipping times vary by location. Free shipping is available on orders over $500.",
  },
  {
    question: "Can I return wheels if they don't fit?",
    answer:
      "Yes, we offer a 30-day return policy for wheels in their original condition. We recommend double-checking fitment before installation. Our customer service team can help ensure you get the right size.",
  },
  {
    question: "Do you offer custom wheel designs?",
    answer:
      "Yes, we offer custom wheel design services. Our design team can work with you to create a unique wheel that matches your vision. Custom orders typically take 4-6 weeks to complete.",
  },
  {
    question: "Are your wheels DOT approved?",
    answer:
      "Yes, all our wheels meet or exceed DOT safety standards. We also comply with international safety standards for wheels sold outside the US. Safety is our top priority.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Find answers to common questions about our custom wheels, ordering
              process, and customer service.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-gray-800"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-gray-700"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <svg
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-${index}`}
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 pb-4 opacity-100"
                      : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <p className="leading-relaxed text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Our customer service team is here to help. Contact us and we'll get
            back to you within 24 hours.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Contact Us
            </a>
            <a
              href="tel:+1-800-SPLT-WHEELS"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-gray-900"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
