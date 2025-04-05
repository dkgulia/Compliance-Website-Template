'use client';

import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Hexafort?",
      answer:
        "Hexafort is a comprehensive enterprise security management platform designed to automate and streamline security and privacy processes.",
    },
    {
      question: "Who is Hexafort for?",
      answer:
        "Hexafort is suitable for organizations of all sizes and industries that need to manage compliance with various regulations.",
    },
    {
      question: "What kind of compliances does Hexafort support?",
      answer:
        "Hexafort supports a wide range of compliances, including ISO 27001, HIPAA, GDPR, PCI DSS, and more.",
    },
    {
      question: "How does Hexafort help automate compliance processes?",
      answer:
        "Hexafort automates tasks such as policy management, risk assessments, and evidence collection, saving time and reducing errors.",
    },
    {
      question: "What is the risk assessment feature in Hexafort?",
      answer:
        "The risk assessment feature allows you to identify and prioritize potential risks to your organization, helping you focus on the most critical areas.",
    },
    {
      question: "Can Hexafort integrate with other systems?",
      answer:
        "Yes, Hexafort can integrate with various systems, including HR, IT, and financial systems, to provide a more comprehensive compliance solution.",
    },
    {
      question: "How long does it take to implement Hexafort?",
      answer:
        "The implementation time depends on factors such as the size of your organization and the complexity of your compliance requirements. However, we strive to make the process as smooth and efficient as possible.",
    },
    {
      question: "What kind of support is available after implementation?",
      answer:
        "We offer ongoing support, including training, troubleshooting, and updates to ensure you get the most out of Hexafort.",
    },
    {
      question: "How is Hexafort priced?",
      answer:
        "Our pricing is based on a subscription model, taking into account factors such as the number of users, features required, and compliance scope.",
    },
    {
      question: "Do you offer a free trial or demo?",
      answer:
        "Yes, we offer a free trial or demo to allow you to experience Hexafort firsthand and see how it can benefit your organization.",
    },
  ];

  return (
    <div className="bg-kite-dark-2 rounded-lg border border-neutral-800 w-full">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex ${ index < faqs.length - 1 ? 'border-b': ''} border-neutral-800 justify-between items-center w-full px-6 py-4 focus:outline-none text-gray-300 text-left`}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                activeIndex === index ? "rotate-45" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m-8-8h16"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className={`px-6 py-4 ${ index < faqs.length - 1 ? 'border-b': 'border-t'} border-neutral-800 text-gray-500 transition-all ease-in-out duration-300`}>
              <p className="">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
