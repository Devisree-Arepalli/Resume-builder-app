export default function PricingSection() {
  return (
    <section className="bg-[#222021] py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, Transparent Pricing</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Choose the plan that fits your needs. All plans include access to our resume builder.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="bg-[#2c2b2a] border border-[#7c1c2b] rounded-xl shadow-sm p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
          <p className="text-3xl font-bold text-white mb-1">₹0 <span className="text-sm font-normal text-gray-300">/ forever</span></p>
          <ul className="text-sm text-gray-300 mt-4 mb-6 space-y-2 text-left">
            <li>✓ Basic resume templates</li>
            <li>✓ 1 downloadable resume</li>
            <li>✓ Limited customization</li>
            <li>✓ Export as PDF</li>
          </ul>
          <button className="mt-auto w-full bg-[#7c1c2b] hover:bg-[#661321] text-white py-2 rounded-md font-medium">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#2c2b2a] border-2 border-[#7c1c2b] rounded-xl shadow-md p-6 flex flex-col items-center relative">
          <div className="absolute -top-4 bg-[#7c1c2b] text-white text-xs px-3 py-1 rounded-full font-semibold">Most Popular</div>
          <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
          <p className="text-3xl font-bold text-white mb-1">₹299 <span className="text-sm font-normal text-gray-300">/ month</span></p>
          <ul className="text-sm text-gray-300 mt-4 mb-6 space-y-2 text-left">
            <li>✓ All templates</li>
            <li>✓ Unlimited resumes</li>
            <li>✓ Advanced customization</li>
            <li>✓ Export as PDF, DOCX, TXT</li>
            <li>✓ Cover letter builder</li>
            <li>✓ Interview preparation</li>
          </ul>
          <button className="mt-auto w-full bg-[#7c1c2b] hover:bg-[#661321] text-white py-2 rounded-md font-medium">
            Get Pro
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-[#2c2b2a] border border-[#7c1c2b] rounded-xl shadow-sm p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
          <p className="text-3xl font-bold text-white mb-1">₹699 <span className="text-sm font-normal text-gray-300">/ month</span></p>
          <ul className="text-sm text-gray-300 mt-4 mb-6 space-y-2 text-left">
            <li>✓ All Pro features</li>
            <li>✓ Team management</li>
            <li>✓ Custom branding</li>
            <li>✓ Analytics</li>
            <li>✓ API access</li>
            <li>✓ Priority support</li>
          </ul>
          <button className="mt-auto w-full bg-[#7c1c2b] hover:bg-[#661321] text-white py-2 rounded-md font-medium">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
