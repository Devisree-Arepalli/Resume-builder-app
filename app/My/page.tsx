// app/resumes/page.tsx
export default function ResumesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">My Resumes:</h1>

      <table className="w-full max-w-md text-left">
        <thead>
          <tr>
            <th className="pb-2 text-gray-700">Resume Name</th>
            <th className="pb-2 text-gray-700">Date</th>
          </tr>
        </thead>
        <tbody>
          {/* No data rows */}
          <tr>
            <td colSpan={2} className="py-4 text-center text-gray-500 italic">
              No data found
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
