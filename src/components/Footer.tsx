export default function Footer() {
    return (
      <footer className="border-t border-gray-200 bg-white text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Studio JB. All rights reserved.</p>
          <div className="space-x-4 mt-2 sm:mt-0">
            <a href="https://github.com/Amjong" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:amjong2@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    )
  }
  