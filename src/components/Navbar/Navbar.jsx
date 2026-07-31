import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Calendar, Building2, Briefcase, Home, ShieldCheck, Calculator, FileText, Landmark, Phone } from "lucide-react";
import { navLinks, serviceDropdown, contactInfo } from "../../data/navigation";
import logo from "../../assets/logo.png";

const serviceIcons = {
    building: Building2,
    office: Briefcase,
    home: Home,
    shield: ShieldCheck,
    calculator: Calculator,
    document: FileText,
    bank: Landmark,
};

const Navbar = ({ onBookAppointment }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
    }, [location.pathname]);

    const isActive = (path) => {
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 shrink-0">
                        <img src={logo} className="h-13" alt="" />
                    </Link>
                    <div className="flex flex-roq items-center gap-6">

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex flex-end items-center gap-8">
                            {navLinks.map((link) =>
                                link.hasDropdown ? (
                                    <div key={link.name} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                                        <Link to={link.path} className={`nav-link inline-flex items-center gap-1 text-sm font-semibold transition-colors ${isActive(link.path) ? "text-primary active" : "text-gray-700 hover:text-primary"}`}>
                                            {link.name} <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                                        </Link>
                                        {servicesOpen && (
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[640px]">
                                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-6">
                                                    <div>
                                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Business Setup</p>
                                                        <div className="space-y-1">
                                                            {serviceDropdown.businessSetup.map((svc) => {
                                                                const Icon = serviceIcons[svc.icon] || Building2;
                                                                return (
                                                                    <Link key={svc.path} to={svc.path} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-light transition-colors group">
                                                                        <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                                                                            <Icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                                                        </div>
                                                                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">{svc.name}</span>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Other Services</p>
                                                        <div className="space-y-1">
                                                            {serviceDropdown.otherServices.map((svc) => {
                                                                const Icon = serviceIcons[svc.icon] || Building2;
                                                                return (
                                                                    <Link key={svc.path} to={svc.path} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-light transition-colors group">
                                                                        <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                                                                            <Icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                                                        </div>
                                                                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">{svc.name}</span>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link key={link.name} to={link.path} className={`nav-link text-sm font-semibold transition-colors ${isActive(link.path) ? "text-primary active" : "text-gray-700 hover:text-primary"}`}>
                                        {link.name}
                                    </Link>
                                )
                            )}
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            {/* Desktop CTA
                            <div className="flex flex-col text-xs font-semibold text-gray-700 space-y-0.5 border-r border-gray-200 pr-3">
                                <a href={contactInfo.uaePhoneHref} className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    <span className="text-[11px]">🇦🇪</span> <span>{contactInfo.uaePhone}</span>
                                </a>
                                <a href={contactInfo.indiaPhoneHref} className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    <span className="text-[11px]">🇮🇳</span> <span>{contactInfo.indiaPhone}</span>
                                </a>
                            </div>
                             */}
                            <button onClick={onBookAppointment} className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm">
                                Book Appointment
                            </button>
                        </div>

                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-gray-700" aria-label="Toggle menu">
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((link) =>
                            link.hasDropdown ? (
                                <div key={link.name}>
                                    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className={`w-full flex items-center justify-between px-3 py-3 text-sm font-semibold rounded-lg transition-colors ${isActive(link.path) ? "text-primary bg-primary-light" : "text-gray-700 hover:bg-gray-50"}`}>
                                        {link.name} <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    {mobileServicesOpen && (
                                        <div className="pl-4 pt-1 pb-2 space-y-1">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 py-1.5">Business Setup</p>
                                            {serviceDropdown.businessSetup.map((svc) => (
                                                <Link key={svc.path} to={svc.path} className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary-light rounded-lg transition-colors">
                                                    {svc.name}
                                                </Link>
                                            ))}
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 py-1.5 mt-2">Other Services</p>
                                            {serviceDropdown.otherServices.map((svc) => (
                                                <Link key={svc.path} to={svc.path} className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary-light rounded-lg transition-colors">
                                                    {svc.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link key={link.name} to={link.path} className={`block px-3 py-3 text-sm font-semibold rounded-lg transition-colors ${isActive(link.path) ? "text-primary bg-primary-light" : "text-gray-700 hover:bg-gray-50"}`}>
                                    {link.name}
                                </Link>
                            )
                        )}
                        {/* <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-gray-100">
                            <a href={contactInfo.uaePhoneHref} className="inline-flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-2.5 rounded-lg transition-all">
                                <Phone className="w-3.5 h-3.5 text-primary" /> UAE: {contactInfo.uaePhone}
                            </a>
                            <a href={contactInfo.indiaPhoneHref} className="inline-flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-2.5 rounded-lg transition-all">
                                <Phone className="w-3.5 h-3.5 text-primary" /> IN: {contactInfo.indiaPhone}
                            </a>
                        </div> */}
                        <button onClick={onBookAppointment} className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                            <Calendar className="w-4 h-4" /> Book Appointment
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;