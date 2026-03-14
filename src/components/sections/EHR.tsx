import React from 'react'
import { ehrLogos } from '@/data/ehrLogos'

function EHR() {
  return (
    <section className="pt-2 pb-5 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Electronic Health Records (EHR) Systems We Support for <br /> <span>Medical Billing Services</span>
          </h2>
        </div>

        {/* Infinite marquee of EHR logos */}
        <div className="relative mx-auto max-w-6xl overflow-hidden py-4 rounded-2xl">
          {/* Subtle blur/fade gradient effects on edges - wider and smoother with rounded corners */}
          <div 
            className="pointer-events-none absolute inset-y-0 left-0 w-48 z-10 rounded-l-2xl"
            style={{
              background: 'linear-gradient(to right, hsl(var(--muted) / 0.25) 0%, hsl(var(--muted) / 0.15) 25%, hsl(var(--muted) / 0.08) 50%, hsl(var(--muted) / 0.03) 75%, transparent 100%)',
              backdropFilter: 'blur(1px)',
            }}
          />
          <div 
            className="pointer-events-none absolute inset-y-0 right-0 w-48 z-10 rounded-r-2xl"
            style={{
              background: 'linear-gradient(to left, hsl(var(--muted) / 0.25) 0%, hsl(var(--muted) / 0.15) 25%, hsl(var(--muted) / 0.08) 50%, hsl(var(--muted) / 0.03) 75%, transparent 100%)',
              backdropFilter: 'blur(1px)',
            }}
          />

          {/* Marquee container */}
          <div className="flex gap-12 md:gap-16 animate-marquee whitespace-nowrap">
            {/* Duplicate logos array for seamless infinite scroll */}
            {[...ehrLogos, ...ehrLogos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`EHR logo ${(i % ehrLogos.length) + 1}`}
                className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0 px-3"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EHR