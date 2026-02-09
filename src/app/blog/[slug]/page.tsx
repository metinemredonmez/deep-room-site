import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const blogContent: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  layer?: string;
  content: string;
}> = {
  "future-of-emotional-ai": {
    title: "The Future of Emotional AI: How Machines Learn to Understand Us",
    category: "AI Research",
    date: "February 5, 2025",
    readTime: "8 min read",
    author: "Dr. Sarah Chen",
    authorRole: "Chief Science Officer",
    image: "/icons/ai-brain.svg",
    layer: "Human + AI",
    content: `
## Understanding Emotional AI

Emotional AI, also known as affective computing, represents one of the most profound shifts in how humans interact with technology. At Deep Room, we're at the forefront of developing AI systems that don't just process information—they understand the emotional context behind it.

### The Science Behind Emotional Recognition

Modern emotional AI systems combine multiple data streams to understand human emotional states:

**Facial Expression Analysis**: Using computer vision, AI can detect micro-expressions that even humans might miss. Our models are trained on millions of facial images across diverse populations to ensure accuracy and reduce bias.

**Voice Pattern Recognition**: The tone, pitch, pace, and rhythm of speech carry rich emotional information. Deep Room's voice AI can detect frustration, happiness, confusion, and dozens of other emotional states from audio alone.

**Physiological Signals**: In advanced applications, we integrate data from wearables—heart rate variability, galvanic skin response, and other biometrics—to create a comprehensive emotional profile.

### Real-World Applications

The applications of emotional AI span virtually every industry:

**Healthcare**: Mental health monitoring, early detection of depression, anxiety management apps, and therapeutic AI companions that provide consistent emotional support.

**Customer Service**: AI systems that detect customer frustration in real-time, enabling proactive intervention before issues escalate. Companies using our emotional AI have seen 40% reductions in customer churn.

**Education**: Adaptive learning platforms that recognize when students are confused, bored, or engaged, adjusting content delivery accordingly.

**Automotive**: In-vehicle systems that monitor driver alertness and emotional state, potentially preventing accidents caused by road rage or drowsiness.

### The Ethical Dimension

With great capability comes great responsibility. At Deep Room, we've established strict ethical guidelines for emotional AI:

- **Consent and Transparency**: Users must always know when emotional AI is being used and opt-in to its use.
- **Data Privacy**: Emotional data is among the most sensitive personal information. We employ state-of-the-art encryption and never sell emotional data.
- **Bias Mitigation**: Our systems are continuously tested across demographic groups to ensure equitable performance.

### Looking Ahead

The next decade will see emotional AI become ubiquitous—but in subtle, helpful ways. Imagine a world where:

- Your smart home adjusts lighting and music based on your mood
- Your car plays calming content when it detects stress
- Virtual assistants know when to be brief and when to engage in longer conversations

At Deep Room, we're not just building this future—we're ensuring it respects human dignity and enhances wellbeing.

## Conclusion

Emotional AI represents the next evolution in human-computer interaction. By teaching machines to understand not just what we say, but how we feel, we're creating technology that truly serves human needs. The future of AI is emotional, and at Deep Room, we're leading the way.
    `
  },
  "social-simulation-urban-planning": {
    title: "How Social Simulation is Revolutionizing Urban Planning",
    category: "Industry",
    date: "February 3, 2025",
    readTime: "6 min read",
    author: "Prof. Marcus Webb",
    authorRole: "Head of Social Simulation",
    image: "/icons/buildings.svg",
    layer: "Social Simulation",
    content: `
## The Power of Social Simulation

Cities are the most complex systems humanity has ever built. With over 55% of the world's population now living in urban areas—a number expected to reach 68% by 2050—getting urban planning right has never been more critical.

Traditional urban planning relied on historical data, surveys, and educated guesses. Today, Deep Room's social simulation platform allows city planners to test policies in a virtual environment before implementing them in the real world.

### How Social Simulation Works

Our platform creates digital twins of cities—complete with:

**Agent-Based Modeling**: Millions of virtual citizens with distinct characteristics, behaviors, and decision-making patterns. Each agent responds realistically to changes in their environment.

**Economic Systems**: Accurate modeling of local economies, job markets, housing prices, and commercial activity.

**Transportation Networks**: Real-time simulation of traffic patterns, public transit usage, and mobility behaviors.

**Social Dynamics**: Community formation, segregation patterns, and social cohesion metrics.

### Case Study: Traffic Policy Testing

A major European capital wanted to implement congestion pricing. Traditional analysis suggested it would reduce traffic by 15%. Our simulation revealed:

- **Reality**: Traffic reduction varied by neighborhood (8-25%)
- **Unintended consequence**: Lower-income residents would be disproportionately affected
- **Solution discovered**: Tiered pricing with subsidies for essential workers

The city implemented our recommended approach, achieving traffic reduction goals while maintaining equity.

### Beyond Traffic: Policy Applications

**Housing Policy**: Before building new affordable housing, simulate its effects on local property values, school enrollment, and community demographics.

**Pandemic Response**: Model how different intervention strategies (lockdowns, mask mandates, vaccination campaigns) would spread through a population.

**Climate Resilience**: Simulate how residents would respond to flooding, heat waves, or other climate events—and design better emergency response systems.

**Economic Development**: Test the ripple effects of attracting a major employer or losing a key industry.

### The Technology Stack

Our simulation platform combines:

- **High-Performance Computing**: Millions of agents require massive parallel processing
- **Machine Learning**: Agents learn and adapt their behavior over time
- **Real-Time Data Integration**: Traffic sensors, social media, and economic indicators feed into simulations
- **Interactive Visualization**: Planners can explore scenarios in intuitive 3D environments

### Building Better Cities

The cities of tomorrow will be designed with unprecedented precision. Social simulation doesn't replace human judgment—it enhances it, giving planners the ability to foresee consequences and iterate on solutions before breaking ground.

## Conclusion

At Deep Room, we believe that better simulations lead to better cities. By giving planners the tools to test their ideas in virtual reality first, we're helping build urban environments that are more livable, equitable, and sustainable.
    `
  },
  "ai-in-space-exploration": {
    title: "AI in Space: The Next Frontier of Autonomous Exploration",
    category: "AI Research",
    date: "January 28, 2025",
    readTime: "10 min read",
    author: "Dr. Yuki Tanaka",
    authorRole: "Space AI Director",
    image: "/icons/rocket.svg",
    layer: "Space & Frontier",
    content: `
## The Imperative for AI in Space

Space is the ultimate hostile environment for computing. Communication delays of up to 24 minutes to Mars make real-time human control impossible. Extreme temperatures, radiation, and the impossibility of on-site repairs demand unprecedented reliability. This is why AI isn't just useful in space—it's essential.

### Autonomous Navigation and Operations

**Landing on Unknown Terrain**: When a spacecraft approaches a planetary body, it must make split-second decisions about where to land. Deep Room's terrain analysis AI can identify hazards—rocks, slopes, craters—and find safe landing zones in real-time.

**Rover Navigation**: Mars rovers using our AI can traverse complex terrain autonomously, identifying scientifically interesting targets without waiting for commands from Earth.

**Orbital Maneuvers**: Satellite constellations managed by AI can optimize their positions, avoid debris, and coordinate for maximum coverage without constant human oversight.

### Scientific Discovery

AI doesn't just follow instructions—it helps make discoveries:

**Anomaly Detection**: Our systems can identify unusual features in images or sensor data that human scientists might miss among millions of data points.

**Hypothesis Generation**: By analyzing patterns across datasets, AI can suggest scientific hypotheses for human researchers to investigate.

**Resource Identification**: For future mining operations on the Moon or asteroids, AI can analyze spectral data to identify valuable mineral deposits.

### Deep Space Challenges

As we venture beyond Mars, the challenges multiply:

**Extended Autonomy**: A mission to Europa or Titan can't wait hours for instructions. Our AI systems are designed for months of autonomous operation.

**Radiation Hardening**: Deep Room develops specialized AI architectures that can withstand cosmic radiation while maintaining accuracy.

**Power Efficiency**: AI computations must be optimized for the limited power available from solar panels or RTGs.

### Current Partnerships and Projects

Deep Room is actively engaged with space agencies and private space companies:

- **Lunar Surface Operations**: AI for autonomous lunar base management
- **Asteroid Mining**: Prospecting and extraction planning algorithms
- **Space Debris Tracking**: Prediction and collision avoidance systems
- **Deep Space Communication**: AI-enhanced signal processing for weak signals

### The Human-AI Partnership

Our philosophy isn't to replace astronauts with AI—it's to make human space exploration safer and more effective. AI handles the routine and dangerous tasks, freeing humans for the creative and exploratory work that only humans can do.

## Conclusion

The next giant leap for humankind will be taken together with AI. At Deep Room, we're building the intelligence that will help humanity become a truly spacefaring civilization.
    `
  },
  "sovereign-ai-national-security": {
    title: "Sovereign AI: Building National AI Infrastructure for Security",
    category: "Industry",
    date: "January 25, 2025",
    readTime: "7 min read",
    author: "Deep Room Security Team",
    authorRole: "Defense & Sovereign AI Division",
    image: "/icons/cyber-security.svg",
    layer: "Defense & Sovereign AI",
    content: `
## The Strategic Importance of Sovereign AI

In an era where AI capabilities increasingly determine national competitiveness and security, dependence on foreign AI infrastructure presents strategic risks. Sovereign AI—AI systems developed, deployed, and controlled entirely within national boundaries—has become a priority for nations worldwide.

### Why Sovereignty Matters

**Data Sovereignty**: Sensitive government and citizen data should remain within national jurisdiction. Foreign-hosted AI systems may be subject to foreign laws and intelligence gathering.

**Supply Chain Security**: AI hardware and software supply chains can be vulnerable to disruption or compromise. Sovereign AI requires domestic capabilities.

**Strategic Autonomy**: Nations need AI capabilities that cannot be remotely disabled or degraded during conflicts or trade disputes.

**Economic Competitiveness**: Countries that develop their own AI industries create high-value jobs and intellectual property.

### Deep Room's Approach

We help nations build sovereign AI capabilities through:

**On-Premises Infrastructure**: AI systems that run entirely within national data centers, with no external dependencies.

**Technology Transfer**: Training local teams to develop, maintain, and advance AI systems independently.

**Secure Development Practices**: Building AI with security as a foundational requirement, not an afterthought.

**Interoperability Standards**: Ensuring sovereign systems can still collaborate with allies through secure interfaces.

### Key Application Areas

**Cybersecurity**: AI-powered threat detection and response systems that protect critical infrastructure.

**Intelligence Analysis**: Processing vast amounts of open-source and classified information to identify threats and opportunities.

**Border Security**: Automated monitoring and anomaly detection for territorial protection.

**Strategic Planning**: Simulation and analysis tools for defense planning and resource allocation.

### Ethical Framework

Even in security applications, we maintain strict ethical principles:

- All systems maintain human oversight for critical decisions
- We do not develop autonomous weapons systems
- Our AI is designed to protect civilian populations
- We support international humanitarian law

### Building National Capabilities

Sovereign AI isn't just about buying technology—it's about building lasting national capabilities:

**Education**: Training the next generation of AI researchers and engineers
**Research**: Establishing national AI research programs and laboratories
**Industry**: Nurturing domestic AI companies through procurement and investment
**Standards**: Developing national and international AI governance frameworks

## Conclusion

The AI era presents both opportunities and challenges for national security. Deep Room is committed to helping nations build AI capabilities that protect their citizens while respecting human rights and international law.
    `
  },
  "genomics-ai-drug-discovery": {
    title: "AI-Powered Drug Discovery: From Genomics to Clinical Trials",
    category: "AI Research",
    date: "January 20, 2025",
    readTime: "9 min read",
    author: "Dr. Elena Rodriguez",
    authorRole: "Director of BioAI Research",
    image: "/icons/dna.svg",
    layer: "Biological Intelligence",
    content: `
## The Drug Discovery Revolution

Traditional drug discovery is slow, expensive, and prone to failure. On average, it takes 10-15 years and over $2 billion to bring a new drug to market, with a 90% failure rate in clinical trials. AI is transforming every stage of this process.

### Genomics and Target Discovery

The human genome contains approximately 20,000 genes, any of which could potentially be involved in disease. AI helps identify the most promising targets:

**Genome-Wide Association Studies**: Machine learning algorithms can analyze genetic data from millions of individuals to identify disease-associated variants.

**Protein Structure Prediction**: Following breakthroughs like AlphaFold, Deep Room has developed models that predict how proteins fold and interact—crucial for understanding disease mechanisms.

**Pathway Analysis**: AI maps the complex networks of genes and proteins involved in diseases, identifying intervention points.

### Molecule Design

Once a target is identified, AI designs potential drug molecules:

**Generative Chemistry**: Our models can design novel molecules with desired properties—binding to specific targets while avoiding toxicity.

**Virtual Screening**: Instead of testing millions of compounds in laboratories, AI can screen billions of virtual molecules computationally.

**Optimization**: Iterative AI refinement improves drug candidates' efficacy, selectivity, and drug-like properties.

### Preclinical Development

Before human trials, drugs must be tested extensively:

**Toxicity Prediction**: AI models predict potential side effects, identifying dangerous compounds before expensive animal testing.

**Pharmacokinetics**: Predicting how drugs are absorbed, distributed, metabolized, and excreted.

**Animal Study Optimization**: Reducing the number of animal experiments while gathering equivalent data.

### Clinical Trial Innovation

AI is transforming human trials:

**Patient Recruitment**: Identifying suitable patients from electronic health records, dramatically accelerating enrollment.

**Trial Design**: Adaptive trial designs that learn from ongoing data, reducing patient numbers while maintaining statistical power.

**Real-World Evidence**: Analyzing data from wearables and health apps to supplement trial data.

### Success Stories

Deep Room's BioAI platform has contributed to:

- Identification of novel targets for rare diseases previously considered untreatable
- 60% reduction in preclinical development time for partner pharmaceutical companies
- Discovery of drug repurposing opportunities—finding new uses for existing medications

### The Future: Personalized Medicine

The ultimate goal is treatments tailored to individual patients:

**Pharmacogenomics**: Predicting drug response based on genetic profile
**Real-Time Treatment Adjustment**: AI systems that modify treatment based on continuous patient monitoring
**Prevention**: Identifying disease risk before symptoms appear, enabling preventive intervention

## Conclusion

AI is not replacing scientists in drug discovery—it's giving them superpowers. By automating the tedious and accelerating the difficult, AI is helping us develop better treatments faster, ultimately saving lives.
    `
  },
  "building-scalable-ai-infrastructure": {
    title: "Building Scalable AI Infrastructure: Lessons from Deep Room",
    category: "Tutorials",
    date: "January 15, 2025",
    readTime: "12 min read",
    author: "Deep Room Engineering",
    authorRole: "Infrastructure Team",
    image: "/icons/cloud-server.svg",
    layer: "Infrastructure",
    content: `
## The Foundation of AI at Scale

Behind every AI breakthrough lies infrastructure that makes it possible. At Deep Room, we've built systems that handle petabytes of data, train models with billions of parameters, and serve millions of inference requests per second. Here's what we've learned.

### Core Principles

**Design for Failure**: In distributed systems, failures aren't exceptional—they're expected. Every component must handle failures gracefully, with automatic recovery and no data loss.

**Elasticity**: AI workloads are inherently variable. Training runs consume massive resources for days or weeks, then nothing. Inference might spike 100x during peak hours. Infrastructure must scale smoothly.

**Cost Efficiency**: GPU compute is expensive. Optimizing utilization isn't just good engineering—it's essential for sustainable AI development.

### Compute Architecture

**GPU Clusters**: We operate clusters of thousands of GPUs, connected with high-bandwidth interconnects (InfiniBand, NVLink) for efficient distributed training.

**Heterogeneous Computing**: Different workloads suit different hardware. We match tasks to appropriate accelerators—GPUs for training, TPUs for inference, FPGAs for specialized operations.

**Spot/Preemptible Instances**: For fault-tolerant workloads, spot instances reduce costs by 60-80%. Our training systems checkpoint frequently and can resume after preemption.

### Data Infrastructure

**Distributed Storage**: Petabyte-scale storage systems with sub-millisecond latency for training data access.

**Data Pipelines**: Streaming architectures that process and transform data in real-time, feeding training and inference systems.

**Feature Stores**: Centralized repositories of computed features, ensuring consistency between training and production.

### ML Operations (MLOps)

**Experiment Tracking**: Every training run is logged with hyperparameters, metrics, and artifacts, enabling reproducibility and comparison.

**Model Registry**: Versioned storage of trained models with metadata about training data, performance, and lineage.

**Automated Deployment**: Push-button deployment of models to production, with canary releases and automatic rollback.

**Monitoring**: Real-time tracking of model performance, data drift, and system health.

### Security and Compliance

**Data Encryption**: All data encrypted at rest and in transit, with customer-managed keys for sensitive applications.

**Access Control**: Fine-grained permissions based on roles and data sensitivity.

**Audit Logging**: Complete records of who accessed what data and when.

**Compliance**: SOC 2, GDPR, HIPAA-ready infrastructure for regulated industries.

### Edge Deployment

Not all AI runs in the cloud:

**Edge Optimization**: Techniques for running models on limited hardware—quantization, pruning, knowledge distillation.

**Federated Learning**: Training models across distributed devices without centralizing data.

**Hybrid Architectures**: Seamless movement of inference between cloud and edge based on latency and cost requirements.

### Lessons Learned

1. **Start with observability**: You can't optimize what you can't measure
2. **Automate everything**: Manual processes don't scale
3. **Plan for 10x growth**: The infrastructure you build today must handle tomorrow's demands
4. **Invest in developer experience**: The faster teams can iterate, the faster AI improves

## Conclusion

Great AI infrastructure is invisible—it just works. But building that reliability and performance requires careful engineering. At Deep Room, we've made these investments so our customers can focus on what matters: building AI that solves real problems.
    `
  },
  "voice-ai-enterprise": {
    title: "Voice AI in the Enterprise: Beyond Simple Assistants",
    category: "Industry",
    date: "January 10, 2025",
    readTime: "6 min read",
    author: "Deep Room Voice Team",
    authorRole: "Voice AI Division",
    image: "/icons/microphone.svg",
    content: `
## The Evolution of Voice AI

Voice AI has evolved far beyond "Hey Siri" and "OK Google." In enterprise environments, sophisticated voice systems are handling complex tasks, understanding context, and integrating deeply with business processes.

### Speech-to-Text: Foundation of Voice AI

Modern STT systems achieve near-human accuracy:

**Whisper and Beyond**: Open-source models have democratized high-quality transcription. Deep Room builds on these foundations with domain-specific fine-tuning.

**Real-Time Processing**: Streaming transcription with sub-second latency enables natural conversations.

**Multi-Speaker Recognition**: Distinguishing and attributing speech to different speakers in meetings and calls.

### Text-to-Speech: The Voice of AI

Synthetic voices have become remarkably human:

**Emotional Expression**: Voices that convey appropriate emotion—empathy in customer service, enthusiasm in marketing.

**Voice Cloning**: Creating custom brand voices or matching specific speakers (with appropriate consent).

**Multilingual Support**: Single voices that can speak multiple languages naturally.

### Enterprise Applications

**Call Center Automation**: AI agents that handle routine inquiries, escalating to humans only when necessary. Our customers report 40% cost reduction while improving customer satisfaction.

**Meeting Intelligence**: Automatic transcription, summarization, and action item extraction from meetings.

**Industrial Voice Control**: Hands-free operation in factories, warehouses, and field service—increasing safety and efficiency.

**Accessibility**: Enabling interaction for users with visual or motor impairments.

### Integration Architecture

Enterprise voice AI requires:

- **Telephony Integration**: Connection to phone systems, SIP trunks, and communication platforms
- **CRM Integration**: Context from customer history to personalize interactions
- **Knowledge Bases**: Access to product information, policies, and procedures
- **Workflow Systems**: Triggering actions in other business systems

## Conclusion

Voice AI in the enterprise is not about replacing human interaction—it's about augmenting it. By handling routine tasks with AI, we free human agents to focus on complex, high-value conversations.
    `
  },
  "computer-vision-manufacturing": {
    title: "Computer Vision in Manufacturing: Quality Control at Scale",
    category: "Industry",
    date: "January 5, 2025",
    readTime: "7 min read",
    author: "Deep Room Industrial AI",
    authorRole: "Factory Solutions Team",
    image: "/icons/view.svg",
    content: `
## Visual Intelligence for Modern Factories

Every manufactured product was once inspected by human eyes. Now, AI-powered vision systems examine products faster, more consistently, and more accurately than humans ever could.

### The Challenge of Visual Inspection

Human inspectors face fundamental limitations:

- **Fatigue**: Accuracy decreases over shifts
- **Variability**: Different inspectors have different standards
- **Speed**: Humans can only examine so many items per hour
- **Microscopic Defects**: Many flaws are invisible to the naked eye

### How Computer Vision Works

**Camera Systems**: High-resolution cameras capture images of products at production speed—hundreds per second if needed.

**Preprocessing**: Images are normalized for lighting, orientation, and focus.

**Deep Learning Models**: Convolutional neural networks identify defects, classify products, and measure dimensions.

**Integration**: Results feed back into manufacturing systems for sorting, alerts, and process adjustment.

### Types of Defects Detected

- Surface defects: scratches, dents, discoloration
- Dimensional errors: wrong size, shape, alignment
- Assembly errors: missing components, incorrect placement
- Material defects: impurities, inconsistencies
- Packaging issues: labels, seals, contents

### Implementation Approach

**Phase 1: Data Collection** - Capture thousands of images of good and defective products

**Phase 2: Model Training** - Train AI to distinguish acceptable from unacceptable

**Phase 3: Pilot Deployment** - Run AI alongside human inspectors, validate accuracy

**Phase 4: Production Deployment** - Full automation with human oversight

**Phase 5: Continuous Improvement** - Model refinement based on production feedback

### Results from the Field

Deep Room's vision systems in manufacturing environments have achieved:

- 99.5% defect detection rate (vs. 80-90% human)
- 10x throughput increase
- 80% reduction in quality-related returns
- Valuable data for process improvement

## Conclusion

Computer vision is transforming manufacturing quality control. The factories of the future will produce better products, faster, with AI watching every step of the process.
    `
  },
  "deep-room-2025-vision": {
    title: "Deep Room 2025: Our Vision for the Year Ahead",
    category: "Company News",
    date: "January 1, 2025",
    readTime: "5 min read",
    author: "Dr. Alex Morgan",
    authorRole: "Founder & CEO",
    image: "/logo.png",
    content: `
## A Message from Our CEO

As we begin 2025, I want to share our vision for the year ahead and reflect on how far we've come.

### Our Mission

Deep Room exists to create AI systems that genuinely serve humanity across every frontier—from personal wellbeing to social harmony, from planetary sustainability to cosmic exploration.

We believe the next century of AI development will be defined not by isolated breakthroughs, but by the integration of knowledge across domains. That's why we're building a unified architecture that connects human cognition, social dynamics, space exploration, national security, and biological intelligence.

### 2024 in Review

Last year was transformational for Deep Room:

- **Team Growth**: We grew from 50 to 200 employees across 12 countries
- **Research**: Published 25+ papers in top AI conferences
- **Products**: Launched our Voice AI and Social Simulation platforms
- **Partnerships**: Established collaborations with leading research institutions and enterprises

### Priorities for 2025

**Expand Our Layer Architecture**: We'll deepen capabilities in each of our five layers while strengthening cross-layer integration.

**Enterprise Solutions**: Building production-ready AI solutions for healthcare, manufacturing, urban planning, and defense.

**Open Research**: We remain committed to publishing our research and contributing to the open-source AI ecosystem.

**Responsible AI**: Advancing our work on AI safety, fairness, and transparency.

**Global Expansion**: Opening offices in new regions to serve customers worldwide.

### Our Values

As we grow, our values remain constant:

- **Mission-Driven**: Every decision is guided by our long-term vision for beneficial AI
- **Collaborative**: The best solutions emerge from diverse perspectives working together
- **Rigorous**: Scientific rigor and evidence-based approaches underpin everything we do
- **Ethical**: We prioritize responsible AI development with transparency and accountability

### Join Us

Whether you're a researcher, an engineer, a partner, or a customer, I invite you to join us on this journey. The future of AI is being written now, and together we can ensure it benefits all of humanity.

Here's to an extraordinary 2025.

*Dr. Alex Morgan*
*Founder & CEO, Deep Room*
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    notFound();
  }

  const relatedPosts = Object.entries(blogContent)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({ slug: key, ...value }));

  return (
    <div className="pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              {post.category}
            </span>
            {post.layer && (
              <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm">
                {post.layer}
              </span>
            )}
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-xl">
              👤
            </div>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-gray-400">{post.authorRole}</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 p-12 flex items-center justify-center">
          <Image src={post.image} alt={post.title} width={120} height={120} className="opacity-60" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-16">
          {post.content.split('\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 gradient-text">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-bold mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <p key={i} className="font-bold text-white">{paragraph.replace(/\*\*/g, '')}</p>;
            }
            if (paragraph.startsWith('- ')) {
              return <li key={i} className="text-gray-300 ml-4">{paragraph.replace('- ', '')}</li>;
            }
            if (paragraph.startsWith('*') && paragraph.endsWith('*') && !paragraph.startsWith('**')) {
              return <p key={i} className="italic text-gray-400">{paragraph.replace(/\*/g, '')}</p>;
            }
            if (paragraph.trim()) {
              return <p key={i} className="text-gray-300 mb-4 leading-relaxed">{paragraph}</p>;
            }
            return null;
          })}
        </div>

        {/* Share */}
        <div className="border-t border-white/10 pt-8 mb-16">
          <div className="flex items-center justify-between">
            <div className="text-gray-400">Share this article</div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                𝕏
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                in
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                📋
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group bg-dark-100 border border-white/10 rounded-xl p-5 hover:border-primary/30 transition-all"
              >
                <div className="text-xs text-primary mb-2">{related.category}</div>
                <h3 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
