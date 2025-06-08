import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-xl text-gray-600 mb-6">カテゴリが見つかりません</h2>
        <p className="text-gray-500 mb-8">お探しのカテゴリは存在しないか、移動された可能性があります。</p>
        <Button asChild>
          <Link href="/">トップページに戻る</Link>
        </Button>
      </div>
    </div>
  )
}
