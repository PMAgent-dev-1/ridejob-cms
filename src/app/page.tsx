import Image from "next/image"
import Link from "next/link"
import { Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBlogs, getCategories, getInterviewers, getLogos, getSliders } from "@/lib/microcms"
import { HeroSlider } from "@/components/HeroSlider"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default async function HomePage() {
  const blogsData = await getBlogs({ limit: 3, orders: "-publishedAt" });
  const categoriesData = await getCategories();
  const interviewersData = await getInterviewers();
  const logosData = await getLogos();
  const slidersData = await getSliders();
  const blogs = blogsData.contents;
  const categories = categoriesData.contents;
  const interviewers = interviewersData.contents;
  const logos = logosData.contents;
  const sliders = slidersData.contents;

  const companyInterviewCategory = categories.find(cat => cat.slug === 'company-interview');
  const companyInterviewBlogsData = companyInterviewCategory
    ? await getBlogs({
        limit: 3,
        filters: `category[equals]${companyInterviewCategory.id}`,
        orders: "-publishedAt",
      })
    : { contents: [] };
  const companyInterviewBlogs = companyInterviewBlogsData.contents;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                未経験でもわかる
                <br />
                ドライバー業界の魅力発信メディア
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ライドシェアやタクシー、トラック、バス等のドライバー業界に関する情報を発信するメディアです。
                業界の魅力や働き方、法制度、事業者の取り組みなど、幅広い情報をお届けします。
                未経験の方でもわかりやすく、業界の理解を深めていただけるコンテンツを提供しています。
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">RIDE</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">ドライバー業界</p>
                  <p className="text-sm text-gray-600">未経験者歓迎</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <HeroSlider sliders={sliders} />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12 opacity-60 flex-wrap">
            {logos.map((logo) => (
              <Image
                key={logo.id}
                src={logo.logo.url}
                alt={logo.company}
                width={100}
                height={40}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Corporate Interview Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Corporate Interview /<br />
                  企業取材
                </h2>
                <Link href="/category/company-interview">
                <Badge variant="secondary" className="bg-blue-100 text-blue-600">
                  All Articles
                </Badge>
                </Link>
              </div>
              {companyInterviewBlogs.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                  <Link href={`/blogs/${companyInterviewBlogs[0].slug}`}>
                <Card className="overflow-hidden">
                  <Image
                        src={companyInterviewBlogs[0].eyecatch?.url ?? "/placeholder.svg?height=200&width=300"}
                        alt={companyInterviewBlogs[0].title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-blue-600">企業取材</Badge>
                        <h3 className="font-semibold text-gray-900 mb-2">{companyInterviewBlogs[0].title}</h3>
                  </CardContent>
                </Card>
                  </Link>
                <div className="space-y-4">
                    {companyInterviewBlogs.slice(1).map((blog) => (
                      <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Image
                              src={blog.eyecatch?.url ?? "/placeholder.svg?height=60&width=60"}
                              alt={blog.title}
                        width={60}
                        height={60}
                        className="rounded"
                      />
                      <div>
                        <Badge className="mb-1 bg-blue-600 text-xs">企業取材</Badge>
                              <h4 className="text-sm font-semibold">{blog.title}</h4>
                      </div>
                    </div>
                  </Card>
                      </Link>
                    ))}
                    </div>
                </div>
              )}
            </section>

            {/* Latest Articles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Latest /<br />
                  最新記事
                </h2>
                <Link href="/blogs">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600">
                    All Articles
                  </Badge>
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {blogs.map((blog) => {
                  return (
                  <Card key={blog.id} className="overflow-hidden">
                      <Link href={`/blogs/${blog.slug}`}>
                      <Image
                        src={blog.eyecatch?.url ?? "/placeholder.svg?height=150&width=250"}
                        alt={blog.title}
                        width={250}
                        height={150}
                        className="w-full h-32 object-cover"
                      />
                      <CardContent className="p-4">
                        {blog.category && <Badge className="mb-2 bg-blue-600 text-xs">{blog.category.name}</Badge>}
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                          {blog.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{new Date(blog.publishedAt).toLocaleDateString()}</span>
                          <Badge variant="outline" className="text-xs">
                            詳細を見る
                          </Badge>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                  )
                })}
              </div>
            </section>

            {/* Category Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Category /<br />
                カテゴリー
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {categories.map((category) => (
                  <Link key={category.id} href={`/category/${category.slug}`}>
                    <Card className="relative overflow-hidden h-32 group">
                      <div className={`absolute inset-0 bg-blue-500 opacity-80 group-hover:opacity-90 transition-opacity`} />
                      <CardContent className="relative z-10 p-6 text-white">
                        <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                        <p className="text-sm opacity-90 mb-4">
                          {category.name}に関する記事一覧へ
                        </p>
                        <Button variant="secondary" size="sm" className="text-xs">
                          View More
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            {/* Interview Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Interviewer /<br />
                面談担当者
              </h2>
              <div className="space-y-6">
                {interviewers.map((interviewer) => (
                  <Card key={interviewer.id} className="p-6">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-2">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">{interviewer.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {interviewer.text}
                        </p>
                  </div>
                  <div className="text-center">
                    <Image
                          src={interviewer.icon.url}
                          alt={interviewer.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto mb-4"
                    />
                  </div>
                </div>
              </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card className="p-4">
              <div className="relative">
                <Input placeholder="Search..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </Card>

            {/* Categories */}
            <Card className="p-4">
              <h3 className="font-bold text-gray-900 mb-4">カテゴリー</h3>
              <div className="space-y-2">
                {["ライドシェアトレンド", "法制度", "ご利用者の皆様", "事業者の皆様", "インタビュー"].map(
                  (category, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-sm text-gray-700">{category}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  ),
                )}
              </div>
            </Card>

            {/* Advertisement */}
            <Card className="p-4 bg-gradient-to-br from-orange-400 to-orange-600 text-white">
              <div className="text-center">
                <h3 className="font-bold mb-2">タクシー業界で</h3>
                <h3 className="font-bold mb-4">ご活躍されたい方へ</h3>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Professional"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <Button variant="secondary" className="w-full">
                  RIDE JOB
                </Button>
                <p className="text-xs mt-2 opacity-90">for SSW</p>
                <p className="text-xs opacity-75">
                  業界未経験者歓迎
                  <br />
                  充実した研修制度
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
