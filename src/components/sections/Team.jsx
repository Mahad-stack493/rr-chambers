import { TEAM } from '@/data/about.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import './Team.css'

const initials = (name) =>
  name
    .replace(/^Adv\.\s*/, '')
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

function Team() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind *the practice*"
          subtitle="A dedicated team of legal professionals committed to your success."
          split
        />
        <div className="team">
          {TEAM.map((member, index) => (
            <Reveal as="article" key={member.name} className="member" delay={index * 100}>
              <div className="member__portrait">
                <span>{initials(member.name)}</span>
              </div>
              <span className="member__role">{member.role}</span>
              <h3 className="member__name">{member.name}</h3>
              <p className="member__expertise">{member.expertise}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
