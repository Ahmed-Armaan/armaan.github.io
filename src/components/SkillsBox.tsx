import type { ReactNode } from "react"

type Skill = {
  name: string
  icon: ReactNode
}

function SkillBox(props: { skill: Skill }) {
  const { skill } = props

  return (
    <div
      className="
        border border-white/20
        px-4 py-3
        flex items-center gap-3
        text-white
      "
    >
      <span className="text-xl text-white/80">
        {skill.icon}
      </span>
      <span className="text-sm font-medium">
        {skill.name}
      </span>
    </div>
  )
}

export default SkillBox
