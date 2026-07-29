import { useState, useEffect } from "react";
import { X, Calendar, Briefcase, User, Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";

const bookingServices = [
  "Business Setup in Dubai",
  "P.R.O Services",
  "Digital Branding",
  "VAT & Accounting Services",
  "Translation Services",
];

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [weekOffset, setWeekOffset] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setTimeout(() => {
        setStep(1);
        setService("");
        setSelectedDate("");
        setSelectedTime("");
        setWeekOffset(0);
      }, 300);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const getWeekDays = () => {
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDay = new Date(today);
    startDay.setDate(startDay.getDate() + weekOffset * 7);
    for (let i = 0; i < 7; i++) {
      const d = new Date(startDay);
      d.setDate(startDay.getDate() + i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      days.push({
        date: `${year}-${month}-${day}`,
        dayNum: d.getDate(),
        dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
        isPast: d < today,
      });
    }
    return days;
  };

  const calendarMonthYear = () => {
    const d = new Date();
    d.setDate(d.getDate() + weekOffset * 7);
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const formatBookingDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
  };

  const shiftWeek = (dir) => {
    if (weekOffset === 0 && dir === -1) return;
    setWeekOffset(weekOffset + dir);
    setSelectedDate("");
    setSelectedTime("");
  };

  const timeSlots = {
    Morning: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    Afternoon: ["01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"],
    Evening: ["05:00 PM", "06:00 PM"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStep(4);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex justify-center bg-slate-950/55 backdrop-blur-md"
      style={{ alignItems: "center", overflow: "hidden", padding: "1rem" }}
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_26px_80px_-26px_rgba(15,23,42,0.58)] sm:rounded-[18px]"
        style={{ width: "min(1120px, 100%)", height: "min(720px, calc(100vh - 2rem))", maxHeight: "calc(100vh - 2rem)", borderRadius: "18px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 shadow-sm transition hover:bg-slate-50 hover:text-slate-700">
          <X className="h-5 w-5" />
        </button>

        <div className="flex-shrink-0 border-b border-slate-200 bg-white px-5 py-4 sm:px-8 sm:py-5">
          <div className="flex items-center gap-4 pr-12">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C69D0]/10 text-[#0C69D0] sm:flex">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0C69D0]">Desert  Consultants</p>
              <h2 className="mt-1 text-xl font-extrabold leading-tight text-[#0F1B2D] sm:text-2xl font-cabinet">Book a Meeting</h2>
              <p className="mt-1 text-sm font-medium text-slate-500">30-minute consultation with our business setup team.</p>
            </div>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:flex-row">
          <div className="grid flex-shrink-0 grid-cols-3 gap-2 border-b border-slate-200 bg-slate-50 p-2 sm:p-3 md:flex md:w-[280px] md:flex-col md:gap-0 md:space-y-2 md:border-b-0 md:border-r md:p-5">
            <button onClick={() => setStep(1)} className={`w-full min-w-0 flex items-center justify-center sm:justify-between p-2 sm:p-3 md:p-3.5 rounded-xl border transition-all text-left ${step === 1 ? "bg-white shadow-sm border-[#0C69D0]/20 ring-2 ring-[#0C69D0]/10" : "border-transparent hover:border-slate-200 hover:bg-white/70"}`}>
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${step >= 1 ? "bg-[#0C69D0] text-white" : "bg-white text-slate-400 ring-1 ring-slate-200"}`}>
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs sm:text-sm font-bold text-gray-800">{service || "Select Service"}</p>
                  <p className="hidden sm:block text-[11px] text-slate-400 font-medium">30 mins</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 hidden md:block" />
            </button>

            <button onClick={() => service && setStep(2)} className={`w-full min-w-0 flex items-center justify-center sm:justify-between p-2 sm:p-3 md:p-3.5 rounded-xl border transition-all text-left ${step === 2 ? "bg-white shadow-sm border-[#0C69D0]/20 ring-2 ring-[#0C69D0]/10" : "border-transparent hover:border-slate-200 hover:bg-white/70"}`}>
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${step >= 2 ? "bg-[#0C69D0] text-white" : "bg-white text-slate-400 ring-1 ring-slate-200"}`}>
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className={`truncate text-xs sm:text-sm font-bold ${selectedDate ? "text-gray-800" : "text-gray-400"}`}>
                    {selectedDate ? formatBookingDate(selectedDate) + (selectedTime ? " - " + selectedTime : "") : "Date & Time"}
                  </p>
                  <p className="hidden sm:block truncate text-[11px] text-gray-400 font-medium">Asia/Dubai</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 hidden md:block" />
            </button>

            <button onClick={() => selectedDate && selectedTime && setStep(3)} className={`w-full min-w-0 flex items-center justify-center sm:justify-between p-2 sm:p-3 md:p-3.5 rounded-xl border transition-all text-left ${step === 3 || step === 4 ? "bg-white shadow-sm border-[#0C69D0]/20 ring-2 ring-[#0C69D0]/10" : "border-transparent hover:border-slate-200 hover:bg-white/70"}`}>
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${step >= 3 ? "bg-[#0C69D0] text-white" : "bg-white text-slate-400 ring-1 ring-slate-200"}`}>
                  <User className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className={`truncate text-xs sm:text-sm font-bold ${step >= 3 ? "text-gray-800" : "text-gray-400"}`}>Your Info</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 hidden md:block" />
            </button>
          </div>

          <div className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-8 no-scrollbar">
            {step === 1 && (
              <div>
                <div className="mb-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0C69D0]">Step 1</p>
                  <h3 className="mt-1 text-2xl font-extrabold text-[#0F1B2D] font-cabinet">Select a Service</h3>
                </div>
                <div className="grid gap-3">
                  {bookingServices.map((svc) => (
                    <button key={svc} onClick={() => { setService(svc); setStep(2); }} className={`w-full flex items-center justify-between gap-3 rounded-xl border p-4 text-left transition-all ${service === svc ? "border-[#0C69D0] bg-blue-50/70 shadow-sm ring-2 ring-[#0C69D0]/10" : "border-slate-200 bg-white hover:border-[#0C69D0]/40 hover:shadow-sm"}`}>
                      <div className="min-w-0">
                        <p className="text-base font-extrabold text-slate-800">{svc}</p>
                        <p className="mt-1 text-xs font-semibold text-slate-400">30 mins - Online / In-Person</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${service === svc ? "border-[#0C69D0] bg-[#0C69D0]" : "border-gray-300"}`}>
                        {service === svc && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0C69D0]">Step 2</p>
                    <h3 className="mt-1 text-2xl font-extrabold text-[#0F1B2D] font-cabinet">{calendarMonthYear()}</h3>
                  </div>
                  <p className="w-fit text-xs text-slate-500 font-bold bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">Asia/Dubai</p>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <button onClick={() => shiftWeek(-1)} className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition hover:border-[#0C69D0]/30 hover:text-[#0C69D0]">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex-1 grid grid-cols-7 gap-2 no-scrollbar">
                    {getWeekDays().map((day) => (
                      <button key={day.date} onClick={() => !day.isPast && setSelectedDate(day.date)} disabled={day.isPast} className={`flex h-16 min-w-[62px] flex-col items-center justify-center rounded-xl text-center transition-all ${selectedDate === day.date ? "bg-[#0C69D0] text-white shadow-lg shadow-blue-200" : day.isPast ? "bg-slate-50 text-slate-300 cursor-not-allowed ring-1 ring-slate-100" : "bg-slate-50 text-slate-700 hover:bg-slate-100 ring-1 ring-slate-100"}`}>
                        <span className="text-lg font-extrabold leading-none">{day.dayNum}</span>
                        <span className="text-[10px] font-bold uppercase mt-0.5">{day.dayName}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => shiftWeek(1)} className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition hover:border-[#0C69D0]/30 hover:text-[#0C69D0]">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                {selectedDate ? (
                  Object.entries(timeSlots).map(([period, slots]) => (
                    <div key={period} className="mb-5">
                      <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">{period}</p>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                        {slots.map((slot) => (
                          <button key={slot} onClick={() => { setSelectedTime(slot); setStep(3); }} className={`w-full rounded-lg border px-3 py-3 text-sm font-bold transition-all ${selectedTime === slot ? "bg-[#0C69D0] text-white border-[#0C69D0] shadow-sm" : "bg-white text-gray-700 border-gray-200 hover:border-[#0C69D0] hover:text-[#0C69D0]"}`}>
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Clock className="mx-auto h-8 w-8 text-slate-300 mb-2" />
                    <p className="text-sm text-gray-400 font-medium">Please select a date to view available times.</p>
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="mx-auto max-w-2xl">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0C69D0]">Step 3</p>
                    <h3 className="mt-1 text-2xl font-extrabold text-[#0F1B2D] font-cabinet">Your Details</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">Add your contact details so our team can confirm the meeting.</p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-left sm:min-w-[210px]">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0C69D0]">Selected Slot</p>
                    <p className="mt-1 truncate text-sm font-bold text-slate-800">{formatBookingDate(selectedDate)} - {selectedTime}</p>
                    <p className="text-xs font-medium text-slate-500">{service}</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="border border-slate-200 rounded-2xl p-4 sm:p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700">Name <span className="text-red-500">*</span></label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0]" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700">Email <span className="text-red-500">*</span></label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0]" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700">Contact Number</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0]" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button type="button" onClick={() => setStep(2)} className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-[#0C69D0]/30 hover:text-[#0C69D0]">Back</button>
                    <button type="submit" disabled={submitting} className="inline-flex items-center justify-center rounded-xl bg-[#0C69D0] px-6 py-3 text-sm font-bold text-white shadow-sm shadow-blue-200 transition hover:bg-[#0A56AD] disabled:opacity-60">
                      {submitting ? (<span className="flex items-center justify-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>Booking...</span>) : ("Confirm Booking")}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 4 && (
              <div className="mx-auto max-w-xl py-4 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0C69D0]/10 text-[#0C69D0]">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0F1B2D] mb-6 font-cabinet">Appointment Confirmed</h3>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 inline-block text-left max-w-md w-full mx-auto">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 ring-1 ring-slate-200">
                      <Check className="w-6 h-6 text-[#0C69D0]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-extrabold text-[#0C69D0]">{formatBookingDate(selectedDate)} | {selectedTime}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{service}</p>
                      <p className="text-xs text-gray-400">Asia/Dubai</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6 font-medium">We'll reach out to you shortly via email and phone to confirm the details.</p>
                <button onClick={onClose} className="mt-6 bg-[#0C69D0] hover:bg-[#0A56AD] text-white font-bold px-8 py-3 sm:py-2.5 rounded-xl shadow transition text-sm">Done</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;