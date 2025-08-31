import type { Metadata } from "next";
import Link from "next/link";

import { AuthUI } from "@/app/_components/auth-ui";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export const metadata: Metadata = {
  title: "SPLT Wheels - Premium Custom Wheels & Rims",
  description:
    "Discover our premium collection of custom wheels and rims. High-quality, stylish designs for all vehicles. Free shipping on orders over $500.",
  keywords:
    "custom wheels, rims, alloy wheels, car wheels, truck wheels, SUV wheels, premium wheels",
  openGraph: {
    title: "SPLT Wheels - Premium Custom Wheels & Rims",
    description:
      "Discover our premium collection of custom wheels and rims. High-quality, stylish designs for all vehicles.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Home() {
  const session = await auth();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-4 text-center text-white sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Premium <span className="text-blue-400">Custom Wheels</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-200 md:text-2xl">
              Elevate your ride with our handcrafted, high-performance wheels.
              Designed for style, built for performance.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="transform rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-800 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl">
              Why Choose SPLT Wheels?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Premium Quality
                </h3>
                <p className="text-gray-300">
                  Crafted from the finest materials with precision engineering
                  for lasting performance.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Fast Delivery
                </h3>
                <p className="text-gray-300">
                  Free shipping on orders over $500. Get your wheels delivered
                  to your door.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Custom Fit
                </h3>
                <p className="text-gray-300">
                  Perfect fit guarantee. We ensure your wheels match your
                  vehicle specifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Transform Your Ride?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Browse our collection of premium custom wheels and find the
              perfect match for your vehicle.
            </p>
            <Link
              href="/shop"
              className="inline-block transform rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            >
              Explore Collection
            </Link>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
