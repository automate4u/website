'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, sendMessage, status, stop } = useChat();

    const [input, setInput] = useState('');
    const isLoading = status === 'streaming' || status === 'submitted';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;
        const message = input;
        setInput('');
        await sendMessage({ text: message });
    };

    const append = async (message: { role: string; content: string }) => {
        await sendMessage({ text: message.content });
    };
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            <div
                className={`bg-white w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 origin-bottom-right pointer-events-auto mb-4 ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none hidden'
                    }`}
            >
                {/* Header */}
                <div className="bg-emerald-600 p-4 rounded-t-2xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Automate4U Assistant</h3>
                            <p className="text-emerald-100 text-xs flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={toggleChat}
                        className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                        aria-label="Close chat"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                    {messages.length === 0 && (
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center my-8 mx-2">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Bot className="w-6 h-6 text-emerald-600" />
                            </div>
                            <p className="text-base text-gray-800 font-medium mb-1">Hi there! 👋</p>
                            <p className="text-sm text-gray-500">I can help with questions about our services or automation strategy. Try asking:</p>
                            <div className="mt-4 grid gap-2">
                                <button
                                    onClick={() => append({ role: 'user', content: "What industries do you automate?" })}
                                    className="text-xs bg-emerald-50 text-emerald-700 py-2 px-3 rounded-lg hover:bg-emerald-100 transition-colors text-left"
                                >
                                    "What industries do you automate?"
                                </button>
                                <button
                                    onClick={() => append({ role: 'user', content: "How does your pricing work?" })}
                                    className="text-xs bg-emerald-50 text-emerald-700 py-2 px-3 rounded-lg hover:bg-emerald-100 transition-colors text-left"
                                >
                                    "How does your pricing work?"
                                </button>
                            </div>
                        </div>
                    )}

                    {messages.map((m: any) => (
                        <div
                            key={m.id}
                            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${m.role === 'user'
                                    ? 'bg-emerald-600 text-white rounded-br-none'
                                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                    }`}
                            >
                                {/* Minimal markdown-like formatting for lists (optional, keeping it simple for now) */}
                                <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
                            </div>
                        </div>
                    ))}
                    {/* Invisible element to scroll to */}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 rounded-b-2xl">
                    <div className="relative flex items-center">
                        <input
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-gray-400"
                            value={input || ''}
                            onChange={handleInputChange}
                            placeholder="Ask a question..."
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !(input || '').trim()}
                            className="absolute right-2 p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                            aria-label="Send message"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-[10px] text-gray-400">AI can make mistakes. Contact our team for precise info.</p>
                    </div>
                </form>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform pointer-events-auto flex items-center justify-center group ${isOpen ? 'rotate-90 scale-0' : 'scale-100 rotate-0'
                    }`}
                aria-label="Open chat"
            >
                <MessageCircle className="w-7 h-7" />
                {/* Tooltip / Label */}
                <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
                    Chat with us
                </span>
            </button>

            {/* Re-open button when chat is open (invisible visually but handles the close transition logic if needed, 
          though the X in the header handles closing. The main button disappears when open.) 
          Actually, let's keep it simple: Main button hides, new Close button is in header.
      */}
        </div>
    );
}
