import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    setMessages([...messages, "You: " + input]);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }]
      })
    });
    const data = await response.json();
    setMessages(prev => [...prev, "AI: " + data.choices[0].message.content]);
    setInput('');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Ask NickAI</h2>
      <div className="h-64 bg-white p-4 shadow rounded overflow-y-auto mb-4">
        {messages.map((msg, i) => <p key={i}>{msg}</p>)}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border p-2 rounded w-2/3"
      />
      <button onClick={handleSend} className="bg-green-600 text-white px-4 ml-2 rounded">Send</button>
    </div>
  );
}