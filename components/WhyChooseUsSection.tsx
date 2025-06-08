export default function WhyChooseUsSection() {
    const features = [
      {
        icon: '🧠',
        title: 'Specialized Templates',
        desc: 'Tailored for IIT, IIM, Developers, and Marketers.',
      },
      {
        icon: '🤖',
        title: 'AI-Powered Interview Prep',
        desc: 'Based on your resume and job description.',
      },
      {
        icon: '✅',
        title: 'ATS-Friendly',
        desc: 'Optimized to pass Applicant Tracking Systems.',
      },
    ];
  
    return (
      <section className="px-6 py-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-10">Why Choose Our Resume Builder?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow">
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feat.title}</h4>
              <p className="text-gray-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  