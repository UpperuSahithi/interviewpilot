'use client';

import { useState, useRef, useEffect } from 'react';

const suggestedPrompts = [
  { text: 'Review my resume', icon: '📄' },
  { text: 'Generate interview questions', icon: '❓' },
  { text: 'Explain Dynamic Programming', icon: '🧠' },
  { text: 'Create today\'s study plan', icon: '📅' },
];

const mockConversations = [
  {
    id: 1,
    role: 'user',
    content: 'How do I improve my system design skills?',
  },
  {
    id: 2,
    role: 'assistant',
    content: 'Great question! Here are the key steps to improve your system design skills:\n\n1. **Learn Fundamentals**\n   - Study scalability concepts (load balancing, caching, database replication)\n   - Understand CAP theorem and trade-offs\n   - Learn about microservices and monolithic architecture\n\n2. **Practice & Design**\n   - Start with simple systems (URL shortener, chat system)\n   - Gradually tackle complex ones (Netflix, Instagram)\n   - Practice drawing diagrams and explaining trade-offs\n\n3. **Study Real Systems**\n   - Read engineering blogs from companies\n   - Analyze production architectures\n   - Watch architecture case studies\n\n4. **Mock Interviews**\n   - Practice explaining your designs under pressure\n   - Get feedback on trade-offs\n   - Time yourself to 45 minutes\n\nWould you like me to generate a specific system design interview question for you?',
  },
  {
    id: 3,
    role: 'user',
    content: 'Yes please, something medium difficulty',
  },
  {
    id: 4,
    role: 'assistant',
    content: 'Perfect! Here\'s a medium difficulty system design problem:\n\n**Design a Ride-Sharing Service (like Uber)**\n\nRequirements:\n- Users can request rides\n- Drivers can accept ride requests\n- Real-time location tracking\n- Support for 1 million concurrent users\n- Minimize wait time\n\nKey Considerations:\n- How will you match drivers with passengers?\n- How do you handle surge pricing?\n- How will you scale geographically?\n- What happens if a driver goes offline?\n\nTake 20 minutes to think about this and structure your answer. You can draw a diagram if it helps!\n\nWhen you\'re ready, tell me your approach and I\'ll provide feedback.',
  },
];

export default function AiCoachPage() {
  const [messages, setMessages] = useState(mockConversations);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: 'user' as const,
      content: messageText,
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
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
    <div className="h-full flex flex-col bg-card-bg rounded-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 border-b border-blue-700">
        <h1 className="text-2xl font-bold">AI Career Coach</h1>
        <p className="text-blue-100 text-sm mt-1">Your personal AI mentor for interview preparation</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
            <div className="text-6xl">🤖</div>
            <h2 className="text-2xl font-bold text-foreground">What can I help you with?</h2>
            <p className="text-gray-600 max-w-md">
              I&apos;m your AI Career Coach. Ask me anything about interview preparation, coding, system design, or career advice.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map(message => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-2xl rounded-lg px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-muted-light text-foreground border border-border'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted-light text-foreground border border-border rounded-lg px-4 py-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Suggested Prompts (show when no messages) */}
      {messages.length === 0 && (
        <div className="px-6 py-4 border-t border-border">
          <p className="text-sm font-semibold text-gray-600 mb-3">Try asking about:</p>
          <div className="grid grid-cols-2 gap-2">
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt.text)}
                className="text-left p-3 bg-muted-light hover:bg-gray-300 rounded-lg border border-border transition-colors text-sm"
              >
                <span className="text-lg mr-2">{prompt.icon}</span>
                {prompt.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t border-border p-4 bg-background">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Ask me anything... (Shift+Enter for new line)"
            className="flex-1 px-4 py-2 bg-card-bg border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isLoading || !inputValue.trim()}
            className="px-6 py-2 bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          💡 Tip: Ask specific questions for detailed answers. Use shift+enter for multi-line input.
        </p>
      </div>
    </div>
  );
}
