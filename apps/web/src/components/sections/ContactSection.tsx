'use client';

import { useState } from 'react';
import { ArrowDownRight, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import { submitContact } from '@/lib/api';
import type { ContactFormData } from '@/types';

const serviceGroups = [
  { label: 'Finance & Compliance', options: ['Accounting Advisory', 'Income Tax Compliance (ITP)', 'VAT Compliance', 'Customs Compliance', 'Corporate Regulatory Compliance', 'Internal Control & Audit Support', 'Financial Analysis & Advisory'] },
  { label: 'Business × Technology (Blended)', options: ['Accounting Process Automation', 'Finance Dashboard Development', 'Digital Tax & VAT Tools', 'AI-assisted Financial Analysis', 'ERP & Accounting System Advisory', 'Business Process Digitization'] },
  { label: 'IT & Digital Solutions', options: ['Web Design & Development', 'App Development', 'SaaS Product Development', 'Digital Marketing', 'Business Automation & Integration'] },
];

const field =
  'w-full bg-transparent border-0 border-b border-line py-3 text-[0.95rem] text-ink2 focus:outline-none focus:border-ink2 transition-colors placeholder:text-light';

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', organization: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (k: keyof ContactFormData, v: string) => setForm((f) => ({ ...f, [k]: v }));

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
    <section id="contact" className="section-pad bg-paper">
      <div className="container-x">
        <AnimatedSection>
          <SectionLabel index="10">Get In Touch</SectionLabel>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12">
          <AnimatedSection className="lg:col-span-5" delay={0.05}>
            <h2 className="display-lg text-ink2 mb-8">
              Let&apos;s discuss your <span className="italic text-gold">needs.</span>
            </h2>
            <p className="text-[0.98rem] text-smoke leading-[1.85] max-w-md mb-10">
              Need support with accounting, tax, VAT, compliance, or business
              automation? Send a note and I&apos;ll get back to you promptly.
            </p>
            <div className="space-y-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
              <p>khadimul@inception23.com</p>
              <p>Dhaka, Bangladesh</p>
              <p>Available for remote advisory</p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7" delay={0.12}>
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">Full Name *</label>
                  <input type="text" className={field} placeholder="Your name" value={form.name} onChange={(e) => update('name', e.target.value)} />
                </div>
                <div>
                  <label className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">Email Address *</label>
                  <input type="email" className={field} placeholder="your@email.com" value={form.email} onChange={(e) => update('email', e.target.value)} />
                </div>
              </div>

              <div>
                <label className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">Organization</label>
                <input type="text" className={field} placeholder="Optional" value={form.organization} onChange={(e) => update('organization', e.target.value)} />
              </div>

              <div>
                <label className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">Service Required</label>
                <select className={`${field} cursor-pointer`} value={form.service} onChange={(e) => update('service', e.target.value)}>
                  <option value="">Select a service…</option>
                  {serviceGroups.map((g) => (
                    <optgroup key={g.label} label={g.label}>
                      {g.options.map((o) => (<option key={o} value={o}>{o}</option>))}
                    </optgroup>
                  ))}
                  <option value="Other / General Inquiry">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">Message *</label>
                <textarea rows={4} className={`${field} resize-none`} placeholder="Tell me about your needs…" value={form.message} onChange={(e) => update('message', e.target.value)} />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 text-[0.88rem] text-emerald-700">
                  <CheckCircle size={16} /> Message sent — I&apos;ll be in touch shortly.
                </div>
              )}
              {status === 'error' && errorMsg && (
                <div className="flex items-center gap-3 text-[0.88rem] text-red-600">
                  <AlertCircle size={16} /> {errorMsg}
                </div>
              )}

              <div
                role="button"
                tabIndex={0}
                onClick={handleSubmit}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                className={`arrow-link text-[0.95rem] cursor-pointer ${status === 'loading' ? 'opacity-50 pointer-events-none' : ''}`}
              >
                {status === 'loading' ? 'Sending…' : 'Send message'}
                <ArrowDownRight size={16} strokeWidth={1.6} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
