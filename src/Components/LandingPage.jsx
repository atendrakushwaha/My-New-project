import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Header
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <div className="text-xl font-bold">My Logo</div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Page</a>
          <a href="#" className="hover:underline">Page</a>
          <a href="#" className="hover:underline">Page</a>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded">Sign in</button>
      </header> */}

      {/* Hero Section */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Landing page title</h1>
        <p className="mb-6 text-gray-700">Brief description for your product or service. Provide an overview of what it does.</p>
        <button className="bg-black text-white px-6 py-3 rounded mb-6">Primary action</button>
        <img src="https://picsum.photos/400/200?random=1" width={1100} alt="Hero" className="rounded" />
      </section>

      {/* Sections */}
      {[1, 2, 3,4].map((section) => (
        <section key={section} className="px-6 py-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Section heading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((card) => (
              <div key={card} className="bg-white shadow rounded overflow-hidden">
                <img src="https://picsum.photos/400/200?random=2" alt="Card" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Subheading</h3>
                  <p className="text-gray-600 text-sm">Brief description of the content inside this card.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Quote/Testimonial Section */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Section heading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((quote) => (
            <div key={quote} className="bg-gray-100 p-6 rounded">
              <p className="mb-4 text-sm italic">"A quote from a user of your product."</p>
              <div className="text-sm font-semibold">@username</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Table Section */}
      {/* <section className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Section heading</h2>
        <div className="flex justify-between mb-4">
          <div>
            <button className="px-4 py-2 border rounded">Button</button>
            <button className="ml-2 px-4 py-2 border rounded">Secondary button</button>
          </div>
        </div>
        <table className="w-full text-left border-t">
          <thead>
            <tr>
              <th className="py-2">Goal</th>
              <th>Metric</th>
              <th>Target</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((row) => (
              <tr key={row} className="border-t">
                <td className="py-2">Goal {row}</td>
                <td>Metric</td>
                <td>Target</td>
                <td>Status</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section> */}
    </div>
  );
}
