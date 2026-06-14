import { Card } from './Card'

type ResumePreviewProps = {
  name: string
  title: string
}

export function ResumePreview({ name, title }: ResumePreviewProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">Preview</p>
          <h3 className="text-2xl font-medium text-white">{name}</h3>
          <p className="text-sm text-white/60">{title}</p>
        </div>

        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/60 p-4 text-sm text-white/70">
          <div className="flex items-center justify-between gap-3">
            <span>Focus</span>
            <span>Full-Stack + AI</span>
          </div>
          <div className="h-px bg-white/10" />
          <div className="flex items-center justify-between gap-3">
            <span>Specialty</span>
            <span>RAG Systems</span>
          </div>
          <div className="h-px bg-white/10" />
          <div className="flex items-center justify-between gap-3">
            <span>Availability</span>
            <span>Internship Ready</span>
          </div>
        </div>
      </div>

      <a
        href="/resume.pdf"
        download="Sakshi_Kumari_Resume.pdf"
        className="mt-6 inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black"
      >
        Download Resume
      </a>
    </Card>
  )
}