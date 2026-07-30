import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import m1 from "../../assets/services/s2m1.jfif"
import m2 from "../../assets/services/s2m2.jfif"
import m3 from "../../assets/services/s2m3.jfif"
import m4 from "../../assets/services/s2m4.jfif"


const BankingAssistance = () => {
  return (
    <>
      <Helmet>
        <title>Banking Assistance | Desert Consultants</title>
        <meta name="description" content="Expert banking assistance in the UAE from Desert Consultants. Corporate account opening, bank selection, and KYC support." />
      </Helmet>

      <section className="mt-16 lg:mt-20 bg-white relative overflow-hidden flex items-center min-h-[420px] lg:min-h-[520px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10"></div>
          <img src={m1} alt="Banking" className="w-full h-full object-cover object-right mix-blend-luminosity opacity-80" />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto w-full py-[80px] lg:py-[120px] px-6 lg:px-[48px]">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-4">Banking Assistance</p>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-[900] text-[#020617] leading-[1.1] tracking-tight sm:tracking-[-3px] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Expert Banking<br />Assistance in UAE</h1>
            <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed mb-8 max-w-[520px]">Welcome to Desert Consultants, your trusted partners in opening corporate bank accounts in the UAE.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-semibold px-8 py-3.5 rounded-sm transition-all duration-300">Connect Today <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-sm shadow-md">
              <img src={m2} alt="Bank Building" className="w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Welcome to Desert Consultants</p>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-[800] text-[#0C69D0] leading-tight tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Hassle-Free Banking<br />Solutions for Your Business</h2>
              <div className="space-y-4 text-[15px] text-[#64748B] leading-relaxed">
                <p>Welcome to Desert Consultants, your trusted partners for banking assistance in the UAE. Our experienced team helps you navigate the banking landscape.</p>
                <p>From document preparation to bank selection, we provide comprehensive support throughout the account opening process.</p>
                <p>Trust Desert Consultants for smooth and efficient banking setup.</p>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-semibold px-7 py-3 rounded-sm transition-all duration-300">Get Free Consultation</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Why Banking Assistance Matters</p>
            <h2 className="text-[28px] sm:text-[40px] font-[900] text-[#020617] leading-tight tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Open Your Corporate Account<br />with Confidence</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[20px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Expert Guidance</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed mb-6">Our team has extensive experience working with UAE and international banks. We guide you through the documentation and compliance requirements for a smooth account opening process.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-semibold px-6 py-2.5 rounded-sm text-sm transition-all duration-300">Let's Connect</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[20px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Time-Saving Support</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed mb-6">We handle all the paperwork and coordination with banks, saving you valuable time and ensuring your application is processed efficiently.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-semibold px-6 py-2.5 rounded-sm text-sm transition-all duration-300">Let's Connect</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Our Banking Assistance Process</p>
            <h2 className="text-[28px] sm:text-[40px] font-[900] text-[#020617] leading-tight tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>How We Help You Open Your Account</h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed mb-4">Desert Consultants provides end-to-end banking assistance for your business.</p>
            <p className="text-[16px] font-bold text-[#0f172a] mb-6">Our systematic approach ensures a smooth banking setup:</p>
            <div className="space-y-4 mb-8">
              {["Assessment of your banking requirements.", "Bank selection based on your business needs.", "Documentation preparation and review.", "Application submission and follow-up.", "Compliance and KYC support.", "Account activation and online banking setup."].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#0C69D0] text-white text-[12px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                  <p className="text-[15px] text-[#64748B] leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Desert Consultants is your trusted partner</p>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-[800] text-[#0C69D0] leading-tight tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>How Desert Consultants<br />Will Assist You</h2>
              <div className="space-y-4 text-[15px] text-[#64748B] leading-relaxed">
                <p>Desert Consultants provides comprehensive banking assistance to help you open corporate accounts with leading banks.</p>
                <p>Our experienced team guides you through the entire process, from documentation to account activation.</p>
                <p>We're here to make your banking setup seamless and stress-free.</p>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-semibold px-8 py-3.5 rounded-sm transition-all duration-300">Talk to an Expert <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-hidden rounded-sm shadow-md">
              <img src={m3} alt="Banking" className="w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-10 bg-[#0C69D0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0C69D0]/85 mix-blend-multiply z-10"></div>
          <img src={{m4}} alt="Business" className="w-full h-full object-cover object-center opacity-70" />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 lg:px-[48px] text-center">
          <p className="text-[14px] font-bold text-white/90 uppercase tracking-[0.2em] mb-4">GET IN TOUCH</p>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-[900] text-white leading-tight tracking-tight mb-10 max-w-4xl mx-auto" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Need Help Opening a<br />Corporate Bank Account?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[#0C69D0] font-semibold px-8 py-3.5 rounded-sm transition-all duration-300">Connect with us <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg></Link>
        </div>
      </section>

      <div className="py-10 bg-white overflow-hidden border-b border-gray-100">
        <div className="whitespace-nowrap flex items-center animate-marquee">
          {[1, 2, 3, 4].map((_, idx) => (
            <span key={idx} className="inline-flex items-center">
              <span className="text-[40px] sm:text-[56px] lg:text-[72px] font-[900] text-[#0C69D0]/20 px-8 inline-block" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Desert Consultants: Your Banking Assistance Experts</span>
              <span className="text-[#0C69D0]/20 text-[40px]">•</span>
            </span>
          ))}
        </div>
      </div>

      <section className="py-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <h2 className="text-[28px] sm:text-[40px] font-[900] text-[#020617] leading-tight tracking-tight mb-12 text-center" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: What documents are required to open a corporate bank account?</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed">Typically required documents include trade license, MOA, passport copies of shareholders, proof of address, and bank statements. Requirements vary by bank.</p>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: How long does it take to open a corporate account?</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed">The process typically takes 1-4 weeks, depending on the bank and the completeness of documentation.</p>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: Which banks do you work with?</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed">We work with all major UAE banks including Emirates NBD, ADCB, Mashreq Bank, RAKBank, and several international banks operating in the UAE.</p>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: Can you help with multi-currency accounts?</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed">Yes, we can assist with opening multi-currency accounts that allow you to hold and transact in multiple currencies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#0C69D0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px] text-center">
          <h2 className="text-[28px] sm:text-[40px] font-[900] text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Ready to Open Your Corporate Account?</h2>
          <p className="text-white/80 text-[16px] mb-8 max-w-xl mx-auto">Our experts are available to guide you through every step. Get a free, no-obligation consultation today.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#0C69D0] font-bold px-10 py-3.5 rounded-sm hover:bg-gray-100 transition-all duration-300">Talk to an Expert <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
        </div>
      </section>
    </>
  );
};

export default BankingAssistance;