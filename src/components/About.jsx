import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
          
          {/* Professional Summary - Full Width on Desktop */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 mb-8">
            <h3 className="text-xl font-bold text-white mb-3 text-center">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Detail-oriented and versatile professional with strengths in project management, 
              prompt engineering, developing digital tools, and creating multimedia content. 
              Specialized in AI & Machine Learning with hands-on experience in full-stack development, 
              UI/UX design, and building scalable web applications for diverse clients.
            </p>
          </div>

          {/* Image and Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="relative w-full h-80 md:h-full md:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10">
                <Image
                  src="/my-photo.png"
                  alt="Firuz Al Amin Gafarullah"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-500/10 backdrop-blur-xl p-3 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-1 text-sm">Education</h4>
                  <p className="text-xs text-blue-300">B.C.A. in AI & ML</p>
                  <p className="text-xs text-blue-400/80">CGPA: 8.09/10</p>
                </div>
                <div className="bg-green-500/10 backdrop-blur-xl p-3 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-1 text-sm">Experience</h4>
                  <p className="text-xs text-green-300">3+ Years</p>
                  <p className="text-xs text-green-400/80">Full-stack Dev</p>
                </div>
                <div className="bg-purple-500/10 backdrop-blur-xl p-3 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-purple-400 mb-1 text-sm">Projects</h4>
                  <p className="text-xs text-purple-300">15+ Completed</p>
                  <p className="text-xs text-purple-400/80">Web & Mobile</p>
                </div>
                <div className="bg-orange-500/10 backdrop-blur-xl p-3 rounded-lg border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-1 text-sm">Specialization</h4>
                  <p className="text-xs text-orange-300">AI & ML</p>
                  <p className="text-xs text-orange-400/80">Next.js, Python</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-3 rounded-lg border border-white/10">
                <h4 className="font-semibold text-white mb-2 text-sm">Core Competencies</h4>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">Full-stack Dev</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">AI & ML</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">Project Mgmt</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 text-sm">Languages</h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { lang: 'English', level: 'Fluent' },
                    { lang: 'Hindi', level: 'Fluent' },
                    { lang: 'Assamese', level: 'Native' },
                    { lang: 'Bengali', level: 'Conversational' }
                  ].map((item) => (
                    <div key={item.lang} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs border border-blue-500/30">
                      <span className="font-medium">{item.lang}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 text-sm">Interests</h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { hobby: 'Music Production', icon: '🎵' },
                    { hobby: 'PC Gaming', icon: '🎮' },
                    { hobby: 'AI Research', icon: '🤖' }
                  ].map((item) => (
                    <span key={item.hobby} className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-green-500/30">
                      <span>{item.icon}</span>
                      <span>{item.hobby}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}