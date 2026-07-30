import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LenisProvider from "./components/LenisProvider";
import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Offers = lazy(() => import("./pages/Offers"));
const Terms = lazy(() => import("./pages/Terms"));
const Calculator = lazy(() => import("./pages/Calculator"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="mt-20 min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LenisProvider>
          <Routes>
            <Route path="/" element={<Suspense fallback={<PageLoader />}><MainLayout /></Suspense>}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetail />} />
              <Route path="contact" element={<Contact />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="blogs/:slug" element={<BlogDetail />} />
              <Route path="ongoing-promotions" element={<Offers />} />
              <Route path="terms-and-conditions" element={<Terms />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </LenisProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;