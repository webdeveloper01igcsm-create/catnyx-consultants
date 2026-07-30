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
        <div className="container max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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

      {/* HERO BANNER WITH 50VH IMAGE AND GRADIENT OVERLAY */}
      <section className="mt-16 lg:mt-20 relative w-full h-[50vh] min-h-[420px] max-h-[600px] overflow-hidden bg-slate-950 text-white flex items-end">
        {/* Background Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-top object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80";
          }}
        />

        {/* Gradient Overlay over Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-black/30"></div>

        {/* Content overlaid on top of image */}
        <div className="relative z-10 w-full py-8 lg:py-12">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            {/* Back button */}
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white transition-all mb-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blogs
            </Link>

            {/* Category, Date & Read Time */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/80 mb-3">
              <span className="bg-primary text-white px-3 py-1 rounded-full font-bold shadow-sm">
                {blog.category || "UAE Business"}
              </span>
              <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md text-white/90 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-blue-300" /> {blog.readTime || "5 min read"}
              </span>
              <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md text-white/90 border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-blue-300" /> {blog.date}
              </span>
            </div>

            {/* Main Title Over Image */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-cabinet drop-shadow-md">
              {blog.title}
            </h1>

            {/* Author info row */}
            <div className="flex items-center justify-between pt-4 border-t border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-sm shadow-md border border-white/20">
                  {blog.author ? blog.author.charAt(0) : "D"}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{blog.author || "Desert Consultants Team"}</p>
                  <p className="text-xs text-blue-200">{blog.authorRole || "Senior Business Setup Advisor"}</p>
                </div>
              </div>

              {/* Share button */}
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm transition-all cursor-pointer"
                title="Copy link to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-white/80" />}
                {copied ? "Link Copied!" : "Share Article"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT SECTION */}
      <section className="bg-white py-10 sm:py-14">
        <div className="container   mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Executive Summary Box */}
          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5 mb-8">
            <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2 font-cabinet">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Executive Summary
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          {/* Body Content */}
          <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-left">
            {blog.content ? (
              <div
                className="blog-content text-left"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <div className="text-left">
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
        <div className="container   mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="container   mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

