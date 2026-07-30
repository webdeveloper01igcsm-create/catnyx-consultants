import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { teamMembers } from "../data/homeData";
import Slider from "../components/Common/Slider";

const aboutStats = [
  { value: "10+", label: "Team Members" },
  { value: "70+", label: "Happy Clients" },
  { value: "98%", label: "Success Rate" },
  { value: "100%", label: "Dedication" },
];

const reasons = [
  "Providing personalized solutions for the requirement.",
  "Affordable - If you have a quotation more than Desert Consultants, We bet you to provide that quote and we will beat that quotation as well.",
  "Saving you from taxes and compliances.",
  "Helping our clients with UAE experience for the digital growth of the business.",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Desert Consultants - UAE Business Setup Experts</title>
        <meta name="description" content="Learn about Desert Consultants - your trusted partner for UAE business setup." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="mt-16 lg:mt-20 relative overflow-hidden flex items-center min-h-[400px] lg:min-h-[500px]">
        <div className="absolute inset-0 z-0 bg-white">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" alt="Dubai Background" className="w-full h-full object-cover object-right z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/80 to-transparent md:to-transparent/10 z-10 w-full md:w-[75%] lg:w-[65%]"></div>
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto w-full py-[80px] lg:py-[128px] px-6 lg:px-[48px]">
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold text-primary uppercase tracking-[0.2em] mb-4">ABOUT DESERT CONSULTANTS</p>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-[800] text-[#020617] leading-[1.1] tracking-tight sm:tracking-[-3px] mb-6 font-cabinet">
              Connect | Collab | Create
            </h1>
            <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed mb-8 max-w-[550px]">
              We understand the importance of time & trust. That's the reason we believe in Connect | Collab | Create.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 bg-[#0C69D0] hover:bg-[#0A56AD] text-white text-[15px] font-medium px-8 py-3.5 rounded-sm transition-all duration-300">
              Explore More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Welcome</p>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0C69D0] leading-[40px] tracking-[-0.9px] mb-6 font-cabinet">Welcome to Desert Consultants</h2>
              <p className="text-sm sm:text-base text-gray-body leading-relaxed mb-4">
                We believe in connecting with the people who want premium & genuine help regarding business setup or investment management services in UAE, while making the connections we make sure of the requirements of our clients to provide the solutions according to needs, that help us to collaborate with our clients for the future business help to each other's growth. That creates an impact in the market.
              </p>
              <p className="text-sm sm:text-base text-gray-body leading-relaxed">
                That helps us to collaborate with our clients for future business help to each other's growth. That creates an impact in the market.
              </p>
            </motion.div>
            <div className="flex gap-3 sm:gap-4 w-full max-w-[556px] mx-auto lg:ml-auto">
              <div className="flex flex-col gap-3 sm:gap-4 w-1/2">
                <img src="https://images.unsplash.com/photo-1546412414-e1885259563a?w=600&q=80" alt="Dubai skyline" className="w-full object-cover aspect-[27/26]" />
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=600&q=80" alt="Business handshake" className="w-full object-cover aspect-[27/26]" />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 w-1/2 mt-6 sm:mt-10 lg:mt-12">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c312a?w=600&q=80" alt="Team discussion" className="w-full object-cover aspect-[27/26]" />
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" alt="Dubai Marina cityscape" className="w-full object-cover aspect-[27/26]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-x divide-white/20">
            {aboutStats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 font-cabinet">{stat.value}</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Why Us</p>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0C69D0] leading-[40px] tracking-[-0.9px] mb-5 font-cabinet">What Makes Us Different?</h2>
              <p className="text-sm sm:text-base text-gray-body leading-relaxed mb-4">
                We specialize in international clients based from mainly the United Kingdom, Canada & India and we know the importance of time & money, when our clients come we help them with Airport pickup, prior scheduling appointments for medicals and biometrics, and meeting timelines so that our clients can get the license, visa, bank account easily.
              </p>
            </div>
            <div>
              <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-[800] text-[#0C69D0] leading-[32px] tracking-[-0.5px] mb-2 font-cabinet">Reasons To Choose Desert Consultants</h3>
              <p className="text-xs text-gray-body mb-6">Because we understand the needs of today's business community</p>
              <ul className="space-y-4">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-gray-body">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Our Specialists</p>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0C69D0] leading-[40px] tracking-[-0.9px] font-cabinet">Meet the Team</h2>
            <p className="mt-3 text-sm sm:text-base text-gray-body max-w-2xl mx-auto">Our team will guide you in choosing the right license for your business, ensuring that your requirements comply with UAE law.</p>
          </div>
          <Slider slidesPerView={{ default: 2, 640: 3, 1024: 5 }} autoplay={3000} slideClass="team-slide">
            {teamMembers.map((member, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden mb-3">
                  <img src={member.img} alt={member.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=0C69D0&color=fff&size=400`; }} />
                </div>
                <h4 className="text-sm font-bold text-dark">{member.name}</h4>
                <p className="text-xs text-gray-body">{member.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default About;