import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, CheckCircle2, ArrowRight, Building2, Users, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [jurisdiction, setJurisdiction] = useState("freezone");
  const [visas, setVisas] = useState(1);
  const [activities, setActivities] = useState(1);
  const [shareholders, setShareholders] = useState(1);

  const baseCosts = {
    freezone: 10000,
    mainland: 15000,
    dubai: 12000,
  };

  const visaCost = 3500;
  const activityCost = 500;
  const shareholderCost = 300;

  const total = baseCosts[jurisdiction] + visas * visaCost + activities * activityCost + shareholders * shareholderCost;

  const jurisdictions = [
    { value: "freezone", label: "Free Zone", desc: "100% foreign ownership" },
    { value: "mainland", label: "Mainland", desc: "Wider market access" },
    { value: "dubai", label: "Dubai Specific", desc: "Premium location" },
  ];

  return (
    <>
      <Helmet>
        <title>Cost Calculator | Desert Consultants - UAE Business Setup</title>
        <meta name="description" content="Calculate the estimated cost of setting up your business in the UAE with our free cost calculator from Desert Consultants." />
      </Helmet>

      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-primary-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-[13px] font-bold text-primary uppercase tracking-[0.2em] mb-4">ESTIMATE YOUR COSTS</p>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[800] text-[#020617] leading-[1.1] tracking-tight mb-6 font-cabinet">Business Setup Cost Calculator</h1>
          <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed max-w-2xl mx-auto">Get an instant estimate of your UAE business setup costs. Adjust the parameters to match your requirements.</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Jurisdiction */}
              <div className="bg-gray-light rounded-2xl p-6">
                <h3 className="text-lg font-bold text-dark mb-4 font-cabinet flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" /> Choose Jurisdiction
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {jurisdictions.map((j) => (
                    <button key={j.value} onClick={() => setJurisdiction(j.value)} className={`p-4 rounded-xl border-2 text-left transition-all ${jurisdiction === j.value ? "border-primary bg-white shadow-sm" : "border-gray-200 bg-white hover:border-primary/30"}`}>
                      <p className="text-sm font-bold text-dark">{j.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{j.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="bg-gray-light rounded-2xl p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-dark flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Number of Visas</label>
                    <span className="text-sm font-extrabold text-primary font-cabinet">{visas}</span>
                  </div>
                  <input type="range" min="1" max="10" value={visas} onChange={(e) => setVisas(Number(e.target.value))} className="w-full accent-[#0C69D0]" />
                  <p className="text-xs text-gray-400 mt-1">AED {visaCost} per visa</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-dark flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> Business Activities</label>
                    <span className="text-sm font-extrabold text-primary font-cabinet">{activities}</span>
                  </div>
                  <input type="range" min="1" max="5" value={activities} onChange={(e) => setActivities(Number(e.target.value))} className="w-full accent-[#0C69D0]" />
                  <p className="text-xs text-gray-400 mt-1">AED {activityCost} per additional activity</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-dark flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Shareholders</label>
                    <span className="text-sm font-extrabold text-primary font-cabinet">{shareholders}</span>
                  </div>
                  <input type="range" min="1" max="5" value={shareholders} onChange={(e) => setShareholders(Number(e.target.value))} className="w-full accent-[#0C69D0]" />
                  <p className="text-xs text-gray-400 mt-1">AED {shareholderCost} per shareholder</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-primary rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-lg font-bold mb-4 font-cabinet flex items-center gap-2"><CalcIcon className="w-5 h-5" /> Cost Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm"><span>Base License</span><span className="font-bold">AED {baseCosts[jurisdiction].toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span>Visas ({visas})</span><span className="font-bold">AED {(visas * visaCost).toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span>Activities ({activities})</span><span className="font-bold">AED {(activities * activityCost).toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span>Shareholders ({shareholders})</span><span className="font-bold">AED {(shareholders * shareholderCost).toLocaleString()}</span></div>
                </div>
                <div className="border-t border-white/20 pt-4 mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm">Estimated Total</span>
                    <span className="text-2xl font-extrabold font-cabinet">AED {total.toLocaleString()}</span>
                  </div>
                </div>
                <Link to="/contact" className="block w-full text-center bg-white text-primary hover:bg-gray-100 text-sm font-bold py-3 rounded-lg transition-all">Get a Detailed Quote <ArrowRight className="w-4 h-4 inline" /></Link>
                <p className="text-xs text-white/60 mt-4 text-center">* This is an estimate. Final costs may vary based on specific requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;