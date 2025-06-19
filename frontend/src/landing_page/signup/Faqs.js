import React from "react";

const Faqs = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">FAQs</h1>

      <div className="accordion" id="faqAccordion">

        {/* FAQ Item 1 */}
        <div className="accordion-item border-0 border-bottom">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed border-0 border-bottom pb-3 pt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              What is a Zerodha account?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              A Zerodha account allows you to trade and invest in stocks, mutual funds, and more.
            </div>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="accordion-item border-0 border-bottom">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed border-0 border-bottom pb-3 pt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              What documents are required to open a demat account?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              PAN card, Aadhaar card, and bank proof are required.
            </div>
          </div>
        </div>

        {/* Add more FAQ items below similarly */}
        <div className="accordion-item border-0 border-bottom">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed border-0 border-bottom pb-3 pt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Is Zerodha account opening free?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              No, there is a one-time opening charge depending on the selected segments.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 border-bottom">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed border-0 border-bottom pb-3 pt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
            >
              Are there any maintenance charges for a demat account?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, annual maintenance charges apply.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 border-bottom">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed border-0 border-bottom pb-3 pt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
            >
              Can I open a demat account without a bank account?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              No, a bank account is required to open a demat account.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faqs;
