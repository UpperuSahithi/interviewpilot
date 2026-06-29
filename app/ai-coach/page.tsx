'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Send,
  FileText,
  HelpCircle,
  Brain,
  Calendar,
  Sparkles,
  MessageSquare,
  Zap,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fieldStyles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { PageAtmosphere } from '@/components/premium/page-atmosphere';
import { GlassCard } from '@/components/premium/glass-card';

const suggestedPrompts = [
  { text: 'Review my resume', icon: FileText },
  { text: 'Generate interview questions', icon: HelpCircle },
  { text: 'Explain Dynamic Programming', icon: Brain },
  { text: "Create today's study plan", icon: Calendar },
];

const mockConversations = [
  { id: 1, role: 'user' as const, content: 'How do I improve my system design skills?' },
  {
    id: 2,
    role: 'assistant' as const,
    content: 'Great question! Here are the key steps to improve your system design skills:\n\n1. **Learn Fundamentals**\n   - Study scalability concepts (load balancing, caching, database replication)\n   - Understand CAP theorem and trade-offs\n   - Learn about microservices and monolithic architecture\n\n2. **Practice & Design**\n   - Start with simple systems (URL shortener, chat system)\n   - Gradually tackle complex ones (Netflix, Instagram)\n   - Practice drawing diagrams and explaining trade-offs\n\n3. **Study Real Systems**\n   - Read engineering blogs from companies\n   - Analyze production architectures\n   - Watch architecture case studies\n\n4. **Mock Interviews**\n   - Practice explaining your designs under pressure\n   - Get feedback on trade-offs\n   - Time yourself to 45 minutes\n\nWould you like me to generate a specific system design interview question for you?',
  },
  { id: 3, role: 'user' as const, content: 'Yes please, something medium difficulty' },
  {
    id: 4,
    role: 'assistant' as const,
    content: "Perfect! Here's a medium difficulty system design problem:\n\n**Design a Ride-Sharing Service (like Uber)**\n\nRequirements:\n- Users can request rides\n- Drivers can accept ride requests\n- Real-time location tracking\n- Support for 1 million concurrent users\n- Minimize wait time\n\nKey Considerations:\n- How will you match drivers with passengers?\n- How do you handle surge pricing?\n- How will you scale geographically?\n- What happens if a driver goes offline?\n\nTake 20 minutes to think about this and structure your answer. You can draw a diagram if it helps!\n\nWhen you're ready, tell me your approach and I'll provide feedback.",
  },
];

const floatingIcons = [
  { Icon: Brain, className: 'top-6 left-8' },
  { Icon: Lightbulb, className: 'top-4 right-12' },
  { Icon: MessageSquare, className: 'bottom-12 left-16' },
  { Icon: Sparkles, className: 'bottom-8 right-8' },
];

