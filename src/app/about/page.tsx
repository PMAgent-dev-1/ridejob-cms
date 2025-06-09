import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
      {/* Hero Section */}
        <div className="relative h-64 bg-gray-800">
          <Image
            src="https://picsum.photos/seed/ridejob-about/1200/400"
            alt="About us"
            width={1200}
            height={400}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">RIDE JOBについて</h1>
          </div>
        </div>
        
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
