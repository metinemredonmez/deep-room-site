"use client";

import Link from "next/link";
import { useState } from "react";

const emotions = [
  { emoji: "😊", name: "Joy", value: 0 },
  { emoji: "😢", name: "Sadness", value: 0 },
  { emoji: "😠", name: "Anger", value: 0 },
  { emoji: "😨", name: "Fear", value: 0 },
  { emoji: "😲", name: "Surprise", value: 0 },
  { emoji: "🤢", name: "Disgust", value: 0 },
];

const useCases = [
  "Customer feedback analysis",
  "Social media monitoring",
  "Mental health applications",
  "Content moderation",
  "Market research",
  "HR & recruitment",
];

export default function EmotionalAIPage() {
  const [text, setText] = useState("");
  const [results, setResults] = useState<typeof emotions | null>(null);

  const analyze = () => {
    setResults([
      { emoji: "😊", name: "Joy", value: 75 },
      { emoji: "😢", name: "Sadness", value: 5 },
      { emoji: "😠", name: "Anger", value: 3 },
      { emoji: "😨", name: "Fear", value: 2 },
      { emoji: "😲", name: "Surprise", value: 10 },
      { emoji: "🤢", name: "Disgust", value: 5 },
    ]);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">Demos</Link>
          <span>/</span>
          <span className="text-white">Emotional AI</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
              <span className="text-lg">💬</span>
              <span className="text-xs text-gray-300">NLP</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Emotional <span className="gradient-text">AI</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Detect emotions and sentiment in text with high accuracy. Understand
              the emotional tone of customer feedback, social media, and more.
            </p>
          </div>

          {/* Demo Box */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Analyze Text</h3>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-dark-100 rounded-xl p-4 min-h-[100px] mb-4 text-sm text-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter text to analyze emotions..."
            />
            <button onClick={analyze} className="w-full btn-primary mb-4">
              Analyze Emotions
            </button>

            {results && (
              <div className="space-y-2">
                {results.map((e) => (
                  <div key={e.name} className="flex items-center gap-3">
                    <span className="text-xl w-8">{e.emoji}</span>
                    <span className="text-sm w-20">{e.name}</span>
                    <div className="flex-1 bg-dark-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all"
                        style={{ width: `${e.value}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-12">{e.value}%</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Use Cases */}
        <div className="glass rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Use <span className="gradient-text">Cases</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {useCases.map((uc) => (
              <div key={uc} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-gray-300">{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos/image-processing" className="btn-secondary">← Image Processing</Link>
          <Link href="/demos/factory-systems" className="btn-primary">Factory Systems →</Link>
        </div>
      </div>
    </div>
  );
}