export default function AiCoachPage() {
  const [messages, setMessages] = useState(mockConversations);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage = { id: messages.length + 1, role: 'user' as const, content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        role: 'assistant' as const,
        content: `I understand you asked about "${messageText}". This is a great question!\n\nHere are some thoughts:\n\n1. **First Point** - Consider this aspect carefully\n2. **Second Point** - This is also important\n3. **Third Point** - Don't forget about this\n\nWould you like me to dive deeper into any of these areas?`,
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-8">
      <PageAtmosphere />

      <div className="relative max-w-7xl mx-auto space-y-10 md:space-y-12">
        {/* Hero - compact when chat has messages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-2 md:pt-4"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">AI Career Coach</p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
              Your Personal{' '}
              <span className="brand-gradient-text">AI Mentor</span>
            </h1>
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-lg">
              Get instant guidance on interview prep, coding, system design, resume reviews, and career strategy.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Zap, text: 'Instant Answers' },
                { icon: Sparkles, text: 'Personalized' },
              ].map((b) => (
                <GlassCard key={b.text} className="px-3 py-1.5 flex items-center gap-2 text-xs font-medium">
                  <b.icon className="w-3.5 h-3.5 text-primary" aria-hidden />
                  {b.text}
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="relative h-[180px] hidden lg:block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-border/40" />
            {floatingIcons.map(({ Icon, className }, i) => (
              <motion.div
                key={i}
                className={cn('absolute', className)}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl glass border border-border/50 shadow-sm">
                  <Icon className="w-5 h-5 text-primary" aria-hidden />
                </div>
              </motion.div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl brand-gradient shadow-lg">
                <Bot className="w-8 h-8 text-white" aria-hidden />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Chat interface */}
        <GlassCard className="flex flex-col h-[calc(100dvh-14rem)] sm:h-[calc(100dvh-16rem)] overflow-hidden !p-0">
          {/* Chat header */}
          <div className="relative px-5 py-4 border-b border-border/60 shrink-0">
            <div className="absolute inset-0 bg-primary/5" aria-hidden />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient shadow-sm shrink-0">
                <Bot className="h-5 w-5 text-white" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-semibold text-foreground">AI Career Coach</h2>
                <p className="text-xs text-muted truncate">Always here to help</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" aria-hidden />
                <span className="text-xs text-muted">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4" role="log" aria-live="polite" aria-label="Chat messages">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-4">
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-light border border-border"
                >
                  <Bot className="h-10 w-10 text-primary" aria-hidden />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What can I help you with?</h3>
                  <p className="text-muted text-sm max-w-sm mx-auto">
                    Ask me anything about interview preparation, coding, system design, or career advice.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message, i) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i > messages.length - 2 ? 0.1 : 0 }}
                    className={cn('flex gap-2.5', message.role === 'user' ? 'justify-end' : 'justify-start')}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl brand-gradient mt-0.5" aria-hidden>
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div
                      className={cn(
                        'max-w-[85%] sm:max-w-2xl rounded-2xl px-4 py-3 text-sm leading-relaxed',
                        message.role === 'user'
                          ? 'brand-gradient text-white shadow-sm'
                          : 'bg-muted-light/60 text-foreground border border-border/60 backdrop-blur-sm'
                      )}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl brand-gradient" aria-hidden>
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-muted-light/60 border border-border/60 rounded-2xl px-5 py-3 backdrop-blur-sm" aria-label="AI is typing">
                      <div className="flex gap-1.5 items-center">
                        <div className="w-1.5 h-1.5 bg-muted rounded-full typing-dot" />
                        <div className="w-1.5 h-1.5 bg-muted rounded-full typing-dot" />
                        <div className="w-1.5 h-1.5 bg-muted rounded-full typing-dot" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Suggested prompts */}
          {messages.length === 0 && (
            <div className="px-4 sm:px-6 py-4 border-t border-border/60 shrink-0">
              <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-3">Suggested prompts</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {suggestedPrompts.map((prompt) => {
                  const Icon = prompt.icon;
                  return (
                    <motion.button
                      key={prompt.text}
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSendMessage(prompt.text)}
                      className="flex items-center gap-2.5 text-left p-3.5 rounded-2xl bg-muted-light/40 hover:bg-muted-light/70 border border-border/50 hover:border-primary/30 transition-colors text-sm focus-ring"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                        <Icon className="w-4 h-4 text-primary" aria-hidden />
                      </div>
                      <span className="text-foreground">{prompt.text}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border/60 p-4 sm:p-5 shrink-0 bg-background/50 backdrop-blur-md">
            <form className="flex gap-2 max-w-4xl mx-auto" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about your career..."
                className={cn('flex-1', fieldStyles)}
                disabled={isLoading}
                aria-label="Message input"
              />
              <Button type="submit" disabled={isLoading || !inputValue.trim()} icon={<Send className="w-4 h-4" />}>
                Send
              </Button>
            </form>
            <p className="text-xs text-muted text-center mt-2">Press Enter to send · Shift+Enter for new line</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
