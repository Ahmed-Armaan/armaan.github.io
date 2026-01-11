type Project = {
  id: string
  name: string
  description: string
  details: string
  tech: string[]
  github: string
  liveDemo?: string
}

function ProjectBox(props: {
  project: Project
  isActive: boolean
  onClick: () => void
}) {
  const { project, isActive, onClick } = props

  return (
    <div
      onClick={onClick}
      className={`
        border border-white/20
        px-4 py-3
        cursor-pointer
        transition-colors
        ${isActive ? "bg-white/5" : "hover:bg-white/5"}
      `}
    >
      {/* Top row */}
      <div className="flex justify-between gap-6">
        {/* Left: name + description */}
        <div className="space-y-1">
          <h3 className="text-white font-medium leading-none text-xl">
            {project.name}
          </h3>

          <p className="text-sm text-white/70 leading-snug">
            {project.description}
          </p>
        </div>

        {/* Right: tech + links */}
        <div className="text-right text-sm text-white/60 whitespace-nowrap space-y-1">
          <div>{project.tech.join(" · ")}</div>

          <div className="flex justify-end gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="underline hover:text-white"
            >
              GitHub
            </a>

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="underline hover:text-white"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Expanded section */}
      {isActive && (
        <div className="mt-4 border-t border-white/10 pt-3 text-sm text-white/70">
          <div className="space-y-1.5 text-sm text-white/70">
            {project.details.split("\n").map((line, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-white/40">–</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectBox
