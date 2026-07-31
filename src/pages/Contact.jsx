import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { contactInfo } from "../data/navigation";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Desert Consultants</title>
        <meta name="description" content="Get in touch with Desert Consultants for expert business setup services in Dubai." />
      </Helmet>

      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-primary-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-[13px] font-bold text-primary uppercase tracking-[0.2em] mb-4">GET IN TOUCH</p>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[800] text-[#020617] leading-[1.1] tracking-tight mb-6 font-cabinet">Contact Us</h1>
          <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed max-w-2xl mx-auto">Have questions about setting up your business in the UAE? We're here to help. Reach out to us and our team will get back to you shortly.</p>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-light rounded-2xl p-6 text-center hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3"><Phone className="w-6 h-6 text-white" /></div>
                <h3 className="text-base font-bold text-dark mb-1 font-cabinet">🇦🇪 UAE Support</h3>
                <a href={contactInfo.uaePhoneHref} className="block text-sm font-semibold text-gray-body hover:text-primary transition-colors mb-2">{contactInfo.uaePhone}</a>
              </div>
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-lg transition-colors mt-2">
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp UAE
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="bg-gray-light rounded-2xl p-6 text-center hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3"><Phone className="w-6 h-6 text-white" /></div>
                <h3 className="text-base font-bold text-dark mb-1 font-cabinet">🇮🇳 India Support</h3>
                <a href={contactInfo.indiaPhoneHref} className="block text-sm font-semibold text-gray-body hover:text-primary transition-colors mb-2">{contactInfo.indiaPhone}</a>
              </div>
              <a href={contactInfo.whatsappIndia} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-lg transition-colors mt-2">
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp India
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-light rounded-2xl p-6 text-center hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3"><Mail className="w-6 h-6 text-white" /></div>
                <h3 className="text-base font-bold text-dark mb-1 font-cabinet">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-sm font-semibold text-gray-body hover:text-primary transition-colors break-all">{contactInfo.email}</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="bg-gray-light rounded-2xl p-6 text-center hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3"><Clock className="w-6 h-6 text-white" /></div>
                <h3 className="text-base font-bold text-dark mb-1 font-cabinet">Working Hours</h3>
                <p className="text-sm font-semibold text-gray-body">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4"><CheckCircle2 className="w-8 h-8 text-primary" /></div>
                  <h3 className="text-2xl font-extrabold text-dark mb-2 font-cabinet">Message Sent!</h3>
                  <p className="text-sm text-gray-body">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }} className="mt-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-3 rounded-lg transition-all">Send Another</button>
                </div>
              ) : (
                <>
                  <h2 className="text-[24px] sm:text-[28px] font-[800] text-[#0C69D0] mb-2 font-cabinet">Send Us a Message</h2>
                  <p className="text-sm text-gray-body mb-6">Fill out the form below and we'll respond within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full rounded-lg border px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0] ${errors.name ? "border-red-500" : "border-slate-200"}`} placeholder="Your full name" />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full rounded-lg border px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0] ${errors.email ? "border-red-500" : "border-slate-200"}`} placeholder="you@email.com" />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0]" placeholder="Phone number" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0]" placeholder="Subject" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className={`w-full rounded-lg border px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-[#0C69D0] focus:ring-1 focus:ring-[#0C69D0] resize-none ${errors.message ? "border-red-500" : "border-slate-200"}`} placeholder="Your message"></textarea>
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-sm font-bold px-6 py-3 rounded-lg transition-all duration-300">Send Message <Send className="w-4 h-4" /></button>
                  </form>
                </>
              )}
            </div>

            <div>
              <h2 className="text-[24px] sm:text-[28px] font-[800] text-[#0C69D0] mb-6 font-cabinet">Our Office & Direct Contact</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-primary" /></div>
                    <div><h3 className="text-base font-bold text-dark mb-1 font-cabinet">UAE Office</h3><p className="text-sm text-gray-body leading-relaxed">{contactInfo.uaeOffice}</p></div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-primary" /></div>
                    <div className="space-y-3 w-full">
                      <h3 className="text-base font-bold text-dark font-cabinet">Direct Phone & WhatsApp Support</h3>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-700">🇦🇪 UAE:</span>
                          <a href={contactInfo.uaePhoneHref} className="text-sm font-bold text-primary hover:underline">{contactInfo.uaePhone}</a>
                        </div>
                        <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-600 hover:underline">WhatsApp UAE</a>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-700">🇮🇳 India:</span>
                          <a href={contactInfo.indiaPhoneHref} className="text-sm font-bold text-primary hover:underline">{contactInfo.indiaPhone}</a>
                        </div>
                        <a href={contactInfo.whatsappIndia} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-600 hover:underline">WhatsApp India</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.123!2d55.365!3d25.195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzQyLjAiTiA1NcKwMjEnNTQuMCJF!5e0!3m2!1sen!2s!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Desert Consultants Office Location"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;