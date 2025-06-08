export default function InterviewPrepSection() {
    const points = [
      'AI-generated questions tailored to your resume & job',
      'Suggested answers based on experience',
      'Covers technical & behavioral questions',
    ];
  
    return (
      <section className="px-6 py-16 text-center bg-white">
        <h3 className="text-3xl font-bold mb-6">Prepare for Your Interviews</h3>
        <ul className="list-disc list-inside max-w-xl mx-auto text-left text-gray-700 space-y-2">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </section>
    );
  }
  