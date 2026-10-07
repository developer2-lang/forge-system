import React, { useState } from 'react';
import type { ForgeFaq } from '../../types/forge';

interface FaqItemProps {
  faq: ForgeFaq;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqItem: React.FC<FaqItemProps> = ({
  faq,
  index,
  isOpen,
  onToggle,
}) => {
  const panelId = `faq-panel-${index + 1}`;

  return (
    <div className="faq">
      <button
        className="faq__q"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls={panelId}
        onClick={onToggle}
        type="button"
      >
        <span>{faq.question}</span>
        <i aria-hidden="true">+</i>
      </button>
      <div
        className={`faq__a ${isOpen ? 'is-open' : ''}`}
        id={panelId}
        role="region"
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

interface FaqSectionProps {
  faqs: ForgeFaq[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  // Start with the first FAQ answer open by default (matches original behavior)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="sec">
      <div className="grid-sec">
        <p className="marker">
          § 06
          <br />
          FAQ
        </p>
        <div>
          <h2 className="h2 faq-title">
            Questions clients ask
            <br />
            before stage 01.
          </h2>

          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.id || index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
