export default function ContentPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Content Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-gray-400">Last updated: February 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
            <p>Deep Room AI tools must be used responsibly and ethically. Our AI systems are designed to benefit users while maintaining safety and security standards.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Prohibited Content</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Illegal or harmful content</li>
              <li>Hate speech or discrimination</li>
              <li>Misinformation or deceptive content</li>
              <li>Privacy violations</li>
              <li>Malicious software or code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">AI Safety Guidelines</h2>
            <p>We are committed to developing AI responsibly. Our systems include safety measures to prevent misuse and ensure beneficial outcomes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Reporting Violations</h2>
            <p>If you encounter content that violates this policy, please report it to abuse@deeproomai.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
