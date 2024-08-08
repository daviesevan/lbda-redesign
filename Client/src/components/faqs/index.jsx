import React, { useState } from 'react';

const FaqItem = ({ question, answer, id, isOpen, toggleFaq }) => {
  return (
    <div>
      <button
        onClick={() => toggleFaq(id)}
        className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-green-700 outline-none hover:text-primary focus:text-primary focus:outline-none"
        aria-controls={`faq${id}`}
        aria-expanded={isOpen}
      >
        {question}
        <svg
          className={`flex-none w-4 h-4 ml-4 transition transform ${
            isOpen ? 'rotate-45' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 pr-0 text-gray-700 md:pr-40" id={`faq${id}`}>
          {answer}
        </div>
      )}
    </div>
  );
};

const index = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "What is LBDA's mission?",
      answer:
        'The mission of the Lake Basin Development Authority (LBDA) is to promote sustainable economic development in the Lake Basin region by providing strategic planning, infrastructure development, and capacity building.',
    },
    {
      id: 2,
      question: 'What services does LBDA offer?',
      answer:
        'LBDA offers a wide range of services including infrastructure development, water resource management, agricultural development, and community capacity building programs.',
    },
    {
      id: 3,
      question: 'How can I partner with LBDA?',
      answer:
        'To partner with LBDA, you can reach out through our contact page or attend our partnership events. We welcome collaboration with organizations that share our vision for sustainable development in the Lake Basin region.',
    },
  ];

  return (
    <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <h1 className="mb-6 text-xl text-green-700 font-bold md:text-3xl">
        Frequently Asked Questions
      </h1>
      <div className="text-sm border-t border-b border-gray-200 divide-y divide-gray-200">
        {faqData.map((faq) => (
          <FaqItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFaq === faq.id}
            toggleFaq={toggleFaq}
          />
        ))}
      </div>
    </section>
  );
};

export default index;
