import Image from "next/image"
import Link from "next/link"
import { Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"
import { getCategory, getBlogs, getCategories } from "@/lib/microcms"

interface CategoryPageProps {
  params: { slug: string }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  
  const category = await getCategory(slug);
  if (!category) {
    notFound();
  }
  
  const blogsData = await getBlogs({ filters: `category[equals]${category.id}` })
  const blogs = blogsData.contents

  const allCategories = (await getCategories()).contents;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-600 relative overflow-hidden">
        <Image
          src="https://picsum.photos/seed/ridejob-category/1200/300"
          alt="Category hero"
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
              <span className="text-gray-900">{category.name}</span>
            </nav>

            {/* Category Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h2>
              {/* <p className="text-gray-600">{category.description}</p> */}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {blogs.map((blog) => {
                const blogUrl = blog.category?.slug === 'special-feature'
                  ? `/blogs/special/${blog.slug}`
                  : `/blogs/${blog.slug}`;
                return (
                <Card key={blog.id} className="overflow-hidden">
                    <Link href={blogUrl}>
                    <Image
                      src={blog.eyecatch?.url ?? "/placeholder.svg?height=200&width=300"}
                      alt={blog.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{blog.title}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                        {blog.category && <Badge variant="outline">{blog.category.name}</Badge>}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
                )
              })}
            </div>

            {/* Pagination - to be implemented */}
            {/* <div className="flex justify-center mt-12"> ... </div> */}
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
                {allCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className={`flex items-center justify-between py-3 px-3 rounded-lg border transition-colors ${
                      slug === cat.slug ? "bg-blue-50 border-blue-200 text-blue-700" : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-sm font-medium">{cat.name}</span>
                    <div className="flex items-center space-x-2">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Advertisement */}
            <Card className="p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 text-center">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  タクシー業界に
                  <br />
                  ご興味のある方へ
                </h3>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Professional"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full mb-2">一度相談してみる【無料】</Button>
              </div>
              <div className="bg-white p-4 text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">RIDE JOB</div>
                <p className="text-sm text-gray-600">
                  業界未経験者歓迎
                  <br />
                  充実した研修制度
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
