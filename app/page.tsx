export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Ahaan Singh</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#skills" className="hover:text-gray-300">Skills</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
          
          {/* Mobile menu button - we'll add functionality later */}
          <button className="md:hidden">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>
      {/* Hero Section */}
<section className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-20 px-4 text-center">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Ahaan Singh</h1>
    <p className="text-xl md:text-2xl mb-8">Computer Science Student</p>
    <a 
      href="#projects" 
      className="inline-block bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
    >
      View My Projects
    </a>
  </div>
</section>

{/* About Section */}
<section id="about" className="py-12 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
    <div className="text-white text-lg leading-relaxed space-y-4">
      <p>
        I'm a passionate computer science student with a love for problem-solving 
        and creating innovative software solutions. My interests span from web 
        development to machine learning.
      </p>
      <p>
        Currently pursuing my degree at the University of Massachusetts Amherst and constantly learning new technologies to expand my skillset.
      </p>
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">My Projects</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Project Card 1 - UHitch */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
        <img 
          src="/images/uhitchss.png" 
          alt="UHitch project screenshot" 
          className="h-48 w-full object-cover"
          style={{ objectPosition: '0% 30%' }}
          />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">UHitch</h3>
          <p className="text-gray-600 mb-4">
            Full stack (MERN) web application for students within the community to organize rideshares to and from campus. Built with safety, privacy, and user authentication in mind.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MERN</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ahaan0502/UHitch" className="text-blue-600 hover:text-blue-800 font-semibold">GitHub →</a>
          </div>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
        <img 
          src="/images/suburbiafilmsss.png" 
          alt="Suburbia Films project screenshot" 
          className="h-48 w-full object-cover"
          style={{ objectPosition: '0% 10%' }}
          />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Suburbia Films Website</h3>
          <p className="text-gray-600 mb-4">
            Front-end showcase website for Suburbia Films' projects built using React and CSS. Features embedded videos, dyanmic galleries, and contact options.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ahaan0502/Suburbia-Films-Website" className="text-blue-600 hover:text-blue-800 font-semibold">GitHub →</a>
          </div>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Chess Game</h3>
          <p className="text-gray-600 mb-4">
            A simple chess game created using Python, Tkinter GUI framework, and MySQL. Has tracking for user profiles, game history, and player rankings.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">SQL</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ahaan0502/Chess-Game" className="text-blue-600 hover:text-blue-800 font-semibold">GitHub →</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-python-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">Python</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-java-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">Java</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-javascript-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">JavaScript</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-typescript-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">TypeScript</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-react-original colored text-5xl mb-2"></i>
        <h3 className="font-semibold">React</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-nextjs-plain text-5xl mb-2"></i>
        <h3 className="font-semibold">Next.js</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-nodejs-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">Node.js</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-mongodb-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">MongoDB</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-git-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">Git</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-docker-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">Docker</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-mysql-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">MySQL</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-900">
        <i className="devicon-tailwindcss-plain colored text-5xl mb-2"></i>
        <h3 className="font-semibold">Tailwind CSS</h3>
      </div>

    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-12 px-4 bg-gray-50 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Get In Touch</h2>
    <p className="text-xl text-gray-600 mb-8">
      I'm always open to discussing new projects and opportunities.
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
      <a href="mailto:ahaan_singh@hotmail.com" className="text-gray-600 hover:text-gray-900 font-semibold">
        📧 Email
      </a>
      <a href="https://github.com/ahaan0502" className="text-gray-600 hover:text-gray-900 font-semibold">
        🔗 GitHub
      </a>
      <a href="https://www.linkedin.com/in/ahaansingh/" className="text-gray-600 hover:text-gray-900 font-semibold">
        💼 LinkedIn
      </a>
      <a href="https://drive.google.com/file/d/1L2coTV_cJhnmNuvqr8DzAkXGymkHd2v2/view?usp=sharing" className="text-gray-600 hover:text-gray-900 font-semibold">
        📄 Resume
      </a>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-800 text-white py-8 px-4 text-center">
  <p>&copy; 2026 Ahaan Singh. All rights reserved.</p>
</footer>
    </main>
  )
}