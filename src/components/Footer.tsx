import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCategories } from "@/lib/microcms";

export async function Footer() {
  const categoriesData = await getCategories();
  const categories = categoriesData.contents;

  return (
    <>
      {/* CTA Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://picsum.photos/seed/ridejob-footer/1200/300"
            alt="Tokyo cityscape"
            width={1200}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ドライバー業界で、
            <br />
            新たなキャリアを築きませんか？
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            RIDE JOBでは、未経験者からベテランまで、あなたのスキルや希望に合った求人情報を提供しています。
            まずは、お気軽にご相談ください。
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 text-lg">
            求人情報を見る
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div className="space-y-2">
              <Link href="/">
                <Image src="/logo.png" alt="RIDE JOB" width={160} height={48} className="h-12 w-auto" />
              </Link>
              <p className="text-xs text-blue-600 font-bold">ライドジョブ</p>
              <p className="text-gray-600 text-sm">
                ドライバー業界の魅力発信メディア
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">CATEGORIES</h4>
              <ul className="space-y-2 text-gray-600">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/category/${cat.slug}`} className="hover:text-blue-600">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">LEGAL</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="https://pmagent.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">運営会社</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-600">プライバシーポリシー</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">SEARCH</h4>
              <div className="relative">
                <Input placeholder="Search..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-xs text-gray-500">
            <p>&copy; 2025 RIDE JOB.　All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 