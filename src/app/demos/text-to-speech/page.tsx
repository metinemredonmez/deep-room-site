"use client";

import Link from "next/link";
import { useState } from "react";

const voices = [
  { id: "alloy", name: "Alloy", desc: "Neutral, balanced" },
  { id: "echo", name: "Echo", desc: "Male, warm" },
  { id: "fable", name: "Fable", desc: "Female, expressive" },
  { id: "onyx", name: "Onyx", desc: "Male, deep" },
  { id: "nova", name: "Nova", desc: "Female, friendly" },
  { id: "shimmer", name: "Shimmer", desc: "Female, clear" },
];

const features = [
  { icon: "🗣️", title: "Natural Voices", desc: "Human-like speech synthesis" },
  { icon: "🌐", title: "50+ Languages", desc: "Global language support" },
  { icon: "🎭", title: "Voice Cloning", desc: "Custom voice creation" },
  { icon: "⚡", title: "Low Latency", desc: "Real-time generation" },
];

export default function TextToSpeechPage() {
  const [text, setText] = useState("Hello! Welcome to Deep Room AI. This is a demonstration of our text-to-speech capabilities.");
  const [selectedVoice, setSelectedVoice] = useState("alloy");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">
            Demos
          </Link>
          <span>/</span>
          <span className="text-white">Text to Speech</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
              <span className="text-lg">🔊</span>
              <span className="text-xs text-gray-300">Voice AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Text to <span className="gradient-text">Speech</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Transform text into natural-sounding speech with multiple voice options.
              Perfect for accessibility, content creation, and voice applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm">
                  <span>{f.icon}</span>
                  <span>{f.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Box */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Try it now</h3>

            {/* Text Input */}
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-dark-100 rounded-xl p-4 min-h-[120px] mb-4 text-sm text-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter text to convert to speech..."
            />

            {/* Voice Selection */}
            <div className="mb-4">
              <label className="text-sm text-gray-400 mb-2 block">Select Voice</label>
              <div className="grid grid-cols-3 gap-2">
                {voices.map((voice) => (
                  <button
                    key={voice.id}
                    onClick={() => setSelectedVoice(voice.id)}
                    className={`p-2 rounded-lg text-xs text-center transition-all ${
                      selectedVoice === voice.id
                        ? "bg-primary text-white"
                        : "bg-dark-100 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    <div className="font-medium">{voice.name}</div>
                    <div className="text-[10px] opacity-70">{voice.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={() => {
                setIsPlaying(!isPlaying);
                setTimeout(() => setIsPlaying(false), 3000);
              }}
              className={`w-full py-3 rounded-xl font-medium transition-all ${
                isPlaying
                  ? "bg-red-500 text-white"
                  : "bg-primary text-white hover:bg-primary/80"
              }`}
            >
              {isPlaying ? "⏹️ Playing..." : "▶️ Generate Speech"}
            </button>
            <p className="text-center text-gray-500 text-xs mt-3">
              Demo mode - In production, audio would be generated via API
            </p>
          </div>
        </div>

        {/* API Example */}
        <div className="glass rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">
            API <span className="gradient-text">Integration</span>
          </h2>
          <div className="bg-dark-100 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300">
{`const response = await fetch('https://api.deeproomai.com/v1/text-to-speech', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: "Your text here",
    voice: "nova",
    language: "en"
  })
});

const audioBlob = await response.blob();`}
            </pre>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos/speech-to-text" className="btn-secondary">
            ← Speech to Text
          </Link>
          <Link href="/demos/image-processing" className="btn-primary">
            Image Processing →
          </Link>
        </div>
      </div>
    </div>
  );
}
