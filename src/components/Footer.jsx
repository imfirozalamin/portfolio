import { Mail, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10">
      <div className="w-full px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Compact Single Column */}
          <div className="md:hidden space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Firuz Al Amin Gafarullah</h3>
              <p className="text-gray-400 text-sm">B.C.A. in AI & Machine Learning</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 text-sm">
              <a href="mailto:firuzalamingafarullah@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a href="https://linkedin.com/in/firozlamin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a href="/Firoz Al Amin_resume_2026 (updated) (1).pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                Resume
              </a>
            </div>

            <div className="border-t border-white/10 pt-6 text-center">
              <p className="text-gray-500 text-xs mb-2">© 2026 Firuz Al Amin Gafarullah</p>
              <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
                Made with <Heart size={12} className="text-red-500" /> using Next.js & Tailwind
              </p>
            </div>
          </div>

          {/* Desktop: Three Column Layout */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Firuz Al Amin Gafarullah</h3>
                <p className="text-gray-400 mb-2">B.C.A. in AI & Machine Learning</p>
                <p className="text-gray-500 text-sm">Full-stack Developer & UI/UX Designer passionate about creating innovative digital solutions.</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((link) => (
                    <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
                <div className="space-y-3">
                  <a href="mailto:firuzalamingafarullah@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    <Mail size={18} />
                    <span>Email Me</span>
                  </a>
                  <a href="https://linkedin.com/in/firozlamin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="/Firoz Al Amin_resume_2026 (updated) (1).pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block">
                    View Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <p className="text-gray-500 text-sm">© 2026 Firuz Al Amin Gafarullah. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}