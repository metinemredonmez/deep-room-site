"use client";

import Link from "next/link";
import { useState } from "react";

const capabilities = [
  { icon: "🔍", title: "Object Detection", desc: "Identify and locate objects in images" },
  { icon: "📷", title: "Image Classification", desc: "Categorize images into classes" },
  { icon: "✂️", title: "Segmentation", desc: "Pixel-level object separation" },
  { icon: "📝", title: "OCR", desc: "Extract text from images" },
  { icon: "🎨", title: "Style Transfer", desc: "Apply artistic styles" },
  { icon: "🔧", title: "Enhancement", desc: "Upscale and restore images" },
];

export default function ImageProcessingPage() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">Demos</Link>
          <span>/</span>
          <span className="text-white">Image Processing</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
              <span className="text-lg">🖼️</span>
              <span className="text-xs text-gray-300">Computer Vision</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Image <span className="gradient-text">Processing</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Advanced computer vision capabilities for object detection, classification,
              OCR, and image enhancement. Powered by state-of-the-art models.
            </p>
          </div>

          {/* Upload Box */}
          <div
            className={`glass rounded-2xl p-6 border-2 border-dashed transition-colors ${
              dragActive ? "border-primary bg-primary/10" : "border-white/10"
            }`}
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => setDragActive(false)}
          >
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📤</div>
              <h3 className="text-lg font-bold mb-2">Upload Image</h3>
              <p className="text-gray-400 text-sm mb-4">
                Drag & drop or click to select
              </p>
              <button className="btn-primary text-sm">
                Select File
              </button>
              <p className="text-gray-500 text-xs mt-4">
                Supports: JPG, PNG, WebP (max 10MB)
              </p>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            <span className="gradient-text">Capabilities</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.title} className="glass rounded-xl p-5 hover:bg-white/5 transition-colors">
                <div className="text-3xl mb-3">{cap.icon}</div>
                <h3 className="font-bold mb-1">{cap.title}</h3>
                <p className="text-gray-400 text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* API Example */}
        <div className="glass rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">API <span className="gradient-text">Example</span></h2>
          <div className="bg-dark-100 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300">
{`const response = await fetch('https://api.deeproomai.com/v1/vision/analyze', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
  body: formData // FormData with image file
});

const { objects, labels, text } = await response.json();`}
            </pre>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos/text-to-speech" className="btn-secondary">← Text to Speech</Link>
          <Link href="/demos/emotional-ai" className="btn-primary">Emotional AI →</Link>
        </div>
      </div>
    </div>
  );
}
