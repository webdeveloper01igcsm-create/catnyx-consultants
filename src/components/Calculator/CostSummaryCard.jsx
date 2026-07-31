import { Calculator, ShieldCheck, Clock, FileText, ArrowRight, Check } from "lucide-react";

const CostSummaryCard = ({ jurisdiction, activity, visas, shareholders, office, currentStep, setStep, isSubmitting }) => {
  // Dynamic cost range calculation based on selected parameters
  const calculateEstimatedRange = () => {
    let baseMin = 12500;
    let baseMax = 15000;

    if (jurisdiction === "mainland") {
      baseMin += 6000;
      baseMax += 8500;
    } else if (jurisdiction === "dubai") {
      baseMin += 10000;
      baseMax += 14000;
    }

    if (activity === "commercial") {
      baseMin += 1500;
      baseMax += 2500;
    } else if (activity === "industrial") {
      baseMin += 4000;
      baseMax += 6000;
    }

    baseMin += visas * 3200;
    baseMax += visas * 4500;

    if (shareholders > 2) {
      baseMin += (shareholders - 2) * 800;
      baseMax += (shareholders - 2) * 1200;
    }

    if (office === "physical") {
      baseMin += 8000;
      baseMax += 15000;
    }

    return {
      min: baseMin.toLocaleString(),
      max: baseMax.toLocaleString(),
    };
  };

  const range = calculateEstimatedRange();

  return (
    <div className="sticky top-28 bg-gradient-to-br from-slate-900 via-[#0F1B2D] to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-6">
      {/* Badge Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0C69D0] text-white flex items-center justify-center font-bold">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white font-cabinet">Live Cost Projection</h3>
            <span className="text-[11px] text-blue-300">Updated in Real-Time</span>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wide">
          Official Estimate
        </span>
      </div>

      {/* Real-Time Cost Range Visualizer */}
      <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none"></div>

        <span className="text-xs font-semibold text-slate-400 block mb-1 uppercase tracking-wider">
          Estimated Investment Range
        </span>

        <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-cabinet tracking-tight mb-2">
          AED {range.min} <span className="text-slate-400 text-lg font-normal">-</span> {range.max}
          <span className="text-blue-400 text-xs font-bold block mt-1">*Excluding government fee variations</span>
        </div>

        <p className="text-[11px] text-slate-400 leading-normal">
          Includes trade license registration, initial approvals, establishment card & processing setup.
        </p>
      </div>

      {/* Selected Parameter Chips */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Chosen Parameters</span>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 capitalize font-medium">
            🏛️ {jurisdiction} Jurisdiction
          </span>
          <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 capitalize font-medium">
            💼 {activity}
          </span>
          <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 font-medium">
            💳 {visas} {visas === 1 ? "Visa" : "Visas"}
          </span>
          <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 font-medium">
            👥 {shareholders} {shareholders === 1 ? "Shareholder" : "Shareholders"}
          </span>
          <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 capitalize font-medium">
            🏢 {office} Office
          </span>
        </div>
      </div>

      {/* Action Button depending on current step */}
      <div className="pt-2">
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={() => setStep(currentStep + 1)}
            className="w-full py-4 px-6 rounded-xl bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group"
          >
            <span>Continue to Step {currentStep + 1}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center text-xs text-blue-200">
            Submit your details on Step 3 to receive your official itemized fee PDF & consultant review.
          </div>
        )}
      </div>

      {/* Trust Badges */}
      <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>No Hidden Charges</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-400 shrink-0" />
          <span>Same-Day Calculation</span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-sky-400 shrink-0" />
          <span>PDF Breakdown</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-[#0C69D0] shrink-0" />
          <span>100% Confidential</span>
        </div>
      </div>
    </div>
  );
};

export default CostSummaryCard;
