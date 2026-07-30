import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { offers } from "../data/servicesData";

const Offers = () => {
  return (
    <>
      <Helmet>
        <title>Ongoing Promotions | Desert Consultants - Special Offers</title>
        <meta name="description" content="Check out our ongoing promotions and special packages for UAE business setup in IFZA, Ajman, Sharjah, and RAKEZ free zones from Desert Consultants." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-primary-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-[13px] font-bold text-primary uppercase tracking-[0.2em] mb-4">SPECIAL DEALS</p>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[800] text-[#020617] leading-[1.1] tracking-tight mb-6 font-cabinet">Ongoing Promotions</h1>
          <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed max-w-2xl mx-auto">Take advantage of our exclusive business setup packages across various UAE free zones. Limited time offers with significant savings.</p>
        </div>
      </section>

      {/* OFFERS GRID */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="bg-primary px-4 py-2 text-center">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{offer.badge}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-dark mb-1 font-cabinet">{offer.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {offer.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary-light rounded-lg p-3 mb-4">
                    <span className="text-[10px] font-bold text-primary uppercase flex items-center gap-1"><Tag className="w-3 h-3" /> {offer.saving}</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xs text-gray-400 line-through">{offer.oldPrice}</span>
                      <span className="text-lg font-extrabold text-primary font-cabinet">{offer.price}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="block w-full text-center bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2.5 rounded-lg transition-all">Get Started</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-[800] text-white leading-tight mb-4 font-cabinet">Don't Miss Out on These Offers</h2>
          <p className="text-base text-white/80 mb-8 max-w-2xl mx-auto">Contact us today to claim your package and start your UAE business journey with exclusive savings.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 text-[15px] font-bold px-8 py-3.5 rounded-lg transition-all duration-300">Contact Us <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
};

export default Offers;