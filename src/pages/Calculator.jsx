import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, CheckCircle2, Building2, Users, Send, ShieldCheck, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Calculator = () => {
  const [formData, setFormData] = useState({
    jurisdiction: "freezone",
    activityType: "commercial",
    visas: 1,
    shareholders: 1,
    officeType: "flexi-desk",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const jurisdictions = [
    { value: "freezone", label: "Free Zone", desc: "100% Foreign Ownership & Tax Exemptions" },
    { value: "mainland", label: "Mainland", desc: "Trade Anywhere in UAE & Global Markets" },
    { value: "dubai", label: "Dubai Prime", desc: "Premium Business Addresses & Hubs" },
  ];

  const activityTypes = [
    { value: "commercial", label: "Commercial / General Trading" },
    { value: "professional", label: "Professional Consultancy & Services" },
    { value: "ecommerce", label: "E-Commerce & Digital Media" },
    { value: "industrial", label: "Industrial & Manufacturing" },
  ];

  const officeTypes = [
    { value: "flexi-desk", label: "Flexi Desk / Smart Desk" },
    { value: "virtual", label: "Virtual Office" },
    { value: "physical", label: "Dedicated Office Space" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Business Setup Cost Calculator | Desert Consultants</title>
        <meta name="description" content="Calculate your customized UAE business setup costs by submitting your requirements in our official calculation form." />
      </Helmet>

      {/* Header */}
      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-primary-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-[13px] font-bold text-primary uppercase tracking-[0.2em] mb-4">CUSTOM COST ESTIMATOR</p>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[800] text-[#020617] leading-[1.1] tracking-tight mb-6 font-cabinet">
            UAE Business Setup Cost Calculator
          </h1>
          <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed max-w-2xl mx-auto">
            Select your business setup parameters below and submit the calculation form to receive your detailed cost breakdown and government fee schedule.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-gray-light rounded-3xl p-8 sm:p-12 text-center border border-gray-100 shadow-sm">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-extrabold text-dark mb-4 font-cabinet">Calculation Request Received!</h2>
              <p className="text-gray-body text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Thank you, <strong className="text-dark">{formData.name}</strong>. We have received your setup parameter selections:
              </p>

              <div className="bg-white rounded-2xl p-6 text-left max-w-md mx-auto mb-8 border border-gray-200 space-y-3 text-sm text-slate-700 shadow-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Jurisdiction:</span>
                  <span className="font-bold capitalize">{formData.jurisdiction}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Business Activity:</span>
                  <span className="font-bold capitalize">{formData.activityType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Visas Required:</span>
                  <span className="font-bold">{formData.visas}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shareholders:</span>
                  <span className="font-bold">{formData.shareholders}</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-8">
                Our business setup advisor will send your official fee breakdown to <strong className="text-dark">{formData.email}</strong> and reach out to <strong className="text-dark">{formData.phone}</strong> shortly.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ jurisdiction: "freezone", activityType: "commercial", visas: 1, shareholders: 1, officeType: "flexi-desk", name: "", email: "", phone: "", notes: "" });
                }}
                className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-sm"
              >
                Submit Another Calculation Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Business Parameters */}
              <div className="bg-gray-light rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-100">
                <h3 className="text-xl font-extrabold text-dark mb-6 font-cabinet flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" /> 1. Select Business Parameters
                </h3>

                <div className="space-y-6">
                  {/* Jurisdiction */}
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-3">Choose Jurisdiction</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {jurisdictions.map((j) => (
                        <button
                          key={j.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, jurisdiction: j.value })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.jurisdiction === j.value ? "border-primary bg-white shadow-xs" : "border-gray-200 bg-white hover:border-primary/40"
                          }`}
                        >
                          <p className="text-sm font-bold text-dark">{j.label}</p>
                          <p className="text-xs text-gray-500 mt-1">{j.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Business Activity Type */}
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-3">Primary Business Activity</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activityTypes.map((act) => (
                        <button
                          key={act.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, activityType: act.value })}
                          className={`p-3.5 rounded-xl border-2 text-left text-sm font-semibold transition-all ${
                            formData.activityType === act.value ? "border-primary bg-white text-primary shadow-xs" : "border-gray-200 bg-white text-gray-700 hover:border-primary/40"
                          }`}
                        >
                          {act.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Visas & Shareholders Sliders */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="bg-white p-4 rounded-2xl border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /> Residence Visas Required</label>
                        <span className="text-sm font-extrabold text-primary font-cabinet">{formData.visas}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={formData.visas}
                        onChange={(e) => setFormData({ ...formData, visas: Number(e.target.value) })}
                        className="w-full accent-[#0C69D0]"
                      />
                      <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                        <span>0 Visas</span>
                        <span>10 Visas</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /> Number of Shareholders</label>
                        <span className="text-sm font-extrabold text-primary font-cabinet">{formData.shareholders}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={formData.shareholders}
                        onChange={(e) => setFormData({ ...formData, shareholders: Number(e.target.value) })}
                        className="w-full accent-[#0C69D0]"
                      />
                      <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                        <span>1 Shareholder</span>
                        <span>5+ Shareholders</span>
                      </div>
                    </div>
                  </div>

                  {/* Office Space Requirement */}
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-3">Office Space Preference</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {officeTypes.map((off) => (
                        <button
                          key={off.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, officeType: off.value })}
                          className={`p-3.5 rounded-xl border-2 text-center text-xs font-bold transition-all ${
                            formData.officeType === off.value ? "border-primary bg-white text-primary shadow-xs" : "border-gray-200 bg-white text-gray-700 hover:border-primary/40"
                          }`}
                        >
                          {off.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Contact Form to Submit Calculation */}
              <div className="bg-gray-light rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-100 space-y-6">
                <h3 className="text-xl font-extrabold text-dark font-cabinet flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" /> 2. Enter Contact Info to Receive Full Cost Calculation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0] ${
                        errors.name ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0] ${
                        errors.email ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000 or +91 90000 00000"
                    className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0] ${
                      errors.phone ? "border-red-500" : "border-slate-200"
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Additional Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell us any specific requirements, timeline, or preferred free zone..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-base font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <CalcIcon className="w-5 h-5" /> Calculate & Send Detailed Breakdown <Send className="w-4 h-4 ml-1" />
                </button>

                <p className="text-xs text-gray-500 text-center font-medium flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Your information is 100% confidential. Official fee breakdown will be sent directly to you.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Calculator;