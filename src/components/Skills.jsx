export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Prompt Engineering",
      skills: ["LLM usage", "Generative AI", "Automation"],
      color: "purple"
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "Next.js"],
      color: "blue"
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB"],
      color: "green"
    },
    {
      title: "Tools",
      skills: ["Git", "MS Office", "Power BI"],
      color: "orange"
    },
    {
      title: "Design",
      skills: ["Adobe Suite", "Affinity", "Figma"],
      color: "pink"
    },
    {
      title: "Audio",
      skills: ["FL Studio", "Ableton", "iZotope RX"],
      color: "indigo"
    },
    {
      title: "Domains",
      skills: ["Full-stack development", "UI/UX", "QA testing", "Data analysis", "Cybersecurity basics", "Cloud fundamentals"],
      color: "teal"
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Leadership", "Teamwork", "Analytical thinking", "Time management", "Adaptability"],
      color: "yellow"
    }
  ];

  const certifications = [
    "IBM – Python for Data Science, AI & Development",
    "Google – Foundations of Project Management + Project Initiation",
    "HackerRank – Node.js (Intermediate)",
    "HackerRank – SQL (Advanced)",
    "Berklee College of Music – Ableton Live (Music Technology)",
    "University of California, San Diego – Data Structures Certification Course"
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
      blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
      green: "bg-green-500/10 border-green-500/20 text-green-300",
      orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
      pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
      indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
      teal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
      yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300"
    };
    return colors[color] || colors.purple;
  };

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Skills & Expertise
          </h2>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-lg font-bold text-white mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className={`px-2 py-1 rounded-full text-xs font-medium border ${getColorClasses(category.color)}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-xs">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}