import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error("useLenis must be used within a LenisProvider");
  }
  return context;
};

const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 0.05 + 1.05 * Math.pow(2.1 + 0.15 * t, -4.5)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoScrollbar: true,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    // RAF loop for smooth scrolling
    let rafId;
    const raf = (time) => {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  return (
    <LenisContext.Provider value={{ lenis, scrollToTop, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
};

export default LenisProvider;
