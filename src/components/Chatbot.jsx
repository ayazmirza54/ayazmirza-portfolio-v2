import React, { useState, useEffect, useRef } from "react";
import Markdown from "react-markdown";
const FIRECRAWL_API_URL = "https://tools.firecrawl.dev/api/v1/chat/completions";
const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY // Replace with your real key

export default function Chatbot() {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef(null);

    // Handle Ctrl+K or Cmd+K to toggle chat
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch(FIRECRAWL_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${FIRECRAWL_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "firecrawl-www-ayazmirza54-in-1750309391662",
                    messages: newMessages.map(({ role, content }) => ({ role, content })),
                }),
            });

            const data = await response.json();
            const botReply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
            setMessages([...newMessages, { role: "assistant", content: botReply }]);
        } catch (err) {
            setMessages([...newMessages, { role: "assistant", content: "Error contacting the chatbot API." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="hidden sm:block">
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-neutral-800 text-white shadow-lg flex items-center justify-center text-3xl z-50"
                    aria-label="Chat to Ayaz"
                >
                    💬
                </button>
            )}

            {/* Popup Chat Window */}
            {isOpen && (
                <div className="fixed bottom-8 right-8 w-[450px] max-w-[90vw] bg-neutral-900 rounded-lg shadow-2xl z-50 flex flex-col border border-neutral-700">
                    {/* Header */}
                    <div className="bg-neutral-800 text-white px-4 py-3 flex items-center rounded-t-lg justify-between">
                        <span>Chat to this website</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white text-xl hover:text-red-400 transition"
                            aria-label="Close chat"
                        >
                            ✕
                        </button>
                    </div>
                    {/* Messages */}
                    <div className="flex-1 px-4 py-2 min-h-[200px] max-h-[300px] overflow-y-auto bg-neutral-800">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`my-2 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <span
                                    className={`px-3 py-2 rounded-lg max-w-[80%] break-words ${msg.role === "user"
                                        ? "bg-neutral-700 text-white"
                                        : "bg-neutral-600 text-white"
                                        }`}
                                >
                                  <Markdown>{msg.content}</Markdown> 
                                </span>
                            </div>
                        ))}
                        {loading && <div className="text-neutral-400">Bot is typing...</div>}
                    </div>
                    {/* Input */}
                    <form
                        onSubmit={sendMessage}
                        className="flex gap-2 px-3 py-3 border-t border-neutral-700 bg-neutral-900"
                    >
                        <input
                            type="text"
                            ref={inputRef}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-3 py-2 rounded-md border border-neutral-700 bg-neutral-800 text-white outline-none"
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className={`px-4 py-2 rounded-md ${loading || !input.trim()
                                ? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
                                : "bg-neutral-700 text-white hover:bg-neutral-600"
                                }`}
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
