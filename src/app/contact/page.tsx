"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">お問い合わせ</h1>
          <p className="text-gray-600 text-center mb-8">
            ご質問・ご相談など、お気軽にお問い合わせください。
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
              <Input id="name" placeholder="山田 太郎" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
              <Input id="email" type="email" placeholder="hello@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ内容</label>
              <Textarea id="message" placeholder="お問い合わせ内容をご入力ください..." rows={6} />
            </div>
            <div className="text-center">
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                送信する
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
