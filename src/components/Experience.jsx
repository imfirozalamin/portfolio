import { Calendar, Building } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Executive Graphic Designer",
      company: "Priya Communication & Media Solutions",
      period: "June – July 2025",
      type: "Full-time",
      description: [
        "Designed static and motion graphics for corporate and government clients including Axis Bank, SBI, Purabi, and ASDMA",
        "Delivered brand-aligned visual content for campaigns, social media, and offline materials"
      ]
    },
    {
      title: "Freelance Software Designer & Web App Developer",
      company: "Contract or client-based",
      period: "April 2022 – Present",
      type: "Freelance",
      description: [
        "Designed UI/UX interfaces, application workflows, and interactive prototypes for web and software projects",
        "Developed scalable web applications with a focus on usability, performance, and client-specific requirements"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Work Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1.5">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-purple-400 mb-1.5">
                      <Building size={16} />
                      <span className="font-medium text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1.5">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={14} />
                      <span className="text-xs">{exp.period}</span>
                    </div>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-xs font-medium border border-purple-500/30">
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  {exp.description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}