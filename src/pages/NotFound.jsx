import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Catnyx Consultants</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>

      <section className="mt-16 lg:mt-20 min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-primary-light py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[120px] sm:text-[160px] lg:text-[200px] font-[800] text-primary leading-none font-cabinet">404</p>
            <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#020617] leading-tight mb-4 font-cabinet">Page Not Found</h1>
            <p className="text-base text-gray-body leading-relaxed mb-8 max-w-md mx-auto">Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="inline-flex items-center justify-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-medium px-8 py-3.5 rounded-sm transition-all duration-300">
                <Home className="w-4 h-4" /> Back to Home
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 border-2 border-[#0C69D0] text-[#0C69D0] hover:bg-[#0C69D0] hover:text-white text-[15px] font-medium px-8 py-3.5 rounded-sm transition-all duration-300">
                <ArrowLeft className="w-4 h-4" /> View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;