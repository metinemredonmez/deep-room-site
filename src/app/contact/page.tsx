"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const contactOptions = [
  {
    icon: "/icons/mail.svg",
    title: "Email Us",
    desc: "For general inquiries and support",
    value: "contact@deeproomai.com",
    link: "mailto:contact@deeproomai.com",
    response: "Response within 24 hours"
  },
  {
    icon: "/icons/ai-brain.svg",
    title: "Sales & Demos",
    desc: "Explore enterprise solutions",
    value: "sales@deeproomai.com",
    link: "mailto:sales@deeproomai.com",
    response: "Response within 4 hours"
  },
  {
    icon: "/icons/cyber-security.svg",
    title: "Technical Support",
    desc: "Help with implementation",
    value: "support@deeproomai.com",
    link: "mailto:support@deeproomai.com",
    response: "Priority support available"
  },
];

const quickLinks = [
  { name: "Book a Demo", href: "/book-demo", icon: "📅" },
  { name: "View Documentation", href: "/research", icon: "📚" },
  { name: "Partner with Us", href: "/collaborate", icon: "🤝" },
  { name: "Read our Blog", href: "/blog", icon: "📰" },
];

const faqs = [
  {
    q: "What is the typical response time?",
    a: "We respond to all inquiries within 24 hours during business days. Sales and demo requests receive priority response within 4 hours."
  },
  {
    q: "Do you offer custom enterprise solutions?",
    a: "Yes! We specialize in tailored AI solutions for enterprises. Book a demo to discuss your specific requirements with our team."
  },
  {
    q: "Where are you located?",
    a: "Deep Room operates globally with a remote-first team. We serve clients in over 50 countries across all major time zones."
  },
  {
    q: "Is there a free trial available?",
    a: "We offer free demos and proof-of-concept projects for qualified enterprises. Contact our sales team to learn more."
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! We\'ll get back to you soon.' });
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      } else {
        setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">We're here to help</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have questions about Deep Room? Want to explore how AI can transform your business?
            Our team is ready to help you every step of the way.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactOptions.map((option) => (
            <a
              key={option.title}
              href={option.link}
              className="group glass rounded-2xl p-6 hover:bg-white/5 transition-all hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Image src={option.icon} alt={option.title} width={28} height={28} />
              </div>
              <h3 className="text-xl font-bold mb-1">{option.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{option.desc}</p>
              <p className="text-primary font-medium group-hover:underline">{option.value}</p>
              <p className="text-xs text-gray-500 mt-2">{option.response}</p>
            </a>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center">
                ✉️
              </div>
              <div>
                <h2 className="text-2xl font-bold">Send us a Message</h2>
                <p className="text-gray-400">Fill out the form and we'll be in touch</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Inc."
                    className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">Subject *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="demo">Request a Demo</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="support">Technical Support</option>
                    <option value="media">Media & Press</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2 font-medium">Your Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-5 py-4 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus && (
                <div className={`p-4 rounded-xl text-center ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                    : 'bg-red-500/20 border border-red-500/30 text-red-400'
                }`}>
                  {submitStatus.type === 'success' && (
                    <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {submitStatus.message}
                </div>
              )}

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="group-hover:text-primary transition-colors">{link.name}</span>
                    <svg className="w-4 h-4 ml-auto text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Office Info */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Global Presence</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    🌍
                  </div>
                  <div>
                    <div className="font-medium">Worldwide Coverage</div>
                    <div className="text-sm text-gray-400">Serving clients in 50+ countries</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-sm text-gray-400">24/7 support for enterprise clients</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    🔒
                  </div>
                  <div>
                    <div className="font-medium">Secure Communication</div>
                    <div className="text-sm text-gray-400">End-to-end encrypted channels</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/107958970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-[#0077B5]/20 hover:bg-[#0077B5]/30 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/deeproomai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-400">
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
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a personalized demo and discover how Deep Room AI can transform your business.
              Our team will guide you through the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo" className="btn-primary px-8 py-4 text-lg">
                Book a Free Demo
              </Link>
              <Link href="/demos" className="btn-secondary px-8 py-4 text-lg">
                Explore AI Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
