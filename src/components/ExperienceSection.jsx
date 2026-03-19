const experiences = [
  {
    role: 'IT Project and Assessment Assistant',
    company: 'University of Waterloo School of Pharmacy',
    period: 'jan 2026 - apr 2026',
    summary:
      'Provided IT support to faculty, staff, and students, troubleshooting hardware, software, network, and AV issues while managing service tickets. \n Assisted with program assessments by developing surveys, analyzing data, preparing visual reports, and providing on-site technical support during exams and review processes. \n Microsoft 365, Teams, Webex, Zoom, LEARN, and ExamSoft',
  },
  {
    role: 'Firmware Developer',
    company: 'Electrium Mobility',
    period: 'sept 2025 - present',
    summary:
      'Developed firmware for Electrium Mobility e-bike project using VESC software, enhancing motor control and system reliability.\n Developed VESC software for electric human powered vehicle(EHPV).',
  },
  {
    role: 'President',
    company: 'Bloom & Seal, JA Company',
    period: 'oct 2024 - jun 2026',
    summary:
      'Presented and interviewed questions regarding the company to a crowd of over 1,000 people at the Business Laureates of BC Gala.\n Managed our social media, creating short-form content and posts and gaining over 2,000 views and attracting users towards our product.\n Organized and motivated a team to work together to make our business a success.\n Learned HTML and CSS to create a website for the company (<a href="https://bloom-seal.netlify.app/">).\n Finalist of CIBC Company of the Year Award 2025',
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6 rounded-2xl border border-[#AEC5EB] bg-[#F9DEC9] p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#3A405A]">Experience</h2>
          <p className="mt-2 text-[#685044]">Use this section to highlight internships, leadership, or research experience.</p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center rounded-lg bg-[#3A405A] px-5 py-2.5 text-sm font-medium text-[#F9DEC9] transition hover:bg-[#685044]"
        >
          Download Resume (PDF)
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((experience) => (
          <article key={`${experience.role}-${experience.company}`} className="rounded-xl border border-[#E9AFA3] bg-[#F9DEC9] p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-[#685044]">{experience.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-[#3A405A]">{experience.role}</h3>
            <p className="text-sm text-[#685044]">{experience.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#685044]">{experience.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
