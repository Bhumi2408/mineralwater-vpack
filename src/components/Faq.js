"use client";

import { useState } from "react";
import Icon from "./Icon";

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We provide machinery solutions for water, beverage, pharmaceutical, cosmetics, and packaging industries, catering to a wide range of production needs.",
  },
  {
    q: "Do you offer customized machinery solutions?",
    a: "Yes, we specialize in designing and manufacturing customized machines tailored to your specific production requirements and capacity.",
  },
  {
    q: "Where is your company located?",
    a: "We are headquartered in Bawana, Delhi, with a strong presence serving clients across India and globally.",
  },
  {
    q: "Do you provide installation and training?",
    a: "Absolutely. We offer complete installation, operational training, and ongoing support to ensure smooth and efficient performance.",
  },
  {
    q: "What makes your machines reliable?",
    a: "Our machines are built using advanced technology, high-quality materials, and strict quality standards, ensuring durability, efficiency, and long-term performance.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {faqs.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className={`acc-item${open ? " open" : ""}`}>
            <button
              type="button"
              className="acc-title"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span className="acc-icon">
                <Icon name={open ? "minus" : "plus"} className="ico" />
              </span>
              <span role="heading" aria-level={3} className="acc-text">
                {item.q}
              </span>
            </button>
            <div className="acc-body">
              <div className="acc-body-inner">
                <div className="acc-content">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
