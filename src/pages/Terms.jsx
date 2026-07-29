import { Helmet } from "react-helmet-async";

const Terms = () => {
  const sections = [
    { title: "Introduction", content: "Welcome to Catnyx Consultants. By using our website and services, you agree to these terms and conditions. Please read them carefully before engaging with our services." },
    { title: "Services", content: "Catnyx Consultants provides business setup, accounting, PRO services, and related consulting services in the UAE. We reserve the right to modify or discontinue any service at any time." },
    { title: "Client Responsibilities", content: "Clients are responsible for providing accurate and complete information required for business setup and related services. Any delays caused by incomplete or incorrect information are not the responsibility of Catnyx Consultants." },
    { title: "Payment Terms", content: "All fees must be paid as per the agreed quotation. Government fees and charges are subject to change without prior notice. We reserve the right to withhold services until full payment is received." },
    { title: "Confidentiality", content: "We maintain strict confidentiality of all client information and documents. We do not share client data with third parties without explicit consent, except as required by law." },
    { title: "Limitation of Liability", content: "Catnyx Consultants shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the fees paid for the specific service in question." },
    { title: "Governing Law", content: "These terms and conditions are governed by the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of the UAE." },
    { title: "Changes to Terms", content: "We reserve the right to update these terms and conditions at any time. Continued use of our services after changes constitutes acceptance of the new terms." },
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Catnyx Consultants</title>
        <meta name="description" content="Read the terms and conditions for using Catnyx Consultants services." />
      </Helmet>

      <section className="mt-16 lg:mt-20 relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-primary-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-[13px] font-bold text-primary uppercase tracking-[0.2em] mb-4">LEGAL</p>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[800] text-[#020617] leading-[1.1] tracking-tight mb-6 font-cabinet">Terms & Conditions</h1>
          <p className="text-base md:text-[17px] text-[#52525B] leading-relaxed max-w-2xl mx-auto">Please read these terms carefully before using our services.</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-dark mb-3 font-cabinet">{i + 1}. {section.title}</h2>
                <p className="text-sm text-gray-body leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;