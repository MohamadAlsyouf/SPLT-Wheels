import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SPLT Wheels - your trusted source for premium custom wheels and rims. Discover our story, mission, and commitment to quality.",
  keywords:
    "about SPLT Wheels, custom wheels company, wheel manufacturer, premium rims, wheel quality",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              About SPLT Wheels
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              We're passionate about creating the finest custom wheels that
              combine style, performance, and durability for automotive
              enthusiasts worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Our Story</h2>
              <p className="mb-4 text-gray-300">
                Founded in 2015, SPLT Wheels began with a simple mission: to
                create the most innovative and high-quality custom wheels in the
                industry. What started as a small workshop has grown into a
                leading manufacturer of premium wheels trusted by car
                enthusiasts and professionals alike.
              </p>
              <p className="mb-4 text-gray-300">
                Our team of engineers and designers work tirelessly to push the
                boundaries of wheel design and manufacturing technology. We
                combine cutting-edge materials with traditional craftsmanship to
                create wheels that not only look stunning but also perform
                flawlessly.
              </p>
              <p className="text-gray-300">
                Today, SPLT Wheels is proud to serve customers worldwide,
                offering a comprehensive range of custom wheels for cars,
                trucks, and SUVs of all makes and models.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="SPLT Wheels workshop"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Our Mission</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              To provide automotive enthusiasts with the highest quality custom
              wheels that enhance both the performance and aesthetics of their
              vehicles.
            </p>
          </div>
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
                Quality First
              </h3>
              <p className="text-gray-300">
                Every wheel we produce meets the highest standards of quality
                and safety.
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Innovation
              </h3>
              <p className="text-gray-300">
                We continuously innovate to bring you the latest in wheel
                technology and design.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Customer Focus
              </h3>
              <p className="text-gray-300">
                Your satisfaction is our priority. We're here to help you find
                the perfect wheels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">
                50K+
              </div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">
                100+
              </div>
              <div className="text-gray-300">Wheel Designs</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">
                8
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">
                24/7
              </div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Our Team</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Meet the passionate individuals behind SPLT Wheels who make it all
              possible.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gray-700">
                <span className="text-4xl text-gray-400">👨‍💼</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                John Smith
              </h3>
              <p className="mb-2 text-blue-400">Founder & CEO</p>
              <p className="text-gray-300">20+ years in automotive industry</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gray-700">
                <span className="text-4xl text-gray-400">👩‍🔬</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Sarah Johnson
              </h3>
              <p className="mb-2 text-blue-400">Head of Design</p>
              <p className="text-gray-300">Award-winning wheel designer</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gray-700">
                <span className="text-4xl text-gray-400">👨‍🔧</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Mike Chen
              </h3>
              <p className="mb-2 text-blue-400">Lead Engineer</p>
              <p className="text-gray-300">Materials science expert</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
