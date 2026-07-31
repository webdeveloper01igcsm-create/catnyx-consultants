import React, { useState } from "react";
import { X, Search, ChevronDown, CheckCircle2, Phone, RotateCcw } from "lucide-react";
import { contactInfo } from "../data/navigation";

const businessActivities = [
  "Commercial & Trading",
  "Management & Business Consultancy",
  "E-Commerce & Digital Portal",
  "General Trading",
  "IT & Technology Services",
  "Marketing & Advertising Agency",
  "Real Estate & Property Management",
  "Healthcare & Medical Services",
  "Financial & Investment Advisory",
  "Industrial & Manufacturing",
  "Logistics & Freight Forwarding",
  "Event Management & Tourism",
  "Education & Training Services",
  "Food & Beverage / Restaurant",
  "Media Production & Design",
];

const locations = [
  "Dubai",
  "Sharjah",
  "Abu Dhabi",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
];

const jurisdictions = ["Free zone", "Mainland", "Not Sure", "Off-shore"];
const ownerOptions = ["1 to 5", "6 or more", "Not Sure"];
const officeOptions = ["Yes", "No"];
const visaOptions = ["1 to 5", "6 to 10", "10 to 15", "16 to 20", "21 or more", "Unlimited"];

const Calculator = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [step, setStep] = useState(1);

  // Form selections
  const [activity, setActivity] = useState("");
  const [activitySearch, setActivitySearch] = useState("");
  const [isActivityDropdownOpen, setIsActivityDropdownOpen] = useState(false);

  const [location, setLocation] = useState("Dubai");
  const [jurisdiction, setJurisdiction] = useState("Free zone");

  const [owners, setOwners] = useState("1 to 5");
  const [office, setOffice] = useState("Yes");

  const [visas, setVisas] = useState("1 to 5");
  const [businessName, setBusinessName] = useState("");

  // Lead Contact Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredActivities = businessActivities.filter((act) =>
    act.toLowerCase().includes(activitySearch.toLowerCase())
  );

  const getProgressPercentage = () => {
    switch (step) {
      case 1:
        return 20;
      case 2:
        return 40;
      case 3:
        return 60;
      case 4:
        return 80;
      case 5:
        return 100;
      default:
        return 100;
    }
  };

  const handleNext = () => {
    if (step === 1 && !activity) {
      setActivity("Commercial & Trading");
    }
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const validateLeadForm = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Please enter your full name.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = "Please enter a valid email address.";
    if (!phone.trim() || phone.trim().length < 7) errs.phone = "Please enter a valid contact number.";
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!validateLeadForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(6);
    }, 600);
  };

  const calculateEstimate = () => {
    let min = 12500;
    let max = 16500;

    if (jurisdiction === "Mainland") {
      min += 6000;
      max += 9000;
    } else if (jurisdiction === "Off-shore") {
      min -= 2000;
      max -= 3000;
    }

    if (location === "Dubai") {
      min += 2000;
      max += 3500;
    }

    if (office === "Yes") {
      min += 5000;
      max += 10000;
    }

    if (visas === "6 to 10") {
      min += 8000;
      max += 12000;
    } else if (visas === "10 to 15" || visas === "16 to 20") {
      min += 15000;
      max += 22000;
    }

    return {
      min: min.toLocaleString(),
      max: max.toLocaleString(),
    };
  };

  const result = calculateEstimate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative">
      {/* HERO SECTION */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-12 bg-white border-b border-gray-100 text-center">
        <div className="max-w-3xl mx-auto pt-6">
          <p className="text-xs font-bold text-[#0C69D0] uppercase tracking-[0.2em] mb-3">
            CALCULATOR
          </p>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-cabinet leading-tight mb-4">
            Know the Exact UAE <span className="text-[#0C69D0]">Business Setup</span> Costs.
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed mb-8">
            Because smart business owners rely on facts, not hearsay. Calculate your estimated setup costs dynamically in under a minute.
          </p>

          <button
            onClick={() => {
              setIsModalOpen(true);
              setStep(1);
            }}
            className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-bold px-7 py-3 rounded-lg text-sm transition-all shadow-md cursor-pointer"
          >
            <span>Calculate Now</span>
            <span>→</span>
          </button>
        </div>
      </section>

      {/* CALCULATOR MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden border border-gray-200 relative text-left">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {/* PROGRESS BAR HEADER */}
              {step <= 5 && (
                <div className="mb-6 pr-6">
                  <span className="text-xs font-bold text-[#0C69D0] block mb-1.5">
                    {getProgressPercentage()}%
                  </span>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0C69D0] h-full rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* STEP 1: SELECT A BUSINESS ACTIVITY (20%) */}
              {step === 1 && (
                <div className="space-y-5">
                  <label className="block text-sm font-bold text-gray-900">
                    Select a Business Activity <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <div
                      onClick={() => setIsActivityDropdownOpen(!isActivityDropdownOpen)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer bg-white hover:border-[#0C69D0] transition-colors text-sm text-gray-700"
                    >
                      <span>{activity || "Search or select an activity..."}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>

                    {isActivityDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-30 max-h-56 overflow-y-auto p-2">
                        <div className="relative mb-2">
                          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            placeholder="Search activity..."
                            value={activitySearch}
                            onChange={(e) => setActivitySearch(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs outline-none focus:border-[#0C69D0]"
                            autoFocus
                          />
                        </div>
                        {filteredActivities.map((act, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setActivity(act);
                              setIsActivityDropdownOpen(false);
                            }}
                            className={`px-3 py-2 text-xs rounded cursor-pointer transition-colors ${
                              activity === act ? "bg-blue-50 text-[#0C69D0] font-semibold" : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {act}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-bold px-7 py-2.5 rounded-lg text-sm transition-all cursor-pointer shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: LOCATION & JURISDICTION (40%) */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2.5">
                      Business Location <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {locations.map((loc) => {
                        const isSelected = location === loc;
                        return (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => setLocation(loc)}
                            className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#0C69D0] text-[#0C69D0] bg-blue-50"
                                : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                            }`}
                          >
                            {loc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2.5">
                      Select A Jurisdiction <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {jurisdictions.map((jur) => {
                        const isSelected = jurisdiction === jur;
                        return (
                          <button
                            key={jur}
                            type="button"
                            onClick={() => setJurisdiction(jur)}
                            className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#0C69D0] text-[#0C69D0] bg-blue-50"
                                : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                            }`}
                          >
                            {jur}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      onClick={handlePrevious}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium px-5 py-2 rounded-lg text-xs transition-all cursor-pointer"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-bold px-7 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: OWNERS & OFFICE (60%) */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2.5">
                      Number of Owners <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {ownerOptions.map((opt) => {
                        const isSelected = owners === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setOwners(opt)}
                            className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#0C69D0] text-[#0C69D0] bg-blue-50"
                                : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2.5">
                      Do you require office space? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {officeOptions.map((opt) => {
                        const isSelected = office === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setOffice(opt)}
                            className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#0C69D0] text-[#0C69D0] bg-blue-50"
                                : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      onClick={handlePrevious}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium px-5 py-2 rounded-lg text-xs transition-all cursor-pointer"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-bold px-7 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: VISAS & BUSINESS NAME (80%) */}
              {step === 4 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2.5">
                      How many visas do you require? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {visaOptions.map((opt) => {
                        const isSelected = visas === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setVisas(opt)}
                            className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#0C69D0] text-[#0C69D0] bg-blue-50"
                                : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2">
                      Have you thought of a name for your business? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter business name (Optional)"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-gray-800 outline-none focus:border-[#0C69D0] transition-colors"
                    />
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      onClick={handlePrevious}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium px-5 py-2 rounded-lg text-xs transition-all cursor-pointer"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-bold px-7 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5: LEAD CONTACT FORM (100%) */}
              {step === 5 && (
                <form onSubmit={handleFinalSubmit} className="space-y-3.5">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    Get Your Cost Calculation
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    Enter your contact details to view the estimated breakdown.
                  </p>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className={`w-full border rounded-lg px-3 py-2 text-xs outline-none ${
                        formErrors.name ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#0C69D0]"
                      }`}
                    />
                    {formErrors.name && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className={`w-full border rounded-lg px-3 py-2 text-xs outline-none ${
                        formErrors.email ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#0C69D0]"
                      }`}
                    />
                    {formErrors.email && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 58 595 2349 or +91 9319650940"
                      className={`w-full border rounded-lg px-3 py-2 text-xs outline-none ${
                        formErrors.phone ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#0C69D0]"
                      }`}
                    />
                    {formErrors.phone && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.phone}</p>}
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium px-5 py-2 rounded-lg text-xs transition-all cursor-pointer"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-bold px-7 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm"
                    >
                      {isSubmitting ? "Calculating..." : "Calculate Costs"}
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 6: CALCULATION RESULT */}
              {step === 6 && (
                <div className="text-center space-y-5">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                  </div>

                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full mb-1.5 border border-emerald-200">
                      Calculation Complete
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 font-cabinet">
                      Estimated Setup Cost
                    </h3>
                  </div>

                  <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 text-center">
                    <p className="text-[11px] text-gray-500 mb-0.5">Estimated Setup Range</p>
                    <p className="text-2xl font-black text-[#0C69D0] font-cabinet">
                      AED {result.min} - {result.max}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3.5 border border-gray-200 text-left text-xs space-y-1 text-gray-600">
                    <p className="font-bold text-gray-900 mb-1 border-b pb-1">Selection Summary:</p>
                    <p>• Location & Jurisdiction: {location} ({jurisdiction})</p>
                    <p>• Activity: {activity || "Commercial & Trading"}</p>
                    <p>• Visas & Owners: {visas} Visas | {owners} Owners</p>
                    <p>• Office Space: {office === "Yes" ? "Required" : "Not Required"}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={contactInfo.uaePhoneHref}
                      className="py-2 px-3 rounded-lg bg-gray-900 text-white font-bold text-[11px] flex items-center justify-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-blue-400" />
                      <span>UAE: {contactInfo.uaePhone}</span>
                    </a>
                    <a
                      href={contactInfo.indiaPhoneHref}
                      className="py-2 px-3 rounded-lg bg-[#0C69D0] text-white font-bold text-[11px] flex items-center justify-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#FBBC05]" />
                      <span>India: {contactInfo.indiaPhone}</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C69D0] hover:underline pt-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Recalculate with different options</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;