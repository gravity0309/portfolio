import { Card } from './Card'

type SkillCardProps = {
  category: string
  items: readonly string[]
}

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <Card>
      <h3 className="text-lg font-medium text-white">{category}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/70">
            {item}
          </span>
        ))}
      </div>
    </Card>
  )
}