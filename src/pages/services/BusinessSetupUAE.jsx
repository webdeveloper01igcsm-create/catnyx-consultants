import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import m1 from "../../assets/services/s6m1.jfif"
import m2 from "../../assets/services/s6m2.jfif"
import m3 from "../../assets/services/s6m3.jfif"
// import m4 from "../../assets/services/s6m4.jfif"

const BusinessSetupUAE = () => {
  return (
    <>
      <Helmet>
        <title>Business Setup In UAE | Desert Consultants</title>
        <meta name="description" content="Set up your business in the UAE with Desert Consultants — your trusted partners in company formation, trade licensing, visas, and banking in Dubai." />
      </Helmet>

      {/* HERO */}
      <section className="mt-16 lg:mt-20 bg-white relative overflow-hidden flex items-center min-h-[420px] lg:min-h-[520px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10"></div>
          <img src={m1} alt="Dubai Business" className="w-full h-full object-cover object-right mix-blend-luminosity opacity-80" />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto w-full py-[80px] lg:py-[120px] px-6 lg:px-[48px]">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-4">Business Setup in UAE</p>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-[900] text-[#020617] leading-[1.1] tracking-tight sm:tracking-[-3px] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Set up your<br />business in UAE
            </h1>
            <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed mb-8 max-w-[520px]">Welcome to Desert Consultants, your trusted partners in starting and expanding your business in the vibrant city of Dubai. We offer personalized solutions tailored to meet your specific needs.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-semibold px-8 py-3.5 rounded-sm transition-all duration-300">
              Connect Today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-sm shadow-md">
              <img src={m2} alt="Dubai skyline" className="w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Welcome to Desert Consultants</p>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-[800] text-[#0C69D0] leading-tight tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Launch your business<br />in the UAE
              </h2>
              <div className="space-y-4 text-[15px] text-[#64748B] leading-relaxed">
                <p>Welcome to Desert Consultants, your trusted partners in starting and expanding your business in the vibrant city of Dubai. Our experienced team comprehends the intricacies of company formation in Dubai and offers personalized solutions tailored to meet your specific needs.</p>
                <p>From business licensing to visa and PRO services, we provide comprehensive assistance throughout the entire process. We pride ourselves on delivering simple, swift, and risk-free solutions that prioritize your company registration.</p>
                <p>Trust Desert Consultants for seamless and efficient company formation in Dubai.</p>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-semibold px-7 py-3 rounded-sm transition-all duration-300">Get Free Consultation</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Strategic Advantages of Dubai Business Setup</p>
            <h2 className="text-[28px] sm:text-[40px] font-[900] text-[#020617] leading-tight tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Navigating the Business Landscape<br />with Confidence
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="h-52 overflow-hidden relative">
                <img src={m1} alt="Business Setup in Dubai" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Business Setup in Dubai</h3>
                  <p className="text-[15px] text-[#64748B] leading-relaxed mb-6">Company Formation in Dubai offers several significant advantages, including tax savings, robust governance, superior infrastructure, a premium lifestyle, and ever-expanding opportunities. Additionally, Dubai provides easy access to over 2 billion consumers in multiple markets, all reachable within a 4-hour flight.</p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-semibold px-6 py-2.5 rounded-sm text-sm transition-all duration-300 w-fit">Let's Connect</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="h-52 overflow-hidden relative">
                <img src={m2} alt="Why Set Up Your Business in the UAE?" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Why Set Up Your Business in the UAE?</h3>
                  <p className="text-[15px] text-[#64748B] leading-relaxed mb-6">Establishing a business in Dubai is a strategic move in today's global economy. The UAE presents a thriving business environment, strategic location, world-class infrastructure, and a dynamic market. Desert Consultants is here to assist you every step of the way with customized solutions.</p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-semibold px-6 py-2.5 rounded-sm text-sm transition-all duration-300 w-fit">Let's Connect</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Setting up a business in the UAE</p>
            <h2 className="text-[28px] sm:text-[40px] font-[900] text-[#020617] leading-tight tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Steps to Set Up a Business in the UAE</h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed mb-4">Setting up a business in the UAE may appear complex, but Desert Consultants is here to simplify the process for you. Our experienced team of Business Consultants will guide you through every step.</p>
            <p className="text-[16px] font-bold text-[#0f172a] mb-6">Let's streamline your journey by following these expert-guided steps:</p>
            <div className="space-y-4 mb-8">
              {["Select a trade name, business activity, and business jurisdiction aligned with your company's goals.", "Obtain Trade Name Approval by submitting the necessary documentation.", "Choose the right office space and prepare the tenancy agreement.", "Make the required fee payment for the trade license.", "Secure any special approvals needed for specific business activities.", "Obtain a Trade License and initiate visa processing and bank account opening."].map((step, i) => (
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
      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">Desert Consultants is your trusted partner</p>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-[800] text-[#0C69D0] leading-tight tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                How Desert Consultants<br />Will Assist You
              </h2>
              <div className="space-y-4 text-[15px] text-[#64748B] leading-relaxed">
                <p>Desert Consultants is your trusted partner in establishing a business in the UAE. Our team of expert Business Consultants will guide you through the process, helping you choose between mainland and free zones.</p>
                <p>We'll educate you about the latest business regulations and changing tax regimes, providing tailored business packages to precisely meet your requirements.</p>
                <p>We're here to make your business venture in the UAE a seamless and successful experience.</p>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-semibold px-8 py-3.5 rounded-sm transition-all duration-300">
                Talk to an Expert <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-hidden rounded-sm shadow-md">
              <img src={m3} alt="Business Meeting" className="w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-10 bg-[#0C69D0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0C69D0]/85 mix-blend-multiply z-10"></div>
          <img src={m1} alt="Get in touch" className="w-full h-full object-cover object-center opacity-70" />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 lg:px-[48px] text-center">
          <p className="text-[14px] font-bold text-white/90 uppercase tracking-[0.2em] mb-4">GET IN TOUCH</p>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-[900] text-white leading-tight tracking-tight mb-10 max-w-4xl mx-auto" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            Searching for a BEST service<br />to setup business in Dubai?
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
                Desert Consultants: Make Your UAE Business Dream a Reality
              </span>
              <span className="text-[#0C69D0]/20 text-[40px]">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* FAQS */}
      <section className="py-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px]">
          <h2 className="text-[28px] sm:text-[40px] font-[900] text-[#020617] leading-tight tracking-tight mb-12 text-center" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: How much does it cost to set up a business in the UAE?</h3>
              <div className="space-y-3 text-[15px] text-[#64748B] leading-relaxed">
                <p><strong>Mainland Setup Costs:</strong> Setting up a business in the UAE mainland typically costs between AED 20,000 and AED 30,000.</p>
                <p><strong>Free Zone Setup Costs:</strong> Free zone business setup can range from AED 10,000 to AED 50,000.</p>
                <p><strong>Additional Costs:</strong> These can include office rent, visa processing (AED 3,000 to AED 10,000 per visa), and other approvals.</p>
              </div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: What is the best business to set up in the UAE?</h3>
              <div className="space-y-3 text-[15px] text-[#64748B] leading-relaxed">
                <p>Some of the most promising businesses in the UAE for 2025 include:</p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li><strong>E-commerce:</strong> Strong shift toward digital markets.</li>
                  <li><strong>Tourism & Hospitality:</strong> Dubai remains a global tourist destination.</li>
                  <li><strong>Healthcare & Wellness:</strong> Increasing demand for medical services.</li>
                  <li><strong>Real Estate:</strong> Ongoing growth of infrastructure projects.</li>
                  <li><strong>Technology Startups:</strong> AI, blockchain, and fintech.</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: Can a foreigner set up a business in the UAE?</h3>
              <div className="space-y-3 text-[15px] text-[#64748B] leading-relaxed">
                <p>Yes, foreigners can establish businesses in the UAE. Recent laws allow for 100% foreign ownership in most industries.</p>
                <p>Businesses can be established in free zones (offering tax exemptions and full profit repatriation) or on the mainland.</p>
              </div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-[800] text-[#0C69D0] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Q: Can an Indian set up a company in the UAE?</h3>
              <div className="space-y-3 text-[15px] text-[#64748B] leading-relaxed">
                <p>Absolutely, Indian entrepreneurs are welcome and have a strong presence in the UAE's business community.</p>
                <p>Indians can take advantage of free zones or mainland setups and benefit from tax incentives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 bg-[#0C69D0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px] text-center">
          <h2 className="text-[28px] sm:text-[40px] font-[900] text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Ready to Start Your UAE Business?</h2>
          <p className="text-white/80 text-[16px] mb-8 max-w-xl mx-auto">Our experts are available to guide you through every step. Get a free, no-obligation consultation today.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#0C69D0] font-bold px-10 py-3.5 rounded-sm hover:bg-gray-100 transition-all duration-300">
            Talk to an Expert <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BusinessSetupUAE;