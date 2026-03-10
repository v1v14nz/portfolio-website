function Header() {
  return (
    <header className="border-b border-sky-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <p className="text-sm font-semibold tracking-wide">YOUR NAME</p>
        <ul className="flex gap-6 text-sm text-slate-600">
          <li>
            <a href="#about" className="hover:text-blue-700">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-700">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
