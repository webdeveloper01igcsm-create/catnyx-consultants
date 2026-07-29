import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PricingCard({ pkg, index: i }) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Parse features to show limited initially
  const displayFeatures = pkg.features.slice(0, 4);
  const remainingCount = Math.max(0, pkg.features.length - 4);

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-sm transition-all duration-300 flex flex-col h-full"
    >
      {/* Badge Header */}
      <div className="bg-primary px-4 py-2.5 flex items-center justify-between">
        <span className="text-xs font-bold text-white uppercase tracking-wider">{pkg.badge}</span>
        <CheckCircle2 className="w-5 h-5 text-white" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title Section */}
        <div className="mb-4">
          <h3 className="text-xl font-extrabold text-dark mb-1">{pkg.title}</h3>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{pkg.subtitle}</p>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-6">
          {displayFeatures.map((f, j) => (
            <li key={j} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 text-xs mt-0.5" />
              <span className="text-sm text-gray-700 leading-tight">{f}</span>
            </li>
          ))}
        </ul>

        {/* Show More Link */}
        {remainingCount > 0 && (
          <button
            onClick={() => setShowAllFeatures(!showAllFeatures)}
            className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors mb-6"
          >
            +{remainingCount} more included
          </button>
        )}

        {/* Pricing Section - Most Important */}
        <div className=" mb-7 mt-auto">
          {/* Savings Badge */}
          <div className="inline-block mb-3">
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider bg-emerald-100 px-3 py-1.5 rounded-lg">
              {pkg.saving}
            </span>
          </div>

          {/* Price Display */}
          <div className="flex items-baseline gap-2 text-gray-500 mb-2"> Was
            <span className="text-sm text-red-500 line-through">{pkg.oldPrice}</span>
          </div>
          <div className="mb-3">
            <span className="text-3xl font-extrabold text-gray-900">{pkg.price}</span>
          </div>

          {/* T&C */}
          <p className="text-xs text-gray-500 uppercase tracking-wider">T & C Apply</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            to="/ongoing-promotions"
            className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg transition-all text-center text-sm"
          >
            Get Started
          </Link>
          <button className="bg-emerald-100 hover:bg-emerald-200 text-emerald-600 p-3 rounded-lg transition-all flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-lg transition-all flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}