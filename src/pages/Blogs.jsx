import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Clock, Search, Tag, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { blogs } from "../data/homeData";

const categories = ["All", "Free Zone Setup", "Company Formation", "Residency & Visas", "Market Insights", "Investment", "Business Guide"];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog & Business Insights | Desert Consultants Dubai</title>
        <meta name="description" content="Read expert guides and market insights on UAE business setup, Dubai free zones, investor visas, and corporate banking from Desert Consultants." />
      </Helmet>

      {/* SIMPLIFIED HERO BANNER SECTION */}
      <section className="mt-16 lg:mt-20 bg-gradient-to-b from-blue-50/70 via-white to-white py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.25em] mb-3">
            DESERT CONSULTANTS INSIGHTS
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4 font-cabinet">
            UAE Business Setup <span className="text-primary">Guides & Articles</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Stay informed with verified advice from our Dubai business consultants. Explore free zones, commercial licenses, residency visas, and tax rules.
          </p>

          {/* Simple Search Input */}
          <div className="max-w-lg mx-auto relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles e.g. IFZA, Meydan, Visas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-gray-900 placeholder-gray-400 pl-11 pr-4 py-3 rounded-xl shadow-sm border border-gray-200 focus:outline-none focus:border-primary font-medium text-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-xs font-semibold text-gray-500 hover:text-gray-900 px-2 py-1 bg-gray-100 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="bg-white border-b border-gray-100 py-4 sticky top-16 z-20 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-white font-semibold shadow-xs"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6 BLOG CARDS GRID */}
      <section className="bg-white py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-cabinet">
              Latest Posts ({filteredBlogs.length})
            </h2>
            <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
              <BookOpen className="w-4 h-4 text-primary" /> {filteredBlogs.length} Articles
            </div>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <Search className="w-10 h-10 text-gray-400 mx-auto mb-2" />
              <h3 className="text-base font-bold text-gray-800">No matching articles found</h3>
              <p className="text-xs text-gray-500 mt-1 mb-4">Try searching for different keywords or reset filters.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary-dark transition-all"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, i) => (
                <motion.article
                  key={blog.slug || i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  {/* Stock Image */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80";
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-primary text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                      {blog.category || "Guide"}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors font-cabinet">
                        <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h3>

                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all"
                      >
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary py-14 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 font-cabinet">
            Have Questions About Business Setup in Dubai?
          </h2>
          <p className="text-sm text-blue-100 mb-6 max-w-xl mx-auto">
            Our expert team at Desert Consultants is ready to guide you through licensing, free zones, and residency options.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 text-sm font-bold px-7 py-3 rounded-lg shadow-md transition-all"
          >
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blogs;
