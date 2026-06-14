type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.32em] text-white/50">{eyebrow}</p> : null}
      <h2 className="text-3xl font-medium text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-sm leading-7 text-white/65 sm:text-base">{description}</p> : null}
    </div>
  )
}
