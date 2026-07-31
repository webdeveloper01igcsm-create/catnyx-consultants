import { ShieldCheck, Globe, Building2, Check } from "lucide-react";

const JurisdictionSelector = ({ selected, onChange }) => {
  const jurisdictions = [
    {
      id: "freezone",
      label: "Free Zone",
      badge: "100% Tax Exemptions",
      icon: ShieldCheck,
      description: "Ideal for international trade, IT, e-commerce & consultancy. Includes 100% foreign ownership & 0% personal tax.",
    },
    {
      id: "mainland",
      label: "Mainland (DED)",
      badge: "Unlimited Local Market Access",
      icon: Globe,
      description: "Direct trade across all UAE Emirates & international markets without restrictions or local agent constraints.",
    },
    {
      id: "dubai",
      label: "Dubai Prime",
      badge: "Prestigious Address",
      icon: Building2,
      description: "Premium address in Downtown, Business Bay, or DIFC with elevated corporate prestige & elite banking setup.",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-bold text-slate-900 tracking-wide uppercase text-xs">
          1. Select Jurisdiction Type <span className="text-red-500">*</span>
        </label>
        <span className="text-xs font-semibold text-[#0C69D0]">Required</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jurisdictions.map((j) => {
          const Icon = j.icon;
          const isSelected = selected === j.id;
          return (
            <div
              key={j.id}
              onClick={() => onChange(j.id)}
              className={`group relative p-6 rounded-2xl cursor-pointer border-2 transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "border-[#0C69D0] bg-blue-50/40 shadow-lg shadow-blue-500/10 scale-[1.02]"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
              }`}
            >
              {/* Selected Check Mark */}
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-[#0C69D0] text-white rounded-full flex items-center justify-center shadow-sm">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              )}

              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700 mb-4 group-hover:bg-blue-100 group-hover:text-[#0C69D0] transition-colors">
                  <Icon className="w-3.5 h-3.5 text-[#0C69D0]" />
                  <span>{j.badge}</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2 font-cabinet group-hover:text-[#0C69D0] transition-colors">
                  {j.label}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">{j.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className={isSelected ? "text-[#0C69D0]" : "text-slate-500"}>
                  {isSelected ? "Selected Option" : "Click to Select"}
                </span>
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    isSelected ? "border-[#0C69D0] bg-[#0C69D0]" : "border-slate-300"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JurisdictionSelector;
