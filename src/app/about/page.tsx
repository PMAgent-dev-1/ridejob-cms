"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ChevronDown, ChevronUp } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
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
      <Footer />
    </div>
  )
}

function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqItems = [
    {
      question: "業界未経験者でも転職できますか？",
      answer:
        "はい、未経験者の方でも転職可能です。研修制度が充実している企業をご紹介し、入社後のサポートも行っております。",
    },
    {
      question: "転職、どのくらいの期間で転職できますか？",
      answer: "個人差はありますが、平均的には1〜3ヶ月程度で転職が決まることが多いです。お急ぎの場合はご相談ください。",
    },
    {
      question: "地方から上京転職できますか？面接はどのように行いますか？",
      answer: "地方からの上京転職も可能です。オンライン面接の調整や、住居探しのサポートも行っております。",
    },
    {
      question: "タクシー業界の将来性について教えてください",
      answer:
        "ライドシェアの普及により業界は変化していますが、プロドライバーの需要は依然として高く、将来性のある業界です。",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-400 to-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">よくある質問</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <h3 className="font-semibold text-left text-gray-900">{item.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-6 pb-6 pt-0 border-t">
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
