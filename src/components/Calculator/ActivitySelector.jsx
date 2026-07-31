import { ShoppingBag, Briefcase, Globe, Factory } from "lucide-react";

const ActivitySelector = ({ selected, onChange }) => {
  const activities = [
    { id: "commercial", label: "Commercial / General Trading", icon: ShoppingBag, desc: "Import, export, distribution & retail trading" },
    { id: "professional", label: "Professional Consultancy & Services", icon: Briefcase, desc: "Management, IT, legal, marketing & technical consulting" },
    { id: "ecommerce", label: "E-Commerce & Digital Media", icon: Globe, desc: "Online portals, marketplace stores & digital services" },
    { id: "industrial", label: "Industrial & Manufacturing", icon: Factory, desc: "Assembly, processing, manufacturing & logistics" },
  ];

  return (
    <div className="space-y-4">
      <label className="block text-xs font-bold text-slate-900 tracking-wide uppercase">
        2. Primary Business Activity Category <span className="text-red-500">*</span>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {activities.map((act) => {
          const Icon = act.icon;
          const isSelected = selected === act.id;
          return (
            <button
              key={act.id}
              type="button"
              onClick={() => onChange(act.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-start gap-3.5 ${
                isSelected
                  ? "border-[#0C69D0] bg-blue-50/50 text-[#0C69D0] shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  isSelected ? "bg-[#0C69D0] text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900 mb-0.5">{act.label}</p>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">{act.desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ActivitySelector;
