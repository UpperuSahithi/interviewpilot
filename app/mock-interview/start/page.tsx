'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InterviewSessionPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes per question
  const [isAnswered, setIsAnswered] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      text: 'Tell me about yourself and your professional background.',
      type: 'behavioral',
      timeLimit: 300,
    },
    {
      id: 2,
      text: 'What are your strengths and how do they relate to this role?',
      type: 'behavioral',
      timeLimit: 300,
    },
    {
      id: 3,
      text: 'Describe a challenging project you worked on. How did you handle it?',
      type: 'behavioral',
      timeLimit: 300,
    },
  ];

  // Timer effect
  useEffect(() => {
    if (timeLeft === 0 || isAnswered) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsAnswered(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmitAnswer = () => {
    // Calculate score based on response length (mock scoring)
    const responseScore = Math.min(100, Math.floor((userResponse.length / 200) * 100));
    setScore(prev => prev + responseScore);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setSessionComplete(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
      setUserResponse('');
      setTimeLeft(questions[currentQuestion + 1].timeLimit);
      setIsAnswered(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setUserResponse('');
      setTimeLeft(questions[currentQuestion - 1].timeLimit);
      setIsAnswered(false);
    }
  };

  if (sessionComplete) {
    const finalScore = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <div className="text-6xl font-bold text-blue-600 mb-4">{finalScore}%</div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Interview Complete!</h1>
          <p className="text-gray-600 mb-6">Great effort! Here&apos;s your performance summary.</p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-bold text-foreground mb-4">Performance Breakdown</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Communication</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="font-medium text-gray-900 w-12 text-right">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Technical Knowledge</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
                <span className="font-medium text-gray-900 w-12 text-right">72%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Problem Solving</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <span className="font-medium text-gray-900 w-12 text-right">78%</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200">
              View Detailed Feedback
            </button>
            <Link
              href="/mock-interview"
              className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 rounded-lg transition-colors duration-200 text-center"
            >
              Back to Interviews
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const timeWarning = timeLeft < 60;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Bar */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className={`text-sm font-medium ${timeWarning ? 'text-red-600' : 'text-gray-600'}`}>
            Time: {formatTime(timeLeft)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">{question.text}</h2>
        <p className="text-sm text-gray-600 mb-6">
          Type your response below. You have {formatTime(timeLeft)} remaining.
        </p>

        {/* Response Input */}
        <textarea
          value={userResponse}
          onChange={(e) => setUserResponse(e.target.value)}
          disabled={isAnswered}
          placeholder="Share your thoughts here... (minimum 50 characters recommended)"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600 resize-none"
          rows={6}
        />

        {/* Response Stats */}
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xs text-gray-600">
            {userResponse.length} characters
          </span>
          <span className={`text-xs font-medium ${userResponse.length >= 50 ? 'text-green-600' : 'text-gray-600'}`}>
            {userResponse.length >= 50 ? '✓ Ready to submit' : 'Keep typing...'}
          </span>
        </div>
      </div>

      {/* Feedback Section (shown after submission) */}
      {isAnswered && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">AI Feedback</h3>
          <p className="text-sm text-gray-700 mb-4">
            Good response! You covered the main points well. Try to include more specific examples next time to make your answer more compelling.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💡</span>
            <p className="text-sm text-gray-700">
              <strong>Tip:</strong> Use the STAR method (Situation, Task, Action, Result) for better storytelling.
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Previous
        </button>

        <div className="flex gap-3">
          {!isAnswered && userResponse.length >= 50 && (
            <button
              onClick={handleSubmitAnswer}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Submit Answer
            </button>
          )}
          {isAnswered && (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
