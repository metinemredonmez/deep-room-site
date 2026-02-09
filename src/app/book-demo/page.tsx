"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const demoTypes = [
  {
    id: "voice-ai",
    name: "Voice AI (STT/TTS)",
    icon: "/icons/microphone.svg",
    desc: "Speech recognition & natural voice synthesis"
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    icon: "/icons/view.svg",
    desc: "Image analysis & object detection"
  },
  {
    id: "factory",
    name: "Factory & Industrial AI",
    icon: "/icons/conveyor-belt.svg",
    desc: "Manufacturing automation & optimization"
  },
  {
    id: "healthcare",
    name: "Healthcare AI",
    icon: "/icons/heart-attack.svg",
    desc: "Medical diagnostics & patient care"
  },
  {
    id: "simulation",
    name: "Social Simulation",
    icon: "/icons/buildings.svg",
    desc: "Urban planning & policy testing"
  },
  {
    id: "custom",
    name: "Custom Solution",
    icon: "/icons/ai-brain.svg",
    desc: "Tailored AI for your specific needs"
  },
];

const stats = [
  { value: "500+", label: "Demos Delivered" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "24h", label: "Response Time" },
  { value: "50+", label: "Countries Served" },
];

const benefits = [
  {
    icon: "/icons/ai-brain.svg",
    title: "Personalized Experience",
    desc: "Every demo is tailored to your industry, use case, and specific challenges."
  },
  {
    icon: "/icons/group.svg",
    title: "Expert Team",
    desc: "Meet with AI specialists who understand your domain and can answer technical questions."
  },
  {
    icon: "/icons/rocket.svg",
    title: "Live Demonstrations",
    desc: "See real AI capabilities in action, not just slides and promises."
  },
  {
    icon: "/icons/cyber-security.svg",
    title: "Secure & Confidential",
    desc: "All discussions are under NDA. Your data and ideas are protected."
  },
];

const testimonials = [
  {
    quote: "The demo completely changed our perspective on AI implementation. Within weeks, we had a working prototype.",
    author: "Sarah M.",
    role: "CTO, HealthTech Startup",
    avatar: "👩‍💼"
  },
  {
    quote: "Deep Room's team understood our manufacturing challenges immediately. The custom solution they proposed was exactly what we needed.",
    author: "Michael K.",
    role: "Operations Director, Automotive",
    avatar: "👨‍💼"
  },
];

const faqs = [
  {
    q: "How long does a demo take?",
    a: "Standard demos are 30 minutes. For complex enterprise solutions, we offer extended 60-minute sessions."
  },
  {
    q: "Is there any cost for the demo?",
    a: "No, all demos are completely free. We believe in showing value before any commitment."
  },
  {
    q: "Can I invite my team members?",
    a: "Absolutely! We encourage bringing key stakeholders. Just let us know how many attendees to expect."
  },
  {
    q: "What happens after the demo?",
    a: "You'll receive a summary email with next steps. If interested, we'll schedule a technical deep-dive and proposal discussion."
  },
];

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    demoType: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you within 24 hours to schedule your demo.");
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Free Personalized Demo</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See <span className="gradient-text">Deep Room AI</span> in Action
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Experience the power of our AI platform firsthand. Schedule a personalized demo
            with our experts and discover how Deep Room can transform your business operations,
            accelerate innovation, and drive measurable results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Types Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            What <span className="gradient-text">interests you?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {demoTypes.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setFormData({ ...formData, demoType: demo.id })}
                className={`p-5 rounded-xl text-center transition-all hover:scale-[1.02] ${
                  formData.demoType === demo.id
                    ? "bg-primary/20 border-primary border-2 shadow-lg shadow-primary/20"
                    : "bg-dark-100 border border-white/10 hover:border-white/30"
                }`}
              >
                <Image src={demo.icon} alt={demo.name} width={48} height={48} className="mx-auto mb-3" />
                <div className="font-bold text-sm mb-1">{demo.name}</div>
                <div className="text-xs text-gray-400 hidden md:block">{demo.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - Form and Info */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Left Side - Form (Larger) */}
          <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-2xl">
                📅
              </div>
              <div>
                <h2 className="text-2xl font-bold">Schedule Your Demo</h2>
                <p className="text-gray-400">Fill in your details and we'll get back to you within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none transition-colors text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-2 block font-medium">Job Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none transition-colors text-lg"
                    placeholder="CTO, VP Engineering, Manager..."
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block font-medium">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none transition-colors text-lg"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-2 block font-medium">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none transition-colors text-lg"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-2 block font-medium">Tell us about your project</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none resize-none transition-colors text-lg"
                  placeholder="What challenges are you looking to solve? What's your current setup? Any specific requirements?"
                />
              </div>
              <button type="submit" className="w-full btn-primary py-5 text-xl font-bold rounded-xl">
                🚀 Request Your Free Demo
              </button>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure & encrypted
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Response within 24h
                </span>
              </div>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* What to Expect */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
                <span className="text-3xl">✨</span>
                What to Expect
              </h3>
              <ul className="space-y-4">
                {[
                  "30-minute personalized demonstration",
                  "Live Q&A with our AI experts",
                  "Custom solution discussion",
                  "Pricing and integration info",
                  "No sales pressure - just value",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
                <span className="text-3xl">📞</span>
                Prefer to Talk?
              </h3>
              <div className="space-y-4">
                <a href="mailto:demo@deeproomai.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
                  <div>
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="font-bold">demo@deeproomai.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <Image src="/icons/location.svg" alt="Location" width={24} height={24} />
                  <div>
                    <div className="text-xs text-gray-500">Available in</div>
                    <div className="font-bold">50+ Countries Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold mb-2">Enterprise Ready</h3>
              <p className="text-sm text-gray-400">SOC 2 Compliant • GDPR Ready • NDA Protected</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why <span className="gradient-text">Book a Demo</span> with Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Image src={benefit.icon} alt={benefit.title} width={32} height={32} />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-8 text-6xl text-primary/20">"</div>
                <p className="text-gray-300 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-400">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging Deep Room AI to drive innovation,
              reduce costs, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary px-8 py-3">
                Book Your Free Demo
              </a>
              <Link href="/demos" className="btn-secondary px-8 py-3">
                Explore AI Tools First
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
