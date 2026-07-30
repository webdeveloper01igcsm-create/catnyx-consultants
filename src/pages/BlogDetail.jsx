import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  User,
  Tag,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  PhoneCall
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { blogs } from "../data/homeData";

const BlogDetail = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="mt-20 min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2 font-cabinet">Article Not Found</h1>
          <p className="text-sm text-gray-500 mb-6">
            The blog article you are looking for might have been moved or removed.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog Articles
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Desert Consultants Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      {/* SIMPLIFIED HEADER BANNER SECTION */}
      <section className="mt-16 lg:mt-20 bg-gradient-to-b from-blue-50/60 via-white to-white py-12 lg:py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Back button */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary-dark transition-all mb-6 bg-white border border-gray-200 px-3.5 py-1.5 rounded-full shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Blogs
          </Link>

          {/* Category, Date & Read Time */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full font-bold">
              {blog.category || "UAE Business"}
            </span>
            <span className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md text-gray-600">
              <Clock className="w-3.5 h-3.5 text-primary" /> {blog.readTime || "5 min read"}
            </span>
            <span className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md text-gray-600">
              <Calendar className="w-3.5 h-3.5 text-primary" /> {blog.date}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 font-cabinet">
            {blog.title}
          </h1>

          {/* Author info row */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                {blog.author ? blog.author.charAt(0) : "D"}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{blog.author || "Desert Consultants Team"}</p>
                <p className="text-xs text-gray-500">{blog.authorRole || "Senior Business Setup Advisor"}</p>
              </div>
            </div>

            {/* Share button */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg shadow-2xs transition-all cursor-pointer"
              title="Copy link to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
              {copied ? "Link Copied!" : "Share Article"}
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED STOCK IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden shadow-md border border-gray-100 aspect-[16/9] bg-gray-100"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80";
            }}
          />
        </motion.div>
      </div>

      {/* ARTICLE CONTENT */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Highlights Box */}
          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5 mb-8">
            <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2 font-cabinet">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Executive Summary
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          {/* Body Content */}
          <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {blog.content ? (
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <div>
                <p className="text-base text-gray-800 mb-6">{blog.excerpt}</p>
                <p>
                  Setting up a business in the UAE requires strategic planning and a clear understanding of local regulations.
                  At <strong>Desert Consultants</strong>, we guide founders and investors through licensing, visas, and corporate banking.
                </p>
              </div>
            )}
          </article>

          {/* AUTHOR BIO CARD */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-lg shrink-0 shadow-xs">
                {blog.author ? blog.author.charAt(0) : "D"}
              </div>
              <div className="text-center sm:text-left flex-1">
                <h4 className="text-sm font-bold text-gray-900">{blog.author || "Desert Consultants Team"}</h4>
                <p className="text-xs text-primary font-semibold mb-1.5">{blog.authorRole || "Business Setup Advisor"}</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Helping entrepreneurs, investors, and international firms establish and scale their business presence across Dubai and the UAE.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Book a Consultation with Desert Consultants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED POSTS SECTION */}
      <section className="bg-slate-50 py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-cabinet">
                Related Articles
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">More guides from Desert Consultants</p>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blogs/${post.slug}`}
                className="group block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="overflow-hidden aspect-[16/10] bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80";
                    }}
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1.5 line-clamp-2 group-hover:text-primary transition-colors font-cabinet">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary py-14 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl font-bold mb-3 font-cabinet">
            Need Expert UAE Business Setup Guidance?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mb-6 max-w-xl mx-auto">
            Contact Desert Consultants today for a free consultation and customized setup plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 text-xs font-bold px-7 py-3 rounded-lg shadow-sm transition-all"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
