import Link from "next/link"
import Image from "next/image"
import { Clock, User, ArrowRight } from "lucide-react"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  readTime: string
}

interface FeaturedPostProps {
  post: Post
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <article className="group relative bg-[#0a0a1f]/50 backdrop-blur-xl border border-[#2FEBE9]/20 rounded-3xl overflow-hidden hover:bg-[#0a0a1f]/70 transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#EE29E8]/20 glow-card-featured">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          <div className="relative overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1f]/60 via-transparent to-transparent lg:from-transparent lg:to-[#0a0a1f]/60"></div>
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-gradient-to-r from-[#EE29E8] to-[#2FEBE9] rounded-full text-sm font-bold text-white glow-gradient">
                FEATURED
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-6 text-sm text-[#2FEBE9]/70 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white group-hover:text-[#F0F085] transition-colors leading-tight glow-text-hover">
              {post.title}
            </h2>

            <p className="text-white/80 mb-8 text-lg leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <span className="text-[#2FEBE9]/70">{post.date}</span>
              <div className="flex items-center gap-2 text-[#2FEBE9] group-hover:text-[#F0F085] transition-colors font-medium glow-text-hover">
                <span>記事を読む</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EE29E8] via-[#2FEBE9] to-[#F0F085] opacity-60 group-hover:opacity-100 transition-opacity glow-line"></div>
      </article>
    </Link>
  )
}
