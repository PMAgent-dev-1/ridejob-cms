import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-xl text-gray-600 mb-6">記事が見つかりません</h2>
        <p className="text-gray-500 mb-8">お探しの記事は存在しないか、移動された可能性があります。</p>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link href="/">トップページに戻る</Link>
          </Button>
          <Button asChild>
            <Link href="/category/mobility-trend">記事一覧を見る</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
