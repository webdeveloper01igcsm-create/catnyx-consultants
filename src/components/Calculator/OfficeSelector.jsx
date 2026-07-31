import { Laptop, Home, Building } from "lucide-react";

const OfficeSelector = ({ selected, onChange }) => {
  const options = [
    { id: "flexi", label: "Flexi Desk / Smart Desk", icon: Laptop, desc: "Shared co-working access for standard license compliance" },
    { id: "virtual", label: "Virtual Office Address", icon: Home, desc: "Digital address for remote business operations & mail forwarding" },
    { id: "physical", label: "Dedicated Physical Office", icon: Building, desc: "Private lease space tailored for staff & physical operations" },
  ];

  return (
    <div className="space-y-4">
      <label className="block text-xs font-bold text-slate-900 tracking-wide uppercase">
        Office Space & Facility Preference <span className="text-red-500">*</span>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = selected === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? "border-[#0C69D0] bg-blue-50/50 text-[#0C69D0] shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-[#0C69D0] text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-900">{opt.label}</span>
              </div>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">{opt.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OfficeSelector;
