import { useState } from "react"
import ProjectBox from "./projectBox"

const projects = [
  {
    id: "filenest",
    name: "FileNest",
    description:
      "Cloud file storage application with virtual file organization and sharing abilities.",
    details:
      "Designed a backend service in Go providing a virtual file system layer on top of S3-compatible object storage.\n" +
      "Implemented Google OAuth login and JWT-based authentication.\n" +
      "Integrated AWS S3 for file storage and PostgreSQL for metadata management.\n" +
      "Built a React frontend for file browsing and uploads.",
    tech: ["Go", "Gin", "S3", "JWT", "TypeScript", "React", "PostgreSQL"],
    github: "https://github.com/Ahmed-Armaan/FileNest",
    liveDemo: "https://file-nest-six.vercel.app/",
  },
  {
    id: "leetbattle",
    name: "LeetBattle",
    description:
      "Real-time multiplayer coding game (based on leetcode) with live state synchronization.",
    details:
      "Designed a real-time, team-based coding game built around solving LeetCode-style problems.\n" +
      "Implemented a pseudo-API layer to interact with LeetCode data and problem formats.\n" +
      "Built deterministic game state synchronization logic to maintain consistency across players.\n" +
      "Enabled real-time gameplay and communication using WebSockets.\n" +
      "Used PostgreSQL for match history and persistence, with a React frontend for the game UI.",
    tech: ["Go", "WebSockets", "TypeScript", "React", "PostgreSQL"],
    github: "https://github.com/Ahmed-Armaan/LeetBattle",
    liveDemo: "https://leet-battle-two.vercel.app/",
  },
  {
    id: "tunneled",
    name: "Tunneled",
    description:
      "Reverse tunneling and proxy system for exposing local TCP/HTTP services.",
    details:
      "Built a reverse proxy system capable of forwarding HTTP and raw TCP traffic.\n" +
      "Defined gRPC services and Protocol Buffer schemas to manage connected clients and route requests.\n" +
      "Designed a multithreaded architecture to handle concurrent connections and improve request throughput.\n" +
      "Implemented connection lifecycle management and request forwarding logic.\n" +
      "Used MySQL for logging and metrics, with a React-based dashboard for visualization.",
    tech: ["Go", "gRPC", "Protocol Buffers", "Gin", "mySQL", "Networking", "Dockers"],
    github: "https://github.com/Ahmed-Armaan/Tunneled",
  },
  {
    id: "gorrent",
    name: "Gorrent",
    description:
      "BitTorrent client implementing core peer-to-peer protocol features.",
    details:
      "Implemented a BitTorrent client supporting core peer-to-peer protocol features.\n" +
      "Parsed torrent metadata and handled peer communication using protocol-compliant message formats.\n" +
      "Designed piece request, choke/unchoke, and peer selection logic.\n" +
      "Implemented concurrent downloading from multiple peers to improve throughput.\n" +
      "Focused on protocol correctness, concurrency handling, and efficient network I/O.",
    tech: ["Go", "Networking", "Concurrency"],
    github: "https://github.com/Ahmed-Armaan/gorrent_cli",
  },
]

function ProjectPage() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="min-h-full flex items-center justify-center text-white">
      <div className="w-full max-w-4xl px-12 py-10 space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Things I have built
        </h2>

        <div className="space-y-3">
          {projects.map((project) => (
            <ProjectBox
              key={project.id}
              project={project}
              isActive={activeId === project.id}
              onClick={() =>
                setActiveId(
                  activeId === project.id ? null : project.id
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectPage
