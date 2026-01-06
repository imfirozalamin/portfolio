import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master of Arts (M.A.) in Mass Communication",
      institution: "Gauhati University (GUCDOE)",
      period: "2025 – 2027",
      status: "Ongoing",
      type: "Master's"
    },
    {
      degree: "B.C.A. (Specialization in AI & Machine Learning)",
      institution: "Assam Downtown University",
      period: "2022 – 2025",
      grade: "CGPA: 8.09",
      type: "Bachelor's"
    },
    {
      degree: "12th Standard (Science)",
      institution: "Assam Higher Secondary Council",
      period: "2020 – 2022",
      grade: "Score: 66%",
      type: "Higher Secondary"
    },
    {
      degree: "10th Standard",
      institution: "Board of Secondary Education, Assam",
      period: "2020",
      grade: "Score: 58%",
      type: "Secondary"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Master's": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Bachelor's": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Higher Secondary": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Secondary": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Education
          </h2>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1.5 rounded-lg shadow-lg shadow-purple-500/25">
                        <GraduationCap className="text-white" size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-0.5">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-400 font-medium text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-1.5 mt-3 md:mt-0">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getTypeColor(edu.type)}`}>
                      {edu.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Calendar size={14} />
                      <span className="text-xs">{edu.period}</span>
                    </div>
                    {edu.grade && (
                      <div className="flex items-center gap-1.5 text-green-400">
                        <Award size={14} />
                        <span className="text-xs font-medium">{edu.grade}</span>
                      </div>
                    )}
                    {edu.status && (
                      <span className="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded text-xs font-medium border border-yellow-500/30">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}