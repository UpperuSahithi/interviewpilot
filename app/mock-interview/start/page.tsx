'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lightbulb, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/input';
import { pageStack, fieldStyles } from '@/lib/styles';
import { cn } from '@/lib/utils';

export default function InterviewSessionPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [timeLeft, setTimeLeft] = useState(300);
  const [isAnswered, setIsAnswered] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    { id: 1, text: 'Tell me about yourself and your professional background.', type: 'behavioral', timeLimit: 300 },
    { id: 2, text: 'What are your strengths and how do they relate to this role?', type: 'behavioral', timeLimit: 300 },
    { id: 3, text: 'Describe a challenging project you worked on. How did you handle it?', type: 'behavioral', timeLimit: 300 },
  ];

  useEffect(() => {
    if (timeLeft === 0 || isAnswered) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { setIsAnswered(true); return 0; }
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
    setScore(prev => prev + Math.min(100, Math.floor((userResponse.length / 200) * 100)));
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
    const breakdown = [
      { label: 'Communication', value: 85 },
      { label: 'Technical Knowledge', value: 72 },
      { label: 'Problem Solving', value: 78 },
    ];

    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <Card padding="lg" className="text-center">
          <div className="text-6xl font-semibold gradient-text mb-4 tabular-nums">{finalScore}%</div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-2">Interview Complete!</h1>
          <p className="text-muted text-sm mb-8">Great effort! Here&apos;s your performance summary.</p>
          <div className="rounded-xl bg-muted-light/50 p-5 mb-8 text-left space-y-4">
            <h2 className="font-medium text-foreground text-sm">Performance Breakdown</h2>
            {breakdown.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm gap-4">
                  <span className="text-muted">{item.label}</span>
                  <span className="font-medium text-foreground tabular-nums">{item.value}%</span>
                </div>
                <ProgressBar value={item.value} size="sm" />
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Button type="button" className="w-full">View Detailed Feedback</Button>
            <Link href="/mock-interview">
              <Button type="button" variant="outline" className="w-full">Back to Interviews</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const timeWarning = timeLeft < 60;

  return (
    <div className={cn(pageStack, 'max-w-4xl mx-auto animate-fade-in')}>
      <div>
        <div className="flex justify-between items-center mb-3 gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-muted">Question {currentQuestion + 1} of {questions.length}</span>
            <Badge variant="outline">{question.type}</Badge>
          </div>
          <span className={cn('text-sm font-mono font-medium px-2.5 py-1 rounded-lg tabular-nums shrink-0', timeWarning ? 'bg-danger-light text-danger' : 'bg-muted-light text-muted')}>
            {formatTime(timeLeft)}
          </span>
        </div>
        <ProgressBar value={progress} />
      </div>

      <Card padding="lg">
        <h2 className="text-lg font-semibold tracking-tight text-foreground mb-2">{question.text}</h2>
        <p className="text-sm text-muted mb-5">Type your response below. You have {formatTime(timeLeft)} remaining.</p>
        <Textarea
          value={userResponse}
          onChange={(e) => setUserResponse(e.target.value)}
          disabled={isAnswered}
          placeholder="Share your thoughts here... (minimum 50 characters recommended)"
          rows={6}
        />
        <div className="mt-3 flex justify-between items-center text-xs">
          <span className="text-muted tabular-nums">{userResponse.length} characters</span>
          <span className={cn('font-medium flex items-center gap-1', userResponse.length >= 50 ? 'text-success' : 'text-muted')}>
            {userResponse.length >= 50 && <CheckCircle2 className="w-3 h-3" aria-hidden />}
            {userResponse.length >= 50 ? 'Ready to submit' : 'Keep typing...'}
          </span>
        </div>
      </Card>

      {isAnswered && (
        <Card className="border-primary/20 bg-primary-light/30">
          <h3 className="font-medium text-foreground text-sm mb-2">AI Feedback</h3>
          <p className="text-sm text-muted mb-4 leading-relaxed">
            Good response! You covered the main points well. Try to include more specific examples next time to make your answer more compelling.
          </p>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-card border border-border">
            <Lightbulb className="w-4 h-4 text-warning shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground font-medium">Tip:</strong> Use the STAR method (Situation, Task, Action, Result) for better storytelling.
            </p>
          </div>
        </Card>
      )}

      <div className="flex gap-3 justify-between">
        <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</Button>
        <div className="flex gap-2">
          {!isAnswered && userResponse.length >= 50 && (
            <Button type="button" onClick={handleSubmitAnswer} className="!from-success !to-emerald-600">Submit Answer</Button>
          )}
          {isAnswered && (
            <Button type="button" onClick={handleNext}>
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
