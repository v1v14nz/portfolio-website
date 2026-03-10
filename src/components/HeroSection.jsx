import profilePic from '../assets/profile-pic.jpg'

function HeroSection() {
  return (
    <section className="grid items-center gap-8 rounded-2xl border border-sky-100 bg-white p-8 shadow-sm md:grid-cols-[1fr_220px] md:p-10">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">Portfolio Website</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Hi, I&apos;m Your Name. I do xyz.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Replace this with a short intro about who you are, what you work on, and what opportunities
          you are looking for.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          View Projects
        </a>
      </div>

      <img
        src={profilePic}
        alt="Profile"
        className="mx-auto h-44 w-44 rounded-full border-2 border-sky-200 object-cover"
      />
    </section>
  )
}

export default HeroSection
