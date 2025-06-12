"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow container mx-auto px-4 py-12 max-w-2xl">
        {/* Page Header */}
        <div className="text-center mb-10">
          <p className="text-2xl font-extrabold text-primary tracking-wide">Contact /</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">お問い合わせ</h1>
          <p className="text-gray-700 leading-relaxed">
            RIDE JOB へのお問い合わせは、こちらからお願いいたします。お問い合わせの内容によっては、お時間をいただく場合やお答えできない場合がございます。あらかじめ、ご了承ください。
          </p>
        </div>

        <form
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);

            if (!formData.get("agree")) {
              alert("プライバシーポリシーを確認し、同意してください。");
              return;
            }

            const payload = {
              name: formData.get("name") as string,
              company: formData.get("company") as string,
              email: formData.get("email") as string,
              phone: formData.get("phone") as string,
              message: formData.get("message") as string,
            };

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });

              if (res.ok) {
                alert("送信が完了しました。ありがとうございました。");
                form.reset();
              } else {
                alert("送信に失敗しました。時間を置いて再度お試しください。");
              }
            } catch (error) {
              console.error(error);
              alert("送信に失敗しました。ネットワークを確認してください。");
            }
          }}
        >
          {/* 名前 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              お名前 <span className="ml-1 inline-block rounded bg-primary px-1 py-0.5 text-[10px] font-semibold text-white align-middle">必須</span>
            </label>
            <Input name="name" id="name" required placeholder="お名前を入力してください" className="border-2 border-primary rounded-none h-12" />
          </div>

          {/* 会社名 */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">会社名</label>
            <Input name="company" id="company" placeholder="会社名を入力してください" className="border-2 border-primary rounded-none h-12" />
          </div>

          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              メールアドレス <span className="ml-1 inline-block rounded bg-primary px-1 py-0.5 text-[10px] font-semibold text-white align-middle">必須</span>
            </label>
            <Input name="email" id="email" type="email" required placeholder="メールアドレスを入力してください" className="border-2 border-primary rounded-none h-12" />
          </div>

          {/* 電話番号 */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">電話番号</label>
            <Input name="phone" id="phone" type="tel" placeholder="電話番号を入力してください" className="border-2 border-primary rounded-none h-12" />
          </div>

          {/* お問い合わせ詳細 */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              お問い合わせの詳細 <span className="ml-1 inline-block rounded bg-primary px-1 py-0.5 text-[10px] font-semibold text-white align-middle">必須</span>
            </label>
            <Textarea name="message" id="message" required rows={6} placeholder="お問合せ内容をご記載ください。" className="border-2 border-primary rounded-none" />
          </div>

          {/* プライバシーポリシー */}
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Checkbox id="agree-policy" name="agree" required />
              <label htmlFor="agree-policy" className="select-none">
                <a href="/privacy" target="_blank" className="text-green-600 underline">プライバシーポリシー</a> を確認する
              </label>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-white rounded-full px-16 py-3 text-lg font-bold">
              送信
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
