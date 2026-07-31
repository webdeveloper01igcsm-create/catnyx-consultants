import { User, Mail, Phone, MessageSquare, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";

const CalculatorForm = ({ formData, onChange, errors, onSubmit, isSubmitting }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-5 mb-6">
        <h4 className="text-sm font-bold text-[#0C69D0] mb-1 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Receive Your Itemized Official Fee Proposal</span>
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          Please enter your details below so our senior business setup consultant can generate your detailed official cost proposal and WhatsApp/Email breakdown.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-xs font-bold text-slate-900 tracking-wide uppercase mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full pl-11 pr-4 py-3 bg-white border text-sm rounded-xl outline-none transition-all ${
              errors.name ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-[#0C69D0] focus:ring-2 focus:ring-blue-100"
            }`}
          />
        </div>
        {errors.name && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.name}</p>}
      </div>

      {/* Email & Phone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-slate-900 tracking-wide uppercase mb-2">
            Business Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="name@company.com"
              className={`w-full pl-11 pr-4 py-3 bg-white border text-sm rounded-xl outline-none transition-all ${
                errors.email ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-[#0C69D0] focus:ring-2 focus:ring-blue-100"
              }`}
            />
          </div>
          {errors.email && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-slate-900 tracking-wide uppercase mb-2">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              placeholder="+971 50 123 4567 or +91 9876543210"
              className={`w-full pl-11 pr-4 py-3 bg-white border text-sm rounded-xl outline-none transition-all ${
                errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-[#0C69D0] focus:ring-2 focus:ring-blue-100"
              }`}
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.phone}</p>}
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-xs font-bold text-slate-900 tracking-wide uppercase mb-2">
          Specific Business Requirements / Questions (Optional)
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <textarea
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={onChange}
            placeholder="Tell us more about your target launch date or specific activity..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 text-sm rounded-xl outline-none focus:border-[#0C69D0] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0C69D0] to-[#0A56AD] hover:from-[#0A56AD] hover:to-[#08448A] text-white font-bold text-base transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-white" />
            <span>Calculating Official Proposal...</span>
          </>
        ) : (
          <>
            <span>Get Official Cost Proposal & Breakdown</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-500">
        🔒 Your privacy is guaranteed. We never share your contact details.
      </p>
    </form>
  );
};

export default CalculatorForm;
