import { GlitchText1 } from "@/components/glitch/GlitchText1";
import { BaseSidebar } from "@/components/sidebar/BaseSidebar";
import { FeaturedCard } from "@/components/card/FeaturedCard";
import { CyberBg } from "@/components/background/CyberBg";
import { BaseCard } from "@/components/card/BaseCard";
import { BaseHeader } from "@/components/header/BaseHeader";

export default function Home() {
  const featuredPost = {
    id: 1,
    title: "サイバーパンクの世界",
    excerpt:
      "未来都市の暗い路地と輝くネオンの世界を探索する。テクノロジーと人間性が交差する場所で、新しい物語が始まる。",
    date: "2025-05-15",
    author: "ネオ・ハッカー",
    image: "/placeholder.svg?height=400&width=800",
    readTime: "5分",
  };

  const posts = [
    {
      id: 2,
      title: "AIと人間の共存",
      excerpt: "テクノロジーと人間性の境界線が曖昧になる未来について",
      date: "2025-05-10",
      author: "デジタル・ドリーマー",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "3分",
    },
    {
      id: 3,
      title: "ハッキングの芸術",
      excerpt: "デジタル世界での創造性とセキュリティの駆け引き",
      date: "2025-05-05",
      author: "コード・ランナー",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "7分",
    },
    {
      id: 4,
      title: "メタバースの可能性",
      excerpt: "仮想現実が現実を超える瞬間",
      date: "2025-05-01",
      author: "VR・エクスプローラー",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "4分",
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0a0a1f] via-[#12123e] to-[#0a0a1f] text-white relative overflow-hidden'>
      {/* サイバーシティの背景 */}
      <div className='fixed inset-0 z-0'>
        <CyberBg />
      </div>

      {/* グリッドオーバーレイ */}
      <div className='absolute inset-0 bg-grid-overlay opacity-10 z-0'></div>

      {/* スキャンライン */}
      <div className='absolute inset-0 bg-scanlines opacity-[0.03] z-0 pointer-events-none'></div>

      <BaseHeader />

      <div className='relative z-10 pt-8'>
        <div className='container mx-auto px-4 py-12'>
          <div className='text-center mb-16 relative'>
            {/* ネオングロー効果 */}
            <div className='absolute -top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-[#EE29E8]/20 rounded-full blur-[100px] z-0'></div>

            <div className='relative z-10'>
              <GlitchText1 text='CYBER BLOG' className='text-5xl md:text-7xl font-bold mb-6' />
              <p className='text-xl text-[#2FEBE9] max-w-2xl mx-auto leading-relaxed glow-cyan'>
                未来からの視点で現在を語る、サイバーパンクな世界へようこそ
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            <div className='lg:col-span-3 space-y-12'>
              <FeaturedCard post={featuredPost} />

              <div>
                <h2 className='text-2xl font-bold text-[#F0F085] mb-8 flex items-center gap-3 glow-yellow'>
                  <div className='w-1 h-8 bg-gradient-to-b from-[#EE29E8] to-[#2FEBE9] glow-bar'></div>
                  最新記事
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                  {posts.map((post) => (
                    <BaseCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </div>

            <BaseSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
