import { CheckCircle2, FileText, Phone, Mail, RotateCcw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "../../data/navigation";

const SuccessState = ({ formData, jurisdiction, activity, visas, shareholders, office, onReset }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-xl text-center space-y-8 max-w-2xl mx-auto">
      {/* Success Badge */}
      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
        <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
      </div>

      <div>
        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-3 border border-emerald-200 uppercase tracking-wide">
          Calculation Complete & Proposal Sent
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-cabinet mb-3">
          Thank You, {formData.name || "Valued Client"}!
        </h2>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Your cost calculation summary has been logged. One of our senior business advisors will reach out to <strong className="text-slate-900">{formData.email}</strong> & <strong className="text-slate-900">{formData.phone}</strong> shortly with your official itemized fee PDF.
        </p>
      </div>

      {/* Summary Box */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left space-y-4">
        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
          Your Selected Setup Parameters
        </h4>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-slate-500 block mb-0.5">Jurisdiction</span>
            <strong className="text-slate-900 capitalize text-sm">{jurisdiction}</strong>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Business Category</span>
            <strong className="text-slate-900 capitalize text-sm">{activity}</strong>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Residence Visas</span>
            <strong className="text-slate-900 text-sm">{visas} {visas === 1 ? "Visa" : "Visas"}</strong>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Shareholders</span>
            <strong className="text-slate-900 text-sm">{shareholders} {shareholders === 1 ? "Shareholder" : "Shareholders"}</strong>
          </div>
        </div>
      </div>

      {/* Immediate Support Actions */}
      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href={contactInfo.uaePhoneHref}
          className="py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <Phone className="w-4 h-4 text-blue-400" />
          <span>Call UAE: {contactInfo.uaePhone}</span>
        </a>
        <a
          href={contactInfo.indiaPhoneHref}
          className="py-3.5 px-4 rounded-xl bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <Phone className="w-4 h-4 text-[#FBBC05]" />
          <span>Call India: {contactInfo.indiaPhone}</span>
        </a>
      </div>

      {/* Reset CTA */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-4">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0C69D0] transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Recalculate with different parameters</span>
        </button>
      </div>
    </div>
  );
};

export default SuccessState;
