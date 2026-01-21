import React, { useState } from "react";
import { sendContactMessage } from "../data/api";
import { toast } from "react-toastify";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const messageData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    setLoading(true);
    try {
      const response = await sendContactMessage(messageData);

      if (response.data?.success) {
        toast.success(response.data.message || "Message sent successfully!");
        console.log(response.data.success || "Message sent successfully!");
        alert("Message sent successfully!");

        e.target.reset();
      } else {
        toast.error(response.data.message || "Failed to send message.");
        console.log(response.data.message || "Failed to send message.");
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(error.response?.data?.message || "An error occurred with sending your message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to
            our team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <div className="text-sm text-gray-700 mb-1">Your Name</div>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-1">Email Address</div>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-1">Subject</div>
                <input
                  name="subject"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-1">Message</div>
                <textarea
                  name="message"             
                  rows="5"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
              type="submit"
                disabled={loading}
                className={`w-full py-3 rounded font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 shadow-md"
                }`}
              >
                {loading && <i className="pi pi-spin pi-spinner text-lg"></i>}
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="pi pi-envelope text-green-600 mt-1"></i>
                  <div>
                    <div className="font-semibold text-gray-700">Email</div>
                    <a
                      href="mailto:support@damdaily.com"
                      className="text-green-600 hover:text-green-700"
                    >
                      support@damdaily.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="pi pi-phone text-green-600 mt-1"></i>
                  <div>
                    <div className="font-semibold text-gray-700">Phone</div>
                    <a
                      href="tel:+2347016115001"
                      className="text-green-600 hover:text-green-700"
                    >
                      +234-701-611-5001
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="pi pi-clock text-green-600 mt-1"></i>
                  <div>
                    <div className="font-semibold text-gray-700">Hours</div>
                    <div className="text-gray-600">Mon-Fri: 9am-6pm</div>
                    <div className="text-gray-600">Sat: 10am-4pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <i className="pi pi-facebook text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <i className="pi pi-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <i className="pi pi-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <i className="pi pi-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
