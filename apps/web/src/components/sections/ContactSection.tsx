'use client';

import { useState } from 'react';
import { Mail, MapPin, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import { submitContact } from '@/lib/api';
import type { ContactFormData } from '@/types';

const serviceGroups = [
  {
    label: 'Finance & Compliance',
    options: [
      'Accounting Advisory',
      'Income Tax Compliance (ITP)',
      'VAT Compliance',
      'Customs Compliance',
      'Corporate Regulatory Compliance',
      'Internal Control & Audit Support',
      'Financial Analysis & Advisory',
    ],
  },
  {
    label: 'Business × Technology (Blended)',
    options: [
      'Accounting Process Automation',
      'Finance Dashboard Development',
      'Digital Tax & VAT Tools',
      'AI-assisted Financial Analysis',
      'ERP & Accounting System Advisory',
      'Business Process Digitization',
    ],
  },
  {
    label: 'IT & Digital Solutions',
    options: [
      'Web Design & Development',
      'App Development',
      'SaaS Product Development',
      'Digital Marketing',
      'Business Automation & Integration',
    ],
  },
];

const inputClass =
  'w-full border border-steel rounded-xl px-4 py-3 text-[0.9rem] text-navy bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all placeholder:text-light';

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (k: keyof ContactFormData, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      await submitContact(form);
      setStatus('success');
      setForm({ name: '', email: '', organization: '', service: '', message: '' });
    } catch (e) {
      setStatus('error');
      setErrorMsg(e instanceof Error ? e.message : 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2
            className="font-display font-extrabold text-navy mb-3 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Let&apos;s Discuss Your Needs
          </h2>
          <p className="text-smoke text-[0.95rem] mb-12">
            Need support with accounting, tax, VAT, compliance, or business automation?
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Left */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-display font-bold text-navy mb-3">
              Ready to work together?
            </h3>
            <p className="text-[0.9rem] text-smoke leading-[1.8] mb-8">
              Whether you need tax advisory, VAT compliance support, financial reporting,
              or a custom business automation solution — I&apos;m here to help. Fill in
              the form and I&apos;ll get back to you promptly.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'khadimul@inception23.com' },
                { icon: MapPin, text: 'Dhaka, Bangladesh' },
                { icon: Globe, text: 'Available for remote advisory engagements' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-[0.88rem] text-smoke">
                  <div className="w-8 h-8 rounded-lg bg-gold-light flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-gold" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.8rem] font-medium text-navy mb-1.5">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-medium text-navy mb-1.5">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.8rem] font-medium text-navy mb-1.5">
                  Organization{' '}
                  <span className="text-muted text-[0.72rem]">(optional)</span>
                </label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Your company or organization"
                  value={form.organization}
                  onChange={(e) => update('organization', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-[0.8rem] font-medium text-navy mb-1.5">
                  Service Required
                </label>
                <select
                  className={inputClass}
                  value={form.service}
                  onChange={(e) => update('service', e.target.value)}
                >
                  <option value="">Select a service...</option>
                  {serviceGroups.map((g) => (
                    <optgroup key={g.label} label={g.label}>
                      {g.options.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="Other / General Inquiry">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[0.8rem] font-medium text-navy mb-1.5">
                  Message <span className="text-gold">*</span>
                </label>
                <textarea
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your needs..."
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-white border-l-[3px] border-l-emerald-500 border border-emerald-100 rounded-r-xl">
                  <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                  <p className="text-[0.88rem] text-emerald-700">
                    Message sent! I&apos;ll get back to you shortly.
                  </p>
                </div>
              )}

              {status === 'error' && errorMsg && (
                <div className="flex items-center gap-3 p-4 bg-white border-l-[3px] border-l-red-400 border border-red-100 rounded-r-xl">
                  <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                  <p className="text-[0.88rem] text-red-600">{errorMsg}</p>
                </div>
              )}

              <div
                role="button"
                tabIndex={0}
                onClick={handleSubmit}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                className={`w-full py-3.5 bg-navy text-white font-display font-bold text-[0.95rem] rounded-xl text-center cursor-pointer hover:bg-navy-ink transition-colors ${
                  status === 'loading' ? 'opacity-60 pointer-events-none' : ''
                }`}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message →'}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
