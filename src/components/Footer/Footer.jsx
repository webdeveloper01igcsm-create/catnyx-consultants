import { Link } from "react-router-dom";
import { Phone, Mail, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerServices, footerCompany, contactInfo, socialLinks } from "../../data/navigation";

const socialIcons = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  youtube: FaYoutube,
};
import logo from "../../assets/logo.png"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-light border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Addresses */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="" className="max-w-[200px]" />
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">UAE Head Office</p>
                <p className="text-xs text-gray-body leading-relaxed">{contactInfo.uaeOffice}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">India Office</p>
                <p className="text-xs text-gray-body leading-relaxed">{contactInfo.indiaOffice}</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-gray-body mb-4 uppercase tracking-[0.15em]">Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map((svc) => (
                <li key={svc.path}>
                  <Link
                    to={svc.path}
                    className="text-sm text-gray-body hover:text-primary transition-colors"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-gray-body mb-4 uppercase tracking-[0.15em]">Company</h4>
            <ul className="space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-body hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold text-gray-body mb-4 uppercase tracking-[0.15em]">Connect</h4>
            <div className="space-y-3">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-2 text-sm text-gray-body hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-gray-body hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon] || FaInstagram;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Big Logo */}
        <div className="py-10 flex justify-center sm:justify-start">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="" className="max-w-[300px]" />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-body">&copy; 2026 Desert Consultants. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-primary hover:border-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
