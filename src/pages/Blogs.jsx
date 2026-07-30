import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { blogs } from "../data/homeData";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Desert Consultants - UAE Business Insights</title>
        <meta name="description" content="Read the latest insights, news, and guides about UAE business setup, Dubai free zones, and more from Desert Consultants." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-primary-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-[13px] font-bold text-primary uppercase tracking-[0.2em] mb-4">LATEST NEWS</p>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[800] text-[#020617] leading-[1.1] tracking-tight mb-6 font-cabinet">Our Blog</h1>
          <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed max-w-2xl mx-auto">Stay updated with the latest insights, news, and guides about business setup in the UAE and Dubai's dynamic market.</p>
        </div>
      </section>

      {/* BLOGS GRID */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogs.map((blog, i) => (
              <motion.div key={blog.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link to={`/blogs/${blog.slug}`} className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="overflow-hidden aspect-[16/10]">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"; }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
                    </div>
                    <h3 className="text-sm font-bold text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors font-cabinet">{blog.title}</h3>
                    <p className="text-xs text-gray-body line-clamp-2 mb-3">{blog.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-[800] text-white leading-tight mb-4 font-cabinet">Have Questions About UAE Business Setup?</h2>
          <p className="text-base text-white/80 mb-8 max-w-2xl mx-auto">Our expert team is ready to help you navigate the process. Get in touch for a free consultation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 text-[15px] font-bold px-8 py-3.5 rounded-lg transition-all duration-300">Contact Us <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
};

export default Blogs;