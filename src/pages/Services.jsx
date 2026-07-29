import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Briefcase, Home, ShieldCheck, Calculator, FileText, Landmark } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { servicesList } from "../data/servicesData";

const serviceIcons = {
  building: Building2,
  office: Briefcase,
  home: Home,
  shield: ShieldCheck,
  calculator: Calculator,
  document: FileText,
  bank: Landmark,
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Catnyx Consultants - UAE Business Setup</title>
        <meta name="description" content="Explore our comprehensive business setup, accounting, PRO, and banking services in the UAE." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-primary-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-[13px] font-bold text-primary uppercase tracking-[0.2em] mb-4">WHAT WE OFFER</p>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[800] text-[#020617] leading-[1.1] tracking-tight mb-6 font-cabinet">Our Services</h1>
          <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed max-w-2xl mx-auto">From business setup to accounting and PRO services, we provide end-to-end solutions to help you establish and grow your business in the UAE.</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesList.map((svc, i) => {
              const Icon = serviceIcons[svc.icon] || Building2;
              return (
                <motion.div key={svc.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Link to={`/services/${svc.slug}`} className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                    <div className="overflow-hidden aspect-[16/10]">
                      <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80"; }} />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-dark mb-2 font-cabinet group-hover:text-primary transition-colors">{svc.title}</h3>
                      <p className="text-sm text-gray-body leading-relaxed mb-4 line-clamp-3">{svc.shortDesc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4" /></span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-[800] text-white leading-tight mb-4 font-cabinet">Ready to Get Started?</h2>
          <p className="text-base text-white/80 mb-8 max-w-2xl mx-auto">Contact our expert team today for a free consultation and take the first step towards your UAE business journey.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 text-[15px] font-bold px-8 py-3.5 rounded-lg transition-all duration-300">Contact Us <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
};

export default Services;