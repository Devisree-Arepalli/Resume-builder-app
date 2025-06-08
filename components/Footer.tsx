// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">IIT IIM Resume</h3>
          <p className="text-sm text-gray-400">
            Build world-class resumes tailored for IIT, IIM, and top-tier talent.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/templates" className="hover:text-white">Resume Templates</a></li>
            <li><a href="/interview-prep" className="hover:text-white">Interview Prep</a></li>
            <li><a href="/login" className="hover:text-white">Login</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Features</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>PDF Export</li>
            <li>Modern Templates</li>
            <li>Custom Sections</li>
            <li>Job-Specific Recommendations</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@iitiimresume.com</li>
            <li>Phone: +91-12345-67890</li>
            <li>LinkedIn: <a href="https://linkedin.com" className="hover:text-white">/iitiimresume</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IIT IIM Resume. All rights reserved.
      </div>
    </footer>
  );
}
