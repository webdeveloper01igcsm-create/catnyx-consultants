import { Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

const CalculatorHeader = ({ currentStep, setStep, steps }) => {
  return (
    <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0F1B2D] to-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0C69D0]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-[#0C69D0]/20 border border-[#0C69D0]/40 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Next-Gen UAE Business Cost Estimator</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 font-cabinet">
          UAE Business Setup <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Cost Calculator</span>
        </h1>

        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Customize your business parameters to receive a tailored, transparent cost breakdown and official fee schedule for company registration in the UAE.
        </p>

        {/* 3-Step Wizard Progress Bar */}
        <div className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-2xl p-3 border border-slate-700/60 shadow-xl">
          <div className="grid grid-cols-3 gap-2">
            {steps.map((step) => {
              const isCompleted = currentStep > step.id;
              const isActive = currentStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setStep(step.id)}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl transition-all text-xs sm:text-sm font-bold ${
                    isActive
                      ? "bg-[#0C69D0] text-white shadow-md shadow-[#0C69D0]/30"
                      : isCompleted
                      ? "bg-slate-700/80 text-blue-300 hover:bg-slate-700"
                      : "bg-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                      isActive ? "bg-white text-[#0C69D0]" : isCompleted ? "bg-blue-400 text-slate-900" : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-4 h-4 text-[#0C69D0]" /> : step.id}
                  </span>
                  <span className="hidden sm:inline">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorHeader;
