import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Building2, Briefcase, Home, ShieldCheck, Calculator, FileText, Landmark } from "lucide-react";
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

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="mt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4 font-cabinet">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  const Icon = serviceIcons[service.icon] || Building2;
  const relatedServices = servicesList.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{service.title} | Catnyx Consultants</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      {/* HERO */}
      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-primary-light py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Our Services</p>
          </div>
          <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-[800] text-[#020617] leading-[1.2] tracking-tight mb-4 font-cabinet">{service.title}</h1>
          <p className="text-base text-gray-body leading-relaxed">{service.shortDesc}</p>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 -mt-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80"; }} />
        </motion.div>
      </div>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark mb-4 font-cabinet">Overview</h2>
              <p className="text-base text-gray-body leading-relaxed mb-6">{service.description}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-medium px-8 py-3.5 rounded-sm transition-all duration-300">
                Get a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <div className="bg-gray-light rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-dark mb-4 font-cabinet">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-body">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-[24px] sm:text-[28px] font-[800] text-[#0C69D0] mb-8 font-cabinet">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((svc) => {
              const RelIcon = serviceIcons[svc.icon] || Building2;
              return (
                <Link key={svc.slug} to={`/services/${svc.slug}`} className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="overflow-hidden aspect-[16/10]">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80"; }} />
                  </div>
                  <div className="p-5">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center mb-3">
                      <RelIcon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-dark mb-2 group-hover:text-primary transition-colors font-cabinet">{svc.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;