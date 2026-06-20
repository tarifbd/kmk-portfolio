'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle, AlertCircle, Mail, MapPin, Globe } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';
import { submitContact } from '@/lib/api';
import type { ContactFormData } from '@/types';

const serviceGroups = [
  { label: 'Finance & Compliance', options: ['Accounting Advisory', 'Income Tax Compliance (ITP)', 'VAT Compliance', 'Customs Compliance', 'Corporate Regulatory Compliance', 'Internal Control & Audit Support', 'Financial Analysis & Advisory'] },
  { label: 'Business × Technology (Blended)', options: ['Accounting Process Automation', 'Finance Dashboard Development', 'Digital Tax & VAT Tools', 'AI-assisted Financial Analysis', 'ERP & Accounting System Advisory', 'Business Process Digitization'] },
  { label: 'IT & Digital Solutions', options: ['Web Design & Development', 'App Development', 'SaaS Product Development', 'Digital Marketing', 'Business Automation & Integration'] },
];

const field =
  'w-full bg-transparent border-0 border-b border-line py-3 text-[0.95rem] text-ink2 focus:outline-none focus:border-gold transition-colors placeholder:text-light';
const labelCls = 'font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted';

const contactItems = [
  { icon: Mail, text: 'khadimul@inception23.com' },
  { icon: MapPin, text: 'Dhaka, Bangladesh' },
  { icon: Globe, text: 'Available for remote advisory' },
];

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', organization: '', service: '', message: '' });
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
    <section id="contact" className="section-pad bg-paper">
      <div className="container-x">
        <SectionHeader
          index="11"
          label="Get In Touch"
          accent="gold"
          title={[
            <>
              Let&apos;s discuss your{' '}
              <span className="italic text-gold">needs.</span>
            </>,
          ]}
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <RevealOnView className="lg:col-span-5" delay={0.05}>
            <p className="max-w-md text-[0.98rem] leading-[1.85] text-smoke">
              Need support with accounting, tax, VAT, compliance — or a system to
              automate it? Send a note and I&apos;ll get back to you promptly.
            </p>
            <div className="mt-10 space-y-4">
              {contactItems.map((c) => (
                <div key={c.text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/60 text-gold">
                    <c.icon size={16} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-[0.74rem] tracking-[0.04em] text-smoke">
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnView>

          <RevealOnView className="lg:col-span-7" delay={0.12}>
            <div className="glass rounded-3xl p-7 md:p-9">
              <div className="space-y-7">
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <div>
                    <label className={labelCls} htmlFor="c-name">Full Name *</label>
                    <input id="c-name" type="text" className={field} placeholder="Your name" value={form.name} onChange={(e) => update('name', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="c-email">Email Address *</label>
                    <input id="c-email" type="email" className={field} placeholder="your@email.com" value={form.email} onChange={(e) => update('email', e.target.value)} />
                  </div>
                </div>

                <div>
                  <label className={labelCls} htmlFor="c-org">Organization</label>
                  <input id="c-org" type="text" className={field} placeholder="Optional" value={form.organization} onChange={(e) => update('organization', e.target.value)} />
                </div>

                <div>
                  <label className={labelCls} htmlFor="c-service">Service Required</label>
                  <select id="c-service" className={`${field} cursor-pointer`} value={form.service} onChange={(e) => update('service', e.target.value)}>
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
                  <label className={labelCls} htmlFor="c-message">Message *</label>
                  <textarea id="c-message" rows={4} className={`${field} resize-none`} placeholder="Tell me about your needs…" value={form.message} onChange={(e) => update('message', e.target.value)} />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 rounded-xl border-l-2 border-emerald-500 bg-emerald-50 px-4 py-3 text-[0.86rem] text-emerald-700">
                    <CheckCircle size={16} /> Message sent — I&apos;ll be in touch shortly.
                  </div>
                )}
                {status === 'error' && errorMsg && (
                  <div className="flex items-center gap-3 rounded-xl border-l-2 border-red-500 bg-red-50 px-4 py-3 text-[0.86rem] text-red-600">
                    <AlertCircle size={16} /> {errorMsg}
                  </div>
                )}

                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleSubmit}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSubmit()}
                  className={`btn-primary w-full sm:w-auto ${status === 'loading' ? 'pointer-events-none opacity-50' : ''}`}
                >
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                  <ArrowUpRight size={16} strokeWidth={1.8} />
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
