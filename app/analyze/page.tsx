'use client';
import '../globals.css'; // <- relative path to the CSS file
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Sidebar from '@/components/Sidebar-Res';

export default function AnalyzePage() {
  const [file, setFile] = useState<File | null>(null);
  const [role, setRole] = useState('');
  const [importing, setImporting] = useState(false);
  const router = useRouter();

  const handleImportClick = () => {
    document.getElementById('resume-upload')?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files?.[0];
    if (uploaded) {
      setFile(uploaded);
      setImporting(false);
    }
  };

  const handleAnalyze = () => {
    if (!file || !role) {
      alert('Please upload a resume and enter a role');
      return;
    }

    // 🚀 Immediately navigate to another file (page)
    router.push('./PreviewPanel');
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
    
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">Resume Analyzer</h1>

        {/* Hidden File Input */}
        <input
          type="file"
          id="resume-upload"
          accept="application/pdf"
          onChange={handleFileChange}
          hidden
        />

        <div className="flex flex-col space-y-2">
          <Label>Resume</Label>
          <Button
            variant="outline"
            onClick={() => {
              setImporting(true);
              setTimeout(handleImportClick, 300);
            }}
            disabled={importing}
          >
            {importing ? 'Importing...' : file ? 'Resume Imported ✔️' : 'Import Resume'}
          </Button>
        </div>

        <div className="flex flex-col space-y-2">
          <Label>Desired Job Role</Label>
          <Input
            type="text"
            placeholder="e.g. Frontend Developer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="pt-4">
         <Button
  className="w-full customb"
  onClick={handleAnalyze}
>

            Analyze
          </Button>
        </div>
      </div>
    </main>
  );
}
