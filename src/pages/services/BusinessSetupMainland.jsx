import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import m1 from "../../assets/services/s5m1.jfif"
import m2 from "../../assets/services/s5m2.jfif"
import m3 from "../../assets/services/s5m3.jfif"
import m4 from "../../assets/services/s5m4.jfif"

const BusinessSetupMainland = () => {
  return (
    <>
      <Helmet>
        <title>Business Setup in Mainland | Desert Consultants</title>
        <meta name="description" content="Set up your mainland business in the UAE with Desert Consultants. Expert guidance on DED licensing, local sponsorship, and company formation." />
      </Helmet>

      {/* HERO */}
      <section className="mt-16 lg:mt-20 bg-white relative overflow-hidden flex items-center min-h-[420px] lg:min-h-[520px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10"></div>
          <img src={m1} alt="Dubai Mainland Business" className="w-full h-full object-cover object-right mix-blend-luminosity opacity-80" />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto w-full py-[80px] lg:py-[120px] px-6 lg:px-[48px]">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-4">Business Setup in Mainland</p>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-[900] text-[#020617] leading-[1.1] tracking-tight sm:tracking-[-3px] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Set up your<br />Mainland Business
            </h1>
            <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed mb-8 max-w-[520px]">Welcome to Desert Consultants, your trusted partners in establishing your mainland business in the UAE. We offer comprehensive solutions for mainland company formation.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-semibold px-8 py-3.5 rounded-sm transition-all duration-300">
              Connect Today <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-sm shadow-md">
              <img src={m2} alt="Office Building" className="w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Welcome to Desert Consultants</p>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-[800] text-[#0C69D0] leading-tight tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Launch your Mainland<br />Business in the UAE
              </h2>
              <div className="space-y-4 text-[15px] text-[#64748B] leading-relaxed">
                <p>Welcome to Desert Consultants, your trusted partners in establishing your mainland business in the UAE. Our experienced team understands the nuances of mainland company formation and offers personalized solutions tailored to your specific needs.</p>
                <p>From trade licensing to local sponsor arrangements, we provide comprehensive assistance throughout the entire process. We pride ourselves on delivering simple, swift, and risk-free solutions.</p>
                <p>Trust Desert Consultants for seamless and efficient mainland company formation.</p>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-semibold px-7 py-3 rounded-sm transition-all duration-300">Get Free Consultation</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Strategic Advantages of Mainland Business Setup</p>
            <h2 className="text-[28px] sm:text-[40px] font-[900] text-[#020617] leading-tight tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Navigating the Mainland Business<br />Landscape with Confidence
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[20px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Mainland Business Setup</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed mb-6">Setting up a mainland business in the UAE offers significant advantages including access to the local market, ability to trade directly without restrictions, and opportunities to bid for government contracts. Mainland companies can operate anywhere in the UAE.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-semibold px-6 py-2.5 rounded-sm text-sm transition-all duration-300">Let's Connect</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[20px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Why Choose Mainland Setup?</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed mb-6">Mainland business setup provides greater flexibility in business activities, no restrictions on trading within the UAE, and the ability to expand operations across the country. Desert Consultants guides you through every step of the process.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-semibold px-6 py-2.5 rounded-sm text-sm transition-all duration-300">Let's Connect</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Setting up a Mainland Business</p>
            <h2 className="text-[28px] sm:text-[40px] font-[900] text-[#020617] leading-tight tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Steps to Set Up a Mainland Business</h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed mb-4">Setting up a mainland business in the UAE may appear complex, but Desert Consultants is here to simplify the process for you.</p>
            <p className="text-[16px] font-bold text-[#0f172a] mb-6">Let's streamline your journey to establishing a mainland business:</p>
            <div className="space-y-4 mb-8">
              {["Determine the business activity and legal structure for your mainland company.", "Obtain initial approval from the Department of Economic Development (DED).", "Draft the Memorandum of Association (MOA) and arrange for local sponsor services if required.", "Secure office space and obtain the tenancy contract (Ejari).", "Submit all documents and pay the required fees for your trade license.", "Complete visa processing and open a corporate bank account."].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#0C69D0] text-white text-[12px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                  <p className="text-[15px] text-[#64748B] leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-[15px] text-[#64748B] leading-relaxed">These steps require coordination with various authorities to ensure a smooth and successful business setup.</p>
          </motion.div>
        </div>
      </section>

      {/* HOW WE ASSIST */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Desert Consultants is your trusted partner</p>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-[800] text-[#0C69D0] leading-tight tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                How Desert Consultants<br />Will Assist You
              </h2>
              <div className="space-y-4 text-[15px] text-[#64748B] leading-relaxed">
                <p>Desert Consultants is your trusted partner in establishing a mainland business in the UAE. Our team of expert Business Consultants will guide you through the entire process.</p>
                <p>We'll educate you about the latest business regulations and provide tailored business packages to precisely meet your requirements.</p>
                <p>We're here to make your mainland business venture a seamless and successful experience.</p>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-semibold px-8 py-3.5 rounded-sm transition-all duration-300">
                Talk to an Expert <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-hidden rounded-sm shadow-md">
              <img src={m3} alt="Business Handshake" className="w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-20 lg:py-24 bg-[#0C69D0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0C69D0]/85 mix-blend-multiply z-10"></div>
          <img src={m4} alt="Business Consultation" className="w-full h-full object-cover object-center opacity-70" />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 lg:px-[48px] text-center">
          <p className="text-[14px] font-bold text-white/90 uppercase tracking-[0.2em] mb-4">GET IN TOUCH</p>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-[900] text-white leading-tight tracking-tight mb-10 max-w-4xl mx-auto" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            Searching for the BEST Mainland<br />Business Setup Service?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[#0C69D0] font-semibold px-8 py-3.5 rounded-sm transition-all duration-300">
            Connect with us <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-10 bg-white overflow-hidden border-b border-gray-100">
        <div className="whitespace-nowrap flex items-center animate-marquee">
          {[1, 2, 3, 4].map((_, idx) => (
            <span key={idx} className="inline-flex items-center">
              <span className="text-[40px] sm:text-[56px] lg:text-[72px] font-[900] text-[#0C69D0]/20 px-8 inline-block" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Desert Consultants: Your Trusted Mainland Business Setup Partner
              </span>
              <span className="text-[#0C69D0]/20 text-[40px]">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* FAQS */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <h2 className="text-[28px] sm:text-[40px] font-[900] text-[#020617] leading-tight tracking-tight mb-12 text-center" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: What is the difference between mainland and free zone?</h3>
              <div className="space-y-3 text-[15px] text-[#64748B] leading-relaxed">
                <p>Mainland companies can trade anywhere in the UAE and have no restrictions on business activities, while free zone companies are limited to operating within their designated free zone area.</p>
                <p>Mainland companies may require a local sponsor, whereas free zone companies offer 100% foreign ownership.</p>
              </div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: Do I need a local sponsor for mainland business?</h3>
              <div className="space-y-3 text-[15px] text-[#64748B] leading-relaxed">
                <p>For most mainland business activities, a local sponsor or service agent is required. However, recent reforms have allowed 100% foreign ownership in many sectors.</p>
              </div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: How long does mainland business setup take?</h3>
              <div className="space-y-3 text-[15px] text-[#64748B] leading-relaxed">
                <p>The mainland business setup process typically takes 2-4 weeks, depending on the business activity and documentation requirements.</p>
              </div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: What are the costs for mainland business setup?</h3>
              <div className="space-y-3 text-[15px] text-[#64748B] leading-relaxed">
                <p>Mainland business setup costs typically range from AED 20,000 to AED 30,000, depending on the business activity, license type, and office space requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-[#0C69D0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px] text-center">
          <h2 className="text-[28px] sm:text-[40px] font-[900] text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Ready to Start Your Mainland Business?</h2>
          <p className="text-white/80 text-[16px] mb-8 max-w-xl mx-auto">Our experts are available to guide you through every step. Get a free, no-obligation consultation today.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#0C69D0] font-bold px-10 py-3.5 rounded-sm hover:bg-gray-100 transition-all duration-300">
            Talk to an Expert <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BusinessSetupMainland;