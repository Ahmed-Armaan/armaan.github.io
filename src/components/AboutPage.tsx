function AboutPage() {
  return (
    <section className="h-full flex items-center justify-center text-white">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Armaan Ahmed
        </h1>

        <p className="text-base text-white/80 leading-relaxed">
          Backend-focused full-stack developer building clean, reliable web
          applications, with a strong interest in system-level concepts that
          influence how I design and reason about software.
        </p>

        <p className="text-sm text-white/60">
          React · TypeScript · Go · PostgreSQL · C
        </p>

        <div className="pt-2">
          <a
            href="/Armaan_backend.pdf"
            target="_blank"
            className="inline-block text-sm text-white/70 border border-white/30 px-4 py-1.5 rounded-md hover:text-white hover:border-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
