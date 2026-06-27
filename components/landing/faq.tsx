'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How accurate is the AI feedback?',
    answer: 'Our AI is trained on thousands of real interviews and provides feedback similar to experienced interviewers. Users report 90%+ satisfaction with feedback quality.'
  },
  {
    id: 2,
    question: 'What types of interviews can I practice?',
    answer: 'We support interviews for software engineers, product managers, designers, data scientists, business analysts, and more. Each interview type is tailored to the specific role requirements.'
  },
  {
    id: 3,
    question: 'Is there a free trial?',
    answer: 'Yes! You can practice 3 mock interviews for free. No credit card required. Upgrade to unlock unlimited practice and premium features.'
  },
  {
    id: 4,
    question: 'Can I retake interviews?',
    answer: 'Absolutely! You can take as many interviews as you want. Practice the same type multiple times or explore new interview categories. Your progress is tracked automatically.'
  },
  {
    id: 5,
    question: 'How long does an interview take?',
    answer: 'Most interviews take 30-45 minutes. You can pause and resume at any time. Interviews are designed to simulate real interview experiences.'
  },
  {
    id: 6,
    question: 'Do you offer a refund?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you&apos;re not satisfied, just reach out to our support team for a full refund.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Find answers to common questions about InterviewPilot
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted-light transition-colors text-left"
              >
                <span className="font-semibold text-foreground text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-muted transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 py-4 border-t border-border bg-muted-light/50">
                  <p className="text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
