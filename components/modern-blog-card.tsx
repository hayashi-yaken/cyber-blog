import Link from "next/link"
import Image from "next/image"
import { Clock, User } from "lucide-react"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  readTime: string
}

interface ModernBlogCardProps {
  post: Post
}

export function ModernBlogCard({ post }: ModernBlogCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <article className="group bg-[#0a0a1f]/50 backdrop-blur-xl border border-[#2FEBE9]/20 rounded-2xl overflow-hidden hover:bg-[#0a0a1f]/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#EE29E8]/20 glow-card">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-transparent to-transparent"></div>
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#EE29E8]/20 backdrop-blur-sm border border-[#EE29E8]/30 rounded-full text-xs text-[#EE29E8] font-medium glow-pink">
              NEW
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-[#2FEBE9]/70 mb-3">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#F0F085] transition-colors line-clamp-2 glow-text-hover">
            {post.title}
          </h3>

          <p className="text-sm text-white/70 mb-4 line-clamp-2">{post.excerpt}</p>

          <div className="flex justify-between items-center">
            <span className="text-xs text-[#2FEBE9]/70">{post.date}</span>
            <span className="text-[#2FEBE9] text-sm group-hover:text-[#F0F085] transition-colors font-medium glow-text-hover">
              続きを読む →
            </span>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2FEBE9]/50 to-transparent group-hover:via-[#EE29E8] transition-all duration-500 glow-line"></div>
      </article>
    </Link>
  )
}
