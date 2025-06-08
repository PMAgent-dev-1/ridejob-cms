"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agreeToPrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreeToPrivacy: checked,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "入力エラー",
        description: "必須項目をすべて入力してください。",
        variant: "destructive",
      })
      return
    }

    if (!formData.agreeToPrivacy) {
      toast({
        title: "確認エラー",
        description: "プライバシーポリシーに同意してください。",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "送信完了",
        description: "お問い合わせを受け付けました。担当者より3営業日以内にご連絡いたします。",
      })

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        agreeToPrivacy: false,
      })
    } catch (error) {
      toast({
        title: "送信エラー",
        description: "送信に失敗しました。しばらく時間をおいて再度お試しください。",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
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
