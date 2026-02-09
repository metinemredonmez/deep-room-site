import Link from "next/link";

const programs = [
  {
    title: "AI Fundamentals",
    level: "Beginner",
    duration: "8 weeks",
    desc: "Introduction to artificial intelligence concepts and applications",
  },
  {
    title: "Machine Learning Engineering",
    level: "Intermediate",
    duration: "12 weeks",
    desc: "Hands-on training in ML model development and deployment",
  },
  {
    title: "Deep Learning Specialization",
    level: "Advanced",
    duration: "16 weeks",
    desc: "Advanced neural networks, transformers, and cutting-edge architectures",
  },
  {
    title: "AI Ethics & Safety",
    level: "All Levels",
    duration: "4 weeks",
    desc: "Responsible AI development and ethical considerations",
  },
];

export default function EducationPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Education <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn AI from industry experts. Our programs are designed for all skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {programs.map((program) => (
            <div key={program.title} className="bg-dark-100 border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                  {program.level}
                </span>
                <span className="text-gray-400 text-sm">{program.duration}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-400">{program.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">Apply Now</Link>
        </div>
      </div>
    </div>
  );
}
