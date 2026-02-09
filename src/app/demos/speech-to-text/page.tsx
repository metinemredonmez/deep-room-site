"use client";

import Link from "next/link";
import { useState } from "react";

const features = [
  { icon: "🎯", title: "High Accuracy", desc: "State-of-the-art Whisper model" },
  { icon: "🌍", title: "100+ Languages", desc: "Multilingual transcription" },
  { icon: "⚡", title: "Real-time", desc: "Live streaming support" },
  { icon: "📝", title: "Timestamps", desc: "Word-level timing" },
];

const useCases = [
  "Meeting transcription",
  "Voice assistants",
  "Subtitle generation",
  "Call center analytics",
  "Medical dictation",
  "Podcast transcription",
];

export default function SpeechToTextPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">
            Demos
          </Link>
          <span>/</span>
          <span className="text-white">Speech to Text</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
              <span className="text-lg">🎤</span>
              <span className="text-xs text-gray-300">Voice AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Speech to <span className="gradient-text">Text</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Convert spoken words into accurate text with our Whisper-powered
              speech recognition. Support for 100+ languages with real-time
              transcription capabilities.
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
            <div className="bg-dark-100 rounded-xl p-4 min-h-[200px] mb-4">
              {transcript ? (
                <p className="text-gray-300">{transcript}</p>
              ) : (
                <p className="text-gray-500 text-sm">
                  Click the microphone button and start speaking...
                </p>
              )}
            </div>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  setIsRecording(!isRecording);
                  if (!isRecording) {
                    setTranscript("This is a demo. In production, your speech would be transcribed here in real-time using Whisper API...");
                  }
                }}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isRecording
                    ? "bg-red-500 animate-pulse"
                    : "bg-primary hover:bg-primary/80"
                }`}
              >
                <span className="text-2xl">{isRecording ? "⏹️" : "🎤"}</span>
              </button>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              {isRecording ? "Recording... Click to stop" : "Click to start recording"}
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="glass rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Use <span className="gradient-text">Cases</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {useCases.map((uc) => (
              <div key={uc} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-gray-300">{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* API Example */}
        <div className="glass rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">
            API <span className="gradient-text">Integration</span>
          </h2>
          <div className="bg-dark-100 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300">
{`const response = await fetch('https://api.deeproomai.com/v1/speech-to-text', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'audio/wav'
  },
  body: audioBlob
});

const { text, language, confidence } = await response.json();`}
            </pre>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos" className="btn-secondary">
            ← All Demos
          </Link>
          <Link href="/demos/text-to-speech" className="btn-primary">
            Text to Speech →
          </Link>
        </div>
      </div>
    </div>
  );
}
