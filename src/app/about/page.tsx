"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import React from "react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[480px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=2100&q=80')] bg-cover bg-center py-12">
          {/* Foreground contents */}
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4 relative z-10">
            {/* Left copy */}
            <div className="max-w-xl text-center md:text-left space-y-6">
              <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
                未経験でも年収600万円以上可能
              </h1>
              <p className="text-white text-xl md:text-3xl font-bold">
                あなたに最適なタクシー会社が必ず見つかる！！
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                <Link href="https://ridejob.pmagent.jp/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-xl rounded-full">
                    無料相談はこちら
                  </Button>
                </Link>
                {/* Taxi image */}
                <Image
                  src="/taxi.png"
                  alt="タクシー"
                  width={220}
                  height={120}
                  className="w-auto h-20 sm:h-24 md:h-28 hidden sm:block"
                  priority
                />
              </div>
            </div>

            {/* Right person image (hidden on small) */}
            <Image
              src="/hero-person.png"
              alt="Presenter"
              width={320}
              height={420}
              className="w-auto h-[420px] hidden sm:block"
            />
          </div>
        </section>
        
        {/* Support Section */}
        <section className="py-16">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            ライドジョブの無料転職サポート
          </h2>

          <div className="container mx-auto px-4 grid gap-12 md:grid-cols-3">
            {/* Card 1 */}
            <div className="text-center">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/NxqgM9xmW1/s-2048x2047_v-frms_webp_8c57fcee-5ec5-483e-bbd1-3e067d4d46f2.png"
                alt="サポート1"
                width={400}
                height={300}
                className="w-full h-[260px] object-cover rounded-xl mb-6"
              />
              <p className="text-lg font-semibold leading-relaxed">
                東京・大阪の優良タクシー会社
                <br />
                社300社以上ご紹介可能です
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/VGOKv9jMWn/s-1024x1024_v-fs_webp_38371405-eca0-413a-861a-441ea5d3ca57.jpg"
                alt="サポート2"
                width={400}
                height={300}
                className="w-full h-[260px] object-cover rounded-xl mb-6"
              />
              <p className="text-lg font-semibold leading-relaxed">
                応募書類の添削や面接対策も徹底サポートするので、安心して選考に臨めます。
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/VGOKv9jMWn/s-1024x1024_v-fs_webp_ee3b6817-60f8-49e1-a932-5717195962c5.jpg"
                alt="サポート3"
                width={400}
                height={300}
                className="w-full h-[260px] object-cover rounded-xl mb-6"
              />
              <p className="text-lg font-semibold leading-relaxed">
                面接日程や諸条件の調整はもちろん、内定辞退の手続きも代行します。
              </p>
            </div>
          </div>
        </section>

                {/* Contact CTA Section */}
                <section className="relative w-full py-20 bg-gradient-to-r from-sky-200 to-sky-500 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-12">まずはお気軽にご相談ください</h2>

          <div className="flex flex-col items-center gap-10">
            {/* Web consult button */}
            <Link href="https://ridejob.pmagent.jp/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-12 py-6 text-xl rounded-full shadow-xl border-2 border-white">
                ▶ 無料相談はこちら
              </Button>
            </Link>

            {/* Phone box */}
            <div className="bg-white text-gray-900 px-12 py-6 rounded-full shadow-xl inline-block border-2 border-gray-900">
              <div className="text-sm font-semibold tracking-wide mb-2">電話窓口</div>
              <div className="text-2xl font-bold tracking-wider">03-6824-7476</div>
            </div>
          </div>
        </section>

        
        {/* Features Section */}
        <section className="py-24 bg-white">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-16 tracking-wide">
            ライドジョブの特徴
          </h2>

          <div className="container mx-auto px-4 grid gap-y-16 md:grid-cols-3 md:gap-x-12 max-w-6xl">
            {/* Feature 1 */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
                選び抜かれた優良タクシー求人をご紹介
              </h3>
              <p className="text-gray-700 leading-relaxed">
                独自のネットワークを活かし、厳しい基準で選定したタクシー会社のみをご紹介。高待遇・働きやすい環境の求人をご提案します。
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
                年収600万円以上も目指せる
              </h3>
              <p className="text-gray-700 leading-relaxed">
                固定給+歩合制の給与体系で、しっかり稼げる環境を用意。未経験からでも、頑張り次第で高収入を実現できます。
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
                二種免許の取得費用は全額サポート！負担ゼロでスタート可能
              </h3>
              <p className="text-gray-700 leading-relaxed">
                タクシー業界への第一歩となる二種免許取得を完全サポート。費用は企業負担のため、未経験の方も安心して転職できます。
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
                タクシー業界を熟知した専門コンサルタントが徹底サポート
              </h3>
              <p className="text-gray-700 leading-relaxed">
                業界経験豊富なコンサルタントが、あなたに最適な会社選びをお手伝い。働き方や収入面などの不安を解消し、ベストな選択をサポートします。
              </p>
            </div>

            {/* Feature 5 */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
                上京希望者の転職成功実績が豊富！地方からの挑戦も安心
              </h3>
              <p className="text-gray-700 leading-relaxed">
                東京・大阪での勤務を希望する地方在住者向けに、引っ越しや住居探しもサポート。これまで多くの方が地方からの転職を成功させています。
              </p>
            </div>

            {/* Feature 6 */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
                未経験者でも安心の転職支援サービス！ゼロからのスタートを応援
              </h3>
              <p className="text-gray-700 leading-relaxed">
                未経験からの転職を成功させるために、業界知識のレクチャーや面接対策、働き方の相談までトータルでサポートします。
              </p>
            </div>
          </div>
        </section>

        
        
        {/* Flow Section */}
        <section className="py-24 bg-gray-50">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-16 tracking-wide">
            転職までの流れ
          </h2>

          <div className="container mx-auto px-4 grid gap-y-20 gap-x-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/VGOKv9jMWn/s-843x573_193d53af-086b-474a-bb44-822924cba476.svg"
                alt="無料相談"
                width={400}
                height={300}
                className="h-40 w-auto object-contain mb-6 mx-auto"
              />
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mr-3">
                  1
                </span>
                <h3 className="text-lg md:text-xl font-semibold">無料相談</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                転職をお考えでも、まずは気軽にご相談ください。業界の現状やキャリアの可能性を丁寧にご説明します。無料の電話相談を受付中！
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/VGOKv9jMWn/s-842x843_a7b2d3ae-007a-4dea-a992-08e1e3ba795c.svg"
                alt="面談・ヒアリング"
                width={400}
                height={300}
                className="h-40 w-auto object-contain mb-6 mx-auto"
              />
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mr-3">
                  2
                </span>
                <h3 className="text-lg md:text-xl font-semibold">面談・ヒアリング</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                専任コンサルタントが、あなたの経歴と希望条件をヒアリング。転職すべきか迷っているなどのお悩みもご相談いただけます。
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/VGOKv9jMWn/s-579x564_90a6bb48-daa9-469e-9a5f-610a8bece842.svg"
                alt="業界知識を徹底解説"
                width={400}
                height={300}
                className="h-40 w-auto object-contain mb-6 mx-auto"
              />
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mr-3">
                  3
                </span>
                <h3 className="text-lg md:text-xl font-semibold">業界知識を徹底解説</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                タクシー業界の最新動向や給与体系、メリット・デメリットなどを詳しくお伝えします。「知らなかった！」という情報がきっと見つかります。
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/NxqgM9xmW1/s-1452x1410_v-fms_webp_84693a34-61a7-4a6d-a5cf-c6e0336ebb91.png"
                alt="求人紹介"
                width={400}
                height={300}
                className="h-40 w-auto object-contain mb-6 mx-auto"
              />
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mr-3">
                  4
                </span>
                <h3 className="text-lg md:text-xl font-semibold">求人紹介</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                希望条件や性格、働き方にマッチする企業をご紹介。求人票では分からない社風や実際の雰囲気までお伝えします。
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/NxqgM9xmW1/s-1564x1403_v-fms_webp_1e22a9b5-27c2-4f18-96f7-445ef095b429.png"
                alt="応募書類添削"
                width={400}
                height={300}
                className="h-40 w-auto object-contain mb-6 mx-auto"
              />
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mr-3">
                  5
                </span>
                <h3 className="text-lg md:text-xl font-semibold">応募書類添削</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                履歴書・職務経歴書のブラッシュアップを行い、魅力が伝わる書類に仕上げます。選考通過率を高めるアドバイスも提供！
              </p>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/VGOKv9jMWn/s-833x633_c91fa006-97aa-4601-9d25-aa85c75a3f33.svg"
                alt="面接対策"
                width={400}
                height={300}
                className="h-40 w-auto object-contain mb-6 mx-auto"
              />
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mr-3">
                  6
                </span>
                <h3 className="text-lg md:text-xl font-semibold">面接対策</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                面接本番に向けてシミュレーションや模擬面接を実施。自信を持って臨めるよう徹底サポートします。
              </p>
            </div>

            {/* Step 7 */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/NxqgM9xmW1/s-1075x1126_v-fs_webp_7c5dbd1b-dd3f-4dc6-8fa0-e5faa584d9bb.png"
                alt="内定・入社"
                width={400}
                height={300}
                className="h-40 w-auto object-contain mb-6 mx-auto"
              />
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mr-3">
                  7
                </span>
                <h3 className="text-lg md:text-xl font-semibold">内定・入社</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                入社日や条件の調整をサポート。「辞退を伝えにくい…」という場合でも代行対応いたしますのでご安心ください！
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="relative w-full py-24 bg-gradient-to-b from-sky-400 to-sky-200 bg-no-repeat bg-cover">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 text-white tracking-wide">
            よくある質問
          </h2>

          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            {[
              {
                q: "未経験で二種免許を持っていないけど大丈夫？",
                a:
                  "大丈夫です。みなさん入社決定後に二種免許を取得して頂いています。二種免許取得後は、各タクシー会社の研修センターにて親切丁寧に指導をいたします。また、二種免許の取得費用は各タクシー会社様が負担いたしますのでご安心ください。",
              },
              {
                q: "実際、どのくらい稼げるの？平均年収は？",
                a:
                  "タクシードライバーの給与形態は、完全歩合制・固定給と歩合給と賞与を組み合わせる形態・歩合給と賞与を組み合わせる形態などタクシー会社によって異なります。ご紹介させて頂くタクシー会社は年収400万円〜900万円の方がほとんどです。実は日本の平均年収よりも東京のタクシー会社の平均年収は高いです。中には年収1000万円を超える方もいます。",
              },
              {
                q: "地方から就職希望ですが、面接は東京まで行かないとだめですか？",
                a:
                  "地方から都内への転職希望者が多いため、ご紹介させて頂くタクシー会社様では地方在住者の要望に合わせて出張面接・セミナーを実施している会社や電話面接を実施してくれる企業がありますので、面接のために東京のタクシー会社まで訪問をしなくても大丈夫です。",
              },
              {
                q: "タクシー会社との面接後に断ることは可能ですか？",
                a:
                  "もちろん可能です。入社前のどの段階でも辞退が可能ですので、内定後でもご自身で言いづらい場合は担当キャリアコンサルタントにご相談ください。あなたの代役として内定辞退をタクシー会社へお伝えしますのでご安心ください。",
              },
            ].map(({ q, a }, idx) => {
              const [open, setOpen] = React.useState(idx === 0)
              return (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold shrink-0">
                        Q
                      </span>
                      <span className="font-semibold text-base md:text-lg leading-snug">
                        {q}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-500">
                      {open ? "－" : "＋"}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                      {a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
                
      </main>
    </div>
  )
}
