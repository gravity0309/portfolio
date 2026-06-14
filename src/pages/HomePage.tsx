import { AboutSection } from '../sections/AboutSection'
import { AchievementsSection } from '../sections/AchievementsSection'
import { CertificationsSection } from '../sections/CertificationsSection'
import { ContactSection } from '../sections/ContactSection'
import { EducationSection } from '../sections/EducationSection'
import { HeroSection } from '../sections/HeroSection'
import { ProjectsSection } from '../sections/ProjectsSection'
import { ResumeSection } from '../sections/ResumeSection'
import { SkillsSection } from '../sections/SkillsSection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  )
}