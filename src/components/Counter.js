"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ title, end, start = 1, duration = 3000, small = false }) {
  const ref = useRef(null);
  const [value, setValue] = useState(start);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame;
    const run = () => {
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        setValue(Math.round(start + (end - start) * p));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        run();
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [start, end, duration]);

  return (
    <div className="counter" ref={ref}>
      <h1 className={`counter-title${small ? " sm" : ""}`}>{title}</h1>
      <div className="counter-content">
        <span className="counter-number">{value}</span>
        <span className="counter-suffix">+</span>
      </div>
    </div>
  );
}
