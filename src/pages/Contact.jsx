import React, { useState } from "react";
import Header from "../components/Header";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSuccessMessage("Thank you for contacting us! We’ll get back to you soon.");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Contact</h1>

        {/* Success message */}
        {successMessage && (
          <div className="mb-4 p-3 rounded bg-green-100 text-green-800">
            {successMessage}
          </div>
        )}

        {/* Card Form */}
        <div className="bg-gradient-to-b from-black to-purple-50 py-12 px-6 bg-[url('https://t4.ftcdn.net/jpg/08/89/10/59/240_F_889105948_FBJCkxtG8VybyhDFBw4ww7y42wrpPuk1.jpg')] bg-cover bg-center">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Illustration */}
            <div className="hidden md:block">
              <img
                src="https://t4.ftcdn.net/jpg/01/25/01/17/240_F_125011709_om3KNJq12jDsFvkkgZTRRGEcPn2yhHEL.jpg"
                alt="Contact Illustration"
                className="w-3/4 mx-auto drop-shadow-lg"
              />
            </div>

            {/* Right Side - Form with Background */}
            <div
              className="relative shadow-lg rounded-2xl p-8 border border-gray-100 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://t4.ftcdn.net/jpg/05/08/80/19/240_F_508801991_UTsCAOorx25USitqonfRADueJlzyjhDq.jpg')"
              }}
            >
              {/* Overlay for better readability */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-4">Connect</h2>
                <p className="text-gray-200 mb-6">
                  Have questions or feedback? We'd love to hear from you.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="input-box bg-white/90"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="input-box bg-white/90"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="input-box bg-white/90 resize-none"
                  ></textarea>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
