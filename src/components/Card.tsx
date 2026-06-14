import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLElement>

export function Card({ className = '', ...props }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] ${className}`}
      {...props}
    />
  )
}