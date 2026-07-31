import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, DollarSign, Globe, CheckCircle2, Star, Play, ChevronDown, Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  heroData,
  partners,
  services,
  steps,
  stats,
  packages,
  ceoData,
  testimonials,
  faqs,
  videoData,
  blogs,
} from "../data/homeData";
import Slider from "../components/Common/Slider";
import PricingCard from "../components/PriseCard";
import b1 from "../assets/banner1.jfif"
import b2 from "../assets/banner2.jfif"
const serviceIcons = { building: Building2, money: DollarSign, globe: Globe };

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const toggleTestimonial = (idx) => {
    setExpandedTestimonials({ ...expandedTestimonials, [idx]: !expandedTestimonials[idx] });
  };



  return (
    <>
      <Helmet>
        <title>Business Setup Consultants in Dubai - Desert Consultants</title>
        <meta name="description" content="Top business setup consultants in Dubai. Get expert guidance for starting your business in Dubai's dynamic market with Desert Consultants." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[13px] font-bold text-primary uppercase tracking-[0.2em] mb-4">{heroData.badge}</p>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-[800] text-[#020617] leading-[1.1] tracking-tight sm:tracking-[-3px] mb-6 font-cabinet">
                {heroData.title} <span className="text-primary">{heroData.titleHighlight}</span> {heroData.titleEnd}
              </h1>
              <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed mb-8 max-w-[550px]">{heroData.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={heroData.primaryCta.link} className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-medium px-8 py-3.5 rounded-sm transition-all duration-300">
                  {heroData.primaryCta.text} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to={heroData.secondaryCta.link} className="inline-flex items-center gap-2 border-2 border-[#0C69D0] text-[#0C69D0] hover:bg-[#0C69D0] hover:text-white text-[15px] font-medium px-8 py-3.5 rounded-sm transition-all duration-300">
                  {heroData.secondaryCta.text}
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6">


                <div className="text-center">
                  <h4 className="text-2xl font-bold" >
                    <span className="text-[#4285F4]" >G</span>
                    <span className="text-[#EA4335]" >O</span>
                    <span className="text-[#FBBC05]" >O</span>
                    <span className="text-[#4285F4]" >G</span>
                    <span className="text-[#34A853]" >L</span>
                    <span className="text-[#EA4335]" >E</span>  4.9
                  </h4>
                  <>

                    <div className="flex ">
                      <span className="text-xs font-semibold text-gray-700 me-3">Reviews</span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (<Star key={j} className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />))}
                        </div>
                      </div>
                    </div>
                  </>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold" >
                    <span className="text-[#00B67A]" >T</span>
                    <span className="text-[#00B67A]" >r</span>
                    <span className="text-[#00B67A]" >u</span>
                    <span className="text-[#00B67A]" >s</span>
                    <span className="text-[#00B67A]" >t</span>
                    <span className="text-[#00B67A]" >p</span>
                    <span className="text-[#00B67A]" >i</span>
                    <span className="text-[#00B67A]" >l</span>
                    <span className="text-[#00B67A]" >o</span>
                    <span className="ms-2" >5</span>


                  </h4>
                  <>

                    <div className="flex ">
                      <span className="text-xs font-semibold text-gray-700 me-3">Reviews</span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (<Star key={j} className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />))}
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
              <div className="hero-collage">
                <img src={b1} alt="Dubai Business" className="img-main" />
                <img src={b2} alt="Business Meeting" className="img-secondary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="bg-blue-50 py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-start mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">UAE Government Bodies</p>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#000000] leading-[40px] tracking-[-0.9px] font-cabinet">We work with
            </h2>
          </div>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="marquee-item flex items-center justify-center ms-6 h-16 w-40 rounded-lg border border-gray-100">
                  <img src={p.img} alt={p.name} className="max-h-20  max-w-40 object-contain " />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-start mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#000000] leading-[40px] tracking-[-0.9px] font-cabinet">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((svc, i) => {
              const Icon = serviceIcons[svc.icon] || Building2;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white text-center border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto bg-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 font-cabinet">{svc.title}</h3>
                  <p className="text-sm text-gray-body leading-relaxed">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="bg-gray-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-start mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">How It Works</p>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#000000] leading-[40px] tracking-[-0.9px] font-cabinet">Start Your Business in the UAE</h2>
          </div>
          <div className="divide-y-2 divide-gray-300 ">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-6 md:flex-nowrap items-center justify-between flex-wrap item-center  p-6 lg:p-8 hover:shadow-md transition-shadow">
                <div className="shrink-0 w-16 h-rounded-2xl flex items-center justify-center text-gray-300 text-6xl font-extrabold font-cabinet">{step.number}</div>

                <div className="w-sm md:ms-4" >
                  <h3 className="text-lg lg:text-2xl  font-bold text-primary mb-2 font-cabinet">{step.title}</h3>
                </div>

                <p className="text-sm text-gray-body w-4xl leading-relaxed">{step.description}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-x divide-white/20">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 font-cabinet">{stat.value}</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* PACKAGES SECTION */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Special Offers</p>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#000000] leading-[40px] tracking-[-0.9px] font-cabinet">Our Packages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <PricingCard pkg={pkg} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="bg-gray-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">{ceoData.badge}</p>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#000000] leading-[40px] tracking-[-0.9px] mb-6 font-cabinet">{ceoData.title}</h2>
              <p className="text-sm sm:text-base text-gray-body leading-relaxed mb-6">{ceoData.description}</p>
              <div>
                <p className="text-lg font-bold text-dark font-cabinet">{ceoData.name}</p>
                <p className="text-sm text-gray-body">{ceoData.role}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-8 border-white shadow-xl">
                  <img src={ceoData.image} alt={ceoData.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c312a?w=600&q=80"; }} />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-white">
                  <Quote className="w-10 h-10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      {/* <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">{videoData.badge}</p>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#000000] leading-[40px] tracking-[-0.9px] font-cabinet">Watch Our {videoData.titleHighlight}</h2>
            <p className="mt-3 text-sm sm:text-base text-gray-body max-w-2xl mx-auto">{videoData.description}</p>
          </div>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            {videoPlaying ? (
              <iframe src={videoData.embedUrl} title="Desert Consultants Video" className="w-full aspect-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            ) : (
              <button onClick={() => setVideoPlaying(true)} className="relative w-full aspect-video block group">
                <img src={videoData.thumbnail} alt="Video Thumbnail" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"; }} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </section> */}



      {/* TESTIMONIALS SECTION */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#000000] leading-[40px] tracking-[-0.9px] font-cabinet">What Our Clients Say</h2>
          </div>
          <Slider slidesPerView={{ default: 1, 768: 2 }} autoplay={2000} slideClass="testi-slide">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl h-full p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${t.name}&background=0C69D0&color=fff`; }} />
                  <div>
                    <p className="text-sm font-bold text-dark">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.source}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (<Star key={j} className={`w-4 h-4 ${j < t.rating ? "fill-[#FBBC05] text-[#FBBC05]" : "text-gray-300"}`} />))}
                </div>
                <p className={`testimonial-review text-sm text-gray-body leading-relaxed ${expandedTestimonials[i] ? "expanded" : ""}`}>{t.review}</p>
                {t.review.length > 200 && (<button onClick={() => toggleTestimonial(i)} className="testimonial-toggle">{expandedTestimonials[i] ? "Show less ↑" : "Read more ↓"}</button>)}
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-gray-light py-10">
        <div className="container">
          <div className="grid  md:grid-cols-2">

            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">FAQ</p>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#000000] leading-[40px] tracking-[-0.9px] font-cabinet">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button onClick={() => toggleFaq(i)} className="w-full flex items-center justify-between px-6 py-4 text-left" aria-expanded={openFaq === i}>
                    <span className="text-sm font-bold text-dark">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`px-6 transition-all duration-300 ${openFaq === i ? "pb-4" : "max-h-0 overflow-hidden"}`}>
                    <p className="text-sm text-gray-body leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Latest News</p>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#000000] leading-[40px] tracking-[-0.9px] font-cabinet">From Our Blog</h2>
            </div>
            <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View All <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((blog, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link to={`/blogs/${blog.slug}`} className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="overflow-hidden aspect-[16/10]">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"; }} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-2">{blog.date} • {blog.author}</p>
                    <h3 className="text-sm font-bold text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                    <p className="text-xs text-gray-body line-clamp-2">{blog.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-[800] text-white leading-tight mb-4 font-cabinet">Ready to Start Your Business in Dubai?</h2>
          <p className="text-base text-white/80 mb-8 max-w-2xl mx-auto">Get a free consultation with our expert team today and take the first step towards your UAE business journey.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 text-[15px] font-bold px-8 py-3.5 rounded-lg transition-all duration-300">Contact Us <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
};

export default Home;