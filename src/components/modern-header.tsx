"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Bell } from "lucide-react"

export function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <div className="absolute inset-0 bg-[#0a0a1f]/80 backdrop-blur-xl border-b border-[#2FEBE9]/20"></div>
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#EE29E8] to-[#2FEBE9] rounded-xl rotate-45 glow-logo"></div>
              <div className="absolute inset-2 bg-[#0a0a1f] rounded-lg -rotate-45"></div>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EE29E8] to-[#2FEBE9] glow-text">
              CYBER
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["ホーム", "記事", "カテゴリー", "お問い合わせ"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/90 hover:text-[#F0F085] transition-all duration-300 relative group py-2 glow-text-hover"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EE29E8] to-[#2FEBE9] transition-all duration-300 group-hover:w-full glow-line"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-white/70 hover:text-[#2FEBE9] transition-colors glow-icon-hover">
              <Search size={20} />
            </button>
            <button className="p-2 text-white/70 hover:text-[#2FEBE9] transition-colors glow-icon-hover">
              <Bell size={20} />
            </button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a1f]/95 backdrop-blur-xl border-b border-[#2FEBE9]/20">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {["ホーム", "記事", "カテゴリー", "お問い合わせ"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-white/90 hover:text-[#F0F085] transition-colors py-3 border-b border-[#2FEBE9]/10 last:border-b-0 glow-text-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
