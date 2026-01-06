import { Linkedin, Download, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Unsplash Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
          alt="Coding background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white block md:inline">Firuz Al Amin Gafarullah</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-3">
            B.C.A. (Specialization in AI & Machine Learning)
          </p>
          
          <p className="text-base text-gray-500 mb-6 max-w-2xl mx-auto">
            Detail-oriented and versatile professional with strengths in project management, 
            prompt engineering, developing digital tools, and creating multimedia content.
          </p>

          {/* Social Links */}
          <div className="flex justify-center mb-6">
            <a 
              href="https://linkedin.com/in/firozlamin" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              <Linkedin size={18} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium shadow-lg shadow-purple-500/25 text-sm"
            >
              Get In Touch
            </a>
            <a 
              href="/Firoz Al Amin_resume_2026 (updated) (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg hover:bg-white/10 transition-all font-medium flex items-center gap-2 text-sm"
            >
              <Download size={18} />
              View Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-block text-gray-500 hover:text-purple-400">
              <ArrowDown size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}