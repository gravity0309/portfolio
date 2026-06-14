import { achievements } from '../data/portfolio'

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/50">
            Achievements
          </p>

          <h2 className="text-4xl font-semibold">
            Leadership & Recognition
          </h2>
        </div>

        <div className="grid gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-2xl border border-white/10 p-6 transition hover:border-white/30"
            >
              <h3 className="text-xl font-medium">
                {achievement.title}
              </h3>

              <p className="mt-3 text-white/70">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}