import SkillBox from "./SkillsBox"

import {
  SiGo,
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiCplusplus,
  SiExpress,
} from "react-icons/si"

function SkillsPage() {
  return (
    <section className="min-h-full flex items-center justify-center text-white">
      <div className="w-full max-w-4xl px-12 py-10 space-y-10">
        <h2 className="text-3xl font-bold text-center">
          Skills
        </h2>

        {/* Languages */}
        <SkillGroup title="Languages">
          <SkillBox skill={{ name: "Go", icon: <SiGo /> }} />
          <SkillBox skill={{ name: "TypeScript", icon: <SiTypescript /> }} />
          <SkillBox skill={{ name: "C / C++", icon: <SiCplusplus /> }} />
        </SkillGroup>

        {/* Backend & Web */}
        <SkillGroup title="Backend & Web">
          <SkillBox skill={{ name: "gRPC" }} />
          <SkillBox skill={{ name: "Gin" }} />
          <SkillBox skill={{ name: "PostgreSQL", icon: <SiPostgresql /> }} />
          <SkillBox skill={{ name: "REST APIs" }} />
          <SkillBox skill={{ name: "WebSockets" }} />
          <SkillBox skill={{ name: "React", icon: <SiReact /> }} />
          <SkillBox skill={{ name: "Express.js", icon: <SiExpress /> }} />
        </SkillGroup>

        {/* Systems */}
        <SkillGroup title="Systems">
          <SkillBox skill={{ name: "Linux", icon: <SiLinux /> }} />
          <SkillBox skill={{ name: "Docker", icon: <SiDocker /> }} />
          <SkillBox skill={{ name: "Concurrency" }} />
          <SkillBox skill={{ name: "Networking" }} />
          <SkillBox skill={{ name: "POSIX Threads" }} />
        </SkillGroup>
      </div>
    </section>
  )
}


function SkillGroup(props: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs uppercase tracking-widest text-white/50">
        {props.title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {props.children}
      </div>
    </div>
  )
}

export default SkillsPage
