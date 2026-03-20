import { Mail, Phone, Send, User } from "lucide-react";

export default function OleasRealEstateWebsite() {
  const primaryLink = "https://laisdamaso.kw.com";
  const logoSrc = "/mnt/data/LOGO.png";
  const profileSrc = "/mnt/data/IMG_0794.jpeg";

  return (
    <div className="min-h-screen bg-[#0b2b24] text-[#f3e7c2]">
      <header className="sticky top-0 z-20 border-b border-[#d4b46a]/20 bg-[#0b2b24]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Oleas Real Estate logo"
              className="h-12 w-12 rounded-full border border-[#d4b46a]/40 object-cover"
            />
            <div>
              <p className="text-xl tracking-[0.35em]">OLEAS</p>
              <p className="text-xs uppercase tracking-[0.35em] text-[#f3e7c2]/70">Real Estate</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#agent" className="transition hover:text-white">Agent</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href={primaryLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d4b46a] px-4 py-2 text-sm font-medium text-[#f3e7c2] transition hover:bg-[#d4b46a] hover:text-[#0b2b24]"
          >
            View Listings
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,180,106,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(212,180,106,0.12),transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d4b46a]">
                Luxury • Trust • Growth
              </p>
              <h1 className="max-w-xl text-5xl font-light leading-tight md:text-7xl">
                Elegant real estate service, rooted in trust.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f3e7c2]/80">
                Oleas Real Estate combines refined branding, personalized service, and market knowledge
                to help clients rent, buy, and invest in Florida with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={primaryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#d4b46a] px-6 py-3 text-sm font-semibold text-[#0b2b24] transition hover:scale-[1.02]"
                >
                  Explore Properties
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[#f3e7c2]/30 px-6 py-3 text-sm font-semibold transition hover:border-[#d4b46a] hover:text-white"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="grid gap-6 md:justify-items-end">
              <div className="w-full max-w-[460px] rounded-[2rem] border border-[#d4b46a]/25 bg-[linear-gradient(180deg,#123c33,#0a241e)] p-6 shadow-2xl shadow-black/30">
                <img
                  src={logoSrc}
                  alt="Oleas Real Estate"
                  className="mx-auto h-auto w-full max-w-[320px] rounded-[1.5rem] object-cover"
                />
                <div className="mt-6 rounded-2xl border border-[#d4b46a]/20 bg-black/10 p-5 text-left">
                  <p className="text-sm leading-7 text-[#f3e7c2]/80">
                    Inspired by nature and elevated by sophistication, Oleas represents stability,
                    prosperity, and a tailored real estate experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4b46a]">About Oleas</p>
              <h3 className="mt-4 text-3xl font-light md:text-5xl">A brand rooted in elegance, trust, and long-term value.</h3>
            </div>
            <div>
              <p className="text-lg leading-8 text-[#f3e7c2]/80">
                Oleas Real Estate was created to offer more than a transaction. Our mission is to guide
                clients through every step of the real estate journey with care, strategy, and clarity.
                Inspired by the tree in our identity, we represent strong foundations, growth, and prosperity.
              </p>
              <p className="mt-5 text-lg leading-8 text-[#f3e7c2]/80">
                Whether you are searching for a rental, buying your next home, or exploring investment
                opportunities in Florida, Oleas delivers a polished and personalized experience designed
                to help you move with confidence.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-black/10 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4b46a]">Services</p>
              <h3 className="mt-4 text-3xl font-light md:text-5xl">A full-service real estate experience.</h3>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Rent",
                  text: "Helping tenants find the right property with speed, guidance, and support from search to approval.",
                },
                {
                  title: "Buy",
                  text: "Personalized assistance for buyers looking for a home, a second property, or a relocation opportunity.",
                },
                {
                  title: "Invest",
                  text: "Strategic support for investors seeking value, growth, and opportunities across the Florida market.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#d4b46a]/20 bg-[#10362e]/60 p-8 shadow-lg shadow-black/15"
                >
                  <div className="mb-5 h-1.5 w-14 rounded-full bg-[#d4b46a]" />
                  <h4 className="text-2xl font-light">{item.title}</h4>
                  <p className="mt-4 leading-8 text-[#f3e7c2]/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="agent" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-[#d4b46a]/20 bg-[#10362e]/40 p-4">
              <img
                src={profileSrc}
                alt="Lais Damaso"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4b46a]">Meet Lais</p>
              <h3 className="mt-4 text-3xl font-light md:text-5xl">A personalized real estate experience with Lais Damaso.</h3>
              <p className="mt-6 text-lg leading-8 text-[#f3e7c2]/80">
                Lais Damaso is dedicated to helping clients navigate the Florida real estate market with
                confidence, clarity, and personal attention. With a refined approach and strong commitment
                to service, she works closely with renters, buyers, and investors to identify the right
                opportunities and make each step of the process feel simple and strategic.
              </p>
              <p className="mt-5 text-lg leading-8 text-[#f3e7c2]/80">
                Through Oleas Real Estate, Lais combines elegant branding with responsive support, creating
                a client experience that feels professional, welcoming, and results-driven.
              </p>
              <a
                href={primaryLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#d4b46a] px-6 py-3 text-sm font-semibold text-[#0b2b24] transition hover:scale-[1.02]"
              >
                View My Keller Williams Page
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,rgba(212,180,106,0.10),rgba(212,180,106,0.04))] py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4b46a]">Connected Platform</p>
            <h3 className="mt-4 text-3xl font-light md:text-5xl">Browse more opportunities through our Keller Williams page.</h3>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#f3e7c2]/80">
              Oleas Real Estate is linked to our Keller Williams platform, giving you access to current
              listings, additional property options, and a wider network of real estate opportunities.
            </p>
            <a
              href={primaryLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#d4b46a] px-6 py-3 text-sm font-semibold text-[#0b2b24] transition hover:scale-[1.02]"
            >
              Visit laisdamaso.kw.com
            </a>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-8 rounded-[2rem] border border-[#d4b46a]/20 bg-[#10362e]/50 p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4b46a]">Lead Form</p>
              <h3 className="mt-4 text-3xl font-light md:text-5xl">Let’s find your next opportunity.</h3>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#f3e7c2]/80">
                Share your information and a few details about what you are looking for. This form is ready
                for lead capture and can later be connected to your email, CRM, or automation tool.
              </p>

              <div className="mt-8 grid gap-4 text-[#f3e7c2]/85">
                <div className="rounded-2xl border border-[#d4b46a]/20 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d4b46a]">Website</p>
                  <a href={primaryLink} target="_blank" rel="noreferrer" className="mt-2 block text-lg hover:text-white">
                    laisdamaso.kw.com
                  </a>
                </div>
                <div className="rounded-2xl border border-[#d4b46a]/20 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d4b46a]">Brand Style</p>
                  <p className="mt-2 text-lg">Luxury, natural elegance, strong roots, and trusted service.</p>
                </div>
              </div>
            </div>

            <form className="grid gap-4 rounded-[1.75rem] border border-[#d4b46a]/20 bg-[#0b2b24]/60 p-6">
              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.25em] text-[#d4b46a]">Full Name</span>
                <div className="flex items-center rounded-2xl border border-[#f3e7c2]/15 bg-black/10 px-4">
                  <User className="mr-3 h-4 w-4 text-[#d4b46a]" />
                  <input className="w-full bg-transparent py-3 outline-none placeholder:text-[#f3e7c2]/35" placeholder="Your full name" />
                </div>
              </label>

              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.25em] text-[#d4b46a]">Email</span>
                <div className="flex items-center rounded-2xl border border-[#f3e7c2]/15 bg-black/10 px-4">
                  <Mail className="mr-3 h-4 w-4 text-[#d4b46a]" />
                  <input type="email" className="w-full bg-transparent py-3 outline-none placeholder:text-[#f3e7c2]/35" placeholder="Your email address" />
                </div>
              </label>

              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.25em] text-[#d4b46a]">Phone</span>
                <div className="flex items-center rounded-2xl border border-[#f3e7c2]/15 bg-black/10 px-4">
                  <Phone className="mr-3 h-4 w-4 text-[#d4b46a]" />
                  <input className="w-full bg-transparent py-3 outline-none placeholder:text-[#f3e7c2]/35" placeholder="Your phone number" />
                </div>
              </label>

              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.25em] text-[#d4b46a]">What are you looking for?</span>
                <select className="rounded-2xl border border-[#f3e7c2]/15 bg-black/10 px-4 py-3 outline-none">
                  <option className="text-black">Renting</option>
                  <option className="text-black">Buying</option>
                  <option className="text-black">Investing</option>
                  <option className="text-black">Relocation</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.25em] text-[#d4b46a]">Message</span>
                <textarea
                  rows={5}
                  className="rounded-2xl border border-[#f3e7c2]/15 bg-black/10 px-4 py-3 outline-none placeholder:text-[#f3e7c2]/35"
                  placeholder="Tell us what type of property you are looking for"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#d4b46a] px-6 py-3 text-sm font-semibold text-[#0b2b24] transition hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d4b46a]/15 px-6 py-8 text-center text-sm text-[#f3e7c2]/60">
        © {new Date().getFullYear()} Oleas Real Estate. All rights reserved.
      </footer>
    </div>
  );
}
