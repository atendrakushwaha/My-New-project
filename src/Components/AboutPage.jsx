import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <h2 className="text-gray-500 text-lg mb-6">Subheading for description or instructions</h2>
          <p className="text-gray-700 mb-6">
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
          </p>
          <p className="text-gray-700 mb-6">
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi
            intricate Content. Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod
            irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat
            discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich
            sleepy perfect consectetur.
          </p>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact me</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last name</label>
                  <input
                    type="text"
                    placeholder="Smitherton"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="email@janeaskedomain.net"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your message</label>
                <textarea
                  rows="4"
                  placeholder="Enter your question or message"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                ></textarea>
              </div>
              <button type="submit" className="bg-black text-white px-6 py-2 rounded w-full md:w-auto">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/400/400?random=1"
            alt="Portrait"
            className="rounded w-full max-w-xs object-cover"
          />
        </div>
      </div>
    </div>
  );
}
