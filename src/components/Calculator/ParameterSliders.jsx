import { Users, CreditCard } from "lucide-react";

const ParameterSliders = ({ visas, setVisas, shareholders, setShareholders }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Visas Slider */}
      <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0C69D0] flex items-center justify-center font-bold">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
                Residence Visas Required
              </label>
              <span className="text-[11px] text-slate-500">Investor, Manager & Employee Visas</span>
            </div>
          </div>
          <span className="text-xl font-black text-[#0C69D0] bg-white px-3.5 py-1 rounded-xl border border-blue-200 shadow-sm font-cabinet">
            {visas} {visas === 1 ? "Visa" : "Visas"}
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="10"
          value={visas}
          onChange={(e) => setVisas(parseInt(e.target.value))}
          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0C69D0]"
        />

        <div className="flex justify-between text-[11px] font-bold text-slate-400">
          <span>0 (Zero Visa)</span>
          <span>5 Visas</span>
          <span>10+ Visas</span>
        </div>
      </div>

      {/* Shareholders Slider */}
      <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0C69D0] flex items-center justify-center font-bold">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
                Number of Shareholders
              </label>
              <span className="text-[11px] text-slate-500">Individual or Corporate Partners</span>
            </div>
          </div>
          <span className="text-xl font-black text-[#0C69D0] bg-white px-3.5 py-1 rounded-xl border border-blue-200 shadow-sm font-cabinet">
            {shareholders} {shareholders === 1 ? "Shareholder" : "Shareholders"}
          </span>
        </div>

        <input
          type="range"
          min="1"
          max="5"
          value={shareholders}
          onChange={(e) => setShareholders(parseInt(e.target.value))}
          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0C69D0]"
        />

        <div className="flex justify-between text-[11px] font-bold text-slate-400">
          <span>1 (Sole Owner)</span>
          <span>3 Partners</span>
          <span>5+ Corporate</span>
        </div>
      </div>
    </div>
  );
};

export default ParameterSliders;
