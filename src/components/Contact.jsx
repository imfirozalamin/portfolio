'use client';

import { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Create form data for Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycby6B4cgb4j8XfZnxw7fL8oJWHoV0iLsPy801CsuxF84NQtNCeMtgdC_h3ESEOKWGImpRg/exec';
    
    // Create a hidden iframe for submission
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Create a form element
    const form = document.createElement('form');
    form.action = scriptURL;
    form.method = 'POST';
    form.target = 'hidden_iframe';

    // Add form fields
    Object.keys(formData).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = formData[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Show success message after a short delay
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clean up
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
                <p className="text-gray-400 text-sm">I'm always interested in new opportunities and exciting projects.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl p-3 rounded-lg border border-white/10">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg shadow-lg shadow-purple-500/25">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Email</h4>
                    <a href="mailto:firuzalamingafarullah@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors text-xs">
                      firuzalamingafarullah@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl p-3 rounded-lg border border-white/10">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg shadow-lg shadow-purple-500/25">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">LinkedIn</h4>
                    <a href="https://linkedin.com/in/firozlamin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-xs">
                      linkedin.com/in/firozlamin
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl p-3 rounded-lg border border-white/10">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg shadow-lg shadow-purple-500/25">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Location</h4>
                    <p className="text-gray-400 text-xs">Assam, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 text-sm"
                      placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 text-sm"
                      placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">Subject *</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 text-sm"
                    placeholder="What's this about?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 resize-none text-sm"
                    placeholder="Tell me about your project!" />
                </div>
                {status.message && (
                  <div className={`flex items-center gap-2 p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    <span>{status.message}</span>
                  </div>
                )}
                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-purple-500/25 text-sm">
                  {isSubmitting ? (<><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>Sending...</>) : (<><Send size={18} />Send Message</>)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}