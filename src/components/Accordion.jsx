import React, { useState } from 'react';
import './Accordion.css'

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  const isSectionActive = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <div id="accordion-open" className='w-5/6 m-auto py-8 flex flex-col gap-2' data-accordion="open">
        <h1 className='font-bold text-2xl tracking-widest'>FAQ</h1>
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-black border-gray-200 rounded-t-xl hover:border-black hover:border-1  ${
            isSectionActive('accordion-open-body-1') ? 'active' : ''
          }`}
          onClick={() => toggleSection('accordion-open-body-1')}
          aria-expanded={isSectionActive('accordion-open-body-1')}
          aria-controls="accordion-open-body-1"
        >
          <span className="flex items-center font-bold">
           * What is your return policy for products?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${isSectionActive('accordion-open-body-1') ? 'active' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-1" className={`hidden ${isSectionActive('accordion-open-body-1') ? 'active' : ''}`} aria-labelledby="accordion-open-heading-1">
        <div className="p-5 border-gray-200 dark:bg-gray-900 text-left">
          <p className="mb-2 text-black leading-8">
          We want you to be completely satisfied with your purchase. If for any reason you're not happy with your product, you can initiate a return within 30 days of receiving your order. Please ensure that the product is in its original condition and packaging.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-black border-gray-200 rounded-t-xl hover:border-black hover:border-1  ${
            isSectionActive('accordion-open-body-2') ? 'active' : ''
          }`}
          onClick={() => toggleSection('accordion-open-body-2')}
          aria-expanded={isSectionActive('accordion-open-body-2')}
          aria-controls="accordion-open-body-2"
        >
          <span className="flex items-center font-bold">
           * How do I contact customer support?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${isSectionActive('accordion-open-body-2') ? 'active' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-2" className={`hidden ${isSectionActive('accordion-open-body-2') ? 'active' : ''}`} aria-labelledby="accordion-open-heading-1">
        <div className="p-5 border-gray-200 dark:bg-gray-900 text-left">
          <p className="mb-2 text-black leading-8">
          If you have any questions, concerns, or need assistance, our customer support team is here to help. You can reach us by sending an email to support@example.com or by using the contact form on our "Contact Us" page. We strive to respond to all inquiries within 24 hours.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-black border-gray-200 rounded-t-xl hover:border-black hover:border-1  ${
            isSectionActive('accordion-open-body-3') ? 'active' : ''
          }`}
          onClick={() => toggleSection('accordion-open-body-3')}
          aria-expanded={isSectionActive('accordion-open-body-3')}
          aria-controls="accordion-open-body-3"
        >
          <span className="flex items-center font-bold">
           * Can I change the shipping address after placing an order?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${isSectionActive('accordion-open-body-3') ? 'active' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-3" className={`hidden ${isSectionActive('accordion-open-body-3') ? 'active' : ''}`} aria-labelledby="accordion-open-heading-3">
        <div className="p-5 border-gray-200 dark:bg-gray-900 text-left">
          <p className="mb-2 text-black leading-8">
          Unfortunately, we're unable to change the shipping address once an order has been placed. Please double-check the accuracy of your shipping information before completing your purchase. If you need to make changes, please reach out to our customer support team as soon as possible.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-4">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-black border-gray-200 rounded-t-xl hover:border-black hover:border-1  ${
            isSectionActive('accordion-open-body-4') ? 'active' : ''
          }`}
          onClick={() => toggleSection('accordion-open-body-4')}
          aria-expanded={isSectionActive('accordion-open-body-4')}
          aria-controls="accordion-open-body-4"
        >
          <span className="flex items-center font-bold">
           * Do you offer international shipping?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${isSectionActive('accordion-open-body-4') ? 'active' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-4" className={`hidden ${isSectionActive('accordion-open-body-4') ? 'active' : ''}`} aria-labelledby="accordion-open-heading-4">
        <div className="p-5 border-gray-200 dark:bg-gray-900 text-left">
          <p className="mb-2 text-black leading-8">
          Yes, we offer international shipping to many countries around the world. During checkout, you can select your country from the list of available options. Please note that shipping times and fees may vary based on your location.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-5">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-black border-gray-200 rounded-t-xl hover:border-black hover:border-1  ${
            isSectionActive('accordion-open-body-5') ? 'active' : ''
          }`}
          onClick={() => toggleSection('accordion-open-body-5')}
          aria-expanded={isSectionActive('accordion-open-body-5')}
          aria-controls="accordion-open-body-5"
        >
          <span className="flex items-center font-bold">
           * How can I check the status of my order?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${isSectionActive('accordion-open-body-5') ? 'active' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-5" className={`hidden ${isSectionActive('accordion-open-body-5') ? 'active' : ''}`} aria-labelledby="accordion-open-heading-5">
        <div className="p-5 border-gray-200 dark:bg-gray-900 text-left">
          <p className="mb-2 text-black leading-8">
          You can easily track the status of your order by logging into your account and navigating to the "Order History" section. There, you'll find detailed information about your order's progress, including estimated delivery dates and tracking numbers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
