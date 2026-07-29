import { useState, useEffect, useRef, useCallback } from "react";

const Slider = ({
  children,
  slidesPerView = { default: 1, 640: 1, 1024: 1 },
  autoplay = 3000,
  slideClass = "",
  showDots = true,
}) => {
  const [current, setCurrent] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const trackRef = useRef(null);
  const autoTimerRef = useRef(null);
  const sectionRef = useRef(null);

  const getSlidesPerView = useCallback(() => {
    const w = window.innerWidth;
    let spv = slidesPerView.default || 1;
    Object.keys(slidesPerView).forEach((bp) => {
      if (bp !== "default" && w >= parseInt(bp)) spv = slidesPerView[bp];
    });
    return spv;
  }, [slidesPerView]);

  const slides = children;
  const slideCount = slides.length;

  useEffect(() => {
    const calcMax = () => {
      const spv = getSlidesPerView();
      setMaxIndex(Math.max(0, slideCount - spv));
    };
    calcMax();
    window.addEventListener("resize", calcMax);
    return () => window.removeEventListener("resize", calcMax);
  }, [slideCount, getSlidesPerView]);

  const goTo = useCallback(
    (idx) => {
      setCurrent(() => {
        const spv = getSlidesPerView();
        const max = Math.max(0, slideCount - spv);
        return Math.max(0, Math.min(idx, max));
      });
    },
    [getSlidesPerView, slideCount]
  );

  const next = useCallback(() => {
    setCurrent((prev) => {
      const spv = getSlidesPerView();
      const max = Math.max(0, slideCount - spv);
      return prev >= max ? 0 : prev + 1;
    });
  }, [getSlidesPerView, slideCount]);

  const startTimer = useCallback(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(next, autoplay);
  }, [next, autoplay]);

  const stopTimer = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  const resetTimer = useCallback(() => {
    stopTimer();
    startTimer();
  }, [stopTimer, startTimer]);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    stopTimer();
  };

  const handleTouchEnd = (e) => {
    const d = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 40) goTo(d > 0 ? current + 1 : current - 1);
    startTimer();
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    stopTimer();
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const d = startX.current - e.clientX;
    if (Math.abs(d) > 40) goTo(d > 0 ? current + 1 : current - 1);
    startTimer();
  };

  const spv = getSlidesPerView();
  const translateX = -(100 / spv) * current;

  return (
    <div
      ref={sectionRef}
      className="cx-slider-wrap"
      onMouseEnter={stopTimer}
      onMouseLeave={() => {
        if (!isDragging) startTimer();
      }}
    >
      <div
        ref={trackRef}
        className="cx-slider-track"
        style={{ transform: `translateX(${translateX}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
      >
        {slides.map((child, i) => (
          <div key={i} className={slideClass}>
            {child}
          </div>
        ))}
      </div>
      {showDots && (
        <div className="cx-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`cx-dot ${i === current ? "active" : ""}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                goTo(i);
                resetTimer();
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;