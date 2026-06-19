import { useState } from 'react'
import { Mail, Phone, Copy, Check } from 'lucide-react'
import { Github, Linkedin } from '../components/BrandIcons'
import { contact, profil } from '../data/site'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* presse-papier indisponible */
    }
  }

  const cards = [
    { icon: Linkedin, label: 'LinkedIn', value: 'mohamed-ridwan', href: contact.linkedin },
    { icon: Github, label: 'GitHub', value: 'RedOne777', href: contact.github },
  ]
  if (contact.afficherTelephone) {
    cards.push({ icon: Phone, label: 'Téléphone', value: contact.telephone, href: `tel:${contact.telephone.replace(/\s/g, '')}` })
  }

  return (
    <div className="container-px pt-32 pb-10">
      <section className="max-w-3xl">
        <span className="chip">Restons en contact</span>
        <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">Contact</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Une question sur mon parcours, mon alternance ou une opportunité ? Je serai ravi d'échanger.
        </p>
      </section>

      {/* Email en avant */}
      <Reveal className="mt-10">
        <div className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface-2 text-brand">
              <Mail size={22} />
            </span>
            <div>
              <p className="text-sm text-muted">Email</p>
              <a href={`mailto:${contact.email}`} className="font-display text-lg font-semibold text-ink link-underline">
                {contact.email}
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
            >
              {copied ? <Check size={16} className="text-c6" /> : <Copy size={16} />}
              {copied ? 'Copié' : 'Copier'}
            </button>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Mail size={16} /> Écrire
            </a>
          </div>
        </div>
      </Reveal>

      {/* Autres canaux */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="card group flex items-center gap-4 p-6 transition-all hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface-2 text-brand">
                <c.icon size={22} />
              </span>
              <div>
                <p className="text-sm text-muted">{c.label}</p>
                <p className="font-display text-lg font-semibold text-ink">{c.value}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        {profil.nomComplet} · {profil.titre}
      </p>
    </div>
  )
}
