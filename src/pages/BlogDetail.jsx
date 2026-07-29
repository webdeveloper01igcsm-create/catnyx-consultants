import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { blogs } from "../data/homeData";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="mt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4">Blog Post Not Found</h1>
          <Link to="/blogs" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{blog.title} | Catnyx Consultants Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      {/* HERO */}
      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-primary-light py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
            <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
            <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> {blog.category}</span>
          </div>
          <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-[800] text-[#020617] leading-[1.2] tracking-tight mb-4 font-cabinet">{blog.title}</h1>
          <p className="text-base text-gray-body leading-relaxed">{blog.excerpt}</p>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 -mt-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"; }} />
        </motion.div>
      </div>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <article className="prose prose-lg max-w-none">
            <p className="text-base text-gray-body leading-relaxed mb-6">{blog.content || blog.excerpt}</p>
            <p className="text-base text-gray-body leading-relaxed mb-6">
              Setting up a business in the UAE requires careful planning and understanding of the local regulations. Whether you choose a mainland, free zone, or offshore setup, each option has its own advantages and requirements. It's essential to work with experienced consultants who can guide you through the process and ensure compliance with all legal requirements.
            </p>
            <p className="text-base text-gray-body leading-relaxed mb-6">
              At Catnyx Consultants, we specialize in helping entrepreneurs and businesses navigate the complexities of UAE business setup. From license selection to visa processing and bank account opening, we provide comprehensive support at every step.
            </p>
            <h2 className="text-2xl font-bold text-dark mb-4 font-cabinet">Key Takeaways</h2>
            <ul className="space-y-3 mb-6">
              <li className="text-base text-gray-body">Choose the right jurisdiction based on your business activities and target market.</li>
              <li className="text-base text-gray-body">Ensure all documentation is prepared and attested before submission.</li>
              <li className="text-base text-gray-body">Work with a trusted consultant to avoid delays and compliance issues.</li>
              <li className="text-base text-gray-body">Plan your budget including license fees, visa costs, and office space.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-[24px] sm:text-[28px] font-[800] text-[#0C69D0] mb-8 font-cabinet">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post, i) => (
              <Link key={post.slug} to={`/blogs/${post.slug}`} className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden aspect-[16/10]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"; }} />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-sm font-bold text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors font-cabinet">{post.title}</h3>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;