'use client';

import { useState } from 'react';

export default function ResumeAnalyzerPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) return;
    
    setAnalyzing(true);
    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAnalyzing(false);
    setAnalysisComplete(true);
  };

  if (analysisComplete && uploadedFile) {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Resume Analysis</h1>
          <p className="text-gray-600">AI-powered insights to improve your resume</p>
        </div>

        {/* Overall Score */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-700 mb-2">Overall ATS Score</h2>
              <p className="text-gray-600 text-sm">How well your resume will be parsed by Applicant Tracking Systems</p>
            </div>
            <div className="text-6xl font-bold text-blue-600">82</div>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-3 mt-6">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '82%' }}></div>
          </div>
        </div>

        {/* Analysis Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✓</span>
              <h3 className="text-xl font-bold text-foreground">Strengths</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">Clear job titles and company names</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">Quantifiable achievements included</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">Good use of action verbs</span>
              </li>
            </ul>
          </div>

          {/* Areas for Improvement */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚠️</span>
              <h3 className="text-xl font-bold text-foreground">Areas for Improvement</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Add more metrics and percentages</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Include relevant keywords from job descriptions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Expand on technical skills section</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Recommendations */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Recommendations</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h4 className="font-bold text-foreground">Use Specific Metrics</h4>
              <p className="text-gray-600 text-sm mt-1">Replace vague descriptions with numbers. Instead of &quot;increased sales,&quot; write &quot;increased sales by 35% ($2M ARR)&quot;</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h4 className="font-bold text-foreground">Keyword Optimization</h4>
              <p className="text-gray-600 text-sm mt-1">Add keywords from your target job postings to improve ATS parsing and recruiter searches</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h4 className="font-bold text-foreground">Use Strong Action Verbs</h4>
              <p className="text-gray-600 text-sm mt-1">Replace weak verbs like &quot;responsible for&quot; with strong ones like &quot;led,&quot; &quot;built,&quot; or &quot;accelerated&quot;</p>
            </div>
          </div>
        </div>

        {/* Keywords Found */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Keywords Detected</h3>
          <div className="flex flex-wrap gap-2">
            {['Leadership', 'Project Management', 'Python', 'AWS', 'Data Analysis', 'Agile', 'Communication', 'Problem Solving'].map((keyword) => (
              <span key={keyword} className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
            Download Report (PDF)
          </button>
          <button
            onClick={() => {
              setAnalysisComplete(false);
              setUploadedFile(null);
            }}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-medium transition-colors duration-200"
          >
            Analyze Another Resume
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Resume Analyzer</h1>
        <p className="text-gray-600">Get AI-powered feedback to optimize your resume for ATS and recruiters</p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <span className="text-3xl mb-2 block">📊</span>
          <h3 className="font-bold text-foreground mb-1">ATS Score</h3>
          <p className="text-sm text-gray-600">See how well your resume will be parsed by Applicant Tracking Systems</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <span className="text-3xl mb-2 block">💡</span>
          <h3 className="font-bold text-foreground mb-1">Personalized Tips</h3>
          <p className="text-sm text-gray-600">Get specific recommendations to improve your resume</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <span className="text-3xl mb-2 block">🔍</span>
          <h3 className="font-bold text-foreground mb-1">Keyword Analysis</h3>
          <p className="text-sm text-gray-600">Find keywords that match your industry and job roles</p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <label
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`block cursor-pointer transition-all duration-200 ${
            dragActive
              ? 'bg-blue-50 border-2 border-blue-400'
              : 'bg-gray-50 border-2 border-dashed border-gray-300 hover:border-blue-400'
          }`}
        >
          <div className="p-12 text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33A3 3 0 0116.5 19.5H6.75z"
              />
            </svg>
            {uploadedFile ? (
              <div>
                <p className="text-lg font-medium text-foreground mb-2">{uploadedFile.name}</p>
                <p className="text-sm text-gray-600 mb-4">Ready to analyze</p>
              </div>
            ) : (
              <div>
                <p className="text-lg font-medium text-foreground mb-2">Drag and drop your resume here</p>
                <p className="text-sm text-gray-600">or click to browse files</p>
              </div>
            )}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </label>
      </div>

      {/* Analyze Button */}
      {uploadedFile && (
        <button
          onClick={handleAnalyze}
          disabled={analyzing}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 rounded-lg transition-colors duration-200"
        >
          {analyzing ? 'Analyzing your resume...' : 'Analyze Resume'}
        </button>
      )}
    </div>
  );
}
