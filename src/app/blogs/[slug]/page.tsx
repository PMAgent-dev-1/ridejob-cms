import Image from "next/image"
import Link from "next/link"
import { Search, ChevronRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { notFound } from "next/navigation"
import { getBlog, getCategories, getBlogs } from "@/lib/microcms"
import ArticleContent from "@/components/ArticleContent";

export async function generateStaticParams() {
  const { contents } = await getBlogs();

  return contents.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound()
  }
  
  const categories = (await getCategories()).contents;

  // Fetch related articles
  const { contents: relatedArticles } = blog.category
    ? await getBlogs({
        filters: `category[equals]${blog.category.id}[and]id[not_equals]${blog.id}`,
        limit: 3,
      })
    : { contents: [] };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-600 relative overflow-hidden">
        <Image
          src="/placeholder.svg?height=128&width=1200"
          alt="Article hero"
          width={1200}
          height={128}
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-blue-600">
                トップ
              </Link>
              <span>/</span>
              {blog.category && (
                <>
                  <Link href={`/category/${blog.category.slug}`} className="hover:text-blue-600">
                    {blog.category.name}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span className="text-gray-900">記事詳細</span>
            </nav>

            {/* Article Header */}
            <article className="bg-white">
              <header className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  {blog.category && <Badge className="bg-blue-600 text-white">{blog.category.name}</Badge>}
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>

                {blog.eyecatch && (
                  <div className="relative w-full min-h-[400px] mb-8">
                    <Image
                      src={blog.eyecatch.url}
                      alt={blog.title}
                      className="w-full h-full object-cover rounded-lg"
                      fill
                    />
                  </div>
                )}
              </header>

              {/* Article Content */}
              <ArticleContent blog={blog} />

              <Separator className="my-12" />

              {/* Related Articles */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">関連記事</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Card key={relatedArticle.id} className="overflow-hidden pt-0">
                      <Link href={`/blogs/${relatedArticle.slug}`}>
                        {relatedArticle.eyecatch ? (
                        <Image
                            src={relatedArticle.eyecatch.url}
                          alt={relatedArticle.title}
                          width={300}
                          height={150}
                          className="w-full h-32 object-cover"
                        />
                        ) : (
                          <div className="w-full h-32 bg-gray-200" />
                        )}
                        <CardContent className="p-4">
                          <p className="text-sm font-semibold text-gray-900 mb-2">{relatedArticle.title}</p>
                          <span className="text-xs text-gray-500">{new Date(relatedArticle.publishedAt).toLocaleDateString()}</span>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </section>
            </article>
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

            {/* Contents/Categories */}
            <Card className="p-4">
              <div className="bg-gray-900 text-white p-3 -m-4 mb-4">
                <h3 className="font-bold text-center">コンテンツ</h3>
              </div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between py-3 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium">{cat.name}</span>
                    <div className="flex items-center space-x-2">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Table of Contents */}
            <Card className="p-4">
              <h3 className="font-bold text-gray-900 mb-4">目次</h3>
              <nav className="space-y-2 text-sm">
                <Link href="#" className="block text-blue-600 hover:underline">
                  ライドシェア制度開始から1年の現状
                </Link>
                <Link href="#" className="block text-blue-600 hover:underline pl-4">
                  主要な変化点
                </Link>
                <Link href="#" className="block text-blue-600 hover:underline">
                  地域別の取り組み状況
                </Link>
                <Link href="#" className="block text-blue-600 hover:underline pl-4">
                  都市部での展開
                </Link>
                <Link href="#" className="block text-blue-600 hover:underline pl-4">
                  地方都市での展開
                </Link>
                <Link href="#" className="block text-blue-600 hover:underline">
                  今後の課題と展望
                </Link>
                <Link href="#" className="block text-blue-600 hover:underline">
                  まとめ
                </Link>
              </nav>
            </Card>

            {/* Banner */}
            <Card className="p-0 overflow-hidden">
              <Link href="https://ridejob.pmagent.jp/" target="_blank" rel="noopener noreferrer">
                <Image src="/form.jpg" alt="RIDE JOB 応募バナー" width={600} height={300} className="w-full h-auto" />
              </Link>
            </Card>
            {/* SSW Banner */}
            <Card className="p-0 overflow-hidden">
              <Link href="https://ssw.ridejob.jp/ssw" target="_blank" rel="noopener noreferrer">
                <Image src="/ssw.png" alt="SSW サービスバナー" width={600} height={300} className="w-full h-auto" />
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
