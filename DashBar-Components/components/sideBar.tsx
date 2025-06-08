export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <div className="relative bg-side-nav-bg w-[260px] border-r border-side-nav-stroke z-50">
          <aside className="fixed flex flex-col justify-between h-screen px-6 pt-6 pb-4 overflow-hidden w-[260px]">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <div
                className="relative w-[400px] h-full overflow-hidden"
                style={{
                  background:
                    'linear-gradient(40deg, var(--gradient-background-start), var(--gradient-background-end))',
                  display: 'var(--bg-gradient-display)',
                }}
              >
                <svg className="hidden">
                  <defs>
                    <filter id="blurMe">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                        result="goo"
                      />
                      <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                  </defs>
                </svg>
                <div className="gradients-container blur-lg h-full w-full">
                  <div
                    className="absolute animate-first opacity-100 blur-3xl left-1/2 top-1/2 origin-center"
                    style={{
                      animationDuration: '40s',
                      background: 'radial-gradient(circle, rgb(18, 113, 255) 0px, rgba(18, 113, 255, 0) 50%)',
                      filter: 'blur(64px)',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      height: 'var(--size)',
                    }}
                  ></div>
                  {/* Add other animated divs similarly */}
                </div>
              </div>
            </div>
  
            {/* Logo */}
            <div className="flex-none mb-8">
              <a href="/dashboard/resumes">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="w-[90px] h-[43px]"
                />
              </a>
              <button className="bg-rezi-blue-600 hover:bg-rezi-blue-500 text-white w-full mt-4 py-2.5 rounded-md text-sm font-bold uppercase">
                Create new resume
              </button>
            </div>
  
            {/* Navigation */}
            <nav className="flex flex-col gap-y-4 grow overflow-y-auto">
              <a href="/dashboard/resumes" className="nav-item">
                <i className="fad fa-file text-xl" /> My dashboard
              </a>
              <a href="/dashboard/job-search" className="nav-item">
                <i className="fad fa-file-heart text-xl" /> Job search
              </a>
              <a href="/dashboard/samples" className="nav-item">
                <i className="fad fa-file-lines text-xl" /> Sample Library
              </a>
              <a href="/dashboard/review/new" className="nav-item active">
                <i className="fad fa-file-check text-xl" /> Review my resume
              </a>
              <a href="/dashboard/interviews" className="nav-item">
                <i className="fad fa-file-waveform text-xl" /> AI Interview
              </a>
              <a
                href="https://www.rezi.ai/community/browse"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item"
              >
                <i className="fa-lightbulb-message text-xl" /> Talk to other users
              </a>
            </nav>
  
            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <span className="text-yellow-400 font-bold text-base">Get Hired Fast</span>
                <p className="text-sm text-side-nav-label">Unlock All features</p>
              </div>
              <button className="bg-rezi-blue-600 hover:bg-rezi-blue-500 text-white px-3 py-2.5 rounded-md text-sm font-bold uppercase">
                Upgrade
              </button>
            </div>
          </aside>
        </div>
  
        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          {children}
        </main>
      </div>
    );
  }
  