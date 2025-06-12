import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] overflow-hidden">
          {/* Sky background */}
          <Image
            src="https://picsum.photos/seed/sky/1600/500"
            alt="Blue sky background"
            fill
            priority
            className="object-cover w-full h-full"
          />

          {/* Foreground contents */}
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl">
              未経験でも年収600万円以上可能
            </h1>
            <p className="text-white text-xl md:text-3xl font-bold mb-8 max-w-2xl">
              あなたに最適なタクシー会社が必ず見つかる！！
            </p>
            <Link href="https://ridejob.pmagent.jp/" target="_blank" rel="noopener noreferrer" className="w-fit">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-xl rounded-full">
                無料相談はこちら
              </Button>
            </Link>
          </div>

          {/* Decorative foreground (cars & person) */}
          <Image
            src="https://picsum.photos/seed/cars/600/200"
            alt="Taxi cars"
            width={600}
            height={200}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-40 md:h-56"
          />
          <Image
            src="https://picsum.photos/seed/person/400/500"
            alt="Presenter"
            width={400}
            height={500}
            className="absolute bottom-0 right-10 hidden md:block w-auto h-96"
          />
        </section>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">私たちのミッション</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              RIDE JOBは、ドライバー業界の魅力と可能性を、より多くの人々に伝えるために生まれました。ライドシェア、タクシー、トラック、バスなど、多様な働き方が存在するこの業界で、一人ひとりが自分に合ったキャリアを見つけられるよう、最新で正確な情報を提供することを使命としています。
                </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">事業内容</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>ドライバー業界に関するニュース・コラムの配信</li>
              <li>第一線で活躍する企業やドライバーへのインタビュー</li>
              <li>法制度や働き方に関する解説コンテンツ</li>
              <li>業界に特化した求人情報の提供</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
