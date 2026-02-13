import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mreprzbp", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSent(true);
        e.target.reset();
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gradient-to-br from-[#050414] via-[#0d081f] to-[#050414]"
    >
      <ToastContainer />

      {/* ✨ Title with “however” glowing underline */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider relative inline-block">
          CONTACT
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-600 to-purple-500 rounded-full animate-pulse"></span>
        </h2>
        <p className="text-gray-400 mt-6 text-lg md:text-xl font-medium">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Form Card */}
      <div className="relative w-full max-w-md bg-[#0d081f] p-8 rounded-xl shadow-[0_0_50px_rgba(130,69,236,0.4)] border border-gray-700 hover:shadow-[0_0_80px_rgba(255,140,0,0.5)] transition-all duration-500">
        <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-4">
          Connect With Me <span className="ml-1 animate-bounce">🚀</span>
        </h3>

        {!isSent ? (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-600 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-600 transition"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-600 transition"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-600 transition"
            />
            <button
              type="submit"
              className="w-full py-3 text-white font-bold text-lg rounded-full bg-gradient-to-r from-[#8245ec] to-[#f472b6] hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-green-400 text-center font-semibold text-lg mt-4 animate-pulse">
            Thank you! Your message has been sent. ✅
          </p>
        )}
      </div>

      {/* ✨ Optional animated background glow */}
      <div className="absolute -z-10 w-[300px] h-[300px] bg-purple-700 rounded-full opacity-20 top-10 left-1/4 animate-pulse"></div>
      <div className="absolute -z-10 w-[200px] h-[200px] bg-orange-500 rounded-full opacity-10 bottom-10 right-1/3 animate-pulse"></div>
    </section>
  );
};

export default Contact;
