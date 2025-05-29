import Link from "next/link"
import { Cpu, Shield, Brain, Users, Code, TrendingUp } from "lucide-react"

export function ModernSidebar() {
  const categories = [
    { name: "AI & Machine Learning", icon: <Brain className="w-5 h-5" />, count: 12 },
    { name: "サイバーセキュリティ", icon: <Shield className="w-5 h-5" />, count: 8 },
    { name: "Web3 & Blockchain", icon: <Code className="w-5 h-5" />, count: 15 },
    { name: "IoT & Hardware", icon: <Cpu className="w-5 h-5" />, count: 6 },
    { name: "デジタルカルチャー", icon: <Users className="w-5 h-5" />, count: 9 },
  ]

  const trendingTags = ["#AI", "#Blockchain", "#Cyberpunk", "#VR", "#IoT", "#Security"]

  return (
    <aside className="space-y-6">
      {/* Categories */}
      <div className="bg-[#0a0a1f]/50 backdrop-blur-xl border border-[#2FEBE9]/20 rounded-2xl p-6 glow-card">
        <h2 className="text-xl font-bold text-[#F0F085] mb-6 flex items-center gap-2 glow-yellow">
          <TrendingUp className="w-5 h-5" />
          カテゴリー
        </h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href="#"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#2FEBE9] group-hover:text-[#F0F085] transition-colors glow-icon">
                    {category.icon}
                  </span>
                  <span className="text-white/90 group-hover:text-[#F0F085] transition-colors text-sm">
                    {category.name}
                  </span>
                </div>
                <span className="text-xs text-[#2FEBE9]/70 bg-[#2FEBE9]/10 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Trending Tags */}
      <div className="bg-[#0a0a1f]/50 backdrop-blur-xl border border-[#2FEBE9]/20 rounded-2xl p-6 glow-card">
        <h3 className="text-lg font-bold text-[#F0F085] mb-4 glow-yellow">トレンドタグ</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <Link
              key={tag}
              href="#"
              className="px-3 py-2 text-sm bg-gradient-to-r from-[#2C47D9]/30 to-[#EE29E8]/30 border border-[#2FEBE9]/30 rounded-full hover:from-[#EE29E8]/40 hover:to-[#2FEBE9]/40 transition-all duration-300 text-white/90 hover:text-white glow-tag"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-[#EE29E8]/10 to-[#2FEBE9]/10 backdrop-blur-xl border border-[#2FEBE9]/20 rounded-2xl p-6 glow-card">
        <h3 className="text-lg font-bold text-[#F0F085] mb-3 glow-yellow">ニュースレター</h3>
        <p className="text-white/70 text-sm mb-4">最新のサイバーパンク記事をお届け</p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="メールアドレス"
            className="w-full px-4 py-3 bg-[#0a0a1f]/70 border border-[#2FEBE9]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE29E8]/50 text-white placeholder-white/50"
          />
          <button className="w-full px-4 py-3 bg-gradient-to-r from-[#EE29E8] to-[#2FEBE9] rounded-xl hover:from-[#EE29E8]/80 hover:to-[#2FEBE9]/80 transition-all duration-300 font-medium glow-button">
            登録する
          </button>
        </div>
      </div>
    </aside>
  )
}
