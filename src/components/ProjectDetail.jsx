'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, CheckCircle } from 'lucide-react';

export default function ProjectDetail({ project }) {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30 inline-block mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-400">
                  {project.shortDesc}
                </p>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium flex items-center gap-2 shadow-lg shadow-purple-500/25"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
              )}
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Calendar size={16} />
                  <span className="text-sm">Year</span>
                </div>
                <p className="text-white font-semibold">{project.year}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Clock size={16} />
                  <span className="text-sm">Duration</span>
                </div>
                <p className="text-white font-semibold">{project.duration}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Users size={16} />
                  <span className="text-sm">Client</span>
                </div>
                <p className="text-white font-semibold">{project.client}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <CheckCircle size={16} />
                  <span className="text-sm">Status</span>
                </div>
                <p className="text-green-400 font-semibold">Completed</p>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10 mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {project.description}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Website</span>
                    </a>
                  )}
                  {project.pdfUrl && (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Documentation</span>
                    </a>
                  )}
                  {!project.liveUrl && !project.pdfUrl && (
                    <p className="text-gray-500 text-sm">No external links available</p>
                  )}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-2">Interested in Similar Work?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Let's discuss how I can help bring your project to life.
                </p>
                <Link
                  href="/#contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium text-center shadow-lg shadow-purple-500/25"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}