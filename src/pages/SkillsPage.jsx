import { useState, useEffect } from 'react'
import { mockSkills } from '../data/mockSkills'
import { useAuth } from '../context/AuthContext'
import SkillCard from '../components/dashboard/SkillCard'

export default function SkillsPage() {
  const { user } = useAuth()
  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('klawbi_skills')
    return saved ? JSON.parse(saved) : mockSkills
  })

  useEffect(() => {
    localStorage.setItem('klawbi_skills', JSON.stringify(skills))
  }, [skills])

  const toggleSkill = (id) => {
    setSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    )
  }

  const enabledCount = skills.filter((s) => s.enabled).length

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Skills Marketplace</h1>
        <p className="text-text-secondary text-sm mt-1">
          Toggle capabilities on and off. {enabledCount} of {skills.length} skills active.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            onToggle={toggleSkill}
            currentPlan={user?.plan || 'free'}
          />
        ))}
      </div>
    </div>
  )
}
