import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import {
  LocationIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
} from "./icons/ContactIcons";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "submitted" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Reset status message when user starts typing a new message
    if (submissionStatus === "submitted" || submissionStatus === "error") {
      setSubmissionStatus("idle");
    }
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    // =================================================================================
    // IMPORTANT: Link to your Google Sheet
    // 1. Create a Google Sheet and an Apps Script.
    // 2. Paste the provided Apps Script code and deploy it as a web app.
    // 3. Replace the placeholder URL below with your actual Web App URL.
    // =================================================================================
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbzZIY8V4CtoswAVeQcBJiPkD_-0MErYO3aZOvm7TlW5Geeq-AZg9DvnqD-BnQgtNGco/exec";

    const data = new FormData(e.currentTarget);

    try {
      // Using 'no-cors' is a common way to submit to Google Apps Scripts
      // from the client-side, as it avoids CORS errors. The tradeoff is
      // we can't read the response to confirm success from the script.
      // We optimistically assume success if the request itself doesn't fail.
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setSubmissionStatus("submitted");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    }
  };

  const contactDetails = [
    {
      icon: <LocationIcon />,
      text: "123 Design Street, Architecture City, AC 12345",
    },
    { icon: <PhoneIcon />, text: "(+254) 758-467-157 / 781-492-929" },
    { icon: <MailIcon />, text: "cohscapeslandscapers@gmail.com" },
    { icon: <ClockIcon />, text: "Monday-Friday: 9:00 AM - 6:00 PM" },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>Get in Touch</SectionTitle>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-600 mb-8">
              Ready to discuss your project? Contact us today to schedule a
              consultation with our team of experienced architects and
              designers.
            </p>
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-primary mr-4">{detail.icon}</span>
                  <p className="text-gray-700">{detail.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <fieldset disabled={submissionStatus === "submitting"}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-200"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-200"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-200"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-200"
                  ></textarea>
                </div>
              </fieldset>
              <button
                type="submit"
                disabled={submissionStatus === "submitting"}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submissionStatus === "submitting"
                  ? "Sending..."
                  : "Send Message"}
              </button>
              <div className="h-6 mt-4 text-center">
                {" "}
                {/* Reserve space for message to prevent layout shift */}
                {submissionStatus === "submitted" && (
                  <p className="text-green-600 font-semibold">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {submissionStatus === "error" && (
                  <p className="text-red-600 font-semibold">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
