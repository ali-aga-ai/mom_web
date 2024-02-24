// Email.js
import React from 'react';

const Email = () => {
  function closeModal() {
    document.getElementById("emailModal").style.display = "none";
  }
  
  return (
    <div id="emailModal" className=" w-full md:w-1/2 px-4">
      <div className="modal-content bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-gray-200 pb-4">
          Free Consultation
        </h2>

        <form id="emailForm" action="https://formsubmit.co/d223b3f1af5402deaf12edf81c9189df" method="POST">
          <div className="mb-4">
            <input
              type="text"
              id='name'
              name="name"
              placeholder="Please Enter Your Full Name *"
              required=""
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="contact_number"
              placeholder="Please Enter Your Contact Number *"
              required=""
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
            id='email'
              type="email"
              name="email"
              placeholder="Please Enter Contact Email *"
              required=""
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="emailContent"
              name="emailContent"
              placeholder="Enter Your Message *"
              required=""
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-2 rounded hover:bg-black" value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Email;
