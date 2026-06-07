export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
          Portfolio
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          James Michael Siton
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          A 3rd-year Information Technology student from Cebu Institute of
          Technology - University, passionate about UI/UX design, frontend
          development, backend systems, and game development.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-white"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-black px-6 py-3"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}